const { Given, Then } = require('@cucumber/cucumber');

Given('I navigate to the Playwright website', async function () {
  await this.page.goto('https://playwright.dev', { waitUntil: 'domcontentloaded' });
});

Then('the page title should contain {string}', async function (expectedText) {
  const title = await this.page.title();
  if (!title.includes(expectedText)) {
    throw new Error(`❌ Expected title to contain "${expectedText}" but got "${title}"`);
  }
  console.log(`✅ Title contains "${expectedText}" → ${title}`);
});
