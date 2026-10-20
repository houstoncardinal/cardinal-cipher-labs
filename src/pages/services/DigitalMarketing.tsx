import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { getService } from "@/lib/services-catalog";

const service = getService("digital-marketing");

export default function DigitalMarketing() {
  return <ServicePageLayout service={service} />;
}
