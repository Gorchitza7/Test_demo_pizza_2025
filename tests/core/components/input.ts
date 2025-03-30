import { Locator, Page } from '@playwright/test';

type InputProps = {
	page: Page;
	locator: Locator;
};

export class Input {
	private locator: Locator;

	constructor({ page, locator }: InputProps) {
		this.locator = locator;
	}

	async fill(value: string) {
		await this.locator.fill(value);
	}

	async clear() {
		await this.locator.fill('');
	}
}