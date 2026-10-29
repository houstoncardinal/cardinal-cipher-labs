import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ImageReveal, RevealText } from "@/components/site/motion";

/** Shared scroll-reveal: subtle, fast, once. */
export const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
} as const;

export const revealDelay = (i: number) => ({ ...reveal, transition: { ...reveal.transition, delay: i * 0.06 } });

export function Eyebrow({ children, className, inverted }: { children: ReactNode; className?: string; inverted?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]",
        inverted ? "text-ink-muted" : "text-primary",
        className,
      )}
    >
      <motion.span
        aria-hidden
        className={cn("block h-px w-8 origin-left", inverted ? "bg-ink-muted/60" : "bg-primary")}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  action?: ReactNode;
  /** Title left, description (and action) right on large screens — saves vertical space */
  split?: boolean;
  className?: string;
}

/** Left-aligned by default — the corporate convention. */
export function SectionHeader({ eyebrow, title, description, align = "left", inverted, action, split, className }: SectionHeaderProps) {
  if (split) {
    return (
      <motion.div {...reveal} className={cn("mb-10 grid gap-6 lg:mb-14 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16", className)}>
        <div>
          {eyebrow && <Eyebrow inverted={inverted} className="mb-5">{eyebrow}</Eyebrow>}
          <h2 className={cn("font-display text-3xl leading-[1.1] md:text-4xl lg:text-5xl", inverted ? "text-ink-foreground" : "text-foreground")}>
            {typeof title === "string" ? <RevealText text={title} /> : title}
          </h2>
        </div>
        {(description || action) && (
          <div className="lg:pb-1">
            {description && (
              <p className={cn("text-lg leading-relaxed", inverted ? "text-ink-muted" : "text-muted-foreground")}>{description}</p>
            )}
            {action && <div className="mt-5">{action}</div>}
          </div>
        )}
      </motion.div>
    );
  }
  return (
    <motion.div
      {...reveal}
      className={cn(
        "mb-12 flex flex-col gap-6 lg:mb-16",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn(align === "left" && "max-w-3xl")}>
        {eyebrow && <Eyebrow inverted={inverted} className="mb-5">{eyebrow}</Eyebrow>}
        <h2 className={cn("font-display text-3xl leading-[1.1] md:text-4xl lg:text-5xl", inverted ? "text-ink-foreground" : "text-foreground")}>
          {typeof title === "string" ? <RevealText text={title} /> : title}
        </h2>
        {description && (
          <p className={cn("mt-5 text-lg leading-relaxed", inverted ? "text-ink-muted" : "text-muted-foreground")}>{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </motion.div>
  );
}

/** Screenshot presented inside a minimal browser chrome. */
export function BrowserFrame({ src, alt, className, eager }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-border bg-card shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)]", className)}>
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
      </div>
      <ImageReveal>
        {/* object-contain: the whole screenshot is always visible — never cropped or stretched */}
        <div className="aspect-[16/9] w-full bg-[#eef1f5]">
          <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className="block h-full w-full object-contain" />
        </div>
      </ImageReveal>
    </div>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-6 lg:px-10", className)}>{children}</div>;
}
