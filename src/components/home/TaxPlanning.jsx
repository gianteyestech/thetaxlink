import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/content/icons";
import { useDoc } from "@/content/ContentContext";
import { asset } from "@/lib/asset";

export default function TaxPlanning() {
  const { taxPlanning } = useDoc("home");

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest bg-[#F5C400]/10 border border-[#F5C400]/30 text-[#1E3A6E] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
              {taxPlanning.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A6E] leading-tight mb-5">
              {taxPlanning.title}
            </h2>
            <p className="text-[#4A4A4A]/70 leading-relaxed mb-6 text-base">
              {taxPlanning.paragraph1}
            </p>
            <p className="text-[#4A4A4A]/70 leading-relaxed mb-8 text-base">
              {taxPlanning.paragraph2}
            </p>
            <Link to={taxPlanning.ctaPath}>
              <Button className="rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white px-7 h-11 font-medium shadow-navy/25 shadow-md">
                {taxPlanning.ctaLabel} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <div className="relative">
            {/* Background image with overlay */}
            <div className="rounded-3xl overflow-hidden shadow-navy mb-5 hidden lg:block">
              <img
                src={asset(taxPlanning.image)}
                alt={taxPlanning.imageAlt}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-[#0E1F3D]/30 rounded-3xl" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {taxPlanning.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-[#F8F9FC] rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-[#F5C400]/40 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#F5C400]/15 group-hover:border-[#F5C400]/30 transition-all shadow-card">
                    <Icon name={f.icon} className="w-5 h-5 text-[#1E3A6E]" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A6E] text-sm mb-1.5">{f.title}</h3>
                  <p className="text-xs text-[#4A4A4A]/60 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
