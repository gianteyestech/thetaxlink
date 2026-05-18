import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PageNotFound() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center py-20 bg-white">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6">
        <p className="text-[7rem] md:text-[9rem] font-serif font-bold text-[#1E3A6E]/8 leading-none mb-4 select-none">404</p>
        <h1 className="text-2xl font-serif font-bold text-[#1E3A6E] mb-2">Page Not Found</h1>
        <p className="text-[#4A4A4A]/60 text-sm mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link to="/">
            <Button className="rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white px-6 shadow-navy/25 shadow-md">
              <Home className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full border-[#1E3A6E]/20 text-[#1E3A6E] px-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}