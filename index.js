const { Builder } = require('selenium-webdriver');
const percySnapshot = require('@percy/selenium-webdriver');
const chrome  = require('selenium-webdriver/chrome');
require('chromedriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(
    new chrome.Options().headless()
  ).build();

  try {
    await driver.get('https://percy.io/');
    await percySnapshot(driver, 'Homepage');

    await driver.get('https://docs.percy.io/');
    await percySnapshot(driver, 'Docs Page');
  } finally {
    await driver.quit();
  }
})();