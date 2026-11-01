// Generates a unique 1200×630 share image (and article cover) for every blog post:
//   public/blog/covers/<slug>.jpg
// Uses each article's `cover` (headline + motif) from src/lib/blog-data.ts.
//
// Needs Playwright and Google Chrome:
//   PLAYWRIGHT_CORE=/path/to/node_modules/playwright-core node scripts/blog-covers.mjs [slug ...]
// (or install playwright-core). Pass slugs to regenerate only those. Commit the images it writes.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { execSync } from "node:child_process";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "blog", "covers");
fs.mkdirSync(outDir, { recursive: true });

const memoryStorage = { getItem: () => null, setItem() {}, removeItem() {}, clear() {}, key: () => null, length: 0 };
globalThis.localStorage ??= memoryStorage;
globalThis.sessionStorage ??= memoryStorage;
// Article data comes from the server bundle (the normal build deletes it, so build it here if needed)
const bundle = path.join(root, "dist-ssr", "entry-server.js");
if (!fs.existsSync(bundle)) execSync("npx vite build --ssr src/entry-server.tsx --outDir dist-ssr", { cwd: root, stdio: "ignore" });
const { articles } = await import(pathToFileURL(bundle).href);

async function loadPlaywright() {
  if (process.env.PLAYWRIGHT_CORE) return import(pathToFileURL(path.join(process.env.PLAYWRIGHT_CORE, "index.mjs")).href);
  try {
    return await import("playwright-core");
  } catch {
    return createRequire(path.join(process.cwd(), "noop.js"))("playwright-core");
  }
}

const logo = `data:image/png;base64,${fs.readFileSync(path.join(root, "public/brand/cardinal-consulting-logo-white.png")).toString("base64")}`;
const C = { ink: "#0b1220", crimson: "#e2475d", deep: "#9e1b2c", line: "rgba(255,255,255,0.14)", soft: "rgba(255,255,255,0.55)" };

