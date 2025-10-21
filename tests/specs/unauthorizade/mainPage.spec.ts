import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедеров', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapShot();
});

test('Проверка доступности элементов табов категории', async ({ mainPage }) => {
  await mainPage.categoriesHasCorrectAriaSnapShot();
});

test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapShot();
});

test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
  await mainPage.openAddPopUpList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элемента уведомлений', async ({ mainPage, page }) => {
  await mainPage.openNotificationPopUp();
  await page.waitForTimeout(5000);
  await mainPage.notificationPopUpHasCorrectAriaSnapshot();
});

test('Проверка доступности модального окна авторизации', async ({ mainPage, page }) => {
  await mainPage.openAuthorizationModal();
  await page.waitForTimeout(5000);
  await mainPage.authorizahtionModalHasCorectSnapShot();
});
