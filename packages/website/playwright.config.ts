import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const PORT = 3000;

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  retries: 2,
  use: {
    headless: true,
    screenshot: "only-on-failure",
    baseURL: `http://localhost:${PORT}`,
    ignoreHTTPSErrors: true,
  },
  projects: [
    { name: "Mobile Chrome", use: { ...devices["Pixel 5"] } },
    { name: "Mobile Safari", use: { ...devices["iPhone 13 Pro"] } },
    { name: "Desktop Chrome", use: { ...devices["Desktop Chrome"] } },
    { name: "Desktop Safari", use: { ...devices["Desktop Safari"] } },
  ],
  webServer: {
    command: `yarn dev -p ${PORT}`,
    port: PORT,
  },
};

export default config;
