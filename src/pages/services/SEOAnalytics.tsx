import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { getService } from "@/lib/services-catalog";

const service = getService("seo-analytics");

export default function SEOAnalytics() {
  return <ServicePageLayout service={service} />;
}
