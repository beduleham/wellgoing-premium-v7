# WELLGOING · Premium Website V7 — Vercel TEST

This is an independent, public **static preview** of the WELLGOING V7 website. It does not touch the previous `beduleham/wellgoing-site` repository.

## Deploy to Vercel
- Import `beduleham/wellgoing-premium-v7` as a **new project**.
- Framework Preset: **Other**; Root Directory: `./`.
- Build Command: none; Output Directory: `.` (repository root; default if no `public` directory).
- Deploy and review the generated `.vercel.app` URL.

## Preview-only limits
- This static preview includes nine content pages and a privacy draft, plus premium imagery, motion and responsive UI.
- The inquiry form uses **mailto:**, does **not** save submissions in a database.
- Admin login, content publishing, uploaded media management and inquiry DB are **not** deployed in this static preview.
- Real administrator/API operations need an adapted serverless backend, external PostgreSQL and object storage; do not use the previous SQLite / persistent-volume FastAPI server directly on Vercel Functions.
- The `X-Robots-Tag: noindex, nofollow` header deliberately excludes this trial version from search engines.
- Product test/certification claims and privacy policy require company approval prior to the production launch.

## Structure
`index.html` + subpages · CSS and JS at root · `assets/` images and silent botanical motion video · `vercel.json` trial headers.

## Safety
No passwords, .env, databases or user submissions are included. This repository is public, so only publish files intended to be public.
