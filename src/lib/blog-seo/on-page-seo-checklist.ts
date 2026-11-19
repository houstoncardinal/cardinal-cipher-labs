// SEO series: the on-page SEO checklist, prioritized, with what Google's own documentation says about each item.
import type { BlogArticle } from "../blog-data";

const SRC = {
  titleLinks: { label: "Google Search Central — Influencing your title links in search results", url: "https://developers.google.com/search/docs/appearance/title-link" },
  snippets: { label: "Google Search Central — Control your snippets in search results", url: "https://developers.google.com/search/docs/appearance/snippet" },
  starter: { label: "Google Search Central — SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  helpful: { label: "Google Search Central — Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
  links: { label: "Google Search Central — Link best practices for Google", url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable" },
  images: { label: "Google Search Central — Image SEO best practices", url: "https://developers.google.com/search/docs/appearance/google-images" },
  urls: { label: "Google Search Central — URL structure best practices for Google", url: "https://developers.google.com/search/docs/crawling-indexing/url-structure" },
  metaTags: { label: "Google Search Central Blog — Google does not use the keywords meta tag in web ranking (2009)", url: "https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag" },
  zyppy: { label: "Zyppy — Google title rewrite study (Q1 2022 data)", url: "https://zyppy.com/seo/google-title-rewrite-study/" },
  ahrefsMeta: { label: "Ahrefs — Meta description study (2020)", url: "https://ahrefs.com/blog/meta-description-study/" },
};

const article: BlogArticle = {
  slug: "on-page-seo-checklist",
  title: "The On-Page SEO Checklist: 12 Fixes in the Order That Actually Moves Rankings",
  seoTitle: "On-Page SEO Checklist: 12 Fixes in Priority Order",
  excerpt: "Most on-page SEO checklists treat every item as equally important. They are not. Here are the twelve checks we run on every page, in priority order, with what Google's own documentation says about each one.",
  seoDescription: "An on-page SEO checklist in priority order: search intent, title tags, meta descriptions, headings, internal links, images and URLs, per Google's own docs.",
  category: "SEO & Local Search",
  pillar: "seo",
  priority: 3,
  author: "Hunain Qureshi",
  date: "2026-11-18",
  readTime: "12 min read",
  featured: false,
  keywords: [
    "on-page SEO",
    "on-page SEO checklist",
    "on page seo",
    "title tags",
    "meta description",
    "header tags seo",
    "internal linking",
    "image alt text",
    "url structure",
    "seo content",
    "on page vs off page seo",
  ],
  relatedService: "/services/seo-analytics",
  sources: [SRC.titleLinks, SRC.snippets, SRC.starter, SRC.helpful, SRC.links, SRC.images, SRC.urls, SRC.metaTags, SRC.zyppy, SRC.ahrefsMeta],
  cover: { kicker: "The on-page SEO checklist", motif: "scorecard" },
  takeaways: [
    "On-page SEO is everything you control on the page itself: matching search intent, the title tag, headings, content, internal links, images, URLs, and structured data.",
    "Search intent comes first; a perfectly optimized page in the wrong format for the search will not rank.",
    "Google writes its own title links when yours is stuffed, boilerplate, or inaccurate, and Zyppy found it rewrote 61.6% of the 80,959 titles it studied.",
    "Meta descriptions do not affect rankings, Google has said, but they can shape the snippet searchers read before deciding to click.",
    "Google has no preferred word count; originality and genuine usefulness matter far more than length.",
  ],
  faqs: [
    { question: "What is on-page SEO?", answer: "On-page SEO is the practice of optimizing the content and HTML of individual pages so search engines understand them and searchers choose them. It covers matching search intent, title tags, meta descriptions, headings, the content itself, internal links, image alt text and file names, URL structure, and structured data. It is distinct from off-page SEO, such as backlinks, and technical SEO, such as crawling and speed." },
    { question: "What is the difference between on-page and off-page SEO?", answer: "On-page SEO is everything you change on your own pages: content, titles, headings, links, images, and markup. Off-page SEO is what happens elsewhere on the web that affects your reputation, mainly links and mentions from other sites. Technical SEO, often treated as a third category, covers site-wide infrastructure such as crawlability, indexing, redirects, and page speed." },
    { question: "How long should a title tag be?", answer: "Google sets no character limit on title elements, but it truncates title links to fit the device width. A Zyppy study of 80,959 titles from early 2022 found titles over 60 characters had a greater than 76% chance of being rewritten, while titles of 51 to 60 characters were rewritten least. Keeping titles near 60 characters is a sensible working rule." },
    { question: "Do meta descriptions affect rankings?", answer: "No. Google said in 2009 that it does not use the description meta tag in ranking, and its snippet documentation says snippets are primarily created from page content. Google sometimes shows your meta description as the snippet when it describes the page more accurately, so a clear, unique description can still influence whether searchers click." },
    { question: "Does heading order matter for SEO?", answer: "Google's SEO Starter Guide says that from Google Search's perspective it does not matter if you use headings out of order. Headings still matter for readers and accessibility, so use one clear main heading, then descriptive subheadings in a logical outline that mirrors the questions the page answers." },
    { question: "How many internal links should a page have?", answer: "There is no set number. Google's link best practices say every page you care about should have a link from at least one other page on your site, and that anchor text should be descriptive, reasonably concise, and relevant. Link wherever a reader would genuinely benefit from the next page, and avoid generic anchors such as click here." },
    { question: "Is E-E-A-T a ranking factor?", answer: "Not directly. Google's helpful content guidance says E-E-A-T itself is not a specific ranking factor, and that trust is the most important of its aspects. On the page, you support it with clear authorship, cited sources, honest dates, and first-hand detail, which help readers and the signals Google's systems use to identify helpful, reliable content." },
  ],
  about: [{ name: "search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" }],
  content: {
    sections: [
      {
        heading: "What is on-page SEO?",
        body: `On-page SEO is the work of optimizing an individual page, its content and its HTML, so that search engines understand what it is about and searchers choose it over the alternatives. It covers the page's match to search intent, its title tag and meta description, headings, the content itself, internal links, images, URL, and structured data.

It is one of three kinds of SEO work, and it helps to keep them separate. Off-page SEO is your reputation elsewhere on the web, mostly links and mentions from other sites, which our guide to [what backlinks are](/blog/what-are-backlinks) explains. Technical SEO is the site-wide plumbing: crawling, indexing, redirects, and speed, covered in our [technical SEO guide](/blog/technical-seo-guide).

The distinction matters because on-page fixes cannot rescue a technical fault. When we audited Cardinal's own site in November 2026, every page's canonical tag pointed at the non-www version of its address, which redirected straight back to the www version. Each page was telling Google "the real version is over there" while "over there" sent it back. No title tag rewrite would have fixed that. We corrected the canonicals, then went back to the on-page work.

This checklist assumes your pages can be crawled and indexed. If you are not sure, start there.`,
        visual: {
          kind: "triad",
          title: "On-page vs off-page vs technical SEO",
          caption: "Three kinds of work, one goal. This checklist covers the first.",
          center: "Rankings",
          items: [
            { title: "On-page SEO", body: "The page itself: intent match, titles, headings, content, internal links, images, URLs, structured data." },
            { title: "Off-page SEO", body: "Your reputation elsewhere: backlinks, mentions, reviews, and citations from other sites." },
            { title: "Technical SEO", body: "The site's infrastructure: crawling, indexing, canonicals, redirects, sitemaps, and page speed." },
          ],
        },
      },
      {
        heading: "The on-page SEO checklist, in priority order",
        body: `Most on-page SEO checklists present forty items as if they were equally important. They are not. A perfect alt attribute will never compensate for a page that answers the wrong question, so the list below is ordered by impact: the items at the top decide whether a page can rank at all, and the items at the bottom refine a page that already can.

Print it, or keep it open while you edit. Each item gets its own section below, with what Google's documentation actually says.`,
        visual: {
          kind: "steps",
          title: "12-point on-page SEO checklist",
          caption: "Work from the top down. Items 1 to 6 decide whether a page can rank; items 7 to 12 help it rank better and earn the click.",
          items: [
            { title: "Match search intent", body: "The page's format and angle match what already ranks for its primary keyword." },
            { title: "Write a unique, descriptive title tag", body: "Primary keyword near the start, accurate, concise, briefly branded." },
            { title: "Write a meta description that earns the click", body: "Unique to the page, summarizing its most relevant points." },
            { title: "Use one clear H1 and descriptive subheadings", body: "One unmistakable main title; subheadings that mirror real questions." },
            { title: "Answer the query in the opening", body: "The first two or three sentences give the direct answer, then expand." },
            { title: "Make the content original and complete", body: "Add something the other results lack: experience, data, examples." },
            { title: "Add descriptive internal links", body: "Link to and from related pages with anchor text that says where the link goes." },
            { title: "Optimize images", body: "Descriptive alt text and file names, HTML img elements, sensible file sizes." },
            { title: "Keep the URL short and readable", body: "Readable words, hyphens between them, no unnecessary parameters." },
            { title: "Add structured data", body: "Mark up what the page is (article, service, product, organization) in JSON-LD." },
            { title: "Show E-E-A-T signals", body: "A named author, cited sources, honest dates, and first-hand detail." },
            { title: "Check page experience", body: "Fast, stable, mobile-friendly, and free of intrusive interstitials." },
          ],
        },
      },
      {
        heading: "Search intent: match it before anything else",
        body: `Search intent is what the searcher actually wants, and it is the first on-page SEO check because nothing else matters if it fails. Search your page's primary keyword and look at what ranks. If the top results are all how-to guides, a sales page will struggle there however well it is optimized. If they are all local service pages with a map pack above them, a 3,000-word essay is the wrong format.

Check three things against the current results: the type of page (guide, service page, product page, comparison), the angle (cost, speed, location, a particular year), and the depth (a quick answer or a full walkthrough). Your page should match the type, share the angle, and beat the depth or the clarity.

Each page also needs exactly one primary keyword, so that it has one job. If two of your pages chase the same intent, they compete with each other. Our guide on [how to do keyword research](/blog/how-to-do-keyword-research) walks through reading the results page and building the keyword map that prevents that.`,
        highlight: "On-page SEO cannot fix a page that answers the wrong question. Intent is item one for a reason.",
      },
      {
        heading: "Title tags: what Google actually does with them",
        body: `Your title tag is the single most important line of on-page text, because it usually becomes the clickable headline in search results. Google calls that headline the title link, and its documentation is clear that it builds title links automatically from several sources: your title element, the main visible title on the page, heading elements such as the H1, og:title meta tags, other prominent text, anchor text on the page, the text of links pointing to the page, and WebSite structured data.

In other words, Google treats your title tag as a strong suggestion, not an instruction. A Zyppy study of 80,959 titles across 2,370 sites in early 2022 found Google rewrote 61.6% of them, and titles over 60 characters had a greater than 76% chance of being rewritten.

Google's documentation lists the usual reasons: half-empty titles, obsolete ones (last year's date on a recurring page), inaccurate ones, micro-boilerplate repeated across a group of pages, and pages with no clear main title. Its best practices are the mirror image: give every page a title, make it descriptive and concise, avoid keyword stuffing and repeated boilerplate, and brand it briefly.

In practice: put the primary keyword near the start, make the title say exactly what the page delivers, keep it near 60 characters, and make sure the H1 agrees with it.`,
        visual: {
          kind: "stats",
          title: "How often Google rewrites what you write",
          caption: "Sources: Zyppy title rewrite study (80,959 titles, Q1 2022 data); Ahrefs meta description study (20,000 keywords, 2020).",
          items: [
            { value: "61.6%", label: "Of title tags Google rewrote in Zyppy's study" },
            { value: ">76%", label: "Chance of a rewrite for titles over 60 characters" },
            { value: "62.78%", label: "Of meta descriptions Google rewrote in Ahrefs' study" },
          ],
        },
      },
      {
        heading: "Meta descriptions: a before-and-after example",
        body: `The meta description is the summary you suggest for the snippet under your title link. Two facts from Google keep it in perspective. First, it is not a ranking factor: Google said in 2009 that it does not use the description meta tag in ranking (the same post confirmed it ignores the keywords meta tag entirely). Second, Google's snippet documentation says snippets are primarily created from the page content itself, and that it sometimes uses the meta description when that gives a more accurate summary. Ahrefs' 2020 study found Google rewrote meta descriptions 62.78% of the time.

So why write one? Because when Google does use it, it is your sales line on the results page. Google's guidance is to make each description unique to its page and to include the most relevant points; there is no length limit, though snippets are truncated to fit the screen.

Here is a hypothetical Houston plumber's homepage, before and after. The before version is the kind of title Google's documentation describes as keyword stuffing with boilerplate; the after version leads with the service, the place, and the reason to choose them.`,
        visual: {
          kind: "compare",
          title: "Before and after: a hypothetical plumber's homepage",
          caption: "Illustrative example. Example Plumbing Co. is a made-up business.",
          columns: ["Before", "After"],
          highlight: 1,
          rows: [
            { label: "Title tag", values: ["Home | Plumber Houston | Plumbing Houston TX | Best Cheap Plumbers Houston", "24/7 Emergency Plumber in Houston – Example Plumbing Co."] },
            { label: "Length", values: ["74 characters", "56 characters"] },
            { label: "Meta description", values: ["Missing, so Google picks text from the page", "Burst pipe or no hot water? Licensed Houston plumbers on call 24/7, with upfront pricing before any work starts. Call or book online."] },
            { label: "Leads with the primary keyword", values: [false, true] },
            { label: "Keyword stuffing or boilerplate", values: [true, false] },
            { label: "Gives a reason to click", values: [false, true] },
          ],
        },
      },
      {
        heading: "Header tags for SEO, and the first 100 words",
        body: `Header tags (H1 through H6) give a page its outline. For SEO, the rules are simpler than most checklists suggest.

Use one clear H1 that matches the title tag's promise. Google's title link documentation lists "no clear main title," more than one large, prominent heading, as one of the reasons it rewrites titles, so a single unmistakable main heading helps Google and readers alike.

Write subheadings as the questions your readers actually ask. "How much does a water heater replacement cost?" is a better H2 than "Pricing," because it tells the reader exactly what the section answers, and it matches how people phrase searches.

Do not agonize over heading levels. Google's SEO Starter Guide says that from Google Search's perspective it does not matter if headings are used out of order. Keep a logical outline for readers and screen-reader users, and move on.

Then make the opening count. There is no Google rule about the first 100 words; this one is a reader rule. Answer the core question in the first two or three sentences, the way you would if a customer asked you in person, then expand. Visitors who get the answer immediately keep reading, and a crisp, direct answer is also the kind of passage search features and AI answers can quote.`,
        highlight: "Answer the question in the first two or three sentences. Then earn the rest of the page.",
      },
      {
        heading: "SEO content: depth and originality, not word count",
        body: `The content is the page. Every other item on this checklist helps Google find, understand, and present it, but none of them can make thin or copied content worth ranking.

Google's guidance on helpful, people-first content gives you the self-assessment to run. Does the content provide original information, reporting, research, or analysis? Does it provide substantial value compared with the other pages in the search results? If your page says what the top five results say, in the same order, it has given Google no reason to prefer it.

The same guidance is blunt about word counts. Among its warning signs: writing to a particular word count because you have heard Google has a preferred one. It does not. The SEO Starter Guide says the same: length alone does not matter for ranking.

What adds depth is experience. Real prices, real photos of your own work, the mistakes you see customers make, the questions they ask on the phone, a worked example. That is what readers remember and what competitors cannot copy. If you use AI to help draft, our guide to [what Google's rules say about AI-generated content](/blog/ai-generated-content-google-rankings-what-the-rules-say) covers where the line is.

Finally, keep pages current. Google's Starter Guide recommends checking in on published content and updating it as needed, while its helpful-content guidance warns against changing a page's date to seem fresh when nothing substantial has changed.`,
      },
      {
        heading: "Internal linking with descriptive anchor text",
        body: `Internal links are how Google discovers your pages and how readers find the next thing they need. Google's link best practices give three rules worth memorizing.

Make links crawlable. Google says it can generally only crawl a link if it is an a element with an href attribute. Navigation built purely from script click events may not be followed.

Link every page you care about. In Google's words, every page you care about should have a link from at least one other page on your site. Orphan pages, reachable only through the sitemap, are easy to miss in a redesign; our [website redesign SEO checklist](/blog/website-redesign-seo-checklist) covers protecting them.

Write descriptive anchor text. Google describes good anchor text as descriptive, reasonably concise, and relevant to the page it is on, and it calls out generic anchors such as "click here" and "read more." It also warns against cramming in every related keyword.

The practical habit: whenever you publish a page, add links to it from two or three older, related pages, and link out from it to the service page a reader would want next. Notice the links in this article; each anchor describes the page it leads to.`,
        bullets: [
          "Weak anchor: \"For more information, click here.\"",
          "Strong anchor: \"Here is what is included in our [monthly SEO plans](/services/seo-analytics).\"",
          "Over-optimized anchor: \"best cheap Houston SEO services company Houston TX\"",
        ],
      },
      {
        heading: "Image alt text, file names, and URL structure",
        body: `Images and URLs are small items individually and add up across a site.

Image alt text describes the image for people using screen readers and for search engines. Google's image SEO guidance asks for useful, information-rich alt text and warns against filling alt attributes with keywords. "Technician replacing a tankless water heater in a garage" is good; "plumber Houston plumbing water heater Houston" is not.

File names matter too. Google's own example: my-new-black-kitten.jpg is better than IMG00023.JPG. Use standard HTML img elements, because Google says it does not index CSS background images, and place images near the text they illustrate. Google also notes that images are often the largest contributor to page size, so compress them and serve responsive sizes.

URL structure. Google recommends readable words rather than long ID numbers, hyphens rather than underscores between words, and trimming parameters that do not change the content. A URL such as /services/water-heater-repair tells people and Google what to expect; /index.php?id=4417&cat=3 does not.

One caution: do not rename the URLs of pages that already rank just to add a keyword. Changing a URL means redirects and a period of re-evaluation, which is rarely worth it for a small gain. Get URLs right on new pages, and change old ones only as part of a planned migration.`,
      },
      {
        heading: "Structured data, E-E-A-T signals, and page experience",
        body: `The last three items help a page that already deserves to rank.

Structured data is code, usually JSON-LD, that tells search engines explicitly what a page is: an article with an author, a service with a price, a local business with an address. It can make a page eligible for rich results, though Google decides when to show them. Our [schema markup guide](/blog/schema-markup-guide) explains which types are worth adding. On our own site, every blog post carries BlogPosting markup that names its author as a Person, and service pages describe the service and its offers.

E-E-A-T stands for experience, expertise, authoritativeness, and trust. Google's helpful-content guidance says E-E-A-T itself is not a specific ranking factor, and that trust is the most important aspect. On the page, that means making it self-evident who wrote the content, with a byline where one would be expected, plus cited sources and honest dates. Our guide to [what E-E-A-T is](/blog/what-is-eeat-google) goes deeper.

Page experience covers speed, visual stability, and mobile usability. It matters, but it is a site-wide concern with its own tools and thresholds, so it lives in the [technical SEO guide](/blog/technical-seo-guide). For on-page work, the usual culprits are oversized images, heavy embeds, and pop-ups that cover the content.`,
        visual: {
          kind: "flags",
          title: "On-page trust signals: green flags and red flags",
          caption: "Several of the red flags mirror warning signs in Google's helpful-content guidance; the rest are the editorial standards we hold our own articles to.",
          green: [
            "A named author with a byline and an author page",
            "Statistics linked to the original source",
            "A published date, and an updated date when content really changed",
            "First-hand photos, prices, and examples from your own work",
            "Easy-to-find contact details and business information",
          ],
          red: [
            "No author, or a made-up author profile",
            "Changing the date without changing the content",
            "Statistics with no source",
            "Padding to hit a word count",
            "Content that repeats what already ranks, adding nothing new",
          ],
        },
        highlight: "Trust is built in small, checkable details: who wrote it, where the numbers came from, and when it was last true.",
      },
    ],
    cta: "Want a second pair of eyes on your pages? We'll run this on-page SEO checklist on your most important pages, show you which fixes will matter most, and handle them for you on any of our month-to-month SEO plans. Send us your site and we'll reply within 24 hours with a free summary.",
  },
};

export default article;
