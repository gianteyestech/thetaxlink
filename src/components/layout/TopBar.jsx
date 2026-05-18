import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#0E1F3D] text-white/80 py-2 text-xs hidden md:block border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="mailto:info@thetaxlink.com" className="flex items-center gap-1.5 hover:text-[#F5C400] transition-colors duration-200">
            <Mail className="w-3 h-3" />
            info@thetaxlink.com
          </a>
          <a href="tel:+353851330808" className="flex items-center gap-1.5 hover:text-[#F5C400] transition-colors duration-200">
            <Phone className="w-3 h-3" />
            +353 85 133 0808
          </a>
        </div>
        <div className="flex items-center gap-4 text-white/50">
          <a href="https://wa.me/353851330808" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C400] transition-colors duration-200 text-white/70">
            WhatsApp Us
          </a>
          <span className="w-px h-3 bg-white/20" />
          <span>Mon – Fri &nbsp;9AM – 6PM</span>
        </div>
      </div>
    </div>
  );
}