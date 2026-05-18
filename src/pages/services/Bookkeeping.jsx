import { BookOpen, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Bookkeeping() {
  return (
    <ServicePageTemplate
      icon={BookOpen}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Bookkeeping"
      subtitle="Organised financial records, accurate reporting, and less stress."
      description={[
        "We keep your books up to date so you always know where your business stands.",
        "Our bookkeeping service is designed to save time, reduce errors, and support smooth accounting at year end."
      ]}
      features={['Transaction recording', 'Bank reconciliation', 'Supplier and customer records', 'Monthly bookkeeping reports', 'Cloud bookkeeping support']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
