# Codex Handoff - Database, API, and Implementation Plan

**Generated:** 2026-06-27


## 0. Required Tech Stack / Vendor Constraints

Use the existing vendor stack:

- **App:** Next.js App Router + TypeScript on **Vercel**
- **Database:** **Neon PostgreSQL**
- **ORM:** Prisma
- **Validation:** Zod
- **UI:** Tailwind CSS + shadcn/ui
- **Auth:** role-ready Auth.js/NextAuth or lightweight dev auth for MVP; do not use Supabase Auth unless later requested
- **Storage:** **DigitalOcean Spaces is optional only**. Do not make object storage a dependency for the first milestone. Add an abstraction for attachments so Spaces can be wired in later.

Neon/Prisma requirements:

```env
DATABASE_URL="<neon pooled connection string>"
DIRECT_URL="<neon direct connection string>"
```

Prisma datasource should use both runtime pooling and direct migration URLs:

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

Deployment notes:

- Use Vercel preview deployments for review.
- Run Prisma migrations against Neon using `DIRECT_URL`.
- Runtime serverless/database access should use Neon pooling through `DATABASE_URL`.
- Keep seed/import scripts runnable locally with `tsx` or `npm run seed`.

## 1. Database Schema

Use Neon PostgreSQL. Below is a practical Prisma-style model outline. Codex can convert this into `schema.prisma`.

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

enum UserRole { STUDENT COUNSELOR_ADMIN EMPLOYER_SUBMITTER }
enum OpportunityType { JOB VOLUNTEER INTERNSHIP_PROGRAM EVENT TRAINING_PATHWAY RESOURCE JOB_READINESS_PROGRAM LEGAL_RESOURCE VOLUNTEER_INDEX JOB_INDEX }
enum VerificationStatus { ACTIVE_VERIFIED ACTIVE_UNVERIFIED RECURRING_EXPECTED CLOSED_FOR_CYCLE EXPIRED STALE_NEEDS_REVIEW ARCHIVED }
enum PayType { PAID UNPAID STIPEND COST FREE UNKNOWN }
enum LocationType { ONSITE HYBRID REMOTE VARIES UNKNOWN }

