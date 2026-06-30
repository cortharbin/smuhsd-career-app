# Codex Prompt — Build the SMUHSD Career App MVP

You are helping a 15-year-old beginner build his first useful AI-assisted web app.

Build a real MVP from this starter package. Keep the code simple, readable, and well commented.

---

## Product goal

Create a web app that helps San Mateo Union High School District students find:

- Jobs
- Internships
- Volunteer opportunities
- Career programs
- Career training pathways
- Work permit help

The app should make counselor-provided career information easier to search, filter, and understand.

---

## Required tech stack

Use this stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma ORM
- Neon PostgreSQL
- Vercel deployment
- Zod validation

Optional later:

- DigitalOcean Spaces for uploaded flyers/images

Do not use Supabase.

---

## Files to use

Use these files from the repo/package:

- `README_START_HERE.md`
- `NEXT_STEPS_FOR_STUDENT.md`
- `SMUHSD_Career_App_Product_Plan.md`
- `SMUHSD_Career_App_Codex_Handoff.md`
- `SMUHSD_Career_Opportunities_Source_Data_KB (1).md`
- `schema/prisma_schema.prisma`
- `scripts/import_seed_plan.md`
- `seed/DATA_GUIDE.md`
- `seed/manifest.json`
- `seed/opportunities.json`
- `seed/organizations.json`
- `seed/career_pathways.json`
- `seed/baywork_training_programs.json`
- `seed/school_career_coordinators.json`
- `seed/verified_current_resources.json`
- `seed/work_permit_info.json`
- `seed/flyer_pages.json`
- `seed/source_records_all.json`

Do not invent fake jobs or fake internships. Use the real seed data.

---

## First milestone

Build a working local MVP.

The first milestone is complete when:

1. The app runs locally.
2. Prisma connects to Neon PostgreSQL.
3. The seed importer loads the real records from `seed/`.
4. Students can browse and filter opportunities.
5. Students can open detail pages.
6. Students can read work permit help.
7. Admin/counselor users can see records that need verification.
8. Employers/counselors can submit a new opportunity as `Pending review`.

---

## Pages to build

Build these pages first:

### `/`
Homepage

- Explain what the app does.
- Show big buttons for Jobs, Internships, Volunteering, Career Programs, and Work Permits.
- Show a simple disclaimer.

### `/opportunities`
Search/list page

Filters:

- Type
- City/location
- Age or grade requirement
- Paid/unpaid
- Career area/tag
- Verification status

Each card should show:

- Title
- Organization
- Type
- Location
- Paid/unpaid
- Age/grade requirement if known
- Deadline if known
- Verification status
- Work permit reminder if relevant

### `/opportunities/[id]`
Detail page

Show:

- Full description
- Requirements
- Application link/contact
- Location
- Pay/stipend if known
- Deadline if known
- Source information
- Verification status
- Work permit reminder if relevant

### `/work-permits`
Student-friendly guide

Explain:

- Students under 18 usually need a work permit for paid jobs.
- The student, parent/guardian, and employer complete the form.
- The completed form goes to the school College & Career Center.
- Allow processing time.
- Link to source resources from `seed/work_permit_info.json`.

### `/submit`
Employer/counselor submission form

Fields:

- Organization
- Opportunity title
- Type
- Location
- Description
- Age/grade requirement
- Paid/unpaid
- Pay range if known
- Deadline
- Application link/contact
- Submitter name/email

Submissions should be saved as `Pending review`.

### `/admin/opportunities`
Simple admin table

Show:

- Title
- Organization
- Type
- Status
- Verification status
- Source
- Last verified date
- Edit/review action placeholder

No complicated authentication is required for the first local MVP. Add a clear TODO for real auth before public launch.

---

## Database requirements

Start from:

```text
schema/prisma_schema.prisma
```

You may improve it if needed, but keep it understandable for a beginner.

Use these environment variables:

```env
DATABASE_URL=<Neon pooled connection string>
DIRECT_URL=<Neon direct connection string>
NEXTAUTH_SECRET=<local/generated secret if auth is added later>
NEXTAUTH_URL=http://localhost:3000
```

---

## Seed import requirements

Create a seed script that imports the real seed files.

Import at least:

- `seed/organizations.json`
- `seed/opportunities.json`
- `seed/career_pathways.json`
- `seed/school_career_coordinators.json`
- `seed/work_permit_info.json`
- `seed/verified_current_resources.json`

Preserve source fields where available:

- source file
- source sheet
- source row
- source page
- original source ID
- verification status
- current status
- original URL/contact

Important: records from the counselor source are useful leads, but many are time-sensitive. Default unclear records to `Needs verification` instead of `Open`.

---

## Product rules

- Never imply SMUHSD endorses an opportunity.
- Show verification status on every opportunity.
- Show work permit reminders for paid jobs involving students under 18.
- Do not hide old records completely. Label them clearly.
- Keep the design clean and simple.
- Working app first, fancy features later.

---

## Code style

The student is a beginner, so:

- Write simple code.
- Use clear file names.
- Add short comments where helpful.
- Avoid unnecessary abstractions.
- Avoid advanced patterns unless they clearly help.
- Create a README with exact setup commands.

---

## Deliverables

Create:

- Next.js app files
- Prisma schema and migration
- Seed script
- Basic UI components
- Pages listed above
- README with local setup instructions
- Vercel + Neon deployment notes

Start by scaffolding the app, setting up Prisma, creating the database models, and writing the seed importer. Then build the pages.
