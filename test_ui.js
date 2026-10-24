const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  const filePath = 'file://' + path.resolve('codice_apex_2026.html');
  await page.goto(filePath);

  // Wait for elements to be visible
  await page.waitForSelector('.brand-title');
  await page.screenshot({ path: 'codice_apex_screenshot.png', fullPage: true });

  console.log("Screenshot taken successfully");
  await browser.close();
})();
