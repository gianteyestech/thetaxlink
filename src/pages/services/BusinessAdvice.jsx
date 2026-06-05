import { Lightbulb, Shield, TrendingUp, Users } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function BusinessAdvice() {
  return (
    <ServicePageTemplate
      icon={Lightbulb}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Business Advice"
      subtitle="Tailored business advice for growth, structure, and success."
      description={[
        "We provide expert business advice for people launching a startup, expanding an existing company, or improving day-to-day operations.",
        "Our support covers business formation choices, practical recommendations, grant and finance awareness, and the key differences between trading as a limited company, partnership, sole trader, or individual.",
        "We help clients understand liability, legal structure, continuity, corporation tax advantages, and name protection so they can make confident business decisions.",
      ]}
      features={[
        "Limited company by shares guidance",
        "Partnership setup considerations",
        "Sole trader registration advice",
        "Individual business advice",
        "Grant and financial support guidance",
        "Company structure and liability review",
        "Corporation tax and business continuity considerations",
        "Business name protection guidance",
      ]}
      benefits={[
        { title: "Better Structure", desc: "Choose a business setup that fits your liability, tax, and growth needs.", icon: Shield },
        { title: "Growth Ready", desc: "Get practical recommendations for launching or expanding with confidence.", icon: TrendingUp },
        { title: "Informed Decisions", desc: "Understand the steps, obligations, and options before you commit.", icon: Users },
      ]}
    />
  );
}
