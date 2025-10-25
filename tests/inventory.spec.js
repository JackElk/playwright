import { test } from '../fixtures/app.fixture.js';
import { expect } from '@playwright/test';

test.describe('Inventory Page tests', () => {
    test.beforeEach(async ({ sauceApp }) => {
        await sauceApp.inventoryPage.openInventoryPage();
    })

    test('Check adding backpack to cart', async ({ sauceApp }) => {
        await sauceApp.inventoryPage.addingBackpackToCart();
        await expect(sauceApp.inventoryPage.removeBackpackFromCartButton, '"Remove" button should be displayed instead of "Add to cart"').toBeVisible();
        await expect(sauceApp.inventoryPage.cartCounter, 'Counter should be "1"').toHaveText('1');
    })

    test('Check removing backpack from cart', async ({ sauceApp }) => {
        await sauceApp.inventoryPage.addingBackpackToCart();
        await sauceApp.inventoryPage.removingBackpackFromCart();
        await expect(sauceApp.inventoryPage.addBackpackToCartButton, '"Add to cart" button should be displayed instead of "Remove"').toBeVisible();
        await expect(sauceApp.inventoryPage.cartCounter).toBeHidden();
    })
});
