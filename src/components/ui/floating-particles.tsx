import { motion } from "framer-motion";

interface FloatingParticlesProps {
  count?: number;
  speed?: "slow" | "medium" | "fast";
  size?: "small" | "medium" | "large";
}

export function FloatingParticles({
  count = 20,
  speed = "medium",
  size = "medium",
}: FloatingParticlesProps) {
  const speedMap = {
    slow: { min: 15, max: 25 },
    medium: { min: 10, max: 20 },
    fast: { min: 5, max: 15 },
  };

  const sizeMap = {
    small: { min: 2, max: 4 },
    medium: { min: 4, max: 8 },
    large: { min: 8, max: 16 },
  };

  const particles = Array.from({ length: count }, (_, i) => {
    const duration =
      speedMap[speed].min + Math.random() * (speedMap[speed].max - speedMap[speed].min);
    const particleSize =
      sizeMap[size].min + Math.random() * (sizeMap[size].max - sizeMap[size].min);
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const endY = startY - 50 - Math.random() * 50;
    const opacity = 0.1 + Math.random() * 0.4;
    const delay = Math.random() * 5;

    return {
      id: i,
      duration,
      particleSize,
      startX,
      startY,
      endY,
      opacity,
      delay,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.particleSize,
            height: particle.particleSize,
            left: `${particle.startX}%`,
            top: `${particle.startY}%`,
          }}
          animate={{
            y: [0, particle.endY],
            opacity: [0, particle.opacity, particle.opacity, 0],
            scale: [0, 1, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
