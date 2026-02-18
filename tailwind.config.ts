import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          elevated: "hsl(var(--surface-elevated))",
        },
        text: {
          secondary: "hsl(var(--text-secondary))",
          tertiary: "hsl(var(--text-tertiary))",
        },
        divider: "hsl(var(--divider))",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "line-expand": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "text-reveal-up": {
          "from": { opacity: "0", transform: "translateY(100%) scale(0.95)" },
          "to": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "text-reveal-slide": {
          "from": { opacity: "0", transform: "translateX(-50px) skewX(-10deg)" },
          "to": { opacity: "1", transform: "translateX(0) skewX(0)" },
        },
        "char-reveal": {
          "from": { opacity: "0", transform: "translateY(20px) rotate(5deg)" },
          "to": { opacity: "1", transform: "translateY(0) rotate(0)" },
        },
        "magnetic-pull": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
        "morph-blob": {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "scale(1) rotate(0deg)",
          },
          "25%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            transform: "scale(1.1) rotate(90deg)",
          },
          "50%": {
            borderRadius: "50% 60% 30% 60% / 30% 60% 70% 40%",
            transform: "scale(0.9) rotate(180deg)",
          },
          "75%": {
            borderRadius: "60% 40% 60% 40% / 70% 30% 50% 60%",
            transform: "scale(1.05) rotate(270deg)",
          },
        },
        "card-enter": {
          "from": {
            opacity: "0",
            transform: "translateY(60px) rotateX(15deg) scale(0.95)",
            filter: "blur(10px)",
          },
          "to": {
            opacity: "1",
            transform: "translateY(0) rotateX(0) scale(1)",
            filter: "blur(0)",
          },
        },
        "hover-lift": {
          "0%": { transform: "translateY(0) translateZ(0)" },
          "100%": { transform: "translateY(-8px) translateZ(20px)" },
        },
        "number-flip": {
          "0%": { transform: "rotateX(0deg)", opacity: "1" },
          "50%": { transform: "rotateX(90deg)", opacity: "0" },
          "100%": { transform: "rotateX(0deg)", opacity: "1" },
        },
        "ripple": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        "explosive-entrance": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3) rotate(-45deg) translateY(100px)",
            filter: "blur(20px)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.15) rotate(5deg) translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg) translateY(0)",
            filter: "blur(0)",
          },
        },
        "mega-bounce": {
          "0%": {
            opacity: "0",
            transform: "scale(0) translateY(-500px) rotate(180deg)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.3) translateY(0) rotate(-10deg)",
          },
          "65%": {
            transform: "scale(0.9) translateY(-20px) rotate(5deg)",
          },
          "80%": {
            transform: "scale(1.1) translateY(0) rotate(-3deg)",
          },
          "100%": {
            transform: "scale(1) translateY(0) rotate(0)",
          },
        },
        "spiral-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0) rotate(720deg) translateY(200px)",
            filter: "blur(15px)",
          },
          "70%": {
            opacity: "0.8",
            transform: "scale(1.1) rotate(-20deg) translateY(0)",
            filter: "blur(2px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg) translateY(0)",
            filter: "blur(0)",
          },
        },
        "zoom-blast": {
          "0%": {
            opacity: "0",
            transform: "scale(5) rotate(180deg)",
            filter: "blur(50px)",
          },
          "60%": {
            opacity: "1",
            transform: "scale(0.9) rotate(-10deg)",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
            filter: "blur(0)",
          },
        },
        "float-3d": {
          "0%, 100%": {
            transform: "translateY(0) rotateX(0deg) rotateY(0deg)",
          },
          "25%": {
            transform: "translateY(-20px) rotateX(5deg) rotateY(-3deg)",
          },
          "50%": {
            transform: "translateY(-30px) rotateX(0deg) rotateY(5deg)",
          },
          "75%": {
            transform: "translateY(-15px) rotateX(-3deg) rotateY(-2deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-in-left": "slide-in-left 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-in-right": "slide-in-right 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "line-expand": "line-expand 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "count-up": "count-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "border-flow": "border-flow 3s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "text-reveal-up": "text-reveal-up 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "text-reveal-slide": "text-reveal-slide 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "char-reveal": "char-reveal 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "magnetic-pull": "magnetic-pull 0.3s ease-out",
        "morph-blob": "morph-blob 20s ease-in-out infinite",
        "card-enter": "card-enter 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "hover-lift": "hover-lift 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "number-flip": "number-flip 0.6s ease-in-out",
        "ripple": "ripple 0.6s ease-out",
        "explosive-entrance": "explosive-entrance 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "mega-bounce": "mega-bounce 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "spiral-in": "spiral-in 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "zoom-blast": "zoom-blast 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "float-3d": "float-3d 6s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, hsl(var(--border) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.1) 1px, transparent 1px)",
        "metallic-gold": "linear-gradient(135deg, hsl(45 60% 60% / 0.3), hsl(45 80% 80% / 0.5), hsl(45 60% 60% / 0.3), hsl(45 40% 40% / 0.2))",
        "metallic-crimson": "linear-gradient(135deg, hsl(0 72% 30% / 0.3), hsl(0 72% 30% / 0.6), hsl(0 72% 30% / 0.8), hsl(0 72% 30% / 0.4))",
        "metallic-platinum": "linear-gradient(135deg, hsl(220 10% 40% / 0.3), hsl(220 10% 60% / 0.5), hsl(220 10% 80% / 0.3), hsl(220 10% 40% / 0.2))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
