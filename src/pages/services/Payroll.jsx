import { Wallet, FileCheck, Shield, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Payroll() {
  return (
    <ServicePageTemplate
      icon={Wallet}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Payroll"
      subtitle="Effortless payroll management for your business."
      description={[
        "We simplify payroll with reliable processing, accurate wage calculations, Revenue filings, and compliance management.",
        "Our payroll support is designed to reduce administration, minimise errors, and ensure employees are paid correctly and on time.",
        "The computerised payroll system can produce weekly, bimonthly, or monthly payslips that can be emailed or printed.",
      ]}
      features={[
        "Register new employees with Revenue",
        "Generate weekly, bimonthly, or monthly payslips",
        "File monthly and annual payroll returns with Revenue",
        "Obtain employee tax deduction certificates",
        "Maintain compliance with regulatory updates",
        "Advice on employment contracts",
        "Ad hoc advice for employers and employees",
        "Scalable payroll support for startups and established companies",
      ]}
      benefits={[
        { title: "Accurate Payslips", desc: "Produce timely payslips and payroll records for your team.", icon: FileCheck },
        { title: "Revenue Compliance", desc: "Keep payroll filings and employee registrations aligned with requirements.", icon: Shield },
        { title: "Time Saved", desc: "Reduce manual payroll administration and avoid avoidable errors.", icon: Clock },
      ]}
    />
  );
}
