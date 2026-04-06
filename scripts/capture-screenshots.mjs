/**
 * Capture section-level screenshots from the running dev server.
 * Usage: node scripts/capture-screenshots.mjs
 * Requires: npm run dev (localhost:5173 must be up)
 */
import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'figma-export', 'screenshots');
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';

// Section map: filename → CSS selector (element screenshot)
const SECTIONS = [
  { file: 'header.png',       selector: null,          description: 'Header / Language switcher (viewport top)' },
  { file: 'hero.png',         selector: 'section:first-of-type', description: 'Hero section' },
  { file: 'features.png',     selector: '#features',   description: 'Features grid' },
  { file: 'how-it-works.png', selector: '#how-it-works', description: 'How it works' },
  { file: 'benefits.png',     selector: '#benefits',   description: 'Benefits / Value props' },
  { file: 'cta.png',          selector: 'section.py-20, section.bg-primary, section:nth-of-type(5)', description: 'CTA / Conversion section' },
  { file: 'footer.png',       selector: 'footer',      description: 'Footer' },
];

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  console.log('Launching browser (system Chrome)...');
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log(`Navigating to ${BASE_URL} ...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // Let React hydrate + animations settle
  await page.waitForTimeout(1500);

  for (const { file, selector, description } of SECTIONS) {
    const dest = path.join(OUT_DIR, file);
    try {
      if (!selector) {
        // Header: visible viewport screenshot of the top 120px
        await page.screenshot({
          path: dest,
          clip: { x: 0, y: 0, width: 1440, height: 120 },
        });
      } else {
        const el = page.locator(selector).first();
        await el.waitFor({ state: 'visible', timeout: 5000 });
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300); // let any scroll-triggered CSS settle
        await el.screenshot({ path: dest });
      }
      console.log(`✅  ${file}  —  ${description}`);
    } catch (err) {
      console.error(`❌  ${file}  —  ${description}: ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\nScreenshots saved to: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
