import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  MapPin,
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Palette,
  ArrowRight,
  Check,
  ChevronDown,
  Star,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Zap,
  Building2,
  Shield,
  Heart,
  Scale,
  DollarSign,
  Cpu,
  HardHat,
  BarChart3,
  Target,
  Rocket,
  ThumbsUp,
  Headphones,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  JSON-LD Schemas                                                    */
/* ------------------------------------------------------------------ */

const houstonAreas = [
  "Downtown Houston",
  "The Woodlands",
  "Sugar Land",
  "Katy",
  "Pearland",
  "Cypress",
  "Spring",
  "Missouri City",
  "League City",
  "Pasadena",
  "Baytown",
  "Conroe",
  "Humble",
  "Tomball",
  "Richmond",
  "Friendswood",
  "Galveston",
  "Clear Lake",
  "Memorial",
  "Galleria Area",
  "Heights",
  "Montrose",
  "Midtown",
  "River Oaks",
  "West University",
];

const faqData = [
  {
    question: "How much does web design cost in Houston?",
    answer:
      "Web design costs in Houston vary depending on the complexity and scope of the project. At Cardinal Consulting, our Houston web design packages start at $3,000 for a professional small business website and can range up to $25,000+ for enterprise-level custom web applications. Every Houston web design project includes responsive design, SEO optimization, and a content management system. We offer flexible payment plans for Houston businesses of all sizes. Contact us at (281) 901-7016 for a free, no-obligation quote tailored to your Houston business needs.",
  },
  {
    question: "What makes Cardinal the best web design agency in Houston?",
    answer:
      "Cardinal Consulting is recognized as Houston's top-rated web design agency because of our unique combination of local expertise, cutting-edge technology, and proven results. As a Houston-based agency at 2100 West Loop S Fwy, we understand the local market intimately. Our Houston web design team has delivered 500+ projects with a 98% client retention rate. We specialize in conversion-focused design, advanced SEO strategies, and custom development that helps Houston businesses outperform their competition online. Our 5-star Google rating reflects the exceptional quality we deliver to every Houston client.",
  },
  {
    question: "Do you offer SEO services in Houston?",
    answer:
      "Yes, Cardinal Consulting is one of Houston's leading SEO companies. Our Houston SEO services include comprehensive keyword research targeting Houston-specific search terms, on-page optimization, technical SEO audits, local SEO for Google Business Profile optimization, link building, and content marketing. We've helped hundreds of Houston businesses achieve first-page Google rankings for competitive local keywords. Our Houston SEO strategies are data-driven and tailored to the unique competitive landscape of the Houston market.",
  },
  {
    question: "How long does it take to build a website in Houston?",
    answer:
      "The timeline for website development in Houston depends on the project scope. A standard Houston business website typically takes 4-6 weeks from design to launch. More complex Houston web development projects, such as e-commerce platforms or custom web applications, can take 8-12 weeks. At Cardinal Consulting, we follow an agile development process that keeps Houston clients informed at every stage. We also offer expedited Houston web design services for businesses that need to launch quickly. Our Houston-based team is committed to delivering on time without compromising quality.",
  },
  {
    question: "Do you work with small businesses in Houston?",
    answer:
      "Absolutely! Cardinal Consulting proudly serves Houston small businesses, startups, and enterprises alike. We believe every Houston business deserves a world-class online presence, regardless of size. Our Houston small business web design packages are affordable and include everything needed to compete online — responsive design, SEO optimization, and ongoing support. Many of our most successful partnerships started with small Houston businesses that have grown significantly with our digital marketing support. We offer flexible pricing and payment plans designed specifically for Houston small business budgets.",
  },
  {
    question: "What areas of Houston do you serve?",
    answer:
      "Cardinal Consulting serves businesses across the entire Greater Houston metropolitan area. Our Houston service area includes Downtown Houston, The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, Missouri City, League City, Pasadena, Baytown, Conroe, Humble, Tomball, Richmond, Friendswood, Galveston, Clear Lake, Memorial, the Galleria Area, Heights, Montrose, Midtown, River Oaks, and West University. Whether you're located inside the Loop or in the surrounding suburbs, our Houston-based team at 2100 West Loop S Fwy is ready to help your business grow online.",
  },
  {
    question: "Can you help my Houston business rank on Google?",
    answer:
      "Yes! Helping Houston businesses rank on Google is one of our core specialties. Cardinal Consulting's Houston SEO team uses proven strategies to improve your Google rankings for Houston-specific search terms. We optimize your Google Business Profile, build local citations, create Houston-focused content, and implement technical SEO best practices. Our Houston clients typically see significant ranking improvements within 3-6 months. We've helped Houston businesses rank #1 for competitive keywords in industries including healthcare, legal, financial services, technology, and construction.",
  },
  {
    question: "Do you offer mobile app development in Houston?",
    answer:
      "Yes, Cardinal Consulting offers comprehensive mobile app development services in Houston. Our Houston app development team builds native iOS and Android applications as well as cross-platform solutions using React Native and Flutter. We've developed mobile apps for Houston businesses across healthcare, logistics, retail, real estate, and more. Our Houston mobile app development process includes strategy, UX/UI design, development, testing, and App Store/Google Play deployment. Contact our Houston office at (281) 901-7016 to discuss your mobile app project.",
  },
  {
    question: "What industries do you serve in Houston?",
    answer:
      "Cardinal Consulting serves a wide range of industries across the Houston metropolitan area. Our Houston clients span healthcare and medical practices, law firms and legal services, financial services and accounting, technology companies and startups, AI and automation businesses, construction and real estate, oil and gas, restaurants and hospitality, retail and e-commerce, and professional services. Each industry has unique digital needs, and our Houston team has deep experience creating tailored web design, SEO, and digital marketing strategies for every sector.",
  },
  {
    question: "How do I get started with Cardinal Consulting in Houston?",
    answer:
      "Getting started with Cardinal Consulting in Houston is easy. You can call us at (281) 901-7016, email hunain@visitcardinal.com, or visit our contact page to schedule a free consultation. During your free Houston consultation, we'll discuss your business goals, evaluate your current online presence, and provide a customized strategy and quote. You can also visit our Houston office at 2100 West Loop S Fwy, Houston, TX 77027. We typically respond to all Houston inquiries within 2 business hours. Let's discuss how we can help your Houston business grow!",
  },
];

