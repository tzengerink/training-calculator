import { test, expect } from "@playwright/test";

test.describe("Power", () => {
  test("IF and TSS are calculated and displayed", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Duration").fill("150");
    await page.getByLabel("Functional Threshold Power").fill("250");
    await page.getByLabel("Normalized Power").fill("150");
    await expect(page.getByText("60%")).toBeVisible();
    await expect(page.getByText("90")).toBeVisible();
  });
});
