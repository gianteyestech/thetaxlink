import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "../components/shared/ContactForm";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@thetaxlink.com", href: "mailto:info@thetaxlink.com" },
  { icon: Phone, label: "Call Us", value: "+353 85 133 0808", href: "tel:+353851330808" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us on WhatsApp", href: "https://wa.me/353851330808" },
  { icon: MapPin, label: "Location", value: "Ireland", href: null },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM", href: null },
];

export default function Contact() {
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
              Get in Touch With Us
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              Ready to simplify your finances? Book a free consultation or send us a message.
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
                Contact Information
                <span className="block w-10 h-1 bg-[#F5C400] rounded-full mt-2" />
              </h2>
              <p className="text-[#4A4A4A]/65 text-sm leading-relaxed mt-4 mb-7">
                We'd love to hear from you. Reach out via any of the methods below or fill in the contact form.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#F5C400]/40 shadow-card hover:shadow-card-hover transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A6E]/6 flex items-center justify-center shrink-0 group-hover:bg-[#F5C400]/15 transition-colors">
                      <info.icon className="w-4.5 h-4.5 text-[#1E3A6E] w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4A4A4A]/50 mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-[#1E3A6E] hover:text-[#F5C400] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-[#1E3A6E]">{info.value}</p>
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
                <h3 className="text-xl font-serif font-bold text-[#1E3A6E] mb-1">Book a Free Consultation</h3>
                <p className="text-sm text-[#4A4A4A]/55 mb-6">Fill in the form below and we'll get back to you within 24 hours.</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381838.678236!2d-9.0!3d53.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48669a0d42560341%3A0x4e1e3e17e2d7c30f!2sIreland!5e0!3m2!1sen!2s!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="The Tax Link Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}