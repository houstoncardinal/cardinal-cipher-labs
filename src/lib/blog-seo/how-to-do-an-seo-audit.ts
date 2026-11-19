// How to do an SEO audit: a nine-step order of operations, free tools, prioritization and red flags in paid audits.
import type { BlogArticle } from "../blog-data";

const SRC = {
  pageIndexing: { label: "Google Search Console Help — Page indexing report", url: "https://support.google.com/webmasters/answer/7440203" },
  siteOp: { label: "Google Search Central — How To Use the Site Search Operator", url: "https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site" },
  inspect: { label: "Google Search Console Help — URL Inspection tool", url: "https://support.google.com/webmasters/answer/9012289" },
  gsc: { label: "Google Search Console Help — About Search Console", url: "https://support.google.com/webmasters/answer/9128668" },
  psi: { label: "Google for Developers — About PageSpeed Insights", url: "https://developers.google.com/speed/docs/insights/v5/about" },
  lighthouse: { label: "Chrome for Developers — Lighthouse overview", url: "https://developer.chrome.com/docs/lighthouse/overview" },
  rich: { label: "Google Search Console Help — Rich Results Test", url: "https://support.google.com/webmasters/answer/7445569" },
  bing: { label: "Microsoft Bing Blog — Easily Verify Your Site in Bing Webmaster Tools by Importing from Google Search Console (2019, updated 2025)", url: "https://blogs.bing.com/webmaster/2019/9/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools/" },
  needSeo: { label: "Google Search Central — Do you need an SEO?", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
  aiFeatures: { label: "Google Search Central — AI Features and Your Website", url: "https://developers.google.com/search/docs/appearance/ai-features" },
};

const article: BlogArticle = {
  slug: "how-to-do-an-seo-audit",
  title: "How to Do an SEO Audit: The 9-Step Order That Finds What Actually Matters",
  seoTitle: "How to Do an SEO Audit: 9-Step Checklist + Free Tools",
  excerpt:
    "A good SEO audit ends in a short, ranked list of fixes, not a 200-page PDF. Here is the nine-step order we use, the free tools that do most of the work, and the 10-minute checks that caught two bugs on our own site.",
  seoDescription:
    "How to do an SEO audit in 9 steps: indexing, technical, content, links, local, trust, tracking and AI search, with free tools and how to prioritize fixes.",
  category: "SEO & Local Search",
  pillar: "seo",
  priority: 6,
  author: "Hunain Qureshi",
  date: "2026-11-18",
  readTime: "11 min read",
  featured: false,
  keywords: [
    "seo audit",
    "how to do an seo audit",
    "seo audit checklist",
    "website seo audit",
    "free seo audit",
    "site audit",
    "seo audit tools",
    "technical seo audit",
    "seo audit steps",
    "free seo audit tools",
  ],
  relatedService: "/services/seo-analytics",
  sources: [SRC.pageIndexing, SRC.siteOp, SRC.inspect, SRC.gsc, SRC.psi, SRC.lighthouse, SRC.rich, SRC.bing, SRC.needSeo, SRC.aiFeatures],
  cover: { kicker: "An SEO audit in 9 steps", motif: "compare" },
  about: [{ name: "Search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" }],
  takeaways: [
    "An SEO audit should produce a short, prioritized list of fixes with an owner for each. If it produces a 200-page PDF, someone confused volume with value.",
    "Audit in dependency order: indexing first, then technical health, then content, links, local, trust, tracking and AI visibility. A content fix is wasted on a page Google has not indexed.",
    "The site: search operator is not an index count. Google says it doesn't necessarily return every indexed URL; Search Console's Page indexing report is the real record.",
    "Five checks take ten minutes and catch the costliest bugs: status codes, redirects, canonical tags, sitemap URLs, and what happens when you request a page that does not exist.",
    "Rank every finding by impact and effort. Do the high-impact, low-effort fixes this week and schedule the rest; ignore the low-impact noise most audit tools generate.",
  ],
  faqs: [
    {
      question: "What is an SEO audit?",
      answer:
        "An SEO audit is a structured review of how well a website can be found, understood and chosen in search. It checks indexing, technical health, on-page content, backlinks, local presence, trust signals, analytics and, increasingly, visibility in AI search answers. A useful audit ends with a prioritized list of fixes ranked by likely impact and effort, rather than an unranked list of every warning a tool can produce.",
    },
    {
      question: "How do I do an SEO audit myself?",
      answer:
        "Start in Google Search Console: check the Page indexing report and inspect your most important URLs. Then run PageSpeed Insights on key pages, test structured data with the Rich Results Test, and review titles, content and internal links against what searchers want. Finish with links, local listings, trust signals and conversion tracking. Write each problem down with its likely impact and effort, then fix in that order.",
    },
    {
      question: "What tools do I need for an SEO audit?",
      answer:
        "For most small business sites, free tools cover the essentials: Google Search Console for indexing and search performance, PageSpeed Insights and Lighthouse for speed and Core Web Vitals, the Rich Results Test for structured data, and Bing Webmaster Tools for Bing. Paid crawlers and backlink tools help on larger sites, but they add detail rather than replacing these sources of first-party data from the search engines themselves.",
    },
    {
      question: "How long does an SEO audit take?",
      answer:
        "The basic health checks take minutes. In my experience, a thorough audit of a small or mid-sized business site, including content and competitor review, takes a few working days, and larger or more complex sites take longer. Be cautious of an audit delivered within minutes of asking for one: it is almost certainly an automated report that has not been reviewed by a person who understands your business.",
    },
    {
      question: "Are free SEO audits worth it?",
      answer:
        "A free audit is worth it when a person has reviewed your actual site and gives you specific, ranked findings you can verify yourself. It is not worth much when it is an automated score with generic warnings designed to sell a package. Google's own advice on hiring an SEO is a good filter: be wary of anyone who guarantees rankings or will not explain clearly what they intend to do.",
    },
    {
      question: "How often should you do an SEO audit?",
      answer:
        "Run a full SEO audit once or twice a year for most business websites, and always before and after a redesign, platform change or domain move. Between audits, check Google Search Console's Page indexing report monthly. A single configuration change, such as a new hosting rule or a different domain setting, can create indexing problems that affect every page on the site.",
    },
  ],
  content: {
    sections: [
      {
        heading: "What is an SEO audit, and what should it produce?",
        body: `An SEO audit is a structured review of whether your website can be found, understood and chosen in search, followed by a ranked list of what to fix first. That second half is the part most audits get wrong.

The deliverable should be short. Each finding should state the problem, the pages affected, why it matters, roughly how much work it is, and who fixes it. If the audit is a 200-page export of every warning a crawler could generate, nobody will act on it, and the three issues that actually matter will be buried on page 140.

This guide is the order of operations we use, written so a business owner or in-house marketer can follow it. It is a website SEO audit for people who need decisions, not decoration. The early steps are free and quick. The later steps take judgment, which is where an outside view earns its fee.

One honest note before we start: I am going to use our own website as the example. In November 2026 we audited visitcardinal.com and found two real problems hiding in plain sight. Neither showed up by browsing the site. Both showed up in ten minutes of the checks below.`,
        highlight: "An SEO audit is measured by the decisions it produces, not the pages it fills.",
      },
      {
        heading: "The 10-minute checks anyone can run",
        body: `Before any tool or paid crawl, request a few of your own URLs the way a search engine does and read what comes back. We did this with simple command-line requests (curl, with Googlebot's user agent) and a browser's view-source. You can do the same with any free online HTTP header checker.

Here is what the checks found on our own site. Every page's canonical tag pointed at visitcardinal.com without the www, which 301-redirected to www.visitcardinal.com. So each page said "the real version is over there," and over there redirected straight back. Our XML sitemap and the sitemap line in robots.txt listed those redirecting URLs too.

The made-up URL test found the second problem. A leftover catch-all rewrite rule, common in single-page apps, made any invented address return a 200 status with the homepage's content and a canonical pointing at the homepage. To Google, those are soft 404s that look like duplicate homepages.

We fixed both: canonicals, sitemap and structured data now come from one configuration value on the www host, and unknown URLs return a real 404 page. The [technical SEO guide](/blog/technical-seo-guide) explains why each of these matters.`,
        visual: {
          kind: "steps",
          title: "Five checks, ten minutes",
          caption: "Run each on your homepage and two or three key service pages. Every check is a reading, not a tool score.",
          items: [
            { title: "Status code", body: "Request the page. It should return 200 directly, not after a redirect, and never a 5xx." },
            { title: "Redirect target", body: "Request the http and non-preferred host versions. Each should 301 in one hop to the exact preferred URL." },
            { title: "Canonical tag", body: "View source. The rel=\"canonical\" URL should match the final URL exactly: protocol, host, path and trailing slash." },
            { title: "Sitemap URLs", body: "Open your XML sitemap. Every URL listed should return 200 and match its own canonical. No redirects, no 404s." },
            { title: "A made-up URL", body: "Request /this-page-does-not-exist-123. It should return 404. A 200 means soft 404s." },
          ],
        },
      },
      {
        heading: "Step 1: Is your site indexed?",
        body: `Nothing else matters until you know what Google has actually indexed. Two common methods give very different answers.

The site: search (typing site:yourdomain.com into Google) is the habit, but it is not a measurement. Google's own documentation says the operator "doesn't necessarily return all the URLs that are indexed," and that bigger sites shouldn't expect to see all their URLs. Use it for a quick look, never as an index count.

The real record is Google Search Console, which Google describes as a free service to monitor, maintain and troubleshoot your presence in Search. Open the Page indexing report. It shows how many URLs are indexed and groups the rest by reason: page with redirect, soft 404, duplicate without user-selected canonical, crawled but currently not indexed, and so on.

Read those reasons with judgment. Google says plainly not to expect every URL to be indexed, and that non-indexed URLs can be fine. What is not fine is your homepage or a core service page in the wrong bucket.

Then put your five most important URLs through the URL Inspection tool. It shows the canonical you declared next to the canonical Google selected. If those differ, you have found a priority issue.`,
        bullets: [
          "Key pages indexed: homepage, every service page, location pages, top articles",
          "Google-selected canonical matches your declared canonical on each",
          "No important URLs listed under soft 404, redirect or noindex",
          "Sitemap submitted, with the count of submitted versus indexed URLs making sense",
        ],
      },
      {
        heading: "Step 2: Crawl and technical health",
        body: `With indexing understood, check the technical layer that controls it. The technical SEO guide linked above explains the why; for an audit, these are the questions to answer.

Is robots.txt blocking anything important? Does every page return the status code it should? Do redirects go to the final URL in a single hop? Do canonical tags, internal links and the sitemap all point at the same host? Does a made-up URL return a 404?

Then check speed with PageSpeed Insights. It shows two kinds of data, and an audit needs to tell them apart. The lab data comes from Lighthouse, a simulated test that is useful for debugging. The field data comes from the Chrome UX Report and reflects real visitors over the previous 28-day collection period, reported at the 75th percentile. The Core Web Vitals assessment that matters is based on field data for INP, LCP and CLS.

A Lighthouse score in the 90s with failing field data means real users are having a worse time than your test machine. A mediocre lab score with passing field data is usually lower priority than it looks.`,
      },
      {
        heading: "Step 3: On-page SEO and content quality versus intent",
        body: `Now look at what is on the pages. Start with your ten most important URLs, not all of them.

For each, search the main query it should rank for and look at what Google currently shows. Are the results service pages, guides, comparison lists or local listings? If Google is ranking guides and your page is a thin sales page, the gap is intent, and no amount of title-tag tuning will close it.

Then check the basics: a unique, descriptive title and meta description, one clear H1, headings that follow the questions buyers ask, internal links from related pages with descriptive anchor text, and content that answers the query better than what currently ranks. Our [on-page SEO checklist](/blog/on-page-seo-checklist) has the full list.

Content quality is a judgment call no tool can make for you. Ask whether a customer would learn something from the page that they could not get from the five results above it. If the honest answer is no, that page needs rewriting, not optimizing.`,
        highlight: "If Google ranks guides for your query and your page is a sales pitch, the problem is intent, not keywords.",
      },
      {
        heading: "Steps 4 to 6: Content gaps, backlinks and local presence",
        body: `Step 4 is content gaps and cannibalization. List the questions and services your buyers search for, then mark which ones have a page that answers them. The blanks are your content gaps. The opposite problem is two or more pages competing for the same query, which often happens with near-duplicate blog posts or several location pages saying the same thing. In Search Console's Performance report, filter by a query and check which pages receive impressions for it; if they keep trading places, consolidate. Our [keyword research guide](/blog/how-to-do-keyword-research) shows how to map one primary topic to one page.

Step 5 is your backlink profile. You are looking for three things: whether relevant, real sites link to you at all; whether your most-linked pages still work (a linked URL that now returns 404 is wasted authority, fixed with a 301); and whether anything looks bought or spammy. Our explainer on [what backlinks are and how they work](/blog/what-are-backlinks) covers what good links look like.

Step 6 is local presence, and for a local business it can matter more than everything above it. Check that your Google Business Profile is verified, uses the right primary category, and shows the same name, address and phone number as your website and major directories. Read your recent reviews and whether you reply. The details are in our [Houston local SEO guide](/blog/houston-local-seo-guide) and our [Google Business Profile guide](/blog/google-business-profile-guide-houston).`,
      },
      {
        heading: "Steps 7 to 9: Trust signals, tracking and AI search visibility",
        body: `Step 7 is E-E-A-T and trust. Can a visitor tell who runs the business, who wrote each article, and how to reach a real person? Look for an about page with names, author bylines that link to a bio, a physical address and phone number where relevant, reviews, credentials, and clear policies. These are things a skeptical customer checks, and our guide to [what E-E-A-T means at Google](/blog/what-is-eeat-google) explains how they relate to search.

Step 8 is analytics and conversion tracking, the step that turns an SEO audit into a business conversation. Confirm that analytics is installed on every page, that form submissions, calls and bookings are tracked as conversions, and that you can see which landing pages they came from. Without this, you cannot tell whether any fix in this audit made money.

Step 9 is AI search visibility. Google says there are no additional requirements to appear in AI Overviews or AI Mode: a page must be indexed and eligible to show with a snippet. So steps 1 to 3 already cover most of it for Google. For other AI assistants, check that robots.txt allows the search crawlers you want, that content is in the HTML rather than only rendered by JavaScript, and ask the assistants your buyers use about your category to see who gets cited. Our guide to [generative engine optimization](/blog/generative-engine-optimization-ai-search) goes further.`,
      },
      {
        heading: "Free SEO audit tools that cover most of the work",
        body: `You do not need an expensive SEO audit tool to do a solid audit of a small or mid-sized site. These five come from the search engines and browser makers themselves, so they report what those systems actually see, not a third party's estimate.

Set them up in this order. Verify the site in Google Search Console first, because it holds the first-party record of indexing. Bing Webmaster Tools can then import your verified sites and sitemaps from Search Console, so the second setup takes minutes rather than an afternoon. PageSpeed Insights and the Rich Results Test need no account at all; paste a URL and read the result.

Paid crawlers and backlink indexes are useful for large sites, competitor research and link analysis. Treat their scores as prompts to investigate, not verdicts. A "health score" of 72 tells you nothing until someone explains which three findings caused it and what they cost you.`,
        visual: {
          kind: "compare",
          title: "Free SEO audit tools and what each one tells you",
          caption: "Descriptions from each tool's own documentation: Google Search Console Help, Google for Developers, Chrome for Developers and the Microsoft Bing Blog.",
          columns: ["What it tells you", "Use it for"],
          rows: [
            { label: "Google Search Console", values: ["Which URLs are indexed and why others are not; declared versus Google-selected canonical; live URL tests", "Steps 1, 2 and 4"] },
            { label: "PageSpeed Insights", values: ["Lighthouse lab results plus real-user field data from the previous 28 days, with a Core Web Vitals assessment", "Step 2"] },
            { label: "Lighthouse", values: ["Open-source audits for performance, accessibility, SEO and more; runs in Chrome DevTools, the command line or PageSpeed Insights", "Step 2, and debugging fixes before release"] },
            { label: "Rich Results Test", values: ["Which rich result types Google detects in your structured data, with errors; tests a URL or pasted code, as smartphone by default", "Structured data checks in steps 2 and 7"] },
            { label: "Bing Webmaster Tools", values: ["How Bing crawls and indexes your site; setup can import verified sites and sitemaps from Search Console", "Steps 1 and 2, for Bing"] },
          ],
        },
      },
      {
        heading: "How to prioritize what you find: impact × effort",
        body: `Every audit produces more findings than anyone can fix at once. The prioritization step is what makes an audit useful, and it is simple enough to do on a whiteboard.

Score each finding on two questions. Impact: if we fix this, how many important pages or how much revenue does it affect? Effort: is this a ten-minute settings change or a developer sprint? Then sort.

A hypothetical example: a sitewide canonical pointing at the wrong host is high impact and, once diagnosed, often low effort, because it is a single configuration value. That goes first. Rewriting twenty thin location pages is high impact and high effort; schedule it. Fixing alt text on three decorative images is low impact; batch it with other routine work. A tool warning about a slightly long meta description on an old blog post is noise.

Many audits get this backwards. They list every item at the same urgency, so teams fix the easy, irrelevant warnings and never reach the one setting that was holding back the whole site.`,
        visual: {
          kind: "triad",
          title: "Sort every finding into one of three piles",
          caption: "Anything low impact and high effort is dropped unless something changes.",
          center: "Impact × effort",
          items: [
            { title: "Do now", body: "High impact, low effort. Indexing blockers, wrong canonicals, soft 404s, broken redirects, missing conversion tracking." },
            { title: "Schedule", body: "High impact, high effort. Content rewrites for intent, new pages for content gaps, speed work, link earning." },
            { title: "Batch or ignore", body: "Low impact. Minor tool warnings, cosmetic tweaks and scores that do not map to a real user or crawler problem." },
          ],
        },
      },
      {
        heading: "Red flags in paid SEO audits",
        body: `Most paid audits are offered as the first step of a sales process, which is fine, as long as the audit is honest. Google's own page on hiring an SEO is a good yardstick. It says no one can guarantee a number one ranking, warns against SEOs who are secretive or will not clearly explain what they intend to do, and recommends giving an outside SEO read-only Search Console access during an audit rather than write access.

A good audit also leaves you able to check the work. If you cannot confirm a finding yourself with one of the free tools above, ask the auditor to show you how. If they cannot, treat the finding as unproven. And be wary of an audit where every problem, whatever it is, happens to be solved by the same monthly package.

Use the lists below on any audit you receive, including ours. For a wider look at evaluating providers, see our guide to [choosing an SEO company in Houston](/blog/how-to-choose-an-seo-company-in-houston).`,
        visual: {
          kind: "flags",
          title: "What a trustworthy SEO audit looks like",
          caption: "Red flags on rankings, secrecy and access reflect Google's guidance in Do you need an SEO?",
          green: [
            "A short list of findings ranked by impact and effort",
            "Each finding names the affected URLs and how to verify it yourself",
            "Recommendations tied to Google's own documentation",
            "Asks only for read-only Search Console access",
            "Asks about your business, customers and competitors",
          ],
          red: [
            "Guarantees rankings or a number one position",
            "A score out of 100 with no explanation of what to fix first",
            "Hundreds of pages of unranked tool output",
            "Refuses to explain methods, or claims a special relationship with Google",
            "Every finding leads to the same package",
          ],
        },
      },
    ],
    cta: "Want an outside read on your site? Send us the address and we'll reply within 24 hours with a free audit summary: what is blocking you, what to fix first, and whether you need help to do it.",
  },
};

export default article;
