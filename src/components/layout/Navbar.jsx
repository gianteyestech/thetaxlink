import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Business Advice", path: "/services/business-advice" },
  { name: "Accounts Preparation", path: "/services/accounts-preparation" },
  { name: "Taxation", path: "/services/taxation" },
  { name: "Bookkeeping", path: "/services/bookkeeping" },
  { name: "Payroll", path: "/services/payroll" },
  { name: "Corporate & Secretarial", path: "/services/corporate-secretarial" },
  { name: "Trademark Registration", path: "/services/trademark-registration" },
  { name: "Technology", path: "/services/technology" },
  { name: "Marketing", path: "/services/marketing" },
  { name: "Outsourcing", path: "/services/outsourcing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [location]);

  const navLinkClass = "text-sm font-medium text-[#1E3A6E] hover:text-[#F5C400] transition-colors duration-200";

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-navy" : "bg-white"} border-b border-[#1E3A6E]/8`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[80px]">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://media.base44.com/images/public/6a083fbc37b39dfd4b4eba8a/47cd8a492_TTL_logo-2.png"
            alt="The Tax Link"
            className="h-16 w-auto object-contain drop-shadow-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          <Link to="/" className={navLinkClass}>Home</Link>
          <Link to="/about" className={navLinkClass}>About</Link>

          <div className="relative group">
            <button className={`${navLinkClass} flex items-center gap-1`}>
              Services
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-2xl shadow-[0_12px_48px_rgba(30,58,110,0.15)] border border-[#1E3A6E]/8 p-2 w-60 overflow-hidden">
                <div className="px-3 py-2 mb-1 border-b border-gray-100">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4A4A4A]/50">Our Services</p>
                </div>
                {services.map((s) => (
                  <Link key={s.path} to={s.path} className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#1E3A6E]/80 hover:text-[#1E3A6E] hover:bg-[#F5C400]/8 rounded-xl transition-all duration-150">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400] shrink-0" />
                    {s.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link to="/services" className="flex items-center justify-center gap-1 px-3 py-2.5 text-sm font-semibold text-[#F5C400] hover:bg-[#F5C400]/8 rounded-xl transition-all duration-150">
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/contact" className={navLinkClass}>Contact</Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+353851330808" className="flex items-center gap-1.5 text-sm font-medium text-[#1E3A6E]/70 hover:text-[#1E3A6E] transition-colors">
            <Phone className="w-3.5 h-3.5" />
            +353 85 133 0808
          </a>
          <Link to="/contact">
            <Button size="sm" className="rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white px-5 h-9 text-sm font-medium shadow-navy/30 shadow-md transition-all hover:shadow-navy/50">
              Book Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#1E3A6E] hover:bg-[#1E3A6E]/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-5 space-y-1">
              <Link to="/" className="block py-2.5 text-sm font-medium text-[#1E3A6E]">Home</Link>
              <Link to="/about" className="block py-2.5 text-sm font-medium text-[#1E3A6E]">About</Link>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-[#1E3A6E]">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden pl-3 border-l-2 border-[#F5C400]">
                    {services.map((s) => (
                      <Link key={s.path} to={s.path} className="block py-2 text-sm text-[#1E3A6E]/70 hover:text-[#1E3A6E]">{s.name}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <Link to="/contact" className="block py-2.5 text-sm font-medium text-[#1E3A6E]">Contact</Link>
              <div className="pt-4 pb-2">
                <Link to="/contact">
                  <Button className="w-full rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white h-11">Book Free Consultation</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}