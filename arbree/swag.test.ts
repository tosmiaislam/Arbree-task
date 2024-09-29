// tests/swag.test.ts
import { chromium, test } from '@playwright/test';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';

test('complete checkout flow', async ({ page }) => {
  // const browser = await chromium.launch({
  //   headless : false,
  //   slowMo: 10000,
  // })
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce')
  await productsPage.addToCart();
  await productsPage.goToCart();
  await checkoutPage.fillCheckoutInfo('Tosmia', 'Islam', '1111');
  await confirmationPage.finishOrder();
  await confirmationPage.verifyOrder();
});
