const { test, expect } = require('@playwright/test');
import { allure } from "allure-playwright";

test.beforeEach('Run before each test', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://eficens.ai/')
  await page.waitForLoadState('networkidle');
});

test('Homepage', async ({ page }) => {
  const pageTitle = await page.title();
  const expectedTitle = 'Eficens Systems | Digital Transformation, Reimagined';
  expect(pageTitle).toBe(expectedTitle);
  await page.click('text=Contact Us');
  await page.screenshot({ path: 'screenshots/Homepage_contactus_button.png', fullPage: true });
  await page.evaluate(() => window.scrollBy(0, 8000)); 
  await page.goBack();
  await page.evaluate(() => window.scrollBy(0, 8000));
  await page.waitForTimeout(2000)
  await page.locator('img[src="/assets/img/logo.svg"]').click();
  try {
    const postNavTitle = await page.title();
    expect(postNavTitle).toBe(expectedTitle);
  } catch (error) {
    console.error('Error verifying page title:', error);
 
  }
  await page.screenshot({ path: 'screenshots/Homepage.png', fullPage: true });
  try {
    for (let i = 0; i < 4; i++) {
      await page.locator('button', { name: 'Next' }).first().click();
      await page.waitForTimeout(2000);
    }
  } catch (error) {
    console.error('Error during clicking "Next" buttons:', error);

  }
  await page.evaluate(() => window.scrollBy(0, 8000));
  test.setTimeout(120000);
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'eficens Logo' }).click();
});


