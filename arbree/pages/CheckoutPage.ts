//pages/CheckoutPage.ts
import { Page } from '@playwright/test';

class CheckoutPage {
  constructor(private page: Page) {}

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.getByRole('button', { name: 'CONTINUE' }).click();
  }
}

export default CheckoutPage;
