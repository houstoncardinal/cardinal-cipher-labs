// News & Analysis (published 2026-11-11). Timely reporting on changes in search, the web,
// privacy, accessibility, and security, written for business owners. Same editorial rules as
// blog-data.ts, plus: every factual claim about a policy or product names its primary source
// (Google, W3C, DOJ, EU, browser vendors) and its date; where a rule may since have changed,
// the article says so and points to the official page. Marked `format: "news"` so the article
// page emits NewsArticle markup and the build adds it to news-sitemap.xml.
import type { BlogArticle } from "./blog-data";

const AUTHOR = "Hunain Qureshi";
const DATE = "2026-11-11";

const SRC = {
  pewAi: { label: "Pew Research Center — Google users are less likely to click on links when an AI summary appears in the results (July 2025)", url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/" },
  aiFeatures: { label: "Google Search Central — AI features and your website", url: "https://developers.google.com/search/docs/appearance/ai-features" },
  helpful: { label: "Google Search Central — Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
  aiContent: { label: "Google Search Central Blog — Google Search's guidance about AI-generated content (February 2023)", url: "https://developers.google.com/search/blog/2023/02/google-search-and-ai-content" },
  march2024: { label: "Google — New ways we're tackling spammy, low-quality content on Search (March 2024)", url: "https://blog.google/products/search/google-search-update-march-2024/" },
  spam: { label: "Google Search Central — Spam policies for Google web search", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  eeat: { label: "Google Search Central Blog — Our latest update to the quality rater guidelines: E-A-T gets an extra E for Experience (December 2022)", url: "https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t" },
  structured: { label: "Google Search Central — Introduction to structured data markup", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
  adaTitle2: { label: "ADA.gov — Fact sheet: New rule on the accessibility of web content and mobile apps provided by state and local governments", url: "https://www.ada.gov/resources/2024-03-08-web-rule/" },
  adaGuidance: { label: "ADA.gov — Guidance on web accessibility and the ADA (March 2022)", url: "https://www.ada.gov/resources/web-guidance/" },
  eaa: { label: "European Commission — European Accessibility Act", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en" },
  wcag22: { label: "W3C — Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" },
  webaim: { label: "WebAIM — The WebAIM Million: accessibility analysis of the top 1,000,000 home pages", url: "https://webaim.org/projects/million/" },
  sandbox: { label: "Privacy Sandbox — News and announcements from Google Chrome", url: "https://privacysandbox.com/news/" },
  itp: { label: "WebKit — Full Third-Party Cookie Blocking and More (March 2020)", url: "https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/" },
  firefoxTcp: { label: "Mozilla — Firefox rolls out Total Cookie Protection by default to all users worldwide (June 2022)", url: "https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/" },
  consent: { label: "Google Tag Platform — Set up consent mode", url: "https://developers.google.com/tag-platform/security/guides/consent" },
  dbir: { label: "Verizon — 2025 Data Breach Investigations Report", url: "https://www.verizon.com/business/resources/reports/dbir/" },
  ibm: { label: "IBM — Cost of a Data Breach Report 2025", url: "https://www.ibm.com/reports/data-breach" },
  patchstack: { label: "Patchstack — State of WordPress Security in 2026", url: "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" },
  owasp: { label: "OWASP — Top 10 Web Application Security Risks", url: "https://owasp.org/www-project-top-ten/" },
  cisa: { label: "CISA — Secure by Design", url: "https://www.cisa.gov/securebydesign" },
  fido: { label: "FIDO Alliance — Passkeys", url: "https://fidoalliance.org/passkeys/" },
  googlePasskeys: { label: "Google — Passkeys are now the default sign-in for Google Accounts (October 2023)", url: "https://blog.google/technology/safety-security/passkeys-default-google-accounts/" },
  msPasskeys: { label: "Microsoft Security Blog — Pushing passkeys forward: Microsoft's latest updates for simpler, safer sign-ins (May 2025)", url: "https://www.microsoft.com/en-us/security/blog/2025/05/01/pushing-passkeys-forward-microsofts-latest-updates-for-simpler-safer-sign-ins/" },
  webauthn: { label: "W3C — Web Authentication (WebAuthn) Level 3", url: "https://www.w3.org/TR/webauthn-3/" },
};

export const newsArticles: BlogArticle[] = [
  // 1 ── AI Overviews & AI Mode ──────────────────────────────────────────
  {
    slug: "google-ai-overviews-what-it-means-for-business-websites",
    format: "news",
    seoTitle: "Google AI Overviews Are Cutting Clicks. What to Do Now",
    title: "Google's AI Overviews Are Cutting Clicks to Websites. Here's What Businesses Should Do Now",
    seoDescription: "Pew found users click a result in 8% of Google visits with an AI summary versus 15% without. What AI Overviews and AI Mode mean for your traffic, and the response that works.",
    excerpt: "Independent research now shows what many site owners suspected: when Google answers a question with an AI summary, fewer people click through. The businesses that keep winning are adapting in three specific ways. Here is the evidence and the playbook.",
    category: "News & Analysis",
    pillar: "news",
    priority: 1,
    author: AUTHOR,
    date: DATE,
    readTime: "10 min read",
    featured: true,
    keywords: ["Google AI Overviews", "AI Mode", "AI Overviews traffic", "zero-click search", "SEO for AI search", "generative engine optimization", "AI search optimization", "Google AI summary clicks"],
    relatedService: "/services/seo-analytics",
    cover: { kicker: "AI Overviews are cutting clicks", motif: "rank" },
    sources: [SRC.pewAi, SRC.aiFeatures, SRC.helpful, SRC.structured],
    takeaways: [
      "In Pew Research Center's study of real browsing data, users clicked a traditional search result in 8% of visits that showed an AI summary, versus 15% when no summary appeared.",
      "Only about 1% of visits with an AI summary included a click on a link inside the summary itself.",
      "Google says there is no special optimization for AI features: the same fundamentals of helpful, crawlable, well-structured content apply.",
      "The response that works is to compete on what a summary cannot replace: proof, pricing, tools, local presence, and a brand people search for by name.",
    ],
    faqs: [
      { question: "Do Google AI Overviews reduce website traffic?", answer: "For many informational searches, yes. Pew Research Center's 2025 analysis of real browsing behavior found users clicked a traditional search result in 8% of visits that included an AI summary, compared with 15% of visits without one. The effect is smaller for searches with clear commercial or local intent, where people still need to visit a business to act." },
      { question: "How do I get my website cited in Google AI Overviews?", answer: "Google states there are no additional requirements beyond normal SEO best practices: the page must be indexed and eligible to show a snippet, and the content should be helpful, original, and clearly structured. In practice, pages that answer a question directly, back it with evidence and first-hand experience, and use accurate structured data are the ones most often linked." },
      { question: "Can I stop Google from using my content in AI Overviews?", answer: "Google's documentation explains that the standard snippet controls (nosnippet, data-nosnippet, max-snippet, and noindex) also apply to AI features. Restricting snippets limits how your content appears in AI Overviews, but it also limits how it appears in normal results, so most businesses should not block them." },
      { question: "Is SEO still worth investing in with AI search?", answer: "Yes, but the target has shifted. The searches that matter most to a business, such as comparing providers, checking prices, finding a local company, or booking, still send people to websites. SEO now needs to win those searches and earn citations in AI answers, rather than chase traffic from simple informational questions." },
    ],
    content: {
      sections: [
        {
          heading: "The research: fewer clicks when an AI summary appears",
          body: `For two years, the debate about Google's AI Overviews ran mostly on anecdote. Publishers reported falling traffic; Google said AI features sent "higher quality" clicks. In July 2025, the Pew Research Center published something more useful than either: an analysis of the actual browsing behavior of a panel of U.S. adults who agreed to share it, covering their Google searches in March 2025.

The findings were clear. In visits where Google showed an AI summary, users clicked a traditional search result 8% of the time. In visits without a summary, they clicked 15% of the time. Clicks on the links inside the AI summary itself were rare, happening in about 1% of visits. And about 18% of the Google searches in the sample produced an AI summary at all, which means the effect is already significant and still growing as Google expands AI Overviews and AI Mode, its conversational search experience rolled out to all U.S. users in May 2025.

I run [SEO for businesses](/services/seo-analytics) at Cardinal Consulting, and we see the same pattern in client analytics: impressions holding steady or rising while clicks on informational queries fall. This article explains what is happening, what Google itself says to do about it, and the three changes that are working for the businesses we advise.`,
          visual: {
            kind: "stats",
            title: "What Pew found in real Google browsing data",
            caption: "Share of Google search visits that led to a click, March 2025. Source: Pew Research Center, July 2025.",
            items: [
              { value: "15%", label: "Clicked a result when no AI summary appeared" },
              { value: "8%", label: "Clicked a result when an AI summary appeared" },
              { value: "1%", label: "Clicked a link inside the AI summary" },
            ],
          },
        },
        {
          heading: "Which searches are affected, and which are not",
          body: `The decline is not uniform, and that is the most important thing for a business owner to understand. AI summaries appear most often on questions that have a settled answer: definitions, explanations, comparisons in general terms, and "how does X work". Those searches once sent a steady trickle of visitors to blogs and guides. Increasingly, the answer is read on Google and the session ends.

Searches with commercial or local intent behave differently. Someone looking for a law firm, a contractor, a clinic, or a software vendor still needs to visit a website, call, or book. AI can shortlist providers, but it cannot sign the engagement letter. That is why we tell clients to stop measuring SEO success by total organic sessions and start measuring the searches that produce revenue.`,
          visual: {
            kind: "compare",
            title: "How AI summaries change the value of different searches",
            caption: "The author's assessment based on Pew's findings and client analytics. Your mix will differ by industry.",
            columns: ["Informational", "Commercial investigation", "Local and transactional"],
            highlight: 2,
            rows: [
              { label: "Example", values: ["\"what is a fractional CTO\"", "\"best SEO company for law firms\"", "\"web design company near me\""] },
              { label: "How often AI summaries appear", values: ["Often", "Sometimes", "Less often"] },
              { label: "Click loss risk", values: ["High", "Moderate", "Low"] },
              { label: "Still drives revenue?", values: ["Indirectly (brand, citations)", "Yes", "Yes, directly"] },
              { label: "Where to invest", values: ["Earn citations, build authority", "Proof, comparisons, pricing", "Profiles, reviews, fast pages"] },
            ],
          },
        },
        {
          heading: "What Google says you should do",
          body: `Google's own documentation on AI features is short and, for once, unambiguous. There are no special requirements to appear in AI Overviews or AI Mode. A page must be indexed and eligible to be shown with a snippet, and the same fundamentals apply as for any search feature: content that is helpful, reliable, and written for people; pages that are technically accessible to Google; and important content available in text rather than locked in images or scripts.

The same documentation confirms that the standard preview controls (nosnippet, data-nosnippet, max-snippet, and noindex) apply to AI features. You can limit how your content is used, but only by limiting how it appears in search generally. For almost every business, that trade is not worth making.

The practical reading is that AI search rewards the same things Google's [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) has emphasized for years, only more strictly. Thin, generic pages that restate what everyone else says were always weak. Now they are summarized out of existence.`,
          highlight: "AI search does not reward a new trick. It removes the reward for content that never had a reason to exist.",
        },
        {
          heading: "The three changes that are working",
          body: `Across the businesses we work with, three shifts consistently separate the sites that are holding their ground from the ones losing it.`,
          visual: {
            kind: "steps",
            title: "Adapting a website for AI-era search",
            caption: "In order of impact for most service businesses.",
            items: [
              { title: "Compete on what a summary cannot replace", body: "Published pricing, case studies with real outcomes, calculators and tools, original data, and first-hand expertise. A summary can explain what a website costs in general; it cannot show your fixed price, your portfolio, or your availability next week." },
              { title: "Become the source AI cites", body: "Answer the question directly near the top of the page, support it with evidence and named sources, mark it up with accurate structured data, and keep it current. Clear, specific, well-organized pages are the ones linked from AI answers." },
              { title: "Build demand for your name", body: "Branded searches (people looking for your company by name) are the searches AI cannot intercept. Reviews, a strong Google Business Profile, press, partnerships, and content people share all turn generic searches into branded ones over time." },
            ],
          },
        },
        {
          heading: "How to measure what is really happening to your traffic",
          body: `If you look only at total organic sessions, AI search will look like a crisis even when revenue is fine. These are the measurements we set up for clients so the picture is accurate.`,
          bullets: [
            "Split Search Console data into branded and non-branded queries. Branded growth is the clearest sign your reputation is compounding.",
            "Track impressions and clicks separately. Rising impressions with falling clicks on informational pages is the AI summary pattern; it is not a ranking problem.",
            "Report leads, calls, and bookings from organic search, not sessions. The question is whether search produces customers.",
            "Watch referral traffic from AI assistants. Visits from ChatGPT, Perplexity, Copilot, and Gemini now appear in analytics and are often highly qualified.",
            "Audit which pages lost the most clicks and ask whether each still has a reason to exist. Some should be consolidated; some should become genuinely better.",
          ],
        },
        {
          heading: "What this means for your next twelve months",
          body: `The businesses that will do well in AI-era search are the ones that were always doing the hard parts well: real expertise, published proof, fast and well-structured websites, and a reputation people search for by name. For a deeper look at the tactics, our guides to [what an SEO agency does every month](/blog/what-an-seo-agency-does-every-month) and [Houston local SEO](/blog/houston-local-seo-guide) cover the work in detail, and our article on [AI-generated content and Google](/blog/ai-generated-content-google-rankings-what-the-rules-say) explains where AI writing tools help and where they hurt.

If your traffic has changed and you are not sure whether it matters, that is exactly the question a good SEO audit should answer, with your own data rather than industry headlines.`,
        },
      ],
      cta: "Seeing impressions rise and clicks fall? Send us your site and we'll reply within 24 hours with a plain-language read on what's happening and what to change.",
    },
  },

  // 2 ── AI-generated content and Google ─────────────────────────────────
  {
    slug: "ai-generated-content-google-rankings-what-the-rules-say",
    format: "news",
    seoTitle: "AI Content and Google Rankings: What the Rules Say",
    title: "AI-Generated Content and Google Rankings: What the Rules Actually Say, and Where Businesses Get Penalized",
    seoDescription: "Google allows AI-assisted content but penalizes scaled, low-value pages. What its spam policies, the 2024 updates, and E-E-A-T mean for businesses using AI to write.",
    excerpt: "Google does not penalize content for being written with AI. It penalizes content for being made at scale to rank rather than to help, however it was produced. The line is clear once you read the policies, and many businesses are on the wrong side of it.",
    category: "News & Analysis",
    pillar: "news",
    priority: 2,
    author: AUTHOR,
    date: DATE,
    readTime: "9 min read",
    featured: false,
    keywords: ["AI generated content SEO", "does Google penalize AI content", "AI content Google rankings", "scaled content abuse", "Google spam policies", "E-E-A-T", "AI writing SEO", "helpful content"],
    relatedService: "/services/seo-analytics",
    cover: { kicker: "AI content and Google: what the rules say", motif: "scorecard" },
    sources: [SRC.aiContent, SRC.march2024, SRC.spam, SRC.helpful, SRC.eeat],
    takeaways: [
      "Google's official position since February 2023: it rewards helpful content however it is produced, and using automation primarily to manipulate rankings violates its spam policies.",
      "In March 2024 Google added a \"scaled content abuse\" policy covering mass-produced, low-value pages made by AI, people, or both.",
      "Experience is now the first E in E-E-A-T. Generic AI text has none, which is why it struggles to rank for anything that matters.",
      "Use AI to research, outline, and edit. Keep the expertise, examples, data, and judgment human, and put a real, accountable author on the page.",
    ],
    faqs: [
      { question: "Does Google penalize AI-generated content?", answer: "Not for being AI-generated. Google's February 2023 guidance states that appropriate use of AI or automation is not against its guidelines, and that it rewards high-quality content however it is produced. What violates its spam policies is generating content primarily to manipulate search rankings, including mass-producing pages that add little value." },
      { question: "What is scaled content abuse?", answer: "It is a Google spam policy, introduced in March 2024, covering the practice of generating many pages primarily to rank in search rather than to help people. It applies regardless of whether the pages are produced by AI, by people, or by a combination. Typical examples are thousands of near-identical location or keyword pages, or articles stitched together from other sites without adding value." },
      { question: "Should I label content as AI-generated?", answer: "Google suggests that where readers would reasonably wonder how content was made, explaining it can help, for example with a note about automation. More important is accountability: a named author with real expertise, clear sources, and an editorial process. That is what builds trust with readers and with search." },
      { question: "Can I use ChatGPT or Claude to write blog posts for SEO?", answer: "As a tool, yes; as a substitute for expertise, no. AI is useful for research, outlines, first drafts, and editing. The content that ranks and converts still needs what only you have: first-hand experience, original examples and data, specific advice, and a point of view." },
    ],
    content: {
      sections: [
        {
          heading: "The rule, in Google's own words",
          body: `Few SEO questions generate more confusion than this one, and the confusion is unnecessary, because Google has answered it in writing. In February 2023, Google Search Central published its guidance on AI-generated content. The position is straightforward: Google's systems reward original, high-quality content that demonstrates expertise, experience, authoritativeness, and trustworthiness, however it was produced. Appropriate use of AI or automation is not against its guidelines. Using automation, including AI, to generate content with the primary purpose of manipulating search rankings is a violation of its spam policies.

Read carefully, that is not a statement about tools at all. It is a statement about intent and value. A page written entirely by a person, purely to capture a keyword with nothing to say, is on the wrong side of the line. A page drafted with AI and then shaped by an expert with real examples and judgment is on the right side.`,
          highlight: "Google does not ask how a page was made. It asks who it was made for.",
        },
        {
          heading: "What changed in 2024: scaled content abuse",
          body: `In March 2024, Google announced what it described as new ways of tackling spammy, low-quality content. Alongside a core update aimed at surfacing more helpful results, it expanded its spam policies, and said it anticipated the combined changes would reduce low-quality, unoriginal content in search results by 40%.

The most important new policy for businesses is "scaled content abuse": generating many pages for the primary purpose of manipulating rankings rather than helping users. Crucially, the policy applies whether the pages are made by AI, by people, or by both. That closed the loophole of arguing that a human had technically pressed publish. Two related policies arrived at the same time: "site reputation abuse", where third-party pages are published on a trusted site to borrow its ranking power, and "expired domain abuse", where an old domain is bought to host low-value content.`,
          visual: {
            kind: "timeline",
            title: "How Google's position developed",
            caption: "Sources: Google Search Central Blog (December 2022, February 2023), Google (March 2024), Google spam policies.",
            items: [
              { when: "Dec 2022", title: "E-A-T becomes E-E-A-T", body: "Google's quality rater guidelines add Experience: first-hand knowledge of the topic, such as having used the product or done the work." },
              { when: "Feb 2023", title: "Guidance on AI-generated content", body: "Google states it rewards helpful content however it is produced, and that automation used primarily to manipulate rankings violates its spam policies." },
              { when: "Mar 2024", title: "Scaled content abuse policy", body: "Mass-produced pages made primarily to rank are spam, whether made by AI, people, or both. Site reputation abuse and expired domain abuse policies are added." },
              { when: "Since", title: "Enforcement through core and spam updates", body: "Sites built on scaled, low-value pages are demoted or removed. Recovery requires removing or substantially improving the content, not rewording it." },
            ],
          },
        },
        {
          heading: "Why generic AI text struggles to rank anyway",
          body: `Even content that does not cross into spam usually underperforms when it is generic, and the reason is the extra E. Since December 2022, Google's quality rater guidelines have put Experience first: evidence that the writer has actually used the product, visited the place, done the work, or lived the situation.

A language model has read about everything and experienced nothing. Ask it how to choose an accountant and it will produce a competent, average answer assembled from what has already been written. Ask an accountant who has cleaned up a hundred badly kept ledgers and you get the details no one else wrote down. Search systems, and readers, can increasingly tell the difference. That is also why generic pages are the ones most easily replaced by [AI Overviews](/blog/google-ai-overviews-what-it-means-for-business-websites): there is nothing in them a summary cannot reproduce.`,
          visual: {
            kind: "compare",
            title: "The same topic, two ways",
            caption: "Illustrative comparison for a hypothetical article on choosing a commercial roofer.",
            columns: ["Generic AI article", "Expert-led article (AI-assisted)"],
            highlight: 1,
            rows: [
              { label: "Opening", values: ["\"Choosing the right roofer is an important decision…\"", "\"We replaced 40 commercial roofs after the last storm season. Here's what failed.\""] },
              { label: "Evidence", values: ["General claims", "Photos, costs, warranty terms, named standards"] },
              { label: "Author", values: ["Company name or none", "Named expert with a bio and credentials"] },
              { label: "Specificity", values: ["Applies to anywhere", "Local climate, codes, and suppliers"] },
              { label: "Shows Experience", values: [false, true] },
              { label: "Replaceable by an AI summary", values: ["Yes", "No"] },
            ],
          },
        },
        {
          heading: "Where businesses get penalized",
          body: `The patterns that get sites into trouble are remarkably consistent. If any of these describe your content program, it is worth reviewing before the next core update does it for you.`,
          visual: {
            kind: "flags",
            title: "AI content: safe use versus risky use",
            green: [
              "AI for research, outlines, and first drafts",
              "An expert rewrites with first-hand examples and data",
              "Named authors with real bios and accountability",
              "Facts checked against named, linked sources",
              "Fewer, better pages that answer real questions",
              "Content updated when the facts change",
            ],
            red: [
              "Hundreds of near-identical city or keyword pages",
              "Articles published straight from a prompt",
              "Fake or anonymous author personas",
              "Statistics with no source, or invented ones",
              "Rewording competitors' articles at scale",
              "Hosting unrelated third-party content to borrow your domain's trust",
            ],
          },
        },
        {
          heading: "A workflow that uses AI well",
          body: `At Cardinal we use AI tools every day, including in content work, and the rule we follow is simple: AI handles the parts that do not require experience, and people handle the parts that do. In practice that means AI helps gather sources, propose structure, draft routine sections, and tighten editing. The thesis, the examples, the numbers, the advice, and the final judgment come from someone who has done the work, and that person's name goes on the page.

This article is an example. It was researched with the help of AI tools, but the policy reading, the client patterns, and the recommendations are mine, every claim links to its primary source, and I am accountable for it. That combination is what Google's guidance describes, and it is the only approach I have seen work for long.

If you are planning a content program, our article on [what an SEO agency does every month](/blog/what-an-seo-agency-does-every-month) explains where content fits among the rest of the work, and our [AI and automation guide](/blog/ai-and-automation-for-business-where-it-pays-off) covers where AI pays off elsewhere in a business.`,
        },
      ],
      cta: "Not sure whether your content is helping or hurting? Send us your site and we'll reply within 24 hours with an honest read on what to keep, fix, or retire.",
    },
  },

  // 3 ── Accessibility rules ─────────────────────────────────────────────
  {
    slug: "website-accessibility-laws-2027-ada-eaa-wcag",
    format: "news",
    seoTitle: "Website Accessibility Rules in 2027: ADA, EAA & WCAG",
    title: "Website Accessibility Rules Are Tightening. What the ADA, the European Accessibility Act, and WCAG 2.2 Mean for Your Business",
    seoDescription: "New federal deadlines, the European Accessibility Act, and WCAG 2.2: what the rules require, who they cover, and a practical plan to make your website accessible.",
    excerpt: "A new federal rule set deadlines for public-sector websites, the European Accessibility Act now applies to companies selling into the EU, and nearly every home page still fails basic checks. Here is what applies to whom, and a practical plan.",
    category: "News & Analysis",
    pillar: "news",
    priority: 3,
    author: AUTHOR,
    date: DATE,
    readTime: "10 min read",
    featured: false,
    keywords: ["website accessibility law", "ADA website compliance", "ADA Title II web rule", "European Accessibility Act", "WCAG 2.2", "WCAG 2.1 AA", "web accessibility requirements 2027", "accessible website"],
    relatedService: "/services/ux-ui",
    cover: { kicker: "Accessibility rules are tightening", motif: "shield" },
    sources: [SRC.adaTitle2, SRC.adaGuidance, SRC.eaa, SRC.wcag22, SRC.webaim],
    takeaways: [
      "The Justice Department's 2024 ADA Title II rule adopts WCAG 2.1 AA as the standard for state and local government websites and apps, with deadlines in April 2026 and April 2027 depending on size.",
      "For private businesses, the ADA has no single technical standard, but the Justice Department has said websites must be accessible and points to WCAG as helpful guidance.",
      "The European Accessibility Act has applied since June 28, 2025 to many products and services sold to EU consumers, including e-commerce, wherever the seller is based.",
      "WebAIM found detectable WCAG failures on 94.8% of the top one million home pages in 2025. Accessibility is both a legal risk and a lost-customer problem.",
    ],
    faqs: [
      { question: "Is website accessibility legally required for private businesses in the U.S.?", answer: "The ADA applies to businesses open to the public, and the Justice Department's 2022 guidance states that their websites must be accessible to people with disabilities. There is no single mandated technical standard for private businesses, but WCAG is the benchmark courts, regulators, and plaintiffs use. This is general information, not legal advice; talk to your counsel about your obligations." },
      { question: "What is the ADA Title II web rule?", answer: "A Justice Department rule published in April 2024 requiring state and local governments to make their web content and mobile apps conform to WCAG 2.1 Level AA. As published, entities serving populations of 50,000 or more had until April 24, 2026, and smaller entities and special districts until April 26, 2027. Check ADA.gov for the current status, as rules and deadlines can change." },
      { question: "Does the European Accessibility Act apply to U.S. companies?", answer: "It can. The Act applies to covered products and services placed on the EU market, including e-commerce services to consumers, regardless of where the business is based. Microenterprises providing services (fewer than 10 employees and annual turnover or balance sheet of €2 million or less) are exempt from the service requirements." },
      { question: "What is the difference between WCAG 2.1 and WCAG 2.2?", answer: "WCAG 2.2, published by the W3C in October 2023, adds nine success criteria to WCAG 2.1, focused on keyboard focus visibility, target sizes for touch, dragging alternatives, consistent help, and accessible authentication. A site that meets WCAG 2.2 AA also meets WCAG 2.1 AA." },
      { question: "Will an accessibility overlay make my website compliant?", answer: "Overlays and widgets cannot fix underlying problems in a site's code, such as missing labels, broken keyboard navigation, or poor structure, and many disability advocates and practitioners advise against relying on them. Accessibility has to be built into the design and code." },
    ],
    content: {
      sections: [
        {
          heading: "Three developments business owners should know about",
          body: `Web accessibility has been a legal and ethical expectation for years, but three recent developments have moved it from a best practice to a planning item for many organizations.

First, the U.S. Department of Justice published a rule in April 2024 under Title II of the Americans with Disabilities Act that, for the first time, sets a specific technical standard (WCAG 2.1 Level AA) for the websites and mobile apps of state and local governments. Second, the European Accessibility Act began applying on June 28, 2025, covering a wide range of products and services sold to EU consumers, including e-commerce. Third, the W3C's WCAG 2.2, published in October 2023, has become the current reference version of the standard that both regulators and plaintiffs point to.

None of this is new to people who build websites carefully. What is new is that deadlines exist, and that the businesses affected are no longer only the largest ones. This article summarizes what applies to whom. It is general information, not legal advice; your counsel should confirm your specific obligations.`,
        },
        {
          heading: "What applies to whom",
          body: `The rules differ by sector and market. This is the short version.`,
          visual: {
            kind: "compare",
            title: "Accessibility rules at a glance",
            caption: "Summary for orientation only. Sources: ADA.gov (2022 guidance and 2024 Title II rule), European Commission, W3C. Confirm current requirements with counsel.",
            columns: ["State and local government", "U.S. private businesses", "Selling to EU consumers"],
            rows: [
              { label: "Law", values: ["ADA Title II (2024 rule)", "ADA Title III", "European Accessibility Act"] },
              { label: "Technical standard named", values: ["WCAG 2.1 AA", "None specified; WCAG is the benchmark", "EN 301 549 (aligned with WCAG)"] },
              { label: "Key dates", values: ["April 2026 (50,000+ population); April 2027 (smaller)", "Applies now", "Applies since June 28, 2025"] },
              { label: "Covers mobile apps", values: ["Yes", "Generally treated like websites", "Yes"] },
              { label: "Small-business exemption", values: ["Same standard; later deadline for smaller entities", "No", "Microenterprises providing services"] },
            ],
          },
        },
        {
          heading: "The problem is widespread, and fixable",
          body: `If accessibility sounds like an edge case, the data says otherwise. WebAIM runs an annual automated scan of the home pages of the top one million websites. Its 2025 analysis found detectable WCAG failures on 94.8% of them. Automated tools catch only some kinds of problem, so the real figure for full conformance is lower still.

The good news is that the failures are highly repetitive. A small number of issue types account for most of them, and they are the kind any competent design and development process can avoid.`,
          visual: {
            kind: "stats",
            title: "The state of home-page accessibility",
            caption: "Source: WebAIM Million (2025), an automated analysis of the top 1,000,000 home pages.",
            items: [
              { value: "94.8%", label: "Of home pages had detectable WCAG failures" },
              { value: "1M", label: "Home pages analyzed" },
              { value: "WCAG 2.2", label: "Current W3C version of the standard" },
            ],
          },
          bullets: [
            "Low-contrast text that people with low vision (or anyone outdoors on a phone) cannot read",
            "Images with no text alternative, so screen-reader users miss the content",
            "Form fields with no label, so people do not know what to type",
            "Links and buttons with no discernible text, such as icon-only controls",
            "Missing page language and poor heading structure that make navigation hard",
          ],
        },
        {
          heading: "What WCAG 2.2 added",
          body: `WCAG 2.2 adds nine success criteria to WCAG 2.1. Several are directly relevant to how modern sites are built: focus indicators that are not hidden behind sticky headers, touch targets large enough to tap reliably (at least 24 by 24 CSS pixels, with exceptions), alternatives to dragging, help that appears in a consistent place, not asking people to re-enter information they already provided, and sign-in that does not depend on memorizing or transcribing a code. Meeting 2.2 also means meeting 2.1, so building to 2.2 is the sensible target for any new project.`,
          highlight: "Accessible authentication is one of the new criteria, and it is one reason passkeys are spreading: signing in with a fingerprint or face is easier for everyone. We cover that shift in our article on passkeys.",
        },
        {
          heading: "A practical plan",
          body: `Accessibility done well is a process, not a plugin. This is the sequence we follow with clients, and it works whether you have an existing site or are planning a new one.`,
          visual: {
            kind: "steps",
            title: "Getting to WCAG 2.2 AA",
            caption: "Most organizations can complete the first three steps within a few weeks.",
            items: [
              { title: "Audit", body: "Automated scanning plus manual testing with a keyboard and a screen reader on your most important pages and flows: home, services, contact, checkout, sign-in." },
              { title: "Fix the systemic issues first", body: "Colors, components, and templates. Fixing a button component once fixes it on every page." },
              { title: "Fix the critical paths", body: "Forms, booking, checkout, and account flows, where an accessibility failure is also a lost customer." },
              { title: "Publish an accessibility statement", body: "Describe your standard, known limitations, and how people can contact you for help. It shows good faith and gives users a route." },
              { title: "Build it into the process", body: "Accessibility checks in design reviews and before every release, so the site does not drift back." },
            ],
          },
        },
        {
          heading: "Where to start",
          body: `If your site is due for a rebuild, accessibility should be in the specification from the first day; it costs far less to build in than to retrofit. Every [website we build](/services/web-development) targets WCAG 2.2 AA, and our [UX/UI audit](/services/ux-ui) includes an accessibility review with a prioritized fix list. For healthcare organizations, our [HIPAA-ready website checklist](/blog/hipaa-ready-website-checklist) covers where accessibility, privacy, and patient trust overlap.

And if anyone offers to make your site compliant overnight with a single line of code, be skeptical. Overlays cannot repair a site's underlying structure, and many accessibility practitioners and disability advocates advise against relying on them.`,
        },
      ],
      cta: "Want to know where your website stands on accessibility? Send us the address and we'll reply within 24 hours with the most important issues we find and a fixed price to resolve them.",
    },
  },

  // 4 ── Cookies and measurement ─────────────────────────────────────────
  {
    slug: "third-party-cookies-chrome-first-party-data-plan",
    format: "news",
    seoTitle: "Chrome Kept Third-Party Cookies. You Still Need a Plan",
    title: "Chrome Kept Third-Party Cookies. Your Marketing Measurement Still Needs a First-Party Plan",
    seoDescription: "Google reversed course on removing third-party cookies from Chrome, but Safari and Firefox block them and consent rules keep tightening. Why first-party data still matters.",
    excerpt: "After years of delays, Google said in 2025 it would not force the removal of third-party cookies from Chrome. Many marketers relaxed. They should not: the browsers most of your mobile customers use already block them, and measurement built on them is already breaking.",
    category: "News & Analysis",
    pillar: "news",
    priority: 4,
    author: AUTHOR,
    date: DATE,
    readTime: "9 min read",
    featured: false,
    keywords: ["third-party cookies Chrome", "Chrome cookie deprecation", "Privacy Sandbox", "first-party data", "Safari ITP", "consent mode v2", "server-side tracking", "marketing attribution"],
    relatedService: "/services/digital-marketing",
    cover: { kicker: "Cookies stayed. Measurement still broke.", motif: "chart" },
    sources: [SRC.sandbox, SRC.itp, SRC.firefoxTcp, SRC.consent],
    takeaways: [
      "In April 2025 Google said Chrome would keep its current approach to third-party cookies rather than introduce a new choice prompt, ending years of planned deprecation.",
      "Safari has blocked third-party cookies by default since March 2020, and Firefox has isolated them by default since June 2022.",
      "Consent requirements, ad blockers, and short cookie lifetimes mean marketing data is already incomplete, whatever Chrome does.",
      "The durable answer is first-party: data customers give you directly, measured on your own domain, with consent built in.",
    ],
    faqs: [
      { question: "Is Google still removing third-party cookies from Chrome?", answer: "No. In April 2025, Google announced that Chrome would maintain its current approach to user choice for third-party cookies and would not roll out a new standalone prompt for them. Users can still block third-party cookies in Chrome's settings. Follow the Privacy Sandbox news page for the latest position." },
      { question: "Do Safari and Firefox block third-party cookies?", answer: "Yes. Safari's Intelligent Tracking Prevention has blocked third-party cookies by default since March 2020, and Firefox enabled Total Cookie Protection, which isolates cookies to the site that set them, by default for all users in June 2022." },
      { question: "What is first-party data?", answer: "Information a customer shares directly with your business: form submissions, purchases, account details, email subscriptions, preferences, and behavior on your own website and app. Because it is collected on your own domain with the customer's knowledge, it is more reliable and more durable than data gathered by third parties." },
      { question: "What is Google Consent Mode?", answer: "A Google feature that adjusts how Google tags behave based on a visitor's consent choices, and allows modeled conversions where data cannot be collected. For advertisers using personalized ads with users in the European Economic Area, Google requires consent signals to be passed." },
    ],
    content: {
      sections: [
        {
          heading: "The reversal",
          body: `For nearly five years, the end of third-party cookies in Google Chrome was the defining deadline in digital marketing. Google first announced the plan in 2020, delayed it repeatedly, and in 2024 shifted to a proposal that would let users make an informed choice instead of removing cookies outright. Then, in April 2025, Google said it would maintain Chrome's current approach to user choice for third-party cookies and would not roll out a new standalone prompt.

In practical terms, third-party cookies are staying in Chrome. Many marketing teams took that as permission to stop worrying. I think that is a mistake, and the reason is simple: Chrome was never the whole internet, and the measurement problems the deprecation was supposed to cause are already happening.`,
          visual: {
            kind: "timeline",
            title: "How the cookie story unfolded",
            caption: "Sources: WebKit (2020), Mozilla (2022), Google Privacy Sandbox announcements (2020–2025).",
            items: [
              { when: "Mar 2020", title: "Safari blocks all third-party cookies by default", body: "WebKit completes full third-party cookie blocking in Safari's Intelligent Tracking Prevention." },
              { when: "2020–2024", title: "Chrome plans, then delays, deprecation", body: "Google announces it will phase out third-party cookies, then postpones the timeline several times while building Privacy Sandbox alternatives." },
              { when: "Jun 2022", title: "Firefox isolates cookies by default", body: "Total Cookie Protection confines each cookie to the site that set it, for all Firefox users worldwide." },
              { when: "Apr 2025", title: "Chrome keeps third-party cookies", body: "Google says Chrome will maintain its current approach to user choice and will not introduce a new standalone cookie prompt." },
            ],
          },
        },
        {
          heading: "Why your data is already incomplete",
          body: `Look at your own analytics and you will usually find that a meaningful share of your visitors arrive on Safari, particularly on mobile. For them, third-party cookies have been blocked by default since 2020. Add Firefox users, people with ad and tracker blockers, visitors who decline consent where you ask for it, and cookie lifetimes that browsers increasingly shorten, and the share of customers you can follow across sites and over time is far below 100%.

The effect shows up in familiar ways: platforms that each claim credit for the same sale, retargeting audiences that shrink, conversion counts in ad dashboards that do not match the CRM, and reports that are confidently precise and quietly wrong.`,
          visual: {
            kind: "compare",
            title: "Third-party cookies by browser",
            caption: "Default behavior. Users can change settings in every browser. Sources: WebKit, Mozilla, Google.",
            columns: ["Chrome", "Safari", "Firefox"],
            rows: [
              { label: "Third-party cookies by default", values: ["Allowed", "Blocked (since 2020)", "Isolated per site (since 2022)"] },
              { label: "Users can block them", values: [true, true, true] },
              { label: "Cross-site tracking reliable", values: ["Mostly", false, false] },
            ],
          },
        },
        {
          heading: "What a first-party measurement plan looks like",
          body: `The goal is not to replace third-party cookies with a cleverer workaround. It is to measure what matters using data you are entitled to collect, on your own domain, with consent. In our [digital marketing](/services/digital-marketing) work, that plan has five parts.`,
          visual: {
            kind: "steps",
            title: "Building durable measurement",
            caption: "In order. The first two deliver most of the value for most businesses.",
            items: [
              { title: "Track outcomes, not just visits", body: "Every call, form, booking, and purchase recorded with its source, and connected to your CRM so you can see which leads became customers." },
              { title: "Give people a reason to share", body: "Quotes, consultations, accounts, guides, and newsletters. First-party data is earned with value, not extracted with scripts." },
              { title: "Get consent right", body: "A clear consent banner where required, with Google Consent Mode passing those choices to your tags, so you stay compliant and keep modeled conversions." },
              { title: "Move key tagging to your own domain", body: "Server-side tagging and first-party cookies set by your own server are more reliable and give you control over what is shared with vendors." },
              { title: "Send conversions back to ad platforms", body: "Offline and enhanced conversion uploads from your CRM tell Google and Meta which clicks produced real customers, which improves bidding." },
            ],
          },
        },
        {
          heading: "The question to ask your marketing team",
          body: `If you take one thing from this article, ask whoever runs your marketing a simple question: of the customers we won last quarter, how many can we trace back to the campaign that found them, using our own records rather than the ad platforms' claims? If the answer is vague, the cookie debate was never your real problem. Attribution was.

Our [digital marketing guide](/blog/digital-marketing-services-explained) walks through attribution with a worked example, and if you are deciding which channels deserve more budget, measurement is the first thing to fix. Consent rules are also a legal question in some markets; your counsel should confirm what applies to you.`,
          highlight: "Third-party cookies were always someone else's data about your customers. The businesses that will measure well are the ones that build their own.",
        },
      ],
      cta: "Not sure which of your marketing dollars are working? Tell us what you're running and we'll reply within 24 hours with what we'd measure first.",
    },
  },

  // 5 ── Website supply-chain security ───────────────────────────────────
  {
    slug: "website-security-third-party-risk-2026",
    format: "news",
    seoTitle: "Your Website Is a Supply Chain. Attackers Know It",
    title: "Your Website Is a Supply Chain, and Attackers Know It: Third-Party Risk in 2026",
    seoDescription: "Verizon's 2025 DBIR found third-party involvement in breaches doubled to 30%. What that means for websites built on plugins, scripts, and vendors, and how to reduce the risk.",
    excerpt: "Most business websites are assembled from dozens of pieces other people wrote: plugins, themes, analytics scripts, chat widgets, payment forms. The latest breach research shows attackers are going after exactly those links. Here is what the data says and what to do about it.",
    category: "News & Analysis",
    pillar: "news",
    priority: 5,
    author: AUTHOR,
    date: DATE,
    readTime: "9 min read",
    featured: false,
    keywords: ["website security", "third-party risk", "supply chain attack website", "WordPress plugin vulnerabilities", "Verizon DBIR 2025", "cost of a data breach", "website security checklist", "small business cybersecurity"],
    relatedService: "/services/website-maintenance",
    cover: { kicker: "Your website is a supply chain", motif: "shield" },
    sources: [SRC.dbir, SRC.ibm, SRC.patchstack, SRC.owasp, SRC.cisa],
    takeaways: [
      "Verizon's 2025 Data Breach Investigations Report found third-party involvement in breaches doubled to 30%, and exploitation of vulnerabilities was the initial way in for about 20% of breaches.",
      "Patchstack counted 11,334 new vulnerabilities in the WordPress ecosystem in 2025, most of them in plugins.",
      "IBM puts the average cost of a data breach at $10.22 million for U.S. organizations, a record high.",
      "Inventory every component, remove what you do not need, patch what remains quickly, and limit what each third party can see.",
    ],
    faqs: [
      { question: "What is a website supply chain attack?", answer: "An attack that compromises a website through one of the third-party components it depends on, such as a plugin, theme, code library, analytics or chat script, or a vendor's system, rather than attacking the site's own code directly. Because one component may be used on thousands of sites, a single weakness can be exploited at scale." },
      { question: "How do I know if my website plugins are vulnerable?", answer: "Keep an inventory of every plugin, theme, and script, and monitor it against vulnerability databases. Managed maintenance services and security scanners do this automatically and alert you when an update fixes a known issue. Unmaintained plugins with no recent updates are a warning sign in themselves." },
      { question: "How much does a website data breach cost?", answer: "IBM's Cost of a Data Breach Report 2025 put the global average at $4.44 million and the U.S. average at $10.22 million. Costs for small businesses are lower in absolute terms but can be harder to absorb, and include cleanup, downtime, lost customers, legal costs, and notification obligations." },
      { question: "Is WordPress secure?", answer: "WordPress core is actively maintained and generally secure when kept up to date. Most risk comes from plugins and themes, which vary widely in quality and maintenance. A WordPress site with few, well-maintained plugins, prompt updates, and monitoring can be run safely; one with dozens of abandoned plugins cannot." },
    ],
    content: {
      sections: [
        {
          heading: "The finding that should change how you think about your website",
          body: `Each year, Verizon's Data Breach Investigations Report analyzes thousands of confirmed breaches. Its 2025 edition highlighted a sharp shift: the share of breaches involving a third party doubled to 30%. Exploitation of vulnerabilities was the initial way in for about 20% of breaches, up from the year before. Put simply, attackers are increasingly getting in through the things organizations depend on but do not control.

A business website is a near-perfect example of that kind of dependency. Even a modest site typically runs on a content management system, a theme, a dozen or more plugins, an analytics tag, a chat or booking widget, a form provider, a payment script, and the hosting platform underneath. Each was written by someone else. Each is a door.`,
          visual: {
            kind: "stats",
            title: "The breach landscape",
            caption: "Sources: Verizon 2025 DBIR; Patchstack, State of WordPress Security in 2026; IBM Cost of a Data Breach Report 2025.",
            items: [
              { value: "30%", label: "Of breaches involved a third party (doubled year over year)" },
              { value: "11,334", label: "New WordPress ecosystem vulnerabilities in 2025" },
              { value: "$10.22M", label: "Average cost of a U.S. data breach" },
            ],
          },
        },
        {
          heading: "Where the risk actually sits",
          body: `When we run security reviews for clients, the problems are rarely in code the business commissioned. They are in what was added over time and never revisited. Patchstack's research on the WordPress ecosystem makes the same point at scale: of the 11,334 new vulnerabilities it recorded in 2025, the overwhelming majority were in plugins rather than WordPress core.`,
          visual: {
            kind: "triad",
            title: "The three layers of a website's supply chain",
            caption: "Each layer needs an owner, an inventory, and an update routine.",
            center: "Your website",
            items: [
              { title: "Platform", body: "Hosting, the content management system, server software, and the frameworks and libraries the site is built on." },
              { title: "Extensions", body: "Plugins, themes, and add-ons. The largest source of new vulnerabilities, especially when abandoned by their authors." },
              { title: "Embedded services", body: "Analytics, tag managers, chat, booking, forms, payments, and ad pixels. Scripts that run with full access to your pages and your visitors." },
            ],
          },
        },
        {
          heading: "What to do about it",
          body: `The good news is that most website supply-chain risk is reduced by disciplined routine rather than expensive tools. These are the controls we put in place on every site we build or maintain, and they map closely to the principles in CISA's Secure by Design guidance and the OWASP Top 10.`,
          visual: {
            kind: "steps",
            title: "Reducing third-party risk on a website",
            caption: "In priority order for most small and mid-sized businesses.",
            items: [
              { title: "Inventory everything", body: "A written list of every plugin, theme, library, script, and vendor with access to the site, who owns it, and why it is there." },
              { title: "Remove what you do not need", body: "Every component you delete is a vulnerability you will never have to patch. Most sites can lose a third of their plugins without anyone noticing." },
              { title: "Patch fast, with a safety net", body: "Security updates applied within days, tested on a staging copy first, with daily backups so a bad update is a quick rollback." },
              { title: "Limit what third parties can see and do", body: "Least-privilege access for vendors and admins, multi-factor or passkey sign-in, and a Content Security Policy that restricts which scripts can run." },
              { title: "Monitor continuously", body: "Uptime, malware scanning, file-change detection, and alerts on new vulnerabilities in your specific components." },
            ],
          },
        },
        {
          heading: "Questions to ask your web team or vendor",
          body: `If someone else manages your website, these questions will tell you quickly whether the supply chain is being managed or merely hoped about.`,
          bullets: [
            "Can you send me the current list of every plugin, script, and vendor on the site?",
            "How quickly are security updates applied, and are they tested first?",
            "When was a backup last restored successfully?",
            "Who has administrator access, and is multi-factor authentication required for all of them?",
            "Do we have a Content Security Policy, and which outside domains does it allow?",
            "How would we find out if the site were compromised, and what happens next?",
          ],
          highlight: "The most dangerous component on most websites is the one nobody remembers installing.",
        },
        {
          heading: "Where to go from here",
          body: `Security is the single strongest argument for treating a website as something that needs ongoing care rather than a one-time project. Our [website care plans](/blog/website-care-plans-explained) build every routine above into a monthly service, and our [maintenance checklist](/blog/website-maintenance-checklist) lists them for teams that want to do it themselves. For organizations that need a deeper review of their systems, cloud, and vendors, a [technical assessment](/services/technical-consulting) ranks the risks by severity and produces a plan.

And when it is time for a new site, the cheapest security decision is made at the start: fewer moving parts, well-maintained components, and a design that does not depend on dozens of third parties to function. That is how we approach [web development](/services/web-development) at Cardinal.`,
        },
      ],
      cta: "Don't know what's running on your website? Send us the address and we'll reply within 24 hours with a free outside-in security check and what we'd fix first.",
    },
  },

  // 6 ── Passkeys ────────────────────────────────────────────────────────
  {
    slug: "passkeys-replacing-passwords-customer-portals",
    format: "news",
    seoTitle: "Passkeys Are Replacing Passwords. What to Do Now",
    title: "Passkeys Are Replacing Passwords. What That Means for Your Customer Portal or App",
    seoDescription: "Google and Microsoft now default to passkeys. What passkeys are, why they stop phishing, how they improve sign-in for customers, and how to add them to your portal or app.",
    excerpt: "The world's largest account providers have made passkeys the default way to sign in. For any business with a customer portal, member area, or app, that changes what customers expect, and it is one of the most effective security upgrades available.",
    category: "News & Analysis",
    pillar: "news",
    priority: 6,
    author: AUTHOR,
    date: DATE,
    readTime: "8 min read",
    featured: false,
    keywords: ["passkeys", "passwordless login", "passkey authentication", "WebAuthn", "FIDO2", "customer portal security", "passkeys for business", "phishing resistant authentication"],
    relatedService: "/services/web-development",
    cover: { kicker: "Passkeys are replacing passwords", motif: "spark" },
    sources: [SRC.fido, SRC.googlePasskeys, SRC.msPasskeys, SRC.webauthn, SRC.dbir, SRC.wcag22],
    takeaways: [
      "Google made passkeys the default sign-in option for personal Google Accounts in October 2023, and Microsoft made new accounts passwordless by default in May 2025.",
      "A passkey cannot be phished, reused, or leaked in a database breach, because the secret never leaves the customer's device.",
      "For customers, signing in becomes a fingerprint, face scan, or device PIN, which also supports WCAG 2.2's accessible authentication criterion.",
      "Any business with logins should plan passkey support now, alongside existing methods, rather than waiting for customers to ask.",
    ],
    faqs: [
      { question: "What is a passkey?", answer: "A passkey is a sign-in credential based on the FIDO and W3C WebAuthn standards that replaces a password. It uses a pair of cryptographic keys: a private key that stays on the user's device or in their password manager, and a public key stored by the website. The user unlocks it with a fingerprint, face scan, or device PIN." },
      { question: "Are passkeys more secure than passwords?", answer: "Yes, in the ways that matter most. A passkey is tied to the specific website it was created for, so it cannot be used on a phishing site. The website only stores a public key, so a database breach does not expose anything an attacker can use to sign in. And there is nothing for the user to reuse or write down." },
      { question: "What happens if a customer loses their phone?", answer: "Most passkeys today are synced through the user's platform account (such as Apple iCloud Keychain, Google Password Manager, or a third-party password manager), so they are restored on a new device. Websites should still offer a secure recovery path, such as a verified email or a second registered device." },
      { question: "How hard is it to add passkeys to a website or app?", answer: "For a modern web application, adding passkeys alongside existing sign-in is a well-defined project using the WebAuthn standard and mature libraries or identity providers. The work is mostly in designing enrollment, fallback, and recovery flows well, and testing them across devices." },
    ],
    content: {
      sections: [
        {
          heading: "The default has changed",
          body: `For thirty years, signing in meant a username and a password, and for thirty years passwords have been the weakest point in online security. People reuse them, write them down, and type them into convincing fake pages. Verizon's Data Breach Investigations Reports have consistently found stolen and abused credentials among the most common ways attackers get in.

That is now changing at the level of the largest platforms. In October 2023, Google made passkeys the default sign-in option for personal Google Accounts. In May 2025, Microsoft announced that new Microsoft accounts would be passwordless by default. Apple supports passkeys across its devices and iCloud Keychain. When the companies that run most of the world's accounts change the default, customer expectations follow.`,
          visual: {
            kind: "timeline",
            title: "How passkeys went mainstream",
            caption: "Sources: W3C, FIDO Alliance, Google (2023), Microsoft (2025).",
            items: [
              { when: "Standard", title: "WebAuthn and FIDO2", body: "The W3C Web Authentication standard and the FIDO Alliance's specifications define how browsers and devices create and use passkeys." },
              { when: "Oct 2023", title: "Google makes passkeys the default", body: "Passkeys become the default sign-in option for personal Google Accounts." },
              { when: "May 2025", title: "Microsoft goes passwordless by default", body: "New Microsoft accounts are created without a password by default, with passkeys and other passwordless methods instead." },
              { when: "Now", title: "Customer expectation", body: "People increasingly expect to sign in with a fingerprint or face, and to be protected from phishing without thinking about it." },
            ],
          },
        },
        {
          heading: "How a passkey works, in plain language",
          body: `When a customer creates a passkey on your site, their device makes two linked keys. The private key stays with the customer, protected by their fingerprint, face, or device PIN, and usually synced securely through their phone or password manager. The public key is sent to your website. When they sign in, your site sends a challenge, the device signs it with the private key, and your site checks the signature with the public key.

Three security properties fall out of that design. The passkey only works on the exact website it was created for, so a look-alike phishing page gets nothing. Your database holds only public keys, so a breach exposes nothing an attacker can sign in with. And there is no secret for the customer to reuse, forget, or share.`,
          visual: {
            kind: "compare",
            title: "Passwords versus passkeys",
            caption: "Based on the FIDO Alliance and W3C WebAuthn specifications.",
            columns: ["Password", "Passkey"],
            highlight: 1,
            rows: [
              { label: "What the customer does", values: ["Remembers and types a secret", "Uses fingerprint, face, or device PIN"] },
              { label: "Resists phishing", values: [false, true] },
              { label: "Safe if your database leaks", values: [false, true] },
              { label: "Unique to every site automatically", values: [false, true] },
              { label: "Needs a separate one-time code for strong security", values: ["Usually", "No"] },
              { label: "Supports WCAG 2.2 accessible authentication", values: ["Only with workarounds", true] },
            ],
          },
        },
        {
          heading: "Why it matters for businesses with logins",
          body: `If your business has a customer portal, a member area, a booking account, an online store with accounts, or an app, passkeys affect you in three ways. Security improves sharply against the most common attacks. Support costs fall, because password resets are one of the most frequent support requests most businesses handle. And sign-in becomes faster, which matters on mobile, where typing a strong password on a small keyboard is where many customers give up.

There is also an accessibility benefit. WCAG 2.2, the current version of the web accessibility standard, includes a criterion on accessible authentication: sign-in should not require people to memorize or transcribe information unless an alternative is offered. A fingerprint or face scan is about as accessible as authentication gets. Our article on [website accessibility rules](/blog/website-accessibility-laws-2027-ada-eaa-wcag) covers WCAG 2.2 in more detail.`,
        },
        {
          heading: "How to add passkeys without disrupting customers",
          body: `Passkeys work best introduced alongside existing sign-in, not as a sudden replacement. This is the rollout we recommend when we build or upgrade [customer portals and apps](/services/web-development).`,
          visual: {
            kind: "steps",
            title: "A sensible passkey rollout",
            caption: "Most of the effort is in the experience and recovery design, not the cryptography.",
            items: [
              { title: "Add passkeys as an option", body: "Keep existing sign-in working, and offer \"Sign in with a passkey\" on the login screen using the WebAuthn standard or an identity provider that supports it." },
              { title: "Invite enrollment at the right moment", body: "Offer to create a passkey right after a successful sign-in or password reset, when the customer is already verified and motivated." },
              { title: "Design recovery carefully", body: "A verified email, a second device, or support-assisted recovery for customers who lose access. A secure system with no way back in is a support nightmare." },
              { title: "Test across devices", body: "iPhone, Android, Mac, Windows, and the major password managers, including signing in on a computer with a phone." },
              { title: "Measure and nudge", body: "Track adoption, sign-in success rates, and reset requests. As adoption grows, consider making passkeys the default for new accounts." },
            ],
          },
        },
        {
          heading: "The bigger picture",
          body: `Passkeys are one part of a broader shift in how businesses should think about the systems customers log into: fewer secrets to steal, fewer third parties with access, and security that works without asking customers to be experts. Our article on [third-party risk in website security](/blog/website-security-third-party-risk-2026) covers the rest of that picture, and if you are planning a new portal or app, our guide to [how a mobile app gets built](/blog/how-a-mobile-app-gets-built) explains where authentication fits in the process.

For most businesses, the right time to plan passkey support is the next time the sign-in experience is touched for any reason. It costs far less to build it in than to bolt it on.`,
          highlight: "The best security improvement is the one customers experience as convenience. Passkeys are that rare case.",
        },
      ],
      cta: "Have a customer portal, member area, or app with logins? Tell us how sign-in works today and we'll reply within 24 hours with how we'd add passkeys and what it would cost.",
    },
  },
];
