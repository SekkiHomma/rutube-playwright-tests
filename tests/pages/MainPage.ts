import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headearLocator: Locator;
  private readonly categoriesLocator: Locator;
  private readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headearLocator = this.page.getByRole('banner');
    this.categoriesLocator = this.page.locator('section').filter({
      hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }

  async open() {
    await this.page.goto('https://rutube.ru/');
  }

  async headerHasCorrectAriaSnapShot() {
    await expect(this.headearLocator).toMatchAriaSnapshot();
  }

  async categoriesHasCorrectAriaSnapShot() {
    await expect(this.categoriesLocator).toMatchAriaSnapshot();
  }

  async menuHasCorrectAriaSnapShot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }
}
