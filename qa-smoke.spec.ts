import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:5173/pawserve/';

test.describe('PawServe smoke tests', () => {
  test('homepage loads with title', async ({ page }) => {
    await page.goto(BASE);
    await expect(page.locator('h1')).toContainText('Your Dog Needs');
  });

  test('health page loads (AI Symptom Checker)', async ({ page }) => {
    await page.goto(BASE + 'health');
    await expect(page.locator('h1')).toContainText('Health');
  });

  test('shop page loads with products', async ({ page }) => {
    await page.goto(BASE + 'shop');
    await expect(page.locator('h1')).toContainText('Shop');
  });

  test('vets page loads', async ({ page }) => {
    await page.goto(BASE + 'vets');
    await expect(page.locator('h1')).toContainText('Vets');
  });

  test('articles page loads', async ({ page }) => {
    await page.goto(BASE + 'articles');
    await expect(page.locator('h1')).toContainText('Articles');
  });

  test('guides page loads', async ({ page }) => {
    await page.goto(BASE + 'guides');
    await expect(page.locator('h1')).toContainText('Guides');
  });
});