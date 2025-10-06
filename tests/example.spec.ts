import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await expect(page.getByLabel('Try searching to get started')).toHaveText('Try searching to get started');
  await page.locator('input[name="search_query"]').fill('Playwright');
  await page.getByTitle('Search').click();
  await expect(page.locator("//div[@id='chip-shape-container']//button[@role='tab']//div[normalize-space()='All']")).toHaveText('All');
  await page.getByRole('navigation').getByLabel('You').click();
  await expect(page.locator('.promo-title.style-scope.ytd-background-promo-renderer')).toHaveText('Enjoy your favorite videos');
});
