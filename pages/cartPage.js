import { Locator } from "@playwright/test";
import { BasePage} from "./basePage";

export class CartPage extends BasePage {
    constructor(page) {
        super(page);
        /** @type {Locator} */
        this.cartItemName = page.getByTestId('inventory-item-name');
        /** @type {Locator} */
        this.removeBackpackFromCartButton = page.getByTestId('remove-sauce-labs-backpack');
        /** @type {Locator} */
        this.cartItem = page.getByTestId('inventory-item');
        /** @type {Locator} */
        this.continueShoppingButton = page.getByTestId('continue-shopping');
    }

    async clickRemoveBackpackFromCartButton() {
        await this.removeBackpackFromCartButton.click();
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }
}