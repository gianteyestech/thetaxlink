import { BookOpen, BarChart3, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Bookkeeping() {
  return (
    <ServicePageTemplate
      icon={BookOpen}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Bookkeeping"
      subtitle="Reliable and accurate bookkeeping services for business growth."
      description={[
        "Bookkeeping is the backbone of a successful business because it records and organises financial transactions and shows the health of the company.",
        "At The Tax Link, we provide bookkeeping solutions tailored to your business, whether you are a startup or an established company.",
        "We keep financial records organised, tax-ready, and useful for management decisions so you can focus on growing the business.",
      ]}
      features={[
        "Recording financial transactions",
        "Accounts payable and receivable management",
        "Bank reconciliation",
        "Payroll processing",
        "Balance sheet and income statement reporting",
        "Cash flow summaries",
        "Tax preparation and filing support",
        "Personalised bookkeeping service",
      ]}
      benefits={[
        { title: "Accurate Records", desc: "Keep income, expenses, sales, invoices, and payments organised.", icon: BookOpen },
        { title: "Clear Reporting", desc: "Use concise reports to understand performance and cash flow.", icon: BarChart3 },
        { title: "Less Admin", desc: "Free up time by letting specialists handle routine bookkeeping work.", icon: Clock },
      ]}
    />
  );
}
