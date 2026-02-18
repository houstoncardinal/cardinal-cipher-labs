import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Check, Star } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/BackgroundPaths";

const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ""));
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

// Word configurations with their matching subheadlines and prefixes
const wordConfigs = [
  { word: "Websites", prefix: "Build", tagline: "That Grow Your Business" },
  { word: "Applications", prefix: "Build", tagline: "That Scale Your Business" },
  { word: "Strategies", prefix: "Build", tagline: "That Drive Results" },
  { word: "Advertisements", prefix: "Build", tagline: "That Generate Leads" },
  { word: "Content", prefix: "Write", tagline: "That Reaches Your Target Market" },
  { word: "Branding", prefix: "Create", tagline: "That Builds Trust" },
];

function RotatingWord({ onIndexChange }: { onIndexChange?: (index: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % wordConfigs.length;
        onIndexChange?.(newIndex);
        return newIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [onIndexChange]);

  useEffect(() => {
    onIndexChange?.(0);
  }, [onIndexChange]);

  return (
    <span className="inline-block min-w-[200px] md:min-w-[280px] leading-[1.2]">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-red-600"
      >
        {wordConfigs[currentIndex].word}
      </motion.span>
    </span>
  );
}

function RotatingPrefix({ currentIndex }: { currentIndex: number }) {
  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {wordConfigs[currentIndex].prefix}
    </motion.span>
  );
}

function RotatingTagline({ currentIndex }: { currentIndex: number }) {
  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {wordConfigs[currentIndex].tagline}
    </motion.span>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background paths - behind everything */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaths />
      </div>

      {/* Dithering shader background */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<div className="absolute inset-0 bg-gray-100" />}>
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply">
            <Dithering
              colorBack="#00000000"
              colorFront="#DC2626"
              shape="warp"
              type="4x4"
              speed={isHovered ? 0.6 : 0.2}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>
      </div>

      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10 pt-44"
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.04)] mb-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="w-px h-3.5 bg-gray-200" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-500 font-semibold">
              A Top-Rated Digital Marketing Agency
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-3">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 leading-[1.2] tracking-tight">
              We <RotatingPrefix currentIndex={currentIndex} /> <RotatingWord onIndexChange={setCurrentIndex} />
            </h1>
          </div>

          <div className="overflow-hidden mb-5">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-gray-900">
              <RotatingTagline currentIndex={currentIndex} />
            </h2>
            {/* Red underline accent on second line */}
            <motion.div
              className="w-48 md:w-64 h-[3px] bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-full mx-auto mt-2"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="font-sans text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Custom web design, mobile apps, SEO, and digital marketing for businesses
            ready to dominate online. Based in Houston, serving clients nationwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <MagneticButton strength={30}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white text-[13px] font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 group"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>
            <MagneticButton strength={20}>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wider uppercase px-8 py-4 rounded-xl border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group"
              >
                <span>View Services</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-8 text-sm text-gray-500"
          >
            {["No obligation", "Free consultation", "100% custom"].map((text, i) => (
              <motion.div
                key={text}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              >
                <Check size={14} className="text-red-500" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Metrics bar — outside parallax container so it stays visible */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="container mx-auto px-6 lg:px-12 relative z-10 mt-12 pb-6"
      >
        <div className="max-w-5xl mx-auto pt-12 border-t border-gray-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500", suffix: "+", label: "Projects Completed" },
              { value: "72", suffix: "hrs", label: "Expedited Delivery" },
              { value: "24", suffix: "/7", label: "Support Available" },
              { value: "98", suffix: "%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl border border-gray-200/70 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500">
                  <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-2 tabular-nums">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-400 tracking-[0.15em] uppercase group-hover:text-red-500 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
