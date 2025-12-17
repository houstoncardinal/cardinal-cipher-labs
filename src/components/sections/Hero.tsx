import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { ArrowRight, Shield, Check } from "lucide-react";

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

function MorphingBlob({ delay = "0s", size = 400, x = 0, y = 0 }: { delay?: string; size?: number; x?: number; y?: number }) {
  return (
    <div
      className="absolute pointer-events-none animate-morph-blob"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: `radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)`,
        filter: "blur(80px)",
        animationDelay: delay,
      }}
    />
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Grid nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${(i % 4) * 33 + 10}%`,
            top: `${Math.floor(i / 4) * 40 + 20}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Premium background effects */}
      <GridBackground />
      <FloatingParticles count={30} speed="slow" size="medium" />
      <MorphingBlob delay="0s" size={600} x={20} y={20} />
      <MorphingBlob delay="7s" size={500} x={70} y={60} />
      <MorphingBlob delay="14s" size={550} x={80} y={10} />

      {/* Floating 3D Geometric Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none float-3d"
          style={{
            left: `${20 + i * 18}%`,
            top: `${30 + (i % 3) * 20}%`,
            width: 40 + i * 15,
            height: 40 + i * 15,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: i * 0.2 }}
        >
          <div
            className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 backdrop-blur-sm"
            style={{
              transform: `rotate(${i * 45}deg)`,
              borderRadius: i % 2 === 0 ? "30%" : "0%",
            }}
          />
        </motion.div>
      ))}
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0" />

      <motion.div 
        className="container mx-auto px-6 lg:px-12 relative z-10 pt-20"
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 glass sheen-metallic mb-10 float-3d"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield size={16} className="text-primary" />
            </motion.div>
            <span className="text-xs tracking-[0.25em] uppercase text-foreground/80">
              Premier Digital Agency
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-8">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.05] tracking-tight">
              <TextReveal
                text="Custom Websites & Apps"
                mode="words"
                animation="slide-up"
                delay={0.1}
                duration={0.8}
              />
            </h1>
          </div>

          <div className="overflow-hidden mb-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-primary leading-[1.05]">
              <TextReveal
                text="That Convert Visitors"
                mode="chars"
                animation="char-reveal"
                delay={0.8}
                duration={0.6}
              />
            </h2>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transform your business into a digital powerhouse with custom websites, 
            mobile applications, and AI-powered solutions that deliver measurable ROI.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <MagneticButton strength={30}>
              <Button variant="primary" size="lg" className="group relative overflow-hidden" asChild>
                <a href="#contact">
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton strength={20}>
              <Button variant="outline" size="lg" className="group glass" asChild>
                <a href="#services">
                  <span>View Services</span>
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            {["No obligation", "Free consultation", "100% custom"].map((text, i) => (
              <motion.div 
                key={text}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              >
                <Check size={14} className="text-primary" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics bar */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="mt-24 pt-12 border-t border-border/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500", suffix: "+", label: "Projects Completed" },
                { value: "72", suffix: "hrs", label: "Expedited Delivery" },
                { value: "24", suffix: "/7", label: "Support Available" },
                { value: "98", suffix: "%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                >
                  <LuxuryCard
                    elevation={2}
                    hoverLift={true}
                    borderStyle={index === 3 ? "metallic-crimson" : "none"}
                    className="p-6 text-center group ultra-hover-lift card-3d-flip"
                  >
                  <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2 tabular-nums group-hover:animate-number-flip">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground tracking-[0.15em] uppercase group-hover:text-primary transition-colors">
                    {stat.label}
                  </div>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
