import { Building, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function CorporateSecretarial() {
  return (
    <ServicePageTemplate
      icon={Building}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Corporate & Secretarial"
      subtitle="Company compliance and governance support."
      description={[
        "We help companies manage formation, CRO filings, annual returns, and corporate records.",
        "Our corporate secretarial service keeps your business organised and compliant throughout the year."
      ]}
      features={['Company formation support', 'Annual return filing', 'CRO compliance', 'Director and shareholder updates', 'Company record maintenance']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
