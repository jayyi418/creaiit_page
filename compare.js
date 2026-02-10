const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const pages = [
    { url: "http://localhost:3000/", name: "home" },
    { url: "http://localhost:3000/about", name: "about" },
    { url: "http://localhost:3000/activities", name: "activities" },
    { url: "http://localhost:3000/people", name: "people" },
    { url: "http://localhost:3000/join", name: "join" },
  ];

  for (const p of pages) {
    console.log(`Capturing ${p.name}...`);
    const page = await context.newPage();
    try {
      await page.goto(p.url, { waitUntil: "networkidle", timeout: 15000 });
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: `public/images/my_${p.name}.png`,
        fullPage: true,
      });
      console.log(`  -> saved my_${p.name}.png`);
    } catch (e) {
      console.log(`  -> FAILED: ${e.message}`);
    }
    await page.close();
  }

  await browser.close();
  console.log("Done!");
})();
