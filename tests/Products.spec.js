const { test, expect } = require('@playwright/test');
import { allure } from "allure-playwright";
test.beforeEach('Run before each test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://eficens.ai/')
    await page.waitForLoadState('networkidle');
});

test('Products', async ({ page }) => {
    const consultingservices = await page.waitForSelector('//a[text()="Products"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Products" link');
        return;
    }
    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);

    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Products.png', fullPage: true });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
        window.scrollBy(0, 8000);
    });
    await page.waitForTimeout(4000)

});