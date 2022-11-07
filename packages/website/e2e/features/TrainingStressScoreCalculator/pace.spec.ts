import { test, expect } from "@playwright/test";

test("IF and TSS are calculated and displayed", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Pace");
  await page.getByLabel("Duration").fill("70");
  await page.getByLabel("Functional Threshold Pace").fill("05:25");
  await page.getByLabel("Normalized Pace").fill("07:10");
  await expect(page.getByText("76%")).toBeVisible();
  await expect(page.getByText("67")).toBeVisible();
});
