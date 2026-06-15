import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Award } from "lucide-react";
import { useDoc } from "@/content/ContentContext";
import { asset } from "@/lib/asset";

export default function HeroSection() {
  const { hero } = useDoc("home");
  const { company } = useDoc("global");

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 bg-[#F5C400]/10 border border-[#F5C400]/40 text-[#1E3A6E] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
              {hero.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.1rem] font-serif font-bold text-[#1E3A6E] leading-[1.12] mb-5">
              {hero.titleLead}{" "}
              <span className="relative inline-block">
                {hero.titleHighlight}
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#F5C400] to-[#FFD633] rounded-full" />
              </span>
            </h1>

            <p className="text-lg text-[#4A4A4A]/70 leading-relaxed mb-8 max-w-xl">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link to={hero.primaryCtaPath}>
                <Button size="lg" className="rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white px-8 text-base font-medium shadow-[0_8px_24px_rgba(30,58,110,0.3)] hover:shadow-[0_12px_32px_rgba(30,58,110,0.4)] transition-all">
                  {hero.primaryCtaLabel}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={company.phoneHref}>
                <Button size="lg" variant="outline" className="rounded-full border-[#1E3A6E]/25 text-[#1E3A6E] hover:bg-[#1E3A6E]/5 px-8 text-base font-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  {company.phoneDisplay}
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-100">
              {hero.trustItems.map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5C400]" />
                  <span className="text-sm text-[#4A4A4A]/70 font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – Professional image with overlay card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(14,31,61,0.2)]">
              <img
                src={asset(hero.image)}
                alt={hero.imageAlt}
                className="w-full h-[480px] object-cover"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F3D]/80 via-[#0E1F3D]/20 to-transparent" />
              {/* Gold top strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />

              {/* Logo on image */}
              <div className="absolute bottom-7 left-7">
                <img
                  src={asset(company.logo)}
                  alt={company.name}
                  className="h-12 w-auto object-contain"
                />
                <p className="text-white/60 text-xs mt-1">{company.tagline}</p>
              </div>
            </div>

            {/* Floating stat 1 */}
            <motion.div
              className="absolute -left-8 top-10 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(30,58,110,0.18)] border border-gray-100 flex items-center gap-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#1E3A6E] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#F5C400]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1E3A6E]">{hero.floatCard1.title}</p>
                <p className="text-xs text-gray-400">{hero.floatCard1.subtitle}</p>
              </div>
            </motion.div>

            {/* Floating stat 2 */}
            <motion.div
              className="absolute -right-6 top-1/2 bg-[#F5C400] rounded-2xl px-5 py-4 shadow-[0_8px_24px_rgba(245,196,0,0.35)]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <p className="text-2xl font-bold text-[#1E3A6E]">{hero.floatCard2.title}</p>
              <p className="text-xs font-semibold text-[#1E3A6E]/70">{hero.floatCard2.subtitle}</p>
            </motion.div>

            {/* Floating stat 3 */}
            <motion.div
              className="absolute -right-6 bottom-20 bg-white rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(30,58,110,0.18)] border border-gray-100"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <p className="text-2xl font-bold text-[#1E3A6E]">{hero.floatCard3.title}</p>
              <p className="text-xs text-gray-400">{hero.floatCard3.subtitle}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
