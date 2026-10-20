import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { getService } from "@/lib/services-catalog";

const service = getService("web-development");

export default function WebDevelopment() {
  return <ServicePageLayout service={service} />;
}
