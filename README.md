# CSS Resume — Mykola Dotsenko

**Recruiter-facing software engineering profile focused on Python/Django backend systems, data integrations, production reliability, and product judgment.**

**Live site:** https://mykoladotsenko.github.io/css-resume/

[Full recruiter CV](https://mykoladotsenko.github.io/developer-profile/resume.html) ·
[LinkedIn](https://www.linkedin.com/in/mykola-dotsenko/) ·
[GitHub](https://github.com/MykolaDotsenko)

This repository started as an early CSS learning exercise. The current version keeps the static HTML/CSS constraint but turns the page into a high-signal recruiter surface rather than a generic portfolio template.

## What the page communicates

The primary scan path now emphasizes:

1. **Backend/data specialization** rather than generic full-stack positioning.
2. **Production evidence** — roughly 200k-record CRM/contact scale, Kivi/OviPro/HubSpot integrations, and measurable performance improvement.
3. **Engineering judgment** — data ownership, ambiguity handling, idempotent/recoverable workflows, and evidence-driven debugging.
4. **Full-product literacy** — React, Next.js, TypeScript, HTMX, accessibility, browser testing, and delivery experience remain visible without competing with the core backend narrative.
5. **Domain differentiation** — earlier experience in agriculture, agribusiness, greenhouse/food production, accounting, and sales is framed as useful context for AgTech and operational software.
6. **Current education** — MSc Software Engineering is clearly marked as in progress.

## Current positioning

> **Software Engineer · Backend · Data · AI Integrations**

Strongest areas:

- Python / Django / Django REST Framework / Wagtail
- PostgreSQL / SQL / Django ORM
- multi-source data integrations
- CRM reconciliation and identity resolution
- idempotent and recoverable data flows
- production debugging and reliability
- REST APIs and provider boundaries
- React / Next.js / TypeScript / HTMX
- automated browser testing and accessibility
- AI-enabled workflows with deterministic guardrails

## Selected engineering work

The live page now highlights projects that best represent current engineering depth rather than older learning-stage repositories.

### [DomoNest](https://github.com/MykolaDotsenko/domonest)

**Python · Django · Wagtail · PostgreSQL**

Cross-domain household workflows, derived read models, database invariants, idempotent writes, recurrence, private owner-scoped state, and progressive enhancement.

### [Cultural Currency Converter](https://github.com/MykolaDotsenko/cultural-currency-converter)

**Django · PostgreSQL · HTMX · Redis**

Explicit FX provenance/date semantics, provider boundaries, graceful degradation, optional AI explanation, runtime health checks, browser QA, and recovery tooling.

### [Shopping Budget Companion](https://github.com/MykolaDotsenko/shopping-budget-companion)

**React · TypeScript · Zod · PWA**

Exact-money arithmetic, versioned persistence, offline behavior, barcode/OCR/on-device vision adapters, and explicit user-confirmation boundaries.

### [JunaLippu](https://github.com/MykolaDotsenko/JunaLippu)

**Next.js · TypeScript · tRPC · Prisma**

Segment-aware railway inventory, concurrency-safe booking, owner-scoped reservations, integration tests, and GTFS edge-case handling.

## Engineering principles represented

The page intentionally makes several recurring engineering principles visible:

- **Evidence before fixes** — reproduce and measure before changing behavior.
- **Correctness over convenient guesses** — ambiguity stays explicit when automatic action would be unsafe.
- **Recoverable systems** — important writes and synchronization paths should tolerate retry and partial failure.
- **Proportional architecture** — use only the complexity justified by the product.
- **AI as an interface layer** — deterministic business rules remain authoritative where correctness matters.

A recurring product model across the portfolio is:

```text
messy real-world information
        ↓
structured state
        ↓
explicit uncertainty
        ↓
decision support
        ↓
clear next action
```

## Why no frontend framework here?

A resume is static content. React, Next.js, a state library, or runtime animation layer would add maintenance surface without solving a real product requirement.

The production page therefore uses:

- semantic HTML5
- modern CSS
- CSS Grid and Flexbox
- responsive layouts
- accessible focus states
- reduced-motion and forced-colors support
- A4-oriented print rules
- **zero runtime JavaScript**
- **zero runtime application dependencies**

The implementation choice itself demonstrates one of the core principles: use the simplest architecture that fully serves the product.

## Quality strategy

### Static checks

```bash
python scripts/check_site.py
```

The zero-dependency checker validates:

- one `<main>` and one `<h1>`
- document language and metadata
- canonical/social metadata
- unique IDs
- local files and fragment links
- image alternative text
- safe external links
- no forms or JavaScript runtime
- print, focus-visible, reduced-motion, and forced-colors CSS
- required recruiter-facing sections

### Browser, accessibility, and print checks

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

Playwright checks:

- desktop/mobile render
- no page or console errors
- no horizontal overflow
- current recruiter-facing positioning
- professional/profile links
- flagship project links
- WCAG A/AA serious/critical violations via axe
- print media behavior
- successful A4 PDF generation

## Project structure

```text
.
├── .github/
│   └── workflows/
│       ├── pages.yml
│       └── quality.yml
├── scripts/
│   └── check_site.py
├── tests/
│   └── resume.spec.js
├── avatar.jpg
├── favicon.svg
├── index.html
├── package.json
├── playwright.config.js
├── styles.css
└── README.md
```

## Local preview

```bash
python -m http.server 8000
```

Open:

```text
http://127.0.0.1:8000/
```

## Print / PDF

Use the browser print dialog and choose **Save as PDF**. Screen-only calls to action are hidden and the layout switches to a compact A4-oriented presentation.

## Author

**Mykola Dotsenko**  
Software Engineer — Python/Django · Backend · Data · AI Integrations
