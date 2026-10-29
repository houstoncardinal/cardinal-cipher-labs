import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Fingerprint, MessagesSquare, ShieldCheck, Target, Users, Zap, type LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/site/primitives";
import { WaveField } from "@/components/site/three";

const EASE = [0.16, 1, 0.3, 1] as const;

const pillars: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Users, title: "One senior team", description: "Strategy, design, engineering, and marketing under one roof — no hand-offs between agencies, no junior bait-and-switch." },
  { icon: Zap, title: "Speed when it matters", description: "Most websites launch in 72 hours to 2 weeks, and urgent projects can be expedited without cutting corners." },
  { icon: ShieldCheck, title: "Security built in", description: "Encryption, hardened infrastructure, and HIPAA-ready architecture for organizations handling sensitive data." },
  { icon: Target, title: "Accountable to results", description: "Written scopes, clear timelines, and reporting tied to leads, revenue, and the metrics your leadership tracks." },
  { icon: Fingerprint, title: "Fully custom", description: "No templates. Every experience is designed around your brand, your customers, and your systems." },
  { icon: MessagesSquare, title: "Responsive support", description: "Hear back within hours, not days, from a team that already knows your business." },
];

function Pillar({ p, i }: { p: (typeof pillars)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (i % 3) * 0.08 + Math.floor(i / 3) * 0.12, ease: EASE }}
      className="group relative isolate w-[82%] shrink-0 snap-start overflow-hidden border border-white/10 bg-ink/80 p-7 backdrop-blur-sm sm:w-auto sm:border-0 lg:p-8"
    >
      {/* Soft white light that follows the pointer inside the panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden"
        style={{ background: "radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.07), transparent 65%)" }}
      />
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-white/60 via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: EASE }}
      />
      <div className="flex items-center justify-between">
        <span className="relative flex h-11 w-11 items-center justify-center border border-white/15 transition-colors duration-500 group-hover:border-white/40">
          <p.icon className="h-5 w-5 text-ink-foreground transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
        </span>
        <span className="font-display text-sm font-semibold tabular-nums text-white/30 transition-colors duration-500 group-hover:text-white/70">0{i + 1}</span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-ink-foreground">{p.title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{p.description}</p>
    </motion.div>
  );
}

export function Advantage() {
  return (
    <div className="relative isolate overflow-hidden bg-ink py-14 text-ink-foreground lg:py-24">
      <WaveField className="-z-10 top-auto h-[70%] opacity-70 [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
      {/* Hairline vignette at the top edge */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <Container>
        <SectionHeader
          split
          inverted
          eyebrow="Why Cardinal"
          title="The capability of a large firm, the focus of a dedicated team"
          description="Houston businesses and national organizations choose us because we combine enterprise-grade delivery with senior attention on every engagement."
          action={
            <Link to="/about" className="group inline-flex items-center gap-2 font-semibold text-ink-foreground">
              Meet the team <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          }
        />
        <div className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-px sm:overflow-visible sm:border sm:border-white/10 sm:bg-white/10 sm:px-0 sm:pb-0 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Pillar key={p.title} p={p} i={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
