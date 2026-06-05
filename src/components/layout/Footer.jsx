import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const serviceLinks = [
  { name: "Business Advice", path: "/business-advice" },
  { name: "Accounts Preparation", path: "/accounts-preparation" },
  { name: "Taxation", path: "/taxation" },
  { name: "Bookkeeping", path: "/bookkeeping" },
  { name: "Payroll", path: "/payroll" },
  { name: "Corporate & Secretarial", path: "/corporate-secretarial" },
  { name: "Trademark Registration", path: "/trademark-registration" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "All Services", path: "/our-services" },
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
];

const socials = [
  { label: "WhatsApp", href: "https://wa.me/353851330866", icon: MessageCircle, external: true },
  { label: "Email", href: "mailto:info@thetaxlink.com", icon: Mail, external: false },
  { label: "Phone", href: "tel:+353851330866", icon: Phone, external: false },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#F8F9FC] text-[#4A4A4A] border-t border-[#1E3A6E]/10">
      {/* Gold accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/the-taxlink-logo.svg"
                alt="The Tax Link"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-[#4A4A4A]/70 text-sm leading-relaxed mb-6 max-w-xs">
              Expert Accounting &amp; Tax Solutions — helping you save more and grow faster.
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-10 h-10 rounded-xl bg-[#1E3A6E]/[0.06] hover:bg-[#1E3A6E] border border-[#1E3A6E]/10 hover:border-[#1E3A6E] text-[#1E3A6E] hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#1E3A6E] mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#F5C400] rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-[#4A4A4A]/70 hover:text-[#1E3A6E] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#1E3A6E] mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#F5C400] rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-[#4A4A4A]/70 hover:text-[#1E3A6E] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#1E3A6E] mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#F5C400] rounded-full" />
              Get In Touch
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:info@thetaxlink.com" className="flex items-start gap-3 text-sm text-[#4A4A4A]/70 hover:text-[#1E3A6E] transition-colors duration-200">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#1E3A6E]" />
                  info@thetaxlink.com
                </a>
              </li>
              <li>
                <a href="tel:+353851330866" className="flex items-start gap-3 text-sm text-[#4A4A4A]/70 hover:text-[#1E3A6E] transition-colors duration-200">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#1E3A6E]" />
                  +353 85 133 0866
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A4A4A]/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#1E3A6E]" />
                D24 NRA0
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A4A4A]/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#1E3A6E]" />
                Mon – Fri: 9:00AM – 6:00PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E3A6E]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4A4A4A]/55">
            © {new Date().getFullYear()} The Tax Link. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-[#4A4A4A]/55">
            <Link to="/privacy" className="hover:text-[#1E3A6E] transition-colors">Privacy Policy</Link>
            <span className="w-px h-3 bg-[#1E3A6E]/15" />
            <Link to="/terms" className="hover:text-[#1E3A6E] transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
