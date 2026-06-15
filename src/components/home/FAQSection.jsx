import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "../shared/SectionHeading";
import { useDoc } from "@/content/ContentContext";

export default function FAQSection() {
  const { faq } = useDoc("home");

  return (
    <section className="py-24 md:py-32 bg-[#F8F9FC]">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          badge={faq.badge}
          title={faq.title}
          description={faq.description}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-2xl border border-gray-100 hover:border-[#F5C400]/40 shadow-card px-6 transition-all data-[state=open]:border-[#F5C400]/50 data-[state=open]:shadow-card-hover"
              >
                <AccordionTrigger className="text-sm font-medium text-[#1E3A6E] text-left hover:no-underline py-5 hover:text-[#1E3A6E]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#4A4A4A]/65 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
