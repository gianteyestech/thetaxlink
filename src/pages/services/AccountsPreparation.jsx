import { FileText, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function AccountsPreparation() {
  return (
    <ServicePageTemplate
      icon={FileText}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Accounts Preparation"
      subtitle="Accurate accounts prepared to professional standards."
      description={[
        "We prepare annual accounts and financial statements that give you a clear view of your business performance.",
        "Our team helps you meet your compliance obligations while providing insights that support better decisions."
      ]}
      features={['Annual financial statements', 'Sole trader and company accounts', 'CRO and Revenue-ready reporting', 'Management accounts', 'Year-end review and adjustments']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
