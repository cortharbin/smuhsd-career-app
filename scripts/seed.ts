import fs from "node:fs/promises";
/* eslint-disable @typescript-eslint/no-explicit-any */
import path from "node:path";
import { PrismaClient } from "@prisma/client";
import {
  findMinAge,
  isPaid,
  normalizeOpportunityType,
  mapVerificationStatus,
  workPermitLikely
} from "../lib/seed-mapping";

const prisma = new PrismaClient();
const seedDir = path.join(process.cwd(), "seed");

async function readJson<T>(fileName: string): Promise<T> {
  const file = await fs.readFile(path.join(seedDir, fileName), "utf8");
  return JSON.parse(file) as T;
}

async function main() {
  const organizations = await readJson<any[]>("organizations.json");
  const opportunities = await readJson<any[]>("opportunities.json");
  const careerPathways = await readJson<any[]>("career_pathways.json");
  const coordinators = await readJson<any[]>("school_career_coordinators.json");
  const workPermitInfo = await readJson<any>("work_permit_info.json");
  const verifiedResources = await readJson<any[]>("verified_current_resources.json");

  const organizationIds = new Map<string, string>();
  await prisma.schoolCareerCoordinator.deleteMany();

  for (const org of organizations) {
    const saved = await prisma.organization.upsert({
      where: { externalId: org.id },
      update: {
        name: org.name,
        website: org.urls?.[0] ?? null,
        contactEmail: org.emails?.[0] ?? null,
        contactPhone: org.phones?.[0] ?? null,
        sourceIds: org.source_ids ?? []
      },
      create: {
        externalId: org.id,
        name: org.name,
        website: org.urls?.[0] ?? null,
        contactEmail: org.emails?.[0] ?? null,
        contactPhone: org.phones?.[0] ?? null,
        sourceIds: org.source_ids ?? []
      }
    });
    organizationIds.set(org.name, saved.id);
  }

  for (const item of opportunities) {
    const paid = isPaid(item.compensation);
    const minAge = findMinAge(item.eligibility);
    const type = normalizeOpportunityType(item.opportunity_type, item.title) as any;

    await prisma.opportunity.upsert({
      where: { externalId: item.id },
      update: {
        title: item.title,
        type,
        organizationId: item.organization_name ? organizationIds.get(item.organization_name) : null,
        organizationName: item.organization_name,
        summary: item.web_enrichment_notes,
        description: item.description,
        city: item.location,
        locationText: item.location,
        applyUrl: item.apply_or_info_url ?? item.all_urls?.[0] ?? null,
        contactEmail: item.emails?.[0] ?? null,
        contactPhone: item.phones?.[0] ?? null,
        contactText: item.contact,
        minAge,
        gradeRequirement: item.eligibility,
        paid,
        compensationText: item.compensation,
        deadlineText: item.deadline,
        scheduleText: item.time_or_schedule,
        category: item.category,
        tags: [item.category, item.opportunity_type].filter(Boolean),
        sourceName: item.source_confidence,
        sourceFile: item.source_file,
        sourceSheet: item.source_sheet,
        sourceRow: item.source_row,
        sourceUrl: item.apply_or_info_url ?? item.all_urls?.[0] ?? null,
        sourceRecordId: item.id,
        sourceConfidence: item.source_confidence,
        currentStatus: item.current_status,
        trustLevel: item.web_verification_status === "verified_current_page" ? "Verified source" : "Source lead",
        highlighted: false,
        hidden: false,
        verificationStatus: mapVerificationStatus(item.current_status, item.web_verification_status) as any,
        workPermitLikely: workPermitLikely(item.opportunity_type, paid, minAge),
        rawSource: item.raw_source
      },
      create: {
        externalId: item.id,
        title: item.title,
        type,
        organizationId: item.organization_name ? organizationIds.get(item.organization_name) : null,
        organizationName: item.organization_name,
        summary: item.web_enrichment_notes,
        description: item.description,
        city: item.location,
        locationText: item.location,
        applyUrl: item.apply_or_info_url ?? item.all_urls?.[0] ?? null,
        contactEmail: item.emails?.[0] ?? null,
        contactPhone: item.phones?.[0] ?? null,
        contactText: item.contact,
        minAge,
        gradeRequirement: item.eligibility,
        paid,
        compensationText: item.compensation,
        deadlineText: item.deadline,
        scheduleText: item.time_or_schedule,
        category: item.category,
        tags: [item.category, item.opportunity_type].filter(Boolean),
        sourceName: item.source_confidence,
        sourceFile: item.source_file,
        sourceSheet: item.source_sheet,
        sourceRow: item.source_row,
        sourceUrl: item.apply_or_info_url ?? item.all_urls?.[0] ?? null,
        sourceRecordId: item.id,
        sourceConfidence: item.source_confidence,
        currentStatus: item.current_status,
        trustLevel: item.web_verification_status === "verified_current_page" ? "Verified source" : "Source lead",
        highlighted: false,
        hidden: false,
        verificationStatus: mapVerificationStatus(item.current_status, item.web_verification_status) as any,
        workPermitLikely: workPermitLikely(item.opportunity_type, paid, minAge),
        rawSource: item.raw_source
      }
    });
  }

  for (const pathway of careerPathways) {
    await prisma.resource.upsert({
      where: { externalId: pathway.id },
      update: {
        title: pathway.program_name ?? pathway.pathway,
        type: "career_pathway",
        summary: pathway.pathway,
        url: pathway.urls?.[0] ?? null,
        verificationStatus: "NEEDS_REVIEW",
        data: pathway
      },
      create: {
        externalId: pathway.id,
        title: pathway.program_name ?? pathway.pathway,
        type: "career_pathway",
        summary: pathway.pathway,
        url: pathway.urls?.[0] ?? null,
        verificationStatus: "NEEDS_REVIEW",
        data: pathway
      }
    });
  }

  const bayworkTrainingPrograms = await readJson<any[]>("baywork_training_programs.json");
  for (const program of bayworkTrainingPrograms) {
    await prisma.resource.upsert({
      where: { externalId: program.id },
      update: {
        title: program.program_name,
        type: "baywork_training_program",
        summary: program.category,
        url: program.urls?.[0] ?? null,
        verificationStatus: "NEEDS_REVIEW",
        data: program
      },
      create: {
        externalId: program.id,
        title: program.program_name,
        type: "baywork_training_program",
        summary: program.category,
        url: program.urls?.[0] ?? null,
        verificationStatus: "NEEDS_REVIEW",
        data: program
      }
    });
  }

  for (const coordinator of coordinators) {
    await prisma.schoolCareerCoordinator.create({
      data: {
        school: coordinator.school,
        name: coordinator.name,
        email: coordinator.email
      }
    });
  }

  for (const resource of verifiedResources) {
    await prisma.resource.upsert({
      where: { externalId: resource.id },
      update: {
        title: resource.title,
        type: resource.type,
        summary: resource.summary,
        url: resource.url,
        verificationStatus: "ACTIVE_VERIFIED",
        lastVerifiedAt: new Date(resource.verified_date),
        data: resource
      },
      create: {
        externalId: resource.id,
        title: resource.title,
        type: resource.type,
        summary: resource.summary,
        url: resource.url,
        verificationStatus: "ACTIVE_VERIFIED",
        lastVerifiedAt: new Date(resource.verified_date),
        data: resource
      }
    });
  }

  await prisma.resource.upsert({
    where: { externalId: workPermitInfo.id },
    update: {
      title: "Student Work Permit Guide",
      type: "work_permit",
      summary: workPermitInfo.summary,
      verificationStatus: "ACTIVE_VERIFIED",
      lastVerifiedAt: new Date(workPermitInfo.verified_date),
      data: workPermitInfo
    },
    create: {
      externalId: workPermitInfo.id,
      title: "Student Work Permit Guide",
      type: "work_permit",
      summary: workPermitInfo.summary,
      verificationStatus: "ACTIVE_VERIFIED",
      lastVerifiedAt: new Date(workPermitInfo.verified_date),
      data: workPermitInfo
    }
  });

  console.log(`Seeded ${organizations.length} organizations`);
  console.log(`Seeded ${opportunities.length} opportunities`);
  console.log(`Seeded ${careerPathways.length} career pathways`);
  console.log(`Seeded ${bayworkTrainingPrograms.length} BAYWORK training programs`);
  console.log(`Seeded ${verifiedResources.length + 1} verified/work permit resources`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
