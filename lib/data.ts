import { cache } from "react";
import opportunitiesSeed from "@/seed/opportunities.json";
import organizationsSeed from "@/seed/organizations.json";
import careerPathwaysSeed from "@/seed/career_pathways.json";
import bayworkTrainingSeed from "@/seed/baywork_training_programs.json";
import resourcesSeed from "@/seed/verified_current_resources.json";
import workPermitSeed from "@/seed/work_permit_info.json";
import coordinatorsSeed from "@/seed/school_career_coordinators.json";
import type { EmployerSubmission, ListingReport, Prisma, Resource } from "@prisma/client";
import { databaseIsConfigured, prisma } from "@/lib/prisma";
import {
  findMinAge,
  isPaid,
  normalizeOpportunityType,
  mapVerificationStatus,
  workPermitLikely
} from "@/lib/seed-mapping";

type SeedOpportunity = (typeof opportunitiesSeed)[number];
type CareerPathwaySeed = (typeof careerPathwaysSeed)[number];
type BayworkTrainingSeed = (typeof bayworkTrainingSeed)[number];
type DbOpportunity = Prisma.OpportunityGetPayload<{ include: { organization: true } }>;
type TrainingResourceData = {
  location?: string | null;
  pathway?: string | null;
  category?: string | null;
  source_file?: string | null;
  source_row?: string | null;
};
type DbTrainingResource = Omit<Resource, "data"> & {
  data: TrainingResourceData | null;
};

export type LocationOption = {
  value: string;
  label: string;
  kind: "code";
};

const locationCodeOptions: LocationOption[] = [
  { value: "code:94010", label: "94010 - Burlingame", kind: "code" },
  { value: "code:94401", label: "94401 - San Mateo", kind: "code" },
  { value: "code:94402", label: "94402 - San Mateo / Baywood", kind: "code" },
  { value: "code:94025", label: "94025 - Menlo Park", kind: "code" },
  { value: "code:94301", label: "94301 - Palo Alto", kind: "code" },
  { value: "code:94070", label: "94070 - San Carlos", kind: "code" },
  { value: "code:94102", label: "94102 - San Francisco", kind: "code" },
  { value: "code:94901", label: "94901 - Marin / San Rafael", kind: "code" },
  { value: "code:95050", label: "95050 - Santa Clara", kind: "code" },
  { value: "code:650", label: "650 - Peninsula phone area", kind: "code" },
  { value: "code:415", label: "415/628 - San Francisco phone area", kind: "code" },
  { value: "code:408", label: "408/669 - South Bay phone area", kind: "code" },
  { value: "code:510", label: "510/341 - East Bay phone area", kind: "code" },
  { value: "code:707", label: "707 - North Bay phone area", kind: "code" }
];

const locationCodeMatches: Record<string, string[]> = {
  "94010": ["burlingame"],
  "94401": ["san mateo", "san mateo county"],
  "94402": ["san mateo", "baywood", "sunnybrae"],
  "94025": ["menlo park"],
  "94301": ["palo alto"],
  "94070": ["san carlos"],
  "94102": ["san francisco"],
  "94901": ["marin", "san francisco, marin"],
  "95050": ["santa clara", "south bay"],
  "650": [
    "burlingame",
    "hillsborough",
    "menlo park",
    "palo alto",
    "san bruno",
    "san carlos",
    "san mateo",
    "san mateo county",
    "sfo",
    "peninsula"
  ],
  "415": ["san francisco", "marin"],
  "408": ["san jose", "santa clara", "south bay"],
  "510": ["oakland", "berkeley", "east bay"],
  "707": ["northern california", "north bay"]
};

const nearbyLocationCodes: Record<string, string[]> = {
  "94010": ["94401", "94402", "94070", "650"],
  "94401": ["94402", "94010", "94070", "650"],
  "94402": ["94401", "94010", "94070", "650"],
  "94025": ["94301", "94070", "650"],
  "94301": ["94025", "94070", "650", "408"],
  "94070": ["94401", "94402", "94010", "94025", "650"],
  "94102": ["415", "650", "94901"],
  "94901": ["415", "94102", "707"],
  "95050": ["408", "94301", "650"],
  "650": ["94010", "94401", "94402", "94025", "94301", "94070", "415", "408"],
  "415": ["94102", "94901", "650"],
  "408": ["95050", "94301", "650", "510"],
  "510": ["408", "650", "415"],
  "707": ["94901", "415"]
};

