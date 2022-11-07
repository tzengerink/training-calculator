import { expect, Page, test } from "@playwright/test";

const fillTimePicker = async (
  page: Page,
  isMobile: boolean,
  label: string,
  minutes: string,
  seconds: string
) => {
  if (isMobile) {
    await page.getByLabel(label).click();
    await page
      .locator(`[aria-label="${minutes} minutes"]`)
      .click({ force: true });
    await page
      .locator(`[aria-label="${seconds} seconds"]`)
      .click({ force: true });
    await page.click("text=OK");
    return;
  }

  await page.getByLabel(label).click({ force: true });
  await page.keyboard.type(minutes, { delay: 100 });
  await page.keyboard.type(seconds, { delay: 100 });
};

test.describe("Pace", () => {
  test("IF and TSS are calculated and displayed", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/");
    await page.click("text=Pace");
    await page.getByLabel("Duration").fill("70");

    await fillTimePicker(
      page,
      isMobile,
      "Functional Threshold Pace",
      "05",
      "25"
    );
    await fillTimePicker(page, isMobile, "Normalized Pace", "10", "15");

    await expect(page.getByText("53%")).toBeVisible();
    await expect(page.getByText("33")).toBeVisible();
  });
});
