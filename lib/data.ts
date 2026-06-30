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
  hidden: boolean;
  expiresAt: Date | string | null;
  lastVerifiedAt: Date | string | null;
  workPermitLikely: boolean;
};

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
    return opportunity.paid ? "Paid" : "Unpaid";
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

  return {
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
    hidden: false,
    expiresAt: null,
    lastVerifiedAt: record.date_reviewed_or_posted ?? null,
    workPermitLikely: workPermitLikely(record.opportunity_type, paid, minAge)
  };
}

function cleanProgramName(name?: string | null) {
  return (name ?? "Career program").replace(/\s*\(https?:\/\/[^)]+\)\s*$/i, "").trim();
}

function fromCareerPathway(record: CareerPathwaySeed): OpportunityView {
  const title = cleanProgramName(record.program_name ?? record.pathway);

  return {
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
    hidden: false,
    expiresAt: null,
    lastVerifiedAt: null,
    workPermitLikely: false
  };
}

function fromBayworkTraining(record: BayworkTrainingSeed): OpportunityView {
  const title = cleanProgramName(record.program_name);

  return {
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
    hidden: false,
    expiresAt: null,
    lastVerifiedAt: null,
    workPermitLikely: false
  };
}

function getSeedOpportunityViews() {
  return [
    ...opportunitiesSeed.map(fromSeed),
    ...careerPathwaysSeed.map(fromCareerPathway),
    ...bayworkTrainingSeed.map(fromBayworkTraining)
  ];
}

function fromDb(record: DbOpportunity): OpportunityView {
  return {
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
    hidden: record.hidden,
    expiresAt: record.expiresAt,
    lastVerifiedAt: record.lastVerifiedAt,
    workPermitLikely: record.workPermitLikely
  };
}

function fromDbResource(record: DbTrainingResource): OpportunityView {
  return {
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
    hidden: false,
    expiresAt: null,
    lastVerifiedAt: record.lastVerifiedAt,
    workPermitLikely: false
  };
}

async function getOpportunityRecords() {
  let records: OpportunityView[];

  if (databaseIsConfigured()) {
    try {
      const dbRecords = await prisma.opportunity.findMany({
        include: { organization: true },
        orderBy: [{ highlighted: "desc" }, { verificationStatus: "asc" }, { title: "asc" }]
      });
      const pathwayRecords = await prisma.resource.findMany({
        where: {
          type: {
            in: ["career_pathway", "baywork_training_program"]
          }
        },
        orderBy: { title: "asc" }
      });
      records = [...dbRecords.map(fromDb), ...pathwayRecords.map((record) => fromDbResource(record as DbTrainingResource))];
    } catch {
      records = getSeedOpportunityViews();
    }
  } else {
    records = getSeedOpportunityViews();
  }

  return records;
}

function filterOpportunities(
  records: OpportunityView[],
  filters?: {
  type?: string;
  location?: string;
  paid?: string;
  career?: string;
  verification?: string;
  age?: string;
  }
) {
  return records.filter((record) => {
    if (filters?.type && filters.type !== "all" && record.type !== filters.type) return false;
    if (filters?.location && filters.location !== "all" && !matchesLocationFilter(record, filters.location)) {
      return false;
    }
    if (filters?.paid === "paid" && record.paid !== true) return false;
    if (filters?.paid === "unpaid" && record.paid !== false) return false;
    if (filters?.career && !matchesCareerTag(record, filters.career)) {
      return false;
    }
    if (
      filters?.verification &&
      filters.verification !== "all" &&
      publicVerificationValue(record.verificationStatus) !== filters.verification
    ) {
      return false;
    }
    if (filters?.age && record.minAge && Number(filters.age) < record.minAge) return false;
    return true;
  });
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
}) {
  const records = await getOpportunityRecords();
  return filterOpportunities(
    records.filter((record) => !record.hidden),
    filters
  );
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

export async function getOpportunity(id: string) {
  const records = await getOpportunities();
  return records.find((record) => record.id === id || record.sourceRecordId === id);
}

export async function getAdminOpportunities() {
  const records = await getOpportunityRecords();
  return records;
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
