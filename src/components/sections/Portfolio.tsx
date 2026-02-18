import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    image: "/portfolio/vargas.png",
    category: "Tax Preparation Services",
    title: "Vargas Tax Services",
    description: "Professional tax preparation platform with customized quick action widgets, powerful SEO coverage across America, and dedicated landing pages for each individual service offering.",
    tags: ["Tax Preparation", "Quick Actions", "Landing Pages"],
    metrics: [
      { value: "1000+", label: "Clients" },
      { value: "15+", label: "Services" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    image: "/portfolio/blutouch.png",
    category: "Luxury Pool Design",
    title: "BluTouch Pools & Spas",
    description: "Houston's premier custom pool builder featuring 3-D reality view technology, personal consultations, and award-winning design team crafting luxury backyard oases.",
    tags: ["Custom Pools", "3D Design", "Luxury Spas"],
    metrics: [
      { value: "200+", label: "Pools Built" },
      { value: "10+", label: "Years" },
      { value: "4.9/5", label: "Rating" },
    ],
  },
  {
    image: "/portfolio/clearledger.png",
    category: "Financial Services",
    title: "ClearLedger Solutions",
    description: "Trusted financial partner providing accurate, reliable, and transparent bookkeeping services tailored specifically for small businesses and entrepreneurs.",
    tags: ["Bookkeeping", "Small Business", "Financial"],
    metrics: [
      { value: "500+", label: "Clients" },
      { value: "99.9%", label: "Accuracy" },
      { value: "4.9/5", label: "Rating" },
    ],
  },
  {
    image: "/portfolio/houinc.png",
    category: "Construction Excellence",
    title: "Houston Enterprise",
    description: "Leading Houston construction company transforming dreams into reality with residential and commercial projects built on quality, integrity, and innovation.",
    tags: ["Residential", "Commercial", "Renovations"],
    metrics: [
      { value: "50+", label: "Projects" },
      { value: "100%", label: "On-Time" },
      { value: "5-Star", label: "Reviews" },
    ],
  },
  {
    image: "/portfolio/unitedccr.png",
    category: "Disaster Restoration",
    title: "United CCR",
    description: "2025 Aggie 100 Honoree delivering commercial construction, emergency restoration, and facilities maintenance across the southern U.S. with expert craftsmanship.",
    tags: ["Restoration", "Construction", "Emergency"],
    metrics: [
      { value: "24/7", label: "Response" },
      { value: "100+", label: "Properties" },
      { value: "Aggie 100", label: "Honoree" },
    ],
  },
  {
    image: "/portfolio/apnclinic.png",
    category: "Pain Management",
    title: "APN Clinic",
    description: "Interventional pain management specialists treating traumatic brain injury and PTSD. Proud opiate-free facility specializing in auto accident and personal injury patients.",
    tags: ["Pain Management", "TBI", "PTSD Treatment"],
    metrics: [
      { value: "100%", label: "Opiate-Free" },
      { value: "Expert", label: "Care" },
      { value: "4.9/5", label: "Rating" },
    ],
  },
  {
    image: "/portfolio/abqmri.png",
    category: "Medical Imaging",
    title: "ABQ MRI",
    description: "Superior quality MRI and X-Ray center with cutting-edge technology, the most knowledgeable physicians and radiologists, delivering fast accurate diagnostic reports.",
    tags: ["MRI Imaging", "X-Ray", "Diagnostics"],
    metrics: [
      { value: "Fast", label: "Reports" },
      { value: "Advanced", label: "Tech" },
      { value: "5-Star", label: "Care" },
    ],
  },
  {
    image: "/portfolio/hitechlogic.png",
    category: "IT & Automation",
    title: "HiTech Logic",
    description: "Engineering competitive advantage through intelligent automation and AI-powered managed services delivering 50% cost savings and 75% faster incident resolution.",
    tags: ["AI Automation", "Managed IT", "Cloud Ops"],
    metrics: [
      { value: "85%", label: "Fewer Alerts" },
      { value: "4.5x", label: "Faster" },
      { value: "99.98%", label: "Uptime" },
    ],
  },
  {
    image: "/portfolio/svrlawfirm.png",
    category: "Legal Excellence",
    title: "SVR Law Firm",
    description: "Trusted Texas trial lawyers with proven expertise in personal injury and criminal defense, delivering superior legal strategies and a commitment to achieving the best results.",
    tags: ["Personal Injury", "Criminal Defense", "Trial Law"],
    metrics: [
      { value: "100+", label: "Cases Won" },
      { value: "Free", label: "Consultation" },
      { value: "5-Star", label: "Reviews" },
    ],
  },
  {
    image: "/portfolio/axiomio.png",
    category: "Enterprise Technology",
    title: "AxiomIO",
    description: "Enterprise technology solutions provider delivering scalable infrastructure, cloud migration, and digital transformation services for Fortune 500 companies.",
    tags: ["Enterprise", "Cloud Solutions", "Digital Transformation"],
    metrics: [
      { value: "500+", label: "Enterprise Clients" },
      { value: "99.99%", label: "Uptime" },
      { value: "24/7", label: "Support" },
    ],
  },
  {
    image: "/portfolio/allhoustonproperty.png",
    category: "Real Estate",
    title: "All Houston Property",
    description: "Comprehensive real estate platform featuring property listings, market analysis, and expert guidance for buying, selling, and investing in Houston properties.",
    tags: ["Real Estate", "Property Listings", "Market Analysis"],
    metrics: [
      { value: "1000+", label: "Properties" },
      { value: "500+", label: "Happy Clients" },
      { value: "15+", label: "Years Experience" },
    ],
  },
  {
    image: "/portfolio/hougenpros.png",
    category: "Property Management",
    title: "Hou Gen Pros",
    description: "Professional property management services delivering comprehensive solutions for residential and commercial properties across the Houston metropolitan area.",
    tags: ["Property Management", "Residential", "Commercial"],
    metrics: [
      { value: "300+", label: "Properties Managed" },
      { value: "98%", label: "Occupancy Rate" },
      { value: "4.9/5", label: "Rating" },
    ],
  },
];

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  const active = caseStudies[activeIndex];

  // Auto-rotate through portfolio items every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Vertical red accent lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">
        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/70 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-[400px] object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Project number overlay */}
              <div
                className="absolute bottom-4 left-5 font-serif text-7xl font-bold text-white/20 select-none"
              >
                0{activeIndex + 1}
              </div>

              {/* Navigation arrows overlaid on image */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                >
                  <ChevronLeft size={18} className="text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                >
                  <ChevronRight size={18} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-1.5 mt-5">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-red-500"
                      : "w-3 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-12 h-px bg-gradient-to-r from-red-500 to-red-300"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-[11px] tracking-[0.3em] uppercase text-red-500 font-semibold">
                Our Work
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-gray-900 leading-[1.15] tracking-tight mb-10">
              Transforming businesses
              <br />
              <span className="text-gray-400">across industries</span>
            </h2>

            {/* Active project details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-red-500 font-semibold">
                  {active.category}
                </span>
                <h3 className="font-serif text-2xl text-gray-900 mt-2 mb-3">
                  {active.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
                  {active.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1.5 bg-gray-50 text-gray-600 rounded-md border border-gray-100 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics row */}
                <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                  {active.metrics.map((metric, i) => (
                    <div key={metric.label}>
                      <div className="font-serif text-xl text-gray-900 font-semibold">{metric.value}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <motion.a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[13px] text-gray-900 hover:text-red-500 transition-colors font-semibold tracking-wide uppercase mt-8 group"
              whileHover={{ x: 4 }}
            >
              <span>View All Projects</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
