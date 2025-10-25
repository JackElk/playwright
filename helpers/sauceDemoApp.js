import { InventoryPage } from '../pages/inventoryPage.js';
import { CartPage } from '../pages/cartPage.js';

/**
 * @typedef {import('../pages/inventoryPage.js').InventoryPage} InventoryPage
 * @typedef {import('../pages/cartPage.js').CartPage} CartPage
 */

export class SauceDemoApp {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        /** @type {InventoryPage} */
        this.inventoryPage = new InventoryPage(page);
        /** @type {CartPage} */
        this.cartPage = new CartPage(page);
    }
}