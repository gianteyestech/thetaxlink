import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  "Business Advice", "Accounts Preparation", "Taxation", "Bookkeeping",
  "Payroll", "Corporate & Secretarial", "Trademark Registration",
  "Technology", "Marketing", "Outsourcing", "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      toast.error("Please fill in required fields");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    toast.success("Message sent! We'll be in touch soon.");
  };

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#F5C400]/15 border border-[#F5C400]/30 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-[#1E3A6E]" />
        </div>
        <h3 className="text-xl font-serif font-bold text-[#1E3A6E] mb-2">Thank You!</h3>
        <p className="text-[#4A4A4A]/60 text-sm mb-6">We've received your message and will get back to you shortly.</p>
        <Button className="rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white px-6 h-10" onClick={() => { setSent(false); setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }); }}>
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="firstName" className="text-xs font-semibold text-[#1E3A6E]/70 uppercase tracking-wide">First Name *</Label>
          <Input id="firstName" placeholder="John" value={form.firstName} onChange={(e) => handleChange("firstName", e.target.value)} className="rounded-xl h-11 border-gray-200 focus:border-[#1E3A6E]/40 focus:ring-[#1E3A6E]/20" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName" className="text-xs font-semibold text-[#1E3A6E]/70 uppercase tracking-wide">Last Name</Label>
          <Input id="lastName" placeholder="Doe" value={form.lastName} onChange={(e) => handleChange("lastName", e.target.value)} className="rounded-xl h-11 border-gray-200 focus:border-[#1E3A6E]/40" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs font-semibold text-[#1E3A6E]/70 uppercase tracking-wide">Email *</Label>
          <Input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="rounded-xl h-11 border-gray-200 focus:border-[#1E3A6E]/40" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-xs font-semibold text-[#1E3A6E]/70 uppercase tracking-wide">Phone</Label>
          <Input id="phone" placeholder="+353..." value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="rounded-xl h-11 border-gray-200 focus:border-[#1E3A6E]/40" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs font-semibold text-[#1E3A6E]/70 uppercase tracking-wide">Service Required</Label>
        <Select value={form.service} onValueChange={(v) => handleChange("service", v)}>
          <SelectTrigger className="rounded-xl h-11 border-gray-200">
            <SelectValue placeholder="Select a service…" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-xs font-semibold text-[#1E3A6E]/70 uppercase tracking-wide">Message *</Label>
        <Textarea id="message" placeholder="Tell us about your needs…" value={form.message} onChange={(e) => handleChange("message", e.target.value)} className="rounded-xl min-h-[110px] border-gray-200 focus:border-[#1E3A6E]/40" />
      </div>
      <Button type="submit" disabled={sending} className="w-full rounded-full bg-[#1E3A6E] hover:bg-[#162d57] text-white h-12 font-medium text-sm shadow-navy/25 shadow-md">
        {sending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending…</> : <><Send className="w-4 h-4 mr-2" />Send Message</>}
      </Button>
    </form>
  );
}