import { test, expect } from "@playwright/test";

test("IF and TSS are calculated and displayed", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Heart Rate");
  await page.getByLabel("Duration").fill("90");
  await page.getByLabel("Maximum Heart Rate").fill("195");
  await page.getByLabel("Average Heart Rate").fill("146");
  await expect(page.getByText("79%")).toBeVisible();
  await expect(page.getByText("94")).toBeVisible();
});
