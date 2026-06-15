import { motion } from "framer-motion";
import { useDoc } from "@/content/ContentContext";

export default function Terms() {
  const { title, updated, sections } = useDoc("terms");

  return (
    <>
      <section className="relative bg-[#1E3A6E] py-20 md:py-24 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-3">{title}</h1>
            <p className="text-white/50 text-sm">{updated}</p>
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
