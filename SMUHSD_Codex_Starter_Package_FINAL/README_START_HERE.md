# SMUHSD Career App — Starter Package

Welcome. This folder is everything you need to start building a real web app with Codex.

The app will help SMUHSD high school students find:

- Jobs
- Internships
- Volunteer opportunities
- Career programs
- Career training pathways
- Work permit help

This package already includes the counselor-provided source data and seed data. Do **not** make fake sample data.

---

## The simple plan

You are going to use Codex to build the first working version.

You do **not** need to understand every file on day one.

Start here:

1. Create a GitHub repo named `smuhsd-career-app`.
2. Copy this whole package into the repo.
3. Open `codex/START_CODEX_PROMPT.md`.
4. Paste the whole prompt into Codex.
5. Let Codex build the app step by step.
6. Use `NEXT_STEPS_FOR_STUDENT.md` when Codex finishes the first pass.

---

## Tech stack

Use this stack only:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma ORM
- Neon PostgreSQL
- Vercel

Optional later:

- DigitalOcean Spaces for uploaded flyers/images

Do **not** use Supabase.

---

## Most important files

| File | What it is for |
|---|---|
| `codex/START_CODEX_PROMPT.md` | Paste this into Codex first. |
| `NEXT_STEPS_FOR_STUDENT.md` | Beginner-friendly checklist after Codex starts building. |
| `seed/` | Real app seed data from the counselor source documents. |
| `seed/DATA_GUIDE.md` | Explains what is inside the seed data. |
| `schema/prisma_schema.prisma` | Starter database schema. |
| `SMUHSD_Career_App_Product_Plan.md` | Product plan and app concept. |
| `SMUHSD_Career_App_Codex_Handoff.md` | More detailed engineering notes for Codex. |
| `SMUHSD_Career_Opportunities_Source_Data_KB (1).md` | Original counselor data archive. Keep this as evidence/source material. |
| `.env.example` | Shows what environment variables you need. |
| `HELP_PROMPT_FOR_CHATGPT.md` | Use this when something breaks. |

---

## What the first version should do

The first version does not need to be perfect.

It should:

- Show a homepage.
- Show a searchable opportunities page.
- Let students filter by type, city, age, paid/unpaid, and career area.
- Show opportunity detail pages.
- Show a work permit help page.
- Show admin/counselor review pages.
- Let employers/counselors submit new opportunities.
- Clearly label unverified records as `Needs verification`.

---

## Important product rules

- Do not say SMUHSD endorses these listings.
- Do not say an opportunity is open unless it is verified.
- Paid jobs for students under 18 should show a work permit reminder.
- Employer submissions should start as `Pending review`.
- Keep the app useful before making it fancy.

