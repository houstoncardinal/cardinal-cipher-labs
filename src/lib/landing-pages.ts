import type { LucideIcon } from "lucide-react";
import {
  Paintbrush, Smartphone, Search, Zap, MapPin, PenLine, Plug, Gauge, ShieldCheck, Scale, CalendarCheck,
  FileText, Users, Stethoscope, Lock, UtensilsCrossed, ShoppingCart, CreditCard, Package, Home, Building2,
  LineChart, Cpu, Bot, HardHat, Camera, ClipboardList, Megaphone, Star, BookOpen, Layers, Globe,
} from "lucide-react";
import type { ResearchStat } from "@/lib/services-catalog";

/**
 * Industry and Houston landing pages. One template (LandingPageLayout) renders all of them.
 * Accuracy rules for this file: no unverifiable superlatives ("#1", "best"), no invented
 * statistics, regulatory statements kept general and pointed at the client's own counsel,
 * and every research figure cites a checkable source.
 */
export interface LandingPage {
  path: string;
  kind: "houston" | "industry";
  /** Short name for menus, footer and breadcrumbs */
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  /** Pre-selects the contact form */
  primaryService: string;
  /** Phrase within the headline shown in red (classic page design) */
  accent?: string;
  /** Four true, verifiable facts for the stats band */
  facts?: { value: string; label: string }[];
  /** Areas listed in the "Serving Houston" section (Houston pages) */
  neighborhoods?: string[];
  atAGlance: string[];
  challenges: string[];
  features: { icon: LucideIcon; title: string; description: string }[];
  considerations?: { title: string; body: string }[];
  research?: ResearchStat[];
  investment: { label: string; value: string; note: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
  caseStudies?: string[];
  seo: { title: string; description: string; keywords: string[] };
}

const HOUSTON_AREAS = [
  "Downtown Houston", "Uptown / Galleria", "Midtown", "The Heights", "Montrose", "River Oaks", "Memorial", "Energy Corridor",
  "Westchase", "Bellaire", "Medical Center", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress", "Spring",
  "Kingwood", "Pasadena", "League City", "Missouri City", "Friendswood", "Tomball", "Conroe",
];

/** Facts drawn from Cardinal's own pricing and process — no unverifiable performance claims. */
const WEBSITE_FACTS = [
  { value: "$1,500", label: "Websites starting at" },
  { value: "72 hrs–2 wks", label: "Typical launch time" },
  { value: "24 hrs", label: "Reply to every inquiry" },
  { value: "WCAG 2.1 AA", label: "Accessibility target" },
];

const websiteInvestment = [
  { label: "Marketing website", value: "From $1,500", note: "Up to 5 custom pages, typically live in 72 hours to 2 weeks." },
  { label: "Commerce & integrations", value: "From $3,500", note: "Online sales, payments, and connections to your systems." },
  { label: "Website care plans", value: "From $299/mo", note: "Updates, backups, security monitoring, and content changes." },
];

const LIGHTHOUSE_SPEED: ResearchStat = {
  value: "53%",
  label: "of mobile site visits are abandoned when a page takes longer than three seconds to load.",
  source: "Google, The Need for Mobile Speed",
  year: "2016",
  url: "https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/",
};
const REVIEWS_READ: ResearchStat = {
  value: "Only 4%",
  label: "of consumers say they never read online reviews when choosing a local business.",
  source: "BrightLocal, Local Consumer Review Survey",
  year: "2025",
  url: "https://www.brightlocal.com/research/local-consumer-review-survey-2025/",
};

export const landingPages: LandingPage[] = [
  // ─────────────────────────── Houston web design ───────────────────────────
  {
    path: "/houston-web-design",
    accent: "Houston businesses that want more customers",
    facts: WEBSITE_FACTS,
    neighborhoods: HOUSTON_AREAS,
    kind: "houston",
    name: "Web Design Houston",
    eyebrow: "Houston web design",
    headline: "Web design for Houston businesses that want more customers",
    summary:
      "Cardinal Consulting is a Houston web design company headquartered in Uptown near the Galleria. We design and build fast, custom, search-ready websites for Houston companies — from five-page marketing sites to e-commerce stores and customer portals.",
    primaryService: "web-development",
    atAGlance: [
      "Custom design — no templates",
      "Mobile-first and built for Core Web Vitals",
      "SEO setup and Google Business Profile guidance included",
      "Marketing sites from $1,500, typically live in 72 hours to 2 weeks",
      "Local team at 2100 West Loop S Fwy, Houston",
    ],
    challenges: [
      "Your website looks dated next to competitors and doesn't reflect the quality of your work",
      "Visitors land on your site but don't call, book, or fill out a form",
      "You don't show up when people in Houston search for what you do",
      "Making simple updates means waiting on a developer for days",
    ],
    features: [
      { icon: Paintbrush, title: "Custom design", description: "Designed around your brand, services, and customers in Figma, then approved by you before we build." },
      { icon: Smartphone, title: "Mobile-first build", description: "Most local searches happen on phones, so every page is designed for small screens first." },
      { icon: Gauge, title: "Fast by default", description: "Optimized images, modern code, and global hosting so pages load quickly on any connection." },
      { icon: Search, title: "Local SEO foundations", description: "Page titles, structured data, location and service pages, and Google Business Profile alignment." },
      { icon: PenLine, title: "Easy to update", description: "Edit text, photos, and pages yourself, or let us handle changes on a care plan." },
      { icon: Plug, title: "Connected to your tools", description: "Forms, booking, payments, CRM, and email marketing wired in and tested." },
    ],
    considerations: [
      { title: "Built for how Houston searches", body: "We structure pages around the services you offer and the areas you serve — from the Galleria, Midtown, and the Heights to Katy, Sugar Land, The Woodlands, Pearland, and the Energy Corridor — so search engines understand where you work." },
      { title: "Accessible to every visitor", body: "We design toward WCAG 2.1 AA: readable contrast, keyboard navigation, descriptive links, and form labels. Accessible sites reach more customers and reduce legal risk." },
      { title: "You own everything", body: "Your domain, your content, and your website files belong to you. No lock-in contracts." },
    ],
    research: [
      LIGHTHOUSE_SPEED,
      { value: "8.4%", label: "more retail conversions when key mobile speed metrics improved by 0.1 seconds across 37 brand sites.", source: "Deloitte & Google, Milliseconds Make Millions", year: "2020", url: "https://web.dev/case-studies/milliseconds-make-millions" },
    ],
    investment: websiteInvestment,
    faqs: [
      { question: "How much does a website cost in Houston?", answer: "Cardinal's marketing websites start at $1,500 and e-commerce stores at $3,500 (one-time). Custom platforms are quoted after a free consultation. Website care plans start at $299 per month. Pricing across Houston agencies varies widely, so compare what's included: custom design, mobile performance, SEO setup, and post-launch support." },
      { question: "How long does it take to build a website?", answer: "Most marketing websites go live in 72 hours to 2 weeks after content is ready. E-commerce stores usually take 4–8 weeks. You get a written timeline before we start." },
      { question: "Do you only work with Houston businesses?", answer: "Our office is in Houston and we're glad to meet in person around the metro area, but we also work with clients across the U.S. remotely." },
      { question: "Will my new website rank on Google?", answer: "Every site launches with technical SEO, structured data, and fast load times — the foundation Google needs. Ranking for competitive Houston searches also depends on content, reviews, and links over time, which is what our SEO plans are for. No honest company can guarantee a specific ranking." },
      { question: "Can you redesign my existing website?", answer: "Yes. We review what's working on your current site — pages that rank, forms that convert — keep it, and redirect old URLs so you don't lose search traffic during the redesign." },
    ],
    related: ["web-development", "seo-analytics", "website-maintenance"],
    caseStudies: ["hda-studio", "vargas", "unitedccr"],
    seo: {
      title: "Web Design Houston | Custom Website Design Company in Houston, TX",
      description: "Houston web design company in Uptown near the Galleria. Custom, mobile-first, SEO-ready websites from $1,500, typically live in 72 hours to 2 weeks. Free consultation: (281) 901-7016.",
      keywords: ["web design Houston", "Houston web design company", "website design Houston TX", "Houston web designer", "small business website design Houston", "website redesign Houston", "custom website design Houston", "web design agency Houston"],
    },
  },

  // ─────────────────────────── Law firms ───────────────────────────
  {
    path: "/houston-law-firm-website-design",
    accent: "generate consultations",
    facts: WEBSITE_FACTS,
    neighborhoods: HOUSTON_AREAS,
    kind: "houston",
    name: "Law Firm Web Design",
    eyebrow: "Law firm website design · Houston",
    headline: "Law firm websites that earn trust and generate consultations",
    summary:
      "We design and build websites for Houston law firms and solo attorneys: clear practice-area pages, attorney bios that build credibility, fast mobile performance, and intake forms that turn visitors into consultations.",
    primaryService: "web-development",
    atAGlance: [
      "Practice-area and attorney bio pages",
      "Consultation and intake forms routed to your team",
      "Local SEO for Houston practice areas",
      "Designed with Texas lawyer-advertising rules in mind",
      "Marketing sites from $1,500",
    ],
    challenges: [
      "Prospective clients compare several firms online before calling anyone",
      "Your site doesn't clearly explain what you handle and who you help",
      "Intake requests arrive incomplete or get lost in email",
      "Competing firms appear above you in local search and the map pack",
    ],
    features: [
      { icon: Scale, title: "Practice-area pages", description: "A dedicated, searchable page for each type of matter you handle, written in plain language for clients." },
      { icon: Users, title: "Attorney profiles", description: "Bios with bar admissions, education, and experience presented the way clients look for them." },
      { icon: ClipboardList, title: "Smart intake forms", description: "Short, mobile-friendly consultation requests that capture the case details your team needs." },
      { icon: MapPin, title: "Local search visibility", description: "Location and practice-area structure, structured data, and Google Business Profile alignment." },
      { icon: Lock, title: "Secure by design", description: "HTTPS, protected forms, and careful handling of the information prospective clients share." },
      { icon: Smartphone, title: "Built for mobile", description: "Click-to-call, fast pages, and readable layouts for people searching from their phones." },
    ],
    considerations: [
      { title: "Texas lawyer-advertising rules", body: "Lawyer advertising in Texas is governed by Part VII of the Texas Disciplinary Rules of Professional Conduct. We design with those rules in mind — for example, avoiding unverifiable comparisons and including disclaimers your firm requires — and your firm makes the final compliance call, including any filing with the State Bar of Texas Advertising Review Department." },
      { title: "No attorney-client relationship by accident", body: "Contact forms include clear notices that submitting information doesn't create an attorney-client relationship and that confidential details shouldn't be sent through the form." },
      { title: "Results and reviews", body: "If your firm shows case results or client reviews, we present them with the context and disclaimers your firm approves." },
    ],
    research: [REVIEWS_READ, LIGHTHOUSE_SPEED],
    investment: websiteInvestment,
    faqs: [
      { question: "How much does a law firm website cost?", answer: "Cardinal's law firm websites start at $1,500 for a marketing site with up to five custom pages. Firms with many practice areas, multiple attorneys, or custom intake workflows usually need a larger build, quoted after a free consultation." },
      { question: "Is my website compliant with Texas State Bar advertising rules?", answer: "We build with Part VII of the Texas Disciplinary Rules of Professional Conduct in mind, but compliance is ultimately your firm's responsibility. We recommend your firm review all content before launch and handle any required filing with the State Bar's Advertising Review Department." },
      { question: "Can you help my firm rank for searches like 'personal injury lawyer Houston'?", answer: "Yes — through practice-area pages, local SEO, and an ongoing SEO plan. Legal searches in Houston are highly competitive, so rankings build over months and depend on content, reviews, and links. We don't guarantee rankings." },
      { question: "Can you connect the website to our case-management or intake software?", answer: "Usually, yes. We can route form submissions to email, your CRM, or intake software that offers an integration or API." },
    ],
    related: ["web-development", "seo-analytics", "digital-marketing"],
    caseStudies: ["svrlawfirm"],
    seo: {
      title: "Law Firm Website Design Houston | Attorney Websites That Convert",
      description: "Website design for Houston law firms and attorneys: practice-area pages, attorney bios, intake forms, and local SEO — built with Texas lawyer-advertising rules in mind. From $1,500.",
      keywords: ["law firm website design Houston", "attorney website design Houston", "lawyer website design Texas", "legal website design Houston", "law firm SEO Houston", "personal injury law firm website", "law firm web designer Houston"],
    },
  },

  // ─────────────────────────── Medical practices ───────────────────────────
  {
    path: "/houston-medical-website-design",
    accent: "patients trust",
    facts: WEBSITE_FACTS,
    neighborhoods: HOUSTON_AREAS,
    kind: "houston",
    name: "Medical Practice Web Design",
    eyebrow: "Medical website design · Houston",
    headline: "Medical practice websites that patients trust and can actually use",
    summary:
      "We build websites for Houston medical practices, clinics, and specialists: clear service and provider pages, easy appointment requests, accessible design, and privacy-conscious forms and analytics.",
    primaryService: "web-development",
    atAGlance: [
      "Provider, service, and location pages",
      "Appointment requests and patient-portal links",
      "Accessibility built toward WCAG 2.1 AA",
      "Privacy-conscious forms and analytics setup",
      "Marketing sites from $1,500",
    ],
    challenges: [
      "Patients research providers online and leave if they can't find what they need quickly",
      "Your front desk spends hours answering questions the website should answer",
      "Forms and tracking tools may expose sensitive patient information",
      "Your practice doesn't appear in local searches for your specialty",
    ],
    features: [
      { icon: Stethoscope, title: "Services & specialties", description: "Clear pages for each condition, treatment, and service, written for patients rather than clinicians." },
      { icon: Users, title: "Provider profiles", description: "Credentials, specialties, languages, and locations, so patients can choose the right provider." },
      { icon: CalendarCheck, title: "Appointment requests", description: "Simple request flows or links to your scheduling and patient-portal systems." },
      { icon: Lock, title: "Privacy-conscious forms", description: "Forms that avoid collecting health details unless they're handled by a HIPAA-eligible service." },
      { icon: BookOpen, title: "Patient resources", description: "Insurance, new-patient forms, directions, and FAQs that reduce calls to the front desk." },
      { icon: MapPin, title: "Local visibility", description: "Location pages, structured data, and Google Business Profile alignment for each office." },
    ],
    considerations: [
      { title: "HIPAA and website forms", body: "If a form collects protected health information, it must be processed by a HIPAA-eligible service that will sign a Business Associate Agreement (BAA). When that's not in place, we design forms to collect only contact details and route clinical questions to your secure systems." },
      { title: "Tracking technologies", body: "The U.S. Department of Health and Human Services has issued guidance warning that analytics and advertising tracking tools on healthcare websites can expose protected health information. We configure analytics conservatively, exclude patient-portal and appointment pages from ad tracking, and recommend your compliance team review the setup." },
      { title: "Accessibility", body: "Patients of all abilities need to use your site. We design toward WCAG 2.1 AA, including readable type, color contrast, keyboard navigation, and labeled forms." },
    ],
    research: [LIGHTHOUSE_SPEED, REVIEWS_READ],
    investment: websiteInvestment,
    faqs: [
      { question: "Is my practice website HIPAA compliant?", answer: "A website by itself isn't 'HIPAA certified.' What matters is how it handles protected health information. We keep PHI off standard forms and analytics, and when you need to collect health information online we use HIPAA-eligible services covered by a Business Associate Agreement. Your compliance officer should review the final setup." },
      { question: "Can patients book appointments on the website?", answer: "Yes. We can link to or embed your existing scheduling or patient-portal system, or add a simple appointment-request form that your staff confirms." },
      { question: "How much does a medical practice website cost?", answer: "Practice websites start at $1,500 for up to five custom pages. Multi-location groups, provider directories, and portal integrations are quoted after a free consultation." },
      { question: "Can you help us get more patients from Google?", answer: "Yes. Service and location pages, structured data, and Google Business Profile optimization help patients find you. Our SEO plans continue that work monthly." },
    ],
    related: ["web-development", "seo-analytics", "ux-ui"],
    caseStudies: ["apnclinic", "abqmri"],
    seo: {
      title: "Medical Website Design Houston | Websites for Practices & Clinics",
      description: "Website design for Houston medical practices and clinics: provider and service pages, appointment requests, accessible design, and privacy-conscious forms and analytics. From $1,500.",
      keywords: ["medical website design Houston", "healthcare website design Houston", "doctor website design", "medical practice website", "clinic website design Houston", "HIPAA website forms", "dental website design Houston"],
    },
  },

  // ─────────────────────────── Restaurants ───────────────────────────
  {
    path: "/houston-restaurant-website-design",
    accent: "fill tables and take orders",
    facts: WEBSITE_FACTS,
    neighborhoods: HOUSTON_AREAS,
    kind: "houston",
    name: "Restaurant Web Design",
    eyebrow: "Restaurant website design · Houston",
    headline: "Restaurant websites that fill tables and take orders",
    summary:
      "We design fast, mobile-first websites for Houston restaurants, bars, cafés, and caterers — with menus people can actually read on a phone, and direct links to ordering, reservations, and events.",
    primaryService: "web-development",
    atAGlance: [
      "Mobile-friendly menus (no PDF downloads)",
      "Connects to your ordering and reservation tools",
      "Catering, private events, and gift-card pages",
      "Google Business Profile and local search setup",
      "Marketing sites from $1,500",
    ],
    challenges: [
      "Guests can't read your menu on a phone, or it's out of date",
      "Third-party apps take a commission on orders you could take directly",
      "Your hours, location, and menu differ across Google, Yelp, and your site",
      "Catering and private-event inquiries go unanswered",
    ],
    features: [
      { icon: UtensilsCrossed, title: "Readable, editable menus", description: "Real text menus that load fast, read well on phones, and are easy for search engines to understand." },
      { icon: ShoppingCart, title: "Online ordering links", description: "Connect the ordering platform you already use — such as Toast, Square, or another provider — so guests order direct." },
      { icon: CalendarCheck, title: "Reservations", description: "Embed or link reservation tools like OpenTable or Resy, or a simple booking request form." },
      { icon: Camera, title: "Photography that sells", description: "Layouts designed around your food, space, and atmosphere, with optimized images that stay fast." },
      { icon: Megaphone, title: "Events & catering", description: "Inquiry forms for private dining, catering, and events, routed straight to your manager." },
      { icon: MapPin, title: "Local search", description: "Consistent hours, address, and menu details across your site and Google Business Profile." },
    ],
    research: [REVIEWS_READ, LIGHTHOUSE_SPEED],
    investment: websiteInvestment,
    faqs: [
      { question: "Can my website take online orders?", answer: "Yes. We connect your website to the online-ordering platform you already use or help you choose one, so guests can order directly from you instead of only through third-party marketplaces." },
      { question: "Can I update the menu myself?", answer: "Yes. Menus are built as editable text, not PDFs, so you can change items and prices yourself — or we update them on a care plan." },
      { question: "How much does a restaurant website cost?", answer: "Restaurant websites start at $1,500 for up to five custom pages. Multi-location groups and custom ordering experiences are quoted after a free consultation." },
      { question: "Do you help with Google Maps and reviews?", answer: "Yes. We align your Google Business Profile with your website and can manage it monthly through our SEO plans." },
    ],
    related: ["web-development", "social-media-management", "seo-analytics"],
    seo: {
      title: "Restaurant Website Design Houston | Menus, Ordering & Reservations",
      description: "Restaurant website design in Houston: mobile-friendly menus, online ordering and reservation integrations, catering and event pages, and local search setup. From $1,500.",
      keywords: ["restaurant website design Houston", "restaurant web design", "restaurant website with online ordering", "bar website design Houston", "cafe website design", "restaurant menu website", "catering website design Houston"],
    },
  },

  // ─────────────────────────── E-commerce ───────────────────────────
  {
    path: "/houston-ecommerce-website-design",
    accent: "into buyers",
    facts: [
      { value: "$3,500", label: "Online stores starting at" },
      { value: "4–8 wks", label: "Typical launch time" },
      { value: "Shopify", label: "WooCommerce, or custom" },
      { value: "PCI DSS", label: "Compliant hosted payments" },
    ],
    neighborhoods: HOUSTON_AREAS,
    kind: "houston",
    name: "E-commerce Web Design",
    eyebrow: "E-commerce website design · Houston",
    headline: "Online stores built to convert browsers into buyers",
    summary:
      "We design and build e-commerce websites for Houston brands and retailers on Shopify, WooCommerce, or fully custom platforms — with fast product pages, a frictionless checkout, and the integrations your operations depend on.",
    primaryService: "web-development",
    atAGlance: [
      "Shopify, WooCommerce, or custom builds",
      "Checkout designed to reduce abandonment",
      "Payments, shipping, and tax configured",
      "Inventory, CRM, and fulfillment integrations",
      "E-commerce stores from $3,500",
    ],
    challenges: [
      "Shoppers add to cart but don't finish checking out",
      "Product pages load slowly on phones",
      "Inventory and orders don't sync with the rest of your business",
      "Your store looks like every other template in your category",
    ],
    features: [
      { icon: ShoppingCart, title: "Conversion-focused checkout", description: "Fewer steps, guest checkout, clear shipping costs, and trusted payment options." },
      { icon: CreditCard, title: "Payments & tax", description: "Stripe, Shopify Payments, PayPal, and Apple Pay configured, with sales tax and shipping rules set up." },
      { icon: Package, title: "Operations integrations", description: "Inventory, fulfillment, accounting, and CRM connections so orders flow without re-typing." },
      { icon: Gauge, title: "Fast product pages", description: "Optimized images, lean code, and global hosting for quick loads on mobile." },
      { icon: Search, title: "Product SEO", description: "Structured product data, clean URLs, and collection pages that help shoppers find you." },
      { icon: LineChart, title: "Sales analytics", description: "GA4 e-commerce tracking from product view to purchase, so you know what's working." },
    ],
    considerations: [
      { title: "Payment security", body: "We use hosted, PCI DSS–compliant payment providers so card numbers never touch your server, which keeps your own compliance scope as small as possible." },
      { title: "Platform choice", body: "Shopify suits most retailers who want reliability and easy management; WooCommerce suits content-heavy stores; custom builds suit complex catalogs, B2B pricing, or unusual workflows. We recommend the right fit on your consultation." },
    ],
    research: [
      { value: "70.19%", label: "average documented online shopping-cart abandonment rate, across 49 studies.", source: "Baymard Institute", year: "2023", url: "https://baymard.com/lists/cart-abandonment-rate" },
      { value: "8.4%", label: "more retail conversions when key mobile speed metrics improved by 0.1 seconds.", source: "Deloitte & Google, Milliseconds Make Millions", year: "2020", url: "https://web.dev/case-studies/milliseconds-make-millions" },
    ],
    investment: [
      { label: "E-commerce store", value: "From $3,500", note: "Custom storefront, catalog, checkout, payments, shipping, and tax setup." },
      { label: "Custom commerce platform", value: "Custom quote", note: "B2B pricing, complex catalogs, marketplaces, or deep integrations." },
      { label: "Website care plans", value: "From $299/mo", note: "Updates, backups, security monitoring, and content changes." },
    ],
    faqs: [
      { question: "Should I use Shopify or WooCommerce?", answer: "Shopify is the simplest to run and scale for most retailers. WooCommerce gives more control for content-heavy WordPress sites. A custom build makes sense for complex catalogs, B2B pricing, or unusual workflows. We'll recommend the best fit after learning about your products and operations." },
      { question: "How much does an e-commerce website cost?", answer: "Cardinal's e-commerce stores start at $3,500 (one-time), including custom storefront design, catalog and checkout setup, and payment, shipping, and tax configuration. Platform subscription and payment-processing fees are separate." },
      { question: "How long does it take to launch an online store?", answer: "Most stores take 4–8 weeks depending on catalog size and integrations." },
      { question: "Can you migrate my existing store?", answer: "Yes. We migrate products, customers, and order history where the platforms allow it, and redirect old URLs to protect your search rankings." },
    ],
    related: ["web-development", "ux-ui", "digital-marketing"],
    caseStudies: ["vargas"],
    seo: {
      title: "E-commerce Website Design Houston | Shopify, WooCommerce & Custom Stores",
      description: "E-commerce website design in Houston on Shopify, WooCommerce, or custom platforms: conversion-focused checkout, payments, shipping, tax, and inventory integrations. Stores from $3,500.",
      keywords: ["ecommerce website design Houston", "Shopify developer Houston", "WooCommerce developer Houston", "online store design Houston", "ecommerce web development", "Shopify website design", "ecommerce agency Houston"],
    },
  },

  // ─────────────────────────── Real estate ───────────────────────────
  {
    path: "/houston-real-estate-website-design",
    accent: "buyer and seller leads",
    facts: [
      { value: "$1,500", label: "Websites starting at" },
      { value: "IDX", label: "Listing search via your MLS" },
      { value: "TREC", label: "Required notices built in" },
      { value: "24 hrs", label: "Reply to every inquiry" },
    ],
    neighborhoods: HOUSTON_AREAS,
    kind: "houston",
    name: "Real Estate Web Design",
    eyebrow: "Real estate website design · Houston",
    headline: "Real estate websites that capture buyer and seller leads",
    summary:
      "We build websites for Houston real estate agents, teams, brokerages, and property managers — with listing search, neighborhood pages, lead capture, and the Texas-required consumer notices built in.",
    primaryService: "web-development",
    atAGlance: [
      "IDX listing search through your MLS's approved provider",
      "Neighborhood and community pages",
      "Buyer, seller, and valuation lead forms",
      "TREC-required notices linked from every page",
      "Marketing sites from $1,500",
    ],
    challenges: [
      "Your website can't compete with the big listing portals on its own",
      "Leads come in without the details you need to follow up",
      "You need to show expertise in specific Houston neighborhoods",
      "Required brokerage disclosures are missing or hard to find",
    ],
    features: [
      { icon: Home, title: "Listing search (IDX)", description: "Search and listing pages powered by an IDX feed from your MLS's approved provider, subject to your MLS's rules." },
      { icon: MapPin, title: "Neighborhood pages", description: "Pages for the communities you serve, with your local insight that portals can't match." },
      { icon: ClipboardList, title: "Lead capture", description: "Home-valuation, buyer-consultation, and showing-request forms routed to your CRM." },
      { icon: Users, title: "Agent & team profiles", description: "Credentials, specialties, and service areas presented professionally." },
      { icon: Building2, title: "Property management", description: "Available-unit listings, owner and tenant information, and maintenance-request links." },
      { icon: Smartphone, title: "Mobile-first", description: "Fast, readable pages for buyers searching from their phones." },
    ],
    considerations: [
      { title: "TREC consumer notices", body: "The Texas Real Estate Commission requires license holders to provide a link to the Information About Brokerage Services form and the Consumer Protection Notice on their business websites. We build both links into the site footer so they appear on every page." },
      { title: "IDX and MLS rules", body: "Listing data is licensed through your MLS and must be displayed according to its rules, including required attribution. We work with your MLS-approved IDX provider rather than copying listings." },
      { title: "Fair housing", body: "Marketing copy and neighborhood descriptions are written to avoid language that could indicate a preference or limitation prohibited by fair housing laws. Your broker should review content before launch." },
    ],
    research: [REVIEWS_READ, LIGHTHOUSE_SPEED],
    investment: websiteInvestment,
    faqs: [
      { question: "Can my website show MLS listings?", answer: "Yes. We integrate an IDX feed through your MLS's approved provider, which typically requires your broker's participation and a separate IDX subscription. Listings are displayed according to your MLS's rules." },
      { question: "What does TREC require on a real estate website?", answer: "TREC requires license holders to link to the Information About Brokerage Services form and the Consumer Protection Notice on their websites. We include both. Your broker should confirm the site meets all current TREC and MLS requirements." },
      { question: "How much does a real estate website cost?", answer: "Agent and team websites start at $1,500 for up to five custom pages. IDX subscription fees are separate. Brokerage platforms and property-management portals are quoted after a free consultation." },
      { question: "Can leads go straight into my CRM?", answer: "Yes. We route form submissions to email or to CRMs that offer an integration or API." },
    ],
    related: ["web-development", "seo-analytics", "social-media-management"],
    caseStudies: ["allhoustonproperty", "hougenpros"],
    seo: {
      title: "Real Estate Website Design Houston | IDX Websites for Agents & Brokers",
      description: "Real estate website design in Houston for agents, teams, brokerages, and property managers: IDX listing search, neighborhood pages, lead capture, and TREC-required notices. From $1,500.",
      keywords: ["real estate website design Houston", "realtor website design Houston", "IDX website design", "real estate agent website", "brokerage website design Texas", "property management website design Houston"],
    },
  },

  // ─────────────────────────── Financial services ───────────────────────────
  {
    path: "/industry/financial",
    accent: "run on trust",
    facts: WEBSITE_FACTS,
    kind: "industry",
    name: "Financial Services",
    eyebrow: "Industries · Financial services",
    headline: "Websites and marketing for financial firms that run on trust",
    summary:
      "We build secure, credible websites and marketing for accounting firms, financial advisors, lenders, insurance agencies, and fintech companies — with content workflows designed around your compliance review.",
    primaryService: "web-development",
    atAGlance: [
      "Credibility-first design and clear service pages",
      "Secure forms and client-portal links",
      "Content workflow built around compliance review",
      "SEO for local and specialty searches",
    ],
    challenges: [
      "Prospects judge your trustworthiness by your website before they call",
      "Every page and post needs compliance review, which slows marketing down",
      "Client information must be collected and stored securely",
      "Fintech products need to explain complex offerings simply",
    ],
    features: [
      { icon: ShieldCheck, title: "Trust-first design", description: "Clear credentials, transparent service descriptions, and professional presentation." },
      { icon: Lock, title: "Secure client experience", description: "Encrypted forms, secure-upload links, and integration with your client portal." },
      { icon: FileText, title: "Compliance-friendly content", description: "Version-controlled content with an approval step before anything goes live." },
      { icon: LineChart, title: "Calculators & tools", description: "Interactive calculators and dashboards that demonstrate expertise and capture leads." },
      { icon: Search, title: "Specialty SEO", description: "Pages for the services and audiences you serve, from small-business tax to retirement planning." },
      { icon: Layers, title: "Fintech product sites", description: "Pricing, feature, security, and documentation pages for financial software companies." },
    ],
    considerations: [
      { title: "Advertising rules", body: "Communications by broker-dealers are subject to FINRA Rule 2210, and registered investment advisers are subject to the SEC Marketing Rule, including conditions on testimonials and performance claims. We build the site so your compliance team can review and approve every page and change." },
      { title: "Data security", body: "We use encryption in transit and at rest, minimal data collection, and secure third-party tools for documents and payments. For regulated data, we recommend your security policies drive the final architecture." },
    ],
    research: [
      { value: "$10.22M", label: "average cost of a data breach for U.S. organizations (global average: $4.44M).", source: "IBM, Cost of a Data Breach Report", year: "2025", url: "https://www.ibm.com/reports/data-breach" },
      { value: "32 pts", label: "higher revenue growth for top-quartile design performers versus industry peers.", source: "McKinsey, The Business Value of Design", year: "2018", url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-business-value-of-design" },
    ],
    investment: websiteInvestment,
    faqs: [
      { question: "Can you build a website that meets FINRA or SEC requirements?", answer: "We build websites with a review-and-approval workflow so your compliance team signs off on all content. Determining whether content meets FINRA Rule 2210 or the SEC Marketing Rule is your firm's and your compliance team's responsibility." },
      { question: "Can clients upload documents securely?", answer: "Yes. We integrate secure document-upload and client-portal tools rather than collecting sensitive files through standard website forms." },
      { question: "Do you build fintech product websites?", answer: "Yes — marketing sites, pricing and security pages, documentation, and web applications for financial software companies." },
    ],
    related: ["web-development", "technical-consulting", "seo-analytics"],
    caseStudies: ["clearledger", "vargas"],
    seo: {
      title: "Financial Services Website Design | Accounting, Advisor & Fintech Websites",
      description: "Websites and digital marketing for accounting firms, financial advisors, lenders, insurance agencies, and fintech companies — secure, credible, and built around compliance review.",
      keywords: ["financial advisor website design", "accounting firm website design", "fintech website design", "CPA website design Houston", "insurance agency website design", "financial services marketing agency"],
    },
  },

  // ─────────────────────────── Technology & SaaS ───────────────────────────
  {
    path: "/industry/technology",
    accent: "technology companies",
    facts: [
      { value: "React", label: "TypeScript & Node.js" },
      { value: "AWS", label: "Azure, Google Cloud & Vercel" },
      { value: "$1,500", label: "Marketing sites starting at" },
      { value: "24 hrs", label: "Reply to every inquiry" },
    ],
    kind: "industry",
    name: "Technology & SaaS",
    eyebrow: "Industries · Technology & SaaS",
    headline: "Marketing sites and products for technology companies",
    summary:
      "We help SaaS, IT, and technology companies explain complex products clearly, win technical buyers, and ship web applications — from launch sites and pricing pages to documentation and product engineering.",
    primaryService: "web-development",
    atAGlance: [
      "Positioning-led marketing sites",
      "Pricing, security, and documentation pages",
      "Product and web-app engineering",
      "Technical SEO and content for B2B buyers",
    ],
    challenges: [
      "Buyers can't tell what your product does within the first few seconds",
      "Your marketing site can't keep pace with product releases",
      "Enterprise buyers ask for security information you don't publish",
      "You need senior engineering help without a long hiring cycle",
    ],
    features: [
      { icon: Layers, title: "Product marketing sites", description: "Clear positioning, feature pages, comparisons, and demos that move technical buyers forward." },
      { icon: CreditCard, title: "Pricing & signup", description: "Pricing pages, trials, and onboarding flows designed to convert." },
      { icon: ShieldCheck, title: "Trust & security pages", description: "Security, privacy, and compliance information enterprise procurement looks for." },
      { icon: BookOpen, title: "Docs & developer content", description: "Documentation and knowledge bases that support adoption and search." },
      { icon: Cpu, title: "Web applications", description: "Dashboards, portals, and SaaS features built with React, TypeScript, and modern cloud services." },
      { icon: Search, title: "B2B technical SEO", description: "Content and site architecture built around the problems your buyers search for." },
    ],
    research: [
      { value: "88%", label: "of organizations regularly use AI in at least one business function.", source: "McKinsey, The State of AI", year: "2025", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
      { value: "84%", label: "of organizations say managing cloud spend is their top cloud challenge.", source: "Flexera, State of the Cloud Report", year: "2025", url: "https://www.flexera.com/about-us/press-center/new-flexera-report-finds-84-percent-of-organizations-struggle-to-manage-cloud-spend" },
    ],
    investment: [
      { label: "Marketing website", value: "From $1,500", note: "Launch sites and focused product pages." },
      { label: "Custom platform or web app", value: "Custom quote", note: "Product engineering, portals, and integrations." },
      { label: "Technical consulting", value: "Custom quote", note: "Architecture reviews and fractional CTO leadership." },
    ],
    faqs: [
      { question: "Do you build SaaS products or only marketing sites?", answer: "Both. We build marketing sites and web applications, and we offer architecture reviews and fractional CTO leadership through our technical consulting practice." },
      { question: "Can you work with our in-house engineering team?", answer: "Yes. We often work alongside internal teams on specific projects, reviews, or capacity gaps, using your repositories and processes." },
      { question: "What technologies do you use?", answer: "Primarily React, TypeScript, and Node.js, with cloud services on AWS, Azure, Google Cloud, Vercel, Netlify, and Supabase — chosen to fit your existing stack." },
    ],
    related: ["web-development", "technical-consulting", "ux-ui"],
    caseStudies: ["cwx", "axiomio", "hitechlogic"],
    seo: {
      title: "SaaS & Technology Company Websites | Product Marketing & Engineering",
      description: "Marketing websites, pricing and security pages, documentation, and web-app engineering for SaaS, IT, and technology companies. Houston-based, serving clients nationwide.",
      keywords: ["SaaS website design", "technology company website design", "B2B SaaS marketing website", "SaaS web development agency", "IT company website design", "tech startup website design Houston"],
    },
  },

  // ─────────────────────────── AI & automation companies ───────────────────────────
  {
    path: "/industry/ai-automation",
    accent: "easy to understand and trust",
    facts: [
      { value: "Demos", label: "Interactive product walkthroughs" },
      { value: "Trust", label: "Security & data-use pages" },
      { value: "$1,500", label: "Marketing sites starting at" },
      { value: "24 hrs", label: "Reply to every inquiry" },
    ],
    kind: "industry",
    name: "AI & Automation Companies",
    eyebrow: "Industries · AI & automation companies",
    headline: "Websites that make AI products easy to understand and trust",
    summary:
      "We help AI and automation companies explain what their products actually do, earn the trust of cautious buyers, and turn interest into demos — with clear messaging, product walkthroughs, and responsible claims.",
    primaryService: "web-development",
    atAGlance: [
      "Plain-language product positioning",
      "Interactive demos and walkthroughs",
      "Security, data-use, and governance pages",
      "Claims written to be accurate and defensible",
    ],
    challenges: [
      "Buyers are skeptical of AI claims and want proof",
      "Your product is powerful but hard to explain in one sentence",
      "Enterprise prospects ask how you handle their data",
      "Demo requests are low compared to traffic",
    ],
    features: [
      { icon: Bot, title: "Clear positioning", description: "Messaging that explains the job your product does, for whom, and the measurable outcome." },
      { icon: Layers, title: "Product walkthroughs", description: "Interactive demos, screenshots, and use-case pages that show the product working." },
      { icon: ShieldCheck, title: "Trust & data pages", description: "How you handle data, model usage, security, and human oversight, explained plainly." },
      { icon: CalendarCheck, title: "Demo conversion", description: "Short demo-request flows with routing and calendar booking." },
      { icon: Search, title: "Use-case SEO", description: "Pages built around the problems buyers search for, not just your product name." },
      { icon: Globe, title: "AI search visibility", description: "Structured, factual content that AI assistants can understand and cite accurately." },
    ],
    considerations: [
      { title: "Responsible AI claims", body: "The U.S. Federal Trade Commission has taken action against companies that made deceptive claims about AI products. We write capability and performance claims to be specific, accurate, and backed by evidence you can produce." },
    ],
    research: [
      { value: "88%", label: "of organizations regularly use AI in at least one business function, up from 78% a year earlier.", source: "McKinsey, The State of AI", year: "2025", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
      { value: "~1 in 3", label: "organizations have begun scaling AI across the enterprise — the rest are still evaluating.", source: "McKinsey, The State of AI", year: "2025", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
    ],
    investment: [
      { label: "Marketing website", value: "From $1,500", note: "Launch sites and focused product pages." },
      { label: "Custom platform or web app", value: "Custom quote", note: "Interactive demos, portals, and product UI." },
      { label: "AI & automation builds", value: "Custom quote", note: "If you need AI built into your own operations." },
    ],
    faqs: [
      { question: "Is this page about building AI for my business?", answer: "This page is for companies that sell AI and automation products and need websites and marketing. If you want AI built into your own operations, see our AI & Automation service." },
      { question: "Can you build interactive product demos?", answer: "Yes — guided walkthroughs, sandbox demos, and recorded product tours, depending on what your product and security requirements allow." },
      { question: "How do you avoid overstated AI claims?", answer: "We ask for the evidence behind each claim and write specific, measurable statements. Your team approves all claims before launch." },
    ],
    related: ["ai-automation", "web-development", "brand-identity"],
    caseStudies: ["cwx", "axiomio", "hitechlogic"],
    seo: {
      title: "Websites for AI & Automation Companies | Positioning, Demos & Trust",
      description: "Website design and marketing for AI and automation companies: plain-language positioning, interactive demos, security and data-use pages, and accurate, defensible claims.",
      keywords: ["AI company website design", "AI startup website", "SaaS AI website design", "automation software website", "AI product marketing agency", "AI startup branding"],
    },
  },

  // ─────────────────────────── Construction ───────────────────────────
  {
    path: "/industry/construction",
    accent: "win bids and qualified projects",
    facts: WEBSITE_FACTS,
    kind: "industry",
    name: "Construction",
    eyebrow: "Industries · Construction",
    headline: "Construction websites that win bids and qualified projects",
    summary:
      "We build websites for general contractors, specialty trades, remodelers, and restoration companies across Houston and Texas — with project portfolios, service-area pages, and bid and estimate requests that reach the right person.",
    primaryService: "web-development",
    atAGlance: [
      "Project portfolios and case studies",
      "Bid, estimate, and emergency-service requests",
      "Service-area pages for the markets you cover",
      "Safety, licensing, and insurance information",
      "Marketing sites from $1,500",
    ],
    challenges: [
      "Owners and general contractors check your project history before inviting you to bid",
      "Estimate requests arrive without scope, location, or timeline",
      "You don't appear in searches in the cities you serve",
      "Your photos and project details are scattered across social media",
    ],
    features: [
      { icon: Camera, title: "Project portfolio", description: "Filterable project pages with scope, photos, and results that prove capability." },
      { icon: ClipboardList, title: "Bid & estimate requests", description: "Forms that capture project type, location, budget range, and timeline." },
      { icon: HardHat, title: "Safety & credentials", description: "Licensing, insurance, certifications, and safety programs presented clearly." },
      { icon: MapPin, title: "Service-area pages", description: "Pages for the cities and regions you actually serve, with real local projects." },
      { icon: Zap, title: "Emergency services", description: "Prominent click-to-call for restoration and 24/7 response services." },
      { icon: Star, title: "Reviews & reputation", description: "Google Business Profile alignment and a process for collecting genuine reviews." },
    ],
    research: [REVIEWS_READ, LIGHTHOUSE_SPEED],
    investment: websiteInvestment,
    faqs: [
      { question: "How much does a construction company website cost?", answer: "Construction websites start at $1,500 for up to five custom pages. Larger portfolios, multiple divisions, and custom bid portals are quoted after a free consultation." },
      { question: "Can you help us get found for searches in different cities?", answer: "Yes. We build service-area pages for the markets you actually serve — supported by real projects in those areas — and align them with your Google Business Profile." },
      { question: "Can bid requests go straight to our estimator?", answer: "Yes. Forms can route by project type or location to the right person by email or to your CRM." },
    ],
    related: ["web-development", "seo-analytics", "brand-identity"],
    caseStudies: ["unitedccr", "houinc"],
    seo: {
      title: "Construction Company Website Design | Contractor Websites Houston TX",
      description: "Website design for contractors, specialty trades, remodelers, and restoration companies in Houston and Texas: project portfolios, bid requests, service-area pages, and local SEO. From $1,500.",
      keywords: ["construction website design", "contractor website design Houston", "construction company website", "general contractor website design", "roofing website design Houston", "restoration company website design"],
    },
  },
];

export function getLandingPage(path: string) {
  return landingPages.find((p) => p.path === path);
}

/** Footer "Houston" column, in display order */
export const houstonLinks = landingPages.filter((p) => p.kind === "houston").map((p) => ({ label: p.name, href: p.path }));
