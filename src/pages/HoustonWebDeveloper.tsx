import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, Code, Globe, Zap, Shield, Users, TrendingUp, ChevronDown, Award, Database } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const techStack = [
  { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", techs: ["Node.js", "Python", "FastAPI", "Express", "GraphQL"] },
  { category: "Databases", techs: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "MySQL"] },
  { category: "Cloud & DevOps", techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
  { category: "Mobile", techs: ["React Native", "Swift", "Kotlin", "Expo", "Flutter"] },
  { category: "AI & ML", techs: ["OpenAI API", "TensorFlow", "Python ML", "LangChain", "Claude API"] }
];

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description: "Full-stack web development for Houston businesses. From marketing sites to complex web applications — built for speed, SEO, and scale.",
    perks: ["React / Next.js / TypeScript", "SEO-first architecture", "Core Web Vitals 90+", "CMS integration"]
  },
  {
    icon: Code,
    title: "Web Application Development",
    description: "Complex web apps, dashboards, SaaS platforms, and internal tools. Houston businesses rely on our web apps to run their operations.",
    perks: ["Custom dashboards & portals", "SaaS platform development", "API development & integration", "Real-time features"]
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "Robust backends and REST/GraphQL APIs that power your Houston business applications. Scalable, secure, and well-documented.",
    perks: ["REST & GraphQL APIs", "Microservices architecture", "Database design & optimization", "Authentication & authorization"]
  },
  {
    icon: Shield,
    title: "E-Commerce Development",
    description: "Custom e-commerce platforms and Shopify/WooCommerce solutions that convert Houston shoppers into loyal customers.",
    perks: ["Custom e-commerce build", "Shopify & WooCommerce", "Payment gateway integration", "Inventory management"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Is your Houston website slow? We audit and optimize your existing site for speed, Core Web Vitals, and conversion performance.",
    perks: ["Page speed audit & fix", "Core Web Vitals optimization", "Image & code optimization", "CDN configuration"]
  },
  {
    icon: TrendingUp,
    title: "Technical SEO Development",
    description: "Technical SEO implementation at the code level. Schema markup, structured data, crawlability fixes, and more for Houston businesses.",
    perks: ["Schema.org markup", "Sitemap & robots.txt", "Canonical URL management", "Indexability audit & fix"]
  }
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Supabase",
  "PostgreSQL", "Tailwind CSS", "GraphQL", "Docker", "Kubernetes", "Redis",
  "MongoDB", "React Native", "Swift", "Kotlin", "Google Cloud", "Azure",
  "OpenAI", "TensorFlow", "FastAPI", "Express", "Vue.js"
];

