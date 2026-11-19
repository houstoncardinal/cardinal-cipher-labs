// SEO series: how to do keyword research (intent, process, free vs paid tools, long tail, keyword mapping).
import type { BlogArticle } from "../blog-data";

const SRC = {
  qrg: { label: "Google — Search Quality Rater Guidelines (September 2025)", url: "https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf" },
  longTail: { label: "Ahrefs — Long-Tail Keywords: What They Are and How to Use Them (updated 2026)", url: "https://ahrefs.com/blog/long-tail-keywords/" },
  newQueries: { label: "Google — Our latest quality improvements for Search (2017)", url: "https://blog.google/products/search/our-latest-quality-improvements-search/" },
  planner: { label: "Google Ads Help — Use Keyword Planner", url: "https://support.google.com/google-ads/answer/7337243" },
  plannerStats: { label: "Google Ads Help — Keyword Planner historical statistics", url: "https://support.google.com/google-ads/answer/3022575" },
  trends: { label: "Google Trends Help — FAQ about Google Trends data", url: "https://support.google.com/trends/answer/4365533" },
  gsc: { label: "Google Search Console Help — Performance report (Search results)", url: "https://support.google.com/webmasters/answer/7576553" },
  bing: { label: "Bing Webmaster Blog — Start Using Bing Webmaster Tools to Improve Your Site Visibility (2025)", url: "https://blogs.bing.com/webmaster/2025/6/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility/" },
  kd: { label: "Ahrefs — Keyword Difficulty", url: "https://ahrefs.com/keyword-difficulty" },
  cannibal: { label: "Ahrefs — Keyword Cannibalization", url: "https://ahrefs.com/blog/keyword-cannibalization/" },
};

