# Seed Import Plan

The app should import real data from the `seed/` folder.

Do not create fake sample records.

## Import order

1. `seed/organizations.json`
2. `seed/opportunities.json`
3. `seed/career_pathways.json`
4. `seed/baywork_training_programs.json`
5. `seed/school_career_coordinators.json`
6. `seed/work_permit_info.json`
7. `seed/verified_current_resources.json`
8. Optional source/evidence tables:
   - `seed/flyer_pages.json`
   - `seed/source_records_all.json`

## Import behavior

- Use stable IDs from the JSON when possible.
- Preserve original source fields.
- Do not label unclear records as open.
- Use `Needs verification` when current status is uncertain.
- Create organizations before opportunities.
- Link opportunities to organizations by normalized organization name when direct IDs are not available.

## Beginner-friendly seed command

Create a script such as:

```bash
npm run db:seed
```

That command should run something like:

```bash
tsx prisma/seed.ts
```

## Minimum expected result

After seeding, the local app should show real opportunities on `/opportunities`.
