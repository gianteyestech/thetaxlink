import { motion } from "framer-motion";

const sections = [
  { title: "1. Introduction", text: "These Terms and Conditions govern your use of The Tax Link website and services. By using our website or engaging our services, you agree to these terms in full." },
  { title: "2. Services", text: "The Tax Link provides accounting, taxation, bookkeeping, payroll, corporate secretarial, trademark registration, technology, marketing, and outsourcing services. The scope of services will be agreed upon in writing before engagement." },
  { title: "3. Client Responsibilities", text: "Clients are responsible for providing accurate and complete information necessary for us to deliver our services. Any delays or errors resulting from incomplete or inaccurate information shall not be the responsibility of The Tax Link." },
  { title: "4. Fees and Payment", text: "Our fees will be communicated clearly before any work commences. Payment terms will be outlined in the engagement letter. We reserve the right to charge interest on overdue amounts." },
  { title: "5. Confidentiality", text: "We treat all client information with the utmost confidentiality and will not disclose any information to third parties without your consent, except where required by law." },
  { title: "6. Limitation of Liability", text: "While we exercise due care and skill in providing our services, The Tax Link shall not be liable for any indirect, consequential, or special damages arising from the use of our services, except in cases of negligence." },
  { title: "7. Intellectual Property", text: "All content on this website, including text, graphics, and logos, is the property of The Tax Link and is protected by intellectual property laws. You may not reproduce or distribute any content without our written permission." },
  { title: "8. Governing Law", text: "These terms are governed by and construed in accordance with the laws of Ireland. Any disputes shall be subject to the exclusive jurisdiction of the Irish courts." },
  { title: "9. Contact", text: "For any questions about these terms, please contact us at info@thetaxlink.com or call +353 85 133 0808." },
];

export default function Terms() {
  return (
    <>
      <section className="relative bg-[#1E3A6E] py-20 md:py-24 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-3">Terms & Conditions</h1>
            <p className="text-white/50 text-sm">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-serif font-bold text-[#1E3A6E] mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F5C400] shrink-0" />
                  {s.title}
                </h2>
                <p className="text-[#4A4A4A]/70 leading-relaxed text-sm pl-5">{s.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}