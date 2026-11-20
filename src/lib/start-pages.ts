import type { LucideIcon } from "lucide-react";
import {
  BarChart3, Bell, Bot, Brain, CalendarCheck, FileSearch, FileText, Gauge, Layers, Link2, LineChart, Lock,
  MapPin, Megaphone, MousePointerClick, Paintbrush, PenLine, Plug, Rocket, Search, ShieldCheck, Smartphone, Target, TestTube,
  Workflow,
} from "lucide-react";
import { HOUSTON_ENTITY } from "./site-schema";

/** Houston (Wikidata Q16555): every start page serves the Houston area first. */
const HOU = HOUSTON_ENTITY;

/**
 * "Start" landing pages: one per core service, built to convert visitors from ads, QR codes, email,
 * direct links and search.
 *
 * - Kept out of the main navigation, but indexed: they're in sitemap.xml and llms.txt, carry full
 *   structured data, and are linked from their service pages.
 * - To avoid competing with the service pages and /houston-web-design, each one targets "hiring" and
 *   "getting started" searches (e.g. "get a website built", "hire an SEO company") rather than the
 *   broad service terms those pages rank for.
 * - Prices, packages, case studies and research come from services-catalog.ts so they never drift.
 *   Everything here is page-specific copy: the pitch, the onboarding roadmap and getting-started FAQs.
 * - Ad links can add UTM tags (e.g. /start/website?utm_source=google&utm_campaign=web-design);
 *   the contact form records them with the lead.
 */

export interface StartStep {
  /** When it happens, e.g. "Today" or "Within 24 hours" */
  when: string;
  title: string;
  body: string;
  /** What the customer does at this step */
  yourPart: string;
}

export interface StartPage {
  slug: string;
  path: string;
  /** Slug in services-catalog.ts */
  service: string;
  seo: { title: string; description: string; keywords: string[] };
  /** The search phrase this page targets: shown as the pill at the start of the H1 */
  eyebrow: string;
  /** Wikidata-linked topics for the page's structured data (`about`) */
  about: { "@type": string; name: string; sameAs: string }[];
  headline: string;
  /** Phrase within the headline shown in red */
  accent: string;
  subhead: string;
  heroPoints: [string, string, string];
  pains: { title: string; body: string }[];
  /** Short line that follows the pains: the turn from problem to plan */
  turn: string;
  outcomes: { icon: LucideIcon; title: string; body: string }[];
  roadmap: StartStep[];
  roadmapIntro: string;
  prepare: string[];
  weHandle: string[];
  faqs: { question: string; answer: string }[];
  /** Label for the main call to action */
  cta: string;
}

/** Shared first two steps, so every page describes the same real intake process. */
const replyStep: StartStep = {
  when: "Within 24 hours",
  title: "A real person reaches out",
  body: "Someone on our team reads your request and contacts you by email, phone or text, whichever you chose, to book your free consultation. Mark it urgent and we reply the same business day.",
  yourPart: "Pick a time that suits you",
};

