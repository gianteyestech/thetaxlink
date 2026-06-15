import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { Icon } from "@/content/icons";
import { useDoc } from "@/content/ContentContext";

export default function ProcessSection() {
  const { process } = useDoc("home");

  return (
    <section className="py-24 md:py-32 bg-[#0E1F3D] text-white overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C400]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C400]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(245,196,0,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          badge={process.badge}
          title={process.title}
          description={process.description}
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#F5C400]/20 to-transparent" />

          {process.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-[#F5C400]/12 group-hover:border-[#F5C400]/25 transition-all relative">
                <Icon name={step.icon} className="w-6 h-6 text-[#F5C400]" />
                <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#F5C400] text-[#1E3A6E] text-xs font-bold flex items-center justify-center shadow-gold">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
