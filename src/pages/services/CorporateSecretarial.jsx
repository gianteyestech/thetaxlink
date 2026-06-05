import { Building, FileCheck, Shield, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function CorporateSecretarial() {
  return (
    <ServicePageTemplate
      icon={Building}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Corporate & Secretarial"
      subtitle="Corporate governance, filings, and compliance handled professionally."
      description={[
        "We provide corporate secretarial services for Irish businesses, with support across company secretarial work, compliance, and corporate governance.",
        "As corporate regulation increases, we help businesses meet legal commitments and complete required tasks professionally and on time.",
        "We also assist with company formation, Revenue paperwork, Companies Registration Office paperwork, and tax registration advice.",
      ]}
      features={[
        "Business name registration",
        "Company formation",
        "CRO filings",
        "Company annual returns",
        "Sole trader registration",
        "Business detail changes",
        "Company restorations",
        "Voluntary strike-offs",
        "Late annual return solutions",
      ]}
      benefits={[
        { title: "Governance Support", desc: "Keep company records, changes, and filings under control.", icon: FileCheck },
        { title: "Compliance Confidence", desc: "Meet legal commitments as corporate regulation increases.", icon: Shield },
        { title: "Fast Setup", desc: "Get company formation and registration work moving efficiently.", icon: Clock },
      ]}
    />
  );
}
