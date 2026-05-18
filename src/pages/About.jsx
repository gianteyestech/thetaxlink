import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";

const values = [
  { icon: Heart, title: "Integrity", desc: "We operate with the highest ethical standards in everything we do." },
  { icon: Users, title: "Client First", desc: "Your success is our priority. We build lasting partnerships based on trust." },
  { icon: Award, title: "Excellence", desc: "We deliver exceptional quality and attention to detail in every engagement." },
  { icon: TrendingUp, title: "Growth Mindset", desc: "We help you think big and provide the tools and advice to get there." },
];

const milestones = [
  "Founded with a mission to simplify accounting for Irish businesses",
  "Expanded services to include payroll, corporate secretarial, and more",
  "Built a team of qualified chartered accountants and tax advisors",
  "Launched technology and marketing services for modern businesses",
  "Serving 500+ happy clients across Ireland and beyond",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1E3A6E] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5C400]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#F5C400] bg-[#F5C400]/10 border border-[#F5C400]/25 px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
              Your Trusted Financial Partner in Ireland
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              At The Tax Link, we combine deep expertise with a personal touch to help individuals and businesses manage their finances with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {[
              { icon: Target, color: "bg-[#1E3A6E]", title: "Our Mission", text: "To empower businesses and individuals in Ireland with expert accounting, tax, and advisory services that simplify complexity, ensure compliance, and drive sustainable growth." },
              { icon: Eye, color: "bg-[#F5C400]", iconColor: "text-[#1E3A6E]", title: "Our Vision", text: "To be Ireland's most trusted and innovative accounting and business advisory firm, known for delivering exceptional value and building lasting client relationships." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-card hover:shadow-card-hover hover:border-[#F5C400]/40 transition-all">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor || "text-white"}`} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1E3A6E] mb-3">{item.title}</h3>
                <p className="text-[#4A4A4A]/70 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <SectionHeading badge="Our Story" title="Built on Expertise, Driven by Results" center={false} />
              <p className="text-[#4A4A4A]/70 leading-relaxed mb-4 text-sm">
                The Tax Link was founded with a clear vision: to provide Irish businesses and individuals with accessible, expert financial services that make a real difference. Over the years, we've grown from a small tax advisory practice into a comprehensive business solutions provider.
              </p>
              <p className="text-[#4A4A4A]/70 leading-relaxed mb-8 text-sm">
                Our team of qualified professionals brings together decades of combined experience in accounting, taxation, payroll, and business advisory. We stay ahead of regulatory changes and leverage modern technology to deliver better outcomes for our clients.
              </p>
              <ul className="space-y-3">
                {milestones.map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F5C400]/15 border border-[#F5C400]/40 flex items-center justify-center mt-0.5 shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#1E3A6E]" />
                    </span>
                    <span className="text-sm text-[#4A4A4A]/70">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-navy relative">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=90&auto=format&fit=crop" alt="Modern Irish office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F3D]/80 via-[#0E1F3D]/20 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-5xl font-serif font-bold text-[#F5C400] mb-1">15+</p>
                  <p className="text-base font-medium text-white">Years of Excellence</p>
                  <p className="text-sm text-white/50">Serving Ireland with pride</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <SectionHeading badge="Our Values" title="What We Stand For" description="Our core values guide every decision we make and every interaction we have with our clients." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#F5C400]/50 hover:shadow-card-hover transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1E3A6E]/6 flex items-center justify-center mb-4 group-hover:bg-[#F5C400]/15 transition-colors">
                  <v.icon className="w-6 h-6 text-[#1E3A6E]" />
                </div>
                <h3 className="font-semibold text-[#1E3A6E] mb-2 text-sm">{v.title}</h3>
                <p className="text-sm text-[#4A4A4A]/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}