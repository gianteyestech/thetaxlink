import { Cpu, Globe2, Mail, Palette } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function Technology() {
  return (
    <ServicePageTemplate
      icon={Cpu}
      color="bg-[#F5C400] text-[#1E3A6E]"
      title="Technology"
      subtitle="Digital presence and technology solutions for modern businesses."
      description={[
        "We help businesses strengthen their digital presence with practical technology services designed for growth in a competitive market.",
        "Our technology support covers domain registration, professional website design and development, custom logo creation, and secure business email.",
        "Whether you are starting from scratch or improving an existing online presence, we deliver scalable digital services aligned with your business goals.",
      ]}
      features={[
        "Domain name registration",
        "Website design",
        "Logo design",
        "Website development",
        "Business email address setup",
        "Online presence improvements",
        "Scalable digital solutions",
        "Brand-aligned technology support",
      ]}
      benefits={[
        { title: "Stronger Presence", desc: "Create a cleaner online foundation with domains, websites, and email.", icon: Globe2 },
        { title: "Brand Support", desc: "Pair your website with logo and visual identity support.", icon: Palette },
        { title: "Secure Email", desc: "Set up professional business email for trusted communication.", icon: Mail },
      ]}
    />
  );
}
