/**
 * Client work — shared by the homepage, the Portfolio page and service pages.
 * Metrics are the clients' own business figures as provided.
 */
export interface CaseStudyDetail {
  headline: string;
  year?: string;
  services: string[];
  /** Heading above the challenge paragraph */
  challengeHeading?: string;
  challenge: string;
  approach: { title: string; description: string }[];
  /** Headline outcomes — only figures confirmed by the client */
  results: { value: string; label: string }[];
  gallery: { src: string; alt: string; caption: string }[];
  mobileImage?: string;
  /** Facts about the client, as published on their site */
  clientFacts: string[];
}

export interface CaseStudy {
  slug: string;
  image: string;
  client: string;
  industry: string;
  summary: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  url?: string;
  featured?: boolean;
  /** Present when the project has a full case-study page at /portfolio/:slug */
  detail?: CaseStudyDetail;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cwx",
    image: "/portfolio/cwx/hero.jpg",
    client: "CWX (CloudWerx)",
    industry: "AI Consulting · Regulated Industries",
    summary: "An enterprise website platform for CWX, an AI-native consultancy serving regulated industries — presenting four practices, proprietary accelerators, client case studies, and thought leadership, with corporate-level SEO built in.",
    tags: ["Enterprise Website Platform", "Corporate SEO", "Information Architecture"],
    metrics: [
      { value: "4", label: "Practices presented" },
      { value: "8+", label: "Client case studies showcased" },
      { value: "Enterprise", label: "Corporate SEO foundation" },
    ],
    url: "https://cwx.ai",
    featured: true,
    detail: {
      headline: "An enterprise website platform for an AI-native consultancy serving regulated industries",
      services: ["Web Development", "UX/UI Design", "SEO"],
      challengeHeading: "Turning a sophisticated AI offer into a clear story for executive buyers",
      challenge:
        "CWX (formerly CloudWerx, at cloudwerx.tech) helps organizations in regulated industries — financial services, health and life sciences, and retail — turn AI into measurable business value. Its offer spans four practices (Data AI/ML, AI Engineering, AI Platform, and a Transformation Office), proprietary accelerators, and a forward-deployed delivery model. The website had to make that depth easy for executives to navigate, prove results with real client work, and be discoverable for the searches enterprise buyers make.",
      approach: [
        { title: "A story that leads with business value", description: "The homepage opens with a rotating feature carousel — the AI Value Accelerator, a client story, a governance white paper, and the delivery model — so each executive audience finds its entry point in seconds." },
        { title: "Architecture for a deep offer", description: "Mega-navigation organizes Solutions, Accelerators, How we work, Industries, Insights, About, and Careers, so a broad portfolio stays easy to explore." },
        { title: "Practices made tangible", description: "An expanding panel presents the four practices side by side, each with a one-line promise and a path to detail — with governance shown as built into all four." },
        { title: "Proof up front", description: "A case-study library leads with outcomes and the work behind them, so buyers see evidence before they're asked to talk." },
        { title: "Corporate-level SEO", description: "A clean URL structure, page-level metadata, and topic architecture built around practices, solutions, and industries give every offering a page that can rank on its own." },
        { title: "Two clear paths to conversion", description: "A recommended first step (an AI Value Accelerator session) sits beside a direct line to the team, plus site search and \"Talk to us\" calls to action throughout." },
      ],
      results: [],
      gallery: [
        { src: "/portfolio/cwx/practices.jpg", alt: "CWX four practices panel", caption: "Four practices presented side by side, with governance built into each." },
        { src: "/portfolio/cwx/case-studies.jpg", alt: "CWX case studies section", caption: "A case-study library that leads with client outcomes." },
        { src: "/portfolio/cwx/industries.jpg", alt: "CWX industries section", caption: "Industry pages connect each sector to the proof behind it." },
        { src: "/portfolio/cwx/contact.jpg", alt: "CWX contact section", caption: "Two conversion paths: a recommended first step and a direct line to the team." },
      ],
      mobileImage: "/portfolio/cwx/mobile.jpg",
      clientFacts: [
        "AI-native consultancy for regulated industries",
        "Practices: Data AI/ML, AI Engineering, AI Platform, Transformation Office",
        "Industries include financial services, health and life sciences, and retail",
        "Forward Deployed Teams delivery model",
        "Accelerators include the AI Value Accelerator and AI X-Ray",
      ],
    },
  },
  {
    slug: "veloratek",
    image: "/portfolio/veloratek.jpg",
    client: "Velora Tek",
    industry: "Enterprise IT & Cybersecurity",
    summary: "Website and lead-generation platform for an enterprise IT provider covering cybersecurity, cloud computing, SharePoint services, and network management — built to turn visits into scheduled consultations and optimized for search.",
    tags: ["Website", "Lead Generation", "SEO"],
    metrics: [
      { value: "Website", label: "Enterprise IT presence" },
      { value: "Lead gen", label: "Consultation scheduling" },
      { value: "SEO", label: "Technical & on-page optimization" },
    ],
    url: "https://veloratek.com",
    featured: false,
  },
  {
    slug: "hda-studio",
    image: "/portfolio/hda-studio.jpg",
    client: "HDA Studio",
    industry: "Beauty & Luxury Services",
    summary: "A luxury website for a Houston makeup studio — an elegant dark-and-gold design with a services menu, a beauty gallery, FAQs, and one-tap phone and WhatsApp contact for bridal, event, and editorial bookings.",
    tags: ["Luxury Web Design", "Local SEO", "Booking Inquiries"],
    metrics: [
      { value: "Houston", label: "Luxury makeup studio" },
      { value: "Gallery", label: "Portfolio of client looks" },
      { value: "1-tap", label: "Phone & WhatsApp contact" },
    ],
    url: "https://www.hda-studio.com",
    featured: false,
  },
  {
    slug: "axiomio",
    image: "/portfolio/axiomio/hero.jpg",
    client: "AXIOMIO",
    industry: "Enterprise Cloud & Security",
    summary: "An enterprise website for an AWS Advanced Tier Partner and Managed Service Provider — making a technical, high-trust managed-operations offer clear to enterprise buyers.",
    tags: ["Enterprise Website", "B2B SaaS & Services", "Conversion"],
    metrics: [
      { value: "4x", label: "Return after launch" },
      { value: "AWS MSP", label: "Advanced Tier Partner" },
      { value: "SOC 2", label: "Type II certified" },
    ],
    url: "https://axiomio.com",
    featured: true,
    detail: {
      headline: "An enterprise-grade website that made a complex AWS offer easy to buy — and returned 4x after launch",
      challengeHeading: "Making a deep technical offer easy for enterprise buyers to trust",
      services: ["Web Development", "UX/UI Design", "Technical SEO"],
      challenge:
        "AXIOMIO runs and secures AWS environments for organizations under a signed SLA, on Xops360 — a platform they built themselves. Their credentials are serious: AWS Managed Service Provider, Advanced Tier Partner, Security Competency, and Level 1 MSSP. The website needed to make a technical, high-trust offer clear to enterprise buyers, separate AXIOMIO from every other MSP with the same badges, and turn evaluators into qualified assessment requests.",
      approach: [
        { title: "Lead with the differentiator", description: "The homepage opens on one idea — managed AWS run on their own platform — with AWS credentials verified directly beneath it, so buyers understand the offer and trust it within seconds." },
        { title: "A buyer's comparison, not a brochure", description: "A side-by-side table frames AXIOMIO against the three alternatives buyers actually weigh: hiring an on-call team, stretching their own team, or a ticket-based provider." },
        { title: "The service model, made visible", description: "A three-layer structure — daily operations, SRE discipline, and the Xops360 platform — explains exactly what customers get and who owns the outcome." },
        { title: "Proof with sources", description: "Customer-reported results, a live platform run, client logos, a case-study library, and press coverage are presented with their sources — the evidence enterprise procurement looks for." },
        { title: "A low-friction enterprise funnel", description: "Every path leads to a free two-week assessment with four concrete deliverables, plus direct call booking for buyers who are ready to talk." },
        { title: "Built for scrutiny", description: "Responsive layouts, light and dark modes, an on-site AI assistant, and complete search and social metadata — engineered to hold up under technical evaluation." },
      ],
      results: [
        { value: "4x", label: "Return after launch" },
      ],
      gallery: [
        { src: "/portfolio/axiomio/comparison.jpg", alt: "AXIOMIO comparison table of four ways to run AWS operations", caption: "A comparison table frames the decision the way buyers actually make it." },
        { src: "/portfolio/axiomio/layers.jpg", alt: "AXIOMIO three layers of service", caption: "Three layers of service explain who does the work and what customers see." },
        { src: "/portfolio/axiomio/proof.jpg", alt: "AXIOMIO proof section with sourced metrics", caption: "Proof is presented with its sources — built for enterprise due diligence." },
        { src: "/portfolio/axiomio/assessment.jpg", alt: "AXIOMIO free two-week assessment offer", caption: "A free two-week assessment gives every evaluator a clear, low-risk next step." },
      ],
      mobileImage: "/portfolio/axiomio/mobile.jpg",
      clientFacts: [
        "AWS Managed Service Provider (MSP)",
        "AWS Advanced Tier Partner",
        "AWS Security Competency",
        "AWS Level 1 MSSP",
        "SOC 2 Type II certified",
        "Featured in Business Insider, Yahoo Finance, and AP News",
      ],
    },
  },
  { slug: "vargas", image: "/portfolio/vargas.png", client: "Vargas Tax Services", industry: "Financial Services", summary: "A national tax-preparation platform with quick-action tools, nationwide SEO coverage, and a dedicated landing page for every service.", tags: ["Web Platform", "SEO", "Landing Pages"], metrics: [{ value: "Nationwide", label: "Service area" }, { value: "Tax & bookkeeping", label: "Core services" }, { value: "Landing page", label: "For every service" }] },
  { slug: "unitedccr", image: "/portfolio/unitedccr.png", client: "United CCR", industry: "Construction & Restoration", summary: "Digital presence for a 2025 Aggie 100 honoree delivering commercial construction, emergency restoration, and facilities maintenance across the southern U.S.", tags: ["Corporate Website", "Brand", "Lead Generation"], metrics: [{ value: "24/7", label: "Emergency response" }, { value: "Southern U.S.", label: "Service area" }, { value: "Aggie 100", label: "2025 honoree" }], url: "https://www.unitedccr.com" },
  { slug: "hitechlogic", image: "/portfolio/hitechlogic.png", client: "HiTech Logic", industry: "IT & Automation", summary: "Web platform for an AI-powered managed services provider, presenting its managed IT and automation offerings to business buyers.", tags: ["Web Platform", "AI Services", "Managed IT"], metrics: [{ value: "AI-powered", label: "Managed services" }, { value: "Managed IT", label: "& automation" }, { value: "Web platform", label: "Design & build" }], url: "https://www.hitechlogic.com" },
  { slug: "clearledger", image: "/portfolio/clearledger.png", client: "ClearLedger Solutions", industry: "Financial Services", summary: "A conversion-focused site for a bookkeeping firm built around transparency, compliance, and a frictionless consultation flow.", tags: ["Web Design", "Conversion", "Financial"], metrics: [{ value: "Bookkeeping", label: "& accounting" }, { value: "Compliance", label: "-first messaging" }, { value: "Online booking", label: "Consultation flow" }], url: "https://www.yourclearledger.com" },
  { slug: "apnclinic", image: "/portfolio/apnclinic.png", client: "APN Clinic", industry: "Healthcare", summary: "Patient-first website for interventional pain management specialists treating traumatic brain injury and PTSD.", tags: ["Healthcare", "Patient Acquisition", "Web Design"], metrics: [{ value: "Opiate-free", label: "Treatment approach" }, { value: "TBI & PTSD", label: "Specialty" }, { value: "Patient-first", label: "Site design" }], url: "https://www.apnclinic.com" },
  { slug: "abqmri", image: "/portfolio/abqmri.png", client: "ABQ MRI", industry: "Healthcare", summary: "Website for an MRI and X-ray center built around fast scheduling and physician referrals.", tags: ["Healthcare", "Diagnostics", "Web Design"], metrics: [{ value: "MRI & X-ray", label: "Imaging services" }, { value: "Online", label: "Scheduling path" }, { value: "Physician", label: "Referral flow" }], url: "https://www.abqmri.com" },
  { slug: "svrlawfirm", image: "/portfolio/svrlawfirm.png", client: "SVR Law Firm", industry: "Legal", summary: "Authority-building site for Texas trial lawyers in personal injury and criminal defense.", tags: ["Legal", "Lead Generation", "Web Design"], metrics: [{ value: "Personal injury", label: "Practice area" }, { value: "Criminal defense", label: "Practice area" }, { value: "Free", label: "Consultation requests" }], url: "https://www.svrlawfirm.com", featured: true },
  { slug: "houinc", image: "/portfolio/houinc.png", client: "Houston Enterprise", industry: "Construction", summary: "Corporate site for a Houston residential and commercial construction company.", tags: ["Construction", "Corporate", "Web Design"], metrics: [{ value: "Residential", label: "Construction" }, { value: "Commercial", label: "Construction" }, { value: "Houston", label: "Headquarters" }], url: "https://www.houinc.com" },
  { slug: "allhoustonproperty", image: "/portfolio/allhoustonproperty.png", client: "All Houston Property", industry: "Real Estate", summary: "Real estate platform with property listings, market analysis, and guidance for buyers, sellers, and investors.", tags: ["Real Estate", "Listings", "Platform"], metrics: [{ value: "Listings", label: "Property search" }, { value: "Market analysis", label: "For buyers & sellers" }, { value: "Investors", label: "Dedicated guidance" }], url: "https://www.allhoustonproperty.com" },
  { slug: "hougenpros", image: "/portfolio/hougenpros.png", client: "Hou Gen Pros", industry: "Property Management", summary: "Website for a property management firm serving residential and commercial owners across greater Houston.", tags: ["Property Management", "Web Design", "Local SEO"], metrics: [{ value: "Residential", label: "& commercial owners" }, { value: "Greater Houston", label: "Service area" }, { value: "Local SEO", label: "Built in" }], url: "https://www.hougenpros.com" },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs.map((s) => caseStudies.find((c) => c.slug === s)).filter((c): c is CaseStudy => Boolean(c));
}

export const clientLogos = [
  { name: "CWX", logo: "/clients/cwx.png", url: "https://cwx.ai/" },
  { name: "AXIOMIO", logo: "/clients/axiomio.png", url: "https://axiomio.com/" },
  { name: "ABQ MRI", logo: "/clients/abqmri.png", url: "https://www.abqmri.com/" },
  { name: "APN Clinic", logo: "/clients/apnclinic.png", url: "https://www.apnclinic.com/" },
  { name: "United CCR", logo: "/clients/ccr.jpg", url: "https://www.unitedccr.com/" },
  { name: "HougenPros", logo: "/clients/hougenpros.png", url: "https://www.hougenpros.com/" },
  { name: "HOU Inc", logo: "/clients/houinc.png", url: "https://www.houinc.com/" },
];