const schemas = [
  // 1. LocalBusiness Schema
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://visitcardinal.com/#localbusiness",
    name: "Cardinal Consulting - Houston Web Design & Digital Marketing Agency",
    alternateName: "Cardinal Consulting Houston",
    description:
      "Houston's top-rated web design and digital marketing agency. Custom websites, mobile apps, SEO, and digital marketing services for Houston businesses. Located at 2100 West Loop S Fwy, Houston, TX 77027.",
    url: "https://visitcardinal.com",
    telephone: "+12819017016",
    email: "hunain@visitcardinal.com",
    image: "https://visitcardinal.com/og-image.png",
    logo: "https://visitcardinal.com/logo.png",
    priceRange: "$$-$$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, ACH, Wire Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2100 West Loop S Fwy",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77027",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.7399,
      longitude: -95.4617,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: houstonAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    })),
    sameAs: [
      "https://www.facebook.com/visitcardinal",
      "https://www.linkedin.com/company/visitcardinal",
      "https://www.instagram.com/visitcardinal",
      "https://twitter.com/visitcardinal",
    ],
  },
  // 2. WebPage Schema
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://visitcardinal.com/houston#webpage",
    url: "https://visitcardinal.com/houston",
    name: "Web Design Houston | #1 Rated Web Design Agency in Houston TX",
    description:
      "Looking for web design in Houston? Cardinal Consulting is Houston's top-rated web design agency. Custom websites, mobile apps, SEO & digital marketing. Call (281) 901-7016 for a free consultation.",
    isPartOf: { "@id": "https://visitcardinal.com/#website" },
    about: { "@id": "https://visitcardinal.com/#localbusiness" },
    inLanguage: "en-US",
    datePublished: "2024-01-01",
    dateModified: "2026-02-17",
  },
  // 3. Service Schemas
  ...[
    {
      name: "Web Design & Development Houston",
      description:
        "Professional web design and development services for Houston businesses. Custom responsive websites, e-commerce platforms, and web applications built by Houston's top web designers.",
    },
    {
      name: "Mobile App Development Houston",
      description:
        "Native and cross-platform mobile app development for Houston businesses. iOS, Android, and React Native apps built by experienced Houston developers.",
    },
    {
      name: "SEO Services Houston",
      description:
        "Comprehensive search engine optimization for Houston businesses. Local SEO, technical SEO, content strategy, and Google Business Profile optimization to rank higher in Houston.",
    },
    {
      name: "Digital Marketing Houston",
      description:
        "Full-service digital marketing for Houston businesses. PPC advertising, social media marketing, email marketing, and conversion optimization from Houston's leading digital agency.",
    },
    {
      name: "Brand Identity & Design Houston",
      description:
        "Professional brand identity design for Houston businesses. Logo design, brand guidelines, print collateral, and visual identity systems crafted by Houston's creative experts.",
    },
    {
      name: "UX/UI Design Houston",
      description:
        "User experience and interface design for Houston businesses. Research-driven design, prototyping, usability testing, and design systems from Houston's UX specialists.",
    },
  ].map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": "https://visitcardinal.com/#localbusiness" },
    areaServed: {
      "@type": "City",
      name: "Houston",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    serviceType: service.name,
  })),
  // 4. BreadcrumbList Schema
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://visitcardinal.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Houston Services",
        item: "https://visitcardinal.com/houston",
      },
    ],
  },
  // 5. FAQPage Schema
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
  // 6. GeoCircle Schema
  {
    "@context": "https://schema.org",
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 29.7604,
      longitude: -95.3698,
    },
    geoRadius: "80467",
    description:
      "Cardinal Consulting serves the Greater Houston metropolitan area within a 50-mile radius of Downtown Houston, TX.",
  },
  // 7. Review Schemas
  ...[
    {
      author: "Michael Richardson",
      reviewBody:
        "Cardinal Consulting completely transformed our Houston law firm's online presence. Our website traffic increased by 340% and we're now ranking #1 for multiple Houston legal keywords. Best web design agency in Houston, hands down.",
      ratingValue: 5,
      datePublished: "2025-11-15",
    },
    {
      author: "Dr. Sarah Chen",
      reviewBody:
        "We hired Cardinal for SEO and web design for our Houston medical practice. Within 6 months, we went from page 3 to the top 3 results for 'Houston dermatologist.' Their Houston SEO team is exceptional. Highly recommend!",
      ratingValue: 5,
      datePublished: "2025-09-22",
    },
    {
      author: "James Okonkwo",
      reviewBody:
        "As a Houston startup founder, I needed a reliable app development partner. Cardinal Consulting delivered an outstanding mobile app on time and on budget. Their Houston development team is world-class. Already planning our next project with them.",
      ratingValue: 5,
      datePublished: "2025-12-03",
    },
  ].map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.ratingValue,
      bestRating: 5,
    },
    author: { "@type": "Person", name: review.author },
    datePublished: review.datePublished,
    itemReviewed: { "@id": "https://visitcardinal.com/#localbusiness" },
  })),
];

