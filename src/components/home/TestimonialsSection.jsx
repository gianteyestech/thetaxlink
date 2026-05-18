import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const testimonials = [
  {
    name: "Sarah O'Brien",
    role: "Director, O'Brien Retail Ltd",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=85&auto=format&fit=crop&crop=face",
    text: "The Tax Link transformed our finances. Their expertise saved us thousands in tax liability and gave us the confidence to expand our business. Truly exceptional service.",
    stars: 5,
  },
  {
    name: "Michael Doyle",
    role: "Director, Doyle Construction Ltd",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=85&auto=format&fit=crop&crop=face",
    text: "Professional, responsive, and incredibly knowledgeable. They handle our accounts, payroll, and corporate tax with precision and always meet every deadline. Highly recommended!",
    stars: 5,
  },
  {
    name: "Aoife Murphy",
    role: "Founder, Murphy Consulting",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=85&auto=format&fit=crop&crop=face",
    text: "As a business owner, I needed advisors I could truly trust. The Tax Link made everything simple, stress-free, and delivered real savings. Their team is absolutely brilliant.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0E1F3D] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C400]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C400]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(245,196,0,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          badge="Client Testimonials"
          title="What Our Clients Say"
          description="Hear from business owners and professionals across Ireland who trust The Tax Link."
          light
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative bg-white/6 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#F5C400]/30 transition-all duration-300 group overflow-hidden"
            >
              <Quote className="w-8 h-8 text-[#F5C400]/20 absolute top-5 right-5" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#F5C400] text-[#F5C400]" />
                ))}
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#F5C400]/30" />
                <div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-white/45">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}