import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const highlights = [
  "Accounting and taxation services for individuals and businesses",
  "Business registration, bookkeeping, accounting, and tax filing",
  "Chartered Accountants Ireland qualification and ACCA-team support",
  "Technology and audit support through trusted collaboration",
];

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-navy">
                <img
                  src="https://thetaxlink.com/wp-content/uploads/elementor/thumbs/view-woman-working-as-economist-min-r35ilvcevcy73wuu076cwb3jtrxpzj5cf73t5z8wcy.jpg"
                  alt="Accounting services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F3D]/50 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block rounded-xl bg-white px-3 py-2 shadow-sm">
                    <img src="/the-taxlink-logo.svg" alt="The Tax Link" className="h-8 w-auto" />
                  </span>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-5 -right-5 bg-[#F5C400] rounded-2xl p-5 shadow-gold"
                initial={{ scale: 0, rotate: -6 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <p className="text-2xl font-bold text-[#1E3A6E]">CA</p>
                <p className="text-xs text-[#1E3A6E]/70 font-medium">Ireland Qualified</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionHeading
              badge="About Us"
              title="Expert Accounting & Taxation Services"
              description="At The Tax Link, we provide accounting, taxation, and business support tailored to individuals and businesses."
              center={false}
            />
            <ul className="space-y-3.5 mb-9">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F5C400]/15 border border-[#F5C400]/40 flex items-center justify-center mt-0.5 shrink-0">
                    <CheckCircle className="w-3 h-3 text-[#1E3A6E]" />
                  </div>
                  <span className="text-sm text-[#4A4A4A]/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about-us">
              <Button className="rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white px-7 h-11 text-sm font-medium shadow-navy/30 shadow-md">
                Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
