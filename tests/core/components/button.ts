import { Locator, Page } from '@playwright/test';

type ButtonProps = {
	page: Page;
	locator: Locator;
};

export class Button {
	private locator: Locator;

	constructor({ page, locator }: ButtonProps) {
		this.locator = locator;
	}

	async click() {
		await this.locator.click();
	}

	async isVisible() {
		return await this.locator.isVisible();
	}
}