model User {
  id String @id @default(cuid())
  email String @unique
  role UserRole @default(STUDENT)
  schoolId String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model School {
  id String @id @default(cuid())
  name String @unique
  city String?
  counselorName String?
  counselorEmail String?
  opportunities Opportunity[]
}

model Organization {
  id String @id @default(cuid())
  name String
  websiteUrl String?
  contactEmail String?
  contactPhone String?
  city String?
  notes String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  opportunities Opportunity[]
  @@unique([name, websiteUrl])
}

model Opportunity {
  id String @id @default(cuid())
  slug String @unique
  title String
  organizationId String?
  organization Organization? @relation(fields: [organizationId], references: [id])
  type OpportunityType
  status VerificationStatus @default(ACTIVE_UNVERIFIED)
  summary String
  description String?
  careerPathway String?
  areaOfFocus String?
  payType PayType @default(UNKNOWN)
  compensationText String?
  minAge Int?
  maxAge Int?
  gradeRequirement String?
  locationType LocationType @default(UNKNOWN)
  address String?
  city String?
  region String?
  startDate DateTime?
  endDate DateTime?
  applicationDeadline DateTime?
  deadlineText String?
  scheduleText String?
  timeCommitment String?
  workPermitLikelyRequired Boolean?
  applicationUrl String?
  contactEmail String?
  sourceUrls String[]
  sourceFile String?
  sourceSheet String?
  sourceRow Int?
  sourcePage Int?
  importedRecordId String?
  verificationConfidence String?
  verifiedOn DateTime?
  verifiedBy String?
  verificationNotes String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  tags OpportunityTag[]
  savedBy SavedOpportunity[]
}

model Tag {
  id String @id @default(cuid())
  name String @unique
  opportunities OpportunityTag[]
}

model OpportunityTag {
  opportunityId String
  tagId String
  opportunity Opportunity @relation(fields: [opportunityId], references: [id], onDelete: Cascade)
  tag Tag @relation(fields: [tagId], references: [id], onDelete: Cascade)
  @@id([opportunityId, tagId])
}

model SavedOpportunity {
  userId String
  opportunityId String
  status String @default("saved") // saved, applying, applied, accepted, not_interested
  notes String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  opportunity Opportunity @relation(fields: [opportunityId], references: [id], onDelete: Cascade)
  @@id([userId, opportunityId])
}

model EmployerSubmission {
  id String @id @default(cuid())
  organizationName String
  contactName String
  contactEmail String
  title String
  type OpportunityType
  description String
  minAge Int?
  gradeRequirement String?
  locationText String?
  payText String?
  deadlineText String?
  applicationUrl String?
  status String @default("pending")
  adminNotes String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}


model Attachment {
  id String @id @default(cuid())
  opportunityId String?
  employerSubmissionId String?
  storageProvider String @default("digitalocean_spaces")
  bucket String?
  objectKey String
  publicUrl String?
  fileName String?
  mimeType String?
  createdAt DateTime @default(now())
  // Wire this model later only if uploaded flyers/logos/PDFs become an MVP requirement.
}
```

## 2. Import Pipeline

Create `/scripts/import-smuhsd-kb.ts`:

1. Read the uploaded markdown KB.
2. Split into sections by `### Sheet:` and `### PDF Page`.
3. Parse each `#### Record:` block into staging objects.
4. Infer `OpportunityType` from sheet/page section.
5. Extract URLs and emails using regex.
6. Normalize title and organization.
7. Parse dates conservatively. Keep raw date text if parsing is uncertain.
8. Assign default verification status:
   - uploaded record with 2026 date and clear source URL: `ACTIVE_UNVERIFIED`
   - closed / currently not active / application closed: `CLOSED_FOR_CYCLE`
   - job board rows reviewed in 2024: `STALE_NEEDS_REVIEW`
   - events with past dates: `EXPIRED`
9. Upsert organizations and opportunities.
10. Preserve source traceability fields.

## 3. API Endpoints / Server Actions

Student:

- `GET /api/opportunities?type=&age=&city=&paid=&q=&status=&deadline=`
- `GET /api/opportunities/[slug]`
- `POST /api/saved-opportunities`
- `PATCH /api/saved-opportunities/[id]`

Admin:

- `GET /api/admin/opportunities`
- `POST /api/admin/opportunities`
- `PATCH /api/admin/opportunities/[id]`
- `POST /api/admin/import`
- `POST /api/admin/verify-link`
- `POST /api/admin/archive-expired`

Employer:

- `POST /api/employer-submissions`

## 4. UI Components

- `OpportunityCard`
- `OpportunityFilters`
- `VerificationBadge`
- `EligibilityBadge`
- `DeadlineBadge`
- `WorkPermitNotice`
- `ApplyActionBox`
- `StudentMatchReasons`
- `AdminOpportunityTable`
- `VerificationQueue`
- `EmployerSubmissionForm`

## 5. Seed Data Strategy

Use two seed files:

1. `seed/opportunities.json` - main app-facing opportunity records for the MVP.
2. Parsed KB import output - bulk source records, many marked unverified/stale until reviewed.

Do not hand-edit generated parsed output. Admins should edit database records through the app.

## 6. Link Checking

Create a daily/weekly job:

- HEAD/GET each source URL.
- Record HTTP status, redirect URL, checked_at.
- Do not auto-archive just because one check fails.
- Flag records with repeated failures.
- Prioritize application URLs over general organization websites.

## 7. Initial Student Filters

```ts
type OpportunityFilters = {
  q?: string;
  type?: OpportunityType[];
  minAgeAllowed?: number;
  city?: string[];
  paidOnly?: boolean;
  volunteerHours?: boolean;
  verifiedOnly?: boolean;
  openDeadlineOnly?: boolean;
  careerPathway?: string[];
};
```

## 8. Important UX Details

- Show `Updated / Verified` date on every card.
- Distinguish “source posted date” from “app verified date.”
- Show “Ask your career counselor” when source data is incomplete.
- Display “may need work permit” for paid roles and link to the work permit page.
- For 18+ opportunities, do not hide them entirely; mark them as future/age-ineligible.

## 9. Suggested First Codex Task

Build the app skeleton, Prisma schema, and seed importer first. Do not spend time on pixel-perfect UI until the data model and importer are working.

Deliverable checklist for first PR:

- Next.js app boots.
- Prisma schema and migration run.
- Seed import creates opportunities from `seed/opportunities.json` and related records from the `seed/` folder.
- `/opportunities` renders searchable cards.
- `/opportunities/[slug]` renders detail pages.
- `/work-permits` renders resource page.
- `/admin/opportunities` lists records with status badges.
