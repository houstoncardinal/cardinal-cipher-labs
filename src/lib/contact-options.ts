// Shared options for every contact form (the full form and the guided homepage form).
import type { ServiceDefinition } from "@/lib/services-catalog";

export const NEEDS: Record<string, string[]> = {
  "web-development": ["New website", "Website redesign", "Online store", "Customer portal or web app"],
  "mobile-apps": ["New app (MVP)", "Add features to an app", "Fix or take over an existing app"],
  "ai-automation": ["AI opportunity assessment", "AI assistant or chatbot", "Workflow automation", "Document processing"],
  "brand-identity": ["New logo", "Full brand identity", "Rebrand"],
  "ux-ui": ["UX audit", "Product or site redesign", "Design system"],
  "seo-analytics": ["Rank higher locally", "Fix technical SEO", "Content and links", "Analytics setup"],
  "digital-marketing": ["Google Ads", "Paid social ads", "Email marketing", "Landing pages"],
  "social-media-management": ["Content creation", "Full account management", "Paid social campaigns", "Community management"],
  "technical-consulting": ["Technical assessment", "Fractional CTO", "Cloud cost review", "Security or compliance readiness"],
  "website-maintenance": ["Monthly care plan", "Fix a broken or hacked site", "Speed and security", "Content updates"],
};

export const PROMPTS: Record<string, string> = {
  "web-development": "What does your business do, and what should the website help you achieve? Links to sites you like are helpful.",
  "mobile-apps": "What problem does the app solve, and who will use it? Do you need iPhone, Android, or both?",
  "ai-automation": "Which tasks take your team the most time today? What tools do you already use?",
  "brand-identity": "Tell us about your business, your customers, and what feels off about your current brand (if you have one).",
  "ux-ui": "Which site or app should we look at, and where do users get stuck?",
  "seo-analytics": "Which services and areas do you want to rank for? Who are your main competitors?",
  "digital-marketing": "What are you selling, who's your ideal customer, and what have you tried so far?",
  "social-media-management": "Which platforms are you on now, and what do you want social media to do for your business?",
  "technical-consulting": "What decision or problem are you facing? Share any context on your systems, team, or vendors.",
  "website-maintenance": "What's your website address and what platform is it built on? Anything broken right now?",
};

export const ONE_TIME_BUDGETS = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet"];
export const MONTHLY_BUDGETS = ["Under $1,000/mo", "$1,000 – $2,500/mo", "$2,500 – $5,000/mo", "$5,000+/mo", "Not sure yet"];
export const TIMELINES = ["As soon as possible", "Within 1–3 months", "In 3–6 months", "Just researching"];

export const isMonthly = (s?: ServiceDefinition) => s?.startingBilling === "per month";

/** Netlify Forms: posts URL-encoded fields to the site root (field names must exist in index.html's static form copies). */
export async function postNetlifyForm(fields: Record<string, string>) {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(fields).toString(),
  });
  if (!res.ok) throw new Error(`Submission failed (${res.status})`);
}
