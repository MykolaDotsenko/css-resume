# CSS Resume — Mykola Dotsenko

A static resume page built with plain HTML and CSS.

**Live:** https://mykoladotsenko.github.io/css-resume/

[Full CV](https://mykoladotsenko.github.io/developer-profile/resume.html) ·
[LinkedIn](https://www.linkedin.com/in/mykola-dotsenko/) ·
[GitHub](https://github.com/MykolaDotsenko)

This repo started as an early CSS exercise. I kept the static setup and rebuilt the page around the work I do now instead of turning it into another framework demo.

## What is on the page

My current work is mostly Python/Django backend and data work:

- Django, DRF, Wagtail, PostgreSQL, SQL, and Django ORM
- Kivi, OviPro, HubSpot, and other external integrations
- CRM reconciliation and identity matching
- synchronization and document workflows
- search/query performance
- production debugging
- React, Next.js, TypeScript, JavaScript, and HTMX when the same feature needs frontend work
- LLM-backed features where model output is checked by normal application logic

The resume includes a few concrete examples from Bo, including CRM work at roughly 200k-contact scale and one search path reduced from about 3.5 seconds to about 300 ms.

## Projects shown

### [DomoNest](https://github.com/MykolaDotsenko/domonest)

**Python · Django · Wagtail · PostgreSQL**

A household app where pantry, recipes, shopping, and recurring tasks share data instead of behaving like unrelated CRUD screens.

### [Cultural Currency Converter](https://github.com/MykolaDotsenko/cultural-currency-converter)

**Django · PostgreSQL · HTMX · Redis**

A travel-money app with current and historical FX rates. The core conversion still works when optional AI or enrichment providers are unavailable.

### [Shopping Budget Companion](https://github.com/MykolaDotsenko/shopping-budget-companion)

**React · TypeScript · Zod · PWA**

A local-first shopping budget app with exact-money arithmetic, versioned browser storage, offline use, and barcode/OCR/image-recognition helpers.

### [JunaLippu](https://github.com/MykolaDotsenko/JunaLippu)

**Next.js · TypeScript · tRPC · Prisma**

A Finnish rail-booking demo with segment-level seat inventory and database protection against concurrent overbooking.

### [Turku Departures](https://github.com/MykolaDotsenko/foli-live-departures)

**React · GTFS/SIRI · PWA · Playwright**

A Turku transit PWA that deals with stale live data, repeated stops, poor GPS, offline use, and GTFS/SIRI timing edge cases.

[Live demo](https://mykoladotsenko.github.io/foli-live-departures/)

### [Tradeoff — Decision Lab](https://github.com/MykolaDotsenko/tradeoff-decision-lab)

**React · TypeScript · Zod · Vercel**

A comparison tool that keeps score, confidence, and sensitivity separate. AI can help prepare inputs, but the ranking stays deterministic.

[Live demo](https://tradeoff-decision-lab.vercel.app/)

## Implementation

There is no client-side state or form workflow here, so the site does not need React or another runtime framework.

It uses:

- semantic HTML
- responsive CSS
- Grid and Flexbox
- keyboard focus styles
- reduced-motion and forced-colors support
- A4 print rules
- no runtime JavaScript
- no runtime dependencies

## Checks

Static validation:

```bash
python scripts/check_site.py
```

Browser, accessibility, and print tests:

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

The Playwright suite checks desktop/mobile layout, important links and content, horizontal overflow, serious/critical axe violations, print styles, and A4 PDF generation.

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
Software Engineer — Python/Django · Backend · Data · Integrations
