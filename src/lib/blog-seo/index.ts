// SEO fundamentals series (published 2026-11-18), one file per article. Same editorial rules as
// blog-data.ts: every statistic cites a checkable source in `sources`; Cardinal's prices come from
// services-catalog.ts; Hunain's first-person experience must be real (no invented clients or results).
import type { BlogArticle } from "../blog-data";
import whatIsSeo from "./what-is-seo";
import howToDoKeywordResearch from "./how-to-do-keyword-research";
import onPageSeoChecklist from "./on-page-seo-checklist";
import technicalSeoGuide from "./technical-seo-guide";
import whatAreBacklinks from "./what-are-backlinks";
import howToDoAnSeoAudit from "./how-to-do-an-seo-audit";
import howToRankHigherOnGoogle from "./how-to-rank-higher-on-google";
import generativeEngineOptimizationAiSearch from "./generative-engine-optimization-ai-search";
import whatIsEeatGoogle from "./what-is-eeat-google";
import schemaMarkupGuide from "./schema-markup-guide";

/** Reading order: the pillar ("What is SEO?") first, then the series. */
export const seoGuides: BlogArticle[] = [
  whatIsSeo,
  howToDoKeywordResearch,
  onPageSeoChecklist,
  technicalSeoGuide,
  whatAreBacklinks,
  howToDoAnSeoAudit,
  howToRankHigherOnGoogle,
  generativeEngineOptimizationAiSearch,
  whatIsEeatGoogle,
  schemaMarkupGuide,
].filter((a): a is BlogArticle => a !== null);
