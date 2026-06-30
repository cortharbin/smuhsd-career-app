# Package Contents

This starter package contains the product plan, engineering plan, real seed data, and the Codex prompt needed to start building the SMUHSD Career App.

## Start here

- `README_START_HERE.md` — simple overview of the project
- `NEXT_STEPS_FOR_STUDENT.md` — step-by-step beginner instructions
- `codex/START_CODEX_PROMPT.md` — paste this into Codex
- `HELP_PROMPT_FOR_CHATGPT.md` — use this when stuck

## Product and engineering docs

- `SMUHSD_Career_App_Product_Plan.md` — product concept and build plan
- `SMUHSD_Career_App_Codex_Handoff.md` — engineering details for Codex
- `schema/prisma_schema.prisma` — starter Prisma schema
- `scripts/import_seed_plan.md` — notes for building the seed importer
- `.env.example` — environment variables for Neon and local development

## Source data

- `SMUHSD_Career_Opportunities_Source_Data_KB (1).md` — original counselor-provided source archive

## Seed data

The `seed/` folder contains real data prepared for the first version of the app.

- `seed/opportunities.json` — app-facing jobs, internships, volunteer roles, programs, events, and resources
- `seed/organizations.json` — organizations/employers connected to those records
- `seed/career_pathways.json` — career pathway and training program records
- `seed/baywork_training_programs.json` — Baywork/training pathway records
- `seed/school_career_coordinators.json` — school career center contacts
- `seed/work_permit_info.json` — work permit information for students
- `seed/verified_current_resources.json` — verified current resource links
- `seed/flyer_pages.json` — flyer/page-level source records
- `seed/source_records_all.json` — full normalized source record archive
- `seed/student_resources.json` — student-facing resource records
- `seed/manifest.json` — seed counts and source summary
- `seed/DATA_GUIDE.md` — plain-English explanation of the seed data

## Important note

Some opportunities came from counselor flyers and spreadsheets. They should be shown as useful leads, not guaranteed open jobs. The app should show verification status clearly.

