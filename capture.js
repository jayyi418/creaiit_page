const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const pages = [
    { url: "https://www.next-ku.com/home", name: "home" },
    { url: "https://www.next-ku.com/about", name: "about" },
    { url: "https://www.next-ku.com/activities", name: "activities" },
    { url: "https://www.next-ku.com/people", name: "people" },
    { url: "https://www.next-ku.com/join", name: "join" },
  ];

  for (const p of pages) {
    console.log(`Capturing ${p.name}...`);
    const page = await context.newPage();
    try {
      await page.goto(p.url, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: `public/images/ref_${p.name}.png`,
        fullPage: true,
      });
      console.log(`  -> saved ref_${p.name}.png`);
    } catch (e) {
      console.log(`  -> FAILED: ${e.message}`);
    }
    await page.close();
  }

  await browser.close();
  console.log("Done!");
})();
