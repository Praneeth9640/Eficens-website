const { test, expect } = require('@playwright/test');
import { allure } from "allure-playwright";
// const HomepageSpec = require('./Homepage.spec');
test.beforeEach('Run before each test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://eficens.ai/')
    await page.waitForLoadState('networkidle');
});
test('Cloud_drop_down', async ({ page }) => {
    const elementToHover = await page.waitForSelector('text=Cloud', { state: 'attached' });
    if (!elementToHover) {
        console.error('Could not find element to hover');
        return;
    }
    await elementToHover.hover();
    await page.screenshot({ path: 'screenshots/Cloud_drop_down.png', fullPage: true });
    await page.waitForTimeout(2000);
});

test('Specialized_Migrations', async ({ page }) => {
    const elementToHover = await page.waitForSelector('text=Cloud', { state: 'attached' });
    if (!elementToHover) {
        console.error('Could not find element to hover');
        return;
    }
    await elementToHover.hover();
    await page.waitForTimeout(2000);
    const consultingservices = await page.waitForSelector('text=Specialized Migrations', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Specialized Migrations" link');
        return;
    }
    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Specialized_Migrations.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    await page.waitForTimeout(4000)
    for (let i = 30; i <= 33; i++) {
        const linkSelector = `#slick-slide${i} a`;
        await page.getByRole('button', { name: 'Next' }).click();
        await page.waitForTimeout(2000);
        await page.evaluate(() => window.scrollBy(0, 5000));
        test.setTimeout(120000);
        await page.waitForTimeout(3000);
    }
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test('Modernization', async ({ page }) => {

    await page.getByRole('button', { name: 'Cloud' }).click();
    const consultingservices = await page.waitForSelector('text=Modernization', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Modernization" link');
        return;
    }
    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(4000)
    await page.screenshot({ path: 'screenshots/Modernization.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    for (let i = 30; i <= 33; i++) {
        const linkSelector = `#slick-slide${i} a`;
        await page.getByRole('button', { name: 'Next' }).click();
        test.setTimeout(120000);
        await page.waitForTimeout(4000);
        await page.evaluate(() => window.scrollBy(0, 5000));
        await page.waitForTimeout(3000);
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test('FinOps', async ({ page }) => {
    await page.getByRole('button', { name: 'Cloud' }).click();
    const consultingservices = await page.waitForSelector('text=FinOps', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "FinOps" link');
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    test.setTimeout(120000);
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'screenshots/FinOps.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    for (let i = 30; i <= 33; i++) {
        const linkSelector = `#slick-slide${i} a`;
        await page.getByRole('button', { name: 'Next' }).click();
        await page.waitForTimeout(2000);
        await page.evaluate(() => window.scrollBy(0, 5000));
        test.setTimeout(120000);
        await page.waitForTimeout(3000);
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});


test('Observability', async ({ page }) => {
    await page.getByRole('button', { name: 'Cloud' }).click();
    const consultingservices = await page.waitForSelector('text=Observability', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Observability" link');
        return;
    }
    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Observability.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    for (let i = 30; i <= 33; i++) {
        const linkSelector = `#slick-slide${i} a`;
        await page.getByRole('button', { name: 'Next' }).click();
        await page.waitForTimeout(2000);
        await page.evaluate(() => window.scrollBy(0, 5000));
        test.setTimeout(120000);
        await page.waitForTimeout(5000);
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test('Data and Machine Learning', async ({ page }) => {
    await page.getByRole('button', { name: 'Cloud' }).click();
    const consultingservices = await page.waitForSelector('text=Data and Machine Learning', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Data and Machine Learning" link');
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Data and Machine Learning.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    for (let i = 30; i <= 33; i++) {
        const linkSelector = `#slick-slide${i} a`;
        await page.getByRole('button', { name: 'Next' }).click();
        await page.waitForTimeout(2000);
        await page.evaluate(() => window.scrollBy(0, 5000));
        test.setTimeout(120000);
        await page.waitForTimeout(3000);
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test('Cloud Managed Services', async ({ page }) => {
    await page.getByRole('button', { name: 'Cloud' }).click();
    const consultingservices = await page.waitForSelector('text=Cloud Managed Services', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "Cloud Managed Services" link');
        return;
    }

    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Cloud Managed Services.png', fullPage: true });
    await page.mouse.move(0, 0);
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
    for (let i = 30; i <= 34; i++) {
        const linkSelector = `#slick-slide${i} a`;
        await page.getByRole('button', { name: 'Next' }).click();
        await page.waitForTimeout(2000);
        await page.evaluate(() => window.scrollBy(0, 5000));
        test.setTimeout(120000);
        await page.waitForTimeout(3000);
    }
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test('AWS Consulting Service', async ({ page }) => {
    await page.getByRole('button', { name: 'Cloud' }).click();
    const consultingservices = await page.waitForSelector('text=AWS Consulting Service', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "AWS Consulting Service" link');
        return;
    }
    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0);
    await page.dispatchEvent('body', 'mousemove');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/AWS Consulting Service.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
});
test('AWS WAR', async ({ page }) => {
    await page.getByRole('button', { name: 'Cloud' }).click();
    const consultingservices = await page.waitForSelector('text=AWS WAR', { state: 'attached' });
    if (!consultingservices) {
        console.error('Could not find "AWS WAR" link');
        return;
    }
    await Promise.all([
        consultingservices.click(),
        page.waitForLoadState('networkidle')
    ]);
    await page.mouse.move(0, 0)
    await page.waitForTimeout(5000)
    await page.screenshot({ path: 'screenshots/AWS WAR.png', fullPage: true });
    await page.evaluate(() => {
        window.scrollBy(0, 6000);
    });
});

