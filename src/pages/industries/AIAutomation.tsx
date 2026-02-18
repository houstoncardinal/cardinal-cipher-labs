import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { MobileToolbar } from "@/components/layout/MobileToolbar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Brain, Bot, Workflow, Sparkles, ArrowRight, Check, ChevronDown,
  Star, Zap, LineChart, Cpu, Network, Shield, Eye, Layers,
  BarChart3, Lightbulb, Rocket, Target, Clock, Users
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Company Website Design",
    description: "Custom-designed websites for artificial intelligence companies that communicate technical sophistication while remaining accessible. We translate complex AI capabilities into compelling visual narratives that attract investors, talent, and enterprise clients.",
  },
  {
    icon: Workflow,
    title: "Automation Dashboard Development",
    description: "Intuitive, real-time dashboards for monitoring and managing automation workflows. We build responsive interfaces that visualize pipeline status, system health, throughput metrics, and exception handling with sub-second data refresh.",
  },
  {
    icon: Bot,
    title: "Chatbot & Conversational AI Integration",
    description: "Seamless integration of conversational AI into websites and applications. From GPT-powered customer support bots to domain-specific virtual assistants, we design conversational flows and deploy production-grade chatbot UIs.",
  },
  {
    icon: LineChart,
    title: "ML Pipeline Visualization",
    description: "Interactive interfaces for visualizing machine learning pipelines, model performance, training metrics, and data lineage. We build tools that make complex ML operations understandable for technical and non-technical stakeholders alike.",
  },
  {
    icon: Sparkles,
    title: "AI Startup Marketing",
    description: "Full-funnel digital marketing strategies tailored to AI and deep-tech startups. From SEO-optimized content that ranks for technical queries to paid campaigns targeting enterprise decision-makers and VC audiences.",
  },
  {
    icon: Cpu,
    title: "Intelligent Process Automation UIs",
    description: "User interfaces for robotic process automation (RPA) platforms and intelligent automation suites. We design drag-and-drop workflow builders, rule engines, and monitoring consoles that make automation accessible to business users.",
  },
];

const differentiators = [
  {
    icon: Layers,
    title: "Deep Technical Fluency",
    description: "Our team understands transformers, neural networks, and MLOps pipelines. We don't just design pretty pages — we build interfaces grounded in genuine understanding of how AI systems work, ensuring technical accuracy in every pixel.",
  },
  {
    icon: BarChart3,
    title: "Data Visualization Mastery",
    description: "AI companies live and breathe data. We specialize in translating high-dimensional data, model metrics, and real-time telemetry into intuitive visual interfaces using D3.js, Recharts, and custom WebGL renderers.",
  },
  {
    icon: Network,
    title: "Built for Scale",
    description: "AI platforms handle enormous data volumes and concurrent users. We architect frontends with optimistic updates, virtualized lists, WebSocket streams, and edge-cached assets to maintain 60fps performance at any scale.",
  },
  {
    icon: Shield,
    title: "Security & Compliance Ready",
    description: "From SOC 2 to GDPR and AI-specific regulations, we build with compliance baked in. Role-based access control, audit trails, data anonymization layers, and encrypted state management come standard.",
  },
];

