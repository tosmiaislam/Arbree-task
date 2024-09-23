// src/pages/ConfirmationPage.ts
import { Page } from '@playwright/test';

class ConfirmationPage {
  constructor(private page: Page) {}

  async finishOrder() {
    await this.page.getByRole('link', { name: 'FINISH' }).click();
  }

  async verifyOrder() {
    await this.page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' }).isVisible();
  }
}

export default ConfirmationPage;
