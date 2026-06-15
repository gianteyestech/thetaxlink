import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CTASection from "../components/home/CTASection";
import { Icon } from "@/content/icons";
import { useDoc } from "@/content/ContentContext";

export default function Services() {
  const { hero, items } = useDoc("services");

  return (
    <>
      <section className="relative bg-[#1E3A6E] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#F5C400] bg-[#F5C400]/10 border border-[#F5C400]/25 px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
              {hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              {hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}>
                <Link to={service.path} className="group block h-full">
                  <div className="bg-white rounded-2xl p-7 h-full shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-[#F5C400]/45 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F5C400] to-[#FFD633] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 rounded-xl bg-[#1E3A6E]/6 border border-[#1E3A6E]/8 flex items-center justify-center mb-5 group-hover:bg-[#F5C400]/15 group-hover:border-[#F5C400]/30 transition-all">
                      <Icon name={service.icon} className="w-5 h-5 text-[#1E3A6E]" />
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
