import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, FileText, Calculator, BookOpen, Wallet, Building, Award, Cpu, Megaphone, Globe } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const services = [
  { icon: Lightbulb, title: "Business Advice", desc: "Strategic guidance to help your business thrive and grow confidently.", path: "/services/business-advice", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: FileText, title: "Accounts Preparation", desc: "Accurate financial statements prepared to the highest professional standards.", path: "/services/accounts-preparation", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
  { icon: Calculator, title: "Taxation", desc: "Expert tax planning and compliance to minimise liabilities legally.", path: "/services/taxation", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: BookOpen, title: "Bookkeeping", desc: "Keep your financial records organised, accurate, and up to date.", path: "/services/bookkeeping", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
  { icon: Wallet, title: "Payroll", desc: "Efficient payroll management ensuring timely and compliant payments.", path: "/services/payroll", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: Building, title: "Corporate & Secretarial", desc: "Company formation, governance, and regulatory compliance services.", path: "/services/corporate-secretarial", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
  { icon: Award, title: "Trademark Registration", desc: "Protect your brand with professional trademark registration services.", path: "/services/trademark-registration", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: Cpu, title: "Technology", desc: "Modern technology solutions to streamline your business operations.", path: "/services/technology", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
  { icon: Megaphone, title: "Marketing", desc: "Strategic marketing solutions to boost visibility and drive growth.", path: "/services/marketing", iconBg: "bg-[#1E3A6E]/8", iconColor: "text-[#1E3A6E]" },
  { icon: Globe, title: "Outsourcing", desc: "Flexible outsourcing solutions to scale your business efficiently.", path: "/services/outsourcing", iconBg: "bg-[#F5C400]/12", iconColor: "text-[#1E3A6E]" },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Business & Financial Services"
          description="From accounting to marketing, we provide end-to-end solutions to simplify your business operations and accelerate growth."
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