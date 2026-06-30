# Seed Data Guide

This folder contains the real starting data for the SMUHSD Career App.

Codex should import these files into Neon PostgreSQL using Prisma.

---

## What is included

| File | Count | Purpose |
|---|---:|---|
| `opportunities.json` | 219 | Main app records students will search. Includes jobs, internships, volunteer opportunities, programs, events, and resources. |
| `organizations.json` | 153 | Employers, nonprofits, schools, agencies, and program providers. |
| `career_pathways.json` | 247 | Career pathway and training program records. |
| `baywork_training_programs.json` | 166 | Additional career/training pathway records. |
| `flyer_pages.json` | 63 | PDF flyer/page records from the counselor source deck. |
| `source_records_all.json` | 569 | Full source record archive from the counselor knowledge base. |
| `school_career_coordinators.json` | 7 | Career coordinator contacts by school/site. |
| `verified_current_resources.json` | 9 | Current web resources that were verified for the app starter data. |
| `work_permit_info.json` | 1 object | Student-friendly work permit information. |
| `student_resources.json` | 2 | Student support resources. |
| `manifest.json` | 1 object | Counts and source summary. |

---

## How to use the data

For the MVP, import these first:

1. `organizations.json`
2. `opportunities.json`
3. `career_pathways.json`
4. `school_career_coordinators.json`
5. `work_permit_info.json`
6. `verified_current_resources.json`

Keep these as source/evidence tables or admin-only references:

- `source_records_all.json`
- `flyer_pages.json`
- `baywork_training_programs.json`

---

## Verification rules

Do not mark every opportunity as open.

Many records are useful but time-sensitive. The app should use labels like:

- `Verified`
- `Needs verification`
- `Likely stale`
- `Closed or past deadline`

If a record has a future date or a current verified source, it can be displayed more prominently.

If a record is old, missing a deadline, or from a flyer, show it lower in the list and label it clearly.

---

## Student-friendly rule

The app should help students answer practical questions:

- Can I apply at my age?
- Is it paid?
- Do I need a work permit?
- Where is it?
- What career area does it match?
- What should I do next?

The app is not just a database. It should make the next step obvious.

