import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { getService } from "@/lib/services-catalog";

const service = getService("ux-ui");

export default function UXUI() {
  return <ServicePageLayout service={service} />;
}
