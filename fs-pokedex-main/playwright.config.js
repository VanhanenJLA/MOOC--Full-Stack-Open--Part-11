const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e.js',
  timeout: 30000,
  use: {
    baseURL: 'http://127.0.0.1:5001',
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'npm run build && npm run start-prod',
    url: 'http://127.0.0.1:5001',
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
})
