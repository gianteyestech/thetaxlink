import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useDoc } from "@/content/ContentContext";
import { asset } from "@/lib/asset";

export default function Footer() {
  const { company, footer } = useDoc("global");

  const socials = [
    { label: "WhatsApp", href: company.whatsapp, icon: MessageCircle, external: true },
    { label: "Email", href: `mailto:${company.email}`, icon: Mail, external: false },
    { label: "Phone", href: company.phoneHref, icon: Phone, external: false },
  ];

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
                src={asset(company.logo)}
                alt={company.name}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-[#4A4A4A]/70 text-sm leading-relaxed mb-6 max-w-xs">
              {footer.blurb}
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
              {footer.servicesHeading}
            </h4>
            <ul className="space-y-2.5">
              {footer.serviceLinks.map((link) => (
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
              {footer.quickLinksHeading}
            </h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((link) => (
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
              {footer.contactHeading}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href={`mailto:${company.email}`} className="flex items-start gap-3 text-sm text-[#4A4A4A]/70 hover:text-[#1E3A6E] transition-colors duration-200">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#1E3A6E]" />
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.phoneHref} className="flex items-start gap-3 text-sm text-[#4A4A4A]/70 hover:text-[#1E3A6E] transition-colors duration-200">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#1E3A6E]" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A4A4A]/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#1E3A6E]" />
                {company.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A4A4A]/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#1E3A6E]" />
                {company.hoursLong}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E3A6E]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4A4A4A]/55">
            © {new Date().getFullYear()} {footer.copyright}
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
