import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { Icon } from "@/content/icons";
import { useDoc } from "@/content/ContentContext";

export default function ServicesGrid() {
  const { servicesGrid } = useDoc("home");

  return (
    <section className="py-24 md:py-32 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge={servicesGrid.badge}
          title={servicesGrid.title}
          description={servicesGrid.description}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {servicesGrid.items.map((service, i) => (
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

                  <div className={`w-11 h-11 rounded-xl ${i % 2 === 0 ? "bg-[#1E3A6E]/8" : "bg-[#F5C400]/12"} border border-[#1E3A6E]/8 flex items-center justify-center mb-4 group-hover:bg-[#F5C400]/20 transition-colors`}>
                    <Icon name={service.icon} className="w-5 h-5 text-[#1E3A6E]" />
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
