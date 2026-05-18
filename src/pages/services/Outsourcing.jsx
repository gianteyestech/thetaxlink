import { Globe, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Outsourcing() {
  return (
    <ServicePageTemplate
      icon={Globe}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Outsourcing"
      subtitle="Flexible outsourcing solutions to scale efficiently."
      description={[
        "We provide outsourcing support for business functions where expert help can save time and cost.",
        "Our service helps you focus on growth while trusted professionals handle operational work."
      ]}
      features={['Accounting outsourcing', 'Bookkeeping outsourcing', 'Payroll outsourcing', 'Back-office support', 'Scalable business support']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
