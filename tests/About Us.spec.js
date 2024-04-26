const { test, expect } = require('@playwright/test');
import { allure } from "allure-playwright";
test.beforeEach('Run before each test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://eficens.ai/')
    await page.waitForLoadState('networkidle');
});

test(' About Us_drop_down', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" About Us "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " About Us "');
        return;
    }
    await servicesElement.hover();
    await page.screenshot({ path: 'screenshots/ About Us .png', fullPage: true });
    await page.waitForTimeout(2000);
});

test('Company', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" About Us "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " About Us "');
        return;
    }
    await servicesElement.hover();
    const consultingservices = await page.waitForSelector('//span[text()="Company"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Company" link');
        421
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Company.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(5000);
});

test('Leadership', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" About Us "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " About Us "');
        return;
    }
    await servicesElement.hover();
    const consultingservices = await page.waitForSelector('//span[text()="Leadership"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Leadership" link');
        421
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Leadership.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(5000);
});

test('CSR', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" About Us "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " About Us "');
        return;
    }
    await servicesElement.hover();
    const consultingservices = await page.waitForSelector('//span[text()="CSR"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "CSR" link');
        421
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/CSR.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(5000);
});

test('Partners', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" About Us "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " About Us "');
        return;
    }
    await servicesElement.hover();
    const consultingservices = await page.waitForSelector('//span[text()="Partners"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Partners" link');
        421
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Partners.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(5000);
});

test('Careers', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" About Us "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " About Us "');
        return;
    }
    await servicesElement.hover();
    const consultingservices = await page.waitForSelector('//span[text()="Careers"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Careers" link');
        421
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Careers.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(5000);
});

test('Resources', async ({ page }) => {
    const servicesElement = await page.waitForSelector('//div[text()=" About Us "]');
    if (!servicesElement) {
        console.error('Could not find the element with text " About Us "');
        return;
    }
    await servicesElement.hover();
    const consultingservices = await page.waitForSelector('//span[text()="Resources"]', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Resources" link');
        421
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Resources.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(5000);
});