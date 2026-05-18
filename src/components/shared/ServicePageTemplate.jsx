import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTASection from "../home/CTASection";

export default function ServicePageTemplate({ icon: Icon, color, title, subtitle, description, features, benefits }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1E3A6E] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5C400]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, -3, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 shadow-gold`}
            >
              <Icon className="w-7 h-7" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">{title}</h1>
            <p className="text-lg text-white/65 leading-relaxed">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-serif font-bold text-[#1E3A6E] mb-2 relative inline-block">
                Overview
                <span className="block w-12 h-1 bg-[#F5C400] rounded-full mt-2" />
              </h2>
              <div className="space-y-4 mt-6">
                {description.map((para, i) => (
                  <p key={i} className="text-[#4A4A4A]/70 leading-relaxed">{para}</p>
                ))}
              </div>
              <Link to="/contact" className="inline-block mt-9">
                <Button className="rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white px-7 h-11 font-medium shadow-navy/25 shadow-md">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-[#F8F9FC] rounded-2xl p-7 border border-gray-100">
                <h3 className="text-lg font-serif font-bold text-[#1E3A6E] mb-5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#F5C400] flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-[#1E3A6E]" />
                  </span>
                  What's Included
                </h3>
                <div className="space-y-2.5">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-[#F5C400]/40 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400] mt-2 shrink-0" />
                      <span className="text-sm text-[#1E3A6E]/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#1E3A6E] mb-3">Key Benefits</h2>
            <p className="text-[#4A4A4A]/65 max-w-lg mx-auto">Why businesses across Ireland choose The Tax Link for {title.toLowerCase()} services.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-gray-100 hover:border-[#F5C400]/40 transition-all duration-300 group overflow-hidden relative"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F5C400] to-[#FFD633] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-11 h-11 rounded-xl bg-[#1E3A6E]/6 flex items-center justify-center mb-4 group-hover:bg-[#F5C400]/15 transition-all duration-300 group-hover:scale-110">
                  <b.icon className="w-5 h-5 text-[#1E3A6E]" />
                </div>
                <h3 className="font-semibold text-[#1E3A6E] mb-2 text-sm">{b.title}</h3>
                <p className="text-sm text-[#4A4A4A]/60 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