export type OpportunityView = {
  id: string;
  title: string;
  type: string;
  organizationName: string;
  summary: string;
  description: string;
  city: string;
  locationText: string;
  applyUrl: string;
  contactText: string;
  minAge: number | null;
  gradeRequirement: string;
  paid: boolean | null;
  compensationText: string;
  deadlineText: string;
  scheduleText: string;
  category: string;
  tags: string[];
  sourceName: string;
  sourceFile: string;
  sourceSheet: string;
  sourceRow: string;
  sourceUrl: string;
  sourceRecordId: string;
  currentStatus: string;
  verificationStatus: string;
  trustLevel: string;
  highlighted: boolean;
  pinned: boolean;
  hidden: boolean;
  expiresAt: Date | string | null;
  lastVerifiedAt: Date | string | null;
  workPermitLikely: boolean;
};

const trustRankByLabel: Record<string, number> = {
  "Archived": 0,
  "Hidden": 1,
  "Needs verification": 2,
  "Source lead": 3,
  "Verified source": 4,
  "Admin created": 5,
  "Admin highlighted": 6,
  "Admin approved": 7,
  "Admin approved submission": 7
};

export function trustRank(opportunity: Pick<OpportunityView, "trustLevel" | "verificationStatus" | "hidden">) {
  if (opportunity.hidden) return 1;
  if (opportunity.verificationStatus === "ARCHIVED") return 0;
  return trustRankByLabel[opportunity.trustLevel] ?? 2;
}

export function displayTrustLevel(opportunity: Pick<OpportunityView, "trustLevel" | "verificationStatus" | "hidden">) {
  if (opportunity.hidden) return "Hidden";
  if (opportunity.verificationStatus === "ARCHIVED") return "Archived";
  return opportunity.trustLevel || "Needs verification";
}

function inferredTrustLevel(record: {
  trustLevel?: string | null;
  verificationStatus: string;
  highlighted?: boolean;
  hidden?: boolean;
  applyUrl?: string;
  sourceUrl?: string;
  contactText?: string;
  sourceName?: string;
}) {
  if (record.hidden) return "Hidden";
  if (record.verificationStatus === "ARCHIVED") return "Archived";
  if (record.trustLevel && record.trustLevel !== "Source lead") return record.trustLevel;
  if (record.highlighted) return "Admin highlighted";
  if (record.verificationStatus === "ACTIVE_VERIFIED") return "Verified source";
  if (record.applyUrl || record.sourceUrl || record.contactText) return "Source lead";
  if (record.sourceName) return "Needs verification";
  return "Needs verification";
}

export function paginate<T>(items: T[], page: number, pageSize: number) {
  const totalPages = Math.max(Math.ceil(items.length / pageSize), 1);
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    currentPage,
    pageSize,
    totalItems: items.length,
    totalPages
  };
}

function titleCaseStatus(value: string) {
  return value
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function displayType(value: string) {
  if (value === "PROGRAM") return "Program";
  return titleCaseStatus(value);
}

export function displayStatus(value: string) {
  if (value === "ACTIVE_VERIFIED") return "Verified";
  if (value === "ARCHIVED") return "Archived";
  return "Unverified";
}

export function publicVerificationValue(value: string) {
  if (value === "ACTIVE_VERIFIED") return "ACTIVE_VERIFIED";
  if (value === "ARCHIVED") return "ARCHIVED";
  return "UNVERIFIED";
}

export function displayDeadline(value?: string | null) {
  if (!value) return "Not listed";
  const iso = value.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/);
  if (iso) {
    return formatDate(new Date(`${iso[1]}-${iso[2]}-${iso[3]}T00:00:00`));
  }

  const monthDate = value.match(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December|Jan\.?|Feb\.?|Mar\.?|Apr\.?|Jun\.?|Jul\.?|Aug\.?|Sep\.?|Sept\.?|Oct\.?|Nov\.?|Dec\.?)\s+(\d{1,2})(?:st|nd|rd|th)?[,]?\s+(20\d{2})\b/i
  );

  if (monthDate) {
    return formatDate(new Date(`${monthDate[1]} ${monthDate[2]}, ${monthDate[3]}`));
  }

  return value;
}

