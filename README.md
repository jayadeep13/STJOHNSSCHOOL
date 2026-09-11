# St. John's School, Dantherapalli — Website

Built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — one folder per page (Home, About, Academics, Admissions, Facilities,
  Gallery & News, Student Stories, Founders & Board, Contact/Donate)
- `components/` — Navbar, Footer, PageHero, floating Donate button
- `public/images/logo.jpeg` — the school crest

## Gallery admin

Photos on `/gallery` are managed at `/admin` (password-protected). Uploaded
images are saved to `public/images/gallery/` and tracked in `data/gallery.json`
— this requires a persistent filesystem (a normal Node server / VPS), not a
serverless host like Vercel.

Set `ADMIN_PASSWORD` and `ADMIN_SECRET` in `.env.local` (already populated
with a starter password and a random secret — **change `ADMIN_PASSWORD`
before going live**).

## Before going live

1. **Replace placeholder photos.** Several images currently hot-link to the
   foundation's older Weebly site (`stjohnsindia.weebly.com`) purely as real
   reference photos. Swap these for photos you own the rights to, hosted in
   `public/images/`.
2. **Wire up the enquiry form** (`app/contact/page.js`) to an email service or
   backend (e.g. Formspree, Resend, or an API route).
3. **Add real donation details** — bank/UPI/international wire info — to the
   Donate section.
4. **Add the downloadable admission form** at `public/downloads/admission-form.pdf`.
5. Update admissions dates in `app/admissions/page.js` once finalized.

## Design tokens

Colors, fonts and layout tokens live in `tailwind.config.js` and
`app/layout.js` (fonts: Fraunces for display, Manrope for body, IBM Plex Mono
for dates/labels).
