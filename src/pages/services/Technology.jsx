import { Cpu, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Technology() {
  return (
    <ServicePageTemplate
      icon={Cpu}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Technology"
      subtitle="Modern technology solutions for smarter business operations."
      description={[
        "We help businesses adopt tools and systems that reduce manual work and improve productivity.",
        "Our technology support focuses on practical solutions that fit your workflow and growth plans."
      ]}
      features={['Business process automation', 'Software and cloud system advice', 'Accounting technology setup', 'Workflow improvement', 'Digital transformation support']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
