// @ts-check
import { test, expect } from './fixtures/base-fixtures.js';

test.describe('Assertions Tests', async () => {

    test('Checkbox check', async ({ academyPage }) => {
        await academyPage.locator('#checkBoxOption1').check();
        await expect(academyPage.locator('#checkBoxOption1')).toBeChecked();
    });

    test('Text check', async ({ academyPage }) => {
        await expect(academyPage.locator(".totalAmount")).toHaveText("Total Amount Collected: 296")
    })

    test('Count check', async ({ academyPage }) => {
        await expect(academyPage.getByRole("radio")).toHaveCount(3)
    })

    test('Button check', async ({ academyPage }) => {
        await academyPage.locator("#hide-textbox").click()
        await expect(academyPage.getByPlaceholder("Enter Your Name")).not.toBeHidden()
    })

    test('Radio button check', async ({ academyPage }) => {
        await academyPage.locator(".radioButton").first().check()
        await expect(academyPage.locator(".radioButton").first()).toBeChecked();
    })

    test('Input text check', async ({ academyPage }) => {
        await academyPage.getByPlaceholder("Enter Your Name").fill("test")
        await expect(academyPage.getByPlaceholder("Enter Your Name")).toHaveValue("test")
    })
});
