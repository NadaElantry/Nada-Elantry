const puppeteer = require("puppeteer");
const { URL, Email, password } = require("./config");

test("Test login form", async () => {
  let browser;
  jest.setTimeout(50000);
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 40
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1050, height: 600 });
    await page.goto(`${URL}/login`);
    await page.waitForSelector('input[name="email"]');
    await page.type('input[name="email"]', Email);
    await page.type('input[name="pass"]', password);
    await page.click("#loginbutton");
    // await page.waitForSelector("#recovery_code_entry");
    const url = page.url();
    expect(url).toContain(
      "https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=100"
    );
    console.log(url);
    await browser.close();
  } catch (error) {
    console.log("error happened");
    console.log(error);
    await browser.close();
  }
}); // test close
