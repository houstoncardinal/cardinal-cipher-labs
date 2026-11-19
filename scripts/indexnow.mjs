// Tell Bing (and the other IndexNow engines: Yandex, Seznam, Naver) that pages changed, so they
// re-crawl within minutes instead of days. Bing's index feeds Microsoft Copilot and other AI
// search tools, so fast Bing indexing matters for AI visibility.
//
// Run AFTER a deploy is live:   npm run indexnow            (submits every URL in the live sitemap)
//                               npm run indexnow -- /houston-web-design /   (submits just these paths)
//
// The key file public/<KEY>.txt must stay deployed at the site root — it proves we own the domain.
const KEY = "572446b883a0c3be9ea0193b2a8a5754";
const SITE = "https://www.visitcardinal.com";
const HOST = new URL(SITE).host;

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not fetch the live sitemap (${res.status})`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(SITE) && !/\.(jpg|png|webp)$/.test(u));
}

const args = process.argv.slice(2);
const urlList = args.length ? args.map((p) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? p : `/${p}`}`)) : await sitemapUrls();

const keyCheck = await fetch(`${SITE}/${KEY}.txt`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  console.error(`IndexNow key file is not live at ${SITE}/${KEY}.txt — deploy first, then run this again.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
// 200 = accepted, 202 = accepted (key validation pending). Anything else is an error.
console.log(`IndexNow: ${res.status} ${res.statusText} — submitted ${urlList.length} URL(s)`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
