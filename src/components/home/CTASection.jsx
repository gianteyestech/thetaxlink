import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useDoc } from "@/content/ContentContext";

export default function CTASection() {
  const { cta } = useDoc("home");
  const { company } = useDoc("global");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-[#1E3A6E] overflow-hidden"
        >
          {/* Gold top strip */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
          {/* Background geometry */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#F5C400]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/3 rounded-full blur-2xl -translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10 text-center px-8 py-16 md:py-20">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest bg-[#F5C400]/15 border border-[#F5C400]/30 text-[#F5C400] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
              {cta.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-serif font-bold text-white leading-tight mb-5 max-w-2xl mx-auto">
              {cta.title}
            </h2>
            <p className="text-white/65 text-lg max-w-xl mx-auto mb-10">
              {cta.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to={cta.primaryCtaPath}>
                <Button size="lg" className="rounded-full bg-[#F5C400] hover:bg-[#FFD633] text-[#1E3A6E] px-9 h-13 text-base font-semibold shadow-gold hover:shadow-[0_8px_32px_rgba(245,196,0,0.45)] transition-all">
                  {cta.primaryCtaLabel} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={company.phoneHref}>
                <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/8 px-9 h-13 text-base font-medium transition-all">
                  <Phone className="w-4 h-4 mr-2" /> {company.phoneDisplay}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
