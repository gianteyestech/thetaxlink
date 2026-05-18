import { motion } from "framer-motion";
import AnimatedCounter from "../shared/AnimatedCounter";
import { Calendar, Users, Briefcase, Building2 } from "lucide-react";

const stats = [
  { icon: Calendar, value: 15, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Briefcase, value: 10, suffix: "+", label: "Services Offered" },
  { icon: Building2, value: 300, suffix: "+", label: "Businesses Supported" },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 bg-[#1E3A6E] overflow-hidden">
      {/* Gold top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C400] to-transparent" />
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(245,196,0,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-[#F5C400]/15 group-hover:border-[#F5C400]/30 transition-all">
                <stat.icon className="w-5 h-5 text-[#F5C400]" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1.5 tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold bottom line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C400] to-transparent" />
    </section>
  );
}