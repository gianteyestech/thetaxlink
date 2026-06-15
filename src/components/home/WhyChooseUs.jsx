import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { Icon } from "@/content/icons";
import { useDoc } from "@/content/ContentContext";

export default function WhyChooseUs() {
  const { whyChooseUs } = useDoc("home");

  return (
    <section className="py-24 md:py-32 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden shadow-navy hidden lg:block">
            <img
              src={whyChooseUs.image}
              alt={whyChooseUs.imageAlt}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F3D]/70 via-[#0E1F3D]/10 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-serif text-2xl font-bold leading-snug">{whyChooseUs.quote}</p>
              <p className="text-white/50 text-sm mt-2">{whyChooseUs.quoteAuthor}</p>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              badge={whyChooseUs.badge}
              title={whyChooseUs.title}
              description={whyChooseUs.description}
              center={false}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {whyChooseUs.reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-5 hover:border-[#F5C400]/50 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F5C400] to-[#FFD633] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-10 h-10 rounded-xl bg-[#1E3A6E]/6 border border-[#1E3A6E]/8 flex items-center justify-center mb-3 group-hover:bg-[#F5C400]/15 group-hover:border-[#F5C400]/30 transition-all">
                    <Icon name={reason.icon} className="w-4 h-4 text-[#1E3A6E]" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A6E] mb-1.5 text-sm">{reason.title}</h3>
                  <p className="text-xs text-[#4A4A4A]/60 leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
