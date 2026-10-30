import { motion } from "framer-motion";
import { clientLogos } from "@/lib/case-studies";
import { Container } from "@/components/site/primitives";

// Some logo files carry extra whitespace; these get optical size corrections
const LOGO_SIZE: Record<string, string> = { ClearLedger: "h-16 sm:h-[4.5rem]" };
// The dark-mode versions are tightly cropped, so they size by shape instead
const DARK_SIZE: Record<string, string> = { HougenPros: "h-10 sm:h-11", ClearLedger: "h-9 sm:h-10" };

// Eight logos: 2 × 4 on phones, 4 × 2 on tablets, one row of 8 on desktop
export function Clients() {
  return (
    <div className="border-b border-border bg-background py-12">
      <Container>
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by organizations across healthcare, legal, finance, and construction
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 sm:gap-y-6 lg:grid-cols-8 lg:gap-x-8">
          {clientLogos.map((c, i) => (
            <motion.li
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.name}
                className="group flex h-16 items-center justify-center sm:h-20"
              >
                {/* Full-color logo in light mode; white-on-transparent version in dark mode */}
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className={`${LOGO_SIZE[c.name] ?? "h-8 sm:h-9"} w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 dark:hidden`}
                />
                <img
                  src={c.logo.replace("/clients/", "/clients/on-dark/").replace(/\.(jpg|png)$/, ".png")}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className={`${DARK_SIZE[c.name] ?? "h-7 sm:h-8"} hidden w-auto max-w-full object-contain opacity-80 transition duration-500 ease-out group-hover:scale-110 group-hover:opacity-100 dark:block`}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
