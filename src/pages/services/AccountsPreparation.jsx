import { FileText, BarChart3, Shield, TrendingUp } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function AccountsPreparation() {
  return (
    <ServicePageTemplate
      icon={FileText}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Accounts Preparation"
      subtitle="Clear, compliant financial records for better business decisions."
      description={[
        "Businesses must keep adequate books and records that show a true picture of their financial position. We prepare accounts from the source documents and summaries you provide.",
        "Our team translates financial statements into a simple format, helping you understand business performance and identify what needs attention.",
        "We support account preparation across sectors including construction, charities, cleaning and gardening, car servicing, education, heating and plumbing, mobile shops, professional services, property management, retail, cafes, restaurants, and taxi businesses.",
      ]}
      features={[
        "Financial statements under FRS 102, IFRS, US GAAP, and LUX GAAP",
        "Sole trader account preparation",
        "Management accounts",
        "Forecasts and cash flow projections",
        "Year-end source document review",
        "Simple explanation of financial statements",
        "Sector-aware account preparation",
        "Timely, accurate accounts for compliance",
      ]}
      benefits={[
        { title: "Clear Records", desc: "See a more accurate picture of your business finances.", icon: BarChart3 },
        { title: "Compliance Support", desc: "Prepare accounts properly and on time for required authorities.", icon: Shield },
        { title: "Better Decisions", desc: "Use understandable numbers to improve performance and planning.", icon: TrendingUp },
      ]}
    />
  );
}
