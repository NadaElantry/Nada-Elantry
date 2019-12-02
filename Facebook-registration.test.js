const puppeteer = require("puppeteer");
const { URL, Email, password, FirstName, LastName } = require("./config");

test("Test registration form ", async () => {
  let browser;
  jest.setTimeout(50000);
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 40
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1050, height: 600 });
    await page.goto(`${URL}/signup`);
    await page.waitForSelector('input[name="firstname"]');
    await page.type('input[name="firstname"]', FirstName);
    await page.type('input[name="lastname"]', LastName);
    await page.type('input[name="reg_email__"]', Email);
    await page.type('input[name="reg_email_confirmation__"]', Email);
    await page.type('input[name="reg_passwd__"]', password);
    await page.select("select#day", "4");
    await page.select("select#month", "10");
    await page.select("select#year", "1992");
    await page.evaluate(() => {
      let selectSex = document.getElementsByName("sex")[0].click();
    });
    await page.click('button[name="websubmit"]');
    await page.waitForSelector("#recovery_code_entry");
    const url = page.url();
    expect(url).toContain(
      "https://www.facebook.com/recover/code/?em[0]=tzuqdswzqf_1575212305%40tfbnw.net&rm=send_email&hash=AUZmZkrWMN66lZmA"
    );
    console.log(url);
    await browser.close();
  } catch (error) {
    console.log("error happened");
    console.log(error);
    await browser.close();
  }
}); // test close
