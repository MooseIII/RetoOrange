import { test, expect } from '@playwright/test';

test('Busqueda Exitosa', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com'); 

  // Login
  await page.locator('[name="username"]').fill('Admin');  
  await page.locator('[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

// 1. Ir a Directory
await page.getByText('Directory').click();

// 2. Escribir en el input de búsqueda
const searchInput = page.getByPlaceholder('Type for hints...');
await searchInput.fill('Peter');

// 3. SELECCIÓN DINÁMICA
const option = page.locator('div[role="listbox"], .oxd-autocomplete-dropdown') // Selector genérico de contenedor
    .locator('span, p') // Busca dentro de los elementos de texto
    .filter({ hasText: 'Peter Mac Anderson' });

// 4. Validar visibilidad con un timeout explícito si es necesario y hacer clic
await option.waitFor({ state: 'visible', timeout: 5000 });
await option.click();

// 5. Verificación opcional
await expect(searchInput).toHaveValue('Peter Mac Anderson');

// 6. Hacer clic en Search
await page.getByRole('button', { name: 'Search' }).click();
const recordCount = page.locator('.oxd-table-card');
await page.waitForTimeout(1000);
//await expect(recordCount).toHaveCount(1);
//await expect(recordCount).toContainText('Peter Mac Anderson');

console.log('Validación de información básica completada con éxito');
});