// Service explainers, part 1: Build & Advise (web development, mobile apps, AI & automation,
// technical consulting, website care). Published 2026-11-01. Same editorial rules as
// blog-data.ts: every statistic cites a checkable source; Cardinal's prices come from
// services-catalog.ts; worked examples use clearly hypothetical numbers.
import type { BlogArticle } from "./blog-data";

const AUTHOR = "Hunain Qureshi";
const DATE = "2026-11-01";

const SRC = {
  vitals: { label: "web.dev — Web Vitals (Core Web Vitals thresholds)", url: "https://web.dev/articles/vitals" },
  google53: { label: "Google, The Need for Mobile Speed (via Marketing Dive)", url: "https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/" },
  deloitte: { label: "Deloitte & Google — Milliseconds Make Millions (web.dev case study)", url: "https://web.dev/case-studies/milliseconds-make-millions" },
  wcag: { label: "W3C — Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" },
  owasp: { label: "OWASP — Top 10 Web Application Security Risks", url: "https://owasp.org/www-project-top-ten/" },
  sensorTower: { label: "Sensor Tower — State of Mobile 2025", url: "https://sensortower.com/blog/2025-state-of-mobile-consumers-usd150-billion-spent-on-mobile-highlights" },
  appleReview: { label: "Apple — App Review Guidelines", url: "https://developer.apple.com/app-store/review/guidelines/" },
  mckinseyAI: { label: "McKinsey — The State of AI in 2025", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
  flexera: { label: "Flexera — 2025 State of the Cloud Report (press release)", url: "https://www.flexera.com/about-us/press-center/new-flexera-report-finds-84-percent-of-organizations-struggle-to-manage-cloud-spend" },
  ibm: { label: "IBM — Cost of a Data Breach Report 2025", url: "https://www.ibm.com/reports/data-breach" },
  patchstack: { label: "Patchstack — State of WordPress Security in 2026", url: "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" },
  helpful: { label: "Google Search Central — Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
};

export const serviceGuidesBuild: BlogArticle[] = [
  // 1 ── Web Development ─────────────────────────────────────────────────
  {
    slug: "custom-web-development-explained",
    seoTitle: "Custom Web Development, Explained: What You Pay For",
    title: "Custom Web Development, Explained: What You're Actually Paying For",
    seoDescription: "What custom web development includes, how a site goes from brief to launch, what it costs in Houston, and how to tell a real build from a dressed-up template.",
    excerpt: "\"Custom website\" is the most abused phrase in our industry. Here is what a genuinely custom build involves, step by step, what each part costs, and how to tell the difference before you pay for it.",
    category: "Websites & Costs",
    pillar: "websites",
    priority: 1,
    author: AUTHOR,
    date: DATE,
    readTime: "11 min read",
    featured: true,
    keywords: ["custom web development", "web development services", "custom website development Houston", "web development company Houston", "what is custom web development", "website development process", "custom website cost"],
    relatedService: "/services/web-development",
    cover: { kicker: "Custom web development, explained", motif: "flow" },
    sources: [SRC.vitals, SRC.google53, SRC.deloitte, SRC.wcag, SRC.owasp],
    takeaways: [
      "A custom build starts with how your business makes money, not with a theme. If the first deliverable is a template preview, it is not custom.",
      "The work you cannot see (speed, structure, security, analytics) decides whether the site produces leads. Ask to see it on a recent client site.",
      "Our published starting prices are $3,500 for a marketing website, $6,500 for a business growth website, and $15,000+ for a custom platform, each fixed in writing.",
      "You should own everything at the end: domain, content, design files, and code. Get it in the contract.",
    ],
    faqs: [
      { question: "What is the difference between a custom website and a template?", answer: "A template is a pre-made design you pour your content into; the layout, page structure, and features were decided before anyone knew your business. A custom website is designed and coded around your customers, your sales process, and the systems you already use. The visible difference is design; the invisible difference is speed, structure, and how well it converts." },
      { question: "How much does custom web development cost?", answer: "In Houston, custom marketing websites typically run from the mid four figures, and platforms with portals, integrations, or e-commerce start in the low five figures. Cardinal's published starting prices are $3,500, $6,500, and $15,000+, and every project is quoted at a fixed price in writing before work starts." },
      { question: "How long does custom web development take?", answer: "A focused marketing website usually takes four to six weeks from kickoff to launch, a business growth website six to ten weeks, and a custom platform three months or more depending on integrations. Content readiness is the most common cause of delay." },
      { question: "Do I need a custom platform or just a website?", answer: "If your site mainly needs to inform and generate inquiries, a marketing or growth website is the right fit. You need a platform when the site runs part of the business: customer logins, dashboards, ordering, scheduling, or integrations with your internal systems." },
    ],
    content: {
      sections: [
        {
          heading: "Why \"custom\" has stopped meaning anything",
          body: `I have reviewed hundreds of website proposals over the years, both as the company writing them and as the person a client forwards a competitor's quote to. The word "custom" appears in almost all of them. In most, it means a purchased theme with your logo and colors applied. That is not a scandal (templates have their place), but it is not what you are being charged for when the word is in the headline.

Genuine custom web development means the structure, the design, and the code are created for one business, starting from how that business wins customers. This article walks through what that involves at [Cardinal Consulting](/services/web-development), what each part costs, and the questions that reveal which kind of "custom" you are being offered.`,
        },
        {
          heading: "The four layers of a custom website",
          body: `Clients see the design. The design is one of four layers, and the other three decide whether the site produces revenue. Think of it the way you would think of a building: the facade matters, but the foundation, the wiring, and the plumbing are what you live with.`,
          visual: {
            kind: "steps",
            title: "What a custom build actually consists of",
            caption: "Each layer is scoped separately in our proposals, so you can see what you are paying for.",
            items: [
              { title: "Strategy and structure", body: "Which pages exist, what each one must achieve, and how a visitor moves from arrival to call, booking, or purchase. This is where most template sites quietly fail: the structure was decided before anyone knew your business." },
              { title: "Design", body: "Layouts, typography, color, imagery, and interaction designed for your customers and brand. Mobile first, because that is where most local traffic arrives." },
              { title: "Engineering", body: "Clean, fast code; a content management system your team can use; integrations with your CRM, booking, or payment tools; security hardening; and analytics that track real outcomes." },
              { title: "Launch and growth", body: "Redirects that protect existing rankings, performance testing, search console setup, and a plan for who keeps the site updated, fast, and secure afterward." },
            ],
          },
        },
        {
          heading: "The engineering you cannot see, and why it is most of the value",
          body: `Two sites can look identical and perform completely differently. Google publishes "good" thresholds for its Core Web Vitals, and the research on speed is unambiguous: Google found that 53% of mobile visits are abandoned when a page takes more than three seconds to load, and a Deloitte study across 37 retail brands found that a 0.1-second improvement in mobile speed lifted conversions by 8.4%.

Speed is not a setting you switch on afterward. It comes from decisions made during the build: how images are delivered, how much code the browser has to download, how the page is structured so the important content appears first. The same is true of accessibility (we build to the W3C's WCAG 2.2 standard) and security (we design against the OWASP Top 10). Ask any company to run three of its recent client sites through [PageSpeed Insights](https://pagespeed.web.dev/) on a call with you. It takes two minutes and tells you more than any portfolio page.`,
          visual: {
            kind: "stats",
            title: "Google's Core Web Vitals: the \"good\" thresholds",
            caption: "Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Source: web.dev. We test every build against these before launch.",
            items: [
              { value: "≤ 2.5s", label: "Largest Contentful Paint" },
              { value: "≤ 200ms", label: "Interaction to Next Paint" },
              { value: "≤ 0.1", label: "Cumulative Layout Shift" },
            ],
          },
        },
        {
          heading: "How a project runs, from first call to launch",
          body: `Every engagement at Cardinal follows the same four steps, because a predictable process is what makes a fixed price possible. The first two cost you nothing: a free consultation to understand your business, then a written plan with the price and timeline before any work starts.`,
          visual: {
            kind: "timeline",
            title: "A typical business growth website, week by week",
            caption: "Illustrative schedule for a 20–30 page site with integrations. Smaller marketing sites run faster; platforms run longer.",
            items: [
              { when: "Week 0", title: "Free consultation and written plan", body: "Goals, audience, sales process, systems to integrate. You receive a fixed price and a timeline in writing." },
              { when: "Weeks 1–2", title: "Structure and content plan", body: "Sitemap, page goals, conversion paths, and a content checklist so writing starts early (the usual cause of delay)." },
              { when: "Weeks 2–4", title: "Design", body: "Homepage and key templates designed mobile-first, reviewed with you, then the remaining pages." },
              { when: "Weeks 4–7", title: "Engineering and integrations", body: "Build, CMS setup, CRM/booking/payment integrations, analytics, security hardening, performance tuning." },
              { when: "Week 8", title: "Launch", body: "Redirect map, final testing on real devices, search console and analytics verification, go-live, and training for your team." },
            ],
          },
        },
        {
          heading: "What it costs, and what each tier is for",
          body: `Our prices are published because I think you should be able to compare them before you ever speak to us. Each tier is a fixed price agreed in writing; the full list of what is included is on our [pricing page](/pricing). For a wider market view, including the ongoing costs most quotes leave out, read [how much a website costs in Houston](/blog/how-much-does-a-website-cost-houston).`,
          visual: {
            kind: "compare",
            title: "Cardinal's web development tiers",
            caption: "Published starting prices, one-time. Every project is quoted as a fixed price after a free consultation.",
            columns: ["Marketing Website — $3,500", "Business Growth Website — $6,500", "Custom Platform — $15,000+"],
            highlight: 1,
            rows: [
              { label: "Best for", values: ["Credible lead-generation site", "Sites that sell, book, and integrate", "Platforms that run part of the business"] },
              { label: "Custom-designed pages", values: ["Up to 10", "Up to 30", "30+ with custom features"] },
              { label: "Mobile-first, fast build with SEO foundation", values: [true, true, true] },
              { label: "CRM, booking, and payment integrations", values: [false, true, true] },
              { label: "Customer portals and secure logins", values: [false, true, true] },
              { label: "AI features (assistants, smart forms)", values: [false, true, true] },
              { label: "Custom backend, APIs, and dashboards", values: [false, false, true] },
              { label: "Security audit and compliance review", values: [false, false, true] },
            ],
          },
        },
        {
          heading: "How to tell a real custom build from a dressed-up template",
          body: `You do not need to read code to spot the difference. These are the signals I would look for in any proposal, including ours.`,
          visual: {
            kind: "flags",
            title: "Signals in a web development proposal",
            green: [
              "The first conversation is about how you win customers, not about themes",
              "A written sitemap and page goals before any design is shown",
              "Recent client sites that pass Core Web Vitals when you test them",
              "Named integrations (your CRM, booking tool, payment processor) in the scope",
              "You own the domain, content, design files, and code, in writing",
              "A redirect plan if you have an existing site",
            ],
            red: [
              "A design preview on the first call, before discovery",
              "\"Unlimited pages\" or \"unlimited revisions\" with no scope document",
              "Hosting you cannot leave, or a site you cannot export",
              "No mention of speed, accessibility, or analytics anywhere",
              "A price with no itemization of what it covers",
              "The company's own site is slow on your phone",
            ],
          },
        },
        {
          heading: "What this looks like in practice",
          body: `The clearest way to understand custom development is to look at work with a job to do. For [CWX](/portfolio/cwx), an AI consultancy serving regulated industries, the structure had to present four practices and proprietary accelerators to enterprise buyers with corporate-level SEO built in. For [AXIOMIO](/portfolio/axiomio), an AWS Advanced Tier Partner, the site had to make a technical managed-operations offer legible to non-technical decision makers. Neither could have come out of a theme, because the structure was the product.

If you are weighing a build for your own business, our guides to [choosing a web design company in Houston](/blog/how-to-choose-a-web-design-company-in-houston) and [hiring a Houston web developer](/blog/hiring-a-web-developer-in-houston) cover the decision from the buyer's side. You can also see more of our work in the [portfolio](/portfolio).`,
          highlight: "The question that matters is not \"is it custom?\" but \"what was it designed to make happen, and can you show me it happening?\"",
        },
      ],
      cta: "Thinking about a new website or platform? Tell us what it needs to achieve and we'll reply within 24 hours with a written plan and a fixed price, whether or not you hire us.",
    },
  },

  // 2 ── Mobile Apps ─────────────────────────────────────────────────────
  {
    slug: "how-a-mobile-app-gets-built",
    seoTitle: "How a Mobile App Gets Built: Idea to App Store",
    title: "How a Mobile App Gets Built: From Idea to the App Store, Step by Step",
    seoDescription: "The mobile app development process explained by a Houston app developer: validating the idea, prototyping, MVP, store approval, and what each stage costs.",
    excerpt: "Most app ideas fail before they reach a phone, and the reason is usually the order the work was done in. Here is the process we use to take an app from idea to the App Store, with the cost and the decision at each stage.",
    category: "Industry Guides",
    pillar: "industry",
    priority: 2,
    author: AUTHOR,
    date: DATE,
    readTime: "11 min read",
    featured: false,
    keywords: ["mobile app development process", "how to build a mobile app", "app development Houston", "mobile app development company Houston", "iOS app development Houston", "Android app development Houston", "MVP app development", "app development cost"],
    relatedService: "/services/mobile-apps",
    cover: { kicker: "From idea to the App Store", motif: "flow" },
    sources: [SRC.sensorTower, SRC.appleReview, SRC.wcag],
    takeaways: [
      "Validate before you build. A $5,000 prototype tested with real users is the cheapest way to learn whether a $40,000 app should exist.",
      "Ship a focused first version (an MVP) to paying users, then let their behavior decide what gets built next.",
      "One codebase for iPhone and Android cuts cost and time for most business apps without sacrificing quality.",
      "Plan for the store review, the backend, and the first year of updates from the start; they are part of the product, not afterthoughts.",
    ],
    faqs: [
      { question: "How much does it cost to build a mobile app?", answer: "It depends on scope more than any other factor. Cardinal's published starting prices are $5,000 for a Product Blueprint and Prototype Sprint, $15,000+ for an MVP app, and $40,000+ for a full-featured or enterprise app. Each is quoted as a fixed price in writing after a free consultation." },
      { question: "How long does it take to build an app?", answer: "A prototype sprint takes about two weeks. An MVP typically launches in eight to twelve weeks from kickoff. Full-featured apps with admin dashboards, subscriptions, and offline sync take longer, often four to six months." },
      { question: "Should I build for iPhone, Android, or both?", answer: "For most business apps, both, from a single cross-platform codebase. It covers your whole customer base at roughly the cost of one native app. Fully native development still makes sense for apps that depend on demanding graphics or deep hardware access." },
      { question: "Do I need a backend for my app?", answer: "Almost always. User accounts, data that syncs between devices, push notifications, payments, and analytics all need a server side. The backend is usually a third or more of the build and should be in every quote you compare." },
    ],
    content: {
      sections: [
        {
          heading: "Why the order of the work matters more than the idea",
          body: `People spend an enormous amount of time in apps. Sensor Tower's State of Mobile report counted 4.2 trillion hours in mobile apps worldwide in 2024, about three and a half hours per user per day, and $150 billion in consumer spending. That is the opportunity. The risk is that app development is expensive, and most of the expensive mistakes are made in the first month, when a team starts building features before anyone has confirmed that customers want them.

I have been building software since I was a teenager hosting game servers, and the lesson that has held up across every project is the same: build the smallest thing that can teach you something, learn, then build the next thing. This is the process we use for [mobile apps at Cardinal](/services/mobile-apps), and it is structured so that every stage ends with a decision you can make with real information.`,
        },
        {
          heading: "The process, stage by stage",
          body: `Each stage has a deliverable and a decision. You can stop after any of them without losing what you have paid for; the prototype, the research, and the architecture all carry forward into the build.`,
          visual: {
            kind: "steps",
            title: "From idea to launch",
            caption: "The four stages of an app project at Cardinal. The first two are where ideas get tested cheaply.",
            items: [
              { title: "Blueprint and prototype (about 2 weeks)", body: "A product strategy workshop to prioritize features, user flows and information architecture, a clickable high-fidelity prototype, and testing with five real users. You end with a validated concept, a technical architecture, and a build estimate." },
              { title: "MVP build (8–12 weeks)", body: "The core features, production-ready, for iPhone and Android from one codebase. Backend, user accounts, API, push notifications, and analytics. The goal is paying users as early as possible." },
              { title: "Store submission and launch", body: "App Store and Google Play listings, screenshots, privacy disclosures, and review submission. Apple's review guidelines are strict about privacy, in-app purchases, and completeness; building to them from the start avoids rejections." },
              { title: "Learn and extend", body: "Analytics show what users actually do. The roadmap for version two comes from that, not from the original wish list. Full-featured builds add admin dashboards, subscriptions, SSO, and offline sync as the business needs them." },
            ],
          },
        },
        {
          heading: "The prototype sprint: the cheapest way to be wrong",
          body: `The single most valuable thing we do in app development is put a realistic, clickable prototype in front of five real users before any code is written. It costs $5,000 and takes about two weeks. We have watched clients discover in that fortnight that the feature they thought was the product was ignored, and that a small secondary feature was what users kept returning to. Learning that before the build rather than after it is the difference between a $5,000 lesson and a $40,000 one.

The sprint produces more than a prototype. You also get the technical architecture and a build estimate, which means the MVP quote that follows is based on something concrete rather than a conversation.`,
          highlight: "If a company proposes to start coding your app in week one, ask what evidence they have that users want it. \"You told us\" is not evidence.",
        },
        {
          heading: "What an MVP includes (and what it leaves out on purpose)",
          body: `MVP stands for minimum viable product, and the operative word is viable: a real, production-quality app that does its core job well, not a demo. What it leaves out is everything that does not help you learn whether the core job is valuable. Subscriptions, admin dashboards, social features, and offline mode can all come later, built on evidence.`,
          visual: {
            kind: "compare",
            title: "Cardinal's app development tiers",
            caption: "Published starting prices. Each tier includes everything in the one before it.",
            columns: ["Blueprint & Prototype — $5,000", "MVP App — $15,000+", "Full-Featured & Enterprise — $40,000+"],
            highlight: 1,
            rows: [
              { label: "Best for", values: ["De-risking the idea", "A focused first release", "Business-critical products"] },
              { label: "Clickable prototype tested with 5 real users", values: [true, true, true] },
              { label: "Technical architecture and build estimate", values: [true, true, true] },
              { label: "iPhone and Android from one codebase", values: [false, true, true] },
              { label: "Backend, user accounts, and API", values: [false, true, true] },
              { label: "Push notifications and analytics", values: [false, true, true] },
              { label: "Admin dashboard, in-app purchases, subscriptions", values: [false, false, true] },
              { label: "Single sign-on and offline sync", values: [false, false, true] },
              { label: "Security audit and penetration testing", values: [false, false, true] },
            ],
          },
        },
        {
          heading: "The parts of an app budget people forget",
          body: `When quotes differ wildly, it is usually because one of them left out something the other included. Before you compare prices, make sure every proposal covers the items below. If one does not, ask what it costs to add; the answer often closes the gap.`,
          bullets: [
            "Backend and hosting: the server side that stores data, handles accounts, and sends notifications, plus its monthly running cost",
            "Store accounts and review: Apple and Google developer accounts, listing assets, privacy disclosures, and time for review cycles",
            "Design for both platforms: iOS and Android have different conventions that users notice",
            "Analytics and crash reporting from day one, so version two is based on behavior",
            "Accessibility (we design to WCAG 2.2) so the app works with screen readers and larger text",
            "Security: authentication, data encryption, and for enterprise apps a penetration test before launch",
            "The first year of updates: operating system releases break things, and an app with no maintenance plan ages fast",
          ],
        },
        {
          heading: "Choosing the right partner",
          body: `An app is a long relationship; the launch is the start of it, not the end. Our guide to [choosing an app development company](/blog/how-to-choose-an-app-development-company) covers the questions to ask, and if the app will sit alongside a website or customer portal, our [web development](/services/web-development) and [UX/UI design](/services/ux-ui) teams work with the same process. If you are still deciding whether the idea deserves a build at all, the prototype sprint is designed to answer exactly that question.`,
        },
      ],
      cta: "Have an app idea, or an existing app that needs help? Tell us what it should do for your customers and we'll reply within 24 hours with an honest recommendation and a fixed price.",
    },
  },

  // 3 ── AI & Automation ─────────────────────────────────────────────────
  {
    slug: "ai-and-automation-for-business-where-it-pays-off",
    seoTitle: "AI & Automation for Business: Where It Pays Off",
    title: "AI and Automation for Business: Where It Pays Off, Where It Doesn't, and How to Start",
    seoDescription: "A practical guide to AI and workflow automation for businesses: which processes pay back fastest, what a build costs, the risks to manage, and how to start safely.",
    excerpt: "Most companies now use AI somewhere, but only about a third have scaled it beyond pilots. The gap is not the technology; it is choosing the right work to automate. Here is how we decide, what it costs, and what to avoid.",
    category: "AI & Technology",
    pillar: "ai-technology",
    priority: 3,
    author: AUTHOR,
    date: DATE,
    readTime: "10 min read",
    featured: true,
    keywords: ["AI automation for business", "business process automation", "AI automation services", "AI automation Houston", "workflow automation", "AI assistant for business", "AI consulting Houston", "automate business processes"],
    relatedService: "/services/ai-automation",
    cover: { kicker: "AI & automation: where it pays off", motif: "spark" },
    sources: [SRC.mckinseyAI, SRC.ibm],
    takeaways: [
      "The best automation candidates are high-volume, rule-based, and already measured: lead follow-up, data entry, document handling, reporting.",
      "Start with an assessment that puts a number on hours and dollars saved before you fund a build. Ours starts at $1,500.",
      "An AI assistant needs guardrails: what it may say, what data it may see, and when it hands off to a person.",
      "Measure from day one. Automation that cannot show its own ROI gets switched off within a year.",
    ],
    faqs: [
      { question: "What business processes are best to automate with AI?", answer: "Work that is frequent, repetitive, rule-based, and already tracked: responding to and qualifying leads, data entry between systems, routing and summarizing documents, scheduling, and recurring reports. Our article on business processes to automate with AI ranks the most common candidates." },
      { question: "How much does AI automation cost?", answer: "Cardinal's published prices are $1,500+ for an AI Opportunity Assessment, $4,000–$12,000 per automation build, and $15,000+ for a multi-department AI program with governance. Ongoing costs are mainly usage fees for the AI models and any software the automation connects to." },
      { question: "Is it safe to use AI with customer data?", answer: "It can be, with the right design: data minimization, access controls, vendor agreements that prohibit training on your data, and a review of any regulatory obligations such as HIPAA. We include a risk, privacy, and compliance review in every assessment, and you should involve your own counsel for regulated data." },
      { question: "Will AI replace my staff?", answer: "In our experience it removes the repetitive part of jobs rather than the jobs. The teams that benefit most redirect saved hours into work that needs judgment: sales conversations, client care, and quality." },
    ],
    content: {
      sections: [
        {
          heading: "The gap between using AI and getting value from it",
          body: `McKinsey's State of AI survey found that 88% of organizations now use AI regularly in at least one business function, up from 78% a year earlier. The same survey found that only about one in three has started scaling AI across the enterprise; most are still running pilots. That gap is where most of the wasted money in this field sits: tools adopted because they were available, not because a specific process was costing hours.

I run the [AI and automation practice at Cardinal](/services/ai-automation), and the pattern in successful projects is boring in the best way. Pick a process that is frequent, rule-based, and already measured. Automate that. Prove the saving. Then pick the next one. This article walks through how we choose, what it costs, and the safeguards that keep an assistant from becoming a liability.`,
        },
        {
          heading: "What makes a process a good candidate",
          body: `Not every task should be automated, and the wrong first project can sour a company on the whole idea. We score candidates on three questions, and the ones that score well on all three are where we start.`,
          visual: {
            kind: "triad",
            title: "The three tests for an automation candidate",
            caption: "A process that passes all three usually pays back within months. One that fails any of them is a research project, not an automation.",
            center: "Automate first",
            items: [
              { title: "Frequent", body: "It happens daily or weekly, in volume. Automating a monthly task saves little." },
              { title: "Rule-based", body: "A capable person could write down how to do it. Judgment calls stay with people; AI handles the predictable path and hands off the rest." },
              { title: "Measured", body: "You already know how long it takes and what it costs. Without a baseline you cannot prove the saving." },
            ],
          },
        },
        {
          heading: "The automations that pay back fastest",
          body: `Across the businesses we work with in Houston and beyond, the same handful of processes show up again and again as the fastest wins. Our companion article on [business processes to automate with AI](/blog/business-processes-to-automate-with-ai) goes deeper on each; here is the short list.`,
          bullets: [
            "Lead response and qualification: a new inquiry gets an immediate, accurate reply, is scored against your criteria, and lands in your CRM with the right owner notified",
            "Data entry between systems: orders, forms, and documents moved between your website, CRM, accounting, and operations tools without retyping",
            "Document intake: contracts, invoices, applications, and intake forms read, summarized, and routed to the right person",
            "Customer and employee assistants: an assistant on your website or inside your tools that answers from your own documentation and hands off when it is unsure (see our guide to an [AI assistant for your website](/blog/ai-assistant-for-your-website))",
            "Reporting: the weekly numbers assembled and summarized automatically from the systems that hold them",
            "Scheduling and reminders: appointments, follow-ups, and renewals handled end to end",
          ],
        },
        {
          heading: "A worked example (with made-up numbers)",
          body: `Suppose a service business receives 300 inquiries a month and a coordinator spends an average of 12 minutes on each: reading it, replying, logging it, and chasing missing details. That is 60 hours a month. If an automation handles the first reply, the logging, and the chasing, and the coordinator reviews only the 20% that need judgment, the time drops to roughly 12 hours. At a fully loaded cost of $35 an hour, the saving is about $1,680 a month, or roughly $20,000 a year, against a build in the $4,000–$12,000 range. The numbers are illustrative, but the shape is typical: the payback on a well-chosen first automation is measured in months.

The part people underestimate is the second-order effect. Faster first replies win more of the inquiries. That is usually worth more than the hours.`,
          visual: {
            kind: "bars",
            title: "Hours per month in the example above",
            caption: "Hypothetical figures for illustration. Your assessment puts real numbers on your own processes.",
            items: [
              { label: "Before: manual handling of 300 inquiries", value: 60, display: "60 hrs" },
              { label: "After: automation plus human review of exceptions", value: 12, display: "12 hrs", highlight: true },
            ],
          },
        },
        {
          heading: "Guardrails: what keeps an assistant from becoming a risk",
          body: `AI systems can be confidently wrong, and they can see whatever data you connect them to. IBM's 2025 Cost of a Data Breach report puts the average cost of a breach for U.S. organizations at $10.22 million, and the same report tracks the growing share of incidents involving AI tools and unsanctioned "shadow AI". The answer is not to avoid AI; it is to design the controls in from the start. Every assistant and automation we build has the following, and so should any you commission.`,
          bullets: [
            "A defined scope: what the assistant may answer, what it must refuse, and when it hands off to a person",
            "Data minimization: it sees only the data the task needs, and vendor agreements prohibit training on it",
            "Access controls and audit logs, so you can see what was done and by whom",
            "Testing with real data and real users before launch, including the awkward cases",
            "A compliance review for regulated data (health, financial, legal), with your counsel involved",
            "Usage, quality, and cost dashboards, so the thing that was meant to save money is visibly doing so",
          ],
        },
        {
          heading: "How we structure an engagement",
          body: `We deliberately make the first step small. The AI Opportunity Assessment ($1,500+) reviews your workflows and data, ranks the automation opportunities, estimates time and cost savings, and includes the risk and compliance review. You get a build plan and an executive readout, and you can take that plan anywhere. A single Automation Build runs $4,000–$12,000 and includes integration with your existing systems, testing, and training for your team. An AI Program ($15,000+) is for rolling out multiple assistants and automations across departments with a usage policy, governance, security review, and ROI dashboards. The full breakdown is on our [pricing page](/pricing).

If the bigger question is your overall technology direction, including whether your systems are ready to be automated at all, that is the job of our [technical consulting](/services/technical-consulting) practice, and the two often run together.`,
        },
      ],
      cta: "Curious where AI would actually pay off in your business? Describe the work that eats your team's week and we'll reply within 24 hours with an honest view, whether or not it needs a build.",
    },
  },

  // 4 ── Technical Consulting ────────────────────────────────────────────
  {
    slug: "when-to-hire-a-technical-consultant",
    seoTitle: "When to Hire a Technical Consultant (and What You Get)",
    title: "When to Hire a Technical Consultant, and What a Good One Actually Delivers",
    seoDescription: "The situations that call for a technical consultant or fractional CTO, what an assessment includes, what it costs, and how to judge whether the advice is independent.",
    excerpt: "Most technology mistakes are expensive because they were made confidently and alone. Here are the moments when an outside senior view pays for itself many times over, and what you should expect to receive for the fee.",
    category: "AI & Technology",
    pillar: "ai-technology",
    priority: 4,
    author: AUTHOR,
    date: DATE,
    readTime: "10 min read",
    featured: false,
    keywords: ["technical consultant", "technical consulting services", "fractional CTO Houston", "IT consulting Houston", "technology consulting Houston", "architecture review", "cloud cost assessment", "when to hire a CTO"],
    relatedService: "/services/technical-consulting",
    cover: { kicker: "When to hire a technical consultant", motif: "shield" },
    sources: [SRC.flexera, SRC.ibm, SRC.owasp],
    takeaways: [
      "Hire outside technical judgment before a big decision, not after it: a platform choice, a rebuild, a vendor contract, a cloud migration, or a security scare.",
      "A good assessment ends in a written, prioritized roadmap you own, not a proposal to buy more from the consultant.",
      "A fractional CTO gives you executive-level technology leadership for a fraction of a full-time hire, which is the right fit for most companies under a few hundred people.",
      "Independence is the product. Ask how the consultant is paid and whether they resell what they recommend.",
    ],
    faqs: [
      { question: "What does a technical consultant do?", answer: "They give you independent, senior technical judgment: reviewing your architecture, code, cloud setup, or security; evaluating vendors and proposals; planning roadmaps and budgets; and, as a fractional CTO, leading your technology function part-time. The output is decisions you can make with confidence and a written plan to execute." },
      { question: "How much does technical consulting cost?", answer: "Cardinal's published prices are $2,500+ for a Technical Assessment of one platform or decision, $3,000+ per month for an Advisory Retainer, and $6,000+ per month for Fractional CTO leadership. Every engagement starts with a free consultation and a written scope." },
      { question: "What is the difference between a fractional CTO and a consultant?", answer: "A consultant typically answers a defined question and hands you a report. A fractional CTO takes ongoing responsibility for your technology direction: leading the team and vendors, setting the roadmap, owning security, and reporting to leadership or the board, on a part-time basis. Our guide to what a fractional CTO is goes into detail." },
      { question: "How do I know the advice is independent?", answer: "Ask how the consultant is paid and whether they earn anything from the vendors or platforms they recommend. Ask for the written assessment to include options they would not be hired to build. A consultant who only ever recommends more of their own services is a salesperson." },
    ],
    content: {
      sections: [
        {
          heading: "The moments that call for an outside view",
          body: `Technology decisions have a particular failure mode: they are made by people who are confident, busy, and have never made that exact decision before. The result is rarely a disaster on day one. It is a platform that cannot scale, a cloud bill that quietly doubles, a vendor contract with no exit, or a security gap nobody knew to look for. Flexera's State of the Cloud report found 84% of organizations name managing cloud spend as their top cloud challenge, and IBM puts the average U.S. data breach at $10.22 million. Both are, at root, decisions made without the right information.

I lead the [technical consulting practice at Cardinal](/services/technical-consulting), and the engagements that deliver the most value share one feature: the client called before the decision, not after. These are the situations where that call pays for itself.`,
          bullets: [
            "You are choosing a platform, vendor, or architecture that will be expensive to change later",
            "A rebuild or migration is on the table and you want to know whether it is necessary",
            "Cloud costs, outages, or performance problems keep growing and nobody can explain why",
            "You have had a security incident or scare, or a customer has asked for your security posture in writing",
            "You are hiring developers or an agency and have no technical person to evaluate them",
            "Investors, a board, or an acquirer want a technical view of what you have built",
            "You need CTO-level leadership but cannot justify a full-time executive",
          ],
        },
        {
          heading: "What a technical assessment includes",
          body: `An assessment is a bounded piece of work with a written answer at the end. Ours starts at $2,500 and follows the same shape whether the question is "should we rebuild this platform?", "why does our cloud bill look like this?", or "are we secure enough to sign this enterprise customer?"`,
          visual: {
            kind: "steps",
            title: "Anatomy of a Technical Assessment",
            caption: "Every assessment ends in a document you own and can act on with any team, including one that is not us.",
            items: [
              { title: "Stakeholder interviews", body: "Leadership, the people who run the systems, and the people who suffer from them. The business goals come first; technology is judged against them." },
              { title: "Architecture, code, or cloud review", body: "Hands-on review of what exists: structure, dependencies, performance, cost drivers, and how it will behave under growth." },
              { title: "Security and risk findings, ranked by severity", body: "Assessed against recognized frameworks such as the OWASP Top 10, with each finding rated so you know what to fix first." },
              { title: "Cost and performance recommendations", body: "Concrete changes with their expected effect: what to consolidate, what to retire, what to renegotiate." },
              { title: "Written report, prioritized roadmap, and executive readout", body: "A plain-language summary for leadership, a technical appendix for the team, and a sequenced plan with rough costs." },
            ],
          },
        },
        {
          heading: "Assessment, retainer, or fractional CTO?",
          body: `The right format depends on whether you have a question or a function to fill. A question gets an assessment. A team that needs a senior sounding board a few times a month gets a retainer. A company whose technology needs an owner gets a fractional CTO; our article on [what a fractional CTO is](/blog/what-is-a-fractional-cto) explains that role in depth.`,
          visual: {
            kind: "compare",
            title: "Cardinal's technical consulting formats",
            caption: "Published starting prices. Each format includes everything in the one before it.",
            columns: ["Technical Assessment — $2,500+", "Advisory Retainer — $3,000+/mo", "Fractional CTO — $6,000+/mo"],
            highlight: 2,
            rows: [
              { label: "Best for", values: ["One platform or decision", "Ongoing senior guidance", "Part-time executive leadership"] },
              { label: "Written report, roadmap, and executive readout", values: [true, true, true] },
              { label: "Security and risk findings ranked by severity", values: [true, true, true] },
              { label: "Monthly advisory hours and vendor decision support", values: [false, true, true] },
              { label: "Roadmap and budget planning", values: [false, true, true] },
              { label: "Technology leadership and team guidance", values: [false, false, true] },
              { label: "Hiring and vendor management", values: [false, false, true] },
              { label: "Board and investor technical reporting", values: [false, false, true] },
              { label: "Security program oversight", values: [false, false, true] },
            ],
          },
        },
        {
          heading: "How to tell independent advice from a sales process",
          body: `The value of consulting is the independence, so that is what you should test for. A few signals separate a consultant from a salesperson with a clipboard.`,
          visual: {
            kind: "flags",
            title: "Signals of a trustworthy technical consultant",
            green: [
              "Asks about business goals before looking at any technology",
              "Will put \"do nothing\" or \"keep what you have\" in writing when it is the right answer",
              "Discloses how they are paid and any vendor relationships",
              "Delivers a report you can hand to another team",
              "Ranks findings by severity instead of listing everything as urgent",
              "Has built and operated systems, not only reviewed them",
            ],
            red: [
              "Every recommendation is a service they also sell",
              "Recommends a full rebuild in the first meeting",
              "Cannot explain a finding in plain language",
              "Findings with no priority, cost, or expected effect",
              "Resells software or hosting they recommend without saying so",
              "No written deliverable, only meetings",
            ],
          },
        },
        {
          heading: "Where this connects to the rest of your technology",
          body: `Consulting is often the first step before something gets built. An assessment that finds your cloud spend out of control leads naturally into the fixes in our [cloud cost optimization guide](/blog/cloud-cost-optimization-guide). One that finds your systems ready for automation hands off to our [AI and automation](/services/ai-automation) practice. One that finds a platform worth keeping but neglected points to a [website care plan](/services/website-maintenance). And when a rebuild really is the answer, our [web development](/services/web-development) team works from the roadmap the assessment produced.

I would rather tell you that your existing platform is fine than sell you a new one. That is the whole point of the service, and it is why the assessment is priced to stand on its own.`,
          highlight: "The best outcome of an assessment is often a shorter list: fewer tools, fewer vendors, and one clear next step.",
        },
      ],
      cta: "Facing a technology decision you'd like an independent view on? Describe it in a few sentences and we'll reply within 24 hours with how we'd approach it and a fixed price for the assessment.",
    },
  },

  // 5 ── Website Care & Maintenance ──────────────────────────────────────
  {
    slug: "website-care-plans-explained",
    seoTitle: "Website Care Plans, Explained: What $299/mo Buys",
    title: "Website Care Plans, Explained: What $299 a Month Actually Buys You",
    seoDescription: "What a website maintenance plan includes, why unmaintained sites get slow and hacked, what care plans cost, and how to choose the right level for your business.",
    excerpt: "A website is not finished at launch; it is a system that decays without attention. Here is what a care plan actually does each month, what it protects you from, and how to pick the level your business needs.",
    category: "Websites & Costs",
    pillar: "websites",
    priority: 5,
    author: AUTHOR,
    date: DATE,
    readTime: "9 min read",
    featured: false,
    keywords: ["website maintenance plan", "website care plan", "website maintenance services", "website maintenance cost", "website maintenance Houston", "website support plan", "WordPress maintenance", "website security monitoring"],
    relatedService: "/services/website-maintenance",
    cover: { kicker: "Website care plans, explained", motif: "shield" },
    sources: [SRC.patchstack, SRC.google53, SRC.vitals],
    takeaways: [
      "Websites decay in three ways: software falls behind and gets exploited, pages get slower as content piles up, and nobody is watching when it goes down.",
      "Patchstack counted 11,334 new vulnerabilities in the WordPress ecosystem in 2025, most of them in plugins. Updates are not optional.",
      "Our care plans start at $299 a month and cover monitoring, backups, updates, security scanning, and content changes; higher tiers add speed monitoring and development hours.",
      "The right tier depends on how much your site earns and how often it changes, not on how big it is.",
    ],
    faqs: [
      { question: "What does a website maintenance plan include?", answer: "At minimum: uptime monitoring, regular backups, software and security updates, malware scanning and removal, and a set amount of time for content changes. Better plans add performance monitoring, analytics reviews, priority support, and development hours for improvements." },
      { question: "How much does website maintenance cost?", answer: "Cardinal's published care plans are $299 a month for Care Essentials, $499 for Care Plus, and $799 for Care Pro. Agency plans in general range from a couple of hundred dollars a month for monitoring and updates to over a thousand for plans that include ongoing development." },
      { question: "Do I need a maintenance plan if my site is on WordPress?", answer: "Especially then. WordPress powers a large share of the web, which makes it a constant target, and most vulnerabilities are in plugins that need regular updates. A plan that updates, backs up, and scans the site is the difference between a routine patch and a cleanup after a hack." },
      { question: "Can I maintain my website myself?", answer: "You can, if someone on your team will reliably apply updates, verify backups, watch uptime and speed, and respond when something breaks. In practice the task has no owner at most small businesses, which is why plans exist. Our website maintenance checklist lists everything that needs doing." },
    ],
    content: {
      sections: [
        {
          heading: "Why a website gets worse on its own",
          body: `Nobody launches a website planning to neglect it. It happens because the site works on launch day, and the things that go wrong afterward are invisible until they are expensive. Software behind the site releases security patches; a plugin goes unmaintained; a hosting change breaks a form that was quietly sending you leads; pages gain images and scripts until they are slow on phones; and one night the site goes down and nobody finds out until a customer mentions it.

Patchstack's State of WordPress Security report counted 11,334 new vulnerabilities in the WordPress ecosystem in 2025, up 42% in a year, most of them in plugins. Google's research found 53% of mobile visits are abandoned when a page takes more than three seconds. Those two numbers describe the two main ways a neglected site stops earning. [Website care at Cardinal](/services/website-maintenance) exists to make sure both are somebody's job.`,
        },
        {
          heading: "What a care plan actually does each month",
          body: `A care plan is not "we'll fix it if it breaks". It is a set of routines that run whether or not anything looks wrong, because by the time something looks wrong it usually already cost you something.`,
          visual: {
            kind: "steps",
            title: "A month on a Cardinal care plan",
            caption: "The routine on every plan. Higher tiers add speed monitoring, analytics reviews, and development time on top.",
            items: [
              { title: "Around the clock: uptime monitoring", body: "The site is checked continuously from outside. If it goes down, we know within minutes and act, usually before you or your customers notice." },
              { title: "Daily: backups", body: "A full copy of the site and its content stored off the server, so a bad update, a hack, or a hosting failure is an hour's restore rather than a rebuild." },
              { title: "Weekly: security scanning", body: "Malware and vulnerability scans against the current threat lists, with removal and hardening when anything is found." },
              { title: "Monthly: updates and content changes", body: "Software, plugins, and dependencies updated on a staging copy first, then live. Your included hours cover the text, image, and page changes you send us." },
              { title: "Monthly (Plus and Pro): speed and analytics", body: "Core Web Vitals checked against Google's thresholds, with fixes before rankings or conversions slip; a review of what the analytics say the site is doing for you." },
            ],
          },
        },
        {
          heading: "Choosing the right level",
          body: `The question is not how big the site is but how much it earns and how often it changes. A site that produces most of your leads deserves someone watching its speed and conversion rate, not only its uptime. A site that changes weekly needs more content hours than one that changes quarterly. The full comparison is on our [pricing page](/pricing).`,
          visual: {
            kind: "compare",
            title: "Cardinal's website care plans",
            caption: "Published monthly prices. Each plan includes everything in the one before it. Available for any website, not only ones we built.",
            columns: ["Care Essentials — $299/mo", "Care Plus — $499/mo", "Care Pro — $799/mo"],
            highlight: 1,
            rows: [
              { label: "Best for", values: ["Sites that must stay secure and online", "Sites that earn leads and must stay fast", "Sites that should improve every month"] },
              { label: "24/7 uptime monitoring and daily backups", values: [true, true, true] },
              { label: "Monthly updates and security scanning", values: [true, true, true] },
              { label: "Content updates included", values: ["1 hour/mo", "3 hours/mo", "6 hours/mo of development"] },
              { label: "Priority 24-hour support response", values: [false, true, true] },
              { label: "Core Web Vitals monitoring and monthly analytics review", values: [false, true, true] },
              { label: "Quarterly design refreshes", values: [false, true, true] },
              { label: "Conversion improvements and A/B testing", values: [false, false, true] },
              { label: "Dedicated account manager and quarterly strategy sessions", values: [false, false, true] },
            ],
          },
        },
        {
          heading: "What neglect costs, in a worked example",
          body: `Take a hypothetical service business whose website produces 40 leads a month, of which it closes 10 at an average value of $1,200. That site is worth $12,000 a month. If a broken form goes unnoticed for a week, that is roughly $3,000 of pipeline gone. If the site is hacked and down for three days while someone is found to clean it, it is more, plus the cleanup bill, plus the customers who saw a warning page. If it slowly becomes slow and conversion drops from 25% to 20%, that is $2,400 a month, every month, with no single event to point at.

None of those numbers are predictions about your business; they are the shape of the risk. Against them, $299 to $799 a month is not a cost center. It is insurance with a positive return.`,
          visual: {
            kind: "bars",
            title: "Monthly value at risk in the example above",
            caption: "Hypothetical figures for illustration only.",
            items: [
              { label: "Website's monthly contribution", value: 12000, display: "$12,000" },
              { label: "Lost pipeline from one week of a broken form", value: 3000, display: "$3,000" },
              { label: "Monthly loss from a 5-point conversion drop", value: 2400, display: "$2,400" },
              { label: "Care Plus plan", value: 499, display: "$499", highlight: true },
            ],
          },
        },
        {
          heading: "Questions to ask any maintenance provider",
          body: `Whether you choose us or someone else, the answers to these questions tell you whether a plan is real.`,
          bullets: [
            "How quickly will you know if my site goes down, and what happens then?",
            "Where are backups stored, how often are they taken, and when did you last test a restore?",
            "Are updates tested on a staging copy before they go live?",
            "What exactly counts as a \"content update\", and what happens if I need more hours one month?",
            "Do you monitor speed against Google's Core Web Vitals, or only uptime?",
            "Can I leave, and will I get a full copy of my site if I do?",
          ],
        },
        {
          heading: "Where care fits with everything else",
          body: `Care plans are the long tail of every project we build, and they are available for sites we did not build too; the plan starts with a site health check so we know what we are taking on. If the health check finds a site that is beyond patching, we say so, and the conversation becomes one about a [new build](/services/web-development) rather than a plan. For a do-it-yourself version of the routine, our [website maintenance checklist](/blog/website-maintenance-checklist) lists every task. And if the real problem is that the site is slow and losing rankings, the fix may belong to [SEO](/services/seo-analytics) as much as to maintenance; we will tell you which.`,
          highlight: "The best care plan is the one that makes website problems something you hear about from us, after they are fixed, instead of from a customer.",
        },
      ],
      cta: "Not sure who's looking after your website? Send us the address and we'll run a free health check and reply within 24 hours with what we found and which plan, if any, makes sense.",
    },
  },
];
