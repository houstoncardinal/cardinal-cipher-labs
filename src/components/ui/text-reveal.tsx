import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  mode?: "words" | "chars";
  animation?: "slide-up" | "fade" | "char-reveal";
  delay?: number;
  duration?: number;
  className?: string;
}

export function TextReveal({
  text,
  mode = "words",
  animation = "slide-up",
  delay = 0,
  duration = 0.8,
  className = "",
}: TextRevealProps) {
  // Split text based on mode
  const parts = mode === "words" ? text.split(" ") : text.split("");

  // Animation variants based on animation type
  const getVariants = () => {
    switch (animation) {
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 20, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case "char-reveal":
        return {
          hidden: { opacity: 0, y: 20, rotate: 5 },
          visible: { opacity: 1, y: 0, rotate: 0 },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const variants = getVariants();
  const staggerDelay = mode === "chars" ? 0.02 : 0.08;

  return (
    <span className={`inline-block ${className}`}>
      {parts.map((part, index) => (
        <motion.span
          key={index}
          className={`inline-block ${mode === "words" ? "mr-[0.25em]" : ""}`}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          {part}
        </motion.span>
      ))}
    </span>
  );
}
