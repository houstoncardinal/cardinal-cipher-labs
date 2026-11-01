import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Car, Cpu, Crosshair, Globe, MousePointerClick, Paintbrush, Sparkles, Star, type LucideIcon } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Container, Eyebrow, reveal } from "@/components/site/primitives";
import { RevealText } from "@/components/site/motion";
import { Fireflies } from "@/components/site/Fireflies";
import { FounderPortrait } from "@/components/site/FounderPortrait";
import { siteConfig } from "@/lib/seo-config";
import { chapters, difference, founder, FOUNDER_PATH, type Chapter } from "@/lib/founder-story";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const ICONS: Record<Chapter["motif"], LucideIcon> = {
  dream: Star,
  fireflies: Sparkles,
  road: Car,
  web: Globe,
  game: Crosshair,
  build: Cpu,
  paint: Paintbrush,
  click: MousePointerClick,
};

export default function FounderStory() {
  const url = `${siteConfig.url}${FOUNDER_PATH}`;
  const timeline = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: timeline, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}#person-hunain-qureshi`,
    name: founder.name,
    url,
    jobTitle: "Founder & CEO",
    description: founder.shortBio,
    worksFor: { "@id": `${siteConfig.url}#organization` },
    homeLocation: { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
    knowsAbout: ["Web design", "Web development", "3D web graphics", "Search engine optimization", "Graphic design", "Video game development", "Competitive gaming"],
    ...(founder.photo ? { image: `${siteConfig.url}${founder.photo}` } : {}),
  };
  const schemas = [
    { "@context": "https://schema.org", "@type": "ProfilePage", "@id": `${url}#webpage`, url, name: `${founder.name}: Founder of Cardinal Consulting`, mainEntity: { "@id": person["@id"] }, about: { "@id": person["@id"] } },
    person,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
        { "@type": "ListItem", position: 3, name: founder.name, item: url },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Hunain Qureshi, Founder of Cardinal Consulting"
        description="From a closet bedroom in New York to pro Counter-Strike at 13 to founding a Houston web design firm: the story of Hunain Qureshi, founder of Cardinal Consulting."
        url={url}
        keywords={["Hunain Qureshi", "Hunain Qureshi Cardinal Consulting", "Cardinal Consulting founder", "Houston web designer", "Houston web design founder"]}
        schemas={schemas}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="ink-island relative isolate overflow-hidden bg-ink pt-[72px] text-ink-foreground">
            <Fireflies />
            <div aria-hidden className="absolute -right-40 top-1/3 -z-10 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(226,71,93,0.22),transparent_65%)]" />
            <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-24">
              <div>
                <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-muted">
                  <Link to="/" className="hover:text-ink-foreground">Home</Link>
                  <span className="mx-1.5">/</span>
                  <Link to="/about" className="hover:text-ink-foreground">About</Link>
                  <span className="mx-1.5">/</span>
                  <span className="text-ink-foreground">Founder's story</span>
                </nav>
                <Eyebrow inverted className="mb-6">Founder's story</Eyebrow>
                <h1 className="font-display text-5xl leading-[1.02] md:text-6xl xl:text-7xl">
                  <RevealText text="Hunain Qureshi" trigger="mount" />
                </h1>
                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: EASE }} className="mt-6 max-w-xl text-xl leading-relaxed text-ink-foreground/85 md:text-2xl">
                  {founder.tagline}
                </motion.p>
                <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
                  {founder.facts.map((f) => (
                    <div key={f.label} className="bg-ink p-4">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">{f.label}</dt>
                      <dd className="mt-1.5 text-sm font-medium leading-snug">{f.value}</dd>
                    </div>
                  ))}
                </motion.dl>
              </div>
              <FounderPortrait priority className="mx-auto w-full max-w-sm lg:max-w-none" />
            </Container>
          </section>

          {/* Story timeline */}
          <section className="py-16 lg:py-28" aria-label="Hunain's story">
            <Container>
              <motion.div {...reveal} className="mb-14 max-w-2xl lg:mb-20">
                <Eyebrow className="mb-5">In his words</Eyebrow>
                <h2 className="font-display text-3xl leading-tight text-foreground md:text-5xl">From a closet bedroom to Cardinal Consulting</h2>
              </motion.div>
              <ol ref={timeline} className="relative">
                {/* The line fills as you read */}
                <span aria-hidden className="absolute bottom-0 left-[19px] top-0 w-px bg-border lg:left-[239px]" />
                <motion.span aria-hidden style={{ scaleY: fill }} className="absolute bottom-0 left-[18.5px] top-0 w-0.5 origin-top bg-primary lg:left-[238.5px]" />
                {chapters.map((c, i) => (
                  <ChapterRow key={c.id} chapter={c} last={i === chapters.length - 1} />
                ))}
              </ol>
            </Container>
          </section>

          {/* Quote */}
          <section className="ink-island relative isolate overflow-hidden bg-ink py-20 text-ink-foreground lg:py-28">
            <Fireflies density={0.7} />
            <Container className="relative">
              <motion.figure {...reveal} className="mx-auto max-w-4xl text-center">
                <blockquote className="font-display text-3xl leading-[1.15] md:text-5xl">
                  “{founder.quote.split("Now")[0]}<span className="text-brand-400">Now{founder.quote.split("Now")[1]}</span>”
                </blockquote>
                <figcaption className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">{founder.name}</figcaption>
              </motion.figure>
            </Container>
          </section>

          {/* Why it matters for clients */}
          <section className="py-16 lg:py-24" aria-labelledby="difference">
            <Container>
              <motion.div {...reveal} className="max-w-2xl">
                <Eyebrow className="mb-5">Why Cardinal is different</Eyebrow>
                <h2 id="difference" className="font-display text-3xl leading-tight text-foreground md:text-5xl">What my story means for your project</h2>
              </motion.div>
              <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
                {difference.map((d, i) => (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                    className="group relative bg-background p-7 transition-colors hover:bg-secondary"
                  >
                    <span className="font-display text-sm font-semibold tabular-nums text-primary">0{i + 1}</span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{d.title}</h3>
                    <p className="mt-3 leading-relaxed text-text-secondary">{d.body}</p>
                    <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* CTA */}
          <section className="border-t border-border bg-secondary py-16 lg:py-20">
            <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">Work directly with Hunain</h2>
                <p className="mt-4 text-lg text-text-secondary">Tell us what you're building. You'll hear back within 24 hours, and your project gets the same obsession that started with fireflies and a dial-up modem.</p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link to="/contact" className="inline-flex h-12 items-center gap-2 bg-ink px-6 font-semibold text-ink-foreground transition-colors hover:bg-primary">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/portfolio" className="inline-flex h-12 items-center gap-2 border border-foreground px-6 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
                  See our work
                </Link>
              </div>
            </Container>
          </section>
        </main>
        <Footer showCta={false} />
      </div>
    </>
  );
}

