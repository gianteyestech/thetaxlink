import { motion } from "framer-motion";

export default function SectionHeading({ badge, title, description, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}
    >
      {badge && (
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${
          light
            ? "bg-white/10 text-[#F5C400] border border-[#F5C400]/20"
            : "bg-[#F5C400]/10 text-[#1E3A6E] border border-[#F5C400]/30"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${light ? "bg-[#F5C400]" : "bg-[#F5C400]"}`} />
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-bold leading-tight mb-4 ${
        light ? "text-white" : "text-[#1E3A6E]"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${
          light ? "text-white/65" : "text-[#4A4A4A]/70"
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}