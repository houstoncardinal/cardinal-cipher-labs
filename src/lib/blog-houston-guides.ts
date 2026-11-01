// Houston web design & SEO guides (published 2026-10-31). Same editorial rules as blog-data.ts:
// every statistic cites a checkable source; Cardinal's prices come from services-catalog.ts;
// worked examples use clearly hypothetical numbers.
import type { BlogArticle } from "./blog-data";

const AUTHOR = "Hunain Qureshi";
const DATE = "2026-10-31";

const SRC = {
  census: { label: "U.S. Census Bureau — QuickFacts: Houston city, Texas", url: "https://www.census.gov/quickfacts/fact/table/houstoncitytexas" },
  vitals: { label: "web.dev — Web Vitals (Core Web Vitals thresholds)", url: "https://web.dev/articles/vitals" },
  wcag: { label: "W3C — Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" },
  google53: { label: "Google, The Need for Mobile Speed (via Marketing Dive)", url: "https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/" },
  deloitte: { label: "Deloitte & Google — Milliseconds Make Millions (web.dev case study)", url: "https://web.dev/case-studies/milliseconds-make-millions" },
  siteMove: { label: "Google Search Central — Site moves with URL changes", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
  redirects: { label: "Google Search Central — Redirects and Google Search", url: "https://developers.google.com/search/docs/crawling-indexing/301-redirects" },
  doINeedSeo: { label: "Google Search Central — Do you need an SEO?", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
  starter: { label: "Google Search Central — SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  spam: { label: "Google Search Central — Spam policies for Google web search", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  helpful: { label: "Google Search Central — Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
  localRank: { label: "Google Business Profile Help — Tips to improve your local ranking on Google", url: "https://support.google.com/business/answer/7091" },
  gbpGuidelines: { label: "Google — Guidelines for representing your business on Google", url: "https://support.google.com/business/answer/3038177" },
  owasp: { label: "OWASP — Top 10 Web Application Security Risks", url: "https://owasp.org/www-project-top-ten/" },
};

export const houstonGuides: BlogArticle[] = [
  // 1 ── web design company houston ───────────────────────────────────
  {
    slug: "how-to-choose-a-web-design-company-in-houston",
    seoTitle: "How to Choose a Web Design Company in Houston (2027)",
    title: "How to Choose a Web Design Company in Houston: The 2027 Buyer's Guide",
    seoDescription: "How to hire a Houston web design company: a scoring scorecard, real prices, red flags, and the questions that expose a weak quote before you sign.",
    excerpt: "Houston has hundreds of web design companies, and their quotes for what looks like the same website can differ by thousands of dollars. Here is the scorecard I would use to choose one, written by someone who sits on the other side of the table.",
    category: "Websites & Costs",
    pillar: "websites",
    priority: 1,
    author: AUTHOR,
    date: DATE,
    readTime: "12 min read",
    featured: true,
    keywords: ["web design company Houston", "web design Houston", "Houston web design agency", "best web design company Houston", "how to choose a web designer", "website design company near me", "Houston website design"],
    relatedService: "/houston-web-design",
    cover: { kicker: "The Houston web design buyer's guide", motif: "scorecard" },
    sources: [SRC.census, SRC.vitals, SRC.wcag, SRC.google53, SRC.siteMove],
    takeaways: [
      "Judge a web design company on the outcomes it produces (calls, bookings, sales), not on how impressive its own homepage looks.",
      "Send every company the same one-page brief so the quotes you compare describe the same project.",
      "Get ownership of your domain, content, and code in writing before any work starts.",
      "A redesign that ignores SEO can erase years of rankings. Ask how old URLs will be redirected before you sign.",
    ],
    faqs: [
      { question: "How much does a website cost in Houston?", answer: "It ranges from a few hundred dollars for a do-it-yourself template to six figures for a custom platform. As a reference, Cardinal Consulting's marketing websites start at $3,500, business growth websites at $6,500, and custom platforms at $15,000, each with a fixed price agreed in writing." },
      { question: "How long does it take a Houston web design company to build a website?", answer: "Most custom websites take four to eight weeks from kickoff to launch. A focused marketing site can go live in as little as 72 hours to two weeks once the content is ready; larger platforms and online stores take longer." },
      { question: "Should I hire a freelancer or a web design agency?", answer: "A freelancer can be a good value for a small, clearly defined project. An agency makes more sense when the website is responsible for revenue and you need design, development, SEO, and support from one accountable team. Our guide to hiring a Houston web developer compares the options in detail." },
      { question: "Will a new website improve my Google rankings?", answer: "A well-built site gives Google a stronger technical foundation: fast pages, clean structure, and structured data. Rankings for competitive searches also depend on content, local signals, and reputation, which is why many businesses pair a new site with ongoing SEO." },
    ],
    content: {
      sections: [
        {
          heading: "Why choosing a web design company in Houston is harder than it looks",
          body: `Houston is the fourth most populous city in the United States, and its economy runs on industries that each expect something different from a website: energy, the Texas Medical Center, law firms, construction, real estate, and one of the most varied restaurant scenes in the country. That variety has produced a crowded market of web design companies, from solo freelancers to large agencies, and their quotes for what sounds like the same project can differ by thousands of dollars.

I run a Houston web design company, so read this knowing where I sit. I have written it the way I would want a friend to approach the decision, including the parts that do not flatter agencies like mine. The goal is simple: by the end you should be able to compare any two proposals and know which one will actually grow your business.`,
        },
        {
          heading: "Start with the business outcome, not the design",
          body: `Most website projects go wrong before a single page is designed, because nobody wrote down what the site is supposed to do. "Modern and professional" is a style, not a goal. Calls, booked consultations, online orders, quote requests, and job applications are goals, and each one changes how a site should be structured.

Before you talk to anyone, write one sentence that finishes "This website is successful if…". A personal injury firm might say "it produces qualified case inquiries from Harris and Fort Bend counties." A restaurant might say "people can see the menu and book a table in under 30 seconds on a phone." That sentence becomes the yardstick for every decision, and it is the fastest way to see which companies are listening. Industry matters here too: the details that win cases for [a Houston law firm website](/houston-law-firm-website-design) are very different from what fills tables for [a restaurant](/houston-restaurant-website-design) or builds patient trust for [a medical practice](/houston-medical-website-design).`,
          highlight: "If a company starts the first call by showing you templates instead of asking how your business makes money, you have learned most of what you need to know.",
        },
        {
          heading: "The scorecard: how to compare Houston web design companies",
          body: `Price is the easiest thing to compare and the least useful on its own. Score every company you are considering on the six factors below, out of 10 each, then multiply by the weight. The highest total is usually the right choice, even when it is not the cheapest quote.`,
          visual: {
            kind: "bars",
            title: "Suggested scorecard weighting",
            caption: "The author's recommended weighting. Adjust it to your situation: a startup may weight price higher, and a regulated practice may weight compliance and security higher.",
            items: [
              { label: "Relevant portfolio and results", value: 25, display: "25%", highlight: true },
              { label: "Discovery and process", value: 20, display: "20%" },
              { label: "SEO, speed, and accessibility foundation", value: 20, display: "20%" },
              { label: "Ownership and contract terms", value: 15, display: "15%" },
              { label: "Support after launch", value: 10, display: "10%" },
              { label: "Price and payment terms", value: 10, display: "10%" },
            ],
          },
          bullets: [
            "Portfolio and results: live sites (not mockups) for businesses like yours, and a client you can call.",
            "Process: a real discovery phase, a written scope, and a named person responsible for your project.",
            "Foundation: speed, technical SEO, accessibility, and analytics built in rather than sold as extras.",
            "Ownership: you own the domain, the content, the design files, and the code.",
            "Support: a clear plan for updates, security, and changes after launch.",
            "Price: a fixed, itemized quote with payment tied to milestones.",
          ],
        },
        {
          heading: "What a good website should include in 2027",
          body: `The baseline has risen. A website that looked fine five years ago can now be slow on phones, hard to use with a screen reader, and invisible to the structured data Google and AI search tools read. Whoever you hire, the proposal should cover every item below, and you should be able to see each one working on their recent sites.

Speed is where the gap between companies is most measurable. Google publishes "good" thresholds for its Core Web Vitals, and you can test any site against them for free at [PageSpeed Insights](https://pagespeed.web.dev/). Run a few of a company's recent client sites through it before your first call.`,
          visual: {
            kind: "stats",
            title: "Google's Core Web Vitals: the \"good\" thresholds",
            caption: "Largest Contentful Paint (how fast the main content appears), Interaction to Next Paint (how quickly the page responds), and Cumulative Layout Shift (how much the page jumps around). Source: web.dev.",
            items: [
              { value: "≤ 2.5s", label: "Largest Contentful Paint" },
              { value: "≤ 200ms", label: "Interaction to Next Paint" },
              { value: "≤ 0.1", label: "Cumulative Layout Shift" },
            ],
          },
          bullets: [
            "Custom design built around your brand and customers, not a lightly edited theme",
            "Mobile-first layouts, since most local searches happen on phones",
            "Technical SEO: clean URLs, titles, meta descriptions, a sitemap, and structured data",
            "Accessibility aligned with WCAG 2.2, the current W3C standard",
            "Conversion tracking for calls, forms, and bookings, so you can see what the site produces",
            "A content management system your team can actually use",
            "Security basics: SSL, updates, backups, and spam protection on forms",
          ],
        },
        {
          heading: "What web design costs in Houston",
          body: `Houston quotes fall into three broad bands: template builds for a few thousand dollars or less, custom marketing websites in the mid four figures, and custom platforms with portals, integrations, or e-commerce from the low five figures up. For a deeper breakdown, including the ongoing costs most quotes leave out, read [how much a website costs in Houston](/blog/how-much-does-a-website-cost-houston).

So you have real numbers to compare against, here are our own published starting prices. Every project is quoted at a fixed price in writing after a free consultation, and you can compare everything that is included on our [pricing page](/pricing).`,
          visual: {
            kind: "bars",
            title: "Cardinal Consulting starting prices (one-time)",
            caption: "Published starting prices for reference. See [full pricing](/pricing) for what each package includes.",
            items: [
              { label: "Marketing website (up to 10 pages)", value: 3500, display: "$3,500" },
              { label: "Business growth website (up to 30 pages)", value: 6500, display: "$6,500", highlight: true },
              { label: "Custom platform", value: 15000, display: "$15,000+" },
            ],
          },
        },
        {
          heading: "Red flags and green flags",
          body: "Most bad outcomes are visible in the sales process if you know where to look. These are the signals I would pay the most attention to:",
          visual: {
            kind: "flags",
            title: "What to watch for in proposals and sales calls",
            green: [
              "They ask about your revenue, customers, and goals before talking about design",
              "The proposal lists pages, features, revisions, and timeline in writing",
              "You own the domain, hosting account, content, and code",
              "They explain how they will protect existing rankings with redirects",
              "They show live sites and let you call past clients",
            ],
            red: [
              "A price quoted before anyone understands the project",
              "They register your domain in their own name",
              "\"Guaranteed #1 on Google\" promises",
              "No mention of speed, accessibility, or SEO",
              "Monthly fees that you cannot cancel without losing your website",
            ],
          },
        },
        {
          heading: "Twelve questions to ask before you sign",
          body: "Send these to every company on your shortlist. Clear, specific answers are a strong signal; vague ones usually mean the details will be decided later, at your expense.",
          bullets: [
            "Who exactly will design and build the site, and who is my day-to-day contact?",
            "Is the design custom, or based on a template or theme?",
            "How many rounds of revisions are included, and what does an extra round cost?",
            "Who writes the content, and is copywriting included?",
            "Who will own the domain, hosting account, design files, and code?",
            "How will you redirect our old URLs so we keep our search rankings?",
            "What will our Core Web Vitals scores be at launch?",
            "How do you handle accessibility?",
            "Which tools will the site connect to, such as CRM, booking, or payments?",
            "What happens after launch, and what does ongoing support cost?",
            "What is the payment schedule, and what is due at each milestone?",
            "Can I speak with a client whose project was similar to mine?",
          ],
        },
        {
          heading: "Does it matter if your web design company is in Houston?",
          body: `You can hire a great team anywhere, and plenty of Houston businesses do. A local company does bring real advantages, though: workshops in the same room, a shared time zone, and an understanding of how Houstonians search, from neighborhood names like the Heights and the Energy Corridor to suburbs like Katy, Sugar Land, and The Woodlands. That local knowledge shows up in your service pages and your Google Business Profile, both of which drive local rankings.

What matters more than geography is accountability. Whoever you hire should be easy to reach, respond within a business day, and still be around to support the site two years from now.`,
        },
        {
          heading: "How we approach web design at Cardinal",
          body: `For transparency, here is how we work, so you can hold us to the same standard as everyone else. Every project starts with a free consultation, then a written scope with a fixed price, so the number you approve is the number you pay. Our sites are custom designed, built for speed and accessibility, and launch with technical SEO, structured data, and conversion tracking in place. We reply to every inquiry within 24 hours.

You can see the results in [our portfolio](/portfolio), read more about our [Houston web design services](/houston-web-design) and [web development](/services/web-development), or [tell us about your project](/contact).`,
        },
      ],
      cta: "Comparing Houston web design companies? Send us your brief and we'll reply within 24 hours with honest feedback and a fixed-price quote, whether or not you hire us.",
    },
  },

  // 2 ── houston web developer ────────────────────────────────────────
  {
    slug: "hiring-a-web-developer-in-houston",
    seoTitle: "Houston Web Developer: Freelancer, In-House or Agency?",
    title: "Hiring a Houston Web Developer: Freelancer, In-House, or Agency?",
    seoDescription: "Should you hire a freelance web developer, a full-time developer, or a Houston web development agency? An honest comparison of cost, risk, speed, and fit.",
    excerpt: "Freelancer, full-time hire, or agency? Each is the right answer for some Houston businesses and an expensive mistake for others. An honest comparison, plus the one-week process I'd use to vet any web developer.",
    category: "Websites & Costs",
    pillar: "websites",
    priority: 2,
    author: AUTHOR,
    date: DATE,
    readTime: "10 min read",
    featured: false,
    keywords: ["Houston web developer", "web developer Houston", "hire a web developer Houston", "freelance web developer Houston", "web development company Houston", "web developer near me", "Houston web development agency"],
    relatedService: "/services/web-development",
    cover: { kicker: "Freelancer, in-house, or agency?", motif: "compare" },
    sources: [SRC.owasp, SRC.vitals, SRC.wcag],
    takeaways: [
      "A web designer shapes how a site looks and works for visitors; a web developer builds it. Most revenue-critical projects need both.",
      "Freelancers suit small, well-defined projects; in-house developers suit companies whose software is the product; agencies suit sites that carry revenue.",
      "Vet developers on live work, page speed, and a reference call, not on a portfolio of screenshots.",
      "Whoever you hire, keep the domain, hosting, code repository, and admin logins in your company's name.",
    ],
    faqs: [
      { question: "How much does it cost to hire a web developer in Houston?", answer: "Freelancers typically bill by the hour or project, full-time developers cost a salary plus benefits, recruiting, and tools, and agencies quote by project. For reference, Cardinal Consulting's websites start at $3,500 and custom platforms at $15,000, with a fixed price in writing." },
      { question: "Can a web developer also handle SEO?", answer: "Developers handle technical SEO, such as site speed, crawlability, and structured data. Ranking for competitive searches also takes keyword strategy, content, local SEO, and authority building, which are usually separate skills." },
      { question: "Do I need a web developer located in Houston?", answer: "Not necessarily, but a local developer makes in-person workshops easier, shares your time zone, and tends to understand how your Houston customers search. What matters most is responsiveness and long-term accountability." },
      { question: "What should I own when a web development project is finished?", answer: "Your domain, hosting account, code repository, design files, content, and every admin login should be in your company's name, along with documentation explaining how the site is built and deployed." },
    ],
    content: {
      sections: [
        {
          heading: "Web designer vs. web developer: what you are actually hiring",
          body: `The terms get used interchangeably, but they describe different jobs. A web designer decides how a site looks and works for visitors: layout, typography, navigation, and the path from landing on a page to calling you. A web developer turns that design into working software: the front end people interact with, the back end that stores data, and the integrations with your CRM, booking system, or payment processor.

Many Houston businesses search for "a web developer" when they really need both, plus someone to make sure Google can find the result. Knowing which skills your project needs is the first step to hiring well. If the look and usability of your site is the main problem, start with [UX/UI design](/services/ux-ui); if it needs portals, integrations, or custom features, you need serious [web development](/services/web-development).`,
        },
        {
          heading: "Three ways to hire, compared",
          body: "There is no universally right answer. Each model trades cost against risk, speed, and depth in a different way:",
          visual: {
            kind: "compare",
            title: "Freelancer vs. in-house vs. agency",
            caption: "A check means the model usually provides it; a dash means it depends on the person or firm.",
            columns: ["Freelancer", "In-house hire", "Agency"],
            rows: [
              { label: "Upfront cost", values: ["Lowest", "Highest", "Middle"] },
              { label: "Design, development, and SEO in one place", values: [false, null, true] },
              { label: "Coverage when someone is out", values: [false, null, true] },
              { label: "Time to start", values: ["Days", "Months", "Weeks"] },
              { label: "Deep knowledge of your business", values: [null, true, null] },
              { label: "Best for", values: ["Small, defined jobs", "Software as your product", "Revenue-critical sites"] },
            ],
          },
        },
        {
          heading: "When a freelance web developer is the right call",
          body: `A good freelancer can be excellent value. If you need a landing page, a set of fixes on an existing site, or a small build with a clear specification, one skilled person is often faster and cheaper than a team.

The risk is concentration. One person is responsible for design, code, hosting, security, and support, and if they get busy, change careers, or disappear, your website is stuck. Before hiring a freelancer, ask who covers for them, and make sure every account is in your name from day one.`,
        },
        {
          heading: "When to hire an in-house developer",
          body: `If software is your product, or you have a steady stream of development work for years to come, a full-time developer can make sense. They build deep knowledge of your systems and are available every day.

Count the full cost, though: salary, benefits, recruiting, equipment, software licenses, management time, and the gap when they take leave or move on. One developer also rarely covers design, security, DevOps, and SEO equally well, so many companies still bring in specialists for those areas.`,
        },
        {
          heading: "When a Houston web development agency makes sense",
          body: `An agency costs more than a freelancer but gives you a team: designers, developers, and SEO specialists who have shipped many similar projects, with someone accountable for the whole result. That matters most when the website carries revenue, connects to other systems, or needs ongoing care.

Agencies vary widely, so judge them on live work and process rather than size. A strong agency will also tell you when a smaller option fits better. At Cardinal, the same team handles [web development](/services/web-development), [AI features and automation](/services/ai-automation), and [maintenance after launch](/services/website-maintenance), so nothing falls between vendors.`,
        },
        {
          heading: "The web developer skills checklist for 2027",
          body: "Whoever you hire, these are the skills a modern business website depends on. Ask candidates to show where they have applied each one:",
          bullets: [
            "A modern, well-supported framework and a clear reason for choosing it",
            "Performance work that meets Google's Core Web Vitals thresholds",
            "Accessibility in line with WCAG 2.2",
            "Security practices covering the OWASP Top 10 risks, such as injection and broken access control",
            "Technical SEO: crawlable pages, structured data, sitemaps, and redirects",
            "Integrations with CRMs, payment processors, booking tools, and APIs",
            "Analytics and conversion tracking",
            "A content management setup your team can use without a developer",
            "Version control, automated deployments, and backups",
          ],
        },
        {
          heading: "How to vet a web developer in one week",
          body: "You can learn more in five structured steps than in months of back-and-forth. This is the process I would follow:",
          visual: {
            kind: "steps",
            title: "A one-week vetting process",
            items: [
              { title: "Write a one-page brief", body: "Your goal, the pages and features you need, the tools it must connect to, your budget range, and two sites you like." },
              { title: "Test their live work", body: "Run three recent client sites through [PageSpeed Insights](https://pagespeed.web.dev/) and use them on your phone. Screenshots can hide a slow, clumsy site; live sites cannot." },
              { title: "Call a past client", body: "Ask what went wrong and how it was handled. Every project has problems; you are learning how they respond to them." },
              { title: "Start small", body: "A paid discovery phase or a small first task shows how they communicate and estimate before you commit to the full build." },
              { title: "Get it in writing", body: "Scope, timeline, payment milestones, ownership, and what happens after launch, all in one signed document." },
            ],
          },
        },
        {
          heading: "Questions that reveal real expertise",
          body: "Good developers answer these quickly and specifically. Hesitation or jargon-heavy non-answers are worth noting.",
          bullets: [
            "How will you make the site fast on a mid-range phone over a cellular connection?",
            "How do you protect forms and logins from spam and attacks?",
            "What happens to our search rankings when you replace our current site?",
            "How will our team update content after launch?",
            "Where will the code live, and how do we get access to it?",
            "If you were unavailable for a month, how would our site be supported?",
          ],
        },
        {
          heading: "Protect yourself: ownership, access, and handoff",
          body: `The most common disaster we see is not bad code; it is a business locked out of its own website. A developer registered the domain in their name, hosts the site on their personal account, or holds the only admin login, and when the relationship ends, so does access.

Avoid it with one rule: every account is created in your company's name, and the developer is added as a user. That includes the domain registrar, hosting, code repository, analytics, Google Search Console, and Google Business Profile. Ask for written documentation at handoff explaining how the site is built and deployed.`,
          highlight: "If you only remember one thing: the domain registrar account should be in your company's name, with your email address on it.",
        },
      ],
      cta: "Not sure which option fits your project? Tell us what you're building and we'll give you an honest recommendation, even if it isn't us.",
    },
  },

  // 3 ── houston seo company / seo agencies in houston ─────────────────
  {
    slug: "how-to-choose-an-seo-company-in-houston",
    seoTitle: "How to Choose an SEO Company in Houston (Red Flags Included)",
    title: "How to Choose a Houston SEO Company: What the Best SEO Agencies in Houston Do Differently",
    seoDescription: "Comparing SEO agencies in Houston? Use Google's own advice, a vetting scorecard, and the red flags that expose bad SEO before it costs you rankings.",
    excerpt: "Every Houston SEO agency promises page one. Google's own guidance says no one can guarantee it. Here is how to tell a strong SEO partner from an expensive one, using a scorecard, a timeline, and the questions agencies hope you won't ask.",
    category: "SEO & Local Search",
    pillar: "seo",
    priority: 3,
    author: AUTHOR,
    date: DATE,
    readTime: "11 min read",
    featured: true,
    keywords: ["Houston SEO company", "Houston SEO agency", "SEO agencies in Houston", "best SEO company Houston", "SEO services Houston", "SEO company near me", "local SEO Houston"],
    relatedService: "/services/seo-analytics",
    cover: { kicker: "How to vet a Houston SEO agency", motif: "rank" },
    sources: [SRC.doINeedSeo, SRC.starter, SRC.spam, SRC.helpful, SRC.localRank],
    takeaways: [
      "No one can guarantee a #1 ranking on Google; treat guarantees as a warning sign, not a selling point.",
      "Google says SEO usually needs four months to a year to show results, so judge an agency on its plan and early leading indicators.",
      "The best SEO agencies in Houston report on leads and revenue, not just rankings and traffic.",
      "Avoid any agency that buys links or mass-produces thin pages; both violate Google's spam policies.",
    ],
    faqs: [
      { question: "Can a Houston SEO company guarantee first-page rankings?", answer: "No. Google's own guidance states that no one can guarantee a #1 ranking on Google. A trustworthy SEO company will commit to a clear plan, transparent work, and honest reporting instead." },
      { question: "How long does SEO take to work?", answer: "Google's guidance says SEO usually needs four months to a year to implement improvements and see potential benefit. Local businesses in less competitive niches often see early movement sooner, especially in Google Maps results." },
      { question: "Should I sign a long-term SEO contract?", answer: "Be cautious with long lock-ins. Month-to-month or short initial terms keep an agency accountable. Cardinal Consulting's SEO plans are month-to-month." },
      { question: "What's the difference between an SEO company and a digital marketing agency?", answer: "An SEO company focuses on organic search: technical health, content, local SEO, and authority. A digital marketing agency may also run paid ads, social media, and email. Many businesses use both, with SEO building long-term visibility and ads producing immediate leads." },
      { question: "How do I know if my SEO agency is doing a good job?", answer: "Look for steady growth in qualified organic traffic, map-pack visibility, calls, form fills, and booked revenue, plus a clear monthly report explaining what was done and why. Rankings alone are not enough." },
    ],
    content: {
      sections: [
        {
          heading: "Why choosing among SEO agencies in Houston is so confusing",
          body: `Search for "Houston SEO company" and you will find dozens of agencies with nearly identical promises: page one, more traffic, guaranteed results. Because most SEO work happens out of sight, it is genuinely hard for a business owner to tell a strong agency from a weak one until months, and thousands of dollars, have passed.

The good news is that Google itself publishes advice on hiring an SEO, and a handful of specific questions expose most of the difference. I lead SEO work for Cardinal Consulting, so I have a stake in this market; what follows is the checklist I would hand to a friend comparing agencies, including us.`,
        },
        {
          heading: "What Google itself says about hiring an SEO",
          body: `Google's "Do you need an SEO?" page is required reading before you talk to any agency. It explains that a good SEO can help by reviewing your content and structure, giving technical advice, developing content, and running campaigns, and it lists questions you should ask. It also warns against agencies that promise rankings, are secretive about their methods, or send unsolicited emails offering instant results.

Just as important, Google sets expectations on timing: in most cases, it says, an SEO will need four months to a year to implement improvements and see potential benefit. Any agency promising dramatic results in weeks is either working in an uncompetitive niche or telling you what you want to hear.`,
          highlight: "Google's guidance is blunt: no one can guarantee a #1 ranking on Google. Treat any guarantee as a red flag.",
        },
        {
          heading: "What a Houston SEO company should actually do",
          body: "Strong SEO is not one tactic. It is five workstreams running together, and a good agency can explain how each one applies to your business:",
          visual: {
            kind: "steps",
            title: "The five workstreams of effective SEO",
            items: [
              { title: "Technical SEO", body: "Making sure Google can crawl, render, and index your pages quickly: site speed, structure, redirects, sitemaps, and structured data." },
              { title: "Keyword strategy and on-page SEO", body: "Matching each page to the searches your buyers actually type, then writing titles, headings, and content that answer them well." },
              { title: "Local SEO", body: "Your Google Business Profile, reviews, consistent business listings, and service pages, which together drive map-pack and \"near me\" visibility. See our [Houston local SEO guide](/blog/houston-local-seo-guide)." },
              { title: "Authority", body: "Earning links and mentions from reputable, relevant sites through useful content, partnerships, and local PR, never by buying links." },
              { title: "Measurement", body: "Tracking calls, forms, and revenue from organic search, so decisions are based on business results rather than vanity metrics." },
            ],
          },
        },
        {
          heading: "Green flags and red flags",
          body: "These signals show up early, usually in the first proposal or sales call:",
          visual: {
            kind: "flags",
            title: "How to read an SEO proposal",
            green: [
              "They audit your site and competitors before quoting",
              "They explain the strategy in plain English and show what they will do each month",
              "Reporting connects rankings to calls, leads, and revenue",
              "You keep ownership of all content, accounts, and data",
              "Month-to-month terms or a short initial commitment",
            ],
            red: [
              "Guaranteed rankings or \"#1 on Google in 30 days\"",
              "Secret methods they will not explain",
              "Packages of hundreds of cheap links",
              "Dozens of near-identical city pages with your keywords swapped in",
              "Reports that show only rankings for terms nobody searches",
            ],
          },
        },
        {
          heading: "The SEO agency vetting scorecard",
          body: `Score each agency out of 10 on the factors below and multiply by the weight. Transparency carries the most weight because it predicts everything else: an agency that explains its work clearly is far less likely to cut corners that put your site at risk. Link schemes and doorway pages are explicitly called out in Google's spam policies, and the penalties land on your site, not the agency's.`,
          visual: {
            kind: "bars",
            title: "Suggested weighting for comparing SEO agencies",
            caption: "The author's recommended weighting. Multi-location businesses may want to weight local SEO capability higher.",
            items: [
              { label: "Transparency of strategy and methods", value: 25, display: "25%", highlight: true },
              { label: "Relevant results and references", value: 20, display: "20%" },
              { label: "Technical depth", value: 20, display: "20%" },
              { label: "Local SEO capability", value: 15, display: "15%" },
              { label: "Reporting tied to leads and revenue", value: 10, display: "10%" },
              { label: "Contract flexibility", value: 10, display: "10%" },
            ],
          },
        },
        {
          heading: "Ten questions to ask every Houston SEO agency",
          body: "Ask each agency the same questions and compare the answers side by side:",
          bullets: [
            "What did your audit find on our site, and what would you fix first?",
            "Which keywords would you target for us, and why those?",
            "What will you do in the first 90 days, month by month?",
            "How do you earn links, and can you show examples?",
            "How will you improve our Google Business Profile and reviews?",
            "What will the monthly report show, and how does it connect to leads?",
            "Who will actually do the work, and is any of it outsourced?",
            "Can I speak with a current client in a similar industry?",
            "Who owns the content and accounts if we part ways?",
            "What are the contract terms and cancellation notice?",
          ],
        },
        {
          heading: "How long SEO really takes",
          body: "Here is a realistic shape for the first year of a well-run SEO engagement for a Houston business. Exact timing depends on your competition and starting point:",
          visual: {
            kind: "timeline",
            title: "A realistic first year of SEO",
            caption: "Illustrative, based on Google's guidance that SEO usually needs four months to a year to show benefit.",
            items: [
              { when: "Month 1", title: "Audit and fix", body: "Technical audit, tracking, Google Business Profile cleanup, and quick wins on existing pages." },
              { when: "Months 2–3", title: "Build the foundation", body: "Service pages and content mapped to buyer searches, listings cleaned up, review requests running." },
              { when: "Months 4–6", title: "Early momentum", body: "Map-pack and long-tail rankings improve; first measurable lift in calls and forms." },
              { when: "Months 6–12", title: "Compounding", body: "Authority grows, competitive terms move, and organic leads become a dependable channel." },
            ],
          },
        },
        {
          heading: "Why local SEO matters more in Houston than in most cities",
          body: `Houston covers more than 600 square miles, and Google weighs distance heavily in local results. A searcher in Katy and a searcher in Clear Lake typing the same "near me" query can see completely different businesses. That makes your Google Business Profile, reviews, and location-relevant service pages unusually important here, and it is why a strong Houston SEO company treats local SEO as a core workstream rather than an add-on.

Our [Houston local SEO guide](/blog/houston-local-seo-guide) walks through how Google ranks map results and a 90-day plan to improve yours.`,
        },
        {
          heading: "What SEO costs, and how we work",
          body: `SEO pricing varies more than almost any other marketing service, which is why we wrote a separate guide to [how much SEO costs in Houston](/blog/how-much-does-seo-cost-houston). For reference, Cardinal's [SEO plans](/services/seo-analytics) start at $1,500 per month, run month-to-month, and include Google Business Profile optimization, technical audits, on-page SEO, and a monthly report showing rankings, traffic, and leads.

Whoever you choose, insist on the same things we hold ourselves to: a clear plan, honest timelines, methods that follow Google's guidelines, and reporting you can connect to revenue.`,
        },
      ],
      cta: "Want a second opinion on an SEO proposal, or a free audit of where your site stands? Send it over and we'll reply within 24 hours.",
    },
  },

  // 4 ── seo cost houston ─────────────────────────────────────────────
  {
    slug: "how-much-does-seo-cost-houston",
    seoTitle: "How Much Does SEO Cost in Houston? (2027 Pricing Guide)",
    title: "How Much Does SEO Cost in Houston? An Honest 2027 Pricing Guide",
    seoDescription: "What Houston SEO services cost, how agencies price them, what each budget buys, and how to tell whether an SEO retainer is paying for itself.",
    excerpt: "SEO pricing is one of the least transparent corners of marketing. Here are real numbers, the four ways agencies charge, what moves the price, and a simple formula to work out whether SEO will pay for itself.",
    category: "SEO & Local Search",
    pillar: "seo",
    priority: 4,
    author: AUTHOR,
    date: DATE,
    readTime: "10 min read",
    featured: false,
    keywords: ["SEO cost Houston", "how much does SEO cost", "Houston SEO pricing", "SEO services Houston", "monthly SEO cost", "local SEO cost", "affordable SEO Houston"],
    relatedService: "/services/seo-analytics",
    cover: { kicker: "What SEO really costs in Houston", motif: "bars" },
    sources: [SRC.doINeedSeo, SRC.spam, SRC.starter],
    takeaways: [
      "Most Houston businesses pay for SEO as a monthly retainer; the right budget depends on how competitive your searches are.",
      "Cardinal's plans run $1,500, $2,500, and $4,000 per month, month-to-month, as a published reference point.",
      "Very cheap SEO often relies on tactics that break Google's spam policies, and the penalty lands on your site.",
      "Work out the value of one new customer first; it tells you what SEO is worth to your business.",
    ],
    faqs: [
      { question: "Is $500 a month enough for SEO in Houston?", answer: "It can cover a narrow task, such as managing your Google Business Profile or a handful of fixes. It rarely covers competitive, ongoing SEO in a market as large as Houston, where content, technical work, and authority building all take sustained effort." },
      { question: "Do SEO prices include content writing?", answer: "It varies. Some agencies include a set number of articles or pages each month; others bill content separately. Cardinal's SEO Growth plan includes four blog posts a month, and SEO Domination includes eight long-form articles." },
      { question: "How long before SEO pays for itself?", answer: "Google's guidance says SEO usually needs four months to a year to show benefit. Local businesses in less competitive niches often see map-pack gains earlier; competitive industries take longer." },
      { question: "Can I do SEO myself?", answer: "Yes, especially the basics. Google's free SEO Starter Guide is a good place to start, and keeping your Google Business Profile complete and asking every customer for a review will take you a long way. Hire help when the competition or the technical work outgrows your time." },
    ],
    content: {
      sections: [
        {
          heading: "The short answer",
          body: `Most Houston businesses pay for SEO as a monthly retainer, and credible ongoing programs typically run from the low thousands of dollars per month upward, depending on how competitive the searches are and how much content and authority building is involved. One-time audits and projects are priced separately.

Pricing in this industry is notoriously opaque, so here are our own numbers as a reference point. All three plans are month-to-month, and you can see everything included on our [SEO services page](/services/seo-analytics).`,
          visual: {
            kind: "bars",
            title: "Cardinal Consulting SEO plans (per month)",
            caption: "Published prices. Foundation suits single-market companies; Growth suits businesses ready to outrank competitors; Domination suits multi-location businesses.",
            items: [
              { label: "SEO Foundation", value: 1500, display: "$1,500" },
              { label: "SEO Growth", value: 2500, display: "$2,500", highlight: true },
              { label: "SEO Domination", value: 4000, display: "$4,000" },
            ],
          },
        },
        {
          heading: "The four ways SEO is priced",
          body: "Agencies charge in four main ways. Each one shifts risk differently between you and the agency:",
          visual: {
            kind: "compare",
            title: "SEO pricing models compared",
            columns: ["Monthly retainer", "Project or audit", "Hourly", "Performance-based"],
            rows: [
              { label: "Predictable budget", values: [true, true, false, false] },
              { label: "Ongoing improvement", values: [true, false, null, true] },
              { label: "Best for", values: ["Most businesses", "A one-time fix", "Advice and training", "Rarely recommended"] },
              { label: "Main risk", values: ["Paying for activity", "No follow-through", "Open-ended hours", "Chasing easy terms"] },
            ],
            caption: "Performance-based deals sound safe, but they often reward rankings for low-value keywords or encourage risky shortcuts.",
          },
        },
        {
          heading: "What drives the price up or down",
          body: "Two businesses can need very different SEO budgets. These factors move the number most:",
          bullets: [
            "Competition: ranking for \"Houston personal injury lawyer\" takes far more work than ranking for a niche B2B service",
            "Number of locations and service areas you want to rank in",
            "The size and technical health of your current website",
            "How much new content is needed, and who writes it",
            "Whether the plan includes link building and digital PR",
            "How much reporting, strategy time, and communication you want",
          ],
        },
        {
          heading: "What each level of investment typically covers",
          body: `To make the numbers concrete, here is what our three plans include. Use it as a checklist when comparing quotes from other Houston SEO agencies; a lower price often means some of these items are missing.

Foundation ($1,500 per month) covers Google Business Profile optimization, on-page SEO for up to 10 pages a month, local citation building, technical audits, and a monthly rankings, traffic, and leads report. Growth ($2,500 per month) adds four blog posts a month, link building, competitor gap analysis, expanded schema markup, and strategy calls every two weeks. Domination ($4,000 per month) adds eight long-form articles a month, PR and digital outreach, multi-location SEO, Core Web Vitals monitoring, and weekly reporting.`,
        },
        {
          heading: "The cheap SEO trap",
          body: `Very low-priced SEO has to make the math work somehow, and it usually does it with automation: bulk links from low-quality sites, spun articles, or hundreds of near-identical location pages. Google's spam policies explicitly cover link schemes, scaled low-value content, and doorway pages, and sites that rely on them can lose rankings or be removed from results.

The real cost of cheap SEO is not the monthly fee. It is the months spent recovering afterward.`,
          highlight: "If an SEO offer sounds too cheap to be real work, it usually is. Ask exactly what gets done each month, and by whom.",
        },
        {
          heading: "How to calculate whether SEO will pay for itself",
          body: "You do not need a complex model. Work backward from what one new customer is worth to you. Here is a hypothetical example for a Houston home-services company:",
          visual: {
            kind: "steps",
            title: "A simple SEO return calculation (hypothetical numbers)",
            items: [
              { title: "Value of a new customer", body: "Average first-year revenue of $4,000, with 50% gross margin, gives $2,000 of profit per customer." },
              { title: "Your close rate", body: "If you win 1 in 4 qualified leads, each lead is worth $500 in profit." },
              { title: "The breakeven point", body: "A $2,500 monthly SEO plan pays for itself at 5 qualified organic leads a month." },
              { title: "Track it", body: "Measure calls, forms, and bookings from organic search, then compare against the breakeven every month." },
            ],
          },
        },
        {
          heading: "SEO or Google Ads: where should the budget go?",
          body: `Paid ads produce leads the day they start and stop the day you stop paying. SEO is slower to build but compounds: rankings you earn keep producing leads without a per-click cost. Most growing Houston businesses use both, leaning on ads for immediate demand while SEO builds a channel they own.

If you want to run both together, our [digital marketing team](/services/digital-marketing) manages Google Ads alongside SEO so the two share data: the search terms that convert in ads tell you which pages to build for organic search.`,
        },
        {
          heading: "Before you sign an SEO contract",
          body: `Get the monthly deliverables in writing, confirm you own all content and accounts, check the cancellation terms, and ask how results will be reported. Our guide to [choosing a Houston SEO company](/blog/how-to-choose-an-seo-company-in-houston) includes the full list of questions to ask and the red flags to watch for.`,
        },
      ],
      cta: "Want to know what SEO would realistically cost for your business? We'll audit your site and competitors for free and send a clear, itemized plan.",
    },
  },

  // 5 ── houston local seo / map pack ─────────────────────────────────
  {
    slug: "houston-local-seo-guide",
    seoTitle: "Houston Local SEO: How to Rank in the Google Map Pack",
    title: "Houston Local SEO: How to Rank in the Google Map Pack and \"Near Me\" Searches",
    seoDescription: "A step-by-step Houston local SEO playbook: how Google ranks map results, why distance matters in a city this big, and a 90-day plan to win \"near me\" searches.",
    excerpt: "In a city spread across more than 600 square miles, the business that shows up in Google's map pack wins the call. Here is how Google ranks local results, and a 90-day plan to put your Houston business on the map.",
    category: "SEO & Local Search",
    pillar: "seo",
    priority: 5,
    author: AUTHOR,
    date: DATE,
    readTime: "13 min read",
    featured: true,
    keywords: ["local SEO Houston", "Houston local SEO", "Google Maps ranking Houston", "near me SEO", "map pack ranking", "Google Business Profile Houston", "Houston SEO company"],
    relatedService: "/services/seo-analytics",
    cover: { kicker: "Win Houston's map pack", motif: "pins" },
    sources: [SRC.localRank, SRC.gbpGuidelines, SRC.spam, SRC.census, SRC.helpful],
    takeaways: [
      "Google ranks local results on three factors: relevance, distance, and prominence.",
      "You cannot change where a searcher is standing, so win on relevance (complete profile, strong service pages) and prominence (reviews, links, mentions).",
      "Never stuff keywords into your business name or create thin pages for every suburb; both break Google's rules.",
      "A focused 90-day plan beats random tactics: fix the profile, build service pages, clean up listings, then earn reviews and links.",
    ],
    faqs: [
      { question: "How long does local SEO take in Houston?", answer: "Profile and listing fixes can show up in map results within weeks. Competitive categories, such as legal or home services in central Houston, usually take several months of steady work on reviews, content, and links." },
      { question: "Do I need a Houston address to rank in Google Maps?", answer: "You need a real business location or a defined service area. Google's guidelines allow service-area businesses that visit customers to hide their address and list the areas they serve instead. Virtual offices and mailboxes that are not staffed are not allowed." },
      { question: "Should I create a page for every Houston suburb?", answer: "Only when each page offers genuinely useful, specific information for that area. Mass-produced pages with the city name swapped in are treated as doorway pages under Google's spam policies and can hurt your whole site." },
      { question: "Do Google Business Profile posts help rankings?", answer: "Posts keep your profile current and give searchers more reasons to choose you, which helps conversions. Their direct effect on ranking is debated; completeness, reviews, and relevance matter more." },
      { question: "Does saying \"near me\" on my website help?", answer: "Not much. Google already knows where the searcher is. Focus on clearly describing your services and the areas you serve, keeping your profile complete, and earning reviews." },
    ],
    content: {
      sections: [
        {
          heading: "Why local SEO is different in Houston",
          body: `Houston is the fourth most populous city in the country and covers more than 600 square miles, before you count Katy, Sugar Land, The Woodlands, Pearland, and the rest of the metro. That sprawl changes how local search works. When someone types "plumber near me" or "web design company Houston," Google weighs how far each business is from that searcher, so the results in Cypress can look nothing like the results in Clear Lake.

For a Houston business, that means local SEO is not one ranking to win. It is a set of neighborhood-level battles, and the businesses that win most of them have done the fundamentals more thoroughly than their competitors.`,
        },
        {
          heading: "How Google ranks local results",
          body: `Google states that local results are based primarily on three factors: relevance, distance, and prominence. Understanding them tells you where to spend your effort.`,
          visual: {
            kind: "triad",
            title: "Google's three local ranking factors",
            center: "Map pack",
            caption: "Source: Google Business Profile Help, \"Tips to improve your local ranking on Google.\"",
            items: [
              { title: "Relevance", body: "How well your profile and website match what the person searched for." },
              { title: "Distance", body: "How far your business is from the searcher, or from the location in their search." },
              { title: "Prominence", body: "How well known your business is: reviews, links, articles, and listings across the web." },
            ],
          },
          highlight: "You cannot control where a searcher is standing. You can control relevance and prominence, and that is where every hour of local SEO should go.",
        },
        {
          heading: "Step 1: Make your Google Business Profile complete and accurate",
          body: `Your Google Business Profile is the single most important local SEO asset you have. Choose the most specific primary category that describes your business, add relevant secondary categories, list every service, set accurate hours (including holidays), upload real photos, and write a description that explains who you serve. Our [Google Business Profile guide for Houston businesses](/blog/google-business-profile-guide-houston) covers each field in detail.

Follow Google's guidelines strictly. Your profile name must match your real-world business name; adding keywords or locations to it ("Best Roofing Houston Katy Sugar Land") violates the rules and can get your profile suspended.`,
        },
        {
          heading: "Step 2: Build service pages Google can match",
          body: `Relevance comes from your website as much as your profile. Every core service deserves its own page that explains what you do, who it is for, what it costs or how it is priced, and the areas you serve, written for people rather than search engines. Link your profile to the most relevant page, and link your service pages to each other where it helps the reader.

Resist the temptation to create a near-identical page for every suburb. Google's spam policies call these doorway pages. One genuinely useful page per service, with real local detail, will outperform fifty thin ones. Our own [Houston web design page](/houston-web-design) is an example of the approach: one strong page that names the neighborhoods and suburbs we serve.`,
        },
        {
          heading: "Step 3: Keep your name, address, and phone consistent everywhere",
          body: "Google cross-checks your business information across the web. Inconsistent names, old addresses, or tracking phone numbers scattered across directories weaken trust in your listing. Pick one exact format and use it everywhere:",
          bullets: [
            "Google Business Profile and your website footer",
            "Apple Business Connect and Bing Places",
            "Yelp, the Better Business Bureau, and Facebook",
            "Industry directories that matter in your field",
            "Local organizations such as chambers of commerce and professional associations",
          ],
        },
        {
          heading: "Step 4: Earn reviews the right way",
          body: `Reviews are one of the clearest prominence signals, and they are what searchers read before they call. Ask every satisfied customer, make it easy with a direct review link, and reply to every review, good or bad, with a specific, professional response.

Never buy reviews, offer incentives for positive ones, or filter out unhappy customers before asking. Google's policies prohibit fake engagement, and reviews that look manipulated can be removed along with the rankings they supported.`,
        },
        {
          heading: "Step 5: Earn local links and mentions",
          body: `Prominence also comes from being talked about. The most effective local links usually come from real-world relationships: sponsoring a youth sports team or community event, joining industry and business associations, partnering with complementary businesses, and offering expert commentary to Houston media. Each one is a signal that your business is an established part of the community.`,
        },
        {
          heading: "A 90-day Houston local SEO plan",
          body: "Put the steps in order and local SEO becomes manageable. This is the sequence we follow:",
          visual: {
            kind: "timeline",
            title: "Your first 90 days",
            items: [
              { when: "Days 1–14", title: "Fix the foundation", body: "Claim and complete your Google Business Profile, fix categories and hours, and set up call and form tracking." },
              { when: "Days 15–45", title: "Build relevance", body: "Create or improve one strong page per core service and link your profile to the right pages." },
              { when: "Days 46–75", title: "Clean up listings", body: "Make your name, address, and phone consistent across major directories and remove duplicates." },
              { when: "Days 76–90", title: "Build prominence", body: "Launch a steady review request process and start one or two local partnership or PR efforts." },
            ],
          },
        },
        {
          heading: "Measuring what matters",
          body: `Rankings move around from street to street, so measure outcomes instead. Your Google Business Profile shows calls, direction requests, and website clicks; Google Search Console shows which searches bring people to your site; and call and form tracking connects all of it to real leads. Review those numbers monthly and you will know whether your local SEO is working long before rankings settle.

If you would rather have a team handle it, our [Houston SEO services](/services/seo-analytics) include Google Business Profile optimization, local citation building, technical audits, and monthly reporting on rankings, traffic, and leads.`,
        },
      ],
      cta: "Want to know why a competitor outranks you in the map pack? We'll compare your profile and site against theirs for free and send you the gaps.",
    },
  },

  // 6 ── website redesign seo ─────────────────────────────────────────
  {
    slug: "website-redesign-seo-checklist",
    seoTitle: "Website Redesign Without Losing SEO: The Checklist",
    title: "How to Redesign Your Website Without Losing Your Google Rankings",
    seoDescription: "The redesign SEO checklist we use for Houston businesses: URL mapping, 301 redirects, content parity, Core Web Vitals, and the first 30 days after launch.",
    excerpt: "A new website should bring in more business, not less. Yet redesigns are one of the most common reasons rankings collapse overnight. Here is the step-by-step checklist we use to relaunch sites without losing a single position.",
    category: "Websites & Costs",
    pillar: "websites",
    priority: 6,
    author: AUTHOR,
    date: DATE,
    readTime: "11 min read",
    featured: false,
    keywords: ["website redesign Houston", "website redesign SEO", "redesign without losing SEO", "website migration checklist", "301 redirects", "Houston web design", "website relaunch checklist"],
    relatedService: "/houston-web-design",
    cover: { kicker: "Redesign without losing rankings", motif: "flow" },
    sources: [SRC.siteMove, SRC.redirects, SRC.vitals, SRC.google53, SRC.deloitte],
    takeaways: [
      "Benchmark rankings, traffic, and conversions before the redesign starts, or you will not know what changed.",
      "Map every old URL to its closest new page and use permanent (301) redirects.",
      "Keep the content, titles, and internal links that already earn traffic.",
      "Watch Search Console daily for the first weeks after launch and fix errors immediately.",
    ],
    faqs: [
      { question: "Will I lose rankings when I redesign my website?", answer: "Not if the migration is planned. Most ranking losses come from changed URLs without redirects, removed content, or technical mistakes such as leaving a noindex tag in place. A careful redirect map and launch checklist prevent them." },
      { question: "How long should 301 redirects stay in place?", answer: "Google recommends keeping redirects in place for as long as possible, and generally at least one year. In practice, keep them permanently; they cost almost nothing to maintain." },
      { question: "Should I change my URLs during a redesign?", answer: "Only when the new structure is clearly better for visitors. Every changed URL needs a redirect, and even well-redirected sites can see temporary fluctuations while Google processes the changes." },
      { question: "Do I need to tell Google about my redesign?", answer: "Submit your updated sitemap in Google Search Console and monitor the indexing reports. Google's Change of Address tool is only needed when you move to a new domain." },
    ],
    content: {
      sections: [
        {
          heading: "Why redesigns quietly destroy rankings",
          body: `A redesign changes far more than how a site looks. URLs get renamed, pages get merged or deleted, internal links break, content gets trimmed for a cleaner layout, and sometimes a "do not index" setting from the staging site goes live by accident. Google sees a different website and has to reassess it, and if the pages that earned your rankings have disappeared, the rankings go with them.

None of this is inevitable. Google publishes detailed guidance on moving a site with URL changes, and following a disciplined checklist keeps the value you have built while the new design does its job.`,
        },
        {
          heading: "Before you touch the design: benchmark everything",
          body: "You cannot protect what you have not measured. Capture these before any work begins:",
          bullets: [
            "Your top pages and search queries from Google Search Console for the last 12 months",
            "Conversions by page from your analytics: calls, forms, bookings, and sales",
            "A full crawl of the current site listing every URL, title, and meta description",
            "The pages that external sites link to most",
            "Current Core Web Vitals and page speed scores",
          ],
        },
        {
          heading: "Map every old URL to its new home",
          body: `The redirect map is the most important document in any redesign. List every URL on the current site, decide where each one should go on the new site, and use permanent (301) redirects so visitors and search engines land on the closest equivalent page. Google treats permanent redirects as a strong signal that the new URL should replace the old one in search results.

Redirect to the most relevant page, not the homepage. Sending every old URL to the homepage throws away the relevance each page had built.`,
          visual: {
            kind: "compare",
            title: "Example redirect map",
            caption: "Illustrative URLs. Every row on the old site gets a deliberate decision.",
            columns: ["New URL", "Action"],
            rows: [
              { label: "/web-design.html", values: ["/services/web-development", "301 redirect"] },
              { label: "/houston-seo-services", values: ["/services/seo-analytics", "301 redirect"] },
              { label: "/blog/2019-website-tips", values: ["/blog/website-maintenance-checklist", "301 to closest"] },
              { label: "/contact-us", values: ["/contact", "301 redirect"] },
              { label: "/summer-promo-2021", values: ["(none)", "Retire (410)"] },
            ],
          },
        },
        {
          heading: "Keep the content that earns traffic",
          body: `Design teams often want shorter pages. Before cutting anything, check which pages and sections bring in search traffic and leads. Keep the substance of those pages, along with their titles, headings, internal links, and structured data, even if the layout changes completely.

When we rebuilt our own site, we consolidated dozens of overlapping pages into one strong page per topic and 301-redirected every old URL to its new home. Consolidation can strengthen rankings, but only when each redirect points somewhere genuinely relevant.`,
        },
        {
          heading: "Design for speed and Core Web Vitals",
          body: `A redesign is the best chance you will get to make your site fast, and speed affects both rankings and revenue. Google found that 53% of mobile visits are abandoned when a page takes longer than three seconds to load, and a Deloitte study for Google measured an 8.4% lift in retail conversions from a 0.1-second improvement in mobile speed.`,
          visual: {
            kind: "stats",
            title: "Why speed belongs in the redesign brief",
            items: [
              { value: "53%", label: "of mobile visits are abandoned when a page takes over 3 seconds to load (Google)" },
              { value: "8.4%", label: "lift in retail conversions from a 0.1-second faster mobile site (Deloitte for Google)" },
              { value: "≤ 2.5s", label: "Google's \"good\" threshold for Largest Contentful Paint (web.dev)" },
            ],
          },
        },
        {
          heading: "The pre-launch checklist",
          body: "Run through every item on the staging site, then again on launch day:",
          bullets: [
            "Every redirect in the map is live and tested, with no chains or loops",
            "The staging \"noindex\" setting and password protection are removed at launch",
            "robots.txt allows crawling of the pages you want indexed",
            "Canonical tags point to the correct, final URLs",
            "An updated XML sitemap is ready to submit",
            "Titles, meta descriptions, and headings are carried over or improved",
            "Structured data validates without errors",
            "Forms, call tracking, and analytics fire correctly",
            "Pages work on phones, tablets, and with a keyboard and screen reader",
          ],
        },
        {
          heading: "Launch day and the 30 days after",
          body: "The work is not finished at launch. Most problems show up in the first few weeks, and catching them quickly is the difference between a blip and a slump:",
          visual: {
            kind: "timeline",
            title: "After launch",
            items: [
              { when: "Launch day", title: "Verify and submit", body: "Crawl the live site, spot-check redirects, submit the sitemap in Search Console, and test every form." },
              { when: "Week 1", title: "Watch daily", body: "Check Search Console coverage and 404 reports daily and fix anything broken immediately." },
              { when: "Weeks 2–4", title: "Compare", body: "Compare rankings, traffic, and conversions against your benchmark, page by page." },
              { when: "Day 30", title: "Review", body: "Document what changed, fix stragglers, and plan the next round of content improvements." },
            ],
          },
        },
        {
          heading: "When a redesign is worth it",
          body: `Not every site needs a rebuild. Sometimes faster hosting, better content, and a few conversion fixes deliver more for less. A redesign usually makes sense when your site is slow on phones, hard for your team to update, no longer reflects what you sell, fails accessibility basics, or simply does not produce leads.

If you are weighing it up, our [Houston web design team](/houston-web-design) can review your current site and tell you honestly whether a redesign, a refresh, or a [maintenance plan](/services/website-maintenance) is the better investment. Every redesign we build includes a full redirect map and launch checklist as standard. See examples in [our portfolio](/portfolio).`,
        },
      ],
      cta: "Planning a redesign? Get a free pre-redesign SEO review: we'll benchmark your rankings and flag the pages you can't afford to lose.",
    },
  },
];