export function displayAgeGrade(opportunity: Pick<OpportunityView, "minAge" | "gradeRequirement">) {
  if (opportunity.minAge) return `${opportunity.minAge} Years`;

  const requirement = opportunity.gradeRequirement.trim();
  if (!requirement) return "Not listed";

  const plainAge = requirement.match(/^(\d{1,2})\+?$/);
  if (plainAge) return `${plainAge[1]} Years`;

  const ageText = requirement.match(/\b(?:age|ages|minimum age|at least)\D{0,12}(\d{1,2})\+?/i);
  if (ageText) return `${ageText[1]} Years`;

  const gradeRange = requirement.match(/\b(?:grades?|grade)\s*(\d{1,2})\s*(?:-|to|through)\s*(\d{1,2})\b/i);
  if (gradeRange) return `Grade ${gradeRange[1]}-${gradeRange[2]}`;

  const grade = requirement.match(/\b(?:grades?|grade)\s*(\d{1,2})\b/i);
  if (grade) return `Grade ${grade[1]}`;

  const ordinalGrade = requirement.match(/\b(\d{1,2})(?:st|nd|rd|th)\s*grade\b/i);
  if (ordinalGrade) return `Grade ${ordinalGrade[1]}`;

  if (/\bsophomore|junior|senior|freshman\b/i.test(requirement)) {
    return requirement
      .replace(/\bfreshman\b/gi, "Grade 9")
      .replace(/\bsophomore\b/gi, "Grade 10")
      .replace(/\bjunior\b/gi, "Grade 11")
      .replace(/\bsenior\b/gi, "Grade 12");
  }

  return requirement;
}

export function displayPay(opportunity: Pick<OpportunityView, "paid" | "compensationText">) {
  const compensation = opportunity.compensationText.trim();
  if (!compensation || /^n\/?a$/i.test(compensation) || /^not listed$/i.test(compensation)) {
    if (opportunity.paid === true) return "Paid";
    if (opportunity.paid === false) return "Unpaid";
    return "Pay not listed";
  }
  return compensation;
}

function formatDate(date: Date) {
  if (Number.isNaN(date.getTime())) return "Not listed";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function cleanDisplayName(value?: string | null) {
  return (value ?? "")
    .replace(/\s*\(https?:\/\/[^)]+\)\s*/gi, "")
    .replace(/^Application\s*$/i, "")
    .trim();
}

function opportunityDisplayTitle(record: SeedOpportunity) {
  const title = cleanDisplayName(record.title);
  const orgName = cleanDisplayName(record.organization_name);
  const generic = ["internship", "program", "application", "job", "volunteer"].includes(title.toLowerCase());
  if (generic && orgName) return orgName;
  return title || orgName || "Opportunity";
}

function fromSeed(record: SeedOpportunity): OpportunityView {
  const paid = isPaid(record.compensation);
  const minAge = findMinAge(record.eligibility);
  const title = opportunityDisplayTitle(record);

  const opportunity = {
    id: record.id,
    title,
    type: normalizeOpportunityType(record.opportunity_type, record.title),
    organizationName: record.organization_name ?? "Unknown organization",
    summary: record.web_enrichment_notes ?? record.description ?? "",
    description: record.description ?? "",
    city: record.location ?? "",
    locationText: record.location ?? "",
    applyUrl: record.apply_or_info_url ?? record.all_urls?.[0] ?? "",
    contactText: record.contact ?? "",
    minAge,
    gradeRequirement: record.eligibility ?? "",
    paid,
    compensationText: record.compensation ?? "",
    deadlineText: record.deadline ?? "",
    scheduleText: record.time_or_schedule ?? "",
    category: record.category ?? "",
    tags: [record.category, record.opportunity_type].filter(Boolean) as string[],
    sourceName: record.source_confidence ?? "Counselor source data",
    sourceFile: record.source_file ?? "",
    sourceSheet: record.source_sheet ?? "",
    sourceRow: record.source_row ?? "",
    sourceUrl: record.apply_or_info_url ?? record.all_urls?.[0] ?? "",
    sourceRecordId: record.id,
    currentStatus: record.current_status ?? "needs_verification",
    verificationStatus: mapVerificationStatus(record.current_status, record.web_verification_status),
    trustLevel: record.web_verification_status === "verified_current_page" ? "Verified source" : "Source lead",
    highlighted: false,
    pinned: false,
    hidden: false,
    expiresAt: null,
    lastVerifiedAt: record.date_reviewed_or_posted ?? null,
    workPermitLikely: workPermitLikely(record.opportunity_type, paid, minAge)
  };
  return { ...opportunity, trustLevel: inferredTrustLevel(opportunity) };
}

