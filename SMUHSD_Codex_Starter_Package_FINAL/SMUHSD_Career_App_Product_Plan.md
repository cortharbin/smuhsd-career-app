# SMUHSD Career Access Web App - Product Concept and Development Plan

**Generated:** 2026-06-27  
**Input source:** `SMUHSD_Career_Opportunities_Source_Data_KB (1).md`  
**Working name:** `StudentLaunch` / `HighJobs` / `SMUHSD Career Access`

## 1. Product Concept

Build a student-friendly web application that converts SMUHSD counselor-provided spreadsheets, slide decks, flyers, and career planning worksheets into a searchable, filterable, verified opportunity system for high school students, employers, and counselors.

The app should not feel like a document library. It should feel like a guided opportunity marketplace:

- **Students** answer a few questions and see jobs, volunteer roles, internships, career events, and training pathways that match age, grade, location, interests, pay preference, transportation, deadline, and time commitment.
- **Counselors** can import/update opportunities, mark records as verified or stale, publish featured lists, and see what students are searching for.
- **Employers / organizations** can submit youth-friendly opportunities through a structured form that counselors approve before publication.

## 2. Core Problem

The source data is useful but currently hard for students to act on because it is scattered across spreadsheets, PDFs, Google Docs, flyers, URLs, QR codes, and aging rows. The uploaded KB preserves source data across **565 parsed records** including approximately **{'internship_program': 37, 'volunteer': 59, 'job': 49, 'event': 8, 'training_pathway': 412}**. The app must solve freshness and usability, not merely display the files.

## 3. Product Principles

1. **Trust beats volume.** Show students verified, current, age-eligible opportunities first.
2. **No dead-end clicks.** Every opportunity needs a clear next action: apply, email, register, visit, ask counselor, or save.
3. **Age and work-permit clarity.** A 15-year-old should not waste time on 18+ jobs unless they intentionally browse future options.
4. **Counselor workflow first.** If data maintenance is painful, the app will decay quickly.
5. **Employers should not publish directly.** Use counselor approval to protect quality and prevent spam.

## 4. MVP User Roles

### Student

Jobs to be done:

- Find paid jobs I am eligible for now.
- Find volunteer hours that fit my schedule and interests.
- Find internships/programs with deadlines before they close.
- Understand what I need before applying: resume, work permit, age, certification, transportation, references.
- Save opportunities and track application status.

### Counselor / Admin

Jobs to be done:

- Import source data from markdown/CSV/spreadsheets.
- Approve, edit, archive, and verify opportunities.
- Flag stale/dead links.
- Create featured collections such as “15-year-old friendly jobs,” “summer camp jobs,” “healthcare interests,” “community service hours,” “deadline this month.”
- Export/share links with students and families.

### Employer / Organization

Jobs to be done:

- Submit a youth-friendly opportunity using structured fields.
- State age, grade, schedule, pay, location, deadlines, supervisor contact, and whether a work permit is needed.
- Receive follow-up if the counselor needs clarification.

## 5. MVP Features

### Student-facing

- Opportunity search across jobs, internships/programs, volunteer roles, events, career pathways, and resources.
- Filters: opportunity type, paid/unpaid, age/grade, city, remote/onsite, deadline, date posted, verified status, career interest/pathway, schedule, transportation friendliness, work permit needed.
- “Best matches for me” onboarding: grade, age, school, interests, paid/volunteer preference, distance, availability.
- Opportunity detail page with:
  - title, organization, type, summary
  - eligibility
  - deadline and date posted
  - pay/stipend/cost
  - location and commute notes
  - application steps
  - source/verification status
  - counselor notes
  - save/apply status
- Work permit helper page.
- Career exploration worksheet flow based on California Colleges interest assessment and “Day in the Life” exploration.

### Counselor/admin

- Admin dashboard with queues:
  - Needs verification
  - Deadlines within 30 days
  - Expired but maybe recurring
  - Employer submissions pending approval
  - Broken/redirecting links
- CRUD for opportunities.
- Bulk import from normalized JSON/CSV.
- Verification fields: status, verified_on, verified_by, source_urls, confidence, notes.
- Ability to archive rather than delete.
- Duplicate detection by normalized title + organization + source URL.

### Employer intake

- Public submission form.
- Required fields: organization, contact, opportunity title, type, location, age/grade requirement, pay/stipend/cost, schedule, start/end date, deadline, application URL/email, description, number of openings, work permit expectations.
- Submission status: pending, approved, rejected, needs_info.

## 6. MVP Non-Goals

