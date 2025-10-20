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
