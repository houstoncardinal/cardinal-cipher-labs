import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LuxuryCardProps {
  elevation?: 1 | 2 | 3 | 4 | 5;
  borderStyle?: "none" | "metallic-gold" | "metallic-crimson" | "metallic-platinum";
  glassStrength?: "light" | "medium" | "strong";
  hoverLift?: boolean;
  cornerDecorations?: boolean;
  rippleOnClick?: boolean;
  className?: string;
  children: React.ReactNode;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function LuxuryCard({
  elevation = 2,
  borderStyle = "none",
  glassStrength = "medium",
  hoverLift = false,
  cornerDecorations = false,
  rippleOnClick = false,
  className = "",
  children,
  onMouseMove,
  onClick,
}: LuxuryCardProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdRef = useRef(0);

  // Handle click ripple effect
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rippleOnClick) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = {
        x,
        y,
        id: rippleIdRef.current++,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    }
    
    onClick?.(e);
  };

  // Mouse tracking for card-enterprise effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);

    onMouseMove?.(e);
  };

  // Build class names
  const shadowClass = `shadow-executive-${elevation}`;

  const glassClass =
    glassStrength === "light"
      ? "backdrop-blur-sm bg-card/30"
      : glassStrength === "strong"
      ? "glass-strong"
      : "glass";

  const borderClass = borderStyle !== "none" ? borderStyle : "border border-border/50";

  const hoverClass = hoverLift ? "animate-hover-lift" : "";

  return (
    <motion.div
      className={cn(
        "card-enterprise futuristic-card relative overflow-hidden",
        shadowClass,
        glassClass,
        borderClass,
        className
      )}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      whileHover={hoverLift ? {} : {}}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* HYPER FUTURISTIC EFFECTS */}

      {/* Holographic Overlay */}
      <div className="holographic-overlay" />

      {/* Scanline Effect */}
      <div className="scanline-effect" />

      {/* Edge Glow */}
      <div className="edge-glow" />

      {/* Tech Grid */}
      <div className="tech-grid" />

      {/* Particle Dots */}
      <div className="particle-dots" />

      {/* Corner Accents */}
      <div className="corner-accents" />

      {/* Digital Data Streams */}
      <div className="data-stream" style={{ left: '20%' }} />
      <div className="data-stream" style={{ left: '50%', animationDelay: '0.4s' }} />
      <div className="data-stream" style={{ left: '80%', animationDelay: '0.8s' }} />

      {/* Neon Pulse Border */}
      <div className="neon-pulse" />

      {/* Original Corner Decorations (Enhanced) */}
      {cornerDecorations && (
        <>
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 transition-all duration-500 group-hover:border-primary group-hover:w-6 group-hover:h-6" />
          {/* Top Right */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 transition-all duration-500 group-hover:border-primary group-hover:w-6 group-hover:h-6" />
          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 transition-all duration-500 group-hover:border-primary group-hover:w-6 group-hover:h-6" />
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 transition-all duration-500 group-hover:border-primary group-hover:w-6 group-hover:h-6" />
        </>
      )}

      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full bg-primary/20 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{ width: 400, height: 400, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
