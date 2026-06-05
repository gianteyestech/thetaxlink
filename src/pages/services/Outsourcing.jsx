import { Globe, Clock, Shield, TrendingUp } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Outsourcing() {
  return (
    <ServicePageTemplate
      icon={Globe}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Outsourcing"
      subtitle="Strategic outsourcing to streamline operations and reduce costs."
      description={[
        "Outsourcing helps businesses reduce costs, access specialised expertise, and scale operations without carrying every task in-house.",
        "We provide cost-effective, high-quality outsourcing support so you can focus on the work that matters most.",
        "Our outsourcing services cover accounting, payroll, tax, bookkeeping, reconciliation, annual returns, and company secretarial support.",
      ]}
      features={[
        "VAT returns preparation",
        "Payroll processing",
        "Personal tax returns",
        "Bookkeeping services",
        "Bank and credit card reconciliation",
        "Company year-end accounts",
        "Corporation tax returns",
        "Annual return submissions",
        "Company secretary and support",
        "Daily or weekly accounting entries",
      ]}
      benefits={[
        { title: "Lower Admin Load", desc: "Move routine finance and compliance tasks to trusted support.", icon: Clock },
        { title: "Specialist Access", desc: "Use skilled support for tax, payroll, accounts, and secretarial work.", icon: Shield },
        { title: "Room to Grow", desc: "Free your team to focus on growth, service, and operations.", icon: TrendingUp },
      ]}
    />
  );
}
