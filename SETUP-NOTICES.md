# Notice & Circular System — Setup Guide

This feature needs a **free Supabase project**. Follow these steps once —
after that, the school staff never touches code again: just log in at
`/nmhs-admin`, upload a PDF, and publish.

Estimated time: 10–15 minutes.

---

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) → **Start your project** → sign in with GitHub or email.
2. **New project** → pick any name (e.g. `national-model-high-school`) → choose a strong database password (save it somewhere) → pick the region closest to India → **Create new project**.
3. Wait ~2 minutes for it to provision.

---

## 2. Run the database setup

1. In your project, open the left sidebar → **SQL Editor** → **New query**.
2. Open `supabase/schema.sql` from this project, copy the **entire file**, paste it into the SQL editor.
3. Click **Run**. You should see "Success. No rows returned."

This creates the `notices` table, its security rules (RLS), and a helper trigger.

---

## 3. Create the storage bucket

1. Left sidebar → **Storage** → **New bucket**.
2. Name: `notices` (exact spelling matters).
3. Toggle **Public bucket** → **ON**.
4. Click **Create bucket**.
5. Back in **SQL Editor**, run just the storage policy section again if you skipped it —
   it's already included at the bottom of `supabase/schema.sql`, so if you ran the
   whole file in Step 2, you're already done here.

---

## 4. Create the one admin account

There's no sign-up page on purpose — only one admin account should exist.

1. Left sidebar → **Authentication** → **Users** → **Add user** → **Create new user**.
2. Enter the school's admin email and a password.
3. Leave "Auto Confirm User" **checked** (so it's ready to use immediately).
4. Click **Create user**.

This email + password is what you'll use to log in at `/nmhs-admin/login`.

---

## 5. Get your API keys

1. Left sidebar → **Project Settings** → **API**.
2. Copy the **Project URL** and the **anon / public** key (not the `service_role` one).

---

## 6. Add the keys to your project

**Local development:**
```bash
cp .env.example .env.local
```
Paste your values in:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

**On Vercel (or your host):**
Project Settings → Environment Variables → add both keys → redeploy.

---

## 7. You're done — try it out

1. Run `npm run dev` (or visit your deployed site).
2. Go to `/nmhs-admin/login` and sign in with the account from Step 4.
3. Click **Add Notice**, fill in the title/description/date, upload a PDF, and publish.
4. Visit the homepage or `/notices` — your notice should appear immediately.

---

## How it works day-to-day (for school staff)

```
Login at /nmhs-admin
   ↓
Click "Add Notice"
   ↓
Fill in Title, Description, Publish Date, upload PDF
   ↓
Click "Publish Notice"
   ↓
Done — it's live on the website automatically
```

To take a notice down temporarily, go to **Notices** in the admin panel and
click its **Published** badge to toggle it to **Unpublished** — no need to
delete it.

Students visiting the website can always **Read** (opens the PDF in a new
browser tab) or **Download** (saves the PDF to their device) — both options
are always shown, nothing is forced.

---

## Troubleshooting

- **"The notice board isn't set up yet" on the site** → the env vars aren't set, or the dev/build server needs a restart after adding them.
- **Login fails** → double check the email/password from Step 4, and that "Auto Confirm User" was checked.
- **Upload fails** → confirm the `notices` storage bucket exists and is Public (Step 3), and that you ran the full `schema.sql` (it includes the storage policies).
- **Notice doesn't show on the site but shows in admin** → check its Publish Date isn't in the future, and that it's toggled to Published.
