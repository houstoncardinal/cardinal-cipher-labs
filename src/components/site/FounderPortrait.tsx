import { motion } from "framer-motion";
import { Fireflies } from "@/components/site/Fireflies";
import { founder } from "@/lib/founder-story";
import { cn } from "@/lib/utils";

/** Hunain's portrait under drifting fireflies; a lit monogram stands in until a photo is added. */
export function FounderPortrait({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn("ink-island relative isolate aspect-[4/5] overflow-hidden border border-white/10 bg-ink", className)}
    >
      {founder.photo ? (
        <img src={founder.photo} alt={`${founder.name}, ${founder.role}`} loading={priority ? "eager" : "lazy"} decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute h-2/3 w-2/3 rounded-full bg-[radial-gradient(circle,rgba(255,214,120,0.18),transparent_65%)]" />
          <span className="relative font-display text-[clamp(5rem,14vw,9rem)] font-semibold tracking-tight text-white/90">
            H<span className="text-brand-400">Q</span>
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
      <Fireflies density={0.8} />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-display text-xl font-semibold text-white">{founder.name}</p>
        <p className="text-sm text-ink-muted">{founder.role}</p>
      </div>
    </motion.div>
  );
}