/* ------------------------------------------------------------------ */
/*  Data Constants                                                     */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Globe,
    title: "Web Design & Development Houston",
    description:
      "Custom, responsive websites designed and developed by Houston's leading web design team. We build conversion-focused websites that help Houston businesses generate more leads and revenue online.",
    bullets: [
      "Custom responsive web design for Houston businesses",
      "E-commerce & WordPress development",
      "Blazing-fast performance & Core Web Vitals optimization",
      "Ongoing Houston website maintenance & support",
    ],
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development Houston",
    description:
      "Native and cross-platform mobile app development for Houston enterprises and startups. Our Houston app developers create iOS and Android applications that drive engagement and growth.",
    bullets: [
      "Native iOS & Android app development",
      "Cross-platform React Native & Flutter apps",
      "App Store optimization & deployment",
      "Post-launch Houston app support & updates",
    ],
    link: "/services/mobile-apps",
  },
  {
    icon: Search,
    title: "SEO Services Houston",
    description:
      "Dominate Google search results in Houston with our proven SEO strategies. Our Houston SEO experts deliver first-page rankings for competitive local keywords that drive qualified traffic to your business.",
    bullets: [
      "Houston local SEO & Google Business Profile optimization",
      "Technical SEO audits & on-page optimization",
      "Houston-focused content strategy & link building",
      "Monthly SEO reporting & analytics for Houston clients",
    ],
    link: "/services/seo",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Houston",
    description:
      "Full-service digital marketing for Houston businesses. From PPC to social media, our Houston marketing team creates data-driven campaigns that deliver measurable ROI for your Houston business.",
    bullets: [
      "Google Ads & PPC management for Houston markets",
      "Social media marketing & advertising",
      "Email marketing automation & campaigns",
      "Conversion rate optimization for Houston sites",
    ],
    link: "/services/digital-marketing",
  },
  {
    icon: Palette,
    title: "Brand Identity & Design Houston",
    description:
      "Build a powerful brand that resonates with Houston audiences. Our Houston design team crafts memorable brand identities, logos, and visual systems that set your business apart in the Houston market.",
    bullets: [
      "Logo design & brand identity systems",
      "Brand guidelines & style documentation",
      "Print collateral & marketing materials",
      "Brand strategy for Houston market positioning",
    ],
    link: "/services/brand-identity",
  },
  {
    icon: Zap,
    title: "UX/UI Design Houston",
    description:
      "Research-driven user experience and interface design for Houston businesses. We create intuitive digital experiences that delight users and drive conversions for Houston companies across every industry.",
    bullets: [
      "User research & usability testing",
      "Wireframing & interactive prototyping",
      "Responsive UI design systems",
      "Accessibility-compliant Houston web design",
    ],
    link: "/services/ui-ux-design",
  },
];

