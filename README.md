# CSS Resume — Mykola Dotsenko

A static resume page built with HTML and CSS.

**Live:** https://mykoladotsenko.github.io/css-resume/

[Full CV](https://mykoladotsenko.github.io/developer-profile/resume.html) ·
[LinkedIn](https://www.linkedin.com/in/mykola-dotsenko/) ·
[GitHub](https://github.com/MykolaDotsenko)

This repo started as a CSS exercise. I kept it static and replaced the old learning content with my current work.

## What I work with

- Python, Django, DRF, Wagtail
- PostgreSQL, SQL, Django ORM
- Kivi, OviPro, HubSpot, and other APIs
- CRM reconciliation and identity matching
- synchronization and document flows
- search and query performance
- React, Next.js, TypeScript, JavaScript, HTMX
- Playwright, Vitest, Ruff, mypy, GitHub Actions
- LLM-backed features with normal application checks around the output

The resume includes a few numbers from current work: roughly 200k contacts in the Kivi/OviPro/HubSpot CRM work and one search path reduced from about 3.5 seconds to about 300 ms.

## Projects shown

### [DomoNest](https://github.com/MykolaDotsenko/domonest)

**Python · Django · Wagtail · PostgreSQL**

A household app where pantry, recipes, shopping, and recurring tasks share data.

### [Cultural Currency Converter](https://github.com/MykolaDotsenko/cultural-currency-converter)

**Django · PostgreSQL · HTMX · Redis**

A travel-money app with current and historical FX rates. The basic conversion still works if optional providers are unavailable.

### [Shopping Budget Companion](https://github.com/MykolaDotsenko/shopping-budget-companion)

**React · TypeScript · Zod · PWA**

A local-first shopping budget app with exact-money arithmetic, versioned browser storage, offline use, and barcode/OCR/image-recognition helpers.

### [JunaLippu](https://github.com/MykolaDotsenko/JunaLippu)

**Next.js · TypeScript · tRPC · Prisma**

A Finnish rail-booking demo with segment-level inventory and database protection against concurrent overbooking.

### [Turku Departures](https://github.com/MykolaDotsenko/foli-live-departures)

**React · GTFS/SIRI · PWA · Playwright**

A Turku transit PWA that deals with stale live data, repeated stops, weak GPS, offline use, and timetable edge cases.

[Live demo](https://mykoladotsenko.github.io/foli-live-departures/)

### [Tradeoff — Decision Lab](https://github.com/MykolaDotsenko/tradeoff-decision-lab)

**React · TypeScript · Zod · Vercel**

A comparison tool where score, confidence, and sensitivity stay separate. AI can prepare inputs; regular code calculates the ranking.

[Live demo](https://tradeoff-decision-lab.vercel.app/)

## Implementation

There is no application state on this page, so it stays plain HTML and CSS.

It includes:

- responsive layout;
- keyboard focus styles;
- reduced-motion and forced-colors support;
- A4 print rules;
- no runtime JavaScript.

## Checks

Static checks:

```bash
python scripts/check_site.py
```

Browser and print tests:

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

## Local preview

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## Author

**Mykola Dotsenko**  
Software Engineer — Python/Django · Backend · Data Integrations