const faqs = [
  {
    question: "What is the best web developer in Houston?",
    answer: "Cardinal Consulting is Houston's top-rated web development company with 127 verified 5-star reviews and a 4.9-star average rating. Our team of expert web developers has built 500+ websites and web applications for Houston businesses across all industries. We specialize in React, Next.js, Node.js, and full-stack development. We're Houston-based, so we can meet in person at our 2100 West Loop S Fwy office."
  },
  {
    question: "How do I find a web developer near me in Houston?",
    answer: "Cardinal Consulting is a Houston-based web development company located at 2100 West Loop S Fwy, Houston, TX 77027. We serve all Houston neighborhoods including The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, League City, Pasadena, Conroe, and all of Greater Houston. Call us at (281) 901-7016 or email hello@visitcardinal.com to schedule a free in-person or virtual consultation."
  },
  {
    question: "What technologies do Houston web developers use?",
    answer: "Our Houston web developers work with modern technology stacks including React, Next.js, TypeScript (frontend), Node.js, Python, FastAPI (backend), PostgreSQL, MongoDB, Supabase (databases), and AWS, Google Cloud, Azure (cloud). We select the best technology for your specific project goals, not the easiest for us. We stay current with the latest web technologies to ensure your Houston business gets the competitive edge."
  },
  {
    question: "How much does a web developer cost in Houston?",
    answer: "Web developer rates in Houston vary. Freelancers charge $50-$150/hour, while agencies like Cardinal Consulting offer project-based pricing for better value and accountability. Our Houston web development projects start at $3,000 for simple sites and range to $100,000+ for complex enterprise platforms. We provide detailed quotes upfront with no hidden fees. Most Houston businesses find our project pricing more cost-effective than hiring a full-time developer."
  },
  {
    question: "Should I hire a Houston web developer or use a website builder?",
    answer: "For serious Houston businesses, we always recommend a professional web developer over website builders like Wix or Squarespace. Here's why: (1) Custom development ranks better on Google because it's built for SEO. (2) Custom sites load faster and convert more visitors. (3) Your business looks more professional with a custom design. (4) You own your code — no platform lock-in. (5) A Cardinal Consulting website typically pays for itself within 6 months through increased leads and sales."
  },
  {
    question: "Can you rebuild or update my existing Houston website?",
    answer: "Absolutely. Website rebuilds are one of our most common Houston web development projects. We audit your existing site, identify performance issues and SEO problems, and rebuild it with modern technology. We carefully migrate your content and handle redirects to protect your Google rankings. Most Houston clients see improved rankings and conversions within 30-60 days of relaunching with us."
  },
  {
    question: "Do you build websites for Houston startups?",
    answer: "Yes! We love working with Houston startups. We build MVP websites and web applications that are fast to launch and easy to iterate on. We've helped Houston startups launch products that have attracted investment, users, and media coverage. Our agile process is startup-friendly — we can build and launch your Houston startup's website in as little as 2 weeks."
  }
];

const reviews = [
  { name: "Brandon H.", company: "Houston Tech Startup", text: "The best web developer in Houston. They built our entire SaaS platform in 8 weeks. The code quality is exceptional and our app runs perfectly at scale.", rating: 5 },
  { name: "Lisa C.", company: "Houston Law Firm", text: "We interviewed 5 Houston web developers and Cardinal was in a different league. Professional, fast, and our site now ranks #1 for our target keywords.", rating: 5 },
  { name: "Tony R.", company: "Houston E-Commerce Brand", text: "They rebuilt our e-commerce site and revenue doubled in 3 months. Best investment we've made. True experts in web development and SEO.", rating: 5 },
  { name: "Dr. Nina P.", company: "Houston Medical Group", text: "They built a complex patient portal and HIPAA-compliant appointment system. Everything works perfectly and patients love it. Truly the best in Houston.", rating: 5 }
];

const generateSchemas = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.visitcardinal.com/houston-web-developer#localbusiness",
    "name": "Cardinal Consulting — Best Web Developer Houston TX",
    "alternateName": ["Houston Web Developer", "Web Developer Near Me Houston", "Best Web Developer Houston", "Houston Web Development Company"],
    "description": "Houston's best web developers. Full-stack React, Next.js, Node.js development for Houston businesses. 500+ projects delivered. Expert web developers serving all Houston neighborhoods.",
    "url": "https://www.visitcardinal.com/houston-web-developer",
    "telephone": "+12819017016",
    "email": "hello@visitcardinal.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2100 West Loop S Fwy",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77027",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7399,
      "longitude": -95.4617
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewBody": r.text,
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5 }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Houston TX",
    "alternateName": ["Houston Web Developer", "Web Developer Near Me Houston", "Best Web Developer Houston TX", "Full Stack Web Development Houston"],
    "description": "Expert web development services for Houston businesses. React, Next.js, Node.js, and full-stack development. Custom websites, web apps, e-commerce, and technical SEO.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.visitcardinal.com/houston-web-developer#localbusiness"
    },
    "areaServed": {
      "@type": "City",
      "name": "Houston",
      "containedInPlace": { "@type": "State", "name": "Texas" }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visitcardinal.com" },
      { "@type": "ListItem", "position": 2, "name": "Houston Web Developer", "item": "https://www.visitcardinal.com/houston-web-developer" }
    ]
  };

  return [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];
};

