# CSS Resume — Mykola Dotsenko

A small, static resume site built with HTML and CSS.

**Live:** https://mykoladotsenko.github.io/css-resume/

[Full CV](https://mykoladotsenko.github.io/developer-profile/resume.html) ·
[LinkedIn](https://www.linkedin.com/in/mykola-dotsenko/) ·
[GitHub](https://github.com/MykolaDotsenko)

This repository originally started as a CSS exercise. I kept the no-framework setup because a resume does not need an application runtime, then rebuilt the content around the work I actually do now.

## What the resume focuses on

My current work is mostly Python/Django backend and data work:

- Django, DRF, Wagtail, PostgreSQL, SQL, and Django ORM
- CRM and external API integrations
- data reconciliation and identity resolution
- synchronization and document workflows
- search/query performance
- production debugging
- React, Next.js, TypeScript, JavaScript, and HTMX when frontend work is part of the feature
- LLM-backed features where model output is checked and bounded by normal application logic

The Techco / Bo section includes concrete examples from production work, including Kivi, OviPro, and HubSpot flows at roughly 200k-record scale and a search path reduced from about 3.5 seconds to about 300 ms.

## Selected projects

### [DomoNest](https://github.com/MykolaDotsenko/domonest)

**Python · Django · Wagtail · PostgreSQL**

A household app where pantry, recipes, shopping, and recurring tasks share the same state. The interesting part is keeping those flows consistent without duplicating data across screens.

### [Cultural Currency Converter](https://github.com/MykolaDotsenko/cultural-currency-converter)

**Django · PostgreSQL · HTMX · Redis**

A travel-money app that keeps exchange-rate sources and effective dates visible. Optional AI and media features can fail without breaking the core conversion flow.

### [Shopping Budget Companion](https://github.com/MykolaDotsenko/shopping-budget-companion)

**React · TypeScript · Zod · PWA**

A local-first shopping budget app. Money uses integer minor units, local data is versioned, and barcode/OCR/image-recognition results must be confirmed before they enter the normal shopping flow.

### [JunaLippu](https://github.com/MykolaDotsenko/JunaLippu)

**Next.js · TypeScript · tRPC · Prisma**

A railway booking case study with route-segment inventory and database rules that prevent overbooking when requests arrive concurrently.

### [Turku Departures](https://github.com/MykolaDotsenko/foli-live-departures)

**React · GTFS/SIRI · PWA · Playwright**

A Turku transit PWA that distinguishes live, scheduled, stale, and unknown data and handles GPS, repeated-stop, offline, and timetable edge cases. [Live demo](https://mykoladotsenko.github.io/foli-live-departures/).

### [Tradeoff — Decision Lab](https://github.com/MykolaDotsenko/tradeoff-decision-lab)

**React · TypeScript · Zod · Vercel**

A decision workspace that keeps preference score, evidence confidence, and sensitivity separate. AI can structure inputs, while the ranking stays deterministic. [Live demo](https://tradeoff-decision-lab.vercel.app/).

## Why plain HTML and CSS?

Because that is enough for this page.

There is no client-side state, no form workflow, and no interactive application logic to justify React or another runtime framework. The production site therefore ships:

- semantic HTML
- responsive CSS
- CSS Grid and Flexbox
- keyboard focus styles
- reduced-motion and forced-colors support
- print rules for A4
- no runtime JavaScript
- no runtime dependencies

## Checks

The repository still has automated checks because a static site can break too.

### Static validation

```bash
python scripts/check_site.py
```

This checks metadata, local links, IDs, image alt text, external-link safety, required sections, and the CSS rules used for print and accessibility.

### Browser tests

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

Playwright checks desktop and mobile layouts, horizontal overflow, important links and resume content, serious/critical axe violations, print styles, and A4 PDF generation.

## Local preview

```bash
python -m http.server 8000
```

Open http://127.0.0.1:8000/

## Author

**Mykola Dotsenko**  
Software Engineer — Python/Django · Backend · Data · Integrations
