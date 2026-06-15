import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { useContentStore } from "@/content/ContentContext";

// Shown only in this browser when the CMS has unsaved drafts, so an editor knows
// the page they're viewing reflects live (unpublished) preview content.
export default function DraftBanner() {
  const { anyDraft } = useContentStore();
  if (!anyDraft) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-[#1E3A6E] px-4 py-2.5 text-xs font-medium text-white shadow-lg">
      <Eye className="h-4 w-4 text-[#F5C400]" />
      Previewing unsaved CMS changes
      <Link to="/admin" className="rounded-full bg-[#F5C400] px-3 py-1 font-semibold text-[#1E3A6E] hover:bg-[#FFD633]">
        Open editor
      </Link>
    </div>
  );
}
