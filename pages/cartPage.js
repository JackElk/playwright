import { Locator } from "@playwright/test";
import { BasePage} from "./basePage";

export class CartPage extends BasePage {
    constructor(page) {
        super(page);
        /** @type {Locator} */
        this.cartItemName = this.page.getByTestId('inventory-item-name');
        /** @type {Locator} */
        this.removeBackpackFromCartButton = this.page.getByTestId('remove-sauce-labs-backpack');
        /** @type {Locator} */
        this.cartItem = this.page.getByTestId('inventory-item');
        /** @type {Locator} */
        this.continueShoppingButton = this.page.getByTestId('continue-shopping');
    }

    async clickRemoveBackpackFromCartButton() {
        await this.removeBackpackFromCartButton.click();
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }
}