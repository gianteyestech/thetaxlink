import { Megaphone, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Marketing() {
  return (
    <ServicePageTemplate
      icon={Megaphone}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Marketing"
      subtitle="Strategic marketing support for business growth."
      description={[
        "We help businesses improve visibility, communicate clearly, and attract the right customers.",
        "Our marketing service is aligned with your business goals and brand positioning."
      ]}
      features={['Marketing strategy', 'Brand positioning', 'Digital campaign planning', 'Website and content guidance', 'Lead generation support']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
