import { test, expect } from '@playwright/test';

test('Registro Exitoso', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com'); 

// Login URL
  await page.locator('[name="username"]').fill('Admin');  
  await page.locator('[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Ingreso de registros
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: 'Add' }).click();

  //Registro de información
  await page.locator('[name="firstName"]').fill('Oscar'); 
  await page.locator('[name="middleName"]').fill('Alberto'); 
  await page.locator('[name="lastName"]').fill('Rodriguez');

  // 📸 Subir imagen
  await page.locator('input[type="file"]').setInputFiles('C:/Users/Camilo Preciado/Desktop/TestKube/PlayWright/Linktic.jpg');
  
 // Guardar 
 await page.getByRole('button', { name: 'Save' }).click();
 await page.waitForTimeout(3000);

});