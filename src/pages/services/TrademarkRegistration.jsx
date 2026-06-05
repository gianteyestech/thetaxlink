import { Award, BadgeCheck, Shield, Globe2 } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function TrademarkRegistration() {
  return (
    <ServicePageTemplate
      icon={Award}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Trademark Registration"
      subtitle="Protect your brand with trademark and intellectual property support."
      description={[
        "In a competitive market, protecting the core of your company is essential. Trademark registration helps identify and protect products or services in Ireland and other jurisdictions.",
        "Registering a trademark can make it easier to stop others using it and prove ownership of specific goods or services.",
        "Ignoring intellectual property rights can expose a business to the risk of competitors copying ideas, goodwill, reputation, or innovations.",
      ]}
      features={[
        "Company name protection",
        "Company logo protection",
        "Brand name protection",
        "Symbol protection",
        "Ireland trademark registration",
        "EU trade mark registration",
        "US trade mark registration",
        "UK trade mark registration",
      ]}
      benefits={[
        { title: "Brand Ownership", desc: "Strengthen proof of ownership for names, logos, and brand assets.", icon: BadgeCheck },
        { title: "Risk Reduction", desc: "Reduce exposure to copycats, infringers, and reputational damage.", icon: Shield },
        { title: "Wider Coverage", desc: "Access support for Ireland, EU, UK, and US trademark registration.", icon: Globe2 },
      ]}
    />
  );
}
