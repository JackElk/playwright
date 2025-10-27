export class BasePage {
    constructor(page) {
        this.page = page;
        /** @type {Locator} */
        this.cartButton = this.page.getByTestId('shopping-cart-link');
        /** @type {Locator} */
        this.cartCounter = this.page.getByTestId('shopping-cart-badge');
        /** @type {Locator} */
        this.menuButton = this.page.locator('#react-burger-menu-btn');
        /** @type {Locator} */
        this.goToInventoryNavigation = this.page.getByTestId('inventory-sidebar-link');
        /** @type {Locator} */
        this.logoutButton = this.page.getByTestId('logout-sidebar-link');
        /** @type {Locator} */
        this.loginButton = this.page.getByTestId('login-button');
    }

    async clickOnCart() {
        await this.cartButton.click();
    }

    async clickMenu() {
        await this.menuButton.click();
    }

    async clickInventoryNavigation() {
        await this.goToInventoryNavigation.click();
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }
}