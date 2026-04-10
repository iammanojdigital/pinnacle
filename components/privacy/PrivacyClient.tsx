"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from "lucide-react";

const BlueprintGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#05070a_100%)]" />
  </div>
);

export default function PrivacyClient() {
  const sections = [
    {
      icon: ShieldCheck,
      title: "Data Protection",
      content: "Pinnacle Design Solutions & Manufacturing ('we', 'our', 'us') respects your privacy and is committed to protecting the personal information you share with us using industrial-grade security protocols."
    },
    {
      icon: Eye,
      title: "Information We Collect",
      items: [
        "Identity Data: Name, company name, and professional role.",
        "Contact Data: Email address and phone numbers provided via inquiry forms.",
        "Technical Data: IP address, browser type, and navigation patterns for system optimization.",
        "Inquiry Data: Specific project details and blueprints shared for manufacturing consultation."
      ]
    },
    {
      icon: Lock,
      title: "How We Use Information",
      items: [
        "To provide precise technical consultations and manufacturing quotes.",
        "To improve our digital blueprint systems and website performance.",
        "To maintain service-related communication regarding your ongoing projects.",
        "To comply with ISO 9001:2015 record-keeping requirements."
      ]
    },
    {
      icon: FileText,
      title: "Data Security",
      content: "We implement robust physical, electronic, and managerial procedures to safeguard and secure the information we collect online. However, please be aware that no method of transmission over the internet is 100% secure."
    }
  ];

  return (
    <main className="bg-[#05070a] text-white selection:bg-blue-500/30 min-h-screen">
      {/* ── CINEMATIC HEADER ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <BlueprintGrid />
        
        <div className="relative max-w-4xl mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-white/40 hover:text-blue-500 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Return to System
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-4"
          >
            Privacy <span className="text-blue-500">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-mono tracking-widest text-white/30 uppercase"
          >
            Revision: v2.1 // Last Updated: Jan 2026
          </motion.p>
        </div>
      </section>

      {/* ── CONTENT BODY ── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-white/10"
            >
              <div className="absolute left-[-13px] top-0 h-6 w-6 rounded-lg bg-blue-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <section.icon size={12} />
              </div>

              <h2 className="text-2xl font-black tracking-tight mb-4 uppercase">{section.title}</h2>
              
              {section.content && (
                <p className="text-white/60 leading-relaxed font-medium">
                  {section.content}
                </p>
              )}

              {section.items && (
                <ul className="space-y-3 mt-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/50 text-sm leading-relaxed">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white/5 border border-white/10 p-10 text-center"
          >
            <h3 className="text-xl font-bold mb-4">Privacy Inquiries</h3>
            <p className="text-white/40 text-sm mb-6 max-w-md mx-auto">
              If you have any questions regarding this policy or your data rights, please contact our security team.
            </p>
            <a
              href="mailto:info@pinnacle-designsolutions.com"
              className="inline-block px-8 py-3 rounded-xl bg-blue-500 font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
            >
              Email Protocol
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="py-20 flex justify-center opacity-10">
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
    </main>
  );
}
