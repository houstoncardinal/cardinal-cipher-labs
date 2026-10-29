import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Check, ChevronDown, Clock, ClipboardList, Hammer, Mail, MapPin, MessageSquare, Phone, Rocket, ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ContactForm } from "@/components/site/ContactForm";
import { generateServicePageSchemas } from "@/lib/service-schema-generators";
import { siteConfig } from "@/lib/seo-config";
import { getService, type ServiceDefinition } from "@/lib/services-catalog";
import { getCaseStudies } from "@/lib/case-studies";
import { contactHref, rememberService } from "@/lib/contact-intent";
import { cn } from "@/lib/utils";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } as const;

function buildSchemas(service: ServiceDefinition) {
  const serviceUrl = `${siteConfig.url}${service.path}`;
  return generateServicePageSchemas({
    serviceName: service.seo.serviceName,
    serviceDescription: service.seo.serviceDescription,
    serviceType: service.seo.serviceType,
    serviceUrl,
    category: service.seo.category,
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
      { name: service.name, url: serviceUrl },
    ],
    faqs: service.faqs,
    offers: service.tiers.map((t) => ({ name: t.name, price: t.price, description: t.bestFor, features: t.features })),
    process: service.process.map((p) => ({ name: p.title, description: p.description })),
    duration: service.seo.duration,
    keywords: service.seo.keywords,
    features: service.included.map((f) => ({ title: f.title, description: f.description })),
  });
}

const STEP_ICONS = [MessageSquare, ClipboardList, Hammer, Rocket];
const STEP_OUTPUTS = ["Free · no obligation", "Written scope, timeline & price", "Reviews at every milestone", "Launch, reporting & support"];

/** "SEO" stays uppercase when a service name is used mid-sentence. */
const inSentence = (name: string) => (name.startsWith("SEO") || name.startsWith("UX") || name.startsWith("AI") ? name : name.toLowerCase());

function Headline({ service }: { service: ServiceDefinition }) {
  const { headline, accent } = service;
  if (!accent || !headline.includes(accent)) return <>{headline}</>;
  const [before, after] = headline.split(accent);
  return (
    <>
      {before}
      <span className="text-orange-600">{accent}</span>
      {after}
    </>
  );
}

const SectionTitle = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) => (
  <motion.div {...fadeUp} className="mx-auto mb-14 max-w-3xl text-center">
    <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-orange-600">{eyebrow}</span>
    <h2 className="font-serif text-3xl leading-tight text-gray-900 lg:text-5xl">{title}</h2>
    {intro && <p className="mt-4 text-lg text-gray-500">{intro}</p>}
  </motion.div>
);

/**
 * Service pages share one structure, customized by services-catalog.ts:
 * Hero + plans at a glance → Facts → Fit → What's included → Visual process → Plans
 * → Research → Work → FAQ → Start a conversation (inline form) → Related.
 */
