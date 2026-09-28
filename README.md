# CSS Resume — Mykola Dotsenko

A static HTML/CSS resume page kept as an earlier frontend exercise.

[**Open CSS Resume →**](https://mykoladotsenko.github.io/css-resume/) ·
[Current full CV](https://mykoladotsenko.github.io/developer-profile/resume.html) ·
[Developer profile](https://mykoladotsenko.github.io/developer-profile/) ·
[LinkedIn](https://www.linkedin.com/in/mykola-dotsenko/)

The **developer-profile** site and its print-ready CV are the current recruiter-facing versions. This repository remains public to show the earlier CSS/print implementation.

## What this repo demonstrates

- semantic static HTML;
- responsive CSS;
- A4 print rules;
- keyboard focus states;
- reduced-motion and forced-colors support;
- no runtime JavaScript.

## Checks

Static validation:

```bash
python scripts/check_site.py
```

Browser/print checks:

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

## Local preview

```bash
python -m http.server 8000
```

Open `http://127.0.0.1:8000/`.

## Current profile

For current experience, projects and production engineering examples, use:

**https://mykoladotsenko.github.io/developer-profile/**

## Author

**Mykola Dotsenko**  
Software Engineer — Python/Django · Backend · Data Integrations
