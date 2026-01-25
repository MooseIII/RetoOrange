import { test, expect } from '@playwright/test';


test('Abrir página de login GAL QA', async ({ page }) => {
  await page.goto('https://gal-back-qa.linktic.com/login');

  // Validación básica: título o elemento visible
  await expect(page).toHaveURL(/login/);
});