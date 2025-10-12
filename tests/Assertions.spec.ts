import { test, expect } from './fixtures/base-fixtures.js';

test.describe("Assertions Tests", async () => {

    test('Checkbox check', async ({ page }) => {
        await page.locator("#checkBoxOption1").check()
        await expect(page.locator("#checkBoxOption1")).toBeChecked();
    })

    test('Text check', async ({ page }) => {
        await expect(page.locator(".totalAmount")).toHaveText("Total Amount Collected: 296")
    })

    test('Count check', async ({ page }) => {
        await expect(page.getByRole("radio")).toHaveCount(3)
    })

    test('Button check', async ({ page }) => {
        await page.locator("#hide-textbox").click()
        await expect(page.getByPlaceholder("Enter Your Name")).not.toBeHidden()
    })

    test('Radio button check', async ({ page }) => {
        await page.locator('.radioButton').first().check()
        await expect(page.locator('.radioButton').first()).toBeChecked();
    })

    test('Input text check', async ({ page }) => {
        await page.getByPlaceholder("Enter Your Name").fill("test")
        await expect(page.getByPlaceholder("Enter Your Name")).toHaveValue("test")
    })
});
