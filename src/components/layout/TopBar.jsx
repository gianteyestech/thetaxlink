import { Mail, Phone } from "lucide-react";
import { useDoc } from "@/content/ContentContext";

export default function TopBar() {
  const { company, topBar } = useDoc("global");

  return (
    <div className="bg-[#0E1F3D] text-white/80 py-2 text-xs hidden md:block border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-[#F5C400] transition-colors duration-200">
            <Mail className="w-3 h-3" />
            {company.email}
          </a>
          <a href={company.phoneHref} className="flex items-center gap-1.5 hover:text-[#F5C400] transition-colors duration-200">
            <Phone className="w-3 h-3" />
            {company.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-4 text-white/50">
          <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C400] transition-colors duration-200 text-white/70">
            {topBar.whatsappLabel}
          </a>
          <span className="w-px h-3 bg-white/20" />
          <span>{company.hoursShort}</span>
        </div>
      </div>
    </div>
  );
}
