import { test, expect } from '@playwright/test';

test('GET /posts retorna 200', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  expect(response.status()).toBe(200);
});
