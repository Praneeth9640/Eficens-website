const { test, expect } = require('@playwright/test');
import { allure } from "allure-playwright";
test.beforeEach('Run before each test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://eficens.ai/')
    await page.waitForLoadState('networkidle');
});

test('Contact Us', async ({ page }) => {
    const consultingservices = await page.waitForSelector('//a[text()="Contact Us"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Contact Us" link');
        return;
    }
    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);

    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Contact Us.png', fullPage: true });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
        window.scrollBy(0, 8000);
    });
    await page.waitForTimeout(4000)

    
    
});