const whyReasons = [
  {
    icon: MapPin,
    title: "Local Houston Expertise",
    description:
      "We're not a remote agency — we're right here in Houston at 2100 West Loop S Fwy. We understand the Houston market, your customers, and what it takes to compete locally.",
  },
  {
    icon: BarChart3,
    title: "Proven Houston Results",
    description:
      "With 500+ successful Houston projects and a 98% client retention rate, our track record speaks for itself. We deliver measurable results that grow Houston businesses.",
  },
  {
    icon: Users,
    title: "Houston-Based Team",
    description:
      "Our entire team is based in Houston, TX. You get face-to-face meetings, local phone support, and a team that understands the Houston business landscape inside and out.",
  },
  {
    icon: DollarSign,
    title: "Affordable Houston Pricing",
    description:
      "Premium quality doesn't have to break the bank. Our Houston web design and marketing packages are competitively priced with flexible payment plans for businesses of every size.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery for Houston Clients",
    description:
      "We respect your timeline. Most Houston web design projects launch in 4-6 weeks, with expedited options available. Our agile Houston development process keeps your project on track.",
  },
  {
    icon: Headphones,
    title: "Ongoing Houston Support",
    description:
      "Our relationship doesn't end at launch. We provide ongoing website maintenance, SEO optimization, and digital marketing support to help Houston businesses grow month after month.",
  },
];

const caseStudies = [
  {
    title: "Houston Law Firm Website Redesign",
    industry: "Legal",
    metrics: [
      { label: "Organic Traffic", before: "850/mo", after: "3,740/mo", change: "+340%" },
      { label: "Lead Generation", before: "12/mo", after: "67/mo", change: "+458%" },
      { label: "Google Rankings", before: "Page 3", after: "#1-3", change: "Top 3" },
    ],
  },
  {
    title: "Houston Medical Practice SEO Campaign",
    industry: "Healthcare",
    metrics: [
      { label: "Organic Traffic", before: "1,200/mo", after: "5,800/mo", change: "+383%" },
      { label: "New Patients", before: "8/mo", after: "45/mo", change: "+462%" },
      { label: "Local Pack Rankings", before: "Not listed", after: "#1", change: "#1" },
    ],
  },
  {
    title: "Houston E-Commerce Website Launch",
    industry: "Retail",
    metrics: [
      { label: "Monthly Revenue", before: "$12K", after: "$89K", change: "+641%" },
      { label: "Conversion Rate", before: "1.2%", after: "4.8%", change: "+300%" },
      { label: "Average Order Value", before: "$45", after: "$78", change: "+73%" },
    ],
  },
  {
    title: "Houston Startup Mobile App Development",
    industry: "Technology",
    metrics: [
      { label: "App Downloads", before: "0", after: "25,000+", change: "25K+" },
      { label: "User Retention", before: "N/A", after: "72%", change: "72%" },
      { label: "App Store Rating", before: "N/A", after: "4.8★", change: "4.8★" },
    ],
  },
];