const article: BlogArticle = {
  slug: "how-to-do-keyword-research",
  title: "How to Do Keyword Research: The Intent-First Method That Beats Chasing Search Volume",
  seoTitle: "How to Do Keyword Research (Step by Step, Free Tools)",
  excerpt: "Most keyword research starts with the biggest numbers and ends with traffic that never buys. Here is the intent-first process we use: six steps, the free tools that are enough for most small businesses, and a worked keyword map you can copy.",
  seoDescription: "Keyword research, step by step: judge search intent from the live results, use free tools well, target long-tail keywords, and map one keyword per page.",
  category: "SEO & Local Search",
  pillar: "seo",
  priority: 2,
  author: "Hunain Qureshi",
  date: "2026-11-18",
  readTime: "11 min read",
  featured: false,
  keywords: [
    "keyword research",
    "how to do keyword research",
    "keyword research tools",
    "free keyword research tools",
    "search intent",
    "long tail keywords",
    "keyword difficulty",
    "search volume",
    "keyword research for small business",
    "keyword mapping",
    "keyword cannibalization",
  ],
  relatedService: "/services/seo-analytics",
  sources: [SRC.qrg, SRC.longTail, SRC.newQueries, SRC.planner, SRC.plannerStats, SRC.trends, SRC.gsc, SRC.bing, SRC.kd, SRC.cannibal],
  cover: { kicker: "Keyword research: intent beats volume", motif: "bars" },
  takeaways: [
    "Keyword research is finding the exact words your buyers type into search engines, then deciding which page on your site should answer each one.",
    "Intent beats volume: a phrase searched a few dozen times a month by people ready to hire can be worth more than one searched thousands of times by the merely curious.",
    "Almost 93% of the keywords in Ahrefs' U.S. database get fewer than 10 searches a month, so most of the keywords you will ever find are long-tail.",
    "Every search-volume number is an estimate: Keyword Planner rounds its figures and groups close variants, and Google Trends shows relative interest on a 0 to 100 scale, not counts.",
    "The deliverable is a keyword map, not a keyword list: one primary keyword and one job for every page.",
  ],
  faqs: [
    { question: "What is keyword research in SEO?", answer: "Keyword research is the process of finding the words and phrases people type into search engines when they look for what you sell or know about, judging what each searcher actually wants, and deciding which page on your site should answer each search. Its output should be a keyword map that assigns one primary keyword to each page, not just a long list of phrases." },
    { question: "How do I do keyword research for free?", answer: "Start with Google Search Console, which shows the queries already bringing your site impressions and clicks. Add Google Keyword Planner for volume estimates, Google Trends for seasonality and relative interest, Google autocomplete and People Also Ask for real question phrasing, and the free keyword research tool in Bing Webmaster Tools. Then search each candidate keyword yourself and study the results page." },
    { question: "What are the four types of search intent?", answer: "SEOs usually group searches into four intents: informational (the searcher wants to learn something), navigational (they want a specific site or brand), commercial (they are comparing options before buying), and transactional (they are ready to buy, book, or call). Google's own rater guidelines use similar categories called Know, Website, Do, and Visit-in-Person queries." },
    { question: "What are long-tail keywords?", answer: "Long-tail keywords are specific search phrases that each get relatively few searches. Ahrefs reports that keywords with fewer than 10 searches a month make up almost 93% of its U.S. keyword database. Length does not define them; specificity and low volume do. They are often easier to rank for and closer to a buying decision, which makes them valuable for small businesses." },
    { question: "What is a good keyword difficulty score?", answer: "There is no universal good score, because difficulty is relative to your own site. Tools estimate it differently; Ahrefs, for example, scores difficulty from 0 to 100 based on how many sites link to the pages ranking in the top ten. Compare the score with what the sites already ranking look like, and with your own site's authority, before deciding a keyword is realistic." },
    { question: "Why do keyword tools show different search volumes?", answer: "Because every tool is estimating. Google Keyword Planner rounds its numbers and combines close variants of a keyword, while third-party tools model volume from their own data sources and methods. Treat volume as a rough sense of scale for comparing keywords, not as a count of the searches you will receive, and check your real impressions in Search Console once a page ranks." },
    { question: "How many keywords should one page target?", answer: "One primary keyword per page, supported by its close variants and related questions. A well-written page usually ranks for many related searches at once. Problems arise when two of your pages try to satisfy the same intent for the same primary keyword, because they can compete with each other. Assigning each page one job in a keyword map prevents that." },
  ],
  about: [
    { name: "search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" },
    { name: "keyword research", sameAs: "https://www.wikidata.org/wiki/Q6398555" },
  ],
  content: {
    sections: [
      {
        heading: "What is keyword research?",
        body: `Keyword research is the process of finding the words people type into search engines when they need what you sell, working out what each of those searchers actually wants, and deciding which page on your site should answer each search. Done well, it produces a keyword map: one primary keyword and one job for every page.

That last part is where most keyword research goes wrong. People export a spreadsheet of five hundred phrases sorted by search volume, write a few blog posts around the biggest numbers, and wonder why the traffic never calls. The list was never the point. The decisions were.

Keyword research sits at the very start of [search engine optimization](/blog/what-is-seo), before a word is written or a page is designed, because it tells you which pages need to exist at all. It is also the first thing I look at when a business tells me it ranks for plenty but gets no leads. Usually the site is ranking for searches its buyers never make.

This guide walks through the process we use at Cardinal for keyword research for small business sites and larger ones alike: six steps, the free tools that are enough for most businesses, when paid tools earn their cost, and a worked keyword map for a hypothetical Houston roofing company.`,
        highlight: "A keyword list is raw material. A keyword map, one primary keyword and one job per page, is the actual deliverable.",
      },
      {
        heading: "Why search intent beats search volume",
        body: `Search intent is the goal behind a search. Two phrases can share most of their words and want completely different things: "how to fix a roof leak" is someone with a bucket and a ladder; "roof leak repair near me" is someone about to make a phone call.

Search volume tells you how many people type a phrase. Intent tells you whether any of them want what you sell. A phrase searched a few dozen times a month by people ready to hire can be worth more to a contractor than one searched thousands of times by people looking for a do-it-yourself video.

SEOs usually sort intent into four types. Google's own [Search Quality Rater Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf), the manual its human raters use to evaluate results, use a similar set: Know, Do, Website, and Visit-in-Person queries. The guidelines also describe a query's "dominant interpretation": what most users mean when they type it. Your page has to match that meaning, not just the words.`,
        visual: {
          kind: "compare",
          title: "The four types of search intent",
          caption: "Industry intent labels alongside the closest query types in Google's Search Quality Rater Guidelines (September 2025). Example searches are illustrative.",
          columns: ["What the searcher wants", "Example search", "Closest Google rater term", "Page that fits"],
          rows: [
            { label: "Informational", values: ["To learn or understand something", "how long does a roof last", "Know / Know Simple", "Guide or article"] },
            { label: "Navigational", values: ["A specific site, brand, or page", "cardinal consulting houston", "Website", "Home or brand page"] },
            { label: "Commercial", values: ["To compare options before deciding", "metal vs shingle roof cost", "No exact match; usually a Know query", "Comparison or pricing page"] },
            { label: "Transactional", values: ["To buy, book, or call now", "roof repair near me", "Do / Visit-in-Person", "Service or location page"] },
          ],
        },
      },
      {
        heading: "How to do keyword research in six steps",
        body: `Here is the process from start to finish. Each step narrows the field, so by the end you have a short list you can actually build pages for, rather than a long list you will never use.

The order matters. Most people start at step two, typing a single word into a tool and accepting whatever comes back. Starting with your customers' own words keeps the whole exercise anchored to buyers instead of to whatever a database happens to contain.`,
        visual: {
          kind: "steps",
          title: "The intent-first keyword research process",
          caption: "Steps one and three are the ones most often skipped, and the ones that separate useful keyword research from a spreadsheet.",
          items: [
            { title: "Build a seed list from customers' language", body: "Write down the words customers use on calls, in emails, in reviews, and in quote requests. They say \"roof leak,\" not \"residential envelope remediation.\"" },
            { title: "Expand with tools", body: "Run each seed through Search Console, Keyword Planner, autocomplete, People Also Ask, and Bing's keyword tool to collect variants, questions, and related phrases." },
            { title: "Judge intent from the live results page", body: "Search each candidate yourself. The pages Google already ranks show what it believes searchers want. Match that format or move on." },
            { title: "Weigh difficulty against your site's authority", body: "Look at who ranks. If page one is national brands with years of links, a newer local site should start with more specific phrases." },
            { title: "Map one primary keyword to each page", body: "Assign every keyword worth targeting to exactly one page, existing or planned. Close variants share a page; different intents get different pages." },
            { title: "Prioritize by business value", body: "Rank the map by what a visitor from that search is worth to you, then by how realistic ranking is. Build the high-value, realistic pages first." },
          ],
        },
      },
      {
        heading: "Step 3 in practice: read the results page before you trust a tool",
        body: `No tool knows intent as well as the results page itself. Google has already tested what satisfies a search, and the top results are its answer. Before you commit to a keyword, search it (in a private window, set to the location you serve) and note four things:

The result types. Are the top results blog posts, service pages, product pages, videos, or a map pack of local businesses? If every result is a how-to guide, a service page will struggle to rank there, however well it is optimized.

The angle. Do the top pages lean toward cost, speed, "near me," or a particular year? That angle is part of the intent.

The extras. A local pack signals visit-in-person intent. A People Also Ask box hands you the follow-up questions your page should answer. An AI Overview suggests that many searchers want a quick summary, which our guide to [Google AI Overviews and what they mean for business websites](/blog/google-ai-overviews-what-it-means-for-business-websites) covers in depth.

Who ranks. National directories and big brands mean a harder fight; small local sites mean an opening.

This takes about two minutes a keyword, and it is the most valuable two minutes in the whole process.`,
        highlight: "The results page is Google telling you, for free, what it thinks the searcher wants. Read it before you write a word.",
      },
      {
        heading: "Free keyword research tools that are enough for most small businesses",
        body: `You do not need a subscription to do good keyword research. For a local service business with a few dozen pages, the free tools below cover nearly everything, and the first one is the most underused tool in SEO.

Each tool answers a different question, so use them together rather than picking a favorite.`,
        bullets: [
          "Google Search Console: the Performance report shows the actual queries your site already appears for, with clicks, impressions, click-through rate, and average position. Queries with many impressions and a position just off page one are often your fastest wins.",
          "Google Keyword Planner: built for advertisers, but its keyword ideas and estimated monthly searches are useful for organic research too. It lives inside Google Ads, and Google requires you to finish account setup, including billing information, before you can use it.",
          "Google Trends: shows relative interest over time and by place, which is ideal for spotting seasonality (storm season, tax season, back to school) and comparing two phrasings.",
          "Google autocomplete and People Also Ask: free, real phrasing from real searches. Type your seed keyword slowly and note the suggestions, then open the People Also Ask questions; they make strong headings and FAQ entries.",
          "Bing Webmaster Tools: free, and its keyword research tool surfaces trending keywords, related queries, and long-tail ideas. Bing data is a useful second opinion on Google's.",
        ],
        highlight: "The best free keyword research tool is the one most people ignore: the queries Search Console says you already rank for.",
      },
      {
        heading: "Paid keyword research tools, and why their search volumes disagree",
        body: `Paid platforms such as Ahrefs and Semrush earn their cost when you need to see beyond your own site: large keyword databases (Ahrefs describes its own as over 110 billion discovered keywords), difficulty scores, ranking history, and above all the keywords a competitor's site ranks for. That competitor view is the real reason to pay, and it is why competitor gap analysis is part of our [SEO Growth plan](/services/seo-analytics). Paid tools make sense if you publish every month, compete in a crowded market, or manage several sites. For a single-location business building fifteen pages this year, the free tools usually get you most of the way.

Whichever you use, expect the same keyword to show different monthly search volumes in different tools. None of them is lying; all of them are estimating.

Google's Keyword Planner says its search volume statistics are rounded, and its average monthly searches figure covers a keyword and its close variants together, so two phrasings you would build separate pages for may share one number. Google Trends shows no counts at all: it samples searches, divides each data point by total searches for that place and time, and scales the result from 0 to 100. Third-party tools model volume from their own data, so their figures differ from Google's and from each other.

The practical rule: use volume to compare keywords and judge rough scale, never as a forecast of visits. Once a page ranks, Search Console impressions replace every estimate with your real numbers.`,
        highlight: "Search volume is a rough sense of scale, not a forecast of visits. Your real numbers live in Search Console.",
      },
      {
        heading: "Keyword difficulty: judge it against your own site",
        body: `Keyword difficulty scores try to answer one question: how hard will it be to reach page one? Each tool calculates it differently, so a score is only meaningful inside the tool that produced it.

Ahrefs, for example, scores difficulty from 0 to 100 based on the number of referring domains (separate websites linking in) pointing at the pages in the top ten. It does not consider on-page factors at all, and the scale is not linear, as the chart below shows.

That is why difficulty has to be read against your own site. A score that is easy for a ten-year-old site with hundreds of linking domains can be out of reach for a two-year-old site with twenty. If your site is newer, start with specific, lower-difficulty phrases where you can win, and build authority with [legitimate backlinks](/blog/what-are-backlinks) while those pages start bringing in leads. For local businesses, the map pack follows different rules again, which our [Houston local SEO guide](/blog/houston-local-seo-guide) explains.`,
        visual: {
          kind: "bars",
          title: "Ahrefs' estimate of linking domains needed to reach page one",
          caption: "Source: Ahrefs' Keyword Difficulty methodology. The score is based on referring domains to the top ten results only.",
          items: [
            { label: "Keyword Difficulty 40", value: 56, display: "≈56 referring domains" },
            { label: "Keyword Difficulty 80", value: 353, display: "≈353 referring domains", highlight: true },
          ],
        },
      },
      {
        heading: "Long-tail keywords: where most keywords actually live",
        body: `Long-tail keywords are specific phrases that each get relatively few searches. They are called long-tail because, plotted on a chart, a few huge keywords make up the "head" and an enormous number of small ones stretch out into a long tail.

The tail is far bigger than most people assume. Ahrefs reports that keywords with fewer than 10 searches a month make up almost 93% of its U.S. keyword database. And search keeps producing new phrases: Google said in 2017 that 15% of the searches it sees every day are new.

Two things follow for a small business. First, low reported volume is not a reason to skip a keyword; dozens of small, specific searches with buying intent can add up to more leads than one broad term you will never rank for. Second, long-tail does not simply mean long. Ahrefs points out that some one-word keywords get fewer than 100 searches a month, while some phrases of five or more words get very large volumes. Specificity is what matters.

Long-tail questions are also exactly what people type into AI assistants, which is one reason clear, specific pages tend to get cited there. Our guide to [generative engine optimization](/blog/generative-engine-optimization-ai-search) covers that side.`,
        visual: {
          kind: "stats",
          title: "The long tail, by the numbers",
          caption: "Sources: Ahrefs, Long-Tail Keywords (updated 2026); Google, Our latest quality improvements for Search (2017).",
          items: [
            { value: "~93%", label: "Of keywords in Ahrefs' U.S. database get fewer than 10 searches a month" },
            { value: "2.3B", label: "Keywords Ahrefs counts with fewer than 10 monthly searches" },
            { value: "15%", label: "Of daily Google searches were new, per Google in 2017" },
          ],
        },
      },
      {
        heading: "Keyword cannibalization: one keyword, one page",
        body: `Keyword cannibalization is when several pages on the same site target the same keyword and the same intent, so they compete with each other instead of with your competitors. A common version: a service page for "roof repair Houston," a blog post called "Roof Repair in Houston," and a location page that says much the same thing.

It is also over-diagnosed. Ahrefs makes the point that having more than one page on a topic does not always mean something is wrong, because pages naturally rank for many overlapping searches. The real problem is two pages trying to do the same job. Ahrefs suggests looking for pages that target the same keywords and fulfill the same or very similar intent, and, where you are confident there is a conflict, consolidating them: redirect the weaker page into the stronger one and update your internal links.

The cheapest fix is prevention, which is what step five of the process is for. When every page has exactly one primary keyword in the map, you can check any new page idea against it before anyone writes a word. If you already have years of overlapping content, an [SEO audit](/blog/how-to-do-an-seo-audit) will surface the conflicts.`,
      },
      {
        heading: "A worked example: keyword research for a Houston roofing company",
        body: `Here is the process applied to a hypothetical Houston roofing company with a ten-page website. The phrases are illustrative; on a real project, step two would add live volume estimates and step three a fresh look at each results page.

Seed list (step one) from the owner's call notes: roof leak, roof repair, new roof, hail damage, insurance claim, metal roof. Expanded with autocomplete and People Also Ask (step two), those become several dozen phrases. Reading the results pages (step three) sorts them: "roof repair houston" shows a map pack and service pages, so it is transactional; "how long does a roof last in texas" shows articles, so it is informational.

The map below is the result of steps four through six. Notice that the service pages target buyers, the guides capture research earlier in the journey and link to the service pages, and no two pages share a primary keyword.

The next job is making each page earn its keyword, which is what our [on-page SEO checklist](/blog/on-page-seo-checklist) covers.`,
        visual: {
          kind: "compare",
          title: "Hypothetical keyword map: Houston roofing company",
          caption: "Illustrative example only. Highest-priority pages first: transactional service pages, then commercial and informational guides that link to them.",
          columns: ["Primary keyword", "Intent", "Page"],
          rows: [
            { label: "Home page", values: ["roofing company houston", "Commercial", "/"] },
            { label: "Roof repair service", values: ["roof repair houston", "Transactional", "/roof-repair"] },
            { label: "Roof replacement service", values: ["roof replacement houston", "Transactional", "/roof-replacement"] },
            { label: "Storm damage service", values: ["hail damage roof repair", "Transactional", "/storm-damage"] },
            { label: "Cost guide", values: ["roof replacement cost houston", "Commercial", "/roof-replacement-cost"] },
            { label: "Comparison guide", values: ["metal roof vs shingles", "Commercial", "/metal-vs-shingle-roofs"] },
            { label: "Insurance guide", values: ["does insurance cover roof leaks", "Informational", "/roof-insurance-claims"] },
            { label: "Lifespan guide", values: ["how long does a roof last in texas", "Informational", "/roof-lifespan-texas"] },
          ],
        },
        highlight: "Service pages win the buyers. Guides win the researchers, then hand them to the service pages.",
      },
    ],
    cta: "Want keyword research done for you? Our SEO team builds an intent-first keyword map for your business, shows you which pages to fix or create first, and reports rankings, traffic, and leads every month. Send us your site and we'll reply within 24 hours with a free summary of where you stand.",
  },
};

export default article;
