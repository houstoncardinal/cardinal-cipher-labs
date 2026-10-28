import type { LucideIcon } from "lucide-react";
import {
  Globe, Smartphone, Search, Megaphone, Palette, MousePointer,
  Paintbrush, Zap, MapPin, PenLine, Plug, Gauge,
  Apple, Bell, Lock, Cloud, Rocket, RefreshCw,
  FileSearch, Target, Link2, BarChart3, FileText, Star,
  Users, Mail, Video, LineChart, PenTool,
  Type, BookOpen, Printer, Eye, Layers,
  TestTube, Accessibility, ScanLine,
  Share2, CalendarDays, MessageSquare, Clapperboard, Bot, Workflow, Files,
  ShieldCheck, Server, Compass, Network, ClipboardCheck, DatabaseBackup, Activity, Wrench,
} from "lucide-react";

/**
 * Single source of truth for every service: plain-language copy, plans,
 * process, FAQs and SEO metadata. Service pages, the services hub, the
 * pricing page, the homepage services grid and the header menu all read
 * from here — edit a price or a tier once and it updates everywhere.
 */

export type TierLevel = "Foundation" | "Growth" | "Enterprise";

export interface ServiceTier {
  level: TierLevel;
  name: string;
  price: string;
  /** e.g. "one-time", "per month", "starting price", "custom quote" */
  billing: string;
  bestFor: string;
  timeline?: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceTestimonial {
  author: string;
  title: string;
  body: string;
  rating: number;
}

export type ServiceGroup = "Build" | "Design" | "Grow" | "Advise";

/** An industry statistic shown on a service page. Every entry must cite a real, checkable source. */
export interface ResearchStat {
  value: string;
  label: string;
  source: string;
  year: string;
  url?: string;
}

export interface ServiceDefinition {
  slug: string;
  path: string;
  icon: LucideIcon;
  group: ServiceGroup;
  /** Short name used in menus, cards and breadcrumbs */
  name: string;
  /** Hero headline: what the customer gets, in plain words */
  headline: string;
  /** One sentence: what we do and why it matters */
  summary: string;
  /** Short line used in menus */
  menuBlurb: string;
  startingAt: string;
  startingBilling: string;
  whoItsFor: string[];
  included: ServiceFeature[];
  tiers: [ServiceTier, ServiceTier, ServiceTier];
  process: [ServiceStep, ServiceStep, ServiceStep, ServiceStep];
  /** Cardinal's own figures (shown in the stats band) */
  stats?: { value: string; label: string }[];
  /** Independent industry research with citations */
  research?: ResearchStat[];
  capabilities?: string[];
  highlights?: string[];
  testimonials?: ServiceTestimonial[];
  faqs: ServiceFAQ[];
  related: string[];
  /** Slugs from case-studies.ts shown as "Selected work" */
  caseStudies?: string[];
  localLinks: { label: string; href: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    serviceName: string;
    serviceDescription: string;
    serviceType: string;
    category: string;
    duration: string;
    aggregateRating?: { ratingValue: number; reviewCount: number };
    reviewDate?: string;
  };
}

/** Every engagement starts the same way — shared first two steps. */
const consultStep: ServiceStep = {
  title: "Free consultation",
  description: "Tell us about your business, goals, and budget. No pressure and no obligation.",
};

const planStep = (what: string): ServiceStep => ({
  title: "Clear plan & price",
  description: `You get a written plan for your ${what}, the price, and the timeline before any work starts.`,
});

/** Website Care Plans — monthly add-on for any website we build. */
export const carePlans: [ServiceTier, ServiceTier, ServiceTier] = [
  {
    level: "Foundation",
    name: "Care Essentials",
    price: "$299",
    billing: "per month",
    bestFor: "Keeping your site secure, backed up, and running.",
    features: [
      "Monthly software updates",
      "Daily cloud backups",
      "24/7 uptime monitoring",
      "Security scanning & malware removal",
      "1 hour of content updates/mo",
    ],
  },
  {
    level: "Growth",
    name: "Care Plus",
    price: "$499",
    billing: "per month",
    bestFor: "Proactive upkeep with faster support.",
    popular: true,
    features: [
      "Everything in Essentials",
      "3 hours of content updates/mo",
      "Priority 24-hour support response",
      "Core Web Vitals monitoring",
      "Monthly analytics review",
      "Quarterly design refreshes",
    ],
  },
  {
    level: "Enterprise",
    name: "Care Pro",
    price: "$799",
    billing: "per month",
    bestFor: "A site that keeps improving every month.",
    features: [
      "Everything in Plus",
      "6 hours of development/mo",
      "New feature development",
      "A/B testing & conversion ideas",
      "Dedicated account manager",
      "Quarterly strategy sessions",
    ],
  },
];

export const services: ServiceDefinition[] = [
  // ───────────────────────────── Web Development ─────────────────────────────
  {
    slug: "web-development",
    research: [
      { value: "53%", label: "of mobile site visits are abandoned when a page takes longer than three seconds to load.", source: "Google, The Need for Mobile Speed", year: "2016", url: "https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/" },
      { value: "8.4%", label: "more retail conversions when key mobile speed metrics improved by just 0.1 seconds across 37 brand sites.", source: "Deloitte & Google, Milliseconds Make Millions", year: "2020", url: "https://web.dev/case-studies/milliseconds-make-millions" },
    ],
    path: "/services/web-development",
    icon: Globe,
    group: "Build",
    name: "Web Development",
    headline: "Websites that win customers and scale with you",
    summary: "We design and engineer fast, secure websites and web platforms — from marketing sites to customer portals — that turn visitors into revenue.",
    menuBlurb: "Custom websites & online stores",
    startingAt: "$1,500",
    startingBilling: "one-time",
    whoItsFor: [
      "Your website no longer reflects the size or quality of your company",
      "Your site is slow, hard to update, or doesn't generate qualified leads",
      "You need commerce, customer portals, or integrations with your existing systems",
    ],
    included: [
      { icon: Paintbrush, title: "Custom design, no templates", description: "Built around your brand so you stand out from competitors." },
      { icon: Smartphone, title: "Works on every phone", description: "Looks and works great on phones, tablets, and desktops." },
      { icon: Search, title: "Ready for Google", description: "SEO setup, page titles, and structured data so people can find you." },
      { icon: Zap, title: "Fast loading", description: "Optimized images and code so visitors don't leave while waiting." },
      { icon: PenLine, title: "Easy to update", description: "Change text, photos, and products yourself — or we'll do it for you." },
      { icon: Plug, title: "Connected to your tools", description: "Forms, payments, booking, CRM, and email all hooked up." },
    ],
    tiers: [
      {
        level: "Foundation",
        name: "Marketing Website",
        price: "$1,500",
        billing: "one-time",
        bestFor: "A fast, credible site that generates qualified leads.",
        timeline: "Typically 72 hours – 2 weeks",
        features: [
          "Up to 5 custom pages",
          "Mobile-friendly design",
          "Google-ready SEO setup",
          "Contact form & Google Maps",
          "Google Analytics setup",
          "SSL certificate & hosting setup",
          "2 rounds of revisions",
          "30 days of support after launch",
        ],
      },
      {
        level: "Growth",
        name: "Commerce & Integrations",
        price: "$3,500",
        billing: "one-time",
        bestFor: "Selling online or connecting your site to core systems.",
        timeline: "Typically 4 – 8 weeks",
        popular: true,
        features: [
          "Everything in Marketing Website",
          "Custom storefront design",
          "Product catalog & checkout",
          "Payments, shipping & tax setup",
          "Connects to your inventory or CRM",
          "Sales & conversion tracking",
          "3 rounds of revisions",
          "90 days of support after launch",
        ],
      },
      {
        level: "Enterprise",
        name: "Custom Platform",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Larger businesses that need portals, dashboards, or complex features.",
        timeline: "Scoped on your consultation",
        features: [
          "Unlimited pages & custom features",
          "Customer portals & dashboards",
          "Custom backend & API integrations",
          "Multi-language support",
          "Security audit & compliance review",
          "Priority 24/7 support",
          "12 months of maintenance & updates",
        ],
      },
    ],
    process: [
      consultStep,
      planStep("site"),
      { title: "Design & build", description: "We design in Figma, you approve it, then we build it. You see progress the whole way." },
      { title: "Launch & support", description: "We test on every device, launch, set up analytics, and stay on hand to support you." },
    ],
    stats: [
      { value: "500+", label: "Projects Delivered" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "< 2s", label: "Avg Load Time" },
      { value: "4.9★", label: "Client Rating" },
    ],
    capabilities: ["Small Business Sites", "E-commerce Stores", "Custom Platforms", "CMS Integration"],
    highlights: ["99.9% Uptime", "90+ Lighthouse", "WCAG 2.1 AA"],
    testimonials: [
      { author: "Michael Chen", title: "CTO, Tech Innovations Inc.", body: "Cardinal Consulting delivered our corporate website 2 weeks ahead of schedule. The performance scores are incredible — 98 on Lighthouse across all metrics. Their attention to SEO and accessibility is unmatched.", rating: 5 },
      { author: "Sarah Martinez", title: "VP Marketing, Global Retail Solutions", body: "Our new e-commerce platform increased online sales by 340% in the first quarter. The website is blazing fast and beautifully designed. Best investment we've made.", rating: 5 },
      { author: "David Thompson", title: "Director of IT, Healthcare Systems Group", body: "The HIPAA-compliant patient portal Cardinal built handles over 50,000 monthly users with zero downtime. Their security-first approach gave us complete confidence.", rating: 5 },
    ],
    faqs: [
      { question: "How long does it take to build my website?", answer: "Most marketing websites take 72 hours to 2 weeks. E-commerce stores and larger platforms usually take 4–8 weeks. Need it faster? Ask about rush delivery. You'll get an exact timeline before we start." },
      { question: "What's the difference between the Marketing Website and Commerce & Integrations?", answer: "A Marketing Website is a fast, professional site that explains what you do and turns visitors into leads. Commerce & Integrations adds online sales — products, checkout, payments, shipping, and tax — and connects your site to systems like your CRM or inventory." },
      { question: "Will my website show up on Google?", answer: "Yes. Every site we build includes SEO setup: page titles, descriptions, structured data, a sitemap, and fast load times. To keep climbing in search results over time, pair your site with an SEO plan." },
      { question: "Can I update the website myself?", answer: "Yes. We can set up an easy editor so you can change text, photos, and products. Prefer to have us do it? A Website Care Plan covers monthly updates for you." },
      { question: "Can you connect my website to the tools I already use?", answer: "Yes. We connect websites to CRMs (like HubSpot or Salesforce), payment providers (like Stripe or PayPal), booking tools, email marketing, inventory systems, and custom APIs." },
      { question: "What happens after launch?", answer: "Every plan includes support after launch (30 days to 12 months depending on the plan). After that, a Website Care Plan keeps your site updated, backed up, and secure." },
    ],
    related: ["ux-ui", "seo-analytics", "digital-marketing"],
    caseStudies: ["axiomio", "vargas", "unitedccr"],
    localLinks: [
      { label: "Web Design Houston", href: "/houston-web-design" },
      { label: "Web Developer Houston", href: "/houston-web-developer" },
      { label: "App Development Houston", href: "/houston-app-development" },
      { label: "SEO Company Houston", href: "/houston-seo-company" },
    ],
    seo: {
      title: "Web Development Services Houston TX | Custom Website Development",
      description: "Custom website development in Houston: fast, secure, SEO-ready websites, e-commerce, and web platforms built with React and Next.js. 500+ projects delivered. Free consultation: (281) 901-7016.",
      keywords: [
        "web development Houston TX", "web development agency Houston", "custom website development Houston", "Houston web developer",
        "best web development company Houston", "web design and development Houston", "React web development Houston", "Next.js development Houston",
        "enterprise web development Houston", "responsive web design Houston", "e-commerce website development Houston", "HIPAA compliant web development Houston",
        "full stack web development Houston", "website redesign Houston", "affordable web development Houston", "professional website development Houston",
        "small business website Houston", "web developer near me Houston", "custom web application Houston", "Houston website design and development",
      ],
      serviceName: "Custom Website Development Services",
      serviceDescription: "Professional custom website development with modern technologies. Responsive, fast, SEO-optimized websites that drive business growth and convert visitors into customers.",
      serviceType: "WebDevelopment",
      category: "Web Development",
      duration: "P4W",
      aggregateRating: { ratingValue: 4.9, reviewCount: 89 },
      reviewDate: "2025-01-15",
    },
  },

  // ─────────────────────────────── Mobile Apps ───────────────────────────────
  {
    slug: "mobile-apps",
    research: [
      { value: "4.2T", label: "hours were spent in mobile apps worldwide in 2024 — about 3.5 hours per user, per day.", source: "Sensor Tower, State of Mobile 2025", year: "2025", url: "https://sensortower.com/blog/2025-state-of-mobile-consumers-usd150-billion-spent-on-mobile-highlights" },
      { value: "$150B", label: "was spent by consumers in mobile apps in 2024, the fastest growth since 2021.", source: "Sensor Tower, State of Mobile 2025", year: "2025", url: "https://sensortower.com/blog/2025-state-of-mobile-consumers-usd150-billion-spent-on-mobile-highlights" },
    ],
    path: "/services/mobile-apps",
    icon: Smartphone,
    group: "Build",
    name: "Mobile Apps",
    headline: "Mobile apps your customers and teams rely on",
    summary: "We design, build, and launch iPhone and Android apps — and help you get them into the App Store and Google Play.",
    menuBlurb: "iPhone & Android apps",
    startingAt: "$5K+",
    startingBilling: "starting price",
    whoItsFor: [
      "You're launching a new digital product or customer app",
      "Your customers or field teams need a faster way to book, order, or report",
      "You have an existing app that needs to be stabilized or extended",
    ],
    included: [
      { icon: Apple, title: "iPhone & Android", description: "One app for both platforms, or native builds when you need them." },
      { icon: Paintbrush, title: "Easy-to-use design", description: "Screens your users understand on the first tap." },
      { icon: Cloud, title: "Backend & data", description: "Accounts, databases, and APIs set up so your app just works." },
      { icon: Bell, title: "Push notifications", description: "Bring users back with timely, targeted messages." },
      { icon: Lock, title: "Secure by default", description: "Encryption, secure login, and Face ID / fingerprint support." },
      { icon: Rocket, title: "App Store launch", description: "We handle App Store and Google Play submission for you." },
    ],
    tiers: [
      {
        level: "Foundation",
        name: "MVP App",
        price: "$5K+",
        billing: "starting price",
        bestFor: "Validating a new product with a focused first release.",
        timeline: "Typically 6 – 8 weeks",
        features: [
          "Core features (up to 8 screens)",
          "One platform: iPhone or Android",
          "Clean, simple design",
          "Backend & API setup",
          "Push notifications",
          "App Store / Google Play submission",
          "Analytics setup",
          "30 days of bug fixes",
        ],
      },
      {
        level: "Growth",
        name: "Full-Featured App",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Launching a full product on iPhone and Android.",
        timeline: "Typically 12 – 16 weeks",
        popular: true,
        features: [
          "Everything in MVP App",
          "Up to 20 screens",
          "iPhone & Android from one codebase",
          "Custom design with animations",
          "Admin dashboard to manage content",
          "In-app purchases & subscriptions",
          "Crash reporting",
          "3 months of support after launch",
        ],
      },
      {
        level: "Enterprise",
        name: "Enterprise App",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Complex, business-critical apps for larger teams.",
        timeline: "Typically 16 – 24 weeks",
        features: [
          "Unlimited screens & features",
          "iPhone, Android & web app",
          "Company single sign-on (SSO)",
          "Works offline, syncs when back online",
          "Security audit & penetration testing",
          "Dedicated development team",
          "12 months of support & maintenance",
        ],
      },
    ],
    process: [
      consultStep,
      planStep("app"),
      { title: "Design & build", description: "We design the screens, then build in 2-week sprints with a demo for you after each one." },
      { title: "Launch & support", description: "We test on real devices, submit to the app stores, and monitor the app after launch." },
    ],
    stats: [
      { value: "150+", label: "Apps Delivered" },
      { value: "8 Wks", label: "Avg MVP Delivery" },
      { value: "4.9★", label: "Client Rating" },
      { value: "98%", label: "Client Satisfaction" },
    ],
    capabilities: ["iOS & Android", "Web Applications", "Cross-Platform", "App Deployment"],
    highlights: ["60fps Native", "2M+ Downloads", "4.8 App Rating"],
    testimonials: [
      { author: "Jennifer Williams", title: "CEO, Startup Accelerate", body: "Cardinal helped us launch our MVP in just 8 weeks. The app now has over 200,000 downloads and a 4.9-star rating. Their agile approach made all the difference.", rating: 5 },
      { author: "Robert Garcia", title: "Head of Digital, Financial Services Corp", body: "The fintech app Cardinal built handles over $50M in monthly transactions with zero security incidents. Their security-first approach is truly enterprise-grade.", rating: 5 },
      { author: "Lisa Park", title: "Product Manager, HealthTech Solutions", body: "Our patient management app reduced appointment no-shows by 65%. The offline-first architecture means doctors in rural areas can still access critical data.", rating: 5 },
    ],
    faqs: [
      { question: "Should I build for iPhone, Android, or both?", answer: "Most businesses should build one app that runs on both — it's faster and costs less. We recommend a native build only when your app needs heavy device features like AR or advanced camera work. We'll help you decide on your free consultation." },
      { question: "How long does it take to build an app?", answer: "An MVP usually takes 6–8 weeks, a full-featured app 12–16 weeks, and enterprise apps 16–24 weeks. You'll see working progress every two weeks." },
      { question: "Do you handle the App Store and Google Play?", answer: "Yes. We prepare screenshots, descriptions, and compliance documents, submit the app, and handle communication with Apple and Google's review teams." },
      { question: "Can you update an app someone else built?", answer: "Yes. We'll review the existing code, tell you honestly what shape it's in, and recommend the best path: fix, extend, or rebuild." },
      { question: "How do you keep my app secure?", answer: "We use encrypted storage, secure login (including Face ID and fingerprint), encrypted data in transit, and follow OWASP mobile security guidelines." },
      { question: "What happens after my app launches?", answer: "Every plan includes post-launch support (30 days to 12 months). That covers crash monitoring, bug fixes, and updates for new iOS and Android versions." },
    ],
    related: ["web-development", "ux-ui", "brand-identity"],
    localLinks: [
      { label: "App Development Houston", href: "/houston-app-development" },
      { label: "Web Developer Houston", href: "/houston-web-developer" },
      { label: "Web Design Houston", href: "/houston-web-design" },
      { label: "Rush Prototyping", href: "/rush-prototyping" },
    ],
    seo: {
      title: "App Development Company Houston TX | iOS, Android & Cross-Platform Apps",
      description: "Houston app development company building iOS, Android, and cross-platform apps — from MVPs to enterprise apps, including App Store launch. 150+ apps delivered. Call (281) 901-7016.",
      keywords: [
        "app development company Houston", "app development company near me Houston", "mobile app development Houston", "#1 app development company Houston",
        "best app development company Houston", "iOS app development Houston", "Android app development Houston", "app development agency Houston",
        "React Native development Houston", "HIPAA compliant app development Houston", "enterprise mobile app development Houston", "cross-platform app development Houston",
        "iPhone app developer Houston", "Android app developer Houston", "app developer near me Houston", "startup app development Houston",
        "MVP app development Houston", "custom app development Houston TX", "mobile app developer Houston Texas", "app development services Houston",
      ],
      serviceName: "Mobile & Web App Development Services",
      serviceDescription: "Custom mobile app development for iOS and Android. React Native, Flutter, and native development with enterprise-grade security and performance.",
      serviceType: "SoftwareDevelopment",
      category: "Mobile App Development",
      duration: "P8W",
      aggregateRating: { ratingValue: 4.8, reviewCount: 52 },
      reviewDate: "2025-02-10",
    },
  },

  // ─────────────────────────────── Brand Identity ───────────────────────────────
  {
    slug: "brand-identity",
    research: [
      { value: "23%", label: "estimated revenue increase attributed to consistent brand presentation, in a survey of 200+ brand leaders.", source: "Lucidpress & Demand Metric, The Impact of Brand Consistency", year: "2016" },
      { value: "32 pts", label: "higher revenue growth for companies in the top quartile of design performance versus industry peers over five years.", source: "McKinsey, The Business Value of Design", year: "2018", url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-business-value-of-design" },
    ],
    path: "/services/brand-identity",
    icon: Palette,
    group: "Design",
    name: "Brand Identity",
    headline: "A brand that commands trust",
    summary: "We create your logo, colors, fonts, and brand guidelines so your business looks professional and consistent everywhere.",
    menuBlurb: "Logos, colors & brand guidelines",
    startingAt: "$5,000",
    startingBilling: "one-time",
    whoItsFor: [
      "You're launching a company, product, or new division",
      "Your brand looks inconsistent across teams, locations, and channels",
      "You're repositioning, merging, or entering a new market",
    ],
    included: [
      { icon: PenTool, title: "Logo design", description: "A distinctive logo that captures what your business stands for." },
      { icon: Palette, title: "Color palette", description: "Colors chosen to make the right first impression." },
      { icon: Type, title: "Typography", description: "Fonts that make your brand instantly recognizable." },
      { icon: BookOpen, title: "Brand guidelines", description: "A simple guide so everyone uses your brand the right way." },
      { icon: Printer, title: "Print & stationery", description: "Business cards, letterhead, and packaging that stand out." },
      { icon: Eye, title: "Brand strategy", description: "Clear positioning that sets you apart from competitors." },
    ],
    tiers: [
      {
        level: "Foundation",
        name: "Essentials",
        price: "$5,000",
        billing: "one-time",
        bestFor: "New ventures and products that need a strong identity.",
        timeline: "Typically 3 – 4 weeks",
        features: [
          "5 logo concepts",
          "Color palette",
          "Typography",
          "20-page brand guidelines",
          "Business card design",
          "All source files — you own them",
        ],
      },
      {
        level: "Growth",
        name: "Professional",
        price: "$12,000",
        billing: "one-time",
        bestFor: "Companies that need a complete, scalable brand system.",
        timeline: "Typically 6 – 8 weeks",
        popular: true,
        features: [
          "Everything in Essentials",
          "8 logo concepts",
          "Full color system",
          "Custom typography",
          "40-page brand guidelines",
          "All stationery",
          "Social media templates",
        ],
      },
      {
        level: "Enterprise",
        name: "Enterprise",
        price: "$25,000+",
        billing: "starting price",
        bestFor: "Full rebrands and established companies.",
        timeline: "Typically 10 – 14 weeks",
        features: [
          "Everything in Professional",
          "Brand strategy & positioning",
          "80-page brand guidelines",
          "Packaging design",
          "Brand launch campaign",
          "12 months of brand support",
        ],
      },
    ],
    process: [
      consultStep,
      planStep("brand"),
      { title: "Design & refine", description: "We explore several creative directions, then refine your favorite based on your feedback." },
      { title: "Deliver & launch", description: "You get every file and your brand guidelines, plus help rolling it out everywhere." },
    ],
    stats: [
      { value: "200+", label: "Brands Created" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "15+", label: "Years Experience" },
      { value: "25+", label: "Awards Won" },
    ],
    capabilities: ["Logo Design", "Brand Guidelines", "Visual Identity", "Print Collateral"],
    highlights: ["200+ Brands", "25+ Awards", "98% Satisfaction"],
    testimonials: [
      { author: "Alexandra Rivera", title: "Founder, Bloom Wellness Co.", body: "Cardinal created a brand identity that perfectly captures our philosophy. Our brand book is stunning.", rating: 5 },
      { author: "Marcus Thompson", title: "CEO, NovaTech Solutions", body: "The rebrand helped us close 3x more enterprise deals. Prospects immediately see us as market leaders.", rating: 5 },
      { author: "Elena Vasquez", title: "CMO, GreenPath Organics", body: "Our packaging stands out on every shelf. Cardinal understood our sustainability values perfectly.", rating: 5 },
    ],
    faqs: [
      { question: "How long does branding take?", answer: "Essentials takes about 3–4 weeks, Professional 6–8 weeks, and Enterprise 10–14 weeks." },
      { question: "What do I get at the end?", answer: "Your logo in every format you'll need, your color palette, fonts, brand guidelines, and all source files — plus the extras in your plan, like stationery or social templates." },
      { question: "Do I own the files?", answer: "Yes. You own 100% of the intellectual property and all source files." },
      { question: "Can you refresh our existing brand instead of starting over?", answer: "Absolutely. We've completed 80+ rebrands. We'll keep what's working and modernize the rest so the change feels natural to your customers." },
    ],
    related: ["ux-ui", "web-development", "digital-marketing"],
    localLinks: [
      { label: "Web Design Houston", href: "/houston-web-design" },
      { label: "Custom Design", href: "/custom-design" },
    ],
    seo: {
      title: "Brand Identity & Logo Design Agency Houston TX",
      description: "Brand identity and logo design in Houston: brand strategy, logos, color, typography, and brand guidelines for growing companies. Free consultation: (281) 901-7016.",
      keywords: [
        "brand identity design Houston", "logo design Houston", "branding agency Houston TX", "Houston logo designer", "brand guidelines Houston",
        "visual identity Houston", "Houston branding company", "logo design company Houston", "brand strategy Houston", "startup branding Houston",
        "rebranding agency Houston", "corporate branding Houston", "best logo designer Houston", "brand design near me Houston", "brand consulting Houston TX",
        "brand identity package Houston", "Houston brand design agency", "professional logo design Houston", "brand positioning Houston", "brand book design Houston",
      ],
      serviceName: "Brand Identity Design Services",
      serviceDescription: "Premium brand identity design — logos, guidelines, visual systems. 200+ brands transformed.",
      serviceType: "DesignService",
      category: "Brand Identity",
      duration: "P3W",
      aggregateRating: { ratingValue: 4.9, reviewCount: 94 },
      reviewDate: "2025-02-05",
    },
  },

  // ─────────────────────────────── UX/UI Design ───────────────────────────────
  {
    slug: "ux-ui",
    research: [
      { value: "32 pts", label: "higher revenue growth — and 56 points higher shareholder returns — for top-quartile design performers across 300 companies.", source: "McKinsey, The Business Value of Design", year: "2018", url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-business-value-of-design" },
      { value: "70.19%", label: "average documented online shopping-cart abandonment rate, across 49 studies — much of it driven by fixable checkout UX.", source: "Baymard Institute", year: "2023", url: "https://baymard.com/lists/cart-abandonment-rate" },
    ],
    path: "/services/ux-ui",
    icon: MousePointer,
    group: "Design",
    name: "UX/UI Design",
    headline: "Digital experiences that are easy to use",
    summary: "We study how your customers use your site or app, then redesign it so more of them sign up, book, or buy.",
    menuBlurb: "Easier-to-use websites & apps",
    startingAt: "$3,500",
    startingBilling: "one-time",
    whoItsFor: [
      "Visitors reach your site but don't sign up, book, or buy",
      "Customers or employees find your app or portal confusing",
      "You're planning a major redesign and need to de-risk it",
    ],
    included: [
      { icon: Users, title: "User research", description: "Interviews and data that show what's really stopping your customers." },
      { icon: Layers, title: "Clear navigation", description: "Pages and menus organized the way your users think." },
      { icon: MousePointer, title: "Interface design", description: "Clean, polished screens designed in Figma." },
      { icon: TestTube, title: "Testing with real users", description: "We test designs with real people before you build." },
      { icon: Accessibility, title: "Accessible to everyone", description: "Meets WCAG 2.1 accessibility standards." },
      { icon: ScanLine, title: "Design systems", description: "Reusable components that keep your product consistent." },
    ],
    tiers: [
      {
        level: "Foundation",
        name: "UX Audit",
        price: "$3,500",
        billing: "one-time",
        bestFor: "Finding out exactly what's hurting your conversions.",
        features: [
          "Expert review of your site or app",
          "User flow analysis",
          "Accessibility check (WCAG 2.1)",
          "Competitor comparison",
          "Analytics review",
          "Prioritized fix list",
          "1-hour walkthrough & Q&A",
          "30 days of follow-up support",
        ],
      },
      {
        level: "Growth",
        name: "Design Sprint",
        price: "$15,000",
        billing: "one-time",
        bestFor: "Designing and testing a new feature or product, fast.",
        timeline: "5-day sprint",
        popular: true,
        features: [
          "Everything in UX Audit",
          "5-day design sprint",
          "User research & personas",
          "Customer journey mapping",
          "Clickable prototype",
          "Testing with 5 real users",
          "Implementation roadmap",
          "2 months of implementation support",
        ],
      },
      {
        level: "Enterprise",
        name: "Full Redesign",
        price: "$35,000+",
        billing: "starting price",
        bestFor: "Complete redesigns of a site, app, or platform.",
        features: [
          "Everything in Design Sprint",
          "In-depth research (20+ interviews)",
          "Full design system & component library",
          "Every screen designed in high fidelity",
          "3 rounds of user testing",
          "Developer handoff & documentation",
          "3 months of iteration & support",
        ],
      },
    ],
    process: [
      consultStep,
      planStep("project"),
      { title: "Research & design", description: "We learn how your users think, then design and prototype the solution." },
      { title: "Test & hand off", description: "We test with real users, refine, and hand your developers everything they need." },
    ],
    stats: [
      { value: "40%", label: "Avg Conversion Lift" },
      { value: "60%", label: "Task Success Increase" },
      { value: "35%", label: "Bounce Rate Reduction" },
      { value: "4.8★", label: "Client Satisfaction" },
    ],
    capabilities: ["User Research", "Interface Design", "Conversion Optimization", "A/B Testing"],
    highlights: ["40% Conv. Lift", "60% Task Success", "35% Less Bounce"],
    testimonials: [
      { author: "Rachel Chen", title: "VP Product, CloudScale Platform", body: "Cardinal's UX redesign increased our SaaS trial-to-paid conversion by 129%. Their research-driven approach uncovered user pain points we never knew existed. The design system they built saves our team hundreds of hours.", rating: 5 },
      { author: "Michael Torres", title: "CTO, FinanceFlow App", body: "Our mobile app's user satisfaction score went from 3.2 to 4.7 after Cardinal's redesign. They reduced our key user flow from 12 steps to 4. Brilliantly simple.", rating: 5 },
      { author: "Karen Walsh", title: "Head of Digital, Metro Health Network", body: "The patient portal redesign reduced support calls by 73%. Cardinal made complex medical workflows feel intuitive. Their accessibility expertise meant we exceeded WCAG compliance.", rating: 5 },
    ],
    faqs: [
      { question: "What's the difference between UX and UI?", answer: "UX (user experience) is how something works: is it easy to find things and get tasks done? UI (user interface) is how it looks: colors, fonts, buttons, and layout. We do both, so your product works well and looks great." },
      { question: "How do you measure success?", answer: "We record your numbers before we start — like conversion rate, task completion, and support tickets — and measure them again after launch, so you can see the improvement." },
      { question: "Can you work with our existing design?", answer: "Yes. We can improve and extend your current design system, or build a new one from scratch." },
      { question: "How many users do you test with?", answer: "Five users catch about 85% of usability problems, so the UX Audit and Design Sprint test with 5 people. The Full Redesign runs 3 rounds of 5–8 people each." },
      { question: "Do you design for both mobile and desktop?", answer: "Yes. We design mobile-first, then scale up to tablet and desktop, following Apple and Google's guidelines for native apps." },
      { question: "Do you hand designs off to our developers?", answer: "Yes. Your developers get detailed Figma files, specs, and documentation, and we stay available during development to answer questions." },
    ],
    related: ["web-development", "mobile-apps", "brand-identity"],
    caseStudies: ["clearledger", "apnclinic", "axiomio"],
    localLinks: [
      { label: "Web Design Houston", href: "/houston-web-design" },
      { label: "Custom Design", href: "/custom-design" },
      { label: "App Development Houston", href: "/houston-app-development" },
    ],
    seo: {
      title: "UX/UI Design Agency Houston TX | User Experience & Interface Design",
      description: "UX/UI design in Houston: user research, wireframes, Figma prototypes, usability testing, and design systems that make websites and apps easier to use and convert better.",
      keywords: [
        "UX design agency Houston", "UI design Houston TX", "user experience design Houston", "UX designer Houston", "Houston UX UI agency",
        "web design UX Houston", "app UX design Houston", "Figma designer Houston", "UX research Houston", "interface design Houston",
        "conversion optimization Houston", "product design Houston TX", "UX audit Houston", "usability testing Houston", "design system Houston",
        "Houston UX consultant", "wireframe design Houston", "mobile UX design Houston", "web UX design Houston", "UX UI company Houston",
      ],
      serviceName: "UX/UI Design & Experience Optimization",
      serviceDescription: "User-centered design and interface optimization that creates exceptional digital experiences. Research-backed design that drives conversions and delights users.",
      serviceType: "UXDesignService",
      category: "UX/UI Design",
      duration: "P4W",
      aggregateRating: { ratingValue: 4.8, reviewCount: 61 },
      reviewDate: "2025-01-28",
    },
  },

  // ─────────────────────────────── SEO & Analytics ───────────────────────────────
  {
    slug: "seo-analytics",
    research: [
      { value: "27.6%", label: "average click-through rate for the #1 organic Google result — 10x more likely to be clicked than #10.", source: "Backlinko, Google CTR study of 4M search results", year: "2023", url: "https://backlinko.com/google-ctr-stats" },
      { value: "Only 4%", label: "of consumers say they never read online reviews when choosing a local business.", source: "BrightLocal, Local Consumer Review Survey", year: "2025", url: "https://www.brightlocal.com/research/local-consumer-review-survey-2025/" },
    ],
    path: "/services/seo-analytics",
    icon: Search,
    group: "Grow",
    name: "SEO",
    headline: "Be found first when buyers search",
    summary: "We improve your website and Google Business Profile so you rank higher, get more calls, and see the results in a monthly report.",
    menuBlurb: "Rank higher on Google",
    startingAt: "$1,500",
    startingBilling: "per month",
    whoItsFor: [
      "Competitors outrank you for the searches that matter most",
      "Organic traffic is flat or isn't producing pipeline",
      "You operate across multiple locations or markets",
    ],
    included: [
      { icon: MapPin, title: "Google Business Profile", description: "Show up in the map pack when people search nearby." },
      { icon: FileSearch, title: "Technical fixes", description: "We fix the speed and indexing issues that hold your site back." },
      { icon: Target, title: "Keyword research", description: "We target the searches your customers actually type." },
      { icon: FileText, title: "Content that ranks", description: "Helpful blog posts and pages that bring in new visitors." },
      { icon: Link2, title: "Authority building", description: "Earn links from trusted sites so Google trusts yours." },
      { icon: BarChart3, title: "Monthly reporting", description: "Plain-English reports showing rankings, traffic, and leads." },
    ],
    tiers: [
      {
        level: "Foundation",
        name: "SEO Foundation",
        price: "$1,500",
        billing: "per month",
        bestFor: "Single-market companies building a search foundation.",
        features: [
          "Google Business Profile optimization",
          "On-page SEO (up to 10 pages/mo)",
          "Local citation building",
          "Technical SEO audits",
          "Monthly keyword rank tracking",
          "Monthly performance report",
        ],
      },
      {
        level: "Growth",
        name: "SEO Growth",
        price: "$2,500",
        billing: "per month",
        bestFor: "Businesses ready to outrank competitors.",
        popular: true,
        features: [
          "Everything in Foundation",
          "4 blog posts per month",
          "Link building & authority growth",
          "Competitor gap analysis",
          "Expanded schema markup",
          "Strategy calls every 2 weeks",
        ],
      },
      {
        level: "Enterprise",
        name: "SEO Domination",
        price: "$4,000",
        billing: "per month",
        bestFor: "Multi-location businesses that want to own their market.",
        features: [
          "Everything in Growth",
          "8 long-form articles per month",
          "PR & digital outreach",
          "Multi-location SEO",
          "Core Web Vitals monitoring",
          "Weekly reports & calls",
        ],
      },
    ],
    process: [
      consultStep,
      planStep("SEO strategy"),
      { title: "Fix & optimize", description: "We fix technical issues first, then improve your pages and publish new content." },
      { title: "Report & improve", description: "Every month you see your rankings, traffic, and leads — and what we're doing next." },
    ],
    stats: [
      { value: "250%", label: "Avg Traffic Increase" },
      { value: "#1-3", label: "Avg Rankings Achieved" },
      { value: "85%", label: "Clients on Page 1" },
      { value: "180+", label: "Keywords Ranked #1" },
    ],
    capabilities: ["Technical SEO", "Local SEO", "Content Strategy", "Ranking Reports"],
    highlights: ["250% Avg Traffic", "Page 1 Rankings", "180+ #1 Keywords"],
    testimonials: [
      { author: "Dr. Amanda Foster", title: "Practice Owner, Houston Medical Center", body: "Cardinal's SEO work tripled our organic patient inquiries in 6 months. Their schema markup implementation made us the featured snippet for our top 10 keywords. Incredible ROI.", rating: 5 },
      { author: "Mark Davidson", title: "CMO, TechScale SaaS", body: "We went from page 3 to position 1 for our highest-value keyword. The content strategy they built generates 200+ qualified leads per month from organic search alone.", rating: 5 },
      { author: "Patricia Nguyen", title: "CEO, E-commerce Direct", body: "Our organic revenue increased 420% in the first year. Cardinal's technical SEO expertise fixed issues we didn't even know existed. Best marketing investment we've made.", rating: 5 },
    ],
    faqs: [
      { question: "How long until I see results?", answer: "Most clients see measurable improvement in 3–4 months and strong results at 6–12 months. Technical fixes can show results within weeks. SEO compounds — the longer you invest, the stronger it gets." },
      { question: "Do you guarantee first-page rankings?", answer: "No honest SEO company can guarantee rankings — Google uses 200+ factors. What we guarantee is a proven process and transparent reporting. 85% of our clients reach page one for their target keywords within 6–12 months." },
      { question: "Which plan should I choose?", answer: "Foundation is best for a single-location business focused on its city. Growth adds content and link building to outrank competitors. Domination is for multi-location businesses or very competitive markets." },
      { question: "What will I see in my monthly report?", answer: "Your keyword rankings, website traffic, calls and form leads from search, what we did that month, and what's planned next — in plain English." },
      { question: "Can SEO work alongside paid ads?", answer: "Yes — they work best together. Ads bring traffic right away while SEO builds long-term traffic you don't pay for per click. We can coordinate both." },
      { question: "Am I locked into a long contract?", answer: "No. Our SEO plans are month-to-month. We earn your business every month with results." },
    ],
    related: ["digital-marketing", "web-development", "ux-ui"],
    localLinks: [
      { label: "SEO Company Houston", href: "/houston-seo-company" },
      { label: "Houston SEO Services", href: "/houston-seo" },
      { label: "Web Design Houston", href: "/houston-web-design" },
    ],
    seo: {
      title: "SEO Company Houston TX | Local SEO, Technical SEO & Content",
      description: "SEO services for Houston businesses: Google Business Profile, technical SEO, content, and link building with transparent monthly reporting. Month-to-month plans from $1,500/mo.",
      keywords: [
        "SEO company Houston", "best SEO company Houston", "#1 SEO company Houston", "Houston SEO company", "local SEO Houston",
        "SEO services Houston TX", "Houston SEO agency", "technical SEO Houston", "schema markup Houston", "link building Houston",
        "Google Business Profile Houston", "Houston SEO specialist", "SEO optimization Houston", "organic traffic Houston", "keyword research Houston",
        "on-page SEO Houston", "SEO audit Houston", "SEO services near me Houston", "search engine optimization Houston TX", "Houston local SEO company",
      ],
      serviceName: "SEO & Analytics Services",
      serviceDescription: "Comprehensive SEO optimization and analytics that drive real results. Technical SEO, schema markup, content strategy, and link building for sustainable organic growth.",
      serviceType: "SEOService",
      category: "SEO & Analytics",
      duration: "P1M",
      aggregateRating: { ratingValue: 4.9, reviewCount: 67 },
      reviewDate: "2025-03-01",
    },
  },

  // ─────────────────────────────── Digital Marketing ───────────────────────────────
  {
    slug: "digital-marketing",
    research: [
      { value: "71%", label: "of U.S. adults use Facebook and 50% use Instagram — the core reach of paid social campaigns.", source: "Pew Research Center, Americans' Social Media Use", year: "2025", url: "https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/" },
      { value: "8.4%", label: "more retail conversions from a 0.1-second mobile speed improvement — landing-page speed directly affects ad ROI.", source: "Deloitte & Google, Milliseconds Make Millions", year: "2020", url: "https://web.dev/case-studies/milliseconds-make-millions" },
    ],
    path: "/services/digital-marketing",
    icon: Megaphone,
    group: "Grow",
    name: "Digital Marketing",
    headline: "Campaigns that generate measurable pipeline",
    summary: "We run your Google ads, social media, and email marketing — and show you exactly which dollars turned into customers.",
    menuBlurb: "Ads, social media & email",
    startingAt: "$2,500",
    startingBilling: "per month",
    whoItsFor: [
      "You need qualified leads this quarter, not next year",
      "You're spending on ads without clear attribution",
      "Your team needs senior marketing capacity without new hires",
    ],
    included: [
      { icon: Target, title: "Google & Meta ads", description: "Ads shown to people already looking for what you sell." },
      { icon: Users, title: "Social media", description: "Content and management for the platforms your customers use." },
      { icon: Mail, title: "Email marketing", description: "Automated emails that turn leads into repeat customers." },
      { icon: Video, title: "Content creation", description: "Ad creative, posts, and videos made by our team." },
      { icon: LineChart, title: "Clear tracking", description: "See which campaigns bring in leads and sales." },
      { icon: Star, title: "Landing pages", description: "Pages built to turn ad clicks into calls and sales." },
    ],
    tiers: [
      {
        level: "Foundation",
        name: "Starter",
        price: "$2,500",
        billing: "per month",
        bestFor: "Building a steady, measurable flow of leads.",
        features: [
          "2 marketing channels managed",
          "Social media on 3 platforms",
          "4 email campaigns per month",
          "Ads management (up to $2K/mo ad spend)",
          "4 pieces of content per month",
          "Monthly report & strategy call",
          "Dedicated account manager",
        ],
      },
      {
        level: "Growth",
        name: "Growth",
        price: "$5,000",
        billing: "per month",
        bestFor: "Businesses ready to scale what's working.",
        popular: true,
        features: [
          "Everything in Starter",
          "4 marketing channels managed",
          "Ads management (up to $10K/mo ad spend)",
          "8 pieces of content per month",
          "Automated email sequences",
          "A/B testing & landing page optimization",
          "Custom results dashboard",
          "Strategy calls every 2 weeks",
        ],
      },
      {
        level: "Enterprise",
        name: "Enterprise",
        price: "$10,000+",
        billing: "per month",
        bestFor: "Established brands running every channel.",
        features: [
          "Everything in Growth",
          "Unlimited channels & ad spend",
          "Video production & editing",
          "Influencer partnerships",
          "Advanced attribution tracking",
          "Dedicated marketing team",
          "Weekly reports & strategy calls",
        ],
      },
    ],
    process: [
      consultStep,
      planStep("campaigns"),
      { title: "Create & launch", description: "We make the ads, posts, and emails, then launch with testing from day one." },
      { title: "Report & improve", description: "We shift budget to what's working and report the results to you every month." },
    ],
    stats: [
      { value: "3x–5x", label: "Avg Client ROI" },
      { value: "100+", label: "Campaigns Managed" },
      { value: "45%", label: "Avg Cost Per Lead Reduction" },
      { value: "4.9★", label: "Client Satisfaction" },
    ],
    capabilities: ["Google Ads", "Social Media", "Email Marketing", "Content Strategy"],
    highlights: ["3x–5x Avg ROI", "100+ Campaigns", "45% Lower Cost/Lead"],
    testimonials: [
      { author: "James Mitchell", title: "CEO, E-commerce Direct", body: "Cardinal's marketing team generated $1.2M in revenue from a $200K ad spend. Their attribution modeling showed us exactly which channels were driving sales. Game-changing.", rating: 5 },
      { author: "Dr. Sarah Lee", title: "Practice Owner, Premier Dental Group", body: "We went from 15 new patients per month to 85. Cardinal's Google Ads and local marketing strategy completely transformed our practice growth.", rating: 5 },
      { author: "Tom Henderson", title: "VP Marketing, CloudScale Tech", body: "Our LinkedIn content strategy generates 50+ qualified demo requests per month. Cardinal understands B2B marketing at a deep level.", rating: 5 },
    ],
    faqs: [
      { question: "How fast will I see results?", answer: "Ads can bring in leads within the first week. Email usually shows results in the first month, and social media growth in 2–3 months. You'll get updates from day one." },
      { question: "Is ad spend included in the price?", answer: "The plan price covers our management, content, and reporting. Your ad budget is separate and goes directly to the ad platforms. Each plan lists how much ad spend it covers." },
      { question: "Which channels should my business use?", answer: "It depends on your customers. B2B companies usually do best with Google Ads, LinkedIn, and email. Consumer brands often do best with Instagram, Facebook, and TikTok. We'll recommend a mix on your free consultation." },
      { question: "How much should I spend on ads?", answer: "We recommend at least $2,000 per month per channel for meaningful results. We'll help you split your budget where it will do the most." },
      { question: "Do you create the ads and content?", answer: "Yes. Our copywriters, designers, and video editors create the ads, social posts, emails, and landing pages." },
      { question: "Can you work with our in-house team?", answer: "Absolutely. We often handle specific areas — like ads or analytics — and fit into your team's existing workflow." },
    ],
    related: ["seo-analytics", "web-development", "brand-identity"],
    localLinks: [
      { label: "SEO Company Houston", href: "/houston-seo-company" },
      { label: "Houston SEO Services", href: "/houston-seo" },
      { label: "Web Design Houston", href: "/houston-web-design" },
    ],
    seo: {
      title: "Digital Marketing Agency Houston TX | PPC & Social Media Marketing",
      description: "Digital marketing agency in Houston: Google Ads, paid social, email marketing, and landing pages — with reporting that ties every campaign to leads and revenue. Call (281) 901-7016.",
      keywords: [
        "digital marketing agency Houston", "Houston digital marketing company", "PPC agency Houston", "Google Ads Houston", "social media marketing Houston",
        "email marketing Houston", "content marketing Houston", "paid advertising Houston TX", "digital marketing services Houston", "Houston marketing agency",
        "Facebook Ads Houston", "Instagram marketing Houston", "online marketing Houston", "digital marketing near me Houston", "best digital marketing agency Houston",
        "Houston PPC management", "performance marketing Houston", "digital advertising Houston", "inbound marketing Houston TX", "marketing ROI Houston",
      ],
      serviceName: "Digital Marketing Services",
      serviceDescription: "Strategic digital marketing campaigns that drive growth. PPC, social media, email marketing, content strategy with measurable ROI and transparent reporting.",
      serviceType: "MarketingService",
      category: "Digital Marketing",
      duration: "P1M",
      aggregateRating: { ratingValue: 4.9, reviewCount: 73 },
      reviewDate: "2025-01-20",
    },
  },

  // ─────────────────────────── Social Media Management ───────────────────────────
  {
    slug: "social-media-management",
    path: "/services/social-media-management",
    icon: Share2,
    group: "Grow",
    name: "Social Media Management",
    headline: "Social media that builds trust and brings in business",
    summary: "We plan, create, publish, and manage your social channels — and answer your audience — so your brand stays active, consistent, and visible where customers spend their time.",
    menuBlurb: "Content, community & paid social",
    startingAt: "Custom",
    startingBilling: "per month",
    research: [
      { value: "73%", label: "of consumers expect brands to respond on social media within 24 hours or sooner.", source: "Sprout Social Index", year: "2025", url: "https://sproutsocial.com/insights/social-media-response-time/" },
      { value: "84%", label: "of U.S. adults use YouTube, 71% use Facebook, and 50% use Instagram.", source: "Pew Research Center, Americans' Social Media Use", year: "2025", url: "https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/" },
    ],
    whoItsFor: [
      "Your social accounts are inactive, inconsistent, or off-brand",
      "Comments and messages sit unanswered for days",
      "You post regularly but can't connect social media to leads or sales",
    ],
    included: [
      { icon: CalendarDays, title: "Strategy & content calendar", description: "A monthly plan built around your goals, audience, and the platforms that matter for your business." },
      { icon: Clapperboard, title: "Custom creative", description: "On-brand graphics, short-form video, and copy produced by our design team — no generic templates." },
      { icon: Share2, title: "Publishing & scheduling", description: "Posts published at the right times on every channel, with platform-specific formats and hashtags." },
      { icon: MessageSquare, title: "Community management", description: "We monitor and respond to comments and messages so customers get timely, on-brand answers." },
      { icon: Target, title: "Paid social campaigns", description: "Targeted Meta, LinkedIn, and TikTok ads that reach new customers and retarget warm audiences." },
      { icon: BarChart3, title: "Reporting that ties to revenue", description: "Monthly reports on reach, engagement, clicks, and leads — with what we'll change next month." },
    ],
    tiers: [
      {
        level: "Foundation",
        name: "Social Essentials",
        price: "Custom",
        billing: "custom quote",
        bestFor: "A consistent, professional presence on your most important channels.",
        features: [
          "2 platforms managed",
          "12 posts per month",
          "Monthly content calendar",
          "Branded graphics & copy",
          "Publishing & scheduling",
          "Business-day community management",
          "Monthly performance report",
        ],
      },
      {
        level: "Growth",
        name: "Social Growth",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Growing reach and turning followers into leads.",
        popular: true,
        features: [
          "Everything in Social Essentials",
          "Up to 4 platforms managed",
          "20 posts per month, including short-form video",
          "Paid social campaign management (ad spend separate)",
          "Audience & competitor analysis",
          "Monthly strategy call",
        ],
      },
      {
        level: "Enterprise",
        name: "Social Program",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Multi-brand or multi-location organizations.",
        features: [
          "Everything in Social Growth",
          "All relevant platforms",
          "Video production & editing",
          "Social listening & reputation monitoring",
          "Influencer & creator partnerships",
          "Dedicated social media manager",
          "Weekly reporting",
        ],
      },
    ],
    process: [
      consultStep,
      planStep("social strategy"),
      { title: "Create & publish", description: "We produce the content, you approve it, and we publish and manage your channels every day." },
      { title: "Report & improve", description: "Monthly reporting shows what's working, and we double down on the content that drives results." },
    ],
    faqs: [
      { question: "Which social media platforms should my business be on?", answer: "Only the ones your customers use. In the U.S., YouTube (84% of adults) and Facebook (71%) have the broadest reach, Instagram reaches half of adults, and LinkedIn is the strongest channel for B2B. We recommend a focused mix on your consultation rather than spreading thin." },
      { question: "Do you create the content, or do we?", answer: "We do. Our team writes the copy and produces the graphics and short-form video. You review and approve everything before it's published, and you can send us photos, news, or ideas any time." },
      { question: "Do you respond to comments and messages?", answer: "Yes. Community management is included in every plan. We respond to routine comments and messages on your behalf and escalate anything that needs your team, like pricing questions or complaints." },
      { question: "Is ad spend included?", answer: "No. Our fee covers strategy, creative, and campaign management. Your ad budget is paid directly to the platforms, so you always see exactly where it goes." },
      { question: "How do you measure results?", answer: "We track reach, engagement, website clicks, and leads from social each month, and connect them to your analytics so you can see which posts and campaigns drive business — not just likes." },
    ],
    related: ["digital-marketing", "brand-identity", "seo-analytics"],
    localLinks: [
      { label: "Houston SEO Services", href: "/houston-seo" },
      { label: "Web Design Houston", href: "/houston-web-design" },
    ],
    seo: {
      title: "Social Media Management Houston TX | Content, Community & Paid Social",
      description: "Social media management for Houston businesses: strategy, custom content, publishing, community management, and paid social — with monthly reporting tied to leads. Call (281) 901-7016.",
      keywords: [
        "social media management Houston", "social media marketing agency Houston", "social media agency Houston TX", "social media manager Houston",
        "Instagram marketing Houston", "Facebook marketing Houston", "LinkedIn marketing Houston", "TikTok marketing Houston",
        "social media content creation Houston", "community management services", "paid social advertising Houston", "B2B social media management",
      ],
      serviceName: "Social Media Management Services",
      serviceDescription: "Social media strategy, content creation, publishing, community management, and paid social campaigns with monthly reporting.",
      serviceType: "MarketingService",
      category: "Social Media Management",
      duration: "P1M",
    },
  },

  // ─────────────────────────── AI & Automation ───────────────────────────
  {
    slug: "ai-automation",
    path: "/services/ai-automation",
    icon: Bot,
    group: "Build",
    name: "AI & Automation",
    headline: "Practical AI that removes manual work",
    summary: "We find where AI and automation will genuinely pay off, then build secure assistants, workflow automations, and integrations that connect to the systems you already use.",
    menuBlurb: "AI assistants & workflow automation",
    startingAt: "Custom",
    startingBilling: "custom quote",
    research: [
      { value: "88%", label: "of organizations now use AI regularly in at least one business function, up from 78% a year earlier.", source: "McKinsey, The State of AI", year: "2025", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
      { value: "~1 in 3", label: "organizations have begun scaling AI across the enterprise — most are still stuck in pilots.", source: "McKinsey, The State of AI", year: "2025", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
    ],
    whoItsFor: [
      "Your team spends hours on data entry, follow-ups, or reporting",
      "You want to use AI but aren't sure where it will actually pay off",
      "Leads, documents, or support requests need faster, more consistent handling",
    ],
    included: [
      { icon: Compass, title: "AI opportunity assessment", description: "We map your workflows and rank automation opportunities by time saved, risk, and cost to build." },
      { icon: Bot, title: "Custom AI assistants", description: "Chat and voice assistants trained on your own content to answer customers and support your team." },
      { icon: Workflow, title: "Workflow automation", description: "Connect your CRM, email, forms, scheduling, and spreadsheets so routine work happens automatically." },
      { icon: Files, title: "Document processing", description: "Extract, classify, and summarize data from forms, invoices, contracts, and intake documents." },
      { icon: Plug, title: "Integrations & APIs", description: "Secure connections between AI services and the business systems you already rely on." },
      { icon: ShieldCheck, title: "Guardrails & monitoring", description: "Access controls, data-privacy safeguards, human review where it matters, and ongoing quality monitoring." },
    ],
    tiers: [
      {
        level: "Foundation",
        name: "AI Opportunity Assessment",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Knowing exactly where AI will pay off before you invest.",
        features: [
          "Workflow & data review",
          "Prioritized list of automation opportunities",
          "Estimated time and cost savings",
          "Risk, privacy & compliance review",
          "Recommended tools and build plan",
          "Executive readout",
        ],
      },
      {
        level: "Growth",
        name: "Automation Build",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Launching one or two high-impact automations or assistants.",
        popular: true,
        features: [
          "Everything in the Assessment",
          "Custom AI assistant or workflow automation",
          "Integration with your existing systems",
          "Testing with real data and users",
          "Team training & documentation",
          "30 days of post-launch tuning",
        ],
      },
      {
        level: "Enterprise",
        name: "AI Program",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Rolling out AI across departments with governance.",
        features: [
          "Everything in Automation Build",
          "Multiple assistants & automations",
          "AI usage policy & governance framework",
          "Security review & access controls",
          "Usage, quality & ROI dashboards",
          "Ongoing optimization & support",
        ],
      },
    ],
    process: [
      consultStep,
      planStep("AI roadmap"),
      { title: "Build & test", description: "We build in short cycles, test with your real data and people, and add guardrails before launch." },
      { title: "Launch & measure", description: "We roll out, train your team, and track time saved and quality so the value is visible." },
    ],
    faqs: [
      { question: "Where does AI usually pay off first for a business?", answer: "The fastest wins are repetitive, text-heavy tasks: answering common customer questions, qualifying and routing leads, processing intake forms and documents, drafting follow-ups, and building reports. We confirm the right starting point in the assessment." },
      { question: "Is our data safe?", answer: "We design for privacy from the start: access controls, encryption, and enterprise AI services that don't train on your data. For regulated information we recommend architecture that keeps sensitive data within approved systems, with human review where accuracy matters." },
      { question: "Will AI replace our staff?", answer: "Our focus is removing low-value manual work so your people can spend time on customers and higher-value tasks. Most projects are measured in hours saved per week and faster response times." },
      { question: "Can AI connect to our existing CRM and tools?", answer: "Usually, yes. We integrate with common CRMs, email, scheduling, spreadsheets, and databases through their APIs, and build custom connectors when needed." },
      { question: "How do we know it's working?", answer: "Every build includes success measures agreed upfront — such as hours saved, response time, or accuracy — and we report against them after launch." },
    ],
    related: ["technical-consulting", "web-development", "mobile-apps"],
    localLinks: [
      { label: "AI & Automation for Industry", href: "/industry/ai-automation" },
      { label: "App Development Houston", href: "/houston-app-development" },
    ],
    seo: {
      title: "AI & Automation Consulting Houston TX | AI Assistants & Workflow Automation",
      description: "AI and automation services for Houston businesses: opportunity assessments, custom AI assistants, workflow automation, and secure integrations with your existing systems.",
      keywords: [
        "AI consulting Houston", "AI automation agency Houston", "business process automation Houston", "AI chatbot development Houston",
        "workflow automation services", "AI integration services", "custom AI assistant development", "AI consultant for small business",
        "document processing automation", "CRM automation Houston",
      ],
      serviceName: "AI & Automation Services",
      serviceDescription: "AI opportunity assessments, custom AI assistants, workflow automation, document processing, and secure integrations.",
      serviceType: "ProfessionalService",
      category: "AI & Automation",
      duration: "P6W",
    },
  },

  // ─────────────────────────── Technical Consulting ───────────────────────────
  {
    slug: "technical-consulting",
    path: "/services/technical-consulting",
    icon: Network,
    group: "Advise",
    name: "Technical Consulting",
    headline: "Senior technical guidance for confident decisions",
    summary: "Architecture reviews, technology roadmaps, cloud and security assessments, and fractional CTO leadership — so you invest in the right technology and avoid expensive mistakes.",
    menuBlurb: "Fractional CTO, architecture & cloud",
    startingAt: "Custom",
    startingBilling: "custom quote",
    research: [
      { value: "84%", label: "of organizations say managing cloud spend is their top cloud challenge.", source: "Flexera, State of the Cloud Report", year: "2025", url: "https://www.flexera.com/about-us/press-center/new-flexera-report-finds-84-percent-of-organizations-struggle-to-manage-cloud-spend" },
      { value: "$10.22M", label: "average cost of a data breach for U.S. organizations — a record high (global average: $4.44M).", source: "IBM, Cost of a Data Breach Report", year: "2025", url: "https://www.ibm.com/reports/data-breach" },
    ],
    whoItsFor: [
      "You're facing a major technology decision and want an independent expert view",
      "Cloud costs, outages, or security gaps keep growing",
      "You need CTO-level leadership without a full-time executive hire",
    ],
    included: [
      { icon: Compass, title: "Technology strategy & roadmaps", description: "A prioritized plan that ties technology investments to business goals, budgets, and timelines." },
      { icon: ClipboardCheck, title: "Architecture & code reviews", description: "Independent review of your platform's design, code quality, scalability, and technical debt." },
      { icon: Server, title: "Cloud cost & performance", description: "Find waste, right-size infrastructure, and improve reliability across AWS, Azure, or Google Cloud." },
      { icon: ShieldCheck, title: "Security & compliance readiness", description: "Assess against OWASP practices and prepare for HIPAA, SOC 2, or customer security reviews." },
      { icon: Layers, title: "Vendor & platform selection", description: "Objective evaluation of software, agencies, and platforms before you sign a contract." },
      { icon: Users, title: "Fractional CTO", description: "Ongoing technical leadership: guide your team, manage vendors, and represent technology to your board." },
    ],
    tiers: [
      {
        level: "Foundation",
        name: "Technical Assessment",
        price: "Custom",
        billing: "custom quote",
        bestFor: "An independent, written review of one platform or decision.",
        features: [
          "Stakeholder interviews",
          "Architecture, code, or cloud review",
          "Security & risk findings, ranked by severity",
          "Cost and performance recommendations",
          "Written report & prioritized roadmap",
          "Executive readout",
        ],
      },
      {
        level: "Growth",
        name: "Advisory Retainer",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Ongoing senior guidance for your team and vendors.",
        popular: true,
        features: [
          "Everything in the Assessment",
          "Monthly advisory hours",
          "Architecture & vendor decision support",
          "Roadmap and budget planning",
          "Security & compliance check-ins",
          "On-call access for critical decisions",
        ],
      },
      {
        level: "Enterprise",
        name: "Fractional CTO",
        price: "Custom",
        billing: "custom quote",
        bestFor: "Part-time executive technology leadership.",
        features: [
          "Everything in Advisory Retainer",
          "Technology leadership & team guidance",
          "Hiring & vendor management",
          "Board and investor technical reporting",
          "Security program oversight",
          "Defined weekly time commitment",
        ],
      },
    ],
    process: [
      consultStep,
      planStep("engagement"),
      { title: "Assess & advise", description: "We review your systems, interview your team, and deliver clear, prioritized recommendations." },
      { title: "Guide execution", description: "We stay involved to guide your team and vendors through the changes that matter most." },
    ],
    faqs: [
      { question: "What is a fractional CTO?", answer: "A fractional CTO is an experienced technology executive who works with your company part-time. You get senior leadership for strategy, architecture, vendors, and team guidance without the cost of a full-time hire." },
      { question: "When should a business hire a technical consultant?", answer: "Common triggers are a major platform decision, rising cloud bills, a security review from a customer or insurer, a failing vendor relationship, or a product that isn't scaling. An independent review before you commit usually costs far less than fixing the wrong decision later." },
      { question: "Can you review work done by another agency or developer?", answer: "Yes. Independent code and architecture reviews are a core part of our consulting. We document what's working, what's risky, and the most cost-effective path forward." },
      { question: "Do you help with HIPAA or SOC 2 readiness?", answer: "We assess your systems and practices against the relevant requirements and help you close technical gaps. Formal certification is performed by an independent auditor; we help you get ready." },
      { question: "Which cloud platforms do you work with?", answer: "AWS, Microsoft Azure, and Google Cloud, plus modern hosting platforms like Vercel, Netlify, and Supabase." },
    ],
    related: ["ai-automation", "web-development", "website-maintenance"],
    localLinks: [
      { label: "Web Developer Houston", href: "/houston-web-developer" },
      { label: "App Development Houston", href: "/houston-app-development" },
    ],
    seo: {
      title: "Technical Consulting & Fractional CTO Houston TX | Cloud, Architecture & Security",
      description: "Independent technical consulting in Houston: technology roadmaps, architecture and code reviews, cloud cost and security assessments, and fractional CTO leadership.",
      keywords: [
        "technical consulting Houston", "fractional CTO Houston", "IT consulting Houston", "technology consultant Houston",
        "software architecture review", "code audit services", "cloud cost optimization consulting", "cloud consulting Houston",
        "HIPAA compliance readiness", "SOC 2 readiness consulting", "technology roadmap consulting", "CTO as a service",
      ],
      serviceName: "Technical Consulting & Fractional CTO Services",
      serviceDescription: "Technology strategy, architecture and code reviews, cloud cost and security assessments, and fractional CTO leadership.",
      serviceType: "ProfessionalService",
      category: "Technical Consulting",
      duration: "P1M",
    },
  },

  // ─────────────────────────── Website Care & Maintenance ───────────────────────────
  {
    slug: "website-maintenance",
    path: "/services/website-maintenance",
    icon: Wrench,
    group: "Advise",
    name: "Website Care & Maintenance",
    headline: "Your website, always fast, secure, and up to date",
    summary: "Monthly care plans covering updates, backups, security monitoring, uptime, and content changes — so your site keeps performing without taking up your time.",
    menuBlurb: "Care plans, security & updates",
    startingAt: "$299",
    startingBilling: "per month",
    research: [
      { value: "11,334", label: "new security vulnerabilities were found in the WordPress ecosystem in 2025 — up 42% in a year, most of them in plugins.", source: "Patchstack, State of WordPress Security", year: "2026", url: "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" },
      { value: "53%", label: "of mobile visits are abandoned when a page takes longer than three seconds to load — speed needs ongoing care.", source: "Google, The Need for Mobile Speed", year: "2016", url: "https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/" },
    ],
    whoItsFor: [
      "Nobody on your team owns website updates, backups, or security",
      "Your site has been hacked, gone down, or slowed over time",
      "Small content changes take weeks because you don't have a developer",
    ],
    included: [
      { icon: RefreshCw, title: "Software & plugin updates", description: "Tested updates every month so your site stays compatible and protected." },
      { icon: DatabaseBackup, title: "Daily cloud backups", description: "Automatic off-site backups with restore support if anything goes wrong." },
      { icon: Activity, title: "24/7 uptime monitoring", description: "We're alerted the moment your site goes down — often before your customers notice." },
      { icon: ShieldCheck, title: "Security scanning & cleanup", description: "Malware scanning, hardening, and removal if an issue is found." },
      { icon: Gauge, title: "Speed & Core Web Vitals", description: "Ongoing performance monitoring so your site stays fast for visitors and search engines." },
      { icon: PenLine, title: "Content updates", description: "Monthly hours for text, image, and page changes — just send a request." },
    ],
    tiers: carePlans,
    process: [
      consultStep,
      { title: "Site health check", description: "We audit your current site for security, speed, backups, and outdated software before onboarding." },
      { title: "Secure & stabilize", description: "We fix critical issues, set up monitoring and backups, and document your site." },
      { title: "Ongoing care", description: "Monthly updates, monitoring, and content changes, with a report on everything we did." },
    ],
    faqs: [
      { question: "How much does website maintenance cost?", answer: "Our care plans start at $299 per month for essentials (updates, daily backups, uptime monitoring, security scanning, and one hour of content changes). Care Plus is $499 and Care Pro is $799 per month, with more support hours and proactive improvements." },
      { question: "Do you maintain websites you didn't build?", answer: "Yes. We start with a site health check to understand its condition, fix any critical issues, then move it onto a care plan." },
      { question: "What happens if my site is hacked or goes down?", answer: "Uptime monitoring alerts us immediately. We restore from a clean backup or remove the malware, then patch the cause. Security cleanup is included in every plan." },
      { question: "Are there long-term contracts?", answer: "No. Care plans are month-to-month." },
      { question: "Why do websites need ongoing maintenance?", answer: "Software, plugins, and browsers change constantly, and new vulnerabilities are discovered every day — Patchstack recorded 11,334 new WordPress-ecosystem vulnerabilities in 2025 alone. Regular updates, backups, and monitoring keep your site secure, fast, and working." },
    ],
    related: ["web-development", "technical-consulting", "seo-analytics"],
    localLinks: [
      { label: "Web Design Houston", href: "/houston-web-design" },
      { label: "Web Developer Houston", href: "/houston-web-developer" },
    ],
    seo: {
      title: "Website Maintenance & Care Plans Houston TX | Updates, Security & Support",
      description: "Website maintenance plans for Houston businesses from $299/month: updates, daily backups, 24/7 uptime monitoring, security scanning, speed optimization, and content changes.",
      keywords: [
        "website maintenance Houston", "website maintenance services", "website care plans", "WordPress maintenance Houston",
        "website support Houston", "website security monitoring", "website management services", "monthly website maintenance cost",
      ],
      serviceName: "Website Care & Maintenance Plans",
      serviceDescription: "Monthly website maintenance: updates, daily backups, uptime monitoring, security scanning, performance optimization, and content changes.",
      serviceType: "ProfessionalService",
      category: "Website Maintenance",
      duration: "P1M",
    },
  },
];



export const serviceGroups: { group: ServiceGroup; title: string; description: string }[] = [
  { group: "Build", title: "Build", description: "Websites, web platforms, and mobile apps engineered to perform." },
  { group: "Design", title: "Design", description: "Brand and experience design that earns trust and drives action." },
  { group: "Grow", title: "Grow", description: "Search, social, and performance marketing that builds measurable pipeline." },
  { group: "Advise", title: "Advise & Support", description: "Senior technical guidance and ongoing care for the platforms you rely on." },
];

export const tierLevelCopy: Record<TierLevel, string> = {
  Foundation: "Establish the essentials",
  Growth: "Our most common engagement",
  Enterprise: "Complex, multi-team programs",
};

export function getService(slug: string): ServiceDefinition {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}

/** "$1,500" -> 1500, "$5K+" -> 5000, "Custom" -> undefined (for schema.org) */
export function priceToNumber(price: string): number | undefined {
  const match = price.replace(/,/g, "").match(/(\d+(?:\.\d+)?)\s*(k)?/i);
  if (!match) return undefined;
  return parseFloat(match[1]) * (match[2] ? 1000 : 1);
}

export function formatStartingAt(service: ServiceDefinition): string {
  return service.startingBilling === "per month" ? `${service.startingAt}/mo` : service.startingAt;
}
