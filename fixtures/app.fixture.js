import { test as base } from '@playwright/test';
import { SauceDemoApp } from '../helpers/sauceDemoApp.js';

export const test = base.extend({
    page: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.waitForURL('**/inventory.html');

        await use(page);
        await context.close();
    },

    sauceApp: async ({ page }, use) => {
        const sauceApp = new SauceDemoApp(page);
        await use(sauceApp);
    },
});