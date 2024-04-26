const { test, expect } = require('@playwright/test');
import { allure } from "allure-playwright";
// const Cloudspec = require('./Cloud.spec');
test.beforeEach('Run before each test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://eficens.ai/')
    await page.waitForLoadState('networkidle');
});
test('Services_drop_down', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" Services "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " Services "');
        return;
    }
    await servicesElement.hover();
    await page.screenshot({ path: 'screenshots/Services_drop_down.png', fullPage: true });
    await page.waitForTimeout(2000);
});

test('Digital Transformation Services', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" Services "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " Services "');
        return;
    }

    await servicesElement.hover();
    const consultingservices = await page.waitForSelector('//span[text()="Digital Transformation Services"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Digital Transformation Services" link');
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Digital Transformation Services.png', fullPage: true });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(5000);
});

test('Data Platform Services', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" Services "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " Services "');
        return;
    }

    await servicesElement.hover();
    const consultingservices = await page.waitForSelector('//span[text()="Data Platform Services"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Data Platform Services" link');
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Data Platform Services.png', fullPage: true });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(5000);
});

test('Consulting Services', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" Services "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " Services "');
        return;
    }
    await servicesElement.hover();
    const consultingservices = await page.waitForSelector('//span[text()="Consulting Services"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Consulting Services" link');
        return;
    }
    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Consulting Services.png', fullPage: true });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(5000);
});