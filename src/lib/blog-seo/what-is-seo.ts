// Pillar guide: what SEO is, how search engines work, the types of SEO, timelines, and how to start.
import type { BlogArticle } from "../blog-data";

const SRC = {
  howSearch: { label: "Google Search Central — In-Depth Guide to How Google Search Works", url: "https://developers.google.com/search/docs/fundamentals/how-search-works" },
  starter: { label: "Google Search Central — SEO Starter Guide: The Basics", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  needSeo: { label: "Google Search Central — Do you need an SEO?", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
  spam: { label: "Google Search Central — Spam policies for Google web search", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  helpful: { label: "Google Search Central — Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
  aiFeatures: { label: "Google Search Central — AI Features and Your Website", url: "https://developers.google.com/search/docs/appearance/ai-features" },
  local: { label: "Google Business Profile Help — Tips to improve your local ranking on Google", url: "https://support.google.com/business/answer/7091" },
  backlinko: { label: "Backlinko — We Analyzed 4 Million Google Search Results: Here's What We Learned About Organic CTR (2025)", url: "https://backlinko.com/google-ctr-stats" },
  ahrefs: { label: "Ahrefs — How Long Does It Take to Rank in Google? (2025)", url: "https://ahrefs.com/blog/how-long-does-it-take-to-rank/" },
};

const article: BlogArticle = {
  slug: "what-is-seo",
  title: "What Is SEO? A Plain-English Guide to How Search Engine Optimization Actually Works",
  seoTitle: "What Is SEO? How Search Engine Optimization Works",
  excerpt: "SEO is how a website earns a place in Google's results without paying for each click. Here is how search engines actually work, the five types of SEO, how long it honestly takes, and a 90-day plan to start.",
  seoDescription: "What is SEO? A plain-English guide to how search engines crawl, index and rank pages, the types of SEO, honest timelines, and a 90-day plan to start.",
  category: "SEO & Local Search",
  pillar: "seo",
  priority: 1,
  author: "Hunain Qureshi",
  date: "2026-11-18",
  readTime: "11 min read",
  featured: true,
  keywords: [
    "what is SEO",
    "SEO meaning",
    "search engine optimization",
    "how does SEO work",
    "what does SEO stand for",
    "SEO for beginners",
    "SEO basics",
    "types of SEO",
    "why is SEO important",
    "how long does SEO take",
    "SEO vs PPC",
  ],
  relatedService: "/services/seo-analytics",
  sources: [SRC.howSearch, SRC.starter, SRC.needSeo, SRC.spam, SRC.helpful, SRC.aiFeatures, SRC.local, SRC.backlinko, SRC.ahrefs],
  cover: { kicker: "What SEO is, and how it actually works", motif: "rank" },
  about: [{ name: "Search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" }],
  takeaways: [
    "SEO stands for search engine optimization: making your site easy for search engines to find, understand and trust, so it shows up for the searches your customers make without paying per click.",
    "Google works in three stages, crawling, indexing and serving, and Google says it doesn't accept payment to crawl a site more often or rank it higher.",
    "Every SEO tactic answers one of three questions: can search engines read your page, does it answer the search, and is it trusted?",
    "SEO is slow on purpose: Ahrefs found the average page ranking first in Google is about five years old, and Google itself says some changes take several months to show.",
    "AI search is not a separate discipline: Google says there are no additional requirements to appear in AI Overviews or AI Mode beyond being indexed and eligible to show with a snippet.",
  ],
  faqs: [
    {
      question: "What is SEO in simple terms?",
      answer: "SEO, or search engine optimization, is the work of making a website easier for search engines like Google to find, understand and trust, so its pages appear in unpaid search results when people look for what the business offers. It covers the technical health of the site, the content on each page, the reputation the site earns from links and reviews, and local signals for businesses that serve a specific area.",
    },
    {
      question: "What does SEO stand for?",
      answer: "SEO stands for search engine optimization. It refers to improving a website so it earns more visibility in the organic, unpaid results of search engines such as Google and Bing. The term is also used for the people and agencies who do this work, as in hiring an SEO.",
    },
    {
      question: "How does SEO work?",
      answer: "Google works in three stages. It crawls the web to discover pages, indexes them by analyzing and storing their content, and serves results by ranking indexed pages for each search using hundreds of factors, including the searcher's location, language and device. SEO makes each stage easier: a crawlable site, pages that clearly match what people search for, and a reputation that signals the page can be trusted.",
    },
    {
      question: "How long does SEO take to work?",
      answer: "Google's SEO Starter Guide says some changes take effect in a few hours while others can take several months. Competitive rankings take longer: an Ahrefs study of new pages found only a small share reached the top ten within a year, and the average page ranking first was about five years old. Technical fixes and local improvements usually show results sooner than new content does.",
    },
    {
      question: "What are the main types of SEO?",
      answer: "The main types are technical SEO, which makes a site crawlable, fast and indexable; on-page SEO, which aligns each page's content, titles and headings with what people search for; content SEO, which creates new pages that answer real questions; off-page SEO, which earns links and mentions from other sites; and local SEO, which improves visibility in map results for nearby searchers.",
    },
    {
      question: "Is SEO better than paid ads?",
      answer: "Neither is better in general because they do different jobs. Paid search ads can produce visibility the day a campaign launches and stop when spending stops. SEO builds slowly but keeps producing traffic without a cost per click. Many businesses run ads for immediate leads while SEO builds a long-term asset, then rebalance once organic traffic carries more of the load.",
    },
    {
      question: "Can I do SEO myself?",
      answer: "Yes. Google publishes a free SEO Starter Guide, and Google Search Console is free. A small business owner can handle the basics: confirming pages are indexed, writing clear titles, building pages for each service and keeping a Google Business Profile complete. Hiring help makes sense when the market is competitive, the site has technical problems, or there is no time to publish and build links consistently.",
    },
  ],
  content: {
    sections: [
      {
        heading: "What is SEO? The short answer",
        body: `SEO stands for search engine optimization. It is the work of making a website easy for search engines to find, understand and trust, so its pages appear in the unpaid results when people search for what you sell. Google's own [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) puts it even more simply: SEO is about helping search engines understand your content, and helping people find your site and decide whether to visit.

That is the whole idea. Everything else, the audits, the keyword research, the link building, is a way of doing one of those jobs better.

Why is SEO important? Because search results are not read evenly. Backlinko analyzed about four million Google results and found the first organic result receives an average click-through rate of 27.6%, roughly ten times the tenth result, and only 0.63% of searchers clicked anything on page two. For most businesses, the gap between position three and position thirteen is the gap between a steady flow of buyers and none at all.

I run the [SEO practice at Cardinal](/services/seo-analytics), and this is the guide I wish every business owner read before they spent a dollar on it. It explains how search actually works, the types of SEO and what each one is for, how long it honestly takes, and a 90-day plan to start. Every section links to a deeper guide in this series if you want the detail.`,
        visual: {
          kind: "stats",
          title: "Why position matters",
          caption: "Source: Backlinko's analysis of about 4 million Google search results (updated 2025).",
          items: [
            { value: "27.6%", label: "Average click-through rate of the #1 organic result" },
            { value: "10×", label: "More clicks for #1 than for #10" },
            { value: "0.63%", label: "Of searchers who clicked a result on page two" },
          ],
        },
      },
      {
        heading: "How does SEO work? Start with how Google works",
        body: `You cannot optimize for a system you do not understand, and Google is unusually open about this one. Its documentation on [how Google Search works](https://developers.google.com/search/docs/fundamentals/how-search-works) describes three stages, and every SEO problem I have ever diagnosed lives in one of them.

Two sentences from that page are worth memorizing. First: Google doesn't accept payment to crawl a site more frequently or rank it higher. Second: Google doesn't guarantee that it will crawl, index or serve your page, even if you follow its rules. Both matter when someone tries to sell you a shortcut.

Ranking is where most people's attention goes, but it is the last stage, not the first. A page that is never crawled cannot be indexed, and a page that is not indexed cannot rank, no matter how good the writing is. That is why a real SEO engagement starts with the plumbing: the technical work covered in the next sections.`,
        visual: {
          kind: "steps",
          title: "The three stages of Google Search",
          caption: "Sources: Google Search Central, In-Depth Guide to How Google Search Works and SEO Starter Guide.",
          items: [
            { title: "Crawling", body: "Automated programs called crawlers discover pages, mostly by following links, and download their text, images and videos. Google says the vast majority of new pages it finds each day are found through links." },
            { title: "Indexing", body: "Google analyzes what each page is about, decides whether it is a duplicate of another page, and stores the information in its index, a very large database." },
            { title: "Serving", body: "When someone searches, Google returns the indexed pages it judges most relevant and useful, using hundreds of factors that can include the searcher's location, language and device." },
          ],
        },
      },
      {
        heading: "The three questions every SEO tactic answers",
        body: `SEO advice online can feel like a thousand unrelated tips. Here is the frame I use to sort all of it. Every legitimate tactic answers one of three questions about a page, and a page needs a yes to all three to rank for anything worth having.

Can search engines read it? This is the technical layer: crawlable links, a page that returns the right status code, a correct canonical tag, content that does not depend on JavaScript to appear, and reasonable speed.

Does it answer the search? This is relevance: whether the page clearly matches what the searcher wanted, in the format they wanted it, better than the alternatives.

Is it trusted? This is reputation: links and mentions from other sites, reviews, a real author, and the signals Google's quality guidance groups under experience, expertise, authoritativeness and trust. Google's [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) says trust is the most important of those, and our guide to [what E-E-A-T means](/blog/what-is-eeat-google) explains how that plays out.

When a page is not ranking, ask the three questions in order. Most of the time the answer to the first one is the problem, and nobody has checked.`,
        highlight: "A page needs three yeses to rank: Google can read it, it answers the search, and it is trusted. Most SEO problems are a quiet no to the first question.",
        visual: {
          kind: "triad",
          title: "Readable, relevant, reputable",
          caption: "A simple way to sort any SEO advice: which of the three questions does it help answer?",
          center: "Rankings",
          items: [
            { title: "Readable", body: "Can crawlers find, render and index the page? Technical SEO." },
            { title: "Relevant", body: "Does the page answer the search better than the alternatives? On-page and content SEO." },
            { title: "Reputable", body: "Do other sites, reviews and real authors vouch for it? Off-page and local SEO." },
          ],
        },
      },
      {
        heading: "The types of SEO, and what each one is for",
        body: `People talk about types of SEO as if they were separate services. They are better understood as five kinds of work that map onto the three questions above. A healthy site needs all five; the proportions depend on where it is weakest.

Here is what each one covers, with the guide in this series that goes deeper.`,
        bullets: [
          "Technical SEO: crawling, indexing, redirects, canonical tags, sitemaps, site speed and mobile rendering. Readable. See the [technical SEO guide](/blog/technical-seo-guide).",
          "On-page SEO: titles, headings, internal links and content on each page, aligned to what people search. Relevant. See the [on-page SEO checklist](/blog/on-page-seo-checklist).",
          "Content SEO: new pages and articles that answer real questions, chosen through [keyword research](/blog/how-to-do-keyword-research). Relevant.",
          "Off-page SEO: earning links and mentions from other reputable sites. Reputable. See [what backlinks are and how to earn them](/blog/what-are-backlinks).",
          "Local SEO: your Google Business Profile, reviews and citations, which drive the map results. Google says local ranking comes down mainly to relevance, distance and prominence. Our [Houston local SEO guide](/blog/houston-local-seo-guide) covers it in depth.",
        ],
      },
      {
        heading: "The new layer: SEO for AI search",
        body: `As of 2026, a growing share of searches end in an AI-written answer: Google's AI Overviews and AI Mode, ChatGPT search, Perplexity, Claude and others. A lot of people now ask whether SEO still matters. The honest answer is that AI search runs on the same foundation.

Google is explicit about its own AI features. Its page on [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) says there are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary. To be shown as a supporting link, a page must be indexed and eligible to be shown in Google Search with a snippet. In other words, the three questions still apply, and a page that fails the first one is invisible to the AI answer too.

Other AI systems run their own crawlers, so we make sure they can read our site as well. Cardinal's site pre-renders every page to static HTML so crawlers and AI bots read the full content without running JavaScript, uses structured data to identify who we are and what each page covers, and has a robots.txt file that explicitly allows AI search crawlers such as OAI-SearchBot, ClaudeBot and PerplexityBot. We also publish an llms.txt file, though Google says its own AI features do not need one.

Our guide to [generative engine optimization](/blog/generative-engine-optimization-ai-search) covers how to earn citations in AI answers, and [what AI Overviews mean for business websites](/blog/google-ai-overviews-what-it-means-for-business-websites) covers the effect on clicks. For the markup side, see the [schema markup guide](/blog/schema-markup-guide).`,
        highlight: "There is no separate AI SEO to buy. Google says its AI features have no extra requirements: be indexed, be eligible for a snippet, be worth citing.",
      },
      {
        heading: "What SEO is not",
        body: `SEO's reputation suffers from the people selling the wrong version of it. Google's own page on [whether you need an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) is blunt: no one can guarantee a number one ranking on Google, and if someone guarantees their changes will put you in first place, find someone else.

The shortcuts are spelled out too. Google's [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) name the tactics that make SEO look cheap and fast on paper, including keyword stuffing, buying or selling links for ranking purposes, doorway pages, hidden text, and scaled content abuse, where many pages are generated mainly to manipulate rankings rather than help people. They can work briefly. They also get sites demoted or removed.

That last policy is about intent, not tools. Google's position is that it rewards high-quality content however it is produced, and that using automation, including AI, primarily to manipulate rankings breaks the rules. Our article on [what Google's rules say about AI-generated content](/blog/ai-generated-content-google-rankings-what-the-rules-say) covers the detail.`,
        visual: {
          kind: "flags",
          title: "Real SEO versus the shortcut version",
          caption: "Red flags drawn from Google's spam policies and its guidance on hiring an SEO.",
          green: [
            "Explains the work in plain language and reports leads, not just rankings",
            "Fixes crawling and indexing problems before writing new content",
            "Earns links through relationships, PR and content worth citing",
            "Sets expectations in months, with milestones along the way",
          ],
          red: [
            "Guarantees a #1 ranking or page one by a date",
            "Sells link packages or promises hundreds of backlinks a month",
            "Publishes near-identical pages for every suburb or keyword",
            "Mass-produces articles with nobody checking them",
          ],
        },
      },
      {
        heading: "How long does SEO take?",
        body: `Longer than most people want, and the honest answer depends on what you are changing. Google's [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) says some changes might take effect in a few hours while others could take several months, and suggests waiting a few weeks before judging whether a change worked.

New pages competing for established searches take longest. Ahrefs studied a million random pages and found only 1.74% of newly published pages reached Google's top ten within a year; in a filtered sample of English-language pages with real content the figure was 6.11%. The same study found the average page ranking first was about five years old, and only 13.7% of top-ten pages were under a year old.

That is not a reason to give up. It is a reason to fix the fast things first. Technical problems, like pages that are not indexed or canonical tags pointing at the wrong URL, can show results as soon as Google recrawls. Local improvements to a Google Business Profile often move quickly too. Competitive content and authority compound over many months, and they keep paying once they work.`,
        highlight: "SEO is slow on purpose. The average page ranking first in Google is about five years old, which is exactly why the businesses that start now are hard to catch later.",
        visual: {
          kind: "stats",
          title: "How long ranking really takes",
          caption: "Source: Ahrefs, How Long Does It Take to Rank in Google? (2025).",
          items: [
            { value: "5 years", label: "Average age of the page ranking #1" },
            { value: "13.7%", label: "Of top-ten pages that are under one year old" },
            { value: "1.74%", label: "Of new pages that reached the top ten within a year" },
          ],
        },
      },
      {
        heading: "SEO vs. paid ads: which should you use?",
        body: `Paid search ads and SEO both put you on the results page, but they work on different clocks. Ads can show the day a campaign launches, and they stop the moment the budget does. Organic rankings take months to earn and then keep producing without a cost per click. Google is clear that the two are separate: it doesn't accept payment to rank a site higher in organic results.

Most businesses that can afford both run ads for near-term leads while SEO builds the long-term asset, then shift budget as organic traffic carries more of the load. Our [digital marketing team](/services/digital-marketing) runs the ads side.`,
        visual: {
          kind: "compare",
          title: "SEO and paid search side by side",
          caption: "General comparison. Actual timelines and costs depend on your market and competition.",
          columns: ["SEO", "Paid search ads"],
          rows: [
            { label: "Speed to first visibility", values: ["Weeks to months", "Same day"] },
            { label: "Cost per click", values: ["None", "Every click"] },
            { label: "When you stop paying", values: ["Rankings decay slowly", "Visibility stops"] },
            { label: "Can money buy position?", values: [false, true] },
            { label: "Builds a lasting asset", values: [true, false] },
          ],
        },
      },
      {
        heading: "SEO for beginners: your first 90 days",
        body: `If you are starting from zero, do not start with content. Start by making sure Google can read what you already have. Here is the order I would follow for any small business site, and the one we follow on new engagements.

Day one is free: set up [Google Search Console](https://search.google.com/search-console/about) and check which pages are indexed. Then audit the basics. When we audited our own site this month, we found that every page's canonical tag pointed at the non-www version of our domain, which redirected to the www version, so each page told Google the real copy was somewhere that sent it straight back. Made-up URLs also returned our homepage with a 200 status instead of a proper 404. Both were invisible to visitors, and both were fixed in an afternoon. If it can happen to an agency's site, it can happen to yours; our guide on [how to do an SEO audit](/blog/how-to-do-an-seo-audit) walks through the checks.`,
        visual: {
          kind: "timeline",
          title: "A 90-day SEO starting plan",
          caption: "A starting sequence for a small business site. Competitive markets need longer and more resources in each phase.",
          items: [
            { when: "Days 1–30", title: "Make it readable", body: "Search Console, indexing, canonicals, redirects, broken pages, sitemap, speed. Fix what stops Google from reading the site you already have." },
            { when: "Days 31–60", title: "Make it relevant", body: "Research what buyers actually search, give each service its own page, and rewrite titles, headings and content to match the intent behind each search." },
            { when: "Days 61–90", title: "Make it reputable", body: "Complete your Google Business Profile, ask every happy customer for a review, and start earning links from partners, associations and local press." },
            { when: "Ongoing", title: "Measure and repeat", body: "Track rankings, traffic and, most importantly, calls and forms from search. Publish where the data shows demand you are not meeting." },
          ],
        },
      },
      {
        heading: "Should you do SEO yourself or hire someone?",
        body: `Plenty of businesses can handle the basics themselves. Google's documentation is free, Search Console is free, and the first phase of the plan above needs patience more than budget. If you serve one area, have a handful of competitors and can write clearly about your work, start there, and use our guide on [how to rank higher on Google](/blog/how-to-rank-higher-on-google) as the playbook.

Hiring help makes sense when the market is competitive, the site has technical problems you cannot diagnose, or nobody has the hours to publish and build links every month. Before you hire, read [what an SEO agency actually does every month](/blog/what-an-seo-agency-does-every-month) so you know what the money should buy, and [how to choose an SEO company in Houston](/blog/how-to-choose-an-seo-company-in-houston) for the questions to ask.

For reference, Cardinal's month-to-month plans are SEO Foundation at $1,500 a month, SEO Growth at $2,500 and SEO Domination at $4,000, and each reports rankings, traffic and leads monthly. Our guide to [how much SEO costs in Houston](/blog/how-much-does-seo-cost-houston) puts those numbers in market context.

Whoever does the work, judge it by one question: did more of the right people find you, and did they call?`,
      },
    ],
    cta: "Not sure which of the three questions your site is failing? Send us the address and we'll reply within 24 hours with a free, plain-language audit summary of what is holding it back.",
  },
};

export default article;