/** Abstract graphics, one per motif (400×400). */
const motifs = {
  scorecard: () => `
    <rect x="40" y="40" width="320" height="320" rx="6" fill="rgba(255,255,255,0.04)" stroke="${C.line}"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => {
      const w = [210, 170, 170, 130, 90, 90][i];
      const y = 84 + i * 46;
      return `<rect x="76" y="${y}" width="96" height="8" rx="4" fill="${C.soft}" opacity=".5"/>
        <rect x="76" y="${y + 16}" width="${w + 40}" height="12" rx="2" fill="${i === 0 ? C.crimson : "rgba(255,255,255,0.75)"}"/>`;
    }).join("")}
    <circle cx="318" cy="72" r="26" fill="${C.crimson}"/><path d="M306 72l8 8 16-17" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  compare: () => [0, 1, 2].map((i) => {
    const x = 34 + i * 116;
    const hi = i === 2;
    return `<rect x="${x}" y="${hi ? 40 : 70}" width="104" height="${hi ? 320 : 290}" rx="6" fill="${hi ? C.crimson : "rgba(255,255,255,0.05)"}" stroke="${hi ? "none" : C.line}"/>
      <rect x="${x + 18}" y="${hi ? 66 : 94}" width="68" height="10" rx="5" fill="#fff" opacity="${hi ? 1 : 0.6}"/>
      ${[0, 1, 2, 3, 4].map((r) => {
        const y = (hi ? 120 : 146) + r * 44;
        const yes = hi || (r + i) % 2 === 0;
        return yes
          ? `<path d="M${x + 38} ${y}l9 9 18-19" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="${hi ? 1 : 0.7}"/>`
          : `<path d="M${x + 42} ${y - 6}l16 16M${x + 58} ${y - 6}l-16 16" stroke="${C.soft}" stroke-width="4" stroke-linecap="round"/>`;
      }).join("")}`;
  }).join(""),
  rank: () => `
    <rect x="30" y="40" width="340" height="56" rx="28" fill="rgba(255,255,255,0.08)" stroke="${C.line}"/>
    <circle cx="66" cy="68" r="11" stroke="#fff" stroke-width="4" fill="none"/><path d="M74 76l10 10" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    <rect x="96" y="62" width="150" height="12" rx="6" fill="${C.soft}"/>
    ${[0, 1, 2, 3].map((i) => {
      const y = 126 + i * 64;
      const top = i === 0;
      return `<rect x="30" y="${y}" width="340" height="52" rx="6" fill="${top ? C.crimson : "rgba(255,255,255,0.05)"}" stroke="${top ? "none" : C.line}"/>
        <text x="52" y="${y + 33}" font-family="Inter Tight" font-weight="700" font-size="20" fill="#fff" opacity="${top ? 1 : 0.5}">#${i + 1}</text>
        <rect x="96" y="${y + 14}" width="${top ? 200 : 170 - i * 20}" height="10" rx="5" fill="#fff" opacity="${top ? 0.95 : 0.4}"/>
        <rect x="96" y="${y + 30}" width="${top ? 140 : 120 - i * 15}" height="8" rx="4" fill="#fff" opacity="${top ? 0.6 : 0.2}"/>`;
    }).join("")}`,
  bars: () => `
    <path d="M40 340h320" stroke="${C.line}" stroke-width="2"/>
    ${[90, 140, 120, 190, 240, 290].map((h, i) => `<rect x="${52 + i * 52}" y="${340 - h}" width="36" height="${h}" rx="3" fill="${i === 5 ? C.crimson : "rgba(255,255,255," + (0.25 + i * 0.1) + ")"}"/>`).join("")}
    <circle cx="322" cy="70" r="30" fill="none" stroke="${C.crimson}" stroke-width="4"/>
    <text x="322" y="82" text-anchor="middle" font-family="Inter Tight" font-weight="700" font-size="34" fill="#fff">$</text>`,
  pins: () => `
    ${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${20 + i * 72} 20v360M20 ${20 + i * 72}h360" stroke="${C.line}"/>`).join("")}
    <path d="M20 300C120 250 160 180 220 170s110-60 160-120" stroke="rgba(255,255,255,.3)" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M60 20c20 120 80 200 320 250" stroke="rgba(255,255,255,.18)" stroke-width="6" fill="none"/>
    ${[[90, 120], [300, 110], [120, 300], [320, 300]].map(([x, y]) => `<path d="M${x} ${y}c-12 0-20 9-20 20 0 15 20 34 20 34s20-19 20-34c0-11-8-20-20-20z" fill="rgba(255,255,255,.55)"/>`).join("")}
    <circle cx="210" cy="232" r="70" fill="${C.crimson}" opacity=".12"/><circle cx="210" cy="232" r="44" fill="${C.crimson}" opacity=".2"/>
    <path d="M210 150c-26 0-44 19-44 42 0 32 44 72 44 72s44-40 44-72c0-23-18-42-44-42z" fill="${C.crimson}"/>
    <circle cx="210" cy="192" r="15" fill="#fff"/>`,
  flow: () => `
    <rect x="30" y="110" width="120" height="180" rx="6" fill="rgba(255,255,255,0.05)" stroke="${C.line}"/>
    ${[0, 1, 2, 3].map((i) => `<rect x="50" y="${136 + i * 36}" width="80" height="10" rx="5" fill="#fff" opacity=".35"/>`).join("")}
    <rect x="250" y="80" width="120" height="240" rx="6" fill="${C.crimson}"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="270" y="${108 + i * 36}" width="80" height="10" rx="5" fill="#fff" opacity=".9"/>`).join("")}
    ${[150, 200, 250].map((y, i) => `<path d="M160 ${y}C200 ${y} 205 ${120 + i * 70} 240 ${120 + i * 70}" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/><path d="M232 ${114 + i * 70}l10 6-10 6" fill="#fff"/>`).join("")}
    <text x="200" y="350" text-anchor="middle" font-family="Inter Tight" font-weight="700" font-size="26" fill="${C.crimson}">301</text>`,
  chart: () => `
    ${[0, 1, 2, 3].map((i) => `<path d="M40 ${100 + i * 70}h320" stroke="${C.line}"/>`).join("")}
    <path d="M40 320L110 280L170 300L230 210L290 180L360 80V340H40Z" fill="${C.crimson}" opacity=".18"/>
    <path d="M40 320L110 280L170 300L230 210L290 180L360 80" stroke="${C.crimson}" stroke-width="6" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
    ${[[110, 280], [230, 210], [360, 80]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="#fff"/>`).join("")}`,
  spark: () => `
    ${[[80, 110], [320, 90], [70, 300], [330, 310], [200, 60], [200, 350]].map(([x, y]) => `<path d="M200 200L${x} ${y}" stroke="${C.line}" stroke-width="2"/><circle cx="${x}" cy="${y}" r="14" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.5)" stroke-width="2"/>`).join("")}
    <circle cx="200" cy="200" r="70" fill="${C.crimson}" opacity=".2"/>
    <path d="M200 140c6 34 26 54 60 60-34 6-54 26-60 60-6-34-26-54-60-60 34-6 54-26 60-60z" fill="${C.crimson}"/>
    <path d="M300 160c3 14 10 21 24 24-14 3-21 10-24 24-3-14-10-21-24-24 14-3 21-10 24-24z" fill="#fff" opacity=".85"/>`,
  shield: () => `
    <circle cx="200" cy="200" r="150" fill="none" stroke="${C.line}" stroke-dasharray="4 10" stroke-width="2"/>
    <path d="M200 70l110 40v80c0 74-48 126-110 150-62-24-110-76-110-150v-80z" fill="${C.crimson}"/>
    <path d="M200 70l110 40v80c0 74-48 126-110 150z" fill="#000" opacity=".15"/>
    <path d="M152 206l32 32 66-70" stroke="#fff" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
};

