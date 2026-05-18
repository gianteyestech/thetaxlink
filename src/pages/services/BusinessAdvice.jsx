import { Lightbulb, Shield, TrendingUp, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function BusinessAdvice() {
  return (
    <ServicePageTemplate
      icon={Lightbulb}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Business Advice"
      subtitle="Strategic guidance to help your business grow with confidence."
      description={[
        "We provide practical business advice for startups, sole traders, SMEs, and established companies across Ireland.",
        "Our advisory approach focuses on better decisions, stronger compliance, improved cash flow, and long-term growth."
      ]}
      features={['Business planning and growth strategy', 'Cash flow and profitability review', 'Startup and company structure advice', 'Management reporting support', 'Financial performance improvement']}
      benefits={[{ title: "Compliance Focused", desc: "Keep your business aligned with relevant rules and deadlines.", icon: Shield },{ title: "Growth Oriented", desc: "Practical support that helps your business move forward.", icon: TrendingUp },{ title: "Time Saving", desc: "Reduce admin workload and focus on what matters most.", icon: Clock }]}
    />
  );
}
