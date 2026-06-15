import { motion } from "framer-motion";
import ContactForm from "../components/shared/ContactForm";
import { Icon } from "@/content/icons";
import { useDoc } from "@/content/ContentContext";

export default function Contact() {
  const { hero, infoHeading, infoIntro, info, form, mapEmbed } = useDoc("contact");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1E3A6E] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5C400]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#F5C400] bg-[#F5C400]/10 border border-[#F5C400]/25 px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
              {hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              {hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-[#1E3A6E] mb-2 relative">
                {infoHeading}
                <span className="block w-10 h-1 bg-[#F5C400] rounded-full mt-2" />
              </h2>
              <p className="text-[#4A4A4A]/65 text-sm leading-relaxed mt-4 mb-7">
                {infoIntro}
              </p>
              <div className="space-y-4">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#F5C400]/40 shadow-card hover:shadow-card-hover transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A6E]/6 flex items-center justify-center shrink-0 group-hover:bg-[#F5C400]/15 transition-colors">
                      <Icon name={item.icon} className="w-4 h-4 text-[#1E3A6E]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4A4A4A]/50 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-[#1E3A6E] hover:text-[#F5C400] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-[#1E3A6E]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
                <h3 className="text-xl font-serif font-bold text-[#1E3A6E] mb-1">{form.heading}</h3>
                <p className="text-sm text-[#4A4A4A]/55 mb-6">{form.subheading}</p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden h-[380px] border border-gray-200 shadow-card">
            <iframe
              src={mapEmbed}
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="The Tax Link Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
