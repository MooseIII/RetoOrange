import { test, expect } from '@playwright/test';

test('Login exitoso', async ({ page }) => {
  await page.goto('https://gal-back-qa.linktic.com/login');

  // Usuario (XPath)
  await page.locator('//*[@id="q-app"]/div[2]/main/section/div[1]/form/div[1]/div/label/div/div[1]/div[3]/i').click();

  // Contraseña (XPath)
 // await page.locator('//input[@type="password"]').fill(process.env.PASSWORD!);

  // Botón Ingresar (XPath)
  //await page.locator('//button[contains(.,"Ingresar")]').click();

  // Validación post-login
  //await expect(page).not.toHaveURL(/login/);
});
