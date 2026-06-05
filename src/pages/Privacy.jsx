import { motion } from "framer-motion";

const sections = [
  { title: "1. Introduction", text: "The Tax Link (\u201cwe\u201d, \u201cour\u201d, \u201cus\u201d) is committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your personal data in accordance with the General Data Protection Regulation (GDPR) and Irish data protection legislation." },
  { title: "2. Information We Collect", text: "We may collect the following information: your name, email address, phone number, business details, financial information necessary for providing our services, and any other information you voluntarily provide to us through our website, email, or phone communications." },
  { title: "3. How We Use Your Information", text: "We use your personal data to provide accounting, tax, and advisory services; respond to enquiries; send relevant updates about our services; comply with legal obligations; and improve our website and services." },
  { title: "4. Data Security", text: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. We use industry-standard encryption and security protocols." },
  { title: "5. Data Sharing", text: "We do not sell, trade, or share your personal data with third parties except where necessary to provide our services, comply with legal obligations, or with your explicit consent." },
  { title: "6. Your Rights", text: "Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to the processing of your personal data. To exercise these rights, please contact us at info@thetaxlink.com." },
  { title: "7. Cookies", text: "Our website may use cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings." },
  { title: "8. Contact Us", text: "For any questions regarding this privacy policy, please contact us at info@thetaxlink.com or call +353 85 133 0866." },
];

export default function Privacy() {
  return (
    <>
      <section className="relative bg-[#1E3A6E] py-20 md:py-24 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5C400] via-[#FFD633] to-[#F5C400]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-3">Privacy Policy</h1>
            <p className="text-white/50 text-sm">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-serif font-bold text-[#1E3A6E] mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F5C400] shrink-0" />
                  {s.title}
                </h2>
                <p className="text-[#4A4A4A]/70 leading-relaxed text-sm pl-5">{s.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