export function ServicePageLayout({ service }: { service: ServiceDefinition }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = service.related.map(getService);
  const work = getCaseStudies(service.caseStudies ?? []);
  useEffect(() => rememberService(service.slug), [service.slug]);

  const monthly = service.startingBilling === "per month";
  const priced = /\d/.test(service.startingAt);
  const timeline = service.tiers.find((t) => t.popular)?.timeline ?? service.tiers.find((t) => t.timeline)?.timeline;
  const facts = [
    { value: priced ? `${service.startingAt}${monthly ? "/mo" : ""}` : "Custom", label: priced ? "Starting price" : "Quoted after a free consultation" },
    {
      value: timeline ? timeline.replace(/^Typically /, "") : monthly ? "Monthly" : "Scoped",
      label: timeline ? "Typical timeline" : monthly ? "Month-to-month, no long contract" : "Timeline set in your proposal",
    },
    { value: "3 plans", label: "Foundation · Growth · Enterprise" },
    { value: "24 hrs", label: "Reply to every inquiry" },
  ];

  return (
    <>
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
        schemas={buildSchemas(service)}
        url={`${siteConfig.url}${service.path}`}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* HERO */}
          <section className="relative overflow-hidden pb-14 pt-28 lg:pb-20 lg:pt-32">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-orange-50/60 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-50/40 blur-3xl" />
            </div>
            <div className="container relative mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.35fr_1fr] lg:px-12">
              <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2">
                  <service.icon className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-semibold text-gray-900">{service.name} · Free consultation</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 font-serif text-4xl leading-[1.1] text-gray-900 sm:text-5xl lg:text-6xl">
                  <Headline service={service} />
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="service-description mb-10 max-w-2xl text-lg text-gray-500 lg:text-xl">
                  {service.summary}
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10 flex flex-wrap gap-4">
                  <a href="#start" className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-orange-700">
                    Start a conversation <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#plans" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-gray-800">
                    See plans &amp; pricing
                  </a>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
                  {["Free consultation", "Written scope & price before work starts", "Reply within 24 hours"].map((b) => (
                    <span key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />{b}</span>
                  ))}
                </motion.div>
              </div>

              {/* Plans at a glance */}
              <motion.a
                href="#plans"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="block rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_30px_60px_-30px_rgba(17,24,39,0.35)] transition-transform hover:-translate-y-1 lg:p-8"
                aria-label="Plans at a glance — jump to plans and pricing"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Plans at a glance</p>
                <ul className="mt-4 divide-y divide-gray-100">
                  {service.tiers.map((t) => (
                    <li key={t.name} className="flex items-center justify-between gap-4 py-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">{t.level}</span>
                          {t.popular && <span className="rounded-full bg-orange-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white">Popular</span>}
                        </div>
                        <p className="mt-1 font-semibold text-gray-900">{t.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-serif text-2xl font-bold text-gray-900">{t.price}</p>
                        <p className="text-xs text-gray-500">{t.billing}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600">Compare plans <ArrowRight className="h-4 w-4" /></span>
              </motion.a>
            </div>
          </section>

          {/* FACTS */}
          <section className="bg-gray-900 py-12">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                {facts.map((f, i) => (
                  <motion.div key={f.label} {...fadeUp} transition={{ delay: i * 0.08 }}>
                    <div className="mb-2 font-serif text-3xl font-bold text-white lg:text-4xl">{f.value}</div>
                    <div className="text-sm text-gray-400">{f.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FIT */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionTitle eyebrow="Is this right for you?" title={`${service.name} is a great fit if…`} />
              <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                {service.whoItsFor.map((c, i) => (
                  <motion.div key={c} {...fadeUp} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                    <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 font-bold text-white">{i + 1}</span>
                    <p className="text-lg leading-snug text-gray-800">{c}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* INCLUDED */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionTitle eyebrow="What's included" title="Everything you get" intro="Delivered by our team and tailored to your goals." />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.included.map((f, i) => (
                  <motion.div key={f.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-orange-100 hover:shadow-lg">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                      <f.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{f.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* VISUAL PROCESS */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionTitle eyebrow="How it works" title="Your path from first call to results" intro="Four clear steps. You always know what happens next — and what you receive at each stage." />
              <ol className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-4 lg:gap-6">
                <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 lg:block" />
                <div aria-hidden className="absolute bottom-8 left-8 top-8 w-0.5 bg-orange-200 lg:hidden" />
                {service.process.map((step, i) => {
                  const Icon = STEP_ICONS[i] ?? Rocket;
                  return (
                    <motion.li key={step.title} {...fadeUp} transition={{ delay: i * 0.12 }} className="relative flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                      <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-orange-600 text-white shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="lg:mt-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Step {i + 1}</p>
                        <h3 className="mt-2 font-serif text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.description}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          <Check className="h-3.5 w-3.5" /> {STEP_OUTPUTS[i]}
                        </span>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          </section>

          {/* PLANS */}
          <section id="plans" className="scroll-mt-24 bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionTitle eyebrow="Plans & pricing" title="Choose the plan that fits today" intro="Start where it makes sense and upgrade any time. Your final scope and price are confirmed in writing before work begins." />
              <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
                {service.tiers.map((t, i) => (
                  <motion.div
                    key={t.name}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "relative flex flex-col rounded-2xl bg-white p-8",
                      t.popular ? "border-2 border-orange-600 shadow-[0_30px_60px_-30px_rgba(234,88,12,0.45)] lg:-my-4 lg:py-12" : "border border-gray-100",
                    )}
                  >
                    {t.popular && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">Most popular</span>
                    )}
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">{t.level}</span>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-gray-900">{t.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{t.bestFor}</p>
                    <div className="mt-6 flex items-baseline gap-2 border-t border-gray-100 pt-6">
                      <span className="font-serif text-4xl font-bold text-gray-900">{t.price}</span>
                      <span className="text-sm text-gray-500">{t.billing}</span>
                    </div>
                    {t.timeline && <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500"><Clock className="h-4 w-4" /> {t.timeline}</p>}
                    <ul className="mt-6 flex-1 space-y-3">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={contactHref({ service: service.slug, plan: t.name, from: service.path })}
                      className={cn(
                        "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center font-semibold transition-colors",
                        t.popular ? "bg-orange-600 text-white hover:bg-orange-700" : "border border-gray-200 text-gray-900 hover:border-gray-900",
                      )}
                    >
                      {/\d/.test(t.price) ? `Start with ${t.name}` : `Request a ${t.name} quote`} <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <p className="mt-12 text-center text-sm text-gray-500">
                Not sure which plan is right? <a href="#start" className="font-semibold text-orange-600 hover:text-orange-700">Tell us about your goals</a> and we'll recommend one ·{" "}
                <Link to="/pricing" className="font-semibold text-gray-900 underline underline-offset-4">Compare all services</Link>
              </p>
            </div>
          </section>

          {/* RESEARCH */}
          {service.research && service.research.length > 0 && (
            <section className="bg-white py-16">
              <div className="container mx-auto px-6 lg:px-12">
                <SectionTitle eyebrow="What the research says" title={`Why ${inSentence(service.name)} matters`} />
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                  {service.research.map((r, i) => (
                    <motion.figure key={r.label} {...fadeUp} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                      <div className="font-serif text-5xl font-bold text-orange-600">{r.value}</div>
                      <p className="mt-4 text-gray-700">{r.label}</p>
                      <figcaption className="mt-5 border-t border-gray-200 pt-4 text-xs text-gray-500">
                        Source:{" "}
                        {r.url ? (
                          <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-orange-600">{r.source}</a>
                        ) : (
                          r.source
                        )}
                        , {r.year}
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* WORK */}
          {work.length > 0 && (
            <section className="bg-gray-50 py-16">
              <div className="container mx-auto px-6 lg:px-12">
                <SectionTitle eyebrow="Selected work" title="Built by our team" />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {work.map((c, i) => (
                    <motion.div key={c.slug} {...fadeUp} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                      <div className="aspect-[16/9] w-full bg-[#eef1f5]">
                        <img src={c.image} alt={`${c.client} website`} loading="lazy" className="block h-full w-full object-contain" />
                      </div>
                      <div className="p-6">
                        <span className="mb-3 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">{c.industry}</span>
                        <h3 className="font-serif text-xl font-bold text-gray-900">{c.client}</h3>
                        <p className="mt-2 text-sm text-gray-500">{c.summary}</p>
                        {c.detail && (
                          <Link to={`/portfolio/${c.slug}`} data-cursor="View case study" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700">
                            Read the case study <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionTitle eyebrow="FAQ" title="Questions, answered" />
              <div className="mx-auto max-w-3xl space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={faq.question} className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                    <button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left">
                      <span className="pr-4 font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown className={cn("h-5 w-5 flex-shrink-0 text-gray-400 transition-transform", openFaq === i && "rotate-180")} />
                    </button>
                    <div className={openFaq === i ? "px-6 pb-6" : "hidden"}>
                      <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* START A CONVERSATION */}
          <section id="start" className="scroll-mt-20 bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-40px_rgba(17,24,39,0.35)] lg:grid-cols-[1fr_1.35fr]">
                <div className="relative overflow-hidden bg-gray-900 p-8 text-white lg:p-12">
                  <div aria-hidden className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 20%, rgba(234,88,12,0.45), transparent 55%)" }} />
                  <div className="relative">
                    <span className="text-sm font-semibold uppercase tracking-wider text-orange-400">Start a conversation</span>
                    <h2 className="mt-3 font-serif text-3xl leading-tight lg:text-4xl">Let's talk about your {inSentence(service.name)} goals</h2>
                    <p className="mt-4 text-gray-400">It takes about a minute. Here's what happens next:</p>
                    <ol className="mt-8 space-y-5">
                      {["We reply within 24 hours to set up a free consultation", "We learn your goals and recommend the right plan", "You receive a written scope, timeline, and price"].map((s, i) => (
                        <li key={s} className="flex gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold">{i + 1}</span>
                          <span className="pt-1 text-gray-200">{s}</span>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-sm text-gray-300">
                      <a href="tel:+12819017016" className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 text-orange-400" /> (281) 901-7016</a>
                      <a href="mailto:Hunain@visitcardinal.com" className="flex items-center gap-3 break-all hover:text-white"><Mail className="h-4 w-4 shrink-0 text-orange-400" /> Hunain@visitcardinal.com</a>
                      <p className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-orange-400" /> 2100 West Loop S Fwy, Houston, TX</p>
                      <p className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 shrink-0 text-orange-400" /> No obligation · Your information stays private</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12">
                  <ContactForm formName="service-inquiry" defaultService={service.slug} />
                </div>
              </div>
            </div>
          </section>

          {/* RELATED */}
          <section className="bg-white py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionTitle eyebrow="Keep exploring" title="Services that work well together" />
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((s, i) => (
                  <motion.div key={s.slug} {...fadeUp} transition={{ delay: i * 0.1 }}>
                    <Link to={s.path} className="group block h-full rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-orange-100 hover:bg-white hover:shadow-lg">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50"><s.icon className="h-5 w-5 text-orange-600" /></div>
                      <h3 className="mb-2 font-serif text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">{s.name}</h3>
                      <p className="text-sm text-gray-500">{s.summary}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              {service.localLinks.length > 0 && (
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  {service.localLinks.map((l) => (
                    <Link key={l.href} to={l.href} className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-orange-300 hover:text-orange-600">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer showCta={false} />
      </div>
    </>
  );
}
