import { test, expect } from '@playwright/test';


test('Abrir página de Orange', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(3000);

  // Validación básica: título o elemento visible
  await expect(page).toHaveURL(/login/);
});