// What backlinks are, why they still matter, and how a local business can earn them without risking a penalty.
import type { BlogArticle } from "../blog-data";

const SRC = {
  ranking: { label: "Google Search Central — A guide to Google Search ranking systems", url: "https://developers.google.com/search/docs/appearance/ranking-systems-guide" },
  spam: { label: "Google Search Central — Spam policies for Google web search", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  qualify: { label: "Google Search Central — Qualify your outbound links to Google", url: "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links" },
  nofollow: { label: "Google Search Central Blog — Evolving \"nofollow\": new ways to identify the nature of links (2019)", url: "https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify" },
  linkSpamUpdate: { label: "Google Search Central Blog — December 2022 link spam update (2022)", url: "https://developers.google.com/search/blog/2022/12/december-22-link-spam-update" },
  disavow: { label: "Google Search Console Help — Disavow links to your site", url: "https://support.google.com/webmasters/answer/2648487" },
  linksReport: { label: "Google Search Console Help — Links report", url: "https://support.google.com/webmasters/answer/9049606" },
  bing: { label: "Bing Webmaster Blog — Bing Webmaster Tools or Google Search Console: A Comparison (2024)", url: "https://blogs.bing.com/webmaster/2024/8/Bing-Webmaster-Tools-or-Google-Search-Console-A-Comparison/" },
  ahrefs: { label: "Ahrefs — 96.55% of Content Gets No Traffic From Google (2023)", url: "https://ahrefs.com/blog/search-traffic-study/" },
  backlinko: { label: "Backlinko — We Analyzed 11.8 Million Google Search Results (updated 2025)", url: "https://backlinko.com/search-engine-ranking" },
};

const article: BlogArticle = {
  slug: "what-are-backlinks",
  title: "What Are Backlinks? How Links Still Move Rankings, and How to Earn Them Without Getting Burned",
  seoTitle: "What Are Backlinks? How to Get Them the Right Way",
  excerpt: "Backlinks are still one of the signals Google uses to judge which pages deserve to rank. Here is what makes a link worth having, why buying them is a bad bet, and a playbook for earning them, ranked by effort.",
  seoDescription: "What backlinks are, why Google still uses them, dofollow vs nofollow, toxic links and disavow, and an ethical playbook for earning links, ranked by effort.",
  category: "SEO & Local Search",
  pillar: "seo",
  priority: 5,
  author: "Hunain Qureshi",
  date: "2026-11-18",
  readTime: "12 min read",
  featured: false,
  keywords: [
    "backlinks",
    "what are backlinks",
    "how to get backlinks",
    "link building",
    "off page seo",
    "dofollow vs nofollow",
    "toxic backlinks",
    "buying backlinks",
    "backlink checker",
    "local link building",
  ],
  relatedService: "/services/seo-analytics",
  sources: [
    SRC.ranking,
    SRC.spam,
    SRC.qualify,
    SRC.nofollow,
    SRC.linkSpamUpdate,
    SRC.disavow,
    SRC.linksReport,
    SRC.bing,
    SRC.ahrefs,
    SRC.backlinko,
  ],
  cover: { kicker: "Backlinks: earn them, don't buy them", motif: "pins" },
  about: [
    { name: "backlinks", sameAs: "https://www.wikidata.org/wiki/Q373952" },
    { name: "link building", sameAs: "https://www.wikidata.org/wiki/Q1569371" },
    { name: "search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" },
  ],
  takeaways: [
    "A backlink is a link from another website to yours, and Google says PageRank, its original link-based system, is still part of its core ranking systems.",
    "One relevant link from a site your customers actually read is worth more than a hundred links from sites nobody visits.",
    "Backlinko found the #1 Google result has an average of 3.8 times more backlinks than positions two through ten, and that about 95% of pages have no backlinks at all.",
    "Buying links that pass ranking credit breaks Google's spam policies, and Google says its SpamBrain system is built to detect both link buyers and link sellers.",
    "Most sites never need the disavow tool: Google's own help page says it can usually work out which links to trust without your help.",
  ],
  faqs: [
    {
      question: "What are backlinks in SEO?",
      answer: "Backlinks are links on other websites that point to a page on your site. Search engines use them to discover pages and as one signal of which pages are useful and trusted. Google says PageRank, its original system for analyzing links, still runs as part of its core ranking systems. Links from relevant, reputable sites help the most; links built mainly to manipulate rankings break Google's spam policies.",
    },
    {
      question: "Are backlinks still important in 2026?",
      answer: "Yes, though they are one signal among many. Google's ranking systems guide says it has systems that look at how pages link to each other to work out what pages are about and which are most helpful, and that PageRank is still part of its core systems. Content that answers the search well and a technically sound site still come first; links help good pages beat other good pages.",
    },
    {
      question: "What is the difference between dofollow and nofollow links?",
      answer: "A normal link with no qualifying attribute is informally called dofollow. A nofollow link carries rel=nofollow, which tells Google you don't want to vouch for the page you are linking to, so it generally should not pass ranking credit. Google also offers rel=sponsored for paid links and rel=ugc for user-generated content. Since 2019 Google treats all three as hints rather than strict commands.",
    },
    {
      question: "Is buying backlinks illegal or just against Google's rules?",
      answer: "Buying links is not illegal, and paid advertising links are a normal part of the web. What Google's spam policies prohibit is buying or selling links that pass ranking credit. A paid link is fine if it is marked with rel=sponsored or rel=nofollow. An unmarked paid link can be ignored by Google's systems or lead to a manual action against the site.",
    },
    {
      question: "How do I check my backlinks for free?",
      answer: "Verify your site in Google Search Console and open the Links report, which shows your top linked pages, top linking sites and top linking text. Google notes it is a sample rather than every link. Bing Webmaster Tools also has a free Backlinks tool that shows your linking domains and anchor text and lets you look at backlinks for other sites, including competitors.",
    },
    {
      question: "Should I disavow toxic backlinks?",
      answer: "Usually not. Google's help page says most sites will not need the disavow tool because Google can assess which links to trust on its own. It recommends disavowing only if you have a considerable number of spammy, artificial or low-quality links pointing to your site and those links have caused, or likely will cause, a manual action. Random spam links from scraper sites are normally ignored.",
    },
    {
      question: "How many backlinks do I need to rank?",
      answer: "There is no fixed number. It depends on how competitive the search is and how strong the pages already ranking are. A local service page targeting a neighborhood search may rank with a handful of relevant local links, while a national comparison keyword can need far more. Compare your page against the pages currently ranking, and aim to earn links from the kinds of sites that link to them.",
    },
  ],
  content: {
    sections: [
      {
        heading: "What are backlinks?",
        body: `Backlinks are links on other websites that point to your website. When a local news site links to your bakery's page, or an industry association lists your firm with a link to your homepage, that is a backlink. Search engines use these links to find your pages and as evidence that other people consider them worth pointing to.

Think of a backlink as a citation. A research paper that many other papers cite is probably important. A web page that many relevant, trustworthy sites link to is probably useful. That idea is the core of PageRank, the link-analysis system Google used when it first launched, and it is why link building became its own branch of [search engine optimization](/blog/what-is-seo).

You will also hear backlinks called inbound links, incoming links or external links, and the work of earning them called off-page SEO or link building. They all describe the same thing: signals about your site that live on someone else's site, which is exactly why they are harder to fake than anything you can change on your own pages.`,
      },
      {
        heading: "Do backlinks still matter for SEO?",
        body: `Yes. Google is unusually direct about this. Its public guide to ranking systems says it has systems that understand how pages link to each other as a way to work out what pages are about and which might be most helpful for a query. It also says PageRank has evolved a lot since launch and that it continues to be part of Google's core ranking systems.

Independent studies point the same way, with an important caveat: they show correlation, not proof that links cause rankings. Backlinko's study of 11.8 million Google results found the #1 result has an average of 3.8 times more backlinks than results in positions two through ten. Ahrefs, studying roughly 14 billion pages in its index, found 96.55% get no traffic from Google at all, and named a lack of backlinks as one of the three main reasons, alongside no search demand and a mismatch with search intent.

The practical reading: content that answers the search and a technically sound site come first. Links are what separate good pages from other good pages on competitive searches. Links will not save a thin page, but an excellent page nobody links to often loses to a slightly worse one that people do.`,
        visual: {
          kind: "stats",
          title: "What the link studies found",
          caption: "Sources: Backlinko's analysis of 11.8 million Google results (updated 2025) and Ahrefs' study of about 14 billion pages (2023). Both are correlation studies.",
          items: [
            { value: "3.8×", label: "More backlinks for the #1 result than for positions 2 to 10, on average" },
            { value: "~95%", label: "Of pages in Backlinko's data have zero backlinks" },
            { value: "96.55%", label: "Of pages in Ahrefs' index get no traffic from Google" },
          ],
        },
      },
      {
        heading: "What makes a backlink valuable?",
        body: `Not all links are equal, and the raw number of links is the least interesting thing about a backlink profile. When I review a site's links, I look at five qualities, roughly in this order. A link that scores well on all five is rare and worth real effort; a link that scores on none is noise at best and a liability at worst.`,
        bullets: [
          "Relevance: a link from a site about your industry, city or customers says far more than one from an unrelated blog. A plumbing supplier linking to a plumber makes sense; a casino blog does not.",
          "Authority and reputation: links from sites that are themselves well linked and trusted, such as established publications and respected associations, carry more weight.",
          "Editorial placement: a link someone chose to put in an article because it helped their reader is the kind Google's systems are designed to reward. Footer links and directory dumps are what its spam policies call out.",
          "Anchor text: the clickable words. Natural anchors are usually your brand name or a plain description; a profile full of exact-match keyword anchors is a classic sign of manipulation.",
          "Real traffic: a link people actually click sends customers, not just ranking signals.",
        ],
        highlight: "The best test for any backlink: would you still want it if Google didn't exist? If the answer is yes, it is almost always the kind of link that helps rankings too.",
      },
      {
        heading: "Dofollow vs nofollow links (plus sponsored and ugc)",
        body: `A normal link with no special attribute is what SEOs informally call a dofollow link. It can pass ranking credit. Google lets site owners qualify links with a rel attribute that tells Google something about the relationship.

According to Google's documentation on qualifying outbound links, rel="sponsored" is for advertisements and paid placements, rel="ugc" is for user-generated content such as comments and forum posts, and rel="nofollow" is for when the other values don't apply. Links marked with these attributes will generally not be followed. You can combine them, for example rel="ugc nofollow".

One detail most guides miss: since 2019 Google has treated all three as hints rather than strict commands. Its announcement said the attributes now work as hints for ranking purposes, and that nofollow became a hint for crawling and indexing in March 2020. In plain English, a nofollow link is not worthless. It can still send visitors and get your brand in front of people who may link to you later.

For your own site: if you paid for a link or got something in exchange, mark it sponsored; if a user posted it, mark it ugc; editorial links can stay normal.`,
        visual: {
          kind: "compare",
          title: "How Google wants links qualified",
          caption: "Source: Google Search Central, Qualify your outbound links to Google, and Google's 2019 announcement that these attributes are treated as hints.",
          columns: ["No attribute", "rel=\"sponsored\"", "rel=\"ugc\"", "rel=\"nofollow\""],
          rows: [
            { label: "Use it for", values: ["Editorial links you vouch for", "Ads, paid placements, affiliate and sponsorship links", "Comments, forum posts, user profiles", "Anything else you don't want to vouch for"] },
            { label: "Can pass ranking credit", values: [true, false, false, false] },
            { label: "Treated by Google as", values: ["A normal link", "A hint", "A hint", "A hint"] },
            { label: "Can still send real visitors", values: [true, true, true, true] },
          ],
        },
      },
      {
        heading: "Buying backlinks: why it's riskier than it looks",
        body: `Google's spam policies define link spam as creating links to or from a site primarily to manipulate search rankings. The first example on its list is buying or selling links for ranking purposes, which includes exchanging money, goods or services for links or for posts that contain links. The list goes on: excessive link exchanges, automated link building, low-quality directory and bookmark links, widely distributed footer or template links, and guest posts or advertorials with paid or keyword-rich links.

Note what is not banned. Google's policy says buying links for advertising or sponsorship is a normal part of the web and is fine as long as the links are qualified with rel="sponsored" or rel="nofollow". You can sponsor a Little League team or run a paid listing. You just cannot pay for the ranking credit.

Enforcement is largely automated. In its December 2022 link spam update, Google said it was using SpamBrain, its AI-based spam-prevention system, to detect both sites that buy links and sites used to pass outgoing links, and to neutralize the impact of unnatural links on search results. Neutralized is the key word: often the purchased links simply stop counting, so the money is gone and nothing visible happens. In worse cases, a manual action can demote the site.

That is why we never buy links at Cardinal, for our own site or for clients. A paid link on a network blog nobody reads sends no customers, and if Google discounts it, it sends no ranking credit either.`,
        highlight: "The risk with bought links isn't only a penalty. More often, Google just quietly stops counting them, so you've paid for something that is worth nothing.",
      },
      {
        heading: "Toxic backlinks and the disavow tool",
        body: `Many backlink checkers flag "toxic" links and recommend disavowing them. Be skeptical. Toxicity scores are third-party estimates, not anything Google reports, and Google's own help page on the disavow tool is blunt: in most cases Google can assess which links to trust without additional guidance, so most sites will not need to use the tool.

Google recommends disavowing only if both of these are true: you have a considerable number of spammy, artificial or low-quality links pointing to your site, and those links have caused a manual action, or likely will. The realistic cases are a previous agency that bought links or ran a private blog network on your behalf, or a manual action notice in Search Console's Manual actions report.

Random spammy links from scraper sites are a normal part of being on the internet, and every established site has them. Disavowing them wastes time, and an overzealous disavow file can throw away links that were actually helping. If you are unsure which situation you are in, a proper [SEO audit](/blog/how-to-do-an-seo-audit) should answer it before anyone touches the disavow tool.`,
        visual: {
          kind: "flags",
          title: "Links worth keeping vs links worth worrying about",
          caption: "Based on Google's link spam policies and disavow guidance. Most sites only need to act on the red side if they or a past vendor built those links deliberately.",
          green: [
            "Editorial links from relevant local or industry sites",
            "Mentions in news coverage, interviews or roundups",
            "Listings in real associations, chambers and supplier directories",
            "Sponsorship links properly marked rel=sponsored",
            "Random scraper links you didn't build (Google usually ignores them)",
          ],
          red: [
            "Links you or a vendor paid for that pass ranking credit",
            "Private blog networks and sites that exist only to sell links",
            "Large volumes of exact-match keyword anchors",
            "Sitewide footer links or link exchanges set up for ranking",
            "A manual action for unnatural links in Search Console",
          ],
        },
      },
      {
        heading: "How to get backlinks: an ethical playbook ranked by effort",
        body: `Earning links is mostly the work of being genuinely useful to other site owners and journalists. The tactics below are in order from least to most effort. Most businesses should start at the top and work down; the early ones are fast and almost always available, while the later ones produce the strongest links.

Two cautions apply throughout. First, guest content is not banned, but Google's spam policies specifically name guest posts with paid or keyword-rich links, so write for sites your customers read, link naturally, and never pay for placement. Second, every one of these depends on having pages worth linking to. A thin service page will not earn links no matter how good the outreach is, which is why our [SEO plans](/services/seo-analytics) pair link building with content and on-page work rather than selling links on their own.`,
        visual: {
          kind: "steps",
          title: "Link building tactics, from least to most effort",
          caption: "Effort ranking reflects our professional judgment. None of these involve paying for a link that passes ranking credit.",
          items: [
            { title: "1. Reclaim unlinked brand mentions", body: "Search for your business name in quotes. Where a site mentions you without a link, politely ask them to add one." },
            { title: "2. Partners, suppliers and clients", body: "Manufacturers and vendors often keep dealer, installer or customer pages. Ask to be listed." },
            { title: "3. Chambers, associations and memberships", body: "Associations and chambers of commerce usually list members with a link. Join the ones you would join anyway." },
            { title: "4. Fix broken links on relevant sites", body: "Find resource pages in your field that link to dead pages, and offer your equivalent page as a replacement." },
            { title: "5. Be a source for journalists", body: "Reporters need quotable experts. Answer requests in your field quickly and specifically, and get to know local reporters." },
            { title: "6. Guest content, with care", body: "Write useful pieces for publications your customers read, linking only where it helps the reader." },
            { title: "7. Publish original data or research", body: "Survey customers or analyze your own job data. Others have to cite you to use your numbers." },
            { title: "8. Digital PR campaigns", body: "Pitch a newsworthy story, data set or tool to relevant press. Least predictable, but it can earn the strongest links." },
          ],
        },
      },
      {
        heading: "Local link building ideas for Houston businesses",
        body: `For a local business, the most valuable links are often the least glamorous: they come from organizations in your own city and industry, which is exactly what makes them relevant. They also tend to support the prominence side of local search covered in our [Houston local SEO guide](/blog/houston-local-seo-guide).

Take a hypothetical HVAC contractor in Katy. A strong local link plan for that business might look like the list below. None of these are guaranteed links; they are places where a real relationship naturally produces one.`,
        bullets: [
          "Regional business groups and chambers: the Greater Houston Partnership, plus neighborhood and suburban chambers in the areas you serve, often maintain member directories.",
          "Community sponsorships: youth sports leagues, school fundraisers, charity runs and church festivals frequently thank sponsors on their websites. Mark paid sponsorship links rel=sponsored if you control them, and value the goodwill first.",
          "Local trade and professional associations: Houston-area chapters of national associations usually list members and publish newsletters that quote them.",
          "Suppliers and brands you install or sell: dealer locators and certified installer pages.",
          "Local media and neighborhood publications: offer seasonal expertise, such as hurricane prep or summer energy bills, to reporters and community newsletters.",
        ],
        highlight: "For local businesses, the best link building looks a lot like being an active member of your community, and then making sure the internet knows about it.",
      },
      {
        heading: "How to check your backlinks for free",
        body: `You do not need a paid backlink checker to see the links that matter most. Two free tools come straight from the search engines.

Google Search Console's Links report shows your top linked pages, the sites that link to you most and the anchor text they use. Google notes it is a sample of links rather than a complete list, and tables are capped, but for most small and mid-sized sites it is enough to spot your strongest links and any obvious problems. Check the Manual actions report in the same account while you are there.

Bing Webmaster Tools includes a free Backlinks tool that shows linking domains and anchor text, and Bing says it lets you view backlinks for other sites too. That makes it a free way to find gaps, such as associations or suppliers that link to a competitor but not to you.

Paid tools such as Ahrefs, Semrush and Moz have larger link indexes, but treat their authority and toxicity scores as estimates, not Google's view of your site. If you want a broader health check than links alone, our guide on [how to do an SEO audit](/blog/how-to-do-an-seo-audit) walks through the whole process.`,
      },
      {
        heading: "From backlinks to mentions: links in the age of AI search",
        body: `AI search tools such as Google's AI Overviews and AI Mode, ChatGPT and Perplexity build answers from many sources at once. They do not show ten blue links in order, and the exact way each one picks sources is not public. In my experience, though, the signals that make a page trustworthy to a search engine, including being linked and talked about by reputable sites, also make it a more likely source for an AI answer.

That shifts the goal slightly. A link is still the strongest form of mention, but an unlinked mention of your business in a news article, a review site or an industry roundup also helps AI systems connect your name with your expertise. The playbook above serves both: the activities that earn links also earn mentions. We cover how AI answers choose their sources, and how to show up in them, in our guide to [generative engine optimization](/blog/generative-engine-optimization-ai-search).

Links and mentions are also reputation signals for people deciding whether to trust you, which ties directly into Google's idea of [E-E-A-T](/blog/what-is-eeat-google).

If you hand link building to someone else, use our guide on [how to choose an SEO company in Houston](/blog/how-to-choose-an-seo-company-in-houston) to screen vendors. An agency quoting a fixed number of cheap links per month is almost certainly buying them.`,
        highlight: "Every tactic that earns a good backlink also earns a good mention. Build for both and you're covered whether the searcher sees ten blue links or an AI answer.",
      },
    ],
    cta: "Want to know which links are helping you, which aren't, and where your next good ones could come from? Send us your website and we'll reply within 24 hours with a free backlink and SEO summary, and an honest view of whether you need help at all.",
  },
};

export default article;
