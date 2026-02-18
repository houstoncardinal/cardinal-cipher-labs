import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Shield, Clock, Palette, Headphones, Code2, Rocket, ChevronRight, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const advantages = [
  {
    icon: Rocket,
    title: "Rapid Delivery",
    description: "From 72 hours to 2 weeks or more—we deliver at a pace that matches your business needs. Rush prototyping available for urgent projects.",
    highlight: "72 hrs - 2+ weeks",
    link: "/rapid-delivery"
  },
  {
    icon: Zap,
    title: "Rush Prototyping",
    description: "Need something fast? Our rapid prototyping gets your MVP or prototype built in record time. Most web & app projects can be expedited.",
    highlight: "Rush Available",
    link: "/rush-prototyping"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSL, HIPAA compliance, and SOC 2 ready infrastructure. Your data stays protected always.",
    highlight: "100% Secure",
    link: "/enterprise-security"
  },
  {
    icon: Clock,
    title: "Same-Day Support",
    description: "Get responses within hours—not days. Your dedicated team is available when you need urgent assistance.",
    highlight: "< 4 Hours",
    link: "/same-day-support"
  },
  {
    icon: Palette,
    title: "Fully Custom Design",
    description: "Every pixel tailored to your brand. No templates—100% bespoke design that stands out from the competition.",
    highlight: "100% Custom",
    link: "/custom-design"
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "Built with React, Next.js, TypeScript. Future-proof architecture designed to scale as your business grows.",
    highlight: "99.9% Uptime",
    link: "/modern-tech-stack"
  }
];

const stats = [
  { value: "98%", label: "Client Retention" },
  { value: "500+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "25+", label: "Team Members" }
];

export function Advantage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="advantage" className="py-28 lg:py-40 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-red-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-red-500/6 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header - Million Dollar Quality */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          {/* Premium Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-50 to-red-100/50 rounded-full mb-10 border border-red-100"
          >
            <Sparkles className="w-5 h-5 text-red-600" />
            <span className="text-xs tracking-[0.25em] uppercase text-red-700 font-bold">
              The Cardinal Advantage
            </span>
            <Sparkles className="w-5 h-5 text-red-600" />
          </motion.div>
          
          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 max-w-5xl mx-auto mb-8 leading-[1.15]">
            Why Smart Businesses Choose Cardinal for{' '}
            <span className="relative">
              <span className="relative z-10">World-Class Results</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-red-200/30 -z-10 rounded-md" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12">
            We're not just another agency. We're your strategic partner in digital transformation. 
            Join 500+ businesses who've discovered the Cardinal difference.
          </p>

          {/* Trust Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advantage Cards - Premium Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group"
            >
              <Link to={advantage.link} className="block h-full cursor-pointer">
                <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white border border-gray-100 hover:border-red-200 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(220,38,38,0.12)]">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/30 group-hover:to-red-100/20 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-red-100/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-red-100/50">
                      <advantage.icon className="w-8 h-8 text-red-600" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-serif text-2xl lg:text-[1.4rem] text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed mb-6 text-[15px]">
                      {advantage.description}
                    </p>
                    
                    {/* Highlight Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 group-hover:border-red-200 group-hover:bg-red-50/50 transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-red-700">{advantage.highlight}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - World Class Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative rounded-[2.5rem] overflow-hidden">
            {/* Light gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100/50 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-red-100/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-200/10 to-transparent rounded-full blur-3xl" />
            
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-transparent bg-gradient-to-r from-red-200/50 via-red-300/30 to-red-200/50 p-[1px]">
              <div className="absolute inset-[1px] rounded-[2.5rem] bg-white/80 backdrop-blur-sm" />
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
              <motion.div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(220,38,38,0.1) 50%, transparent 100%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 0%', '100% 0%', '0% 0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            <div className="relative z-10 p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left - Content */}
                <div className="text-center lg:text-left">
                  {/* Animated badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-red-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs uppercase tracking-wider text-red-700 font-bold">Let's Build Something Great</span>
                  </motion.div>
                  
                  <h3 className="font-serif text-3xl lg:text-4xl text-gray-900 mb-4">
                    Ready to Transform Your Business?
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Get a free consultation and custom quote. No commitment required.
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-3 mb-8">
                    {[
                      { text: 'Free 30-minute strategy call', icon: CheckCircle2 },
                      { text: 'Custom project roadmap', icon: CheckCircle2 },
                      { text: 'No obligation quote', icon: CheckCircle2 },
                      { text: 'Rush delivery available', icon: Zap },
                    ].map((item, i) => (
                      <motion.li 
                        key={item.text}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <item.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right - CTAs */}
                <div className="flex flex-col gap-4">
                  {/* Primary CTA - Animated */}
                  <motion.a 
                    href="/contact" 
                    className="group relative overflow-hidden bg-gray-900 text-white font-bold tracking-wide px-8 py-5 rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                      <span>Start Your Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>

                  {/* Secondary CTA - Animated */}
                  <motion.a 
                    href="/portfolio" 
                    className="group relative overflow-hidden bg-white text-gray-900 font-semibold tracking-wide px-8 py-5 rounded-2xl border-2 border-gray-200 hover:border-red-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                      <span>View Our Work</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>

                  {/* Phone CTA - Animated */}
                  <motion.a 
                    href="tel:281-901-7016" 
                    className="group flex items-center justify-center gap-3 text-gray-600 hover:text-red-600 transition-colors py-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-base font-medium">Or call us: <span className="font-bold">(281) 901-7016</span></span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
