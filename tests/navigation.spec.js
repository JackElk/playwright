import { test } from '../fixtures/app.fixture.js';
import { expect } from '@playwright/test';

test.describe('Navigation tests', () => {
    test.beforeEach(async ({ sauceApp }) => {
        await sauceApp.inventoryPage.openInventoryPage();
    })

    test('Check inventory navigation', async ({ sauceApp }) => {
        await sauceApp.inventoryPage.clickOnCart();
        await sauceApp.cartPage.clickMenu();
        await sauceApp.cartPage.clickInventoryNavigation();
        await expect(sauceApp.inventoryPage.inventoryTitle, 'Title "Products" id displayed').toHaveText('Products');
    })

    test('Check logout', async ({ sauceApp }) => {
        await sauceApp.inventoryPage.clickMenu();
        await sauceApp.inventoryPage.clickLogoutButton();
        await expect(sauceApp.inventoryPage.loginButton, 'Login button is displayed').toBeVisible();
    })
});
