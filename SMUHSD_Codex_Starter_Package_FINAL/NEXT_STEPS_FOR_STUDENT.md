# Next Steps for the Student Developer

This project is your first real AI-assisted app build.

Your job is not to code everything by hand. Your job is to guide Codex, test what it builds, and keep the app simple.

---

## Step 1 — Create the repo

Create a GitHub repo named:

```text
smuhsd-career-app
```

Copy every file from this starter package into that repo.

---

## Step 2 — Start Codex

Open:

```text
codex/START_CODEX_PROMPT.md
```

Copy the entire file.

Paste it into Codex.

Do not add extra instructions yet.

---

## Step 3 — Ask Codex for the first working app

Your first goal is boring but important:

```text
The app runs locally and shows real seed data.
```

Do not ask for AI chat, fancy dashboards, maps, email alerts, or login until the basic app works.

---

## Step 4 — Create the database

Create a Neon PostgreSQL project.

You will need two connection strings:

```env
DATABASE_URL=
DIRECT_URL=
```

Copy `.env.example` into `.env.local` and fill in the values.

---

## Step 5 — Run the app locally

Codex should give you commands like these:

```bash
npm install
npx prisma migrate dev
npm run db:seed
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Step 6 — Test these pages

Make sure these work:

- `/`
- `/opportunities`
- `/opportunities/[id]`
- `/work-permits`
- `/submit`
- `/admin/opportunities`

---

## Step 7 — Check the data

Go to the opportunities page and make sure it uses real records from:

```text
seed/opportunities.json
```

The app should not show fake placeholder jobs.

---

## Step 8 — Ask ChatGPT for help when stuck

Use:

```text
HELP_PROMPT_FOR_CHATGPT.md
```

Copy the prompt and paste in the error message or screenshot.

---

## Step 9 — Your first demo goal

Your first demo should show:

1. A student can search opportunities.
2. A student can filter by type, city, age, and paid/unpaid.
3. A student can click into a detail page.
4. A student can find work permit instructions.
5. A counselor/admin can see which listings need verification.

That is enough for a strong first version.