function cleanProgramName(name?: string | null) {
  return (name ?? "Career program").replace(/\s*\(https?:\/\/[^)]+\)\s*$/i, "").trim();
}

function fromCareerPathway(record: CareerPathwaySeed): OpportunityView {
  const title = cleanProgramName(record.program_name ?? record.pathway);

  const opportunity = {
    id: record.id,
    title,
    type: "PROGRAM",
    organizationName: record.location ?? "Career training provider",
    summary: record.pathway ?? "",
    description: record.pathway ? `${record.pathway} career pathway program.` : "",
    city: record.location ?? "",
    locationText: record.location ?? "",
    applyUrl: record.urls?.[0] ?? "",
    contactText: "",
    minAge: null,
    gradeRequirement: "Check the program website for eligibility.",
    paid: null,
    compensationText: "",
    deadlineText: "",
    scheduleText: "",
    category: record.pathway ?? "Career pathway",
    tags: [record.pathway, "career pathway", "training program"].filter(Boolean) as string[],
    sourceName: "Career Training Programs source data",
    sourceFile: record.source_file ?? "",
    sourceSheet: "Career Pathways",
    sourceRow: record.source_row ?? "",
    sourceUrl: record.urls?.[0] ?? "",
    sourceRecordId: record.id,
    currentStatus: "needs_verification",
    verificationStatus: "NEEDS_REVIEW",
    trustLevel: "Source lead",
    highlighted: false,
    pinned: false,
    hidden: false,
    expiresAt: null,
    lastVerifiedAt: null,
    workPermitLikely: false
  };
  return { ...opportunity, trustLevel: inferredTrustLevel(opportunity) };
}

function fromBayworkTraining(record: BayworkTrainingSeed): OpportunityView {
  const title = cleanProgramName(record.program_name);

  const opportunity = {
    id: record.id,
    title,
    type: "PROGRAM",
    organizationName: record.location ?? "BAYWORK training provider",
    summary: record.category ?? "Training program from the BAYWORK source sheet.",
    description: record.category ?? "Training program from the BAYWORK source sheet.",
    city: record.location ?? "",
    locationText: record.location ?? "",
    applyUrl: record.urls?.[0] ?? "",
    contactText: "",
    minAge: null,
    gradeRequirement: "Check the program website for eligibility.",
    paid: null,
    compensationText: "",
    deadlineText: "",
    scheduleText: "",
    category: record.category ?? "Training program",
    tags: [record.category, "baywork", "training program"].filter(Boolean) as string[],
    sourceName: "Career Training Programs source data",
    sourceFile: record.source_file ?? "",
    sourceSheet: "Baywork Training Programs",
    sourceRow: record.source_row ?? "",
    sourceUrl: record.urls?.[0] ?? "",
    sourceRecordId: record.id,
    currentStatus: "needs_verification",
    verificationStatus: "NEEDS_REVIEW",
    trustLevel: "Source lead",
    highlighted: false,
    pinned: false,
    hidden: false,
    expiresAt: null,
    lastVerifiedAt: null,
    workPermitLikely: false
  };
  return { ...opportunity, trustLevel: inferredTrustLevel(opportunity) };
}

let seedOpportunityViewsCache: OpportunityView[] | null = null;

function getSeedOpportunityViews() {
  if (seedOpportunityViewsCache) return seedOpportunityViewsCache;

  seedOpportunityViewsCache = [
    ...opportunitiesSeed.map(fromSeed),
    ...careerPathwaysSeed.map(fromCareerPathway),
    ...bayworkTrainingSeed.map(fromBayworkTraining)
  ];
  return seedOpportunityViewsCache;
}

