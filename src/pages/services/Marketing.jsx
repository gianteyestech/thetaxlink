import { Megaphone, BadgeCheck, TrendingUp, Users } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Marketing() {
  return (
    <ServicePageTemplate
      icon={Megaphone}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Marketing"
      subtitle="Marketing support that helps your business grow and stay visible."
      description={[
        "Marketing acts like the lifeblood of a company. Even strong products and services can miss their target market without effective marketing.",
        "We help businesses increase awareness, attract and keep customers, improve reputation, and support sales growth.",
        "Effective marketing gets your product or service in front of the right audience faster while giving you more time to focus on the rest of the business.",
      ]}
      features={[
        "Brand awareness support",
        "Sales growth strategy",
        "Customer attraction and retention",
        "Reputation improvement",
        "Audience engagement",
        "Marketing communication planning",
        "Time-saving campaign support",
        "Growth-focused marketing advice",
      ]}
      benefits={[
        { title: "Brand Recognition", desc: "Help customers remember your name, products, and services.", icon: BadgeCheck },
        { title: "More Sales Opportunities", desc: "Create more chances to turn attention into enquiries and sales.", icon: TrendingUp },
        { title: "Customer Loyalty", desc: "Build a stronger base of customers who know and trust your brand.", icon: Users },
      ]}
    />
  );
}