- No full applicant tracking system in v1.
- No direct messaging between students and employers in v1.
- No recommendation algorithm beyond rule-based matching in v1.
- No scraping every employer website automatically in v1.
- No unapproved employer self-publishing.
- No mobile app in v1; build responsive web first.

## 7. Suggested Tech Stack for Codex

Recommended stack:

Use the user's existing vendors first. Do not introduce Supabase unless explicitly requested.

- **Framework:** Next.js App Router + TypeScript
- **UI:** Tailwind CSS + shadcn/ui
- **Database:** PostgreSQL via Neon
- **Auth:** NextAuth/Auth.js or Clerk later; for MVP, implement role-ready local/dev auth and protect admin routes by role. Do not use Supabase Auth unless explicitly added later.
- **ORM:** Prisma or Drizzle. Prisma is easier for Codex handoff; Drizzle is lighter.
- **Search:** Postgres full-text search for MVP; Algolia/Meilisearch later if needed.
- **Hosting:** Vercel. Database on Neon. Optional object storage on DigitalOcean Spaces for uploaded flyers/images later.
- **Validation:** Zod
- **Import:** Node scripts that ingest JSON/CSV seed files

## 8. Information Architecture

Routes:

```text
/
/opportunities
/opportunities/[slug]
/work-permits
/career-explorer
/saved
/student/onboarding
/admin
/admin/opportunities
/admin/opportunities/new
/admin/import
/admin/verifications
/admin/submissions
/submit-opportunity
/resources
```

## 9. Student Matching Logic

Use a transparent scoring model in v1:

```text
+30 age/grade eligible
+20 open or future deadline
+15 verified within 60 days
+15 matches selected career interests
+10 paid if student wants paid; volunteer if student wants service hours
+10 local/commutable
+5 has clear apply link or email
-30 expired deadline
-25 age ineligible
-20 unverified older than 180 days
-10 missing next action
```

Return a plain-language reason: “Good match because you are 16+, it is in San Mateo, it pays, and the deadline is still open.”

## 10. Verification / Freshness Model

Statuses:

- `active_verified` - checked from official page or direct contact.
- `active_unverified` - source says active but not independently checked.
- `recurring_expected` - known recurring program, next cycle not confirmed.
- `closed_for_cycle` - closed now but useful for future planning.
- `expired` - deadline/event passed.
- `stale_needs_review` - not checked recently.
- `archived` - no longer useful.

Freshness rules:

- Jobs: stale after 30 days.
- Volunteer indexes: stale after 90 days.
- Internships/programs: stale after 60 days or after deadline.
- Events: expired the day after event end date.
- Career pathways/training resources: stale after 180 days.
- Legal/work-permit resources: stale after 180 days or when official pages change.

## 11. Current Web-Enrichment Sources Added

The enrichment seed file includes currently verified sources for:

- SMUHSD work permits
- California minor employment rules
- San Mateo County Jobs for Youth
- City of San Mateo volunteer opportunities
- Girls on the Run Bay Area Junior Coach
- Hiller Aviation Museum teen volunteer roles
- San Mateo Arboretum Society volunteer roles
- CalOpps Peninsula part-time recreation/aquatics job source

These should be treated as verified seed records, not as a full replacement for all imported records.

## 12. Build Phases

### Phase 0 - Data normalization

- Ingest uploaded KB markdown.
- Parse records into staging tables.
- Normalize opportunity types, organizations, links, locations, eligibility, dates, and verification status.
- Mark every imported source record as `active_unverified` or `stale_needs_review` unless the uploaded source includes a recent checked/posted date.

### Phase 1 - Student discovery MVP

- Opportunity list and detail pages.
- Search, filters, cards, verified badges.
- Work permit resource page.
- Save opportunities locally or with student account.

### Phase 2 - Admin maintenance

- Admin CRUD.
- Verification queue.
- Import tool.
- Deduping suggestions.
- Link checker job.

### Phase 3 - Employer intake

- Submit-opportunity form.
- Counselor approval queue.
- Email notification templates.

### Phase 4 - Personalization

- Student onboarding.
- Match scoring.
- Career exploration workflow.
- Counselor-created collections.

## 13. Acceptance Criteria

A useful v1 is done when:

- A student can find at least 50 readable opportunities from the source KB.
- A 14-, 15-, 16-, 17-, and 18-year-old can filter to eligible roles.
- Deadlines and stale records are visibly labeled.
- Work permit requirements are easy to find before applying.
- A counselor can update an opportunity without touching code.
- An employer can submit an opportunity, but it does not go live until approved.
- The app can be rebuilt from seed files and database migrations.
