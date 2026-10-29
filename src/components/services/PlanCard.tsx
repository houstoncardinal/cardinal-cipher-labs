import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceTier } from "@/lib/services-catalog";
import { contactHref } from "@/lib/contact-intent";

interface PlanCardProps {
  tier: ServiceTier;
  /** Service pages present engagement models without prices; the Pricing page shows them. */
  showPrice?: boolean;
  /** Carries the service and plan into the contact form */
  serviceSlug?: string;
}

export function PlanCard({ tier, showPrice = true, serviceSlug }: PlanCardProps) {
  const isQuote = !/\d/.test(tier.price);
  const cta = !showPrice ? "Discuss this engagement" : isQuote ? "Request a quote" : "Get started";

  return (
    <div
      className={cn(
        "relative flex h-full flex-col border bg-card p-8 transition-colors",
        tier.popular ? "border-foreground" : "border-border hover:border-foreground/40",
      )}
    >
      {tier.popular && <div className="absolute inset-x-0 top-0 h-1 bg-primary" />}

      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{tier.level}</span>
        {tier.popular && (
          <span className="border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">Most common</span>
        )}
      </div>
      <h3 className="mt-4 font-display text-2xl text-foreground">{tier.name}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{tier.bestFor}</p>

      {showPrice && (
        <div className="mt-6 flex items-baseline gap-2 border-t border-border pt-6">
          <span className="font-display text-4xl font-semibold text-foreground">{tier.price}</span>
          <span className="text-sm text-muted-foreground">{tier.billing}</span>
        </div>
      )}
      {tier.timeline && (
        <div className={cn("flex items-center gap-2 text-sm text-muted-foreground", showPrice ? "mt-2" : "mt-6 border-t border-border pt-6")}>
          <Clock className="h-4 w-4" />
          {tier.timeline}
        </div>
      )}

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[15px]">
            <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
            <span className="text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to={contactHref({ service: serviceSlug, plan: tier.name })}
        className={cn(
          "mt-8 inline-flex h-12 items-center justify-center gap-2 text-sm font-semibold transition-colors",
          tier.popular ? "bg-ink text-ink-foreground hover:bg-primary" : "border border-foreground text-foreground hover:bg-foreground hover:text-background",
        )}
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
