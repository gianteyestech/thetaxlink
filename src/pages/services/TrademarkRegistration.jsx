import { Award, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function TrademarkRegistration() {
  return (
    <ServicePageTemplate
      icon={Award}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Trademark Registration"
      subtitle="Protect your brand identity professionally."
      description={[
        "We assist businesses with trademark registration to protect names, logos, and brand assets.",
        "Our guidance helps you understand the process and reduce the risk of avoidable filing mistakes."
      ]}
      features={['Trademark search guidance', 'Application preparation support', 'Irish and EU trademark assistance', 'Brand protection advice', 'Renewal and record support']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