const results = [
  {
    company: "NeuralPath AI",
    metric: "340%",
    label: "Increase in Qualified Leads",
    description: "Redesigned the corporate website and implemented an AI-driven SEO strategy that tripled organic traffic and increased enterprise demo requests by 340% within six months.",
  },
  {
    company: "AutomateX Platform",
    metric: "67%",
    label: "Reduction in Support Tickets",
    description: "Built an intuitive automation dashboard with guided workflows and contextual help, reducing customer support tickets by 67% and increasing user activation rates by 89%.",
  },
  {
    company: "DataForge ML",
    metric: "4.2x",
    label: "Faster Model Deployment",
    description: "Developed a visual ML pipeline builder that enabled data science teams to configure, test, and deploy models 4.2x faster with a drag-and-drop interface and one-click deployment.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "AI Domain Discovery",
    description: "We immerse ourselves in your AI product, technology stack, and target market. We interview your engineers, review your documentation, and map your competitive landscape to build deep domain knowledge.",
  },
  {
    step: "02",
    title: "Technical Architecture",
    description: "Designing the information architecture, data flow diagrams, and API integration strategy. We plan how your AI capabilities will surface in the UI and define real-time data requirements.",
  },
  {
    step: "03",
    title: "UX for Complex Systems",
    description: "Creating wireframes and interactive prototypes that simplify complex AI workflows. We conduct usability testing with technical and non-technical users to validate that interfaces are intuitive.",
  },
  {
    step: "04",
    title: "Visual Design & Branding",
    description: "Crafting a visual identity that conveys innovation and trust. We develop design systems with data visualization components, dark/light themes, and responsive layouts tailored to AI products.",
  },
  {
    step: "05",
    title: "Development & Integration",
    description: "Building with React, TypeScript, and real-time data layers. We integrate with your ML APIs, streaming endpoints, and authentication systems while maintaining clean, testable code.",
  },
  {
    step: "06",
    title: "Launch & Optimization",
    description: "Deploying with performance monitoring, A/B testing, and analytics. We track user engagement patterns, funnel conversion, and feature adoption to continuously improve your digital presence.",
  },
];

const stats = [
  { value: "25+", label: "AI Systems Built" },
  { value: "75%", label: "Faster Processing" },
  { value: "99.9%", label: "Platform Accuracy" },
  { value: "4.9/5", label: "Client Rating" },
];

const faqs = [
  {
    question: "What types of AI companies do you work with?",
    answer: "We work with the full spectrum of AI companies — from pre-seed startups building their first product landing page to enterprise AI platforms serving Fortune 500 clients. Our portfolio includes computer vision companies, NLP/LLM startups, autonomous vehicle platforms, AI-powered SaaS products, MLOps tooling companies, and robotic process automation providers. We tailor our approach to your specific market position and technical maturity.",
  },
  {
    question: "Can you build real-time dashboards that connect to our ML models?",
    answer: "Absolutely. We build real-time dashboards that connect directly to your ML inference APIs, training pipelines, and monitoring systems via REST, GraphQL, or WebSocket connections. We've built interfaces that visualize live prediction streams, model accuracy metrics, A/B test results, data drift detection, and resource utilization — all updating in real time with sub-second latency.",
  },
  {
    question: "How do you handle the complexity of explaining AI to non-technical audiences?",
    answer: "This is one of our core strengths. We use progressive disclosure design patterns — surfacing simple, visual explanations by default while allowing technical users to drill into the details. We employ animated data visualizations, interactive demos, plain-language copy, and carefully designed information hierarchies that make AI concepts accessible without oversimplifying them.",
  },
  {
    question: "Do you integrate chatbots and conversational AI into websites?",
    answer: "Yes, we have extensive experience integrating conversational AI into websites and applications. We work with OpenAI, Anthropic, and custom LLM endpoints to build chatbot UIs with streaming responses, context-aware conversations, tool-use capabilities, and seamless escalation to human agents. We handle both the frontend chat interface and the backend orchestration layer.",
  },
  {
    question: "What is your approach to data security for AI platforms?",
    answer: "Security is foundational to every AI project we build. We implement end-to-end encryption, role-based access control (RBAC), audit logging, and data anonymization at the UI layer. We follow SOC 2 Type II controls, GDPR data handling requirements, and emerging AI-specific regulations. All sensitive data is handled through secure API gateways — never stored or cached on the client side.",
  },
  {
    question: "How long does it take to build an AI company website or dashboard?",
    answer: "A high-quality AI company marketing website typically takes 4-6 weeks. A complex automation dashboard or ML pipeline visualization platform takes 8-14 weeks depending on the number of integrations, data sources, and user roles. We provide a detailed timeline during discovery, with biweekly demos so you can track progress and provide feedback throughout development.",
  },
];

