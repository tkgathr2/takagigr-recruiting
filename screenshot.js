const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 2200 } });
  await page.goto('file:///home/user/takagigr-recruiting/org-chart.html');
  await page.waitForTimeout(1000);
  const body = await page.locator('body');
  const box = await body.boundingBox();
  await page.screenshot({
    path: '/home/user/takagigr-recruiting/org-chart.png',
    clip: { x: 0, y: 0, width: box.width, height: box.height },
    type: 'png'
  });
  console.log('Screenshot saved successfully');
  await browser.close();
})();