const fallbackMotif = { websites: "chart", seo: "rank", growth: "chart", "ai-technology": "spark", industry: "shield" };
const escapeHtml = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function html(a) {
  const kicker = a.cover?.kicker ?? a.seoTitle ?? a.title;
  const words = kicker.split(" ");
  const cut = Math.max(1, words.length - 2);
  const headline = `${escapeHtml(words.slice(0, cut).join(" "))} <span>${escapeHtml(words.slice(cut).join(" "))}</span>`;
  const size = kicker.length > 38 ? 58 : kicker.length > 28 ? 66 : 74;
  const motif = motifs[a.cover?.motif ?? fallbackMotif[a.pillar] ?? "chart"]();
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Inter+Tight:wght@600;700&display=block" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;overflow:hidden;background:${C.ink};font-family:Inter,system-ui,sans-serif;color:#fff;position:relative}
  .grid{position:absolute;inset:0;background-image:linear-gradient(${C.line} 1px,transparent 1px),linear-gradient(90deg,${C.line} 1px,transparent 1px);background-size:60px 60px;opacity:.35;mask-image:radial-gradient(ellipse at 75% 50%,#000 20%,transparent 75%)}
  .glow{position:absolute;right:-160px;bottom:-200px;width:760px;height:760px;border-radius:50%;background:radial-gradient(circle,rgba(226,71,93,.38),transparent 62%)}
  .bar{position:absolute;left:0;top:0;bottom:0;width:10px;background:${C.crimson}}
  .wrap{position:absolute;inset:0;padding:64px 72px;display:flex;flex-direction:column}
  .top{display:flex;align-items:center;justify-content:space-between;width:640px}
  .logo{height:34px}
  .cat{font-size:15px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:${C.crimson};display:flex;align-items:center;gap:14px}
  .cat:before{content:"";width:34px;height:2px;background:${C.crimson}}
  h1{margin-top:auto;width:640px;font-family:"Inter Tight",Inter,sans-serif;font-weight:700;font-size:${size}px;line-height:1.04;letter-spacing:-.035em;text-wrap:balance}
  h1 span{color:${C.crimson}}
  .by{margin-top:34px;font-size:19px;color:${C.soft};font-weight:500}
  .by b{color:#fff;font-weight:600}
  svg{position:absolute;right:56px;top:115px;width:400px;height:400px}
</style></head><body>
<div class="grid"></div><div class="glow"></div><div class="bar"></div>
<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">${motif}</svg>
<div class="wrap">
  <div class="top"><img class="logo" src="${logo}"><div class="cat">${escapeHtml(a.category)}</div></div>
  <h1>${headline}</h1>
  <p class="by">By <b>${escapeHtml(a.author)}</b> · visitcardinal.com/blog</p>
</div></body></html>`;
}

const only = new Set(process.argv.slice(2));
const { chromium } = await loadPlaywright();
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL ?? "chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
let n = 0;
for (const a of articles) {
  if (only.size && !only.has(a.slug)) continue;
  await page.setContent(html(a), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(outDir, `${a.slug}.jpg`), type: "jpeg", quality: 86 });
  n++;
}
await browser.close();
console.log(`blog-covers: ${n} images written to public/blog/covers/`);