function fromDb(record: DbOpportunity): OpportunityView {
  const opportunity = {
    id: record.id,
    title: record.title,
    type: record.type,
    organizationName: record.organization?.name ?? record.organizationName ?? "Unknown organization",
    summary: record.summary ?? "",
    description: record.description ?? "",
    city: record.city ?? "",
    locationText: record.locationText ?? "",
    applyUrl: record.applyUrl ?? record.url ?? "",
    contactText: record.contactText ?? "",
    minAge: record.minAge,
    gradeRequirement: record.gradeRequirement ?? "",
    paid: record.paid,
    compensationText: record.compensationText ?? "",
    deadlineText: record.deadlineText ?? "",
    scheduleText: record.scheduleText ?? "",
    category: record.category ?? "",
    tags: record.tags ?? [],
    sourceName: record.sourceName ?? "Seed import",
    sourceFile: record.sourceFile ?? "",
    sourceSheet: record.sourceSheet ?? "",
    sourceRow: record.sourceRow ?? "",
    sourceUrl: record.sourceUrl ?? "",
    sourceRecordId: record.sourceRecordId ?? record.externalId ?? "",
    currentStatus: record.currentStatus ?? "",
    verificationStatus: record.verificationStatus,
    trustLevel: record.trustLevel,
    highlighted: record.highlighted,
    pinned: record.pinned,
    hidden: record.hidden,
    expiresAt: record.expiresAt,
    lastVerifiedAt: record.lastVerifiedAt,
    workPermitLikely: record.workPermitLikely
  };
  return { ...opportunity, trustLevel: inferredTrustLevel(opportunity) };
}

function fromDbResource(record: DbTrainingResource): OpportunityView {
  const opportunity = {
    id: record.externalId ?? record.id,
    title: record.title,
    type: "PROGRAM",
    organizationName: record.data?.location ?? "Career training provider",
    summary: record.summary ?? "",
    description: record.summary ?? "",
    city: record.data?.location ?? "",
    locationText: record.data?.location ?? "",
    applyUrl: record.url ?? "",
    contactText: "",
    minAge: null,
    gradeRequirement: "Check the program website for eligibility.",
    paid: null,
    compensationText: "",
    deadlineText: "",
    scheduleText: "",
    category: record.data?.pathway ?? record.data?.category ?? "Training program",
    tags: [record.data?.pathway, record.data?.category, "training program"].filter(Boolean) as string[],
    sourceName: "Seed import",
    sourceFile: record.data?.source_file ?? "",
    sourceSheet: record.type === "career_pathway" ? "Career Pathways" : "Training Programs",
    sourceRow: record.data?.source_row ?? "",
    sourceUrl: record.url ?? "",
    sourceRecordId: record.externalId ?? record.id,
    currentStatus: "",
    verificationStatus: record.verificationStatus,
    trustLevel: "Source lead",
    highlighted: false,
    pinned: false,
    hidden: false,
    expiresAt: null,
    lastVerifiedAt: record.lastVerifiedAt,
    workPermitLikely: false
  };
  return { ...opportunity, trustLevel: inferredTrustLevel(opportunity) };
}

const getOpportunityRecords = cache(async function getOpportunityRecords() {
  let records: OpportunityView[];

  if (databaseIsConfigured()) {
    try {
      const [dbRecords, pathwayRecords] = await Promise.all([
        prisma.opportunity.findMany({
          include: { organization: true },
          orderBy: [{ highlighted: "desc" }, { verificationStatus: "asc" }, { title: "asc" }]
        }),
        prisma.resource.findMany({
          where: {
            type: {
              in: ["career_pathway", "baywork_training_program"]
            }
          },
          orderBy: { title: "asc" }
        })
      ]);
      records = [...dbRecords.map(fromDb), ...pathwayRecords.map((record) => fromDbResource(record as DbTrainingResource))];
    } catch {
      records = getSeedOpportunityViews();
    }
  } else {
    records = getSeedOpportunityViews();
  }

  return records;
});

