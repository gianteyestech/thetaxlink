import { Calculator, Bell, Shield, TrendingUp } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Taxation() {
  return (
    <ServicePageTemplate
      icon={Calculator}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Taxation"
      subtitle="Irish tax support that reduces stress and keeps deadlines under control."
      description={[
        "The Irish tax system can be complicated and stressful, and mistakes can lead to penalties or missed refunds. We help clients use available tax benefits while staying compliant.",
        "Our tax accountants keep up with changing legislation and warn clients before Revenue deadlines so payments and filings are handled on time.",
        "We support individuals, self-employed people, companies, firms, and partnerships with tax filings, planning, refund support, Revenue correspondence, and audit-process guidance.",
      ]}
      features={[
        "Income tax",
        "Corporation tax",
        "Value Added Tax",
        "Capital Gains Tax",
        "Relevant Contracts Tax",
        "Deposit Interest Retention Tax",
        "Capital Acquisition Tax",
        "Stamp duties",
        "PAYE, PRSI, and levies",
        "Withholding tax",
      ]}
      benefits={[
        { title: "Deadline Alerts", desc: "Know what is due before Revenue deadlines arrive.", icon: Bell },
        { title: "Penalty Reduction", desc: "Reduce the risk of avoidable mistakes, fines, and missed filings.", icon: Shield },
        { title: "Tax Planning", desc: "Improve cash flow through practical planning and available allowances.", icon: TrendingUp },
      ]}
    />
  );
}
