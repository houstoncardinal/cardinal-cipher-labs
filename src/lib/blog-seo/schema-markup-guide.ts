// Schema markup guide: what structured data does, which types matter in 2026, and how to add it.
import type { BlogArticle } from "../blog-data";

const SRC = {
  intro: { label: "Google Search Central — Introduction to structured data markup in Google Search (2026)", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
  policies: { label: "Google Search Central — General structured data guidelines (2026)", url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies" },
  gallery: { label: "Google Search Central — Structured data markup that Google Search supports (2026)", url: "https://developers.google.com/search/docs/appearance/structured-data/search-gallery" },
  howtoFaq: { label: "Google Search Central Blog — Changes to HowTo and FAQ rich results (2023)", url: "https://developers.google.com/search/blog/2023/08/howto-faq-changes" },
  review: { label: "Google Search Central — Review snippet structured data (2026)", url: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet" },
  organization: { label: "Google Search Central — Organization structured data (2026)", url: "https://developers.google.com/search/docs/appearance/structured-data/organization" },
  localBusiness: { label: "Google Search Central — Local business structured data (2026)", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business" },
  reports: { label: "Google Search Console Help — Rich result report overview (2026)", url: "https://support.google.com/webmasters/answer/7552505" },
  proService: { label: "Schema.org — ProfessionalService", url: "https://schema.org/ProfessionalService" },
  validator: { label: "Schema.org — Schema Markup Validator", url: "https://validator.schema.org/" },
};

const article: BlogArticle = {
  slug: "schema-markup-guide",
  title: "Schema Markup Explained: What Structured Data Does for SEO in 2026, and How to Add It Without Breaking Anything",
  seoTitle: "Schema Markup Guide: Structured Data for SEO in 2026",
  seoDescription: "What schema markup does for SEO, which structured data types still earn rich results in 2026, and how to add JSON-LD that Google can actually use.",
  excerpt: "Schema markup will not rank a weak page, but it tells search engines exactly who you are and what each page describes. Here is which types still matter in 2026, the rules Google enforces, and the mistake we caught on our own site.",
  category: "SEO & Local Search",
  pillar: "seo",
  priority: 10,
  author: "Hunain Qureshi",
  date: "2026-11-18",
  readTime: "9 min read",
  featured: false,
  keywords: [
    "schema markup",
    "structured data",
    "schema markup for seo",
    "json-ld",
    "rich results",
    "schema.org",
    "local business schema",
    "faq schema",
    "how to add schema markup",
    "schema markup generator",
    "structured data testing",
  ],
  relatedService: "/services/web-development",
  cover: { kicker: "Schema markup, minus the myths", motif: "flow" },
  sources: [SRC.intro, SRC.policies, SRC.gallery, SRC.howtoFaq, SRC.review, SRC.organization, SRC.localBusiness, SRC.reports, SRC.proService, SRC.validator],
  about: [
    { name: "search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" },
    { name: "Schema.org", sameAs: "https://www.wikidata.org/wiki/Q3475322" },
    { name: "JSON-LD", sameAs: "https://www.wikidata.org/wiki/Q6108942" },
  ],
  takeaways: [
    "Schema markup is a label, not a lever: it tells Google what a page describes and makes it eligible for rich results, but Google does not guarantee that any markup will be shown.",
    "Google recommends JSON-LD for structured data where your setup allows it, because it sits in one block instead of being woven through your HTML.",
    "FAQ rich results have been limited to well-known government and health sites since 2023, and HowTo rich results are gone entirely, so ignore anyone still selling them as a quick win.",
    "Every claim in your markup must match what a visitor can see on the page; a business marking up reviews it controls about itself is ineligible for review stars.",
    "Test the rendered output, not the code: the only markup that counts is what a crawler actually receives.",
  ],
  faqs: [
    {
      question: "What is schema markup?",
      answer: "Schema markup is code added to a web page that describes its content in a standard vocabulary from schema.org, such as Organization, LocalBusiness, Product or BlogPosting. Search engines read it to understand exactly what a page is about and who is behind it. Google supports three formats, JSON-LD, Microdata and RDFa, and recommends JSON-LD where a site's setup allows it.",
    },
    {
      question: "Does schema markup improve SEO rankings?",
      answer: "Not directly. Google uses structured data to understand page content and to decide whether a page is eligible for rich results such as review stars, breadcrumbs or event details. It does not guarantee rich results, and markup will not lift a weak page. The benefit is clearer understanding and richer listings, which can earn more clicks for pages that already rank.",
    },
    {
      question: "Is FAQ schema still worth adding in 2026?",
      answer: "Not for rich results on most sites. Since August 2023, Google shows FAQ rich results only for well-known, authoritative government and health websites. Google has also said structured data that is not being used does not cause problems, so existing FAQPage markup that matches visible questions can stay. Just do not add it expecting expandable answers under your listing.",
    },
    {
      question: "What schema should a local business use?",
      answer: "Start with LocalBusiness, using the most specific subtype that fits, such as Dentist or Plumber, on your home page or contact page. Google requires the business name and address and recommends properties such as geographic coordinates, opening hours, telephone, URL and price range. Keep every detail identical to your Google Business Profile and the visible page.",
    },
    {
      question: "How do I add schema markup to my website?",
      answer: "Choose the schema.org types that describe your pages, write them as a JSON-LD script block in the page HTML that matches the visible content, and validate the result with Google's Rich Results Test and the Schema Markup Validator. After publishing, monitor the rich result reports under Enhancements in Google Search Console for errors and warnings.",
    },
    {
      question: "Are schema markup generators safe to use?",
      answer: "They are a fine starting point for simple pages, but check every value they produce. Generators often add properties you cannot support with visible content, use generic types where a specific one exists, or produce a second Organization entity on every page. Whatever tool you use, validate the published page and compare the markup to what a visitor sees.",
    },
  ],
  content: {
    sections: [
      {
        heading: "What is schema markup?",
        body: `Schema markup is a block of code on a web page that describes the page's content in a vocabulary search engines agree on. Instead of hoping Google infers that "2100 West Loop S Fwy" is your address and "$1,500" is a price, you state it explicitly: this is an organization, this is its address, this is a service, this is its price.

The vocabulary comes from schema.org, a collaborative project that maintains a shared vocabulary of types (Organization, LocalBusiness, Product, Event, BlogPosting and many more) and the properties each can have. Structured data is the general term for information written in a formal, machine-readable way; schema markup is structured data using that vocabulary.

Google supports three formats for writing it: JSON-LD, Microdata and RDFa. Google says that "in general, Google recommends using JSON-LD for structured data if your site's setup allows it." JSON-LD is a single script block in the page, separate from the visible HTML, which makes it far easier to generate, review and keep accurate. Everything in this guide assumes JSON-LD.

If you are newer to search, our explainer on [what SEO is](/blog/what-is-seo) puts structured data in context: it is one part of the technical layer, alongside crawling, indexing and speed.`,
      },
      {
        heading: "What does schema markup do for SEO, and what doesn't it do?",
        body: `Google is direct about the purpose: it "uses structured data that it finds on the web to understand the content of the page." That understanding feeds two things a business owner cares about.

First, rich results. Markup makes a page eligible for enhanced listings such as review stars, breadcrumb trails, product prices and event dates. Second, entity understanding. Organization markup can influence which logo appears in results and in your knowledge panel, and helps Google "disambiguate your organization in search results."

Now the limits. Google states plainly that it "does not guarantee that your structured data will show up in search results," even when the markup is valid. Markup is not a ranking factor you can pull, and it will not rescue a thin page. Even Google's penalty for abusing structured data is about eligibility: a structured data manual action removes a page's ability to show as a rich result, and Google says it does not affect how the page ranks in web search.

The honest summary: schema markup makes good pages easier to understand and more attractive in results. It does not make weak pages good. That is why we treat it as part of [technical SEO](/blog/technical-seo-guide), not a growth strategy on its own.`,
        highlight: "Schema markup is a label, not a lever. It tells Google what your page is; it cannot make the page worth ranking.",
        visual: {
          kind: "triad",
          title: "What structured data actually does",
          caption: "Based on Google's introduction to structured data and its general structured data guidelines.",
          center: "Clarity, not rankings",
          items: [
            { title: "Understanding", body: "States explicitly what a page describes: a business, a product, an article, an event." },
            { title: "Eligibility", body: "Qualifies pages for rich results such as stars, breadcrumbs and prices, with no guarantee they appear." },
            { title: "Identity", body: "Ties your pages to one clearly defined organization, which helps Google tell you apart from similar names." },
          ],
        },
      },
      {
        heading: "Which schema types matter for businesses in 2026?",
        body: `Google's search gallery lists the structured data features it currently supports, and it is shorter than most schema plugins would have you believe. As of this writing it includes Article, Breadcrumb, Event, Local business, Organization, Product, Review snippet, Software app, Video and Recipe, among others. FAQ and HowTo are no longer on the list.

For a typical service business, five types do most of the work: Organization (or LocalBusiness) once for the company, WebSite for the site, BreadcrumbList for page hierarchy, BlogPosting for articles with a named author, and Service with an Offer for what you sell. Product and Event matter if you sell products or run events. Service markup does not produce a rich result in Google, but it describes your offering in the same vocabulary as everything else.

For local businesses, Google's advice is to "use the most specific LocalBusiness sub-type possible," with name and address required and coordinates, hours, phone, URL and price range recommended. Keep those details identical to your [Google Business Profile](/blog/google-business-profile-guide-houston).`,
        visual: {
          kind: "compare",
          title: "Schema types for a business site, and what they can earn in Google",
          caption: "Source: Google's structured data search gallery, review snippet documentation and 2023 HowTo and FAQ announcement, as of November 2026.",
          columns: ["Use it for", "Rich result possible in 2026?"],
          rows: [
            { label: "Organization", values: ["Who you are: name, logo, profiles", "Yes: logo and knowledge panel details"] },
            { label: "LocalBusiness", values: ["Address, hours, phone, location", "Yes: business details"] },
            { label: "BreadcrumbList", values: ["Where a page sits in the site", "Yes: breadcrumb trail"] },
            { label: "Article / BlogPosting", values: ["Headline, dates, author", "Yes: enhanced title, image and date"] },
            { label: "Product + Offer", values: ["Price and availability", "Yes: product snippets"] },
            { label: "Review / AggregateRating", values: ["Ratings and reviews", "Yes, but not self-serving reviews on your own business"] },
            { label: "Event", values: ["Dates, venue, tickets", "Yes: event listings"] },
            { label: "Service", values: ["What you offer and from what price", "No: describes offerings only"] },
            { label: "FAQPage", values: ["Visible questions and answers", "Only for well-known government and health sites"] },
            { label: "HowTo", values: ["Step-by-step instructions", "No: deprecated in 2023"] },
          ],
        },
      },
      {
        heading: "What happened to FAQ schema and HowTo rich results?",
        body: `For years, FAQ schema was the cheapest trick in SEO: mark up a few questions and your listing grew expandable answers that pushed competitors down the page. Then Google turned it off for almost everyone.

In August 2023, Google announced that "FAQ rich results will only be shown for well-known, authoritative government and health websites," and that HowTo rich results would be limited to desktop. A month later it went further: Google Search no longer shows How-to rich results on desktop either, "which means this result type is now deprecated."

What should you do with existing markup? Google answered that in the same post: "Structured data that's not being used does not cause problems for Search." There is no need to rip it out. We still publish FAQPage markup on pages that show visible FAQs, because it accurately describes content that is really there, but we don't promise anyone a rich result from it.

The lesson outlasts these two types. Rich result features change, so build markup that is true and useful on its own terms, and treat any visual enhancement as a bonus.`,
        visual: {
          kind: "timeline",
          title: "How FAQ and HowTo rich results disappeared",
          caption: "Source: Google Search Central Blog, Changes to HowTo and FAQ rich results (August 8, 2023, updated September 14, 2023), and Google's current search gallery.",
          items: [
            { when: "Aug 2023", title: "FAQ limited", body: "FAQ rich results restricted to well-known, authoritative government and health websites." },
            { when: "Aug 2023", title: "HowTo shrinks", body: "HowTo rich results limited to desktop users only." },
            { when: "Sep 2023", title: "HowTo deprecated", body: "Google stops showing HowTo rich results on desktop too." },
            { when: "2026", title: "Off the list", body: "Neither FAQ nor HowTo appears in Google's search gallery of supported features." },
          ],
        },
      },
      {
        heading: "Entity linking: @id, sameAs and why one organization beats ten",
        body: `The most valuable thing schema markup does for a business is not visual at all. It defines your organization as one clear entity and connects everything on your site to it.

Two properties do this. The @id property gives an entity a stable identifier, usually your home page URL plus a fragment such as #organization. Define the organization once, in full, and every other block (each Service, each BlogPosting's publisher, each WebPage) refers to it by that @id instead of repeating the details. The sameAs property points to pages elsewhere that describe the same thing. Google defines it for Organization as "the URL of a page on another website with additional information about your organization," and recommends putting organization details on your home page or a single page that describes the organization.

You can also use sameAs to link topics to public knowledge bases such as Wikidata. Each article on this blog, for example, declares what it is about using Wikidata identifiers for concepts like search engine optimization.

Here is my reasoning on why this matters beyond Google's rich results, stated as reasoning and not as a promise: search engines and AI systems both try to resolve "which Cardinal is this?" A single, consistent entity with verified external references removes ambiguity. Our [guide to generative engine optimization](/blog/generative-engine-optimization-ai-search) covers how that fits into AI search.`,
        highlight: "Describe your company once, give it an @id, and point to it everywhere else. Ten slightly different copies of your business are worse than one.",
      },
      {
        heading: "How to add schema markup to your website, step by step",
        body: `Whether you use a plugin, a schema markup generator or hand-written code, the process is the same. The tool only changes who types the JSON-LD.

Start with a plan, not a plugin. List your page templates (home, service pages, blog posts, contact) and decide which types each one should carry. A service page in our setup, for instance, carries a WebPage with a breadcrumb, a Service with an Offer and minimum price, and a reference to the organization by @id. In prose, that block says: this page is about this service, offered by this company, starting at this price, and it sits under Services in the site structure.

Then write markup that mirrors the page. Every name, price, rating and date in the JSON-LD should be something a visitor can find on the same page. Generators are fine for a first draft, but they cannot see your page, so check every value they produce.

Validation is where most implementations skip a step. Run the published URL, not a pasted snippet, through both tools, because only the live page shows what crawlers actually receive. If you are doing this during a rebuild, add it to your [website redesign SEO checklist](/blog/website-redesign-seo-checklist) so markup is not lost in the move.`,
        visual: {
          kind: "steps",
          title: "Adding schema markup in five steps",
          caption: "Tools: Google's Rich Results Test, the Schema Markup Validator at validator.schema.org, and the rich result reports under Enhancements in Google Search Console.",
          items: [
            { title: "Map templates to types", body: "Decide which schema.org types each page template should carry, using the most specific type that fits." },
            { title: "Write JSON-LD", body: "Describe only what is visible on the page, and reference your organization by @id rather than repeating it." },
            { title: "Validate both ways", body: "Rich Results Test for Google feature eligibility; Schema Markup Validator for general schema.org correctness." },
            { title: "Check the live page", body: "Inspect the rendered HTML of the published URL to confirm the markup crawlers receive is the markup you wrote." },
            { title: "Monitor monthly", body: "Watch Search Console's rich result reports for new errors and warnings, especially after site updates." },
          ],
        },
      },
      {
        heading: "The rules: Google's structured data guidelines",
        body: `Google publishes general guidelines that apply to all structured data, and breaking them can cost a page its rich result eligibility through a manual action. Most of them come down to one idea: your structured data "must be a true representation of the page content."

A simple test covers most of them. Read your JSON-LD aloud to someone looking at the page. If any sentence you say ("this business has a 4.9 rating from 200 reviews," "this service starts at $900") can't be pointed to on screen, the markup is making a claim the page doesn't, and that is the claim Google's guidelines are written to catch.

The review rule deserves special attention for local businesses, because it is the one most often broken in good faith. Pasting testimonials you collected into Review markup on your own site feels harmless, but under Google's review snippet rules it makes those pages ineligible for stars. Let reviews live on Google and other third-party platforms, and show them honestly on your site without marking them up as your own ratings.

These are the rules I see broken most often, quoted or closely paraphrased from Google's guidelines and review snippet documentation.`,
        bullets: [
          "Mark up only what visitors can see. Google: \"Don't mark up content that is not visible to readers of the page.\"",
          "Keep it relevant. Don't mark up content unrelated to the focus of the page, or content that is misleading.",
          "No fake or self-serving reviews. Google lists fake reviews as misleading content, and says that if the entity being reviewed controls the reviews about itself, its pages using LocalBusiness or Organization markup are ineligible for the star review feature.",
          "Don't use structured data to deceive. Invented ratings, prices you don't offer or events that aren't happening are exactly what manual actions target.",
          "Follow the feature's own rules too. Each rich result type has required and recommended properties on its Google documentation page; the general guidelines are the minimum.",
        ],
      },
      {
        heading: "Common schema markup mistakes (and how to fix them)",
        body: `Most schema problems we find in an [SEO audit](/blog/how-to-do-an-seo-audit) are not exotic. They come from plugins and page builders adding markup independently, from content changing while markup stays frozen, or from nobody looking at the output after launch.

Stale data is the quiet one. A price changes on the page, but a hard-coded Offer block still shows last year's number. Nothing errors, the validators pass, and the markup is now false. The cure is to generate markup from the same data that renders the page, so they cannot disagree.

Hypothetical example: a dental practice installs an SEO plugin that outputs an Organization block on every page, while its theme outputs a LocalBusiness block with a slightly different name and an old phone number. Both validate. Together they tell Google there are two different businesses with conflicting details. Picking one source, removing the other and linking everything by @id fixes it.

A note on types: schema.org's own page for ProfessionalService says the general type "was deprecated due to confusion with Service." It still exists and validates, but for a new build, check schema.org for a more specific LocalBusiness subtype first.`,
        visual: {
          kind: "flags",
          title: "Schema markup: healthy vs. harmful",
          caption: "Drawn from Google's general structured data guidelines and the problems we see most often in audits.",
          green: [
            "One organization entity, referenced by @id",
            "Markup generated from the same data as the page",
            "Most specific accurate type for each thing",
            "Third-party reviews only, shown on the page",
            "Validated on the live, rendered URL",
          ],
          red: [
            "Duplicate Organization blocks from plugins and themes",
            "Markup for content hidden from visitors",
            "Generic or wrong types, such as Product for a service",
            "Hard-coded prices that no longer match the page",
            "Broken JSON from a stray comma or quote",
          ],
        },
      },
      {
        heading: "How our own site does it, and the bug we almost missed",
        body: `Here is the structured data on visitcardinal.com, described in plain terms, because it is easier to copy a working pattern than a list of rules.

There is one ProfessionalService organization entity with an @id, our Houston address at 2100 West Loop S Fwy, coordinates, hours, an areaServed list of Houston-area cities plus a radius, the topics we know about, and an offer catalog. Alongside it sit a WebSite entity, a WebPage with a breadcrumb and a main entity, and a BreadcrumbList. Service pages add a Service with an Offer and minimum price; articles like this one add a BlogPosting whose author is a Person with a job title and a link to my [founder page](/about/hunain-qureshi). Topics link to Wikidata through sameAs, such as Houston (Q16555) and web design (Q190637). Page-level markup is sanitized so the company is described once and referenced by @id everywhere else, and self-serving review markup is stripped.

The lesson came this month. We built that sanitizer partly to block unverified social profile links, so it removed sameAs properties. It also removed the Wikidata links we wanted. No validator flagged it, because markup without sameAs is perfectly valid. We caught it only by reading the rendered JSON-LD on live pages. If you want this level of care in a new build, it is part of how we approach [web development](/services/web-development), and expanded schema markup is included in our [SEO Growth plan](/services/seo-analytics) at $2,500 a month.`,
        highlight: "Validators check that your markup is well formed, not that it says what you meant. Test the output, not the code.",
      },
    ],
    cta: "Not sure what your site's structured data is telling Google? We'll read the rendered markup on your key pages, flag duplicates, stale details and guideline risks, and tell you plainly which fixes matter. Clear findings, no rich-result promises.",
  },
};

export default article;
