import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import AboutPreview from "../components/home/AboutPreview";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TaxPlanning from "../components/home/TaxPlanning";
import ProcessSection from "../components/home/ProcessSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <TaxPlanning />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}