//pages/ProductsPage.ts
import { Page } from '@playwright/test';

class ProductsPage {
  constructor(private page: Page) {}

  async addToCart() {
    await this.page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  }

  async goToCart() {
    await this.page.getByRole('link', { name: '1' }).click();
    await this.page.getByRole('link', { name: 'CHECKOUT' }).click();
  }
}

export default ProductsPage;
