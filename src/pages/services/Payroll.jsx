import { Wallet, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Payroll() {
  return (
    <ServicePageTemplate
      icon={Wallet}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Payroll"
      subtitle="Reliable payroll management for Irish businesses."
      description={[
        "We manage payroll accurately and on time so your employees are paid correctly and your Revenue obligations are met.",
        "Our payroll process is confidential, compliant, and designed for businesses of all sizes."
      ]}
      features={['Weekly and monthly payroll', 'PAYE modernisation compliance', 'Payslips and payroll reports', 'Employee starter and leaver support', 'Revenue payroll submissions']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
