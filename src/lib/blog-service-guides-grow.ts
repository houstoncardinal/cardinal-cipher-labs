// Service explainers, part 2: Design & Grow (brand identity, UX/UI, SEO, digital marketing,
// social media). Published 2026-11-01. Same editorial rules as blog-data.ts: every statistic
// cites a checkable source; Cardinal's prices come from services-catalog.ts; worked examples
// use clearly hypothetical numbers.
import type { BlogArticle } from "./blog-data";

const AUTHOR = "Hunain Qureshi";
const DATE = "2026-11-01";

const SRC = {
  mckinseyDesign: { label: "McKinsey — The Business Value of Design", url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-business-value-of-design" },
  baymard: { label: "Baymard Institute — Cart abandonment rate statistics", url: "https://baymard.com/lists/cart-abandonment-rate" },
  wcag: { label: "W3C — Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" },
  backlinko: { label: "Backlinko — Google CTR study of 4M search results", url: "https://backlinko.com/google-ctr-stats" },
  brightlocal: { label: "BrightLocal — Local Consumer Review Survey 2025", url: "https://www.brightlocal.com/research/local-consumer-review-survey-2025/" },
  localRank: { label: "Google Business Profile Help — Tips to improve your local ranking on Google", url: "https://support.google.com/business/answer/7091" },
  helpful: { label: "Google Search Central — Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
  spam: { label: "Google Search Central — Spam policies for Google web search", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  pew: { label: "Pew Research Center — Americans' Social Media Use 2025", url: "https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/" },
  sprout: { label: "Sprout Social — Social media response time (Sprout Social Index 2025)", url: "https://sproutsocial.com/insights/social-media-response-time/" },
  deloitte: { label: "Deloitte & Google — Milliseconds Make Millions (web.dev case study)", url: "https://web.dev/case-studies/milliseconds-make-millions" },
};

export const serviceGuidesGrow: BlogArticle[] = [
  // 6 ── Brand Identity ──────────────────────────────────────────────────
  {
    slug: "what-a-brand-identity-project-includes",
    seoTitle: "What a Brand Identity Project Includes (and Costs)",
    title: "What a Brand Identity Project Actually Includes, and What It Should Cost",
    seoDescription: "What brand identity design includes beyond the logo, how the process runs from discovery to guidelines, what it costs, and how to judge whether a brand will last.",
    excerpt: "A logo is the last thing we design in a brand project, not the first. Here is what a complete brand identity includes, how the process runs, what each level costs, and why consistency is where the money is.",
    category: "Growth Marketing",
    pillar: "growth",
    priority: 6,
    author: AUTHOR,
    date: DATE,
    readTime: "9 min read",
    featured: false,
    keywords: ["brand identity design", "brand identity services", "branding agency Houston", "logo design Houston", "brand guidelines", "brand identity cost", "rebranding", "brand design company Houston"],
    relatedService: "/services/brand-identity",
    cover: { kicker: "What a brand identity project includes", motif: "compare" },
    sources: [SRC.mckinseyDesign],
    takeaways: [
      "A brand identity is a system: positioning, logo, color, typography, imagery, voice, and the guidelines that keep them consistent. The logo is one part.",
      "Consistency is where the value is. A brand applied the same way across web, sales, and social is easier to recognize and trust.",
      "Our published prices are $3,000 for Essentials, $6,000 for Professional, and $12,000+ for Enterprise rebrands with strategy and positioning.",
      "You should own every source file at the end. If a proposal does not say so, ask.",
    ],
    faqs: [
      { question: "What is included in brand identity design?", answer: "Positioning and messaging, logo concepts and the final mark in every format, a color palette and typography system, imagery and graphic style, and a style guide or brand book that shows how to apply all of it. Larger projects add brand strategy, stationery and packaging, and a launch campaign." },
      { question: "How much does brand identity design cost?", answer: "Cardinal's published prices are $3,000 for Essentials (three logo concepts, palette, typography, style guide, business card, source files), $6,000 for Professional (five concepts, full color system, custom typography, complete guidelines, all stationery), and $12,000+ for Enterprise rebrands that add strategy, positioning, a brand book, packaging, and a launch campaign." },
      { question: "How long does a brand identity project take?", answer: "Essentials typically takes three to four weeks, Professional five to eight weeks, and an Enterprise rebrand with strategy work two to three months. Decision speed on your side is the biggest variable." },
      { question: "What is the difference between a brand and a logo?", answer: "The logo is the signature; the brand is everything people recognize and feel about your company, from colors and typography to how you write and how your website behaves. Our article on brand identity versus logo explains why buying only a logo usually costs more in the long run." },
    ],
    content: {
      sections: [
        {
          heading: "Why the logo comes last",
          body: `When a client asks us for a logo, the first thing we do is not draw one. A logo designed before anyone has decided what the company stands for, who it is for, and what it should feel like is a decoration. It may be attractive, and it will still have to be redone when the positioning is finally worked out.

Design, done as a discipline rather than a decoration, has measurable value. McKinsey tracked 300 companies over five years and found that those in the top quartile of design performance grew revenue 32 percentage points faster than their industry peers. The companies that got that result treated design as a system across everything a customer touches. That is what a brand identity project at [Cardinal](/services/brand-identity) is built to produce: not a mark, but a system your team can apply consistently without us.`,
        },
        {
          heading: "The parts of a brand identity",
          body: `Everything below is part of a complete identity. Smaller projects produce lighter versions of each part; they do not skip parts.`,
          visual: {
            kind: "triad",
            title: "A brand identity is three things working together",
            caption: "Strategy decides what to say, identity decides how it looks, and guidelines make sure it stays that way after we leave.",
            center: "Your brand",
            items: [
              { title: "Strategy", body: "Positioning, audience, personality, and messaging. The decisions every visual choice is tested against." },
              { title: "Identity", body: "Logo system, color palette, typography, imagery and graphic style, and voice. Designed as one family, not separate assets." },
              { title: "Guidelines", body: "The style guide or brand book: how to use every element, what not to do, and templates so the brand survives contact with real work." },
            ],
          },
        },
        {
          heading: "How the process runs",
          body: `Our process has four steps, and the first two cost nothing: a free consultation, then a written plan with the price and timeline. The design work itself runs in two phases.`,
          visual: {
            kind: "timeline",
            title: "A Professional-tier brand project, week by week",
            caption: "Illustrative schedule. Essentials runs shorter; Enterprise rebrands add a strategy phase at the start.",
            items: [
              { when: "Week 0", title: "Free consultation and written plan", body: "Who you are, who you serve, who you compete with, and what the brand needs to do. Fixed price and timeline in writing." },
              { when: "Weeks 1–2", title: "Discovery and direction", body: "Stakeholder interviews, competitor audit, positioning, and two or three visual directions as mood boards, so the big choices are made before detailed design." },
              { when: "Weeks 3–5", title: "Design and refine", body: "Logo concepts (five at Professional tier), then the chosen mark refined, color system and typography developed, and applications tested on real materials." },
              { when: "Weeks 6–7", title: "Deliver and launch", body: "Complete guidelines, every file format, stationery, templates, and a handover session so your team and vendors apply the brand correctly." },
            ],
          },
        },
        {
          heading: "What it costs, and which level you need",
          body: `Our prices are published so you can compare them before we talk. The right level depends less on company size than on how many places the brand has to live and whether the positioning already exists. Full details are on the [pricing page](/pricing).`,
          visual: {
            kind: "compare",
            title: "Cardinal's brand identity tiers",
            caption: "Published one-time prices. Each tier includes everything in the one before it. You own all source files on every tier.",
            columns: ["Essentials — $3,000", "Professional — $6,000", "Enterprise — $12,000+"],
            highlight: 1,
            rows: [
              { label: "Best for", values: ["New ventures that must look established", "One brand system across every channel", "Full rebrands and repositioning"] },
              { label: "Logo concepts", values: ["3", "5", "5+"] },
              { label: "Color palette and typography", values: ["Palette and type", "Full color system and custom type", "Full system"] },
              { label: "Guidelines", values: ["Style guide", "Complete brand guidelines", "In-depth brand book"] },
              { label: "Stationery", values: ["Business card", "All stationery", "All stationery"] },
              { label: "Brand strategy and positioning", values: [false, false, true] },
              { label: "Packaging design", values: [false, false, true] },
              { label: "Brand launch campaign", values: [false, false, true] },
            ],
          },
        },
        {
          heading: "The test of a good brand: does it survive without the designer?",
          body: `A brand is only as strong as its weakest application. The beautiful identity that falls apart on the third sales deck because nobody knew which blue to use was not finished. That is why the guidelines are not an appendix in our projects; they are the deliverable the rest of the work exists to support. Before you sign with anyone, ask to see the guidelines from a past project and imagine handing them to a new hire.`,
          visual: {
            kind: "flags",
            title: "Signals of a brand built to last",
            green: [
              "Positioning and audience are written down before any design",
              "The logo works at favicon size and on a building",
              "Color and type choices are tested for accessibility and contrast",
              "Guidelines include templates for the materials you actually produce",
              "You receive every source file and own them outright",
              "The brand looks the same on your website, your proposals, and your social channels",
            ],
            red: [
              "Logo options on the first call, before discovery",
              "A mark that depends on a gradient or effect to work",
              "No guidance on typography, spacing, or what not to do",
              "Files delivered only as PNGs",
              "Design that looks like the agency's other clients",
              "No plan for applying the brand to your website",
            ],
          },
        },
        {
          heading: "Where the brand goes next",
          body: `A new identity's first and most visible home is usually the website, which is why our brand and [web development](/services/web-development) teams work from the same guidelines, and why many brand projects become a [UX/UI](/services/ux-ui) conversation about how the brand should behave, not only how it should look. If you are weighing whether you need the full identity or just a mark, start with our article on [brand identity versus logo](/blog/brand-identity-vs-logo). And if the brand is launching into the market, [digital marketing](/services/digital-marketing) and [social media](/services/social-media-management) are where consistency starts paying back.`,
          highlight: "A brand is a promise made consistently. The design is just how the promise looks.",
        },
      ],
      cta: "Launching, repositioning, or tired of a brand that looks different everywhere? Tell us where you're headed and we'll reply within 24 hours with an honest recommendation and a fixed price.",
    },
  },

  // 7 ── UX/UI Design ────────────────────────────────────────────────────
  {
    slug: "ux-ui-design-why-easier-to-use-makes-more-money",
    seoTitle: "UX/UI Design: Why Easier to Use Makes More Money",
    title: "UX/UI Design: Why Websites That Are Easier to Use Make More Money",
    seoDescription: "What UX/UI design is, how a UX audit finds the friction costing you sign-ups and sales, what redesigns cost, and the research behind designing for usability.",
    excerpt: "Traffic is expensive and most of it leaves without doing anything. UX/UI design is the discipline of finding out why and fixing it. Here is how the work runs, what it costs, and why it is usually the highest-return investment on a site that already gets visitors.",
    category: "Websites & Costs",
    pillar: "websites",
    priority: 7,
    author: AUTHOR,
    date: DATE,
    readTime: "10 min read",
    featured: false,
    keywords: ["UX/UI design", "UX design services", "UI design Houston", "UX audit", "user experience design Houston", "website usability", "conversion rate optimization", "UX design company Houston"],
    relatedService: "/services/ux-ui",
    cover: { kicker: "UX/UI design: easier to use, more revenue", motif: "chart" },
    sources: [SRC.mckinseyDesign, SRC.baymard, SRC.wcag],
    takeaways: [
      "UX is how a site or app works for the person using it; UI is how it looks and responds. Both decide whether visitors become customers.",
      "Baymard's review of 49 studies puts average cart abandonment at 70.19%, and much of it is driven by fixable checkout design. The same pattern applies to every form and booking flow.",
      "Start with an audit ($2,500) to find what is costing you conversions, then fix in priority order. A redesign without research is a guess.",
      "Accessibility is part of usability: a site that works with a screen reader and a keyboard works better for everyone.",
    ],
    faqs: [
      { question: "What is the difference between UX and UI design?", answer: "UX (user experience) design is about how something works: the steps a person takes, where they get stuck, and whether they reach their goal. UI (user interface) design is about how it looks and responds: layout, type, color, buttons, and feedback. A good product needs both; a beautiful interface over a confusing flow still loses customers." },
      { question: "What does a UX audit include?", answer: "An expert review of your site or app against usability principles, a review of user flows and analytics to find where people drop off, an accessibility check against WCAG, a comparison with competitors, and a prioritized fix list. Cardinal's UX Audit is $2,500 and takes about two weeks." },
      { question: "How much does UX/UI design cost?", answer: "Cardinal's published prices are $2,500 for a UX Audit, $5,000 for a five-day Design Sprint with research and a tested prototype, and $12,000+ for a full redesign with user research, a design system, every screen in high fidelity, and three rounds of user testing." },
      { question: "Will UX design improve my conversion rate?", answer: "Usually, when the fixes are driven by evidence about where users actually struggle. Results vary with the starting point, which is why we begin with an audit that quantifies the opportunity before recommending a redesign." },
    ],
    content: {
      sections: [
        {
          heading: "The most expensive thing on your website is the visitor who leaves",
          body: `Every visitor cost something to acquire: an ad click, months of SEO, a referral. Most leave without doing what the site was built for. The Baymard Institute's review of 49 separate studies puts the average online shopping cart abandonment rate at 70.19%, and their research attributes a large share of it to problems with the checkout itself: forced account creation, surprise costs, long forms, no trust signals. Those are design problems, and they have design solutions.

Online stores are the clearest example, but the same thing happens on every contact form, booking flow, quote request, and sign-up. [UX/UI design at Cardinal](/services/ux-ui) is the practice of finding where people get stuck and removing the obstacle. On a site that already gets traffic, it is usually the highest-return work we do.`,
        },
        {
          heading: "UX and UI: two jobs, one outcome",
          body: `The terms get used interchangeably, and they are not the same job. Understanding the difference helps you see what you are buying.`,
          visual: {
            kind: "compare",
            title: "UX versus UI",
            caption: "Both are needed. A redesign that addresses only one usually disappoints.",
            columns: ["UX design (how it works)", "UI design (how it looks and responds)"],
            rows: [
              { label: "Asks", values: ["Can people do what they came to do?", "Is it clear, consistent, and pleasant to use?"] },
              { label: "Works with", values: ["User research, analytics, flows, testing", "Layout, typography, color, components, motion"] },
              { label: "Typical finding", values: ["Visitors abandon the booking form at step 3", "The primary button is indistinguishable from the secondary one"] },
              { label: "Output", values: ["Journey maps, wireframes, prototypes, test results", "Design system, high-fidelity screens, interaction specs"] },
              { label: "Measured by", values: ["Task success, time to complete, conversion", "Clarity, consistency, accessibility, brand fit"] },
            ],
          },
        },
        {
          heading: "How the work runs: audit, sprint, redesign",
          body: `We structure UX work so you never have to commit to a redesign before you know whether you need one. Every engagement starts with a free consultation and a written plan; after that, there are three levels.`,
          visual: {
            kind: "steps",
            title: "Three levels of UX/UI engagement",
            caption: "Each level includes everything in the one before it, so an audit is never wasted if you go on to a sprint or redesign.",
            items: [
              { title: "UX Audit ($2,500, about 2 weeks)", body: "Expert review of your site or app, user flow and analytics review, an accessibility check against WCAG 2.1, competitor comparison, and a prioritized fix list. Many clients act on the list with their own team." },
              { title: "Design Sprint ($5,000, 5 days of design plus research)", body: "For a new feature or product: user research and personas, customer journey mapping, and a clickable prototype tested with real users before anyone writes code." },
              { title: "Full Redesign ($12,000+)", body: "In-depth user research and interviews, a full design system and component library, every screen designed in high fidelity, and three rounds of user testing. Handed to our developers or yours." },
            ],
          },
        },
        {
          heading: "What an audit actually finds",
          body: `The findings in an audit are rarely exotic. They are the ordinary obstacles that become invisible to the people who built the site. A representative list from the kinds of sites we review:`,
          bullets: [
            "The main action (call, book, quote) is below the fold on phones, where most visitors are",
            "Forms ask for information the business never uses, and every extra field costs completions",
            "Error messages appear after submission instead of while typing, so people give up",
            "Navigation uses internal jargon that customers do not search for",
            "Key pages have no trust signals: reviews, credentials, real photos, or clear pricing",
            "Color contrast and tap targets fail accessibility checks, which also means they fail for anyone in bright sunlight with a thumb",
            "The site is slow enough on mobile that the design never gets a chance",
          ],
          highlight: "The best UX fixes are often the least glamorous: remove a field, move a button, say what it costs. They work because they respect what the visitor came to do.",
        },
        {
          heading: "Why accessibility is a usability investment",
          body: `We check every audit against the W3C's Web Content Accessibility Guidelines, and not only because it is the right thing to do or because it reduces legal risk. Accessible design is good design under pressure: clear structure, readable contrast, keyboard operability, and forms that explain themselves help the person using a screen reader and the person using one thumb on a bus. For organizations in healthcare, our [HIPAA-ready website checklist](/blog/hipaa-ready-website-checklist) covers the overlap between accessibility, privacy, and trust.`,
        },
        {
          heading: "Where UX fits with the rest",
          body: `UX work rarely happens alone. An audit often leads to targeted fixes by our [web development](/services/web-development) team, or informs a [mobile app](/services/mobile-apps) before it is built. It overlaps with [brand identity](/services/brand-identity) wherever a design system is involved, and with [SEO](/services/seo-analytics), because Google's own guidance on helpful content rewards pages that satisfy the person who landed on them. You can see research-led redesigns in our work for ClearLedger, APN Clinic, and [AXIOMIO](/portfolio/axiomio) in our [portfolio](/portfolio).

McKinsey's finding that top-quartile design performers grew revenue 32 percentage points faster than peers was not about prettier products. It was about companies that measured user experience, iterated on it, and treated it as everyone's job. That is the mindset an audit brings in.`,
        },
      ],
      cta: "Getting traffic that doesn't convert? Send us the address and we'll reply within 24 hours with our first impressions and a fixed price for a full audit.",
    },
  },

  // 8 ── SEO ─────────────────────────────────────────────────────────────
  {
    slug: "what-an-seo-agency-does-every-month",
    seoTitle: "What an SEO Agency Actually Does Every Month",
    title: "What an SEO Agency Actually Does Every Month (and What You Should See for the Money)",
    seoDescription: "The monthly work inside a real SEO engagement: technical fixes, content, local search, links, and reporting, with what each Cardinal plan includes and how to judge results.",
    excerpt: "SEO is the service most often paid for and least often understood. Here is the actual work that happens in a month, why each part matters, what our plans include at each price, and the report you should expect to receive.",
    category: "SEO & Local Search",
    pillar: "seo",
    priority: 8,
    author: AUTHOR,
    date: DATE,
    readTime: "11 min read",
    featured: true,
    keywords: ["what does an SEO agency do", "SEO services", "SEO agency Houston", "SEO company Houston", "monthly SEO services", "local SEO services", "SEO services Houston", "what is included in SEO services"],
    relatedService: "/services/seo-analytics",
    cover: { kicker: "What an SEO agency does every month", motif: "rank" },
    sources: [SRC.backlinko, SRC.brightlocal, SRC.localRank, SRC.helpful, SRC.spam],
    takeaways: [
      "Real SEO is five kinds of work every month: technical health, content, local search, authority (links and mentions), and measurement.",
      "Position matters enormously: Backlinko's study of four million results found the top organic result gets a 27.6% click-through rate, about ten times the tenth.",
      "Our plans are $1,500, $2,500, and $4,000 a month, and each one reports rankings, traffic, and leads monthly. If a report does not mention leads, ask why.",
      "Anything that promises guaranteed rankings or fast results through volume is describing tactics Google's spam policies penalize.",
    ],
    faqs: [
      { question: "What does an SEO agency do each month?", answer: "Technical maintenance (crawl errors, speed, structured data), on-page optimization of existing pages, new content aimed at searches buyers make, local search work on your Google Business Profile and citations, authority building through links and mentions, and a report that connects all of it to rankings, traffic, and leads." },
      { question: "How much does SEO cost per month?", answer: "Cardinal's published plans are $1,500 a month for SEO Foundation, $2,500 for SEO Growth, and $4,000 for SEO Domination. Our guide to SEO costs in Houston compares these with the wider market and explains what drives the price." },
      { question: "How long does SEO take to work?", answer: "Technical and local fixes can show results within weeks, especially in the map pack. Competitive organic rankings typically take three to six months to move meaningfully and keep compounding after that. Anyone promising page one in weeks for competitive terms is overselling." },
      { question: "Should I pay for SEO or ads?", answer: "They do different jobs. Ads produce leads immediately and stop when you stop paying; SEO builds slowly and keeps producing. Most businesses with a budget for both run ads for near-term pipeline while SEO builds the long-term asset. Our digital marketing team runs the ads side." },
    ],
    content: {
      sections: [
        {
          heading: "Why SEO is so often a black box",
          body: `SEO has a trust problem, and the industry earned it. Many agencies report activity instead of outcomes, bury the client in jargon, or quietly use tactics that Google's spam policies prohibit. The result is that business owners pay for months without knowing what they bought.

I run the [SEO practice at Cardinal](/services/seo-analytics), and this article is the explanation I give every new client in the first meeting: here is the work, here is why each piece matters, and here is what you should see in the report. If your current provider cannot give you an equivalent explanation, that is worth knowing.`,
        },
        {
          heading: "Why position is worth fighting for",
          body: `Search results are not a list people read evenly. Backlinko analyzed four million search results and found the first organic result receives a 27.6% click-through rate, roughly ten times the tenth result. Moving from page two to position three is not a modest improvement; it is the difference between invisible and a steady stream of buyers. For local businesses, the map pack above the organic results matters as much, and Google itself says local ranking comes down to relevance, distance, and prominence.`,
          visual: {
            kind: "stats",
            title: "Where the clicks go",
            caption: "Source: Backlinko's analysis of 4 million Google search results (2023), and BrightLocal's 2025 Local Consumer Review Survey.",
            items: [
              { value: "27.6%", label: "Click-through rate of the #1 organic result" },
              { value: "10×", label: "More clicks for #1 than for #10" },
              { value: "96%", label: "Of consumers read reviews when choosing a local business" },
            ],
          },
        },
        {
          heading: "The five kinds of work in a month",
          body: `Every month on a Cardinal SEO plan contains all five of the following, in proportions that change with the plan and with what your site needs most. This is the part of the article to keep: it is the checklist to hold any agency to.`,
          visual: {
            kind: "steps",
            title: "A month of SEO work",
            caption: "The order roughly matches priority on a new engagement: fix the foundation, then build on it.",
            items: [
              { title: "Technical health", body: "Crawl errors, broken links, redirects, page speed against Core Web Vitals, mobile rendering, sitemaps, and structured data. Google cannot rank what it cannot read, and a slow site caps everything else." },
              { title: "On-page optimization", body: "Titles, headings, internal links, and content on the pages you already have, aligned to the searches buyers actually use. On Foundation we work through up to ten pages a month." },
              { title: "Content", body: "New pages and articles that answer real questions in your market, written to Google's helpful-content guidance: original, experienced, and useful to a person, not to a crawler. Four posts a month on Growth, eight long-form articles on Domination." },
              { title: "Local search", body: "Google Business Profile optimization, categories, photos, posts, and review strategy; consistent citations across directories; location pages where you genuinely serve multiple areas." },
              { title: "Authority", body: "Earning links and mentions from relevant, legitimate sources: local press, industry sites, partners, and digital PR. Never bought links, which Google's spam policies treat as manipulation." },
            ],
          },
        },
        {
          heading: "What each plan includes",
          body: `Our three plans scale the same work; they do not change what the work is. Foundation is right for a single-market business building its first real search presence. Growth adds content and link building for businesses competing for buyer searches. Domination is for multi-location companies that want to own a market. Pricing details and everything included are on the [pricing page](/pricing); for context on the wider market, read [how much SEO costs in Houston](/blog/how-much-does-seo-cost-houston).`,
          visual: {
            kind: "compare",
            title: "Cardinal's monthly SEO plans",
            caption: "Published monthly prices. Each plan includes everything in the one before it.",
            columns: ["SEO Foundation — $1,500/mo", "SEO Growth — $2,500/mo", "SEO Domination — $4,000/mo"],
            highlight: 1,
            rows: [
              { label: "Best for", values: ["Single-market foundation", "Outranking competitors for buyer searches", "Multi-location market ownership"] },
              { label: "Google Business Profile optimization and citations", values: [true, true, true] },
              { label: "Technical SEO audits and fixes", values: [true, true, true] },
              { label: "On-page SEO", values: ["Up to 10 pages/mo", "Expanded", "Expanded"] },
              { label: "New content", values: [false, "4 blog posts/mo", "8 long-form articles/mo"] },
              { label: "Link building and competitor gap analysis", values: [false, true, true] },
              { label: "Expanded schema markup", values: [false, true, true] },
              { label: "PR and digital outreach, multi-location SEO", values: [false, false, true] },
              { label: "Core Web Vitals monitoring", values: [false, false, true] },
              { label: "Monthly rankings, traffic, and leads report", values: [true, true, true] },
            ],
          },
        },
        {
          heading: "The report you should expect",
          body: `A monthly SEO report has one job: to connect the work to business results. Rankings alone are vanity if they are for searches nobody makes. Traffic alone is vanity if it does not convert. The report we send answers four questions, and so should any report you receive.`,
          bullets: [
            "What changed in rankings for the searches that bring in buyers, not for every keyword we could find",
            "What happened to organic and map-pack traffic, and from which pages and locations",
            "How many calls, form submissions, and bookings came from search, tracked rather than estimated",
            "What we did this month, what we found, and what we are doing next, in plain language",
          ],
          highlight: "If a report is mostly screenshots of green arrows and never mentions a lead, it is a report about the agency, not about your business.",
        },
        {
          heading: "What SEO should never include",
          body: `Google's spam policies are public, and the tactics they describe are exactly the ones that make SEO cheap and fast on paper: bought links, scaled low-value content, doorway pages for every suburb, hidden text, and keyword-stuffed business names. They can work briefly. They also get sites demoted or removed, and recovering is slower and more expensive than doing it right. Our [guide to choosing an SEO company in Houston](/blog/how-to-choose-an-seo-company-in-houston) lists the warning signs in a proposal, and our [Houston local SEO guide](/blog/houston-local-seo-guide) covers the map-pack work in depth.

SEO also depends on the site itself. A slow, poorly structured site caps what any amount of content can achieve, which is why our SEO and [web development](/services/web-development) teams work together, and why a redesign should always follow our [website redesign SEO checklist](/blog/website-redesign-seo-checklist) so rankings survive the move.`,
        },
      ],
      cta: "Want a plain-language read on where your site stands in search? Send us the address and we'll reply within 24 hours with a free audit summary and which plan, if any, fits.",
    },
  },

  // 9 ── Digital Marketing ───────────────────────────────────────────────
  {
    slug: "digital-marketing-services-explained",
    seoTitle: "Digital Marketing Services, Explained: Ads to Attribution",
    title: "Digital Marketing Services, Explained: Ads, Email, Social, and Knowing Which Dollar Worked",
    seoDescription: "What a digital marketing agency does: paid ads, email, social, landing pages, and attribution. How a campaign runs, what plans cost, and how to judge the return.",
    excerpt: "Digital marketing is easy to spend on and hard to measure, which is why so much of it is wasted. Here is what the service actually consists of, how a campaign is built so every dollar is tracked, what our plans include, and the numbers that tell you whether it is working.",
    category: "Growth Marketing",
    pillar: "growth",
    priority: 9,
    author: AUTHOR,
    date: DATE,
    readTime: "10 min read",
    featured: false,
    keywords: ["digital marketing services", "digital marketing agency Houston", "digital marketing company Houston", "Google Ads management Houston", "PPC management", "email marketing services", "marketing attribution", "what does a digital marketing agency do"],
    relatedService: "/services/digital-marketing",
    cover: { kicker: "Digital marketing, explained", motif: "bars" },
    sources: [SRC.pew, SRC.deloitte],
    takeaways: [
      "Digital marketing is a system: channels that bring people in, landing pages that convert them, email that follows up, and attribution that tells you which dollar produced which customer.",
      "The landing page is part of the ad. Deloitte and Google measured an 8.4% conversion lift from a 0.1-second mobile speed improvement; a slow page wastes paid clicks.",
      "Our plans are $2,500, $5,000, and $10,000+ a month, managing two, four, or unlimited channels, with ad spend separate and tracked to results.",
      "Judge the work on cost per qualified lead and return on spend, never on impressions or followers.",
    ],
    faqs: [
      { question: "What does a digital marketing agency do?", answer: "It plans and runs the channels that bring customers to you (search and social ads, email, content, social media), builds the landing pages and tracking that turn visits into leads, tests and optimizes continuously, and reports on which spend produced which results. The management fee is separate from the ad spend itself." },
      { question: "How much does digital marketing cost?", answer: "Cardinal's published plans are $2,500 a month for Starter (two channels, ads up to $2K/mo spend, social on three platforms, four email campaigns), $5,000 for Growth (four channels, ads up to $10K/mo spend, A/B testing, automated email), and $10,000+ for Enterprise (unlimited channels and spend, advanced attribution, video, influencer partnerships). Ad spend is paid to the platforms on top." },
      { question: "How much should I spend on ads?", answer: "Enough to get statistically meaningful results in your market, which for most local service businesses starts around a few thousand dollars a month. We size the budget from your target cost per lead and the value of a customer, then adjust monthly based on what the data shows." },
      { question: "How do I know if digital marketing is working?", answer: "Through attribution: tracking that connects each call, form, and sale to the channel and campaign that produced it. The numbers that matter are cost per qualified lead, cost per customer, and return on ad spend. If your reports show impressions and clicks but not leads, the tracking is not set up properly." },
    ],
    content: {
      sections: [
        {
          heading: "Why most marketing spend cannot be accounted for",
          body: `Ask a business owner what they spent on marketing last year and they can tell you. Ask which half worked and most cannot. That is not a failure of effort; it is a failure of plumbing. The ads, the website, the phone, and the CRM were never connected, so nobody can trace a customer back to the dollar that found them.

[Digital marketing at Cardinal](/services/digital-marketing) is built around fixing that first. Before we scale a single campaign, every call, form, and purchase is tracked back to its source. It is less exciting than launching ads on day one. It is also the only way to spend more with confidence instead of hope.`,
        },
        {
          heading: "The parts of a digital marketing system",
          body: `Channels get the attention, but a campaign is only as good as its weakest part. We think of it as four pieces that have to work together.`,
          visual: {
            kind: "steps",
            title: "The four parts of a working campaign",
            caption: "A problem in any one part shows up as a bad number in the last one. That is why attribution comes first.",
            items: [
              { title: "Channels: getting the right people to the page", body: "Search ads for people actively looking, social ads for reach and retargeting, email for follow-up, and organic social and content for trust. Pew finds 71% of U.S. adults use Facebook and 50% use Instagram; the audience is there, but it is only valuable if the next three parts work." },
              { title: "Landing pages: turning a click into a lead", body: "A page built for the campaign, with one clear action, fast enough to load before the visitor gives up. Deloitte and Google measured an 8.4% retail conversion lift from a 0.1-second mobile speed improvement; speed is ad ROI." },
              { title: "Follow-up: email and automation", body: "Most leads are not ready on the first visit. Automated email sequences, reminders, and retargeting keep the conversation going without manual effort." },
              { title: "Attribution: knowing which dollar worked", body: "Call tracking, form tracking, CRM integration, and campaign tagging, so every lead carries its source. This is what makes optimization possible." },
            ],
          },
        },
        {
          heading: "What a month looks like",
          body: `After the free consultation and the written plan, every month follows the same rhythm: create and launch, then report and improve. In practice that means campaigns and creative built and launched; budgets adjusted weekly toward what is producing leads; landing pages and ads A/B tested; email sequences running; and a monthly report that shows cost per lead by channel and what changes next. The work compounds: each month's data makes the next month's spend smarter.`,
          visual: {
            kind: "compare",
            title: "Cardinal's digital marketing plans",
            caption: "Published monthly management fees; ad spend is paid to the platforms separately. Each plan includes everything in the one before it.",
            columns: ["Starter — $2,500/mo", "Growth — $5,000/mo", "Enterprise — $10,000+/mo"],
            highlight: 1,
            rows: [
              { label: "Best for", values: ["A steady, measurable flow of leads", "Scaling what is working", "Full-funnel growth across every channel"] },
              { label: "Channels managed", values: ["2", "4", "Unlimited"] },
              { label: "Ads management (monthly ad spend)", values: ["Up to $2K", "Up to $10K", "Unlimited"] },
              { label: "Social media and email campaigns", values: ["3 platforms, 4 emails/mo", "Plus automated email sequences", "Plus video production"] },
              { label: "Content", values: ["4 pieces/mo", "Expanded", "Expanded with video"] },
              { label: "A/B testing and landing page optimization", values: [false, true, true] },
              { label: "Advanced attribution tracking", values: [false, false, true] },
              { label: "Influencer partnerships", values: [false, false, true] },
              { label: "Monthly report: cost per lead by channel", values: [true, true, true] },
            ],
          },
        },
        {
          heading: "A worked example of attribution (hypothetical numbers)",
          body: `Suppose a home services company spends $4,000 a month on ads across search and social, and its CRM shows 50 leads that month. Without attribution the cost per lead is $80 and that is all anyone knows. With attribution, the same month might show that search produced 35 leads at $71 each and social produced 15 at $100, but that social leads closed at twice the rate because they were retargeted visitors who already knew the company. The right move is not "cut social"; it is "shift social budget toward retargeting and test a higher search bid on the three services that close best". That decision is impossible without the plumbing, and it is the entire value of the service.`,
          visual: {
            kind: "bars",
            title: "Cost per lead by channel in the example",
            caption: "Hypothetical figures for illustration. The point is that the blended number hides the decision.",
            items: [
              { label: "Blended (what you see without attribution)", value: 80, display: "$80" },
              { label: "Search ads", value: 71, display: "$71", highlight: true },
              { label: "Social ads (retargeting, closes at 2× the rate)", value: 100, display: "$100" },
            ],
          },
        },
        {
          heading: "The numbers that matter, and the ones that do not",
          body: `Marketing reports are full of numbers that feel like progress and are not. Here is how we separate them.`,
          visual: {
            kind: "flags",
            title: "Metrics worth your attention",
            green: [
              "Cost per qualified lead, by channel",
              "Cost per customer and return on ad spend",
              "Lead-to-customer rate by source",
              "Landing page conversion rate and speed",
              "Email reply and booking rates",
              "Month-over-month trend in all of the above",
            ],
            red: [
              "Impressions and reach on their own",
              "Followers and likes as an outcome",
              "Clicks without a conversion behind them",
              "\"Engagement rate\" with no definition",
              "Rankings for searches buyers never make",
              "A report with no mention of leads or sales",
            ],
          },
        },
        {
          heading: "How marketing connects to the rest of your growth",
          body: `Paid campaigns deliver leads now; [SEO](/services/seo-analytics) builds the asset that keeps delivering after the spend stops, and most clients with budget for both run them together. Organic presence is the job of [social media management](/services/social-media-management), which also feeds the retargeting audiences paid social depends on. And because the landing page is part of the ad, campaign performance often sends us back to [UX/UI](/services/ux-ui) or [web development](/services/web-development) to fix the page the clicks land on. If your current website is the bottleneck, our guide to [choosing a web design company in Houston](/blog/how-to-choose-a-web-design-company-in-houston) is the place to start.`,
          highlight: "The question we ask about every dollar is the same one you would: what did it bring back?",
        },
      ],
      cta: "Spending on marketing without clear numbers behind it? Tell us what you're running now and we'll reply within 24 hours with what we'd measure first and a fixed monthly price.",
    },
  },

  // 10 ── Social Media Management ────────────────────────────────────────
  {
    slug: "social-media-management-30-day-playbook",
    seoTitle: "Social Media Management: A 30-Day Playbook for Business",
    title: "Social Media Management for Businesses: The 30-Day Playbook We Run for Clients",
    seoDescription: "How professional social media management works month to month: strategy, content calendar, publishing, community response, paid social, and reporting, with plan prices.",
    excerpt: "Social media management is not posting more often. It is a monthly system: a plan, a calendar, content people recognize, replies within hours, and a report that ties it to business. Here is the 30-day playbook we run, and what each level costs.",
    category: "Growth Marketing",
    pillar: "growth",
    priority: 10,
    author: AUTHOR,
    date: DATE,
    readTime: "9 min read",
    featured: false,
    keywords: ["social media management", "social media management services", "social media management Houston", "social media agency Houston", "social media marketing Houston", "content calendar", "community management", "social media for small business"],
    relatedService: "/services/social-media-management",
    cover: { kicker: "The 30-day social media playbook", motif: "pins" },
    sources: [SRC.pew, SRC.sprout],
    takeaways: [
      "Buyers check your social channels before they call. An inactive or off-brand account costs trust before the first conversation.",
      "Sprout Social's 2025 Index found 73% of consumers expect a brand to respond on social within 24 hours; replies are part of the service, not an extra.",
      "A real program runs on a monthly cycle: plan, create, publish, respond, measure. Our plans are $1,500+, $2,500+, and $4,500+ a month.",
      "Measure social on what it does for the business: inquiries, bookings, retargeting audiences, and reputation, not follower counts.",
    ],
    faqs: [
      { question: "What is included in social media management?", answer: "Strategy and a monthly content calendar, branded graphics and copy, short-form video on higher tiers, publishing, community management (replying to comments and messages), paid social campaign management, and a monthly report. Our article on what social media management includes lists every deliverable." },
      { question: "How much does social media management cost?", answer: "Cardinal's published plans are $1,500+ a month for Social Essentials (two platforms, 12 posts), $2,500+ for Social Growth (up to four platforms, 20 posts including short-form video, paid social management), and $4,500+ for Social Program (all platforms, video production, social listening, creator partnerships). Ad spend is separate." },
      { question: "Which social media platforms should my business be on?", answer: "The ones your customers use, which is usually fewer than you think. Pew's 2025 data shows 84% of U.S. adults use YouTube, 71% Facebook, and 50% Instagram, with LinkedIn essential for business-to-business. We choose two to start and expand only when the data supports it." },
      { question: "Should I manage social media in-house or hire an agency?", answer: "In-house works when someone has the time, the design and writing skills, and the discipline to show up every week. An agency makes sense when consistency keeps slipping or when you want paid social and reporting handled professionally. Our in-house versus agency comparison walks through the trade-offs." },
    ],
    content: {
      sections: [
        {
          heading: "Social media is where buyers check you out",
          body: `Before a prospect calls a contractor, a clinic, a law firm, or a software company, a surprising number of them look at its social channels. Not to be entertained; to see whether the business is real, active, and the kind of company they want to deal with. An account that last posted eight months ago, or one that looks nothing like the website, answers that question badly.

Pew Research's 2025 survey of Americans' social media use puts YouTube at 84% of adults, Facebook at 71%, and Instagram at 50%. The audience is not in doubt. What businesses struggle with is consistency, and that is the problem [social media management at Cardinal](/services/social-media-management) solves: a monthly system that keeps the channels active, on-brand, and responsive without it depending on whoever has a free afternoon.`,
        },
        {
          heading: "The 30-day cycle",
          body: `Every month on a Cardinal social plan runs through the same five stages. The stages overlap in practice (we are publishing this month's content while planning next month's), but each has a clear owner and output.`,
          visual: {
            kind: "timeline",
            title: "A month of social media management",
            caption: "The cycle repeats monthly. The first month also includes profile setup and a brand voice guide.",
            items: [
              { when: "Days 1–5", title: "Plan", body: "Review last month's data, agree on themes and promotions, and build the content calendar: every post, its platform, its goal, and its date." },
              { when: "Days 5–12", title: "Create", body: "Branded graphics, copy in your voice, and on Growth and Program tiers short-form video. Everything reviewed by you before it is scheduled." },
              { when: "All month", title: "Publish and respond", body: "Posts go out on schedule. Comments and messages are answered on business days, because 73% of consumers expect a reply within 24 hours (Sprout Social Index 2025)." },
              { when: "All month (Growth and up)", title: "Paid social", body: "Targeted campaigns and retargeting to turn reach into inquiries, with ad spend tracked separately from the management fee." },
              { when: "Days 28–30", title: "Measure and report", body: "What reached people, what they did about it, what it produced for the business, and what changes next month." },
            ],
          },
        },
        {
          heading: "What a good month of content looks like",
          body: `Volume is not the goal; recognition is. A business account works when a regular viewer could identify a post as yours before they see the name. We plan content in a handful of recurring types so the feed has rhythm and your team always knows what to supply.`,
          bullets: [
            "Proof: finished work, before-and-afters, results, and client stories (with permission)",
            "People: the team, the founder, the process behind the work; this is what makes a company feel real",
            "Help: answers to the questions customers ask every week, which also feed your SEO content",
            "Offers and news: promotions, openings, events, and launches, kept to a minority of posts so the feed is not an ad",
            "Community: local involvement, partners, and the city you serve",
          ],
          highlight: "The feed that converts is the one where a stranger can learn, in thirty seconds of scrolling, what you do, who you do it for, and that real people are behind it.",
        },
        {
          heading: "Plans and what they include",
          body: `The right plan depends on how many channels matter to your customers and whether you want paid social and video in the program. Each plan includes everything in the one before it; full details are on the [pricing page](/pricing).`,
          visual: {
            kind: "compare",
            title: "Cardinal's social media management plans",
            caption: "Published monthly starting prices. Ad spend for paid campaigns is separate.",
            columns: ["Social Essentials — $1,500+/mo", "Social Growth — $2,500+/mo", "Social Program — $4,500+/mo"],
            highlight: 1,
            rows: [
              { label: "Best for", values: ["A consistent, professional presence", "Turning followers into leads", "Multi-brand or multi-location organizations"] },
              { label: "Platforms managed", values: ["2", "Up to 4", "All relevant platforms"] },
              { label: "Posts per month", values: ["12", "20, including short-form video", "20+, with video production"] },
              { label: "Monthly content calendar, branded graphics, and copy", values: [true, true, true] },
              { label: "Publishing and business-day community management", values: [true, true, true] },
              { label: "Paid social campaign management", values: [false, true, true] },
              { label: "Audience and competitor analysis", values: [false, true, true] },
              { label: "Social listening and reputation monitoring", values: [false, false, true] },
              { label: "Influencer and creator partnerships", values: [false, false, true] },
            ],
          },
        },
        {
          heading: "How to measure social on business terms",
          body: `Follower counts are the metric everyone looks at and the least useful one. We report social the way we report every other channel: what it did for the business. For most clients that means inquiries and bookings that started on social, the size of the retargeting audiences social built for paid campaigns, review and reputation activity, and the reach and engagement of the content, in that order. If the number you are shown first is likes, ask what came after them.`,
          visual: {
            kind: "stats",
            title: "The audience, by platform",
            caption: "Share of U.S. adults who use each platform. Source: Pew Research Center, Americans' Social Media Use 2025.",
            items: [
              { value: "84%", label: "YouTube" },
              { value: "71%", label: "Facebook" },
              { value: "50%", label: "Instagram" },
            ],
          },
        },
        {
          heading: "Where social fits with everything else",
          body: `Social media is rarely the whole plan; it is the part of it people see most often. It needs a [brand identity](/services/brand-identity) to be recognizable, it feeds and is fed by [digital marketing](/services/digital-marketing) campaigns, and the questions it surfaces become the content that drives [SEO](/services/seo-analytics). For the full list of deliverables in a program, read [what social media management includes](/blog/social-media-management-whats-included), and if you are deciding whether to keep it in-house, our [in-house versus agency comparison](/blog/in-house-vs-agency-social-media-management) is written for exactly that decision.`,
        },
      ],
      cta: "Channels gone quiet, or posting without results? Tell us where you are and what you sell and we'll reply within 24 hours with a plan and a fixed monthly price.",
    },
  },
];
