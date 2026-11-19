// Technical SEO guide: crawling, rendering, indexing, canonicals, status codes, Core Web Vitals, JavaScript and AI crawlers.
import type { BlogArticle } from "../blog-data";

const SRC = {
  robots: { label: "Google Search Central — Robots.txt Introduction and Guide", url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro" },
  canonical: { label: "Google Search Central — How to specify a canonical URL with rel=\"canonical\" and other methods", url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" },
  status: { label: "Google — How HTTP Status Codes Affect Google's Crawlers", url: "https://developers.google.com/search/docs/crawling-indexing/http-network-errors" },
  js: { label: "Google Search Central — Understand the JavaScript SEO basics", url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" },
  sitemap: { label: "Google Search Central — Build and submit a sitemap", url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" },
  vitals: { label: "web.dev — Web Vitals", url: "https://web.dev/articles/vitals" },
  inp: { label: "web.dev — Interaction to Next Paint becomes a Core Web Vital on March 12 (2024)", url: "https://web.dev/blog/inp-cwv-march-12" },
  mobile: { label: "Google Search Central — Mobile site and mobile-first indexing best practices", url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" },
  https: { label: "Google Search Central Blog — HTTPS as a ranking signal (2014)", url: "https://developers.google.com/search/blog/2014/08/https-as-ranking-signal" },
  openai: { label: "OpenAI — Overview of OpenAI Crawlers", url: "https://developers.openai.com/api/docs/bots" },
};

const article: BlogArticle = {
  slug: "technical-seo-guide",
  title: "Technical SEO: The Plain-English Guide (and the Two Bugs We Found on Our Own Site)",
  seoTitle: "Technical SEO Guide: Crawling, Indexing & Checklist",
  excerpt:
    "Technical SEO decides whether search engines and AI crawlers can find, render and index your pages at all. Here is how the pipeline works, what breaks it, and the two mistakes we found hiding in our own website.",
  seoDescription:
    "Technical SEO explained: crawling, indexing, canonical tags, soft 404s, Core Web Vitals and JavaScript SEO, plus a prioritized checklist and a real audit.",
  category: "SEO & Local Search",
  pillar: "seo",
  priority: 4,
  author: "Hunain Qureshi",
  date: "2026-11-18",
  readTime: "12 min read",
  featured: false,
  keywords: [
    "technical seo",
    "technical seo checklist",
    "what is technical seo",
    "crawling and indexing",
    "canonical tag",
    "core web vitals",
    "xml sitemap",
    "robots.txt",
    "javascript seo",
    "site speed seo",
    "soft 404",
  ],
  relatedService: "/services/seo-analytics",
  sources: [SRC.robots, SRC.canonical, SRC.status, SRC.js, SRC.sitemap, SRC.vitals, SRC.inp, SRC.mobile, SRC.https, SRC.openai],
  cover: { kicker: "Can Google actually read your site?", motif: "flow" },
  about: [{ name: "Search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" }],
  takeaways: [
    "Technical SEO is the plumbing that lets search engines and AI crawlers find, render, understand and index your pages; content and links cannot rank a page that never makes it into the index.",
    "Robots.txt controls crawling, not indexing. Google says plainly that it is not a mechanism for keeping a page out of Google; use noindex or a password instead.",
    "Your canonical tags, redirects and XML sitemap must all name the same URL. When they disagree, you are asking Google to guess.",
    "A page that says \"not found\" but returns a 200 status is a soft 404, and single-page apps create them by the thousand without anyone noticing.",
    "Core Web Vitals \"good\" means LCP within 2.5 seconds, INP of 200 milliseconds or less, and CLS of 0.1 or less, measured at the 75th percentile of real visits.",
  ],
  faqs: [
    {
      question: "What is technical SEO?",
      answer:
        "Technical SEO is the work that makes a website easy for search engines to crawl, render, understand and index. It covers robots.txt, XML sitemaps, canonical tags, redirects, HTTP status codes, site speed and Core Web Vitals, mobile rendering, HTTPS, structured data and JavaScript rendering. It does not make a page relevant by itself, but it decides whether good content can be found and indexed at all.",
    },
    {
      question: "Does robots.txt stop a page from appearing in Google?",
      answer:
        "No. Google's documentation states that robots.txt is not a mechanism for keeping a web page out of Google. It tells crawlers which URLs they may request, but a blocked URL can still be indexed if other pages link to it. To keep a page out of search results, use a noindex rule or put the page behind a password, and make sure the page is not blocked from crawling so Google can see the noindex.",
    },
    {
      question: "What is a soft 404?",
      answer:
        "A soft 404 is a page that tells visitors it does not exist, or shows little or no content, while the server returns a 200 success status code. Google flags these in Search Console because the status code and the content disagree. The fix is to return a real 404 or 410 status for missing pages, or redirect the URL if the content moved somewhere else.",
    },
    {
      question: "What are the Core Web Vitals thresholds?",
      answer:
        "According to web.dev, a good experience means Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less. Google recommends measuring at the 75th percentile of page loads, split by mobile and desktop. Interaction to Next Paint replaced First Input Delay as a Core Web Vital on March 12, 2024.",
    },
    {
      question: "Is a 301 or 302 redirect better for SEO?",
      answer:
        "Use a 301 (or 308) when a page has moved for good. Google treats a permanent redirect as a strong signal that the target URL should be processed in place of the old one. A 302 (or 307) is a weak signal meant for temporary moves, so the old URL may keep showing in search. Using 302s for permanent changes is a common source of indexing confusion.",
    },
    {
      question: "Can Google index JavaScript websites?",
      answer:
        "Yes. Google crawls, renders and indexes JavaScript pages, queuing pages that return a 200 status for rendering in a headless Chromium browser. Rendering can be delayed, and Google notes that not all bots can run JavaScript. Server-side rendering or pre-rendering to static HTML is still the safer choice, because it gives every crawler, including those that do not run JavaScript, the full content on the first request.",
    },
    {
      question: "How often should I do a technical SEO check?",
      answer:
        "Check the essentials after every redesign, platform change or major deploy, and review Google Search Console's Page indexing and Core Web Vitals reports at least monthly. A full technical audit once or twice a year is reasonable for most small and mid-sized business sites. Problems like a wrong canonical host or a catch-all rewrite rule can be introduced by a single configuration change.",
    },
  ],
  content: {
    sections: [
      {
        heading: "What is technical SEO?",
        body: `Technical SEO is the foundation that lets search engines and AI crawlers find, render, understand and index your pages. It is everything between "your page exists" and "your page is eligible to rank": the robots.txt file, the XML sitemap, canonical tags, redirects, status codes, speed, mobile rendering, HTTPS, structured data and JavaScript.

None of it makes a page relevant. That is the job of content and on-page work, which our [on-page SEO checklist](/blog/on-page-seo-checklist) covers. But technical problems cap everything else. A brilliant service page that returns the wrong status code, or that tells Google the real version lives somewhere else, will not rank no matter how good the writing is.

Here is the part most guides skip: technical SEO mistakes are usually invisible. The page looks fine in a browser. Your team sees nothing wrong. Only a crawler, or someone checking the way a crawler does, notices that the signals underneath contradict each other.

I know because we found two of these on our own website this month, and I will walk through both below. If you are new to the wider discipline, start with [what SEO is and how it works](/blog/what-is-seo), then come back here.`,
        highlight: "Technical SEO does not make a page good. It decides whether a good page gets seen at all.",
        visual: {
          kind: "triad",
          title: "The three jobs of technical SEO",
          caption: "Every item on a technical SEO checklist serves one of these three jobs.",
          center: "Indexable pages",
          items: [
            { title: "Access", body: "Crawlers can reach the URL: robots.txt, internal links, sitemaps, status codes and server health." },
            { title: "Understanding", body: "Crawlers see the full content and the one true URL: rendering, canonicals, redirects and structured data." },
            { title: "Experience", body: "The page works well for people: Core Web Vitals, mobile parity and HTTPS." },
          ],
        },
      },
      {
        heading: "How crawling and indexing work: crawl, render, index",
        body: `Google's own JavaScript documentation describes three phases: crawling, rendering and indexing. Understanding them makes every other technical SEO decision obvious.

Crawling is Googlebot requesting a URL and reading the response: the status code, the headers and the raw HTML. Before it requests anything, it checks robots.txt to see whether it is allowed.

Rendering is running the page the way a browser would. Google says it queues every page that returns a 200 status for rendering, where a headless Chromium executes the JavaScript. The page may sit in that queue for a few seconds, and Google notes it can take longer than that. Pages with non-200 codes, such as a 404, might skip rendering entirely.

Indexing is Google analyzing the rendered content, deciding which URL is canonical among duplicates, and storing it so it can be served in results. A 200 status does not guarantee indexing; Google says so directly.

The practical lesson: anything that only appears after JavaScript runs reaches Google later than content in the initial HTML, and reaches some other crawlers not at all.`,
        visual: {
          kind: "steps",
          title: "The crawl, render, index pipeline",
          caption: "Based on Google Search Central's JavaScript SEO basics. A failure at any step stops the steps after it.",
          items: [
            { title: "Crawl", body: "Googlebot checks robots.txt, requests the URL, and reads the status code, headers and raw HTML." },
            { title: "Render", body: "Pages that return 200 are queued for rendering in headless Chromium, which runs the JavaScript." },
            { title: "Index", body: "Google reads the rendered content, picks a canonical URL among duplicates, and stores it as eligible to appear in results." },
          ],
        },
      },
      {
        heading: "Robots.txt vs noindex: which one keeps a page out of Google?",
        body: `This is the most common technical SEO misunderstanding I see. People add a page to robots.txt to "hide" it, then find it in search results months later.

Google's robots.txt guide is explicit: robots.txt "is not a mechanism for keeping a web page out of Google." It controls crawling, meaning which URLs a crawler may request. If other pages link to a blocked URL, Google can still index the address without ever reading the page.

To keep a page out of search, Google recommends a noindex rule or password protection. There is a catch that trips people up: if you block a page in robots.txt and also add noindex, Google cannot crawl the page, so it never sees the noindex. Pick one job for each tool.`,
        visual: {
          kind: "compare",
          title: "Robots.txt vs noindex",
          caption: "Source: Google Search Central's robots.txt guide.",
          columns: ["Robots.txt disallow", "Noindex rule"],
          rows: [
            { label: "Controls", values: ["Whether a crawler may request the URL", "Whether the page may appear in results"] },
            { label: "Keeps a page out of Google", values: [false, true] },
            { label: "Page must be crawlable to work", values: [null, true] },
            { label: "Good for", values: ["Saving crawl effort on endless filters and internal search", "Thank-you pages, thin tag archives, staging copies"] },
          ],
        },
      },
      {
        heading: "XML sitemaps: what belongs in yours",
        body: `An XML sitemap is a list of the URLs you want search engines to know about. It does not force indexing, but it helps discovery and, according to Google's canonical documentation, it is a weak signal about which URL you prefer.

Google's sitemap guide sets the rules that matter:

The limits are 50,000 URLs or 50MB uncompressed per sitemap file. Larger sites split into several sitemaps listed in a sitemap index.

Use fully-qualified, absolute URLs, and list the version of each URL you want shown in results. Google crawls listed URLs exactly as written, so a sitemap full of URLs that redirect sends a mixed message.

Google uses the lastmod date only if it is consistently and verifiably accurate, and it ignores the priority and changefreq values entirely. A sitemap that stamps every page with today's date on every build teaches Google to ignore your dates.

Reference the sitemap in robots.txt and submit it in Search Console and Bing Webmaster Tools. If your sitemap is generated automatically, read it once with your own eyes. That is how we caught one of our own problems.`,
        bullets: [
          "Include: indexable, canonical, 200-status URLs you want found",
          "Exclude: redirects, noindexed pages, 404s, parameter duplicates and staging URLs",
          "Use the exact protocol and host your canonical tags use (https, and www or non-www, consistently)",
        ],
      },
      {
        heading: "Canonical tags and redirects: the loop we found on our own site",
        body: `A canonical tag is a line in a page's head, a link element with rel="canonical", that tells search engines which URL is the main version of a page. Redirects send visitors and crawlers from one URL to another. Google's canonicalization guide lists both as strong signals, ranks sitemap inclusion as a weak one, and warns against specifying different canonical URLs for the same page with different methods.

In November 2026 we ran a self-audit of visitcardinal.com, a React single-page app that we pre-render to static HTML at build time. Every page's canonical tag pointed at visitcardinal.com, without the www. But that address 301-redirected to www.visitcardinal.com. So each page told Google "the real version is over there," and "over there" redirected straight back. The XML sitemap and the sitemap line in robots.txt listed the redirecting URLs too.

Nothing looked broken. Every page loaded. The site worked for every human visitor. It took requesting the pages as Googlebot and reading the canonical tag next to the redirect target to see the contradiction.

The fix was to drive the canonical tags, the sitemap and the structured data from one configuration value, the www host, so they cannot drift apart again. If you are planning a move, our [website redesign SEO checklist](/blog/website-redesign-seo-checklist) covers redirect mapping in depth.`,
        highlight: "Your canonical tag, your redirects and your sitemap are three votes for the same URL. If they vote differently, Google has to guess.",
        bullets: [
          "Use a 301 or 308 for permanent moves. Google treats them as a strong signal; a 302 or 307 is a weak one, so the old URL may linger in results",
          "Point canonicals at the final URL, never at an address that redirects",
          "Keep chains short. Googlebot generally follows up to 10 redirect hops, but every hop is a chance for something to break",
        ],
      },
      {
        heading: "HTTP status codes and soft 404s",
        body: `Every response a crawler gets starts with a status code, and Google's documentation explains how each family is treated. A 2xx means the content can be considered for indexing. A 404 or 410 tells Google the content does not exist, so indexed URLs drop out and crawling of them slows down. Persistent 5xx server errors make Google slow its crawling and, eventually, remove those URLs from the index.

A soft 404 is the sneaky one: a page that returns 200 but whose content says "not found," or is empty. Search Console reports these because the code and the content disagree.

Our self-audit found the second bug here. A leftover catch-all rewrite rule, sending every path to index.html with a 200 status, is standard in single-page app hosting. On our site it meant any made-up URL returned 200 with the homepage's content and a canonical pointing at the homepage. Type a typo into the address bar and Google would see another copy of our homepage.

We removed the catch-all so unknown URLs now return a real 404 page. Google's JavaScript guide offers two fallbacks if you cannot change the server: redirect to a URL that returns a 404, or add a noindex tag to the error view.

The test takes ten seconds: request a URL that cannot exist, such as /this-page-does-not-exist-123, and read the status code. Our [step-by-step SEO audit guide](/blog/how-to-do-an-seo-audit) walks through that check and the others.`,
        visual: {
          kind: "compare",
          title: "How Google treats common status codes",
          caption: "Source: Google's documentation on how HTTP status codes affect its crawlers.",
          columns: ["What Google does", "Use it for"],
          rows: [
            { label: "200 OK", values: ["Considers the content for indexing (not guaranteed)", "Real pages with real content"] },
            { label: "301 / 308", values: ["Strong signal to process the target URL", "Permanent moves"] },
            { label: "302 / 307", values: ["Weak signal; old URL may stay in results", "Genuinely temporary moves"] },
            { label: "404 / 410", values: ["Treats content as nonexistent; drops it from the index", "Pages that are gone"] },
            { label: "5xx", values: ["Slows crawling; persistent errors drop URLs", "Nothing. Fix the server"] },
            { label: "200 with an error page", values: ["Flags a soft 404", "Nothing. Return a real 404"] },
          ],
        },
      },
      {
        heading: "Core Web Vitals and site speed SEO",
        body: `Core Web Vitals are Google's three user-experience metrics for loading, responsiveness and visual stability. web.dev defines "good" as Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less. The measurement that counts is the 75th percentile of real page loads, split by mobile and desktop, so your fast office Wi-Fi is not the test.

Interaction to Next Paint (INP) replaced First Input Delay (FID) as a Core Web Vital on March 12, 2024. If an older checklist still mentions FID, it is out of date. INP is harder to pass because it measures responsiveness across the whole visit, not only the first tap.

Keep speed in proportion. It matters for rankings and much more for conversions, but a fast page that answers the wrong question still loses to a slower page that answers the right one. The biggest wins on small business sites are usually oversized images, heavy third-party scripts such as chat widgets and tag managers, and web fonts that shift the layout as they load. Ongoing monitoring belongs in your [website maintenance checklist](/blog/website-maintenance-checklist).`,
        visual: {
          kind: "stats",
          title: "Core Web Vitals: what counts as good",
          caption: "Source: web.dev, Web Vitals. Measured at the 75th percentile of page loads. INP replaced FID on March 12, 2024 (web.dev).",
          items: [
            { value: "≤ 2.5s", label: "Largest Contentful Paint (loading)" },
            { value: "≤ 200ms", label: "Interaction to Next Paint (responsiveness)" },
            { value: "≤ 0.1", label: "Cumulative Layout Shift (visual stability)" },
          ],
        },
      },
      {
        heading: "Mobile-first indexing, HTTPS and structured data",
        body: `Three items that are quick to check and costly to ignore.

Mobile-first indexing. Google says it uses the mobile version of a site's content, crawled with the smartphone agent, for indexing and ranking. The design can differ, with tabs or collapsible sections, but the content should match the desktop version. If your mobile menu hides service pages or your mobile layout drops the FAQ, Google indexes the thinner version.

HTTPS. Google announced HTTPS as a ranking signal back in 2014 and called it "only a very lightweight signal." It is not a ranking boost worth chasing; it is a baseline. Browsers warn visitors away from insecure pages, and mixed content (HTTP images on an HTTPS page) is still a common leftover after migrations.

Structured data. JSON-LD markup tells search engines what a page is about in a machine-readable format: an organization, a service, an article and its author, a breadcrumb trail. On our own site we mark up the organization, services, articles with their author and breadcrumbs, and link entities to Wikidata. It will not rescue a weak page, and rich results are never guaranteed, but it removes ambiguity. Our [schema markup guide](/blog/schema-markup-guide) covers which types are worth adding.`,
      },
      {
        heading: "JavaScript SEO: single-page apps, pre-rendering and AI crawlers",
        body: `Google can render JavaScript, but its own documentation still says server-side rendering or pre-rendering is worthwhile, because it is faster for users and crawlers and because "not all bots can run JavaScript." In practice that last point matters more than Google's rendering queue.

If your page is an empty container until JavaScript runs, any crawler that does not execute JavaScript sees nothing at all, and you cannot assume every AI search crawler renders pages the way Googlebot does. That is why we pre-render every page of visitcardinal.com to static HTML: crawlers and AI bots get the full content on the first request, with no JavaScript required.

The single-page app pitfalls to check:

Missing or identical title tags and canonicals until JavaScript runs. Internal links built as click handlers instead of real anchor tags with an href. Soft 404s from client-side routing, as in our own audit. Content that only loads after scrolling or clicking.

Then decide which AI crawlers you allow. OpenAI, for example, documents separate user agents: OAI-SearchBot for ChatGPT search, GPTBot for model training, and ChatGPT-User for visits a user triggers. Each robots.txt setting is independent, so you can allow search visibility while opting out of training. Our robots.txt explicitly allows the major AI search crawlers. The strategy side is in our guide to [generative engine optimization for AI search](/blog/generative-engine-optimization-ai-search).`,
        highlight: "If your content only exists after JavaScript runs, assume some of the crawlers that matter will never see it.",
      },
      {
        heading: "A prioritized technical SEO checklist",
        body: `Not every technical issue deserves the same urgency. Fix what blocks indexing first, then what confuses Google about which URL to rank, then what slows people down. This is the order we use on a new [SEO engagement](/services/seo-analytics), and it is roughly the order of cost if you get it wrong.

A curious owner can verify most of this with Search Console and an afternoon, and I recommend doing so before paying anyone, so you know what you are buying. Fixing it is different when the cause lives in hosting configuration, a build process or a JavaScript framework, which is exactly where both of our own bugs were. Those are development problems as much as SEO ones, which is why our [web development team](/services/web-development) and SEO team handle them together. And if the checks come back clean, good: spend the budget on content and authority instead.`,
        visual: {
          kind: "steps",
          title: "Technical SEO checklist, in priority order",
          caption: "Based on the Google Search Central and web.dev guidance cited in this article.",
          items: [
            { title: "1. Nothing important is blocked", body: "Robots.txt allows key pages and resources; no stray noindex on pages you want found; the site returns 200, not 5xx." },
            { title: "2. One true URL per page", body: "HTTPS and one host (www or not); canonicals point at final, non-redirecting URLs; permanent moves use 301s." },
            { title: "3. Errors are real errors", body: "Made-up URLs return 404, not 200 with your homepage; Search Console's soft 404 list is empty or explained." },
            { title: "4. The sitemap tells the truth", body: "Only canonical, indexable, 200-status URLs, with accurate lastmod dates, referenced in robots.txt and submitted." },
            { title: "5. Content is in the HTML", body: "Pre-rendered or server-rendered pages; real links with href; titles and canonicals present without JavaScript." },
            { title: "6. Mobile matches desktop", body: "Same content, links and structured data on the mobile version Google indexes." },
            { title: "7. Core Web Vitals pass", body: "LCP within 2.5s, INP 200ms or less, CLS 0.1 or less at the 75th percentile of real visits." },
            { title: "8. Structured data and AI access", body: "Valid JSON-LD for your organization, services and articles; robots.txt rules for AI crawlers chosen on purpose." },
          ],
        },
      },
    ],
    cta: "Want to know whether Google can actually read your site? Send us the address and we'll reply within 24 hours with a free audit summary covering crawling, indexing and Core Web Vitals.",
  },
};

export default article;
