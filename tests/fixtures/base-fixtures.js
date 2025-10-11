import { test as base } from '@playwright/test';

export const test = base.extend({
    page: async ({ page }, use) => {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await use(page)
    }
})

export { expect } from '@playwright/test';