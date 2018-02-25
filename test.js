const path = require('path');
const puppeteer = require('puppeteer');

const pages = {
  browser: 'browser/browser.html',
  clooney: 'clooney/clooney.html',
  greenlet: 'greenlet/greenlet.html'
};


const openPage = async (browser, page) => {
  try {
    const browserPage = await browser.newPage();
    browserPage.on('console', msg => {
      for (let i = 0; i < msg.args().length; ++i)
        console.log(`${i}: ${msg.args()[i]}`);
    });
    await browserPage.goto(`file:${path.join(__dirname, page)}`);
    await browserPage.waitFor(1000);
  } catch (e) {
    throw e;
  }
};


const runBrowser = async (page) => {
  await puppeteer.launch({ headless: false }).then(async browser => {
    try {
      await openPage(browser, page);
      await browser.close();
    } catch (e) {
      throw e;
    }
  });
};

(async () => {
  try {
    await runBrowser(pages.browser);
    await runBrowser(pages.greenlet);
    await runBrowser(pages.clooney);
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();