"use client";

import ContactForm from "@/components/contact/ContactForm";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { PhoneCall, Mail, MapPin, Building2, Clock, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const BlueprintLine = ({ delay = 0, className = "" }: { delay?: number, className?: string }) => (
  <motion.div
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.2 }}
    transition={{ duration: 2, delay, ease: "easeInOut" }}
    className={`absolute border-blue-500/20 ${className}`}
  />
);

export default function ContactClient() {
  const contactMethods = [
    {
      icon: PhoneCall,
      title: "Call Us",
      value: "+91 9481763083",
      href: "tel:+919481763083",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "9481763083",
      href: "https://wa.me/919481763083",
      color: "text-[#128C7E]",
      bg: "bg-[#128C7E]/10",
      border: "border-[#128C7E]/20",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@pinnacle-designsolutions.com",
      href: "mailto:info@pinnacle-designsolutions.com",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
  ];

  return (
    <main className="bg-[#05070a] text-white selection:bg-blue-500/30 min-h-screen overflow-hidden">
      {/* ── CINEMATIC HEADER ── */}
      <section className="relative pt-40 lg:pt-56 pb-20 overflow-hidden">
        {/* Generative Background Assets */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0a121e_0%,#05070a_100%)] opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] opacity-20" />
        </div>

        {/* Blueprint Decorative Lines */}
        <BlueprintLine className="top-20 left-0 w-full h-px border-t" delay={0.2} />
        <BlueprintLine className="top-0 left-40 w-px h-full border-l" delay={0.4} />

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT: TEXT & INFO */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
              >
                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                  Global Manufacturing Network
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-7xl lg:text-[100px] font-black tracking-tight mb-8 leading-[0.9]"
              >
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#60a5fa,#f97316)]">
                  The Future.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-2xl text-white/50 max-w-2xl font-medium leading-relaxed mb-12"
              >
                Precision manufacturing made effortless. Reach out to our engineering team and transform your concepts into world-class components.
              </motion.p>

              {/* Contact Grid */}
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                {contactMethods.map((method, idx) => (
                  <motion.a
                    key={idx}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="group relative flex flex-col items-center text-center p-8 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${method.bg} border ${method.border} text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]`}>
                      <method.icon className="h-7 w-7" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">{method.title}</span>
                    <span className="text-xs font-bold text-white uppercase tracking-tighter">{method.value}</span>
                  </motion.a>
                ))}
              </div>

              {/* HQ Marker */}
              <div className="flex items-center gap-4 text-white/30 font-mono text-[9px] tracking-[0.4em] uppercase">
                <div className="w-1.5 h-1.5 bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                HQ_LOCATED: SHIMOGA, INDIA
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="relative z-10"
               >
                 <ContactForm />
               </motion.div>
               {/* Decorative Scanner Line for Form */}
               <motion.div 
                 animate={{ top: ["0%", "100%", "0%"] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                 className="absolute left-[-20px] right-[-20px] h-px bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.4)] z-0 pointer-events-none"
               />
            </div>

          </div>
        </div>
      </section>

      {/* ── MAP & HQ DETAILS ── */}
      <section className="relative px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* MAP CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12 xl:col-span-8 relative group rounded-[3rem] border border-white/10 bg-white/5 overflow-hidden shadow-2xl h-[400px] lg:h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15480.854089069123!2d75.56846101153196!3d13.931818206502767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb96b79c944111d%3A0x6bba4671e7935478!2sShimoga%2C+Karnataka!5e0!3m2!1sen!2sin!4v1769259024312!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert opacity-60 contrast-[1.2] brightness-[0.8] hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
              />
              {/* Overlay Glass Border */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[3rem]" />
              {/* Coordinates Indicator */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl font-mono text-[10px] text-blue-400">
                LOCKED: 13.9318° N, 75.5685° E
              </div>
            </motion.div>

            {/* HQ DETAILS */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12 xl:col-span-4 flex flex-col gap-6"
            >
              <div className="flex-1 rounded-[3rem] bg-blue-600 p-10 sm:p-12 text-white relative overflow-hidden shadow-3xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl mb-8">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>

                  <h2 className="text-3xl font-black tracking-tighter mb-10">Global Headquarters</h2>
                  
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <MapPin className="h-6 w-6 text-blue-200 mt-1" />
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mb-2">Office Address</h4>
                        <p className="text-xl font-bold leading-tight">
                          No.329, Ashwathnagar<br />
                          Shimoga, Karnataka<br />
                          Pin: 577204, India
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-5 font-mono">
                      <Clock className="h-6 w-6 text-blue-200 mt-1" />
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mb-2">Operations</h4>
                        <p className="text-base font-bold">MON-SAT / 09:30 - 18:30</p>
                        <p className="text-xs text-blue-100 opacity-60 uppercase">Standard Business Hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10">
                     <a 
                       href="https://www.linkedin.com/company/pinnacle-design-solutions-manufacturing-pvt-ltd/"
                       target="_blank"
                       className="flex items-center gap-3 text-sm font-bold hover:text-orange-400 transition-colors"
                     >
                       <FaLinkedinIn />
                       <span>Connect on LinkedIn</span>
                     </a>
                  </div>
                </div>
              </div>

              {/* Quick Support Card */}
              <div className="rounded-[2.5rem] bg-white/5 border border-white/10 p-8 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                <div>
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Direct Line</h4>
                   <p className="text-lg font-black tracking-tight text-white group-hover:text-orange-500 transition-colors">+91 9481763083</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SCHEMA ── */}
      <WebPageSchema
        title="Contact Pinnacle Precision Manufacturing"
        description="Book a technical consultation with Pinnacle Designers. Precision manufacturing made effortless."
        url="https://pinnacle-designsolutions.com/contact"
      />
    </main>
  );
}
