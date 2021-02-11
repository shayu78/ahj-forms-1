import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('Toggle button tooltip', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 100,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('remove class hidden from tooltip', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.button');
    button.click();
    await page.waitForSelector('div.popover');
  });
});
