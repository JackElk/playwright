import { Locator } from "@playwright/test";
import { BasePage} from "./basePage";

export class InventoryPage extends BasePage{
    constructor(page) {
        super(page);
        /** @type {Locator} */
        this.addBackpackToCartButton = this.page.getByTestId('add-to-cart-sauce-labs-backpack');
        /** @type {Locator} */
        this.removeBackpackFromCartButton = this.page.getByTestId('remove-sauce-labs-backpack');
        /** @type {Locator} */
        this.inventoryTitle = this.page.getByTestId('title');
    }

    async openInventoryPage() {
        await this.page.goto('/inventory.html');
    }

    async addingBackpackToCart() {
        await this.addBackpackToCartButton.click();
    }

    async removingBackpackFromCart() {
        await this.removeBackpackFromCartButton.click();
    }
}