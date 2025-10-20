import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    const popUp = this.page.getByRole('button', { name: 'Закрыть' });
    await this.page.getByRole('button', { name: 'Ок', exact: true }).click();
    if (await popUp.isVisible()) {
      await popUp.click();
    } else {
    }
  }
}
