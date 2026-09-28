import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});

test("renders the recruiter-facing content without horizontal overflow", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1, name: "Mykola Dotsenko" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Some numbers from production" })
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Recent software work" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Selected projects" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "A few habits I rely on" })
  ).toBeVisible();
  await expect(page.locator("#education-heading")).toBeVisible();

  const overflows = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1
  );
  expect(overflows).toBe(false);
});

test("exposes the expected professional and flagship project destinations", async ({ page }) => {
  const expected = [
    "https://github.com/MykolaDotsenko",
    "https://www.linkedin.com/in/mykola-dotsenko/",
    "https://mykoladotsenko.github.io/developer-profile/resume.html",
    "https://github.com/MykolaDotsenko/domonest",
    "https://github.com/MykolaDotsenko/cultural-currency-converter",
    "https://github.com/MykolaDotsenko/shopping-budget-companion",
    "https://github.com/MykolaDotsenko/JunaLippu",
    "https://mykoladotsenko.github.io/foli-live-departures/",
    "https://github.com/MykolaDotsenko/foli-live-departures",
    "https://tradeoff-decision-lab.vercel.app/",
    "https://github.com/MykolaDotsenko/tradeoff-decision-lab",
  ];

  const hrefs = await page.locator("a").evaluateAll((links) =>
    links.map((link) => link.href)
  );

  for (const url of expected) {
    expect(hrefs).toContain(url);
  }
});

test("keeps the current positioning visible in the primary scan path", async ({ page }) => {
  await expect(page.getByText("Python/Django backend, integrations,", { exact: false })).toBeVisible();
  await expect(page.getByText("~200k", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("Kivi, OviPro, and HubSpot in one reconciliation flow.", { exact: true })).toBeVisible();
  await expect(page.getByText("Python, Django, DRF, Wagtail", { exact: false })).toBeVisible();
});

test("has no serious or critical WCAG A/AA violations", async ({ page }) => {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  const blocking = results.violations.filter(
    (violation) => violation.impact === "serious" || violation.impact === "critical"
  );

  expect(blocking).toEqual([]);
});

test("keeps print media clean and generates an A4 PDF", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium", "PDF generation is Chromium-only.");

  await page.emulateMedia({ media: "print" });

  await expect(page.locator(".page-footer")).toBeHidden();
  await expect(page.locator(".contact-section")).toBeHidden();

  const boxShadow = await page.locator(".resume").evaluate(
    (element) => getComputedStyle(element).boxShadow
  );
  expect(boxShadow).toBe("none");

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });

  expect(pdf.byteLength).toBeGreaterThan(20_000);
});
