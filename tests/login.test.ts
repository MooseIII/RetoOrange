import { test, expect } from '@playwright/test';

test('Login exitoso', async ({ page }) => {
  await page.goto('https://gal-back-qa.linktic.com/login');

  // Ingresa tu cuenta
  
  await page.locator('//*[@id="q-app"]/div[2]/main/section/div[1]/form/div[1]/div/label/div/div[1]/div[3]/i').fill('Interno');
  await page.waitForTimeout(1000);
  await page.getByText('Interno', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('[name="username"]').fill('1013581485');
  await page.waitForTimeout(1000);
  await page.locator('[name="password"]').fill('Prueba13.');
  await page.waitForTimeout(1000);
  await page.locator('.q-icon.on-right.notranslate.material-icons').click();
  await page.waitForTimeout(3000);

});
