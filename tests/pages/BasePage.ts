import { Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    // const popUp = this.page.getByRole('button', { name: 'Ок' });
    await this.page.getByRole('button', { name: 'Ок', exact: true }).click();
    // if (await popUp.isVisible()) {
    //   await popUp.click();
    // } else {
    // } поп ап на главной
    const pushModalWindow: Locator = this.page
      .getByText('Показывать пуш-уведомления?Вы будете сразу узнавать о новых видео на каналах люб')
      .getByRole('button', { name: 'Не надо' });
    if (await pushModalWindow.isVisible()) {
      await pushModalWindow.click();
    }
  }
}