function filterOpportunities(
  records: OpportunityView[],
  filters?: {
  type?: string;
  location?: string;
  paid?: string;
  career?: string;
  verification?: string;
  age?: string;
  grade?: string;
  sort?: string;
  }
) {
  const locationFilter = filters?.location;
  if (locationFilter && locationFilter !== "all") {
    const strict = sortOpportunities(
      records.filter((record) => matchesNonLocationFilters(record, filters)),
      filters?.sort
    );
    const results = orderByLocationFit(strict, locationFilter).filter((record) =>
      matchesLocationFilter(record, locationFilter) || matchesNearbyLocationFilter(record, locationFilter)
    );

    if (results.length < 24) {
      appendUnique(results, strict);
    }

    if (results.length < 24) {
      const relaxedAgeGrade = sortOpportunities(
        records.filter((record) => matchesNonLocationFilters(record, filters, { relaxAgeGrade: true })),
        filters?.sort
      );
      appendUnique(results, orderByLocationFit(relaxedAgeGrade, locationFilter));
    }

    if (results.length < 24) {
      const relaxedPayUnknown = sortOpportunities(
        records.filter((record) =>
          matchesNonLocationFilters(record, filters, { relaxAgeGrade: true, relaxPayUnknown: true })
        ),
        filters?.sort
      );
      appendUnique(results, orderByLocationFit(relaxedPayUnknown, locationFilter));
    }

    return results;
  }

  const strict = sortOpportunities(
    records.filter((record) => matchesNonLocationFilters(record, filters)),
    filters?.sort
  );

  if (strict.length >= 24) return strict;

  const results = [...strict];
  const relaxedAgeGrade = sortOpportunities(
    records.filter((record) => matchesNonLocationFilters(record, filters, { relaxAgeGrade: true })),
    filters?.sort
  );
  appendUnique(results, relaxedAgeGrade);

  if (results.length < 24) {
    const relaxedPayUnknown = sortOpportunities(
      records.filter((record) => matchesNonLocationFilters(record, filters, { relaxAgeGrade: true, relaxPayUnknown: true })),
      filters?.sort
    );
    appendUnique(results, relaxedPayUnknown);
  }

  return results;
}

function matchesNonLocationFilters(
  record: OpportunityView,
  filters?: {
    type?: string;
    paid?: string;
    career?: string;
    verification?: string;
    age?: string;
    grade?: string;
  },
  options?: {
    relaxAgeGrade?: boolean;
    relaxPayUnknown?: boolean;
  }
) {
  if (filters?.type && filters.type !== "all" && record.type !== filters.type) return false;
  if (filters?.paid === "paid" && record.paid !== true) {
    if (!options?.relaxPayUnknown || record.paid !== null) return false;
  }
  if (filters?.paid === "unpaid" && record.paid !== false) {
    if (!options?.relaxPayUnknown || record.paid !== null) return false;
  }
  if (filters?.career && !matchesCareerTag(record, filters.career)) return false;
  if (
    filters?.verification &&
    filters.verification !== "all" &&
    publicVerificationValue(record.verificationStatus) !== filters.verification
  ) {
    return false;
  }
  if (!options?.relaxAgeGrade && filters?.age && !matchesAgeFilter(record, filters.age)) return false;
  if (!options?.relaxAgeGrade && filters?.grade && !matchesGradeFilter(record, filters.grade)) return false;
  return true;
}

function orderByLocationFit(records: OpportunityView[], locationFilter: string) {
  const exact: OpportunityView[] = [];
  const nearby: OpportunityView[] = [];
  const other: OpportunityView[] = [];

  for (const record of records) {
    if (matchesLocationFilter(record, locationFilter)) {
      exact.push(record);
    } else if (matchesNearbyLocationFilter(record, locationFilter)) {
      nearby.push(record);
    } else {
      other.push(record);
    }
  }

  return [...exact, ...nearby, ...other];
}

function appendUnique(target: OpportunityView[], additions: OpportunityView[]) {
  const seen = new Set(target.map((record) => record.id));
  for (const record of additions) {
    if (seen.has(record.id)) continue;
    target.push(record);
    seen.add(record.id);
  }
}

function sortOpportunities(records: OpportunityView[], sort?: string) {
  if (sort === "trust_asc") {
    return [...records].sort((a, b) => trustRank(a) - trustRank(b) || a.title.localeCompare(b.title));
  }
  if (sort === "trust_desc") {
    return [...records].sort((a, b) => trustRank(b) - trustRank(a) || a.title.localeCompare(b.title));
  }

  return records;
}

function matchesCareerTag(record: OpportunityView, query: string) {
  const searchText = [
    record.title,
    record.organizationName,
    record.description,
    record.summary,
    record.category,
    record.gradeRequirement,
    record.compensationText,
    record.scheduleText,
    record.locationText,
    record.tags.join(" ")
  ]
    .join(" ")
    .toLowerCase();

  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => searchText.includes(term));
}

