import { test, expect } from '@playwright/test';

test.describe("Assertions Tests", async () => {
    test('Checkbox', async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await page.locator("#checkBoxOption1").check()
        await expect(page.locator("#checkBoxOption1")).toBeChecked();
    })

    test('Text check', async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await expect(page.locator(".totalAmount")).toHaveText("Total Amount Collected: 296")
    })

    test('Count check', async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await expect(page.getByRole("radio")).toHaveCount(3)
    })
});
