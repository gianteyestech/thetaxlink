import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, CheckCircle, FileCheck, Laptop, Phone } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";

const coreServices = [
  "Business registration and setup support",
  "Bookkeeping, accounting, and tax filing",
  "Tax planning and strategic financial advice",
  "Software, website, and technology solutions",
];

const strengths = [
  {
    icon: BadgeCheck,
    title: "Qualified Expertise",
    desc: "Led by Chartered Accountancy experience through Chartered Accountants Ireland and supported by an ACCA-skilled team.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Growth Focus",
    desc: "We help organisations access the right professional skills without long hiring cycles or fixed employment contracts.",
  },
  {
    icon: Laptop,
    title: "Digital Capability",
    desc: "Alongside accounting and taxation, The Tax Link supports businesses with software, websites, and broader technology services.",
  },
  {
    icon: FileCheck,
    title: "Audit Support",
    desc: "Professional audit services are available through strategic collaboration with trusted partners.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1E3A6E] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#F5C400] bg-[#F5C400]/10 border border-[#F5C400]/25 px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
              Expert Accounting & Taxation Services
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              We provide expert accounting, taxation, and business support tailored to individuals and businesses, helping you manage compliance and financial decisions with confidence.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/45 mt-8">
              <Link to="/" className="hover:text-[#F5C400] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <SectionHeading
                badge="About"
                title="Let Us Handle the Numbers"
                description="The Tax Link brings together accounting, taxation, financial planning, and practical business support under one professional platform."
                center={false}
              />
              <p className="text-[#4A4A4A]/70 leading-relaxed mb-4 text-sm">
                At The Tax Link, we specialise in accounting and taxation services tailored to individuals and businesses. With a commitment to accuracy, compliance, and efficiency, our team supports seamless financial management, tax planning, and reporting.
              </p>
              <p className="text-[#4A4A4A]/70 leading-relaxed mb-7 text-sm">
                Whether you need business registration, bookkeeping, accounting, tax filing, or strategic financial advice, we help you navigate finance with clarity so you can focus on growing your business.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {coreServices.map((service) => (
                  <li key={service} className="flex items-start gap-3 rounded-xl bg-[#F8F9FC] border border-gray-100 p-4">
                    <CheckCircle className="w-4 h-4 text-[#F5C400] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#4A4A4A]/75 leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="inline-flex items-center rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white px-6 h-11 text-sm font-medium shadow-navy/30 shadow-md transition-colors">
                    Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
                <a href="tel:+353851330866" className="inline-flex items-center rounded-full border border-[#1E3A6E]/20 text-[#1E3A6E] hover:bg-[#1E3A6E]/5 px-6 h-11 text-sm font-medium transition-colors">
                  <Phone className="w-4 h-4 mr-2" /> +353 85 133 0866
                </a>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-navy relative">
                <img src="https://thetaxlink.com/wp-content/uploads/elementor/thumbs/view-woman-working-as-economist-min-r35ilvcevcy73wuu076cwb3jtrxpzj5cf73t5z8wcy.jpg" alt="Accounting services" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F3D]/80 via-[#0E1F3D]/20 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">Accuracy, compliance, and practical support for growing businesses.</p>
                  <p className="text-sm text-white/55 mt-2">The Tax Link professional platform</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-start">
            <div>
              <SectionHeading
                badge="Skills"
                title="The Right Skills for Your Business Growth"
                description="Growing organisations need qualified support, especially when competition is increasing and teams are racing against time."
                center={false}
              />
              <p className="text-sm text-[#4A4A4A]/70 leading-relaxed mb-4">
                The Tax Link helps businesses access suitable professional skills without going through a lengthy hiring process or entering fixed contracts.
              </p>
              <p className="text-sm text-[#4A4A4A]/70 leading-relaxed">
                With Chartered Accountants Ireland qualification, KPMG Ireland experience, and ACCA-team capability, we understand the accounting, tax, audit, and operational skills your business needs to get the job done.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {strengths.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#F5C400]/50 hover:shadow-card-hover transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A6E]/6 flex items-center justify-center mb-4 group-hover:bg-[#F5C400]/15 transition-colors">
                    <item.icon className="w-5 h-5 text-[#1E3A6E]" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A6E] mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A]/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 rounded-3xl bg-[#F8F9FC] border border-gray-100 p-8 md:p-10">
            <div className="grid md:grid-cols-[0.9fr,1.1fr] gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest bg-[#F5C400]/10 text-[#1E3A6E] border border-[#F5C400]/30 px-4 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
                  Technology & Audit
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1E3A6E] leading-tight">
                  Digital solutions with financial transparency
                </h2>
              </div>
              <div>
                <p className="text-sm text-[#4A4A4A]/70 leading-relaxed mb-4">
                  The Tax Link also delivers IT solutions including software development, website development, and wider technology services for businesses that need a stronger digital presence.
                </p>
                <p className="text-sm text-[#4A4A4A]/70 leading-relaxed">
                  Through trusted partner collaboration, we also support professional audit services, combining innovation with financial transparency and compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-[#4A4A4A]/65 max-w-2xl mx-auto leading-relaxed">
              We hope you enjoy our professional platform as much as we enjoy offering it to you. For questions or comments, contact us at info@thetaxlink.com.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
