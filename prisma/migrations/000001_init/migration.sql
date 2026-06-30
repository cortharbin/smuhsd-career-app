CREATE TYPE "OpportunityType" AS ENUM ('JOB', 'INTERNSHIP', 'PROGRAM', 'VOLUNTEER', 'EVENT', 'TRAINING_PATHWAY', 'STUDENT_RESOURCE');
CREATE TYPE "VerificationStatus" AS ENUM ('UNVERIFIED', 'ACTIVE_VERIFIED', 'NEEDS_REVIEW', 'STALE', 'ARCHIVED');
CREATE TYPE "SubmissionStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

CREATE TABLE "Organization" (
  "id" TEXT NOT NULL,
  "externalId" TEXT,
  "name" TEXT NOT NULL,
  "website" TEXT,
  "contactEmail" TEXT,
  "contactPhone" TEXT,
  "city" TEXT,
  "sourceIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Opportunity" (
  "id" TEXT NOT NULL,
  "externalId" TEXT,
  "title" TEXT NOT NULL,
  "type" "OpportunityType" NOT NULL,
  "organizationId" TEXT,
  "organizationName" TEXT,
  "summary" TEXT,
  "description" TEXT,
  "city" TEXT,
  "locationText" TEXT,
  "url" TEXT,
  "applyUrl" TEXT,
  "contactEmail" TEXT,
  "contactPhone" TEXT,
  "contactText" TEXT,
  "minAge" INTEGER,
  "maxAge" INTEGER,
  "gradeRequirement" TEXT,
  "paid" BOOLEAN,
  "compensationText" TEXT,
  "deadlineText" TEXT,
  "scheduleText" TEXT,
  "category" TEXT,
  "careerPathway" TEXT,
  "tags" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "sourceName" TEXT,
  "sourceFile" TEXT,
  "sourceSheet" TEXT,
  "sourceRow" TEXT,
  "sourceUrl" TEXT,
  "sourceRecordId" TEXT,
  "sourceConfidence" TEXT,
  "currentStatus" TEXT,
  "trustLevel" TEXT NOT NULL DEFAULT 'Source lead',
  "highlighted" BOOLEAN NOT NULL DEFAULT false,
  "hidden" BOOLEAN NOT NULL DEFAULT false,
  "expiresAt" TIMESTAMP(3),
  "verificationStatus" "VerificationStatus" NOT NULL DEFAULT 'UNVERIFIED',
  "lastVerifiedAt" TIMESTAMP(3),
  "workPermitLikely" BOOLEAN NOT NULL DEFAULT false,
  "rawSource" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "EmployerSubmission" (
  "id" TEXT NOT NULL,
  "status" "SubmissionStatus" NOT NULL DEFAULT 'PENDING',
  "organizationName" TEXT NOT NULL,
  "contactName" TEXT,
  "contactEmail" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "type" "OpportunityType" NOT NULL,
  "description" TEXT NOT NULL,
  "city" TEXT,
  "locationText" TEXT,
  "applyUrl" TEXT,
  "contactText" TEXT,
  "minAge" INTEGER,
  "gradeRequirement" TEXT,
  "paid" BOOLEAN,
  "compensationText" TEXT,
  "deadlineText" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "EmployerSubmission_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ListingReport" (
  "id" TEXT NOT NULL,
  "opportunityId" TEXT NOT NULL,
  "reason" TEXT NOT NULL,
  "details" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ListingReport_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Resource" (
  "id" TEXT NOT NULL,
  "externalId" TEXT,
  "title" TEXT NOT NULL,
  "type" TEXT,
  "summary" TEXT,
  "url" TEXT,
  "audience" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "verificationStatus" "VerificationStatus" NOT NULL DEFAULT 'UNVERIFIED',
  "lastVerifiedAt" TIMESTAMP(3),
  "data" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SchoolCareerCoordinator" (
  "id" TEXT NOT NULL,
  "school" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "SchoolCareerCoordinator_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Organization_externalId_key" ON "Organization"("externalId");
CREATE UNIQUE INDEX "Opportunity_externalId_key" ON "Opportunity"("externalId");
CREATE UNIQUE INDEX "Resource_externalId_key" ON "Resource"("externalId");
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
