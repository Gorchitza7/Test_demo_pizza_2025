import { Page } from '@playwright/test';
import { Button } from '../core/components/button';
import { Input } from '../core/components/input';

export class AuthPage {
	private _email: Input;
	private _password: Input;
	private _enter: Button;
	private _page: Page;

	constructor(page: Page) {
		this._page = page;

		this._email = new Input({
			page: this._page,
			locator: this._page.getByPlaceholder('Email'),
		});

		this._password = new Input({
			page: this._page,
			locator: this._page.getByPlaceholder('Пароль'),
		});

		this._enter = new Button({
			page: this._page,
			locator: this._page.getByRole('button', { name: 'Вход' }),
		});
	}

	async auth(email: string, password: string) {
		await this._page.goto('https://pizza-demo.purplecode.ru/auth/login');

		await this._email.fill(email);
		await this._password.fill(password);

		const event = this._page.waitForRequest(
			'https://purpleschool.ru/pizza-api-demo/auth/login'
		);

		await this._enter.click();
		await event;

		await this._page.waitForResponse(
			'https://purpleschool.ru/pizza-api-demo/auth/login'
		);
	}
}
