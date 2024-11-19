import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
// Navigate to the LambdaTest e-commerce playground site
await page.goto('https://ecommerce-playground.lambdatest.io/');

// Locate and click the search textbox to enter search criteria
await page.getByRole('textbox', { name: 'Search For Products' }).click();

// Type "ipod" in the search textbox to look for the product
await page.getByRole('textbox', { name: 'Search For Products' }).fill('ipod');

// Click the search button to initiate the product search
await page.getByRole('button', { name: 'Search' }).click();

// Set the filter field in the filter panel
await page.locator('#mz-filter-panel-0-0').getByPlaceholder('Minimum Price').click();
await page.locator('#mz-filter-panel-0-0').getByPlaceholder('Minimum Price').fill('100');
await page.locator('#mz-filter-panel-0-0').getByPlaceholder('Maximum Price').click();
await page.locator('#mz-filter-panel-0-0').getByPlaceholder('Maximum Price').fill('150');
await page.locator('#mz-filter-panel-0-0').getByPlaceholder('Maximum Price').press('Enter');

// Click on the iPod Classic product from the search results
await page.locator('#mz-product-grid-image-80-212469').click();

// Click the "Add to Cart" button to add the iPod Classic to the shopping cart
await page.getByRole('button', { name: 'Add to Cart' }).click();

// Assert that a notification is visible, indicating the product was added to the cart successfully
await expect(page.locator('#notification-box-top')).toBeVisible();

// Click on the "Checkout" link to proceed to the checkout page
await page.getByRole('link', { name: 'Checkout ' }).click();

// Verify that the iPod Classic is listed in the cart on the checkout page
await expect(page.locator('#checkout-cart').getByText('iPod Classic')).toBeVisible();

// Confirm that the price displayed for the iPod Classic is $122.00
await expect(page.getByRole('cell', { name: '$122.00' }).nth(2)).toBeVisible();
})
