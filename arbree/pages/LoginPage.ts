// src/pages/LoginPage.ts
import { Page } from '@playwright/test';

class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/v1/');
  }

  async login(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.getByRole('button', { name: 'LOGIN' }).click();
  }
}

export default LoginPage;
