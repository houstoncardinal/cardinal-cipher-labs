import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Briefcase, Check, Code2, Compass, Handshake, Mail, Palette, ShieldCheck, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Container } from "@/components/site/primitives";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators";
import { CardinalMark } from "@/components/site/CardinalMark";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE },
} as const;

/** Current openings. Add a role here (and JobPosting markup with a valid date) when hiring. */
const openings: { title: string; team: string; location: string; type: string; summary: string }[] = [];

/** Disciplines we typically hire for — shown so candidates know where they'd fit. */
const teams = [
  { icon: Code2, name: "Engineering", detail: "Web platforms, apps & integrations" },
  { icon: Palette, name: "Design", detail: "Brand, UX & interface design" },
  { icon: BarChart3, name: "Marketing & SEO", detail: "Search, content & paid media" },
  { icon: Briefcase, name: "Delivery", detail: "Project & client leadership" },
];

/** The same values published on the About page. */
const values = [
  { icon: ShieldCheck, title: "Integrity first", description: "We recommend what's right for each client — even when it's the smaller engagement." },
  { icon: Compass, title: "Precision", description: "Every solution is engineered for the specific problem, not adapted from a template." },
  { icon: Sparkles, title: "Pragmatic innovation", description: "We adopt new technology when it creates a real advantage, not for its own sake." },
  { icon: Handshake, title: "Partnership", description: "We act as an extension of our clients' teams and measure our success by theirs." },
];

