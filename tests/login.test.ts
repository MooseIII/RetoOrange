import { test, expect } from '@playwright/test';

test('Login exitoso', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  // Ingresa tu cuenta
  
  await page.locator('[name="username"]').fill('Admin');  
  await page.waitForTimeout(1000);
  await page.locator('[name="password"]').fill('admin123');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
  await page.waitForTimeout(3000);

});
