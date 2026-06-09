import { test, expect } from '@playwright/test';

test('test todo-demo2 app', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  
  await page.getByTestId('text-input').fill('Buy groceries');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Go for walk');
    await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Play');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Buy groceries' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Go for walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.getByText('Play')).toBeVisible();
});