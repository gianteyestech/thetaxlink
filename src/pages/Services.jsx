import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, FileText, Calculator, BookOpen, Wallet, Building, Award, Cpu, Megaphone, Globe } from "lucide-react";
import CTASection from "../components/home/CTASection";

const services = [
  { icon: Lightbulb, title: "Business Advice", desc: "Expert guidance for startups, expansion, operations, structure, and practical business decisions.", path: "/business-advice" },
  { icon: FileText, title: "Accounts Preparation", desc: "Clear financial records and accounts prepared from your source documents and summaries.", path: "/accounts-preparation" },
  { icon: Calculator, title: "Taxation", desc: "Support across Irish tax obligations, planning, deadlines, refunds, and Revenue correspondence.", path: "/taxation" },
  { icon: BookOpen, title: "Bookkeeping", desc: "Recording, reconciliation, payroll, reporting, and tax-ready books for growing businesses.", path: "/bookkeeping" },
  { icon: Wallet, title: "Payroll", desc: "Reliable payroll processing, payslips, Revenue filings, employee registrations, and compliance support.", path: "/payroll" },
  { icon: Building, title: "Corporate & Secretarial", desc: "Company formation, business registration, CRO filings, annual returns, and governance support.", path: "/corporate-secretarial" },
  { icon: Award, title: "Trademark Registration", desc: "Brand protection support for company names, logos, symbols, and trademarks in key jurisdictions.", path: "/trademark-registration" },
  { icon: Cpu, title: "Technology", desc: "Domain registration, website and logo design, website development, and business email setup.", path: "/technology" },
  { icon: Megaphone, title: "Marketing", desc: "Marketing support to build your name, attract customers, improve reputation, and increase sales.", path: "/marketing" },
  { icon: Globe, title: "Outsourcing", desc: "Outsourced VAT, payroll, tax, bookkeeping, accounting, annual returns, and company support.", path: "/outsourcing" },
];

export default function Services() {
  return (
    <>
      <section className="relative bg-[#1E3A6E] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#F5C400] bg-[#F5C400]/10 border border-[#F5C400]/25 px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
              Our Services
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              Practical accounting, tax, compliance, technology, marketing, and outsourcing support for your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}>
                <Link to={service.path} className="group block h-full">
                  <div className="bg-white rounded-2xl p-7 h-full shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-[#F5C400]/45 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F5C400] to-[#FFD633] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 rounded-xl bg-[#1E3A6E]/6 border border-[#1E3A6E]/8 flex items-center justify-center mb-5 group-hover:bg-[#F5C400]/15 group-hover:border-[#F5C400]/30 transition-all">
                      <service.icon className="w-5 h-5 text-[#1E3A6E]" />
                    </div>
                    <h3 className="text-base font-semibold text-[#1E3A6E] mb-2">{service.title}</h3>
                    <p className="text-sm text-[#4A4A4A]/60 leading-relaxed mb-4">{service.desc}</p>
                    <span className="text-sm font-semibold text-[#F5C400] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
