import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "../shared/SectionHeading";

const faqs = [
  { q: "What services does The Tax Link offer?", a: "We provide a full suite of business services including accounting, taxation, bookkeeping, payroll, corporate secretarial, trademark registration, technology, marketing, and outsourcing solutions." },
  { q: "Do you work with individuals or only businesses?", a: "We work with both individuals and businesses of all sizes, from sole traders and freelancers to large corporations and multinationals." },
  { q: "How much does a consultation cost?", a: "Your initial consultation is completely free. We'll discuss your needs and provide a transparent quote with no hidden fees." },
  { q: "Are you based in Ireland?", a: "Yes, we are proudly based in Ireland and serve clients throughout the country. We also support international clients doing business in Ireland." },
  { q: "How do I get started?", a: "Simply book a free consultation through our website or call us at +353 85 133 0808. We'll take it from there!" },
  { q: "Can you help with Revenue audits?", a: "Absolutely. Our team has extensive experience in managing Revenue audits and can guide you through the entire process with confidence." },
];

export default function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FC]">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          description="Find quick answers to the most common questions about our services."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-2xl border border-gray-100 hover:border-[#F5C400]/40 shadow-card px-6 transition-all data-[state=open]:border-[#F5C400]/50 data-[state=open]:shadow-card-hover"
              >
                <AccordionTrigger className="text-sm font-medium text-[#1E3A6E] text-left hover:no-underline py-5 hover:text-[#1E3A6E]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#4A4A4A]/65 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}