import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { getService } from "@/lib/services-catalog";

const service = getService("mobile-apps");

export default function MobileApps() {
  return <ServicePageLayout service={service} />;
}
