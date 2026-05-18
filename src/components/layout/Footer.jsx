import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { name: "Business Advice", path: "/services/business-advice" },
  { name: "Accounts Preparation", path: "/services/accounts-preparation" },
  { name: "Taxation", path: "/services/taxation" },
  { name: "Bookkeeping", path: "/services/bookkeeping" },
  { name: "Payroll", path: "/services/payroll" },
  { name: "Corporate & Secretarial", path: "/services/corporate-secretarial" },
  { name: "Trademark Registration", path: "/services/trademark-registration" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "All Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E1F3D] text-white">
      {/* Gold accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <div className="inline-block bg-white rounded-xl px-3 py-2 shadow-sm">
                <img
                  src="https://media.base44.com/images/public/6a083fbc37b39dfd4b4eba8a/47cd8a492_TTL_logo-2.png"
                  alt="The Tax Link"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Expert accounting, tax, and business advisory services helping individuals and businesses thrive in Ireland.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://wa.me/353851330808" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-[#F5C400]/20 border border-white/10 hover:border-[#F5C400]/30 flex items-center justify-center transition-all text-xs font-bold">
                W
              </a>
              <a href="mailto:info@thetaxlink.com"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-[#F5C400]/20 border border-white/10 hover:border-[#F5C400]/30 flex items-center justify-center transition-all">
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a href="tel:+353851330808"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-[#F5C400]/20 border border-white/10 hover:border-[#F5C400]/30 flex items-center justify-center transition-all">
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#F5C400] rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-[#F5C400] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#F5C400] rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-[#F5C400] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#F5C400] rounded-full" />
              Get In Touch
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:info@thetaxlink.com" className="flex items-start gap-3 text-sm text-white/50 hover:text-[#F5C400] transition-colors duration-200">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  info@thetaxlink.com
                </a>
              </li>
              <li>
                <a href="tel:+353851330808" className="flex items-start gap-3 text-sm text-white/50 hover:text-[#F5C400] transition-colors duration-200">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  +353 85 133 0808
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Ireland
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                Mon – Fri: 9:00AM – 6:00PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} The Tax Link. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/35">
            <Link to="/privacy" className="hover:text-[#F5C400] transition-colors">Privacy Policy</Link>
            <span className="w-px h-3 bg-white/15" />
            <Link to="/terms" className="hover:text-[#F5C400] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}