const industries = [
  { icon: Heart, title: "Healthcare", description: "HIPAA-compliant websites and patient portals for Houston medical practices, hospitals, and healthcare providers.", link: "/industries/healthcare" },
  { icon: Scale, title: "Legal", description: "Professional websites and SEO for Houston law firms, attorneys, and legal practices that generate qualified leads.", link: "/industries/legal" },
  { icon: DollarSign, title: "Financial", description: "Secure, compliant websites for Houston financial advisors, banks, accounting firms, and fintech companies.", link: "/industries/financial" },
  { icon: Cpu, title: "Technology", description: "Modern web platforms and applications for Houston tech companies, SaaS startups, and software businesses.", link: "/industries/technology" },
  { icon: Zap, title: "AI & Automation", description: "Cutting-edge websites and tools for Houston AI companies, automation firms, and machine learning startups.", link: "/industries/ai-automation" },
  { icon: HardHat, title: "Construction", description: "Lead-generating websites for Houston construction companies, contractors, architects, and real estate developers.", link: "/industries/construction" },
];

const testimonials = [
  {
    name: "Michael Richardson",
    role: "Managing Partner",
    company: "Richardson & Associates Law, Houston",
    text: "Cardinal Consulting completely transformed our Houston law firm's online presence. Our website traffic increased by 340% and we're now ranking #1 for multiple Houston legal keywords. The best web design agency in Houston, hands down. Their team understood exactly what our Houston firm needed.",
    rating: 5,
  },
  {
    name: "Dr. Sarah Chen",
    role: "Owner",
    company: "Premier Dermatology, Houston TX",
    text: "We hired Cardinal for SEO and web design for our Houston medical practice. Within 6 months, we went from page 3 to the top 3 results for 'Houston dermatologist.' Their Houston SEO team is exceptional and the communication is outstanding. Highly recommend to any Houston healthcare provider!",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Founder & CEO",
    company: "TechBridge Solutions, Houston",
    text: "As a Houston startup founder, I needed a reliable app development partner. Cardinal Consulting delivered an outstanding mobile app on time and on budget. Their Houston development team is world-class — talented, responsive, and truly invested in our success. Already planning our next project with them.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Houston Projects Delivered" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "#1", label: "Rated Houston Agency" },
  { value: "24/7", label: "Client Support" },
];

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HoustonServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Web Design Houston | #1 Rated Web Design Agency in Houston TX"
        description="Looking for web design in Houston? Cardinal Consulting is Houston's top-rated web design agency. Custom websites, mobile apps, SEO & digital marketing. Call (281) 901-7016 for a free consultation."
        url="https://visitcardinal.com/houston"
        schemas={schemas}
        keywords={[
          "web design Houston",
          "web design agency Houston",
          "app development Houston",
          "SEO company in Houston",
          "digital marketing agency Houston",
          "Houston web developer",
          "website development Houston TX",
          "mobile app development Houston",
          "Houston SEO services",
          "best web design company Houston",
          "Houston web design",
          "Houston website design",
          "web development Houston",
          "web designer Houston TX",
          "custom web design Houston",
          "responsive web design Houston",
          "ecommerce web design Houston",
          "WordPress web design Houston",
          "affordable web design Houston",
          "professional web design Houston",
          "Houston digital agency",
          "Houston marketing agency",
          "SEO Houston TX",
          "SEO agency Houston",
          "local SEO Houston",
          "Google Ads Houston",
          "PPC Houston",
          "social media marketing Houston",
          "branding agency Houston",
          "UX design Houston",
          "UI design Houston",
          "app developer Houston",
          "iOS app development Houston",
          "Android app development Houston",
          "Houston tech company",
          "Houston IT services",
          "website redesign Houston",
          "website maintenance Houston",
          "Houston business website",
          "small business web design Houston",
        ]}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <VerticalNav />

        <main>
          {/* ========================================= */}
          {/* HERO SECTION                              */}
          {/* ========================================= */}
          <section className="relative overflow-hidden bg-white py-20 lg:py-28">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-50/60 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-50/40 blur-3xl" />
            </div>

            <div className="relative container mx-auto px-6 lg:px-12">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-gray-500">
                  <li>
                    <Link to="/" className="hover:text-red-500 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-gray-900 font-medium">Houston Services</li>
                </ol>
              </nav>

              <div className="max-w-4xl">
                {/* Rating Badge */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    5.0 Rated — Houston's #1 Digital Agency
                  </span>
                </motion.div>

                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={1}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                >
                  Houston's Premier{" "}
                  <span className="text-red-500">Web Design</span> &{" "}
                  <span className="text-red-500">Digital Marketing</span> Agency
                </motion.h1>

                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={2}
                  className="text-lg lg:text-xl text-gray-500 leading-relaxed mb-8 max-w-3xl"
                >
                  Cardinal Consulting is Houston, Texas's top-rated web design agency,
                  delivering custom websites, mobile apps, SEO, and digital marketing
                  solutions that help Houston businesses dominate online. Based at 2100
                  West Loop S Fwy, Houston, TX 77027, we combine local expertise with
                  world-class technology to grow your Houston business.
                </motion.p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={3}
                  className="flex flex-wrap gap-4 mb-12"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors"
                  >
                    View Our Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Trust Signals */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={4}
                  className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
                >
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red-500" />
                    500+ Houston Projects
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red-500" />
                    98% Client Retention
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red-500" />
                    Free Houston Consultation
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red-500" />
                    No Long-Term Contracts
                  </span>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ========================================= */}
          {/* SERVICES GRID                             */}
          {/* ========================================= */}
          <section className="bg-gray-50/50 py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <span className="text-red-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                  Our Houston Services
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Digital Services We Offer in Houston, TX
                </h2>
                <p className="text-gray-500 text-lg">
                  From web design to SEO to mobile app development, Cardinal
                  Consulting provides a full suite of digital services to help Houston
                  businesses succeed online.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="bg-white rounded-2xl border border-gray-200/70 shadow p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <Check className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================= */}
          {/* WHY HOUSTON BUSINESSES CHOOSE CARDINAL    */}
          {/* ========================================= */}
          <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <span className="text-red-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                  Why Cardinal
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why Houston Businesses Choose Cardinal Consulting
                </h2>
                <p className="text-gray-500 text-lg">
                  Discover why hundreds of Houston businesses trust Cardinal Consulting
                  as their web design and digital marketing partner.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyReasons.map((reason, i) => (
                  <motion.div
                    key={reason.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="text-center p-8"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5">
                      <reason.icon className="w-7 h-7 text-red-500" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================= */}
          {/* HOUSTON AREAS WE SERVE                    */}
          {/* ========================================= */}
          <section className="bg-gray-50/50 py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <span className="text-red-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                  Service Areas
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Serving Businesses Across Greater Houston
                </h2>
                <p className="text-gray-500 text-lg">
                  Cardinal Consulting proudly provides web design, SEO, and digital
                  marketing services to businesses throughout the Houston metropolitan
                  area and surrounding communities.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
              >
                {houstonAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 bg-white border border-gray-200/70 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-red-200 hover:bg-red-50 transition-colors cursor-default"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    {area}
                  </span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ========================================= */}
          {/* RESULTS & CASE STUDIES                    */}
          {/* ========================================= */}
          <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <span className="text-red-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                  Proven Results
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Results We've Delivered for Houston Businesses
                </h2>
                <p className="text-gray-500 text-lg">
                  Real results from real Houston clients. See how our web design, SEO,
                  and digital marketing strategies have transformed Houston businesses.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((study, i) => (
                  <motion.div
                    key={study.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="bg-white rounded-2xl border border-gray-200/70 shadow p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-red-50 text-red-500 text-xs font-semibold px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-gray-900">
                        {study.title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-gray-500">
                            {metric.label}
                          </span>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-gray-400 line-through">
                              {metric.before}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-gray-300" />
                            <span className="font-bold text-gray-900">
                              {metric.after}
                            </span>
                            <span className="text-red-500 font-semibold text-xs bg-red-50 px-2 py-0.5 rounded-full">
                              {metric.change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================= */}
          {/* HOUSTON STATS                             */}
          {/* ========================================= */}
          <section className="bg-gray-900 py-16 lg:py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="text-center"
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-white font-serif mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================= */}
          {/* INDUSTRIES WE SERVE IN HOUSTON            */}
          {/* ========================================= */}
          <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <span className="text-red-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                  Industries
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Industries We Serve in Houston
                </h2>
                <p className="text-gray-500 text-lg">
                  Cardinal Consulting has deep experience building websites and
                  marketing strategies for Houston businesses across these key
                  industries.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((ind, i) => (
                  <motion.div
                    key={ind.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                  >
                    <Link
                      to={ind.link}
                      className="block bg-white rounded-2xl border border-gray-200/70 shadow p-8 hover:shadow-lg hover:border-red-200 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                        <ind.icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                        {ind.title} in Houston
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {ind.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-red-500 group-hover:text-red-600 transition-colors">
                        View Houston {ind.title} Services{" "}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================= */}
          {/* TESTIMONIALS                              */}
          {/* ========================================= */}
          <section className="bg-gray-50/50 py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <span className="text-red-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                  Testimonials
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  What Houston Clients Say About Cardinal
                </h2>
                <p className="text-gray-500 text-lg">
                  Don't just take our word for it — hear from Houston business owners
                  who have experienced the Cardinal Consulting difference.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="bg-white rounded-2xl border border-gray-200/70 shadow p-8"
                  >
                    <div className="flex mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 fill-red-500 text-red-500"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                      "{t.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================= */}
          {/* FAQ SECTION                               */}
          {/* ========================================= */}
          <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <span className="text-red-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                  FAQs
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions About Our Houston Services
                </h2>
                <p className="text-gray-500 text-lg">
                  Get answers to the most common questions about web design, SEO, and
                  digital marketing services in Houston, TX.
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqData.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i * 0.5}
                    className="bg-white rounded-2xl border border-gray-200/70 shadow overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-serif font-bold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === i ? "max-h-[600px]" : "max-h-0"
                      }`}
                    >
                      <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================= */}
          {/* MAP / LOCATION SECTION                    */}
          {/* ========================================= */}
          <section className="bg-gray-50/50 py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <span className="text-red-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                  Visit Us
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Houston Office Location
                </h2>
                <p className="text-gray-500 text-lg">
                  Visit Cardinal Consulting in Houston for a face-to-face consultation
                  about your web design, SEO, or digital marketing project.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-2xl border border-gray-200/70 shadow p-8 lg:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                          Cardinal Consulting
                        </h3>
                        <p className="text-red-500 text-sm font-medium">
                          Houston Web Design & Digital Marketing Agency
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              Address
                            </div>
                            <div className="text-sm text-gray-500">
                              2100 West Loop S Fwy
                              <br />
                              Houston, TX 77027
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              Phone
                            </div>
                            <a
                              href="tel:+12819017016"
                              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                            >
                              (281) 901-7016
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              Email
                            </div>
                            <a
                              href="mailto:hunain@visitcardinal.com"
                              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                            >
                              hunain@visitcardinal.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              Hours
                            </div>
                            <div className="text-sm text-gray-500">
                              Mon–Fri: 9:00 AM – 6:00 PM
                              <br />
                              Sat: 10:00 AM – 2:00 PM
                              <br />
                              Sun: Closed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="bg-red-50 rounded-2xl p-8 text-center">
                        <Building2 className="w-10 h-10 text-red-500 mx-auto mb-4" />
                        <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">
                          Schedule a Houston Consultation
                        </h4>
                        <p className="text-gray-500 text-sm mb-6">
                          Meet with our Houston team in person or virtually. We'll
                          discuss your project goals and provide a free custom quote.
                        </p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
                        >
                          Book Free Consultation
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ========================================= */}
          {/* FINAL CTA                                 */}
          {/* ========================================= */}
          <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Grow Your Houston Business?
                </h2>
                <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
                  Join 500+ Houston businesses that trust Cardinal Consulting for web
                  design, SEO, and digital marketing. Get a free consultation today and
                  discover how we can help your Houston business dominate online.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Get Your Free Houston Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+12819017016"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call (281) 901-7016
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
