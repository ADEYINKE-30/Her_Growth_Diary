import { expect, test } from '@playwright/test'

test('homepage loads and links to the diary', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Her Growth Diary')
  await expect(
    page.getByRole('heading', { name: /for the girl who is still becoming/i }),
  ).toBeVisible()

  await page.locator('nav a:visible').filter({ hasText: /^Diary$/ }).click()
  await expect(page).toHaveURL(/\/diary$/)
})
