import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, FileText, Calculator, BookOpen, Wallet, Building, Award, Cpu, Megaphone, Globe } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const services = [
  { icon: Lightbulb, title: "Business Advice", desc: "Expert guidance for startups, expansion, operations, and structure.", path: "/business-advice", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: FileText, title: "Accounts Preparation", desc: "Clear accounts from your source documents and summaries.", path: "/accounts-preparation", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
  { icon: Calculator, title: "Taxation", desc: "Irish tax obligations, planning, deadlines, and refunds.", path: "/taxation", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: BookOpen, title: "Bookkeeping", desc: "Transactions, reconciliation, reporting, payroll, and tax-ready books.", path: "/bookkeeping", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
  { icon: Wallet, title: "Payroll", desc: "Payslips, Revenue filings, employee setup, and compliance support.", path: "/payroll", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: Building, title: "Corporate & Secretarial", desc: "Company formation, CRO filings, annual returns, and governance.", path: "/corporate-secretarial", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
  { icon: Award, title: "Trademark Registration", desc: "Brand protection for names, logos, symbols, and trademarks.", path: "/trademark-registration", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: Cpu, title: "Technology", desc: "Domains, websites, logos, development, and business email.", path: "/technology", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
  { icon: Megaphone, title: "Marketing", desc: "Marketing support to build awareness, trust, sales, and reputation.", path: "/marketing", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: Globe, title: "Outsourcing", desc: "Outsourced accounting, payroll, tax, VAT, and back-office work.", path: "/outsourcing", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Our Services"
          title="Expert Financial Solutions"
          description="From accounting and tax to technology, marketing, and outsourcing, we provide practical support for growing businesses."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link to={service.path} className="group block h-full">
                <div className="bg-white rounded-2xl p-6 h-full shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-[#F5C400]/40 relative overflow-hidden">
                  {/* Gold hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F5C400] to-[#FFD633] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className={`w-11 h-11 rounded-xl ${service.iconBg} border border-[#1E3A6E]/8 flex items-center justify-center mb-4 group-hover:bg-[#F5C400]/20 transition-colors`}>
                    <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-[#1E3A6E] mb-2 text-sm leading-snug">{service.title}</h3>
                  <p className="text-xs text-[#4A4A4A]/60 leading-relaxed mb-3">{service.desc}</p>
                  <span className="text-xs font-semibold text-[#F5C400] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 duration-200">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
