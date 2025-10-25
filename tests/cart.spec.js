import { test } from '../fixtures/app.fixture.js';
import { expect } from '@playwright/test';

test.describe('Cart Page test', () => {
    test.beforeEach(async ({ sauceApp }) => {
        await sauceApp.inventoryPage.openInventoryPage();
    })

    test('Check backpack added to cart', async ({ sauceApp }) => {
        await sauceApp.inventoryPage.addingBackpackToCart();
        await sauceApp.inventoryPage.clickOnCart();
        await expect(sauceApp.cartPage.cartItemName, 'Backpack title is displayed').toHaveText('Sauce Labs Backpack');
        await expect(sauceApp.cartPage.removeBackpackFromCartButton, 'Remove button is displayed in cart item').toBeVisible();
    })

    test('Check removing backpack from cart', async ({ sauceApp }) => {
        await sauceApp.inventoryPage.addingBackpackToCart();
        await sauceApp.inventoryPage.clickOnCart();
        await sauceApp.cartPage.clickRemoveBackpackFromCartButton();
        await expect(sauceApp.cartPage.cartItem, 'Cart is empty').toBeHidden();
        await expect(sauceApp.cartPage.cartCounter, 'Cart counter is not displayed').toBeHidden();
    })

    test('Check that user can return to inventory from cart', async ({ sauceApp }) => {
        await sauceApp.inventoryPage.clickOnCart();
        await sauceApp.cartPage.clickContinueShopping();
        await expect(sauceApp.inventoryPage.page).toHaveURL('inventory.html');
    })
});
