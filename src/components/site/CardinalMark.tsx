import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Faint cardinal illustration resting in the bottom-right corner of a white section.
 * Use sparingly (about one per page). The parent needs `relative isolate overflow-hidden`;
 * the mark sits behind content and never intercepts clicks.
 */
export function CardinalMark({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      data-cardinal-mark
      className={cn(
        // The wrapper sets how visible it is: present but quiet, softer on phones and the dark theme
        "pointer-events-none absolute -bottom-8 right-2 -z-10 w-40 select-none opacity-[0.12]",
        "sm:w-56 sm:opacity-[0.14] lg:-bottom-12 lg:right-6 lg:w-[19rem]",
        "dark:opacity-[0.12]",
        className,
      )}
    >
      <motion.img
        src="/brand/cardinal-illustration.webp"
        alt=""
        loading="lazy"
        decoding="async"
        width={800}
        height={1046}
        className="block h-auto w-full"
        initial={{ opacity: 0, y: 28, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
