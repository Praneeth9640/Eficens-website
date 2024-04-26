const { test, expect } = require('@playwright/test');
import { allure } from "allure-playwright";

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://eficens.ai/');
  await page.waitForLoadState('networkidle');
});

test('Footer_linkedln', async ({ page }) => {
  await page.evaluate(() => {
    window.scrollBy(0, 10000);
});
  const linkedInLink = await page.locator('//a[@href="https://www.linkedin.com/company/eficens-it/"]');
  await page.evaluate(() => {
    const link = document.querySelector('a[href="https://www.linkedin.com/company/eficens-it/"]');
    link.setAttribute('target', '_blank');
    link.click();
  });
  const newPage = await page.waitForEvent('popup');
  await newPage.waitForLoadState('networkidle');
  await newPage.waitForTimeout(4000);
  await newPage.screenshot({ path: 'screenshots/Footer_Linkedin.png', fullPage: true });
});


test('Footer_Twitter', async ({ page }) => {
  await page.evaluate(() => {
      window.scrollBy(0, 10000);
  });
  const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('//a[@href="https://twitter.com/EficensIT"]').click()
  ]);
  await newPage.waitForLoadState('networkidle');
  await newPage.waitForTimeout(5000);
  await newPage.screenshot({ path: 'screenshots/Footer_Twitter.png', fullPage: true });
});

test('Footer_Terms of Use',async({page})=>{
  await page.evaluate(() => {
    window.scrollBy(0, 12000);
});
await page.locator('//a[text()="Terms of Use"]').click();
await page.waitForTimeout(2000)
await page.screenshot({ path: 'screenshots/Footer_Terms of Use.png', fullPage: true });
await page.evaluate(() => {
  window.scrollBy(0, 10000);
}); 
});

test('Footer_Products',async({page})=>{
  await page.evaluate(() => {
    window.scrollBy(0, 10000);
});
await page.click('text=Products');
await page.waitForTimeout(2000)
await page.screenshot({ path: 'screenshots/Footer_Products.png', fullPage: true });
await page.evaluate(() => {
  window.scrollBy(0, 10000);
}); 
});

test('Footer_Partners',async({page})=>{
  await page.evaluate(() => {
    window.scrollBy(0, 12000);
});
await page.locator('//a[text()="Partners"]').click();
await page.waitForTimeout(2000)
await page.screenshot({ path: 'screenshots/Footer_Partners.png', fullPage: true });
await page.evaluate(() => {
  window.scrollBy(0, 10000);
}); 
});

test('Footer_About Us',async({page})=>{
  await page.evaluate(() => {
    window.scrollBy(0, 12000);
});
await page.locator('//a[text()="About Us"]').click();
await page.waitForTimeout(2000)
await page.screenshot({ path: 'screenshots/Footer_About Us.png', fullPage: true });
await page.evaluate(() => {
  window.scrollBy(0, 10000);
}); 
});

test('Footer_Careers',async({page})=>{
  await page.evaluate(() => {
    window.scrollBy(0, 12000);
});
await page.locator('//a[text()="Careers"]').click();
await page.waitForTimeout(2000)
await page.screenshot({ path: 'screenshots/Footer_Careers.png', fullPage: true });
await page.evaluate(() => {
  window.scrollBy(0, 10000);
}); 
});

test('Footer_Contact Us',async({page})=>{
  await page.evaluate(() => {
    window.scrollBy(0, 10000);
});
await page.click('text=Contact Us');
await page.waitForTimeout(2000)
await page.screenshot({ path: 'screenshots/Footer_Contact Us.png', fullPage: true });
await page.evaluate(() => {
  window.scrollBy(0, 10000);
}); 
});