function ChapterRow({ chapter, last }: { chapter: Chapter; last: boolean }) {
  const Icon = ICONS[chapter.motif];
  return (
    <li className={cn("relative grid gap-4 pl-14 lg:grid-cols-[200px_1fr] lg:gap-20 lg:pl-0", !last && "pb-16 lg:pb-24")}>
      <div className="lg:sticky lg:top-32 lg:self-start lg:text-right">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{chapter.marker}</p>
        <p className="mt-1 font-display text-lg font-semibold text-foreground">{chapter.place}</p>
      </div>
      {/* Node on the line: lights up like a firefly when the chapter arrives */}
      <motion.span
        aria-hidden
        initial={{ scale: 0.5, opacity: 0.4 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_0_6px_hsl(var(--background)),0_0_28px_rgba(226,71,93,0.45)] lg:left-[220px]"
      >
        <Icon className="h-4 w-4" />
      </motion.span>
      <motion.div {...reveal} className="max-w-2xl lg:pl-6">
        <h3 className="font-display text-2xl leading-tight text-foreground md:text-4xl">{chapter.title}</h3>
        {chapter.body.split("\n\n").map((p, i) => (
          <p key={i} className="mt-5 text-lg leading-[1.75] text-text-secondary">{p}</p>
        ))}
      </motion.div>
    </li>
  );
}
