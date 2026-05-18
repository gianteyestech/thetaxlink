import { Calculator, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Taxation() {
  return (
    <ServicePageTemplate
      icon={Calculator}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Taxation"
      subtitle="Expert tax planning and compliance for individuals and businesses."
      description={[
        "Our taxation service helps you stay compliant while making use of every legitimate tax relief available.",
        "We support clients with Irish tax requirements including income tax, corporation tax, VAT, CGT, and more."
      ]}
      features={['Income tax and corporation tax', 'VAT registration and returns', 'Capital gains tax advice', 'Tax planning and reliefs', 'Revenue correspondence support']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
