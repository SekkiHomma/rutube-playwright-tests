import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедеров', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapShot();
});

test('Проверка доступности элемента уведомлений', async ({ mainPage, page }) => {
  await mainPage.openNotificationPopUp();
  await page.waitForTimeout(5000);
  await mainPage.notificationPopUpHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorectSnapShot();
});
