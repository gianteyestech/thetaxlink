import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, FileCheck, Landmark, PiggyBank } from "lucide-react";

const features = [
  { icon: TrendingDown, title: "Tax Minimisation", desc: "Legally reduce your tax liability with expert planning strategies tailored to you." },
  { icon: FileCheck, title: "Revenue Compliance", desc: "Stay fully compliant with Irish Revenue requirements, on time, every time." },
  { icon: Landmark, title: "Capital Taxes", desc: "Strategic advice on CGT, CAT, stamp duty, and inheritance tax planning." },
  { icon: PiggyBank, title: "Maximise Reliefs", desc: "Identify and claim every available tax relief, credit, and deduction." },
];

export default function TaxPlanning() {
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
              Expert Tax Planning
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A6E] leading-tight mb-5">
              Smart Tax Strategies That Save You Money
            </h2>
            <p className="text-[#4A4A4A]/70 leading-relaxed mb-6 text-base">
              Our proactive tax planning approach ensures you take advantage of every legitimate opportunity to reduce your tax burden while maintaining full compliance with Irish tax legislation.
            </p>
            <p className="text-[#4A4A4A]/70 leading-relaxed mb-8 text-base">
              Whether you're a sole trader, a partnership, or a limited company, we craft a personalised tax strategy designed to protect your wealth and support your growth.
            </p>
            <Link to="/taxation">
              <Button className="rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white px-7 h-11 font-medium shadow-navy/25 shadow-md">
                Explore Tax Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <div className="relative">
            {/* Background image with overlay */}
            <div className="rounded-3xl overflow-hidden shadow-navy mb-5 hidden lg:block">
              <img
                src="/taxplanning.jpg"
                alt="Tax planning documents"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-[#0E1F3D]/30 rounded-3xl" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-[#F8F9FC] rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-[#F5C400]/40 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#F5C400]/15 group-hover:border-[#F5C400]/30 transition-all shadow-card">
                    <f.icon className="w-5 h-5 text-[#1E3A6E]" />
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
