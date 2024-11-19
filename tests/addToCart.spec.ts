import { test, expect,  } from "@playwright/test";

test("test", async ({page}) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole("button", { name: "Shop by Category" }).click();
  await page.getByRole("link", { name: "Laptops & Notebooks" }).click();
  await page
    .getByRole("link", { name: "HTC Touch HD HTC Touch HD HTC" })
    .click();
  await page.getByRole("button", { name: "Add to Cart" }).click();
  await expect(page.locator("#notification-box-top")).toBeVisible();
});
