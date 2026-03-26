import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // Desactivado para asegurar que el flujo E2E sea secuencial
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 4, // Usamos 1 worker para que no se crucen las sesiones en el flujo E2E
  reporter: 'html',
  
  use: {
    // URL base para no repetirla en cada page.goto()
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on', // Genera un trazo de cada test (muy útil para debuguear)
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: '1-AbrirURL',
      testMatch: /abrir-url\.test\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: '2-Login',
      testMatch: /login\.test\.ts/,
      dependencies: ['1-AbrirURL'], // Solo corre si el anterior pasa
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: '3-Registro',
      testMatch: /register\.test\.ts/,
      dependencies: ['2-Login'], // Solo corre si el login pasa
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: '4-Search',
      testMatch: /search\.test\.ts/,
      dependencies: ['3-Registro'], // Solo corre si el registro pasa
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});