const talentMail = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Talent network — Cardinal Consulting")}&body=${encodeURIComponent(
  "Hi Cardinal team,\n\nRole or discipline I'm interested in:\nPortfolio / LinkedIn / GitHub:\nLocation:\n\nA little about my work:\n",
)}`;

export default function Careers() {
  const url = `${siteConfig.url}/careers`;
  const schemas = [
    generateWebPageSchema({
      name: "Careers at Cardinal Consulting",
      description: "Careers at Cardinal Consulting, a Houston web, app, and digital growth firm. No open roles right now — join the talent network.",
      url,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Careers", url },
    ]),
    // No JobPosting markup while there are no openings (Google requires postings to be current).
  ];

  return (
    <>
      <SEOHead
        title="Careers at a Houston Digital Agency"
        description="Careers at Cardinal Consulting, a Houston web design, app development and digital growth firm. No open roles right now — join our talent network."
        url={url}
        schemas={schemas}
        keywords={["careers at cardinal consulting", "Houston web design jobs", "Houston digital agency careers"]}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* ── HERO ───────────────────────────────────────────────────── */}
          <section className="relative overflow-hidden border-b border-gray-100 pb-12 pt-24 lg:pb-16 lg:pt-28">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-brand-50/70 blur-3xl" />
              <div className="absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full bg-brand-50/40 blur-3xl" />
            </div>
            <Container className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
              <div>
                <nav aria-label="Breadcrumb" className="mb-5 text-sm text-gray-500">
                  <Link to="/" className="hover:text-gray-900">Home</Link> <span className="mx-1.5">/</span> <span className="text-gray-900">Careers</span>
                </nav>
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 py-1.5 pl-1.5 pr-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Briefcase className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-gray-900">Careers · {openings.length} open roles</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.7, ease: EASE }} className="font-display text-4xl leading-[1.08] text-gray-900 sm:text-5xl xl:text-6xl">
                  Build what's next <span className="text-brand-600">with Cardinal</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.7, ease: EASE }} className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
                  We're a Houston team designing, building, and growing websites, apps, and digital systems for organizations in healthcare, legal, finance, construction, and technology.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.7, ease: EASE }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={talentMail} className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 font-semibold text-white transition-colors hover:bg-brand-700">
                    Join the talent network <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a href="#openings" className="inline-flex h-12 items-center justify-center rounded-full bg-gray-900 px-7 font-semibold text-white transition-colors hover:bg-gray-800">
                    View open positions
                  </a>
                </motion.div>
              </div>

              {/* Hiring status */}
              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_40px_80px_-40px_rgba(17,24,39,0.35)]"
              >
                <div className="flex items-end justify-between gap-4 border-b border-gray-100 bg-brand-50/60 px-6 py-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700">Open roles</p>
                    <p className="mt-1 text-sm text-gray-600">Not hiring at the moment</p>
                  </div>
                  <p className="font-display text-5xl font-semibold leading-none tracking-tight text-gray-900">{openings.length}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Teams we hire for</p>
                  <ul className="mt-3 divide-y divide-gray-100">
                    {teams.map((t) => (
                      <li key={t.name} className="flex items-center gap-3 py-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                          <t.icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold text-gray-900">{t.name}</span>
                          <span className="block truncate text-xs text-gray-500">{t.detail}</span>
                        </span>
                        <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] font-medium text-gray-500">No openings</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.aside>
            </Container>
          </section>

          {/* ── OPEN POSITIONS ─────────────────────────────────────────── */}
          <section id="openings" className="relative isolate scroll-mt-24 overflow-hidden py-14 lg:py-20">
            <CardinalMark />
            <Container>
              <motion.div {...fadeUp} className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Open positions</p>
                  <h2 className="mt-3 font-display text-3xl leading-[1.12] text-gray-900 md:text-4xl">Current openings</h2>
                </div>
                <p className="text-sm text-gray-500">{openings.length} roles · updated as we hire</p>
              </motion.div>

              {openings.length === 0 ? (
                <motion.div {...fadeUp} className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-gray-200 bg-gray-50/70 px-6 py-14 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500">
                    <Briefcase className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-gray-900">There are no open roles at the moment</h3>
                  <p className="mt-3 max-w-lg text-gray-600">
                    Every new role is posted here first. Share your work with us and we'll reach out when there's a fit.
                  </p>
                  <a href={talentMail} className="mt-7 inline-flex h-11 items-center gap-2 rounded-full border border-gray-900 px-6 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                    <Mail className="h-4 w-4" /> Send us your work
                  </a>
                </motion.div>
              ) : (
                <ul className="mt-8 divide-y divide-gray-100 border-y border-gray-100">
                  {openings.map((o) => (
                    <li key={o.title} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-gray-900">{o.title}</h3>
                        <p className="text-sm text-gray-500">{o.team} · {o.location} · {o.type}</p>
                      </div>
                      <a href={talentMail} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">Apply <ArrowRight className="h-4 w-4" /></a>
                    </li>
                  ))}
                </ul>
              )}
            </Container>
          </section>

          {/* ── HOW WE WORK ────────────────────────────────────────────── */}
          <section className="border-t border-gray-100 bg-gray-50/70 py-14 lg:py-20">
            <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <motion.div {...fadeUp} className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">How we work</p>
                <h2 className="mt-3 font-display text-3xl leading-[1.12] text-gray-900 md:text-4xl">The standards behind every project</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">The values that guide our client work — and the people we look for.</p>
              </motion.div>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.07 }}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-36px_rgba(17,24,39,0.4)]"
                  >
                    <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-600 transition-transform duration-500 group-hover:scale-x-100" />
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-gray-900">{v.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{v.description}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* ── TALENT NETWORK CTA ─────────────────────────────────────── */}
          <section className="py-14 lg:py-20">
            <Container>
              <motion.div {...fadeUp} className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-12 text-center sm:px-12 lg:py-16">
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
                <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand-500" />
                <div className="relative">
                  <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight text-white md:text-4xl lg:text-5xl">Be first to hear when we're hiring</h2>
                  <p className="mx-auto mt-4 max-w-2xl text-white/60">Send your portfolio, LinkedIn, or GitHub and the kind of work you love doing. We keep every note and reach out when a role fits.</p>
                  <ul className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
                    {["Engineering", "Design", "Marketing & SEO", "Project delivery"].map((t) => (
                      <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-300" /> {t}</li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a href={talentMail} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 font-semibold text-white transition-colors hover:bg-brand-600">
                      <Mail className="h-4 w-4" /> Join the talent network
                    </a>
                    <Link to="/about" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-7 font-semibold text-white transition-colors hover:bg-white/10">
                      About Cardinal
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Container>
          </section>
        </main>
        <Footer showCta={false} />
      </div>
    </>
  );
}
