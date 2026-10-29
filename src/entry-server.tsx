// Build-time renderer used by scripts/prerender.mjs to turn every public route
// into static HTML, so search engines and AI crawlers get full content and the
// correct title, description, canonical and structured data without running JS.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import { AppProviders } from "./App";
import { AppRoutes, noindexPaths, publicPaths, redirects } from "./AppRoutes";

export { noindexPaths, publicPaths, redirects };
export { services, carePlans } from "./lib/services-catalog";
export { landingPages } from "./lib/landing-pages";
export { caseStudies } from "./lib/case-studies";
export { articles } from "./lib/blog-data";
export { homeFaqs } from "./lib/home-faqs";

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <AppProviders helmetContext={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );
  const h = helmetContext.helmet;
  const head = h
    ? [h.title.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].join("\n    ")
    : "";
  return { html, head };
}
