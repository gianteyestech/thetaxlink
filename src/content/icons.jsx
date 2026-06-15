import {
  ArrowRight, Shield, CheckCircle, Phone, Award, Users, BadgeCheck, Briefcase,
  FileCheck, Laptop, Lightbulb, FileText, Calculator, BookOpen, Wallet, Building,
  Cpu, Megaphone, Globe, Globe2, TrendingUp, TrendingDown, Eye, Sparkles, Landmark,
  PiggyBank, PhoneCall, Search, Target, Cog, HeartHandshake, Star, Quote, Menu, X,
  ChevronDown, Mail, MapPin, Clock, MessageCircle, BriefcaseBusiness, Bell, BarChart3,
  Palette, HelpCircle,
} from "lucide-react";

// Central registry: every icon name that can appear in content JSON maps to a
// lucide-react component here. To expose a new icon to the CMS, add it above and below.
export const ICONS = {
  ArrowRight, Shield, CheckCircle, Phone, Award, Users, BadgeCheck, Briefcase,
  FileCheck, Laptop, Lightbulb, FileText, Calculator, BookOpen, Wallet, Building,
  Cpu, Megaphone, Globe, Globe2, TrendingUp, TrendingDown, Eye, Sparkles, Landmark,
  PiggyBank, PhoneCall, Search, Target, Cog, HeartHandshake, Star, Quote, Menu, X,
  ChevronDown, Mail, MapPin, Clock, MessageCircle, BriefcaseBusiness, Bell, BarChart3,
  Palette,
};

// Sorted list of available icon names — used by the CMS icon picker.
export const ICON_NAMES = Object.keys(ICONS).sort();

// Renders a lucide icon by its string name. Falls back to a neutral glyph so an
// unknown/empty name never crashes the page or the CMS preview.
export function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || HelpCircle;
  return <Cmp {...props} />;
}