export async function getOpportunities(filters?: {
  type?: string;
  location?: string;
  paid?: string;
  career?: string;
  verification?: string;
  age?: string;
  grade?: string;
  sort?: string;
}) {
  const records = await getOpportunityRecords();
  return filterOpportunities(
    records.filter((record) => !record.hidden),
    filters
  );
}

export async function getPinnedOpportunities() {
  const records = await getOpportunityRecords();
  return records
    .filter((record) => record.pinned && !record.hidden && record.verificationStatus !== "ARCHIVED")
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getLocationOptions(): LocationOption[] {
  return locationCodeOptions;
}

function matchesLocationFilter(record: OpportunityView, filter: string) {
  const locationText = record.locationText.toLowerCase();
  const city = record.city.toLowerCase();
  const haystack = `${locationText} ${city}`;

  if (filter.startsWith("code:")) {
    const code = filter.replace("code:", "");
    const matches = locationCodeMatches[code] ?? [];
    return matches.some((place) => haystack.includes(place));
  }
  return false;
}

function matchesNearbyLocationFilter(record: OpportunityView, filter: string) {
  if (!filter.startsWith("code:")) return false;
  const code = filter.replace("code:", "");
  const nearbyCodes = nearbyLocationCodes[code] ?? [];
  return nearbyCodes.some((nearbyCode) => matchesLocationFilter(record, `code:${nearbyCode}`));
}

function matchesAgeFilter(record: OpportunityView, ageFilter: string) {
  const age = Number(ageFilter);
  if (!Number.isFinite(age)) return true;
  if (!record.minAge) return true;
  return age >= record.minAge;
}

function matchesGradeFilter(record: OpportunityView, gradeFilter: string) {
  const grade = Number(gradeFilter);
  if (!Number.isFinite(grade)) return true;

  const requirement = record.gradeRequirement.toLowerCase();
  if (!requirement.trim()) return true;

  const normalized = requirement
    .replace(/\bfreshman\b/g, "grade 9")
    .replace(/\bsophomore\b/g, "grade 10")
    .replace(/\bjunior\b/g, "grade 11")
    .replace(/\bsenior\b/g, "grade 12");

  const ranges = [
    ...normalized.matchAll(/\b(?:grades?|grade)\s*(\d{1,2})\s*(?:-|to|through)\s*(\d{1,2})\b/g)
  ];
  if (ranges.some((match) => grade >= Number(match[1]) && grade <= Number(match[2]))) return true;

  const singleGrades = [
    ...normalized.matchAll(/\b(?:grades?|grade)\s*(\d{1,2})\b/g),
    ...normalized.matchAll(/\b(\d{1,2})(?:st|nd|rd|th)\s*grade\b/g)
  ].map((match) => Number(match[1]));

  if (singleGrades.length > 0) return singleGrades.includes(grade);

  return true;
}

export async function getOpportunity(id: string) {
  const records = await getOpportunities();
  return records.find((record) => record.id === id || record.sourceRecordId === id);
}

export async function getAdminOpportunities() {
  const records = await getOpportunityRecords();
  return records;
}

export async function getOpportunityStats() {
  const records = await getOpportunityRecords();
  let opportunityCount = 0;
  let needVerificationCount = 0;
  let workPermitReminderCount = 0;

  for (const record of records) {
    if (record.hidden) continue;
    opportunityCount += 1;
    if (record.verificationStatus !== "ACTIVE_VERIFIED") needVerificationCount += 1;
    if (record.workPermitLikely) workPermitReminderCount += 1;
  }

  return {
    opportunityCount,
    organizationCount: organizationsSeed.length,
    needVerificationCount,
    workPermitReminderCount
  };
}

export async function getAdminSubmissions() {
  if (!databaseIsConfigured()) return [] as EmployerSubmission[];
  try {
    return await prisma.employerSubmission.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch {
    return [] as EmployerSubmission[];
  }
}

export async function getListingReports() {
  if (!databaseIsConfigured()) return [] as ListingReport[];
  try {
    return await prisma.listingReport.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch {
    return [] as ListingReport[];
  }
}

export function getWorkPermitInfo() {
  return workPermitSeed;
}

export function getVerifiedResources() {
  return resourcesSeed;
}

export function getCoordinators() {
  return coordinatorsSeed;
}

export function getOrganizationCount() {
  return organizationsSeed.length;
}
