import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useDoc } from "@/content/ContentContext";

export default function WhatsAppButton() {
  const { company } = useDoc("global");

  return (
    <motion.a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}
