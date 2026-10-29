// Permanent (301) redirects — the single source of truth. scripts/prerender.mjs writes these
// into Netlify's _redirects at build time, and AppRoutes uses them for in-app navigation.
// Purpose: one strong page per search intent, so pages stop competing with each other,
// while every old URL (and any links pointing to it) passes its value to the new page.

const citySlugs = [
  "new-york", "los-angeles", "chicago", "phoenix", "philadelphia", "san-antonio", "san-diego", "dallas", "austin",
  "san-jose", "jacksonville", "fort-worth", "columbus", "charlotte", "san-francisco", "indianapolis", "seattle",
  "denver", "washington-dc", "boston", "nashville", "baltimore", "portland", "las-vegas", "miami", "atlanta",
];

export const redirects: Record<string, string> = {
  // Duplicate "web design Houston" pages → one owner
  "/houston": "/houston-web-design",
  "/houston-services": "/houston-web-design",
  "/custom-design": "/houston-web-design",
  "/houston-construction-website-design": "/industry/construction",
  "/houston-startup-website-design": "/houston-web-design",

  // Houston duplicates of service pages → the service page
  "/houston-web-developer": "/services/web-development",
  "/houston-seo": "/services/seo-analytics",
  "/houston-seo-company": "/services/seo-analytics",
  "/houston-app-development": "/services/mobile-apps",

  // Industry pages duplicated by Houston industry pages
  "/industry/legal": "/houston-law-firm-website-design",
  "/industry/healthcare": "/houston-medical-website-design",

  // Thin feature pages folded into the services they describe
  "/rapid-delivery": "/services/web-development",
  "/rush-prototyping": "/services/mobile-apps",
  "/enterprise-security": "/services/technical-consulting",
  "/same-day-support": "/services/website-maintenance",
  "/modern-tech-stack": "/services/web-development",
  "/services/uxui": "/services/ux-ui",

  // Retired blog posts → the closest current article or page
  "/blog/houston-web-design-cost": "/blog/how-much-does-a-website-cost-houston",
  "/blog/houston-web-design-seo-importance": "/blog/google-business-profile-guide-houston",
  "/blog/houston-local-seo-web-design": "/blog/google-business-profile-guide-houston",
  "/blog/houston-medical-website-design": "/blog/hipaa-ready-website-checklist",
  "/blog/houston-law-firm-web-design": "/houston-law-firm-website-design",
  "/blog/houston-ecommerce-web-design": "/houston-ecommerce-website-design",
  "/blog/houston-real-estate-web-design": "/houston-real-estate-website-design",
  "/blog/wordpress-vs-custom-website-houston": "/services/web-development",
  "/blog/houston-mobile-responsive-web-design": "/services/web-development",
  "/blog/houston-website-speed-optimization": "/services/web-development",
  "/blog/houston-web-design-roi": "/services/ux-ui",
  "/blog/houston-web-design-redesign": "/services/ux-ui",
  "/blog/houston-web-design-conversion-optimization": "/services/ux-ui",
  "/blog/houston-web-design-company": "/houston-web-design",
  "/blog/best-web-designer-houston": "/houston-web-design",
  "/blog/houston-website-design-services": "/houston-web-design",
  "/blog/houston-small-business-web-design": "/houston-web-design",
  "/blog/houston-web-design-agency-vs-freelancer": "/houston-web-design",
  "/blog/houston-website-design-process": "/houston-web-design",
  "/blog/houston-web-design-trends-2026": "/houston-web-design",

  // Retired templated city pages (they had no unique local substance)
  ...Object.fromEntries(citySlugs.map((c) => [`/${c}-seo`, "/services/seo-analytics"])),
};
