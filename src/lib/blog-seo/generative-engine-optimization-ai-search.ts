// Generative engine optimization (GEO / AEO): how AI search picks sources and how to get cited.
import type { BlogArticle } from "../blog-data";

const SRC = {
  googleGuide: { label: "Google Search Central — Optimizing your website for generative AI features on Google Search (2026)", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
  googleCrawlers: { label: "Google Search Central — Google's common crawlers: Google-Extended (2026)", url: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers" },
  openai: { label: "OpenAI — Overview of OpenAI Crawlers (2026)", url: "https://developers.openai.com/api/docs/bots" },
  anthropic: { label: "Anthropic — Does Anthropic crawl data from the web, and how can site owners block the crawler? (2026)", url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" },
  perplexity: { label: "Perplexity — Perplexity Crawlers (2026)", url: "https://docs.perplexity.ai/guides/bots" },
  bing: { label: "Microsoft Bing — New AI Visibility Insights in Bing Webmaster Tools (2026)", url: "https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare" },
  indexnow: { label: "IndexNow.org — IndexNow protocol", url: "https://www.indexnow.org/" },
  llmstxt: { label: "llmstxt.org — The /llms.txt file, Jeremy Howard (2024)", url: "https://llmstxt.org/" },
  geoPaper: { label: "Aggarwal et al. — GEO: Generative Engine Optimization, KDD 2024 (arXiv 2311.09735)", url: "https://arxiv.org/abs/2311.09735" },
  ahrefs: { label: "Ahrefs — 10 SEO Trends I've Seen Firsthand in 2026 (With Data) (2026)", url: "https://ahrefs.com/blog/seo-trends/" },
};

const article: BlogArticle = {
  slug: "generative-engine-optimization-ai-search",
  title: "Generative Engine Optimization (GEO): How to Get Your Business Cited by ChatGPT, Google AI and Perplexity",
  seoTitle: "Generative Engine Optimization: How to Get Cited by AI",
  seoDescription: "Generative engine optimization without the hype: how ChatGPT, Google AI Mode and Perplexity choose sources, which crawlers to allow, and what gets cited.",
  excerpt: "GEO, AEO, LLM SEO: the names are new, the mechanics mostly are not. Here is how AI search engines actually choose the pages they cite, the crawler map most sites get wrong, and a practical playbook for being one of the sources.",
  category: "SEO & Local Search",
  pillar: "seo",
  priority: 8,
  author: "Hunain Qureshi",
  date: "2026-11-18",
  readTime: "9 min read",
  featured: true,
  keywords: [
    "generative engine optimization",
    "AI search optimization",
    "GEO",
    "answer engine optimization",
    "AEO",
    "AI SEO",
    "how to rank in ChatGPT",
    "how to get cited by AI",
    "llms.txt",
    "ai overview optimization",
    "LLM SEO",
  ],
  relatedService: "/services/seo-analytics",
  cover: { kicker: "How to get cited by AI search", motif: "spark" },
  sources: [SRC.googleGuide, SRC.googleCrawlers, SRC.openai, SRC.anthropic, SRC.perplexity, SRC.bing, SRC.indexnow, SRC.llmstxt, SRC.geoPaper, SRC.ahrefs],
  about: [
    { name: "search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" },
    { name: "generative engine optimization", sameAs: "https://www.wikidata.org/wiki/Q134083964" },
    { name: "artificial intelligence", sameAs: "https://www.wikidata.org/wiki/Q11660" },
  ],
  takeaways: [
    "AI search engines retrieve pages from a search index first and cite them second, so a page that is not crawled and indexed cannot be cited, however well it is written.",
    "Google's own guidance says optimizing for generative AI search is still SEO; GEO is SEO adapted to answers, not a replacement for it.",
    "Training crawlers and search crawlers are different bots: blocking GPTBot keeps you out of OpenAI's model training, while blocking OAI-SearchBot keeps you out of ChatGPT search answers.",
    "In the Princeton and IIT Delhi GEO study, adding citations, quotations and statistics raised visibility in AI answers by 30 to 40%, while keyword stuffing offered little to no improvement.",
    "llms.txt is a community proposal, not a standard, and Google says you don't need it; publish one only if it is cheap and generated from your real site data.",
  ],
  faqs: [
    {
      question: "What is generative engine optimization (GEO)?",
      answer: "Generative engine optimization is the practice of making your content easy for AI search tools such as Google AI Overviews and AI Mode, ChatGPT search, Perplexity and Microsoft Copilot to find, understand and cite. It rests on normal SEO foundations, crawlability, indexing, helpful content and reputation, with extra attention to clear answers, specific facts and which AI crawlers you allow.",
    },
    {
      question: "Is GEO different from SEO?",
      answer: "Mostly in emphasis, not in mechanics. Google's guidance on generative AI features says optimizing for generative AI search is optimizing for the search experience, and thus still SEO. AI answers are built from pages retrieved from a search index, so the work that earns rankings also earns citations. GEO adds attention to answer-first writing, specific facts, crawler access and measuring citations.",
    },
    {
      question: "How do I get my website cited by ChatGPT?",
      answer: "ChatGPT's search features surface websites through OpenAI's OAI-SearchBot crawler, and OpenAI says sites that opt out of it will not be shown in ChatGPT search answers. So first allow OAI-SearchBot in robots.txt. Then make sure pages render without JavaScript, answer questions directly, include specific facts such as prices and locations, and are referenced by other reputable sites.",
    },
    {
      question: "Does llms.txt help with AI search?",
      answer: "There is little public evidence that it does. llms.txt is a 2024 community proposal for a Markdown file that summarizes a site for AI tools. Google says you don't need new machine-readable or AI text files to appear in Google Search. Interest is growing quickly, so a low-cost file generated from your real site data is a reasonable hedge, but it is not a ranking lever.",
    },
    {
      question: "Should I block AI crawlers like GPTBot?",
      answer: "It depends on which job you want to block. GPTBot and ClaudeBot collect content that may be used to train AI models. OAI-SearchBot, Claude-SearchBot and PerplexityBot index pages for AI search results. A business that wants to be cited in AI answers should at minimum allow the search crawlers, even if it chooses to opt out of training.",
    },
    {
      question: "How do I track traffic from AI search?",
      answer: "Use three sources. Google Search Console's Generative AI performance report covers impressions in AI Overviews and AI Mode. Bing Webmaster Tools' AI Performance report shows citations across Copilot and Bing AI answers. In your analytics, segment referral traffic from domains such as chatgpt.com and perplexity.ai, and add a monthly manual check of the prompts your customers would ask.",
    },
    {
      question: "Do I need special schema markup for AI search?",
      answer: "No. Google says structured data isn't required for generative AI search and there is no special schema.org markup to add. Structured data is still worth having because it helps search engines understand your business and makes pages eligible for rich results, but it should describe what is visibly on the page and is not a shortcut to AI citations.",
    },
  ],
  content: {
    sections: [
      {
        heading: "What is generative engine optimization (GEO)?",
        body: `Generative engine optimization (GEO) is the work of getting your business found, understood and cited by AI search: Google's AI Overviews and AI Mode, ChatGPT search, Perplexity and Microsoft Copilot. You will also hear it called answer engine optimization (AEO), AI search optimization or LLM SEO. They all describe the same goal: when someone asks an AI a question your business can answer, your page is one of the sources it uses.

Here is the part most GEO pitches leave out. Google's own guide to its generative AI features says that "optimizing for generative AI search is optimizing for the search experience, and thus still SEO." The same guide says you don't need to break content into tiny pieces, write in a special way for AI, or add AI-specific files to appear.

So the new acronyms are mostly marketing for something real: [SEO](/blog/what-is-seo), adapted to a world where the result is often an answer instead of a list of links. That adaptation matters, and the rest of this guide is about exactly what changes. But if anyone sells you GEO as a separate discipline that replaces search fundamentals, they are selling the label.`,
        highlight: "GEO is not a new game. It is the same game with a different scoreboard: citations instead of rankings.",
      },
      {
        heading: "Why everyone is suddenly searching for AI SEO",
        body: `Business owners have noticed that more questions are being answered before anyone clicks. We covered the traffic side of that shift in our analysis of [what Google's AI Overviews mean for business websites](/blog/google-ai-overviews-what-it-means-for-business-websites), so I won't repeat it here. This article is the practical companion: how to be one of the sources those answers are built from.

The demand for that knowledge shows up in the keyword data. In June 2026, Ahrefs reported that searches for "ai overview optimization" had grown 625% year over year and searches for "llms.txt" 154%. Related ideas that GEO borrows from, such as semantic SEO and entity SEO, are being searched thousands of times a month.

When a topic grows that fast, the advice around it gets noisy. Some of it is good. Some of it is old SEO folklore with "AI" added to the front. My aim is to separate what the AI companies have actually documented from what is guesswork, and to be clear about which is which.`,
        visual: {
          kind: "stats",
          title: "US monthly searches for AI search topics",
          caption: "Source: Ahrefs, 10 SEO Trends I've Seen Firsthand in 2026 (June 2026). Growth is year over year.",
          items: [
            { value: "3,700", label: "Searches a month for \"llms.txt\" (+154%)" },
            { value: "+625%", label: "Growth in searches for \"ai overview optimization\" (900 a month)" },
            { value: "2,800", label: "Searches a month for \"semantic seo\"" },
            { value: "700", label: "Searches a month for \"entity seo\"" },
          ],
        },
      },
      {
        heading: "How do AI search engines choose which sources to cite?",
        body: `Every major AI search product works in roughly the same two steps: retrieve, then write. The model does not pull your business from memory. It runs searches, collects pages, and composes an answer with links to the pages it relied on.

Google describes this directly. Its generative features use retrieval-augmented generation, also called grounding, "relying on our core Search ranking systems to retrieve relevant, up-to-date web pages from our Search index." They also use query fan-out: a set of concurrent, related searches the model generates to gather more information. One question from a user can become a dozen searches behind the scenes, which is why pages that answer narrow sub-questions get cited.

The others follow the same pattern with their own indexes. OpenAI says its OAI-SearchBot crawler "is used to surface websites in search results in ChatGPT's search features." Perplexity says PerplexityBot is designed to surface and link websites in its search results. Microsoft's Bing Webmaster Tools now reports how often a site is cited in AI answers across Copilot and Bing, and the "grounding queries" that triggered those citations.

The consequence is simple and it is the most important sentence in this guide: you cannot be cited from an index you are not in.`,
        visual: {
          kind: "steps",
          title: "From a question to a citation",
          caption: "Simplified from Google's description of grounding and query fan-out, and the crawler documentation from OpenAI, Perplexity and Microsoft Bing.",
          items: [
            { title: "Question", body: "A user asks a conversational question, often longer and more specific than a typical search." },
            { title: "Fan-out", body: "The system breaks it into several related searches to cover subtopics." },
            { title: "Retrieve", body: "Each search pulls candidate pages from the engine's own index, built by its search crawler." },
            { title: "Write and cite", body: "The model composes an answer from the most useful passages and links to the pages it used." },
          ],
        },
      },
      {
        heading: "The AI crawler map: which bots to allow and what blocking them does",
        body: `This is where I see the most expensive mistakes. A business reads that AI companies are scraping the web, adds a blanket block for every AI bot to robots.txt, and then wonders why ChatGPT and Perplexity never mention it.

The fix is to understand that each AI company runs separate bots for separate jobs. Some collect content that may be used to train models. Some build the search index that AI answers are retrieved from. Some fetch a single page because a user asked about it. Blocking one does not block the others, and the consequences are very different.

The rule of thumb: if you want to be cited, allow the search crawlers. Whether you allow training crawlers is a separate business decision about your content, and it does not change your eligibility for AI search. Our own robots.txt allows all of the bots in the table below, plus Applebot-Extended, DuckAssistBot and MistralAI-User, in a single group, and keeps only the admin area off limits. Google's token works the same way: Google says Google-Extended "does not impact a site's inclusion in Google Search nor is it used as a ranking signal."

Note the user-triggered fetchers. OpenAI says that for ChatGPT-User, "robots.txt rules may not apply," and Perplexity says Perplexity-User "generally ignores robots.txt rules," because a person requested the page. Our [technical SEO guide](/blog/technical-seo-guide) covers how to write robots.txt groups correctly.`,
        visual: {
          kind: "compare",
          title: "Who crawls for what, and what blocking it does",
          caption: "Sources: crawler documentation from OpenAI, Anthropic, Perplexity and Google, as of 2026. Check each vendor's page before changing robots.txt; bots are added and renamed.",
          columns: ["Company", "Job", "If you block it"],
          rows: [
            { label: "GPTBot", values: ["OpenAI", "Training", "Content not used to train OpenAI foundation models"] },
            { label: "OAI-SearchBot", values: ["OpenAI", "Search index", "Not shown in ChatGPT search answers"] },
            { label: "ChatGPT-User", values: ["OpenAI", "User-triggered fetch", "robots.txt rules may not apply"] },
            { label: "ClaudeBot", values: ["Anthropic", "Training", "Future content excluded from training"] },
            { label: "Claude-SearchBot", values: ["Anthropic", "Search index", "May reduce visibility in Claude search results"] },
            { label: "Claude-User", values: ["Anthropic", "User-triggered fetch", "Claude can't fetch your page when users ask"] },
            { label: "PerplexityBot", values: ["Perplexity", "Search index", "Lose the bot that surfaces and links sites in Perplexity"] },
            { label: "Perplexity-User", values: ["Perplexity", "User-triggered fetch", "Generally ignores robots.txt"] },
            { label: "Google-Extended", values: ["Google", "Gemini training and grounding", "No effect on Google Search inclusion or ranking"] },
          ],
        },
      },
      {
        heading: "How to optimize for AI search: the seven-part playbook",
        body: `Once the right crawlers can reach you, the job is to be the most useful, most quotable page on the subject. These are the seven things I check on every site we work on, in order of how often they turn out to be the problem.

None of them are tricks. Google's guide recommends "non-commodity content that's helpful, reliable, and people-first," and every item below is a practical way of delivering that to a machine that reads fast and quotes selectively.

A hypothetical example makes the difference concrete. Picture two Houston roofing companies. The first has a services page that says it offers "quality roofing at competitive prices across the greater Houston area." The second has a page titled "How much does a roof replacement cost in Houston?" that opens with a price range, lists the neighborhoods it serves, explains what changes the price, and is linked from a local news story and a few hundred reviews. Ask an AI tool that question and only one of those pages contains anything worth citing.

If you are a local business, start with your [Google Business Profile and local signals](/blog/google-business-profile-guide-houston), because your name, address, hours and reviews are the facts an AI answer most needs to get right about a local business.`,
        bullets: [
          "Be readable without JavaScript. Don't assume a crawler will run your scripts. visitcardinal.com pre-renders every page to static HTML at build time, so any crawler that reads raw HTML gets the full content.",
          "Answer first. Put the direct answer to the question in the first two or three sentences under a heading that mirrors the question, then expand. Query fan-out rewards pages that answer specific sub-questions cleanly.",
          "Be specific. Prices, service areas, hours, numbers and named sources give a model something concrete to quote. \"Plans start at $1,500 a month\" is citable; \"affordable pricing\" is not.",
          "Make your entity unambiguous. Use the same business name, address and description everywhere, and describe it with structured data. Google says no special schema is needed for AI, but [schema markup](/blog/schema-markup-guide) still helps systems understand who you are.",
          "Earn mentions on other sites. Reviews, local press, industry directories and genuine [backlinks](/blog/what-are-backlinks) are how systems judge reputation. Google warns that seeking inauthentic mentions isn't as helpful as it might seem.",
          "Get into Bing. Verify your site in Bing Webmaster Tools and use IndexNow, a protocol supported by Microsoft Bing and several other engines, to report new and changed URLs. We submit changed URLs via IndexNow after every deploy.",
          "Keep it current and show expertise. Update prices, dates and facts when they change, and put a named expert behind the content. Our guide to [E-E-A-T](/blog/what-is-eeat-google) explains how Google evaluates that.",
        ],
        highlight: "If your page says \"affordable pricing\" and a competitor's says \"$1,500 a month,\" only one of you has given the AI something to quote.",
      },
      {
        heading: "What the GEO research actually found",
        body: `The term "generative engine optimization" comes from a 2023 paper by researchers at Princeton University and IIT Delhi, later accepted at KDD 2024. It is the most cited piece of evidence in this field, and it is often overstated, so here is what it actually measured.

The researchers built GEO-bench, a benchmark of queries across many domains, and tested several ways of rewriting a source page to see which made it more visible in AI-generated answers. They ran the tests on a custom engine built on gpt-3.5-turbo that answered from the top five Google results, and on Perplexity.ai.

The winners were adding citations to credible sources, adding quotations, and adding statistics, which improved visibility by 30 to 40% on the paper's main metric. The abstract's headline is "up to 40%." Keyword stuffing, the reflex of old-school SEO, offered "little to no improvement," and on Perplexity it did worse than leaving the page alone.

Two caveats keep this honest. It was a lab experiment on 2023-era systems, not a study of live Google or ChatGPT rankings, and the authors note that effectiveness varies by domain. But the direction matches everything else in this guide: evidence and specificity get quoted, padding does not.`,
        visual: {
          kind: "stats",
          title: "What moved visibility in the GEO study",
          caption: "Source: Aggarwal et al., GEO: Generative Engine Optimization (KDD 2024, arXiv 2311.09735). Relative improvements on the paper's position-adjusted word count metric.",
          items: [
            { value: "Up to 40%", label: "Visibility boost in generative engine responses (headline result)" },
            { value: "30–40%", label: "Gain from adding citations, quotations or statistics" },
            { value: "~0", label: "Improvement from keyword stuffing" },
          ],
        },
      },
      {
        heading: "Does llms.txt help you get cited by AI?",
        body: `llms.txt is a proposal, published by Jeremy Howard in September 2024, for a Markdown file at the root of a site that gives AI tools a concise, curated summary of what the site contains and where the important pages are. The project describes itself as "a proposal to standardise" this file. It is not a web standard, and no AI company is obliged to read it.

Interest is real: Ahrefs reported 3,700 US searches a month for "llms.txt" in 2026, up 154% in a year. Evidence that it improves citations is not. Google's guide is explicit that "you don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search." For other AI products, I treat it as unproven until a vendor documents using it.

We publish one at visitcardinal.com/llms.txt anyway, for a specific reason: it costs us nothing to maintain. It is generated at build time from the same data as the site itself, the services, prices, Houston facts, guides and FAQs, so it can never drift out of date or contradict a page. If your llms.txt would need to be written and updated by hand, skip it and spend the hour improving a real page instead.`,
        highlight: "llms.txt is a cheap hedge, not a strategy. If it takes more than an automated build step to maintain, your time is better spent on the pages themselves.",
      },
      {
        heading: "How to measure your AI search visibility",
        body: `You can't manage what you can't see, and AI visibility is still harder to see than rankings. As of 2026, there are four practical measurements, and I'd use all of them together rather than trusting any single number.

Be skeptical of tools that claim to know exactly how often an AI recommends you. Google's own guide warns site owners to "be wary of third-party tools that promise ranking success or claim to use 'internal' Google metrics." Answers vary by user, location and phrasing, so treat any AI visibility score as a trend line, not a fact.

The goal is the same as in classic SEO: connect visibility to leads. A citation that never produces a call is trivia. That is why every [Cardinal SEO plan](/services/seo-analytics) reports rankings, traffic and leads each month, not just impressions.`,
        visual: {
          kind: "steps",
          title: "A monthly AI visibility check",
          caption: "Google's guide points site owners to the Generative AI performance report in Search Console; Bing's AI Performance report covers citations in Copilot and Bing.",
          items: [
            { title: "Search Console", body: "Open the Generative AI performance report to see how your pages appear in Google's AI features." },
            { title: "Bing Webmaster Tools", body: "Check the AI Performance report for citations, cited pages and the grounding queries behind them." },
            { title: "Analytics referrals", body: "Segment sessions referred by chatgpt.com, perplexity.ai and copilot.microsoft.com, and track which of them become leads." },
            { title: "Prompt checks", body: "Ask the same 10 to 20 customer questions in each AI tool every month and note who gets cited." },
          ],
        },
      },
      {
        heading: "GEO myths that waste your budget",
        body: `Fast-growing topics attract confident advice. Here is how the common claims hold up against what Google, the AI companies and the research actually say.

The biggest myth is that SEO is dead. The retrieval step depends on search indexes and, in Google's case, on its core ranking systems. A site that is invisible in search is invisible to AI search too. What is fading is the value of thin, generic pages that a summary can replace; we covered Google's rules on that in [what the rules say about AI-generated content](/blog/ai-generated-content-google-rankings-what-the-rules-say).

The second myth is that you need a special format for machines: chunked paragraphs, AI-only rewrites, hidden text for bots. Google says none of that is required. Write for people, clearly, and the machines that quote people's sources will find you.

The third myth is that AI visibility can be bought or guaranteed. The citation step is a model choosing among retrieved pages for one question, phrased one way, for one user, and the answer can change the next time it is asked. No agency controls that step. Anyone who promises a fixed number of ChatGPT mentions is promising something no one controls.`,
        visual: {
          kind: "flags",
          title: "AI search: what works and what doesn't",
          caption: "Based on Google's generative AI features guide, OpenAI, Anthropic and Perplexity crawler documentation, and the KDD 2024 GEO paper.",
          green: [
            "Allowing AI search crawlers in robots.txt",
            "Direct answers under question-style headings",
            "Specific facts, statistics and cited sources",
            "Reviews, press and directory listings that mention you",
            "Fresh prices, hours and service details",
          ],
          red: [
            "\"SEO is dead, you need GEO instead\"",
            "Keyword stuffing for language models",
            "Chunking every page into tiny fragments",
            "Special schema markup \"for AI\"",
            "Tools that guarantee AI citations",
          ],
        },
      },
    ],
    cta: "Want to know whether ChatGPT, Perplexity and Google's AI features can even see your business? We'll check your crawler access, rendering, structured data and current AI citations, then tell you plainly what to fix first. No guarantees, no jargon, just a clear list.",
  },
};

export default article;
