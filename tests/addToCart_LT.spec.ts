import { test, expect, chromium } from "@playwright/test";
const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright Build",
    name: "Playwright Test",
    user: "LT_USERNAME",
    accessKey: "LT_ACCESSKEY",
  },
};

test("test", async ({}) => {
  const browser = await chromium.connect(
    `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities)
    )}`
  );
  
  const page = await browser.newPage();
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole("button", { name: "Shop by Category" }).click();
  await page.getByRole("link", { name: "Laptops & Notebooks" }).click();
  await page
    .getByRole("link", { name: "HTC Touch HD HTC Touch HD HTC" })
    .click();
  await page.getByRole("button", { name: "Add to Cart" }).click();
  await expect(page.locator("#notification-box-top")).toBeVisible();
});
