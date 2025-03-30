import { test } from '@playwright/test';
import { AuthPage } from '../pages/authPage';

test('User login', async ({ page }) => {
	const pageAuth = new AuthPage(page);
	await pageAuth.auth('ma@test.ru', '7maza7');
});