export const startPages: StartPage[] = [
  // ─────────────────────────────── Websites ───────────────────────────────
  {
    slug: "website",
    path: "/start/website",
    service: "web-development",
    seo: {
      title: "Get a Website Built in Houston | Free Quote, Fixed Price",
      description: "Ready to start your website? Get a free quote and a fixed price in writing for a custom, fast website from a Houston team. From $3,500, reply within 24 hours.",
      keywords: ["get a website built", "website design quote", "website quote Houston", "hire a web designer Houston", "custom website cost", "start a website project", "website design pricing Houston", "small business website Houston"],
    },
    eyebrow: "Get a website built in Houston",
    about: [{ "@type": "Thing", name: "Web design", sameAs: "https://www.wikidata.org/wiki/Q190637" }, HOU],
    headline: "A website that brings you customers, not just compliments",
    accent: "brings you customers",
    subhead:
      "Custom-designed, fast and built to turn visitors into calls, bookings and sales. You get a fixed price in writing before any work starts, and a senior team from the first call to launch.",
    heroPoints: ["Custom design, never a template", "Marketing sites typically live in 72 hours to 2 weeks", "Ready for Google and AI search from day one"],
    pains: [
      { title: "It looks older than your business", body: "Buyers judge credibility in seconds. If your site looks dated next to competitors, you lose the call before the conversation starts." },
      { title: "It gets visits, not leads", body: "Traffic without calls or form fills usually means an unclear offer, slow pages or a buried contact path. All of that is fixable." },
      { title: "Every update is a chore", body: "If changing a photo means emailing a developer and waiting a week, the site stops keeping up with your business." },
    ],
    turn: "A new website should fix all three, at a price you know before you commit.",
    outcomes: [
      { icon: MousePointerClick, title: "Built to convert", body: "Every page has one clear next step: call, book, buy or ask for a quote, so visitors know exactly what to do." },
      { icon: Paintbrush, title: "Designed for your brand", body: "Custom layouts built around your business and customers, so you stand apart instead of blending in." },
      { icon: Smartphone, title: "Fast on every phone", body: "Mobile-first and optimized for speed, because most visitors will see your site on a phone first." },
      { icon: Search, title: "Found on Google and AI search", body: "Technical SEO, structured data and clear content that search engines and AI assistants can read and cite." },
      { icon: PenLine, title: "Easy to update", body: "Change text, photos and products yourself, or have us do it for you." },
      { icon: Plug, title: "Connected to your tools", body: "Forms, booking, payments, CRM and email wired in, so every lead lands where your team works." },
    ],
    roadmapIntro: "No guesswork about what happens after you click. Here is the whole path from this page to a live website.",
    roadmap: [
      { when: "Today", title: "Tell us what you need", body: "Answer a few quick questions in the form. It takes about a minute, and there's no obligation.", yourPart: "About one minute" },
      replyStep,
      { when: "Your free consultation", title: "A strategy call, not a sales pitch", body: "We talk through your goals, customers, competitors and must-have features, and recommend the right package. Links to sites you like help a lot.", yourPart: "Share your goals and examples" },
      { when: "Before any work starts", title: "Your written plan and fixed price", body: "You receive the page list, features, timeline and a fixed price in writing. Once you approve it, the price is locked.", yourPart: "Review and approve" },
      { when: "Kickoff to launch", title: "Design, build, review, launch", body: "You review designs and a working preview at each milestone, with revision rounds included. We set up hosting and SSL, then launch and support you after go-live.", yourPart: "Give feedback at each milestone" },
    ],
    prepare: [
      "Your logo and brand colors, if you have them",
      "Two or three websites you like, and what you like about them",
      "A list of your services, products or locations",
      "Photos of your team, work or space",
      "Login details for your domain and current hosting",
      "Tools the site must connect to, such as booking, payments or a CRM",
    ],
    weHandle: [
      "Page plan and site structure",
      "Design, development and testing on phones, tablets and desktops",
      "Hosting setup, SSL and launch",
      "Google Analytics and Search Console",
      "Technical SEO and structured data",
      "30 to 90 days of post-launch support, depending on package",
    ],
    faqs: [
      { question: "How much will my website cost?", answer: "Marketing websites (up to 10 pages) start at $3,500. Business Growth websites (up to 30 pages, with integrations, portals, AI features or online sales) start at $6,500. Larger platforms start at $15,000. After your free consultation you get a written scope with a fixed price, so the number you approve is the number you pay." },
      { question: "How fast can my site go live?", answer: "Marketing websites typically take 72 hours to 2 weeks, and Business Growth websites 4 to 8 weeks. The biggest factor is how quickly content and feedback come together, so we give you a clear checklist up front." },
      { question: "My content isn't ready. Can we still start?", answer: "Yes. Most clients start without finished content. We give you a page-by-page outline so you know exactly what's needed, and we can include copywriting in your plan if you'd rather we write it." },
      { question: "How do payments work?", answer: "Projects are typically billed 50% at kickoff and 50% at launch. For projects over $5,000 we can split payments by milestone instead." },
      { question: "Will a redesign hurt my Google rankings?", answer: "Not when it's done carefully. We map every old page to its new address with permanent (301) redirects, keep the content that already ranks, and check Search Console after launch so your existing visibility carries over." },
      { question: "What happens after launch?", answer: "Every package includes post-launch support (30 days for Marketing Websites, 90 days for Business Growth). After that, optional care plans from $299 a month cover updates, backups, security and monitoring." },
    ],
    cta: "Get my website plan",
  },

  // ─────────────────────────────── Mobile apps ───────────────────────────────
  {
    slug: "app",
    path: "/start/app",
    service: "mobile-apps",
    seo: {
      title: "Hire an App Developer in Houston | Start with a Prototype",
      description: "Hire a Houston app development team for iPhone and Android. Start with a $5,000 Blueprint & Prototype Sprint, then build at a fixed price. Free consultation.",
      keywords: ["hire an app developer Houston", "app development cost", "how much does an app cost", "app prototype", "MVP app development", "iPhone app developer Houston", "Android app developer Houston", "app idea to launch"],
    },
    eyebrow: "Hire an app developer in Houston",
    about: [{ "@type": "Thing", name: "Mobile app", sameAs: "https://www.wikidata.org/wiki/Q620615" }, HOU],
    headline: "Turn your app idea into something people can download",
    accent: "people can download",
    subhead:
      "Start with a 2–3 week Blueprint & Prototype Sprint so you can see, test and price your app before committing to the full build. Then we design, build and launch it on the App Store and Google Play.",
    heroPoints: ["Clickable prototype in 2 to 3 weeks", "iPhone and Android from one codebase", "App Store and Google Play submission handled"],
    pains: [
      { title: "You have the idea, not the team", body: "Hiring designers, developers and a backend engineer before you've proven the idea is slow, expensive and risky." },
      { title: "Quotes are all over the map", body: "When one developer says $10,000 and another says $150,000, it's usually because nobody has defined what you're actually building yet." },
      { title: "A past developer left you stuck", body: "Half-finished apps, missing source code and silence. We see it often, and it's usually recoverable." },
    ],
    turn: "The fix is to define the app first, test it with real users, then build with a fixed price.",
    outcomes: [
      { icon: Brain, title: "A clear product plan", body: "A strategy workshop that turns your idea into prioritized features, user flows and a realistic first release." },
      { icon: Layers, title: "A prototype you can tap through", body: "A high-fidelity, clickable prototype tested with five real users, so you're investing in something people want." },
      { icon: Smartphone, title: "iPhone and Android", body: "One codebase for both platforms in most cases. That's faster and costs less, and we only recommend native when your app truly needs it." },
      { icon: Lock, title: "Secure from the start", body: "Secure login (including Face ID and fingerprint), encrypted data and OWASP mobile security guidelines." },
      { icon: Bell, title: "Accounts, notifications and analytics", body: "The backend, user accounts, API, push notifications and analytics that a real product needs." },
      { icon: Rocket, title: "Launched in the stores", body: "We prepare screenshots, listings and compliance documents, submit the app and handle Apple's and Google's reviews." },
    ],
    roadmapIntro: "Apps feel risky because the path is unclear. Here's exactly how we take you from idea to the app stores.",
    roadmap: [
      { when: "Today", title: "Tell us about your idea", body: "A few quick questions about the problem, your users and your timeline. Nothing is shared outside our team.", yourPart: "About one minute" },
      replyStep,
      { when: "Your free consultation", title: "Pressure-test the idea together", body: "We talk through who the app is for, the must-have features and the business model, and recommend whether to start with a Blueprint Sprint or go straight to an MVP.", yourPart: "Bring your idea and any sketches" },
      { when: "Weeks 1 to 3", title: "Blueprint & Prototype Sprint", body: "Workshop, user flows, a clickable prototype and testing with five real users. You finish with a technical plan and a fixed-price build proposal.", yourPart: "Join the workshop and review the prototype" },
      { when: "Build to launch", title: "Two-week sprints, then the app stores", body: "We build in two-week sprints with a demo for you after each one, test on real devices, submit to the stores and monitor the app after launch.", yourPart: "Watch the demos and steer priorities" },
    ],
    prepare: [
      "A short description of the problem the app solves",
      "Who will use it: customers, staff or both",
      "Apps you like (or competitors) and what they get right or wrong",
      "Any sketches, screenshots or notes, however rough",
      "Systems the app must connect to, such as your website, CRM or payments",
      "Your target launch date and budget range",
    ],
    weHandle: [
      "UX and interface design",
      "Backend, database and APIs",
      "Testing on real iPhone and Android devices",
      "App Store and Google Play listings and submission",
      "Crash monitoring and bug fixes after launch",
      "Help setting up your Apple and Google developer accounts",
    ],
    faqs: [
      { question: "How much does an app cost?", answer: "The Blueprint & Prototype Sprint is $5,000. MVP apps start at $15,000 and full-featured or enterprise apps at $40,000. The Sprint ends with a fixed-price proposal for the build, so you know the real cost before you commit to it." },
      { question: "How long will it take?", answer: "The Blueprint Sprint takes 2–3 weeks, an MVP usually 6–8 weeks, and full-featured apps 12–24 weeks. You'll see working progress every two weeks." },
      { question: "Do I need to be technical?", answer: "No. Most of our app clients are business owners and operators, not engineers. We explain every decision in plain English and recommend the simplest approach that will work." },
      { question: "Should I build for iPhone, Android or both?", answer: "Most businesses should build one app that runs on both. It's faster and costs less. We recommend a native build only when your app needs heavy device features like AR or advanced camera work." },
      { question: "Can you finish an app someone else started?", answer: "Yes. We review the existing code, tell you honestly what shape it's in, and recommend the best path: fix, extend or rebuild." },
      { question: "What happens after the app launches?", answer: "Every build includes post-launch support, from 30 days of bug fixes on an MVP to 3–12 months on full-featured apps. That covers crash monitoring, fixes and updates for new iOS and Android versions." },
    ],
    cta: "Plan my app",
  },

  // ─────────────────────────────── SEO ───────────────────────────────
  {
    slug: "seo",
    path: "/start/seo",
    service: "seo-analytics",
    seo: {
      title: "Hire an SEO Company in Houston | Month-to-Month Plans",
      description: "Hire a Houston SEO company that shows its work: technical fixes, Google Business Profile, content and links, with monthly reports. From $1,500/mo, no contract.",
      keywords: ["hire an SEO company Houston", "SEO services pricing", "SEO consultant Houston", "local SEO Houston", "Google Business Profile optimization", "month-to-month SEO", "SEO plans for small business", "map pack ranking"],
    },
    eyebrow: "Hire an SEO company in Houston",
    about: [{ "@type": "Thing", name: "Search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" }, HOU],
    headline: "Get found first when customers search for what you do",
    accent: "found first",
    subhead:
      "We fix what's holding your site back, optimize your Google Business Profile and build the content and authority that move you up, then show you the calls and leads in a plain-English report every month.",
    heroPoints: ["Month-to-month, no long-term contract", "Google Business Profile and map pack included", "Built for Google and AI search"],
    pains: [
      { title: "Competitors show up, you don't", body: "When buyers search for your service, they find the businesses above you. Most never scroll down." },
      { title: "You've paid for SEO before", body: "Vague reports, no clear work and no change in calls. It leaves people thinking SEO doesn't work. Usually it was never really done." },
      { title: "You don't know what's working", body: "Without tracking, you can't tell which searches bring customers, so you can't decide where to invest." },
    ],
    turn: "Good SEO is specific work you can see, measured in rankings, traffic and leads every month.",
    outcomes: [
      { icon: MapPin, title: "Map pack visibility", body: "A fully optimized Google Business Profile so you show up in map results and \"near me\" searches." },
      { icon: FileSearch, title: "Technical fixes first", body: "We find and fix the speed, indexing and structure issues that quietly hold your rankings back." },
      { icon: Target, title: "The right keywords", body: "Research into the searches your buyers actually type, mapped to the pages that should win them." },
      { icon: FileText, title: "Content that earns rankings", body: "Helpful service pages and articles written to answer real customer questions." },
      { icon: Link2, title: "Authority and links", body: "Citations, links and mentions from trusted sites, which tell Google and AI assistants you're a real, reputable business." },
      { icon: BarChart3, title: "Reports you'll actually read", body: "Rankings, traffic, calls and form leads from search, what we did this month and what's next, in plain English." },
    ],
    roadmapIntro: "SEO shouldn't be a black box. This is what your first month looks like, step by step.",
    roadmap: [
      { when: "Today", title: "Tell us where you want to rank", body: "Share your website, the services and areas that matter most, and who you're up against.", yourPart: "About one minute" },
      replyStep,
      { when: "Your free consultation", title: "Look at your search position together", body: "We review where you rank today, what your competitors are doing and which plan fits your market and goals.", yourPart: "Tell us which customers are most valuable" },
      { when: "Month one", title: "Audit, access and quick wins", body: "We audit your site and Google Business Profile, set up tracking for calls and leads, fix the most urgent technical issues and build your keyword roadmap.", yourPart: "Grant access to your site, Google Business Profile and Search Console" },
      { when: "Every month after", title: "Optimize, publish, report", body: "Ongoing on-page work, content and authority building, plus a monthly report on rankings, traffic and leads. Plans are month-to-month.", yourPart: "Read the report and share feedback" },
    ],
    prepare: [
      "Your website address",
      "The services and areas you most want to be found for",
      "Two or three competitors who rank above you",
      "Access to your Google Business Profile (we'll show you how to share it)",
      "Google Analytics and Search Console access, if they're set up",
      "Any past SEO reports or work, so nothing gets repeated",
    ],
    weHandle: [
      "Technical SEO audits and fixes",
      "Google Business Profile optimization",
      "Keyword research and page targeting",
      "Content and on-page optimization",
      "Local citations and link building",
      "Call and lead tracking with a monthly report",
    ],
    faqs: [
      { question: "How much does SEO cost?", answer: "Plans start at $1,500 a month (SEO Foundation), with SEO Growth at $2,500 and SEO Domination at $4,000 for multi-location or highly competitive markets. All plans are month-to-month." },
      { question: "How long until I see results?", answer: "Technical fixes can show results within weeks. Most clients see measurable improvement in 3–4 months and strong results at 6–12 months. SEO compounds, so the longer it runs, the stronger it gets." },
      { question: "Can you guarantee first-page rankings?", answer: "No honest SEO company can guarantee rankings, because Google decides them. What we commit to is specific, visible work every month and transparent reporting on rankings, traffic and leads." },
      { question: "Am I locked into a contract?", answer: "No. Every SEO plan is month-to-month. We earn your business every month with results." },
      { question: "Will you help me show up in AI answers like ChatGPT and Google AI Overviews?", answer: "We build the same foundations AI search draws on: clear, well-structured content, structured data, a consistent business profile across the web and reputable mentions. No one can guarantee placement in AI answers, but these are the signals they rely on." },
      { question: "Can SEO work alongside paid ads?", answer: "Yes, and they work best together. Ads bring traffic right away while SEO builds traffic you don't pay for per click. We can coordinate both." },
    ],
    cta: "Get my SEO plan",
  },

  // ─────────────────────────────── AI & automation ───────────────────────────────
  {
    slug: "ai",
    path: "/start/ai",
    service: "ai-automation",
    seo: {
      title: "Hire an AI Automation Consultant in Houston | From $1,500",
      description: "Find where AI will save your team time, then build it: assistants, workflow automation and integrations. Assessments from $1,500. Free consultation.",
      keywords: ["AI automation consultant Houston", "AI consulting for small business", "business process automation", "AI chatbot for business", "workflow automation services", "AI opportunity assessment", "hire an AI consultant", "AI integration services"],
    },
    eyebrow: "Hire an AI automation consultant in Houston",
    about: [
      { "@type": "Thing", name: "Artificial intelligence", sameAs: "https://www.wikidata.org/wiki/Q11660" },
      { "@type": "Thing", name: "Business process automation", sameAs: "https://www.wikidata.org/wiki/Q5001911" },
      HOU,
    ],
    headline: "Give your team hours back every week with practical AI",
    accent: "hours back every week",
    subhead:
      "We find the repetitive work AI and automation can genuinely take off your plate, then build secure assistants and workflows that connect to the tools you already use. No hype, just measurable time saved.",
    heroPoints: ["Start small with a $1,500 assessment", "Connects to your CRM, email and spreadsheets", "Success measures agreed before we build"],
    pains: [
      { title: "Your team re-types the same data", body: "Copying information between email, spreadsheets and your CRM eats hours every week and introduces mistakes." },
      { title: "Leads wait too long for a reply", body: "When follow-up depends on someone being free, good leads go cold and customers go elsewhere." },
      { title: "You know AI matters, not where to start", body: "Every tool promises everything. Without a plan, it's easy to spend money on pilots that never reach daily use." },
    ],
    turn: "Start with the tasks that cost the most time, prove the value, then scale what works.",
    outcomes: [
      { icon: FileSearch, title: "A clear AI roadmap", body: "An assessment of your workflows that ranks the opportunities by time saved, cost and risk." },
      { icon: Bot, title: "AI assistants", body: "Website and internal assistants that answer common questions accurately, using your own information." },
      { icon: Workflow, title: "Workflow automation", body: "Leads, forms, documents and data move between your systems automatically, without re-typing." },
      { icon: Plug, title: "Works with your tools", body: "Integrations with common CRMs, email, scheduling, spreadsheets and databases, plus custom connectors when needed." },
      { icon: ShieldCheck, title: "Private and secure", body: "Access controls, encryption and enterprise AI services that don't train on your data, with human review where accuracy matters." },
      { icon: Gauge, title: "Measured results", body: "Success measures agreed up front, such as hours saved, response time or accuracy, and reported after launch." },
    ],
    roadmapIntro: "AI projects stall when they start too big. Ours start with one high-value workflow and a clear measure of success.",
    roadmap: [
      { when: "Today", title: "Tell us what slows your team down", body: "Which tasks take the most time, and which tools you already use. A sentence or two is plenty.", yourPart: "About one minute" },
      replyStep,
      { when: "Your free consultation", title: "Find the first win", body: "We walk through your workflows, spot where AI and automation will pay off fastest and recommend whether to start with an assessment or a build.", yourPart: "Describe a typical week for your team" },
      { when: "Assessment", title: "Your AI opportunity roadmap", body: "We map your processes, rank the opportunities and agree on success measures, then give you a fixed price for the first build.", yourPart: "Short interviews with the people who do the work" },
      { when: "Build and launch", title: "Build, test with your team, go live", body: "We build the automation or assistant, test it on real work with your team, launch it and report against the agreed measures.", yourPart: "Test it and tell us what to adjust" },
    ],
    prepare: [
      "The three tasks that take your team the most time each week",
      "The software you use: CRM, email, scheduling, spreadsheets",
      "Examples of the documents, forms or messages you handle",
      "Who would use the assistant or automation day to day",
      "Any rules on data privacy or compliance we should know",
      "What \"success\" would look like in hours, speed or accuracy",
    ],
    weHandle: [
      "Workflow mapping and opportunity scoring",
      "Choosing the right AI models and tools",
      "Building integrations and connectors",
      "Security, access control and data privacy",
      "Testing on real work with your team",
      "Post-launch reporting against the agreed measures",
    ],
    faqs: [
      { question: "How much does an AI or automation project cost?", answer: "AI Opportunity Assessments start at $1,500. Individual automation builds typically run $4,000 to $12,000 depending on the systems involved, and larger AI programs start at $15,000. You get a fixed price before any build begins." },
      { question: "Where does AI usually pay off first?", answer: "Repetitive, text-heavy tasks: answering common customer questions, qualifying and routing leads, processing intake forms and documents, drafting follow-ups and building reports." },
      { question: "Is our data safe?", answer: "We design for privacy from the start, with access controls, encryption and enterprise AI services that don't train on your data. For regulated information we keep sensitive data within approved systems, with human review where accuracy matters." },
      { question: "Will AI replace our staff?", answer: "Our focus is removing low-value manual work so your people can spend more time on customers and higher-value tasks. Most projects are measured in hours saved per week and faster response times." },
      { question: "Can it connect to the tools we already use?", answer: "Usually, yes. We integrate with common CRMs, email, scheduling, spreadsheets and databases through their APIs, and build custom connectors when needed." },
      { question: "How do we know it's working?", answer: "Every build includes success measures agreed up front, such as hours saved, response time or accuracy, and we report against them after launch." },
    ],
    cta: "Find my first AI win",
  },

  // ─────────────────────────────── Digital marketing ───────────────────────────────
  {
    slug: "marketing",
    path: "/start/marketing",
    service: "digital-marketing",
    seo: {
      title: "Google Ads Management in Houston | From $2,500/mo",
      description: "Hire a Houston team to run your Google Ads, paid social and email, with tracking that shows which dollars became customers. From $2,500/mo, month-to-month.",
      keywords: ["Google Ads management Houston", "PPC management Houston", "Google Ads agency", "paid social advertising", "Facebook ads management Houston", "PPC company Houston", "hire a Google Ads expert", "ad campaign management"],
    },
    eyebrow: "Google Ads management in Houston",
    about: [
      { "@type": "Thing", name: "Online advertising", sameAs: "https://www.wikidata.org/wiki/Q624902" },
      { "@type": "Thing", name: "Digital marketing", sameAs: "https://www.wikidata.org/wiki/Q1323528" },
      HOU,
    ],
    headline: "Marketing that shows exactly which dollars became customers",
    accent: "which dollars became customers",
    subhead:
      "We plan, create and manage your Google Ads, paid social and email campaigns, track every lead back to its source and report in plain English, so you know what to scale and what to cut.",
    heroPoints: ["Ads can bring leads in the first week", "Ads, content and landing pages created for you", "Month-to-month management"],
    pains: [
      { title: "You're spending, not sure it's working", body: "Clicks and impressions look busy, but you can't connect the spend to calls, bookings or sales." },
      { title: "Campaigns run on autopilot", body: "Set-and-forget ads waste budget on the wrong searches, audiences and placements month after month." },
      { title: "Nobody owns the whole funnel", body: "One vendor runs ads, another built the site and nobody fixes the landing page that's losing the leads." },
    ],
    turn: "Spend should be tracked to revenue, managed every week and pointed at pages built to convert.",
    outcomes: [
      { icon: Megaphone, title: "Google Ads that target buyers", body: "Search campaigns built around high-intent keywords, with negative keywords that cut wasted spend." },
      { icon: Target, title: "Paid social that reaches the right people", body: "Facebook, Instagram, LinkedIn and TikTok campaigns aimed at the audiences most likely to buy." },
      { icon: PenLine, title: "Creative made for you", body: "Our copywriters, designers and video editors create the ads, posts, emails and landing pages." },
      { icon: CalendarCheck, title: "Email that follows up", body: "Automated sequences that nurture leads and bring past customers back." },
      { icon: TestTube, title: "Constant testing", body: "Ads, audiences and landing pages are tested and improved, so results get better over time." },
      { icon: LineChart, title: "Revenue tracking", body: "Conversion tracking from click to call, form or sale, so every report shows cost per lead and what to scale." },
    ],
    roadmapIntro: "Here's how we get from your first message to campaigns that are live, tracked and improving.",
    roadmap: [
      { when: "Today", title: "Tell us what you sell and to whom", body: "Your offer, your ideal customer and what you've tried so far. A few lines is enough.", yourPart: "About one minute" },
      replyStep,
      { when: "Your free consultation", title: "Pick the right channels and budget", body: "We look at your market and goals, recommend the channel mix and help you split your budget where it will do the most.", yourPart: "Share past results, if you have them" },
      { when: "Before launch", title: "Tracking, creative and landing pages", body: "We set up conversion tracking, build the campaigns, create the ads and make sure the pages they point to are ready to convert.", yourPart: "Approve the creative and ad accounts" },
      { when: "Every week after", title: "Optimize, test, report", body: "We manage bids, budgets, audiences and creative, test continuously and report on leads and cost per lead. Plans are month-to-month.", yourPart: "Tell us which leads turned into customers" },
    ],
    prepare: [
      "What you sell and your best-margin offers",
      "Who your ideal customer is and where they are",
      "Your monthly ad budget, or a range",
      "Access to existing ad accounts, so we keep their history",
      "Past campaign results, good or bad",
      "Your brand assets: logo, photos and any videos",
    ],
    weHandle: [
      "Channel strategy and budget planning",
      "Campaign build and account structure",
      "Ad copy, design and video editing",
      "Landing pages built to convert",
      "Conversion and call tracking",
      "Weekly optimization and plain-English reporting",
    ],
    faqs: [
      { question: "How much does it cost?", answer: "Management plans start at $2,500 a month (Starter), with Growth at $5,000 and Enterprise from $10,000. The plan covers our strategy, creative, management and reporting. Plans are month-to-month." },
      { question: "Is ad spend included?", answer: "No. Your ad budget is separate and is paid directly to the ad platforms, so you see exactly what was spent. Each plan lists how much ad spend it covers." },
      { question: "How much should I spend on ads?", answer: "We recommend at least $2,000 per month per channel for meaningful results. We'll help you split your budget where it will do the most." },
      { question: "How fast will I see results?", answer: "Ads can bring in leads within the first week. Email usually shows results in the first month, and social media growth in 2–3 months. You'll get updates from day one." },
      { question: "Which channels should my business use?", answer: "It depends on your customers. B2B companies usually do best with Google Ads, LinkedIn and email. Consumer brands often do best with Instagram, Facebook and TikTok. We'll recommend a mix on your free consultation." },
      { question: "Can you work with our in-house team?", answer: "Yes. We often handle specific areas, like ads or analytics, and fit into your team's existing workflow." },
    ],
    cta: "Get my marketing plan",
  },
];

export function getStartPage(slug: string) {
  return startPages.find((p) => p.slug === slug);
}

/** The start page for a services-catalog slug, if one exists. */
export function startPageFor(serviceSlug: string) {
  return startPages.find((p) => p.service === serviceSlug);
}
