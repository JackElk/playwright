import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  // Expect a title "to contain" a substring.
  await expect(page.getByLabel("Try searching to get started")).toHaveText("Try searching to get started");
});
