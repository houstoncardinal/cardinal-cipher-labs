// Build step 3 of 3 (see "build" in package.json):
//   1. vite build                 → client bundle in dist/
//   2. vite build --ssr ...       → server renderer in dist-ssr/
//   3. node scripts/prerender.mjs → static HTML for every public route + sitemap.xml
//
// Each route is written as dist/<path>.html (Netlify serves /about from about.html),
// with its own <title>, meta description, canonical, Open Graph tags and JSON-LD.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE = "https://visitcardinal.com";

// The generated Supabase client reads localStorage when imported; give Node an inert stand-in.
const memoryStorage = { getItem: () => null, setItem() {}, removeItem() {}, clear() {}, key: () => null, length: 0 };
globalThis.localStorage ??= memoryStorage;
globalThis.sessionStorage ??= memoryStorage;

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, publicPaths, noindexPaths } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

const SEO_BLOCK = /<!--seo-start-->[\s\S]*?<!--seo-end-->/;

function page(url) {
  const { html, head } = render(url);
  if (!head.includes("<title")) throw new Error("no <title> rendered");
  return template.replace(SEO_BLOCK, head).replace("<!--app-html-->", html);
}

function outFile(url) {
  return url === "/" ? path.join(dist, "index.html") : path.join(dist, `${url.replace(/^\//, "")}.html`);
}

// Un-rendered shell for client-only routes (admin) — see public/_redirects.
fs.writeFileSync(path.join(dist, "app.html"), template.replace("<!--app-html-->", ""));

let ok = 0;
const failed = [];
for (const url of [...new Set(publicPaths)]) {
  const file = outFile(url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  try {
    fs.writeFileSync(file, page(url));
    ok++;
  } catch (err) {
    // Never break the deploy: fall back to the client-rendered shell for this URL.
    fs.writeFileSync(file, template.replace("<!--app-html-->", ""));
    failed.push(`${url} — ${err.message}`);
  }
}

// Real 404 page (Netlify serves dist/404.html with a 404 status for unknown URLs)
fs.writeFileSync(path.join(dist, "404.html"), page("/__404__"));

// sitemap.xml — indexable pages only
const today = new Date().toISOString().slice(0, 10);
const priority = (u) => (u === "/" ? "1.0" : /^\/services(\/|$)/.test(u) ? "0.9" : /^\/(portfolio|about|contact|pricing)/.test(u) ? "0.8" : "0.7");
const urls = [...new Set(publicPaths)]
  .filter((u) => !noindexPaths.has(u))
  .map((u) => `  <url><loc>${SITE}${u === "/" ? "/" : u}</loc><lastmod>${today}</lastmod><priority>${priority(u)}</priority></url>`);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });

console.log(`prerender: ${ok} pages rendered, ${urls.length} URLs in sitemap.xml`);
if (failed.length) {
  console.warn(`prerender: ${failed.length} page(s) fell back to client rendering:\n  ${failed.join("\n  ")}`);
}
