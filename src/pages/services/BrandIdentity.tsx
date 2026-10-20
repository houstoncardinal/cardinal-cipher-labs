import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { getService } from "@/lib/services-catalog";

const service = getService("brand-identity");

export default function BrandIdentity() {
  return <ServicePageLayout service={service} />;
}