const pageUrl = "https://visitcardinal.com/industries/ai-automation";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI & Automation Website Development & Marketing",
    description: "Custom website development, dashboard design, and digital marketing for AI companies, automation platforms, and machine learning startups in Houston TX.",
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      url: "https://visitcardinal.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation Website Development & Digital Marketing",
    description: "Professional website design, automation dashboard development, chatbot integration, ML pipeline visualization, and digital marketing services for artificial intelligence companies and automation platforms.",
    provider: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      url: "https://visitcardinal.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    areaServed: "United States",
    serviceType: "AI & Automation Web Development and Marketing",
    url: pageUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "34",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://visitcardinal.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://visitcardinal.com/industries" },
      { "@type": "ListItem", position: 3, name: "AI & Automation", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function AIAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="AI & Automation Website Development & Marketing | Houston TX"
        description="Custom AI company website design, automation platform development, and machine learning dashboard interfaces. Chatbot integration, ML visualization, and digital marketing for AI startups. Houston TX."
        keywords={[
          "AI company website design",
          "automation platform development",
          "machine learning dashboard",
          "chatbot integration",
          "AI startup marketing",
          "automation dashboard development",
          "ML pipeline visualization",
          "AI website Houston TX",
          "conversational AI integration",
          "intelligent process automation UI",
        ]}
        schemas={schemas}
        url={pageUrl}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <VerticalNav />
        <MobileToolbar />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-50/60 via-transparent to-transparent" />
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100/30 to-transparent rounded-full blur-3xl" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "AI & Automation" }]} />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-red-50 border border-red-100 flex items-center justify-center">
                    <Brain className="w-7 h-7 text-red-600" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-red-600 font-medium">
                    AI & Automation
                  </span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                  AI & Automation Website Development & Digital Marketing
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mb-8 leading-relaxed">
                  We build world-class digital experiences for artificial intelligence companies and automation platforms
                  — from AI startup websites and machine learning dashboards to chatbot integrations and intelligent
                  process automation UIs. Engineered for technical depth and market impact.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Start Your AI Project <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-900 text-sm font-medium hover:border-gray-900 transition-colors"
                  >
                    View Our Work
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 border-y border-gray-200">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-serif text-4xl lg:text-5xl text-red-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-red-600 font-medium">What We Build</span>
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
                  Services for AI & Automation Companies
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  End-to-end digital solutions designed specifically for the unique demands of artificial intelligence
                  and automation businesses.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="p-6 h-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
                      <service.icon className="w-10 h-10 text-red-600 mb-4" />
                      <h3 className="font-serif text-xl text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why AI Companies Choose Us */}
          <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-red-600 font-medium">Our Edge</span>
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
                  Why AI Companies Choose Us
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  We combine genuine technical understanding of AI systems with elite design and development
                  capabilities.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {differentiators.map((diff, i) => (
                  <motion.div
                    key={diff.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex gap-5 p-6 bg-white border border-gray-200 shadow-sm h-full">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center">
                        <diff.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-gray-900 mb-2">{diff.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{diff.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-red-600 font-medium">Proven Impact</span>
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
                  Results That Speak for Themselves
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Measurable outcomes from our work with AI and automation companies.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {results.map((result, i) => (
                  <motion.div
                    key={result.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="p-8 bg-white border border-gray-200 shadow-sm h-full text-center">
                      <div className="font-serif text-5xl text-red-600 mb-2">{result.metric}</div>
                      <div className="text-sm font-medium text-gray-900 mb-1">{result.label}</div>
                      <div className="text-xs text-red-600 font-medium tracking-wider uppercase mb-4">
                        {result.company}
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{result.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-red-600 font-medium">How We Work</span>
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
                  Our AI-Focused Process
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  A rigorous methodology refined through dozens of AI and automation projects.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="text-6xl font-serif text-red-600/20 mb-2">{item.step}</div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-red-600 font-medium">FAQ</span>
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Common questions about our AI and automation web development services.
                </p>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="font-serif text-lg text-gray-900 pr-4">{faq.question}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                            openFaq === i ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.2 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 lg:py-28 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Brain className="w-12 h-12 text-red-500 mx-auto mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Ready to Build Your AI Platform's Digital Presence?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                  Let's discuss how we can translate your AI technology into a digital experience that drives
                  growth, attracts investment, and converts enterprise clients. Free consultation.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  Schedule Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
