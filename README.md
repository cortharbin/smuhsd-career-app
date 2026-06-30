# SMUHSD Career Finder MVP

A beginner-friendly Next.js MVP that helps San Mateo Union High School District students browse real counselor-provided career opportunity data.

## What is built

- Homepage with student-facing entry points
- Opportunity list with filters for type, location, age, paid/unpaid, career tag, and verification status
- Opportunity detail pages with source metadata and work permit reminders
- Work permit guide from the seed data
- Employer/counselor submission form that saves as `Pending review`
- Admin review table for records that need verification
- Prisma schema, migration SQL, and seed importer for Neon PostgreSQL

The app uses the real JSON records in `seed/`. It does not invent jobs or internships.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn-style local UI components
- Prisma ORM
- Neon PostgreSQL
- Zod validation

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env
```

3. Add your Neon connection strings in `.env`:

```env
DATABASE_URL="your Neon pooled connection string"
DIRECT_URL="your Neon direct connection string"
NEXTAUTH_SECRET="replace-with-a-generated-local-secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. Generate Prisma Client and run the migration:

```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Import the real starter data:

```bash
npm run db:seed
```

6. Start the app:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Notes for a student developer

- The pages are in `app/`.
- The database schema is in `prisma/schema.prisma`.
- The seed importer is in `scripts/seed.ts`.
- Data helper code is in `lib/data.ts`.
- The UI intentionally falls back to the JSON files when the database is not configured, so you can inspect most pages before connecting Neon.
- The submit form requires Neon because new submissions need a database table.

## Deployment notes

For Vercel:

1. Push this project to GitHub.
2. Create a Vercel project from the GitHub repo.
3. Add `DATABASE_URL`, `DIRECT_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` in Vercel Project Settings.
4. Use the Neon pooled connection string for `DATABASE_URL`.
5. Use the Neon direct connection string for `DIRECT_URL`.
6. Run Prisma migration and seed from a trusted local machine or a one-time deployment job before sharing the site.

Before public launch, add real authentication and authorization for `/admin/opportunities`.