export function HoustonWebDeveloperPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Best Web Developer Houston TX | Web Developer Near Me"
        description="Houston's best web developer. React, Next.js & full-stack web development for Houston businesses. Web developer near me — located at 2100 West Loop S, Houston TX. Call (281) 901-7016."
        keywords={[
          "web developer Houston", "web developer Houston TX", "best web developer Houston",
          "web developer near me Houston", "Houston web developer", "full stack developer Houston",
          "React developer Houston", "Next.js developer Houston", "Node.js developer Houston",
          "freelance web developer Houston", "web development company Houston TX",
          "custom web developer Houston", "professional web developer Houston",
          "Houston website developer", "web developer near me", "top web developer Houston",
          "experienced web developer Houston", "Houston React developer",
          "web developer Houston Texas", "web development services Houston"
        ]}
        schemas={generateSchemas()}
        url="https://www.visitcardinal.com/houston-web-developer"
      />

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* HERO */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-50/60 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-50/40 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-8">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />)}</div>
                <span className="text-sm font-semibold text-gray-900">Houston's #1 Rated Web Developers — 4.9★ (127 Reviews)</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6">
                Houston's Best{' '}
                <span className="text-red-600">Web Developers</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-4">
                Full-stack React, Next.js, and Node.js web development for Houston businesses.
                From custom websites to complex web applications — we build software that performs.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-gray-400 max-w-2xl mb-10">
                Looking for a "web developer near me" in Houston? We're located at 2100 West Loop S Fwy, Houston, TX 77027. Available for in-person meetings or remote collaboration.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  <Phone className="w-4 h-4" /> Call (281) 901-7016
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {["500+ Projects Delivered", "15+ Years Experience", "Full-Stack Experts", "Free Consultation"].map(badge => (
                  <span key={badge} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" />{badge}</span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  { value: "500+", label: "Houston Projects Built" },
                  { value: "15+", label: "Years of Experience" },
                  { value: "4.9★", label: "Average Google Rating" },
                  { value: "#1", label: "Web Developer Houston" }
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="text-3xl lg:text-5xl font-bold text-white font-serif mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">What Our Houston Web Developers Build</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Web Development Services in Houston</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-5">{service.description}</p>
                    <ul className="space-y-2">
                      {service.perks.map(p => (
                        <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />{p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* TECH STACK */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Technology</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Our Houston Web Developer Tech Stack</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">We use the latest and most performant technologies to give Houston businesses a competitive edge.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((cat, i) => (
                  <motion.div key={cat.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-4">{cat.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.techs.map(tech => (
                        <span key={tech} className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* REVIEWS */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">What Houston Clients Say</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((r, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex mb-3">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                    <p className="text-gray-600 text-sm mb-4">"{r.text}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-gray-500 text-xs">{r.company}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Web Developer — FAQ</h2>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%)' }} />
            <div className="container mx-auto px-6 lg:px-12 relative text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Ready to Work with Houston's Best Web Developers?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">Get a free consultation and project estimate. Houston's #1 web developers are ready to build your next website or web application.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Start Your Project <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4" /> Call (281) 901-7016
                  </a>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />2100 West Loop S Fwy, Houston, TX 77027</span>
                  <span className="flex items-center gap-2"><Mail className="w-4 h-4" />hello@visitcardinal.com</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" />Mon–Fri 9AM–6PM CST</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-8">Related Services</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { label: "Web Design Houston", href: "/houston-web-design" },
                  { label: "App Development Houston", href: "/houston-app-development" },
                  { label: "Houston SEO Company", href: "/houston-seo-company" },
                  { label: "Modern Tech Stack", href: "/modern-tech-stack" },
                ].map((link) => (
                  <Link key={link.href} to={link.href} className="block text-center px-4 py-4 bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-sm text-sm font-semibold text-gray-700 hover:text-red-600 transition-all duration-200">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HoustonWebDeveloperPage;
