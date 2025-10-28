import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headearLocator: Locator;
  private readonly categoriesLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationButtonLocator: Locator;
  private readonly headerLogInButtonLocator: Locator;
  private readonly headerAddButtonPopUpListLocator: Locator;
  private readonly headerNotificationPopUpLocator: Locator;
  private readonly authorizationModalLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headearLocator = this.page.getByRole('banner');
    this.categoriesLocator = this.page.locator('section').filter({
      hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLogInButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopUpListLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationPopUpLocator = this.page.locator(
      '.wdp-notifications-nothing-stub-module__wrapper',
    );
    this.authorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .getByText('ТелефонПродолжитьВойти с помощьюYandex SmartCaptcha - Обработка данных');
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__innerWrapper');
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
  }

  async open() {
    await this.page.goto('https://rutube.ru/');
  }

  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }

  async headerHasCorrectAriaSnapShot() {
    await expect(this.headearLocator).toMatchAriaSnapshot({ name: 'headerAriaSnapShot.yml' });
  }

  async categoriesHasCorrectAriaSnapShot() {
    await expect(this.categoriesLocator).toMatchAriaSnapshot({
      name: 'categoriesAriaSnapShot.yml',
    });
  }

  async menuHasCorrectAriaSnapShot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuAriaSnapShot.yml' });
  }

  async openAddPopUpList() {
    await this.headerAddButtonLocator.click();
  }

  async openNotificationPopUp() {
    await this.headerNotificationButtonLocator.click();
  }

  async openAuthorizationModal() {
    await this.headerLogInButtonLocator.click();
  }

  async addPopupListHasCorrectAriaSnapshot() {
    await expect(this.headerAddButtonPopUpListLocator).toMatchAriaSnapshot({
      name: 'addButtonPopUpList.yml',
    });
  }

  async notificationPopUpHasCorrectAriaSnapshot() {
    await expect(this.headerNotificationPopUpLocator).toMatchAriaSnapshot({
      name: 'notificationPopUp.yml',
    });
  }

  async authorizahtionModalHasCorectSnapShot() {
    await expect(this.authorizationModalLocator).toMatchAriaSnapshot({
      name: 'authorizationModal.yml',
    });
  }

  async fullMenuHasCorectSnapShot() {
    await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({
      name: 'fullMenuAriaSnapShot.yml',
    });
  }

  async checkThemeAttributeValue(attributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
