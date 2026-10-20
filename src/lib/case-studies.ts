/**
 * Client work — shared by the homepage, the Portfolio page and service pages.
 * Metrics are the clients' own business figures as provided.
 */
export interface CaseStudyDetail {
  headline: string;
  year?: string;
  services: string[];
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
  { slug: "vargas", image: "/portfolio/vargas.png", client: "Vargas Tax Services", industry: "Financial Services", summary: "A national tax-preparation platform with quick-action tools, nationwide SEO coverage, and a dedicated landing page for every service.", tags: ["Web Platform", "SEO", "Landing Pages"], metrics: [{ value: "1,000+", label: "Clients served" }, { value: "15+", label: "Service lines" }, { value: "98%", label: "Satisfaction" }], url: "https://vargastax.com", featured: true },
  { slug: "unitedccr", image: "/portfolio/unitedccr.png", client: "United CCR", industry: "Construction & Restoration", summary: "Digital presence for a 2025 Aggie 100 honoree delivering commercial construction, emergency restoration, and facilities maintenance across the southern U.S.", tags: ["Corporate Website", "Brand", "Lead Generation"], metrics: [{ value: "24/7", label: "Emergency response" }, { value: "100+", label: "Properties" }, { value: "Aggie 100", label: "Honoree" }], featured: true },
  { slug: "hitechlogic", image: "/portfolio/hitechlogic.png", client: "HiTech Logic", industry: "IT & Automation", summary: "Web platform for an AI-powered managed services provider delivering 50% cost savings and 75% faster incident resolution.", tags: ["Web Platform", "AI Services", "Managed IT"], metrics: [{ value: "85%", label: "Fewer alerts" }, { value: "4.5x", label: "Faster resolution" }, { value: "99.98%", label: "Uptime" }] },
  { slug: "clearledger", image: "/portfolio/clearledger.png", client: "ClearLedger Solutions", industry: "Financial Services", summary: "A conversion-focused site for a bookkeeping firm built around transparency, compliance, and a frictionless consultation flow.", tags: ["Web Design", "Conversion", "Financial"], metrics: [{ value: "500+", label: "Clients" }, { value: "99.9%", label: "Accuracy" }, { value: "4.9/5", label: "Rating" }], url: "https://clearledger.com" },
  { slug: "apnclinic", image: "/portfolio/apnclinic.png", client: "APN Clinic", industry: "Healthcare", summary: "Patient-first website for interventional pain management specialists treating traumatic brain injury and PTSD.", tags: ["Healthcare", "Patient Acquisition", "Web Design"], metrics: [{ value: "100%", label: "Opiate-free" }, { value: "4.9/5", label: "Rating" }, { value: "TBI & PTSD", label: "Specialty" }] },
  { slug: "abqmri", image: "/portfolio/abqmri.png", client: "ABQ MRI", industry: "Healthcare", summary: "Website for an MRI and X-ray center built around fast scheduling and physician referrals.", tags: ["Healthcare", "Diagnostics", "Web Design"], metrics: [{ value: "Fast", label: "Reports" }, { value: "MRI & X-Ray", label: "Services" }, { value: "5-Star", label: "Care" }] },
  { slug: "svrlawfirm", image: "/portfolio/svrlawfirm.png", client: "SVR Law Firm", industry: "Legal", summary: "Authority-building site for Texas trial lawyers in personal injury and criminal defense.", tags: ["Legal", "Lead Generation", "Web Design"], metrics: [{ value: "100+", label: "Cases won" }, { value: "Free", label: "Consultations" }, { value: "5-Star", label: "Reviews" }] },
  { slug: "houinc", image: "/portfolio/houinc.png", client: "Houston Enterprise", industry: "Construction", summary: "Corporate site for a Houston residential and commercial construction company.", tags: ["Construction", "Corporate", "Web Design"], metrics: [{ value: "50+", label: "Projects" }, { value: "100%", label: "On-time" }, { value: "5-Star", label: "Reviews" }] },
  { slug: "allhoustonproperty", image: "/portfolio/allhoustonproperty.png", client: "All Houston Property", industry: "Real Estate", summary: "Real estate platform with property listings, market analysis, and guidance for buyers, sellers, and investors.", tags: ["Real Estate", "Listings", "Platform"], metrics: [{ value: "1,000+", label: "Properties" }, { value: "500+", label: "Clients" }, { value: "15+", label: "Years" }] },
  { slug: "hougenpros", image: "/portfolio/hougenpros.png", client: "Hou Gen Pros", industry: "Property Management", summary: "Website for a property management firm serving residential and commercial owners across greater Houston.", tags: ["Property Management", "Web Design", "Local SEO"], metrics: [{ value: "300+", label: "Properties managed" }, { value: "98%", label: "Occupancy" }, { value: "4.9/5", label: "Rating" }] },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs.map((s) => caseStudies.find((c) => c.slug === s)).filter((c): c is CaseStudy => Boolean(c));
}

export const clientLogos = [
  { name: "ABQ MRI", logo: "/clients/abqmri.png", url: "https://www.abqmri.com/" },
  { name: "APN Clinic", logo: "/clients/apnclinic.png", url: "https://www.apnclinic.com/" },
  { name: "United CCR", logo: "/clients/ccr.jpg", url: "https://www.unitedccr.com/" },
  { name: "ClearLedger", logo: "/clients/clearledger.png", url: "https://www.yourclearledger.com/" },
  { name: "HougenPros", logo: "/clients/hougenpros.png", url: "https://www.hougenpros.com/" },
  { name: "IAC Centers", logo: "/clients/iac.png", url: "https://www.injuryassistancecenters.com/" },
  { name: "HOU Inc", logo: "/clients/houinc.png", url: "https://www.houinc.com/" },
];
