"use client";

import { motion } from "framer-motion";
import { 
  PhoneCall, MessageCircle, Activity, Workflow,
  ShieldCheck, Zap, Shield, UserCheck, Layers,
  Wrench, Cog, Factory, Box
} from "lucide-react";

type DynamicCTAProps = {
  primaryCtaText?: string;
};

export default function DynamicCTA({
  primaryCtaText = "+91 9481763083",
}: DynamicCTAProps) {
  const row1 = [
    { text: "Prototype Manufacturing", icon: Wrench },
    { text: "Tool Design", icon: Cog },
    { text: "Precision CNC Machining", icon: Factory },
    { text: "Refurbishment Services", icon: Wrench },
    { text: "Sheet Metal & Fabrication", icon: Box },
    { text: "Industrial Valves", icon: Factory },
  ];

  const row2 = [
    { text: "ISO 9001:2015 Certified", icon: ShieldCheck },
    { text: "Micron Level Precision", icon: Activity },
    { text: "Rapid Lead Times", icon: Zap },
    { text: "No MOQ Policy", icon: Layers },
    { text: "Expert Tech Support", icon: UserCheck },
    { text: "Quality Assurance", icon: Shield },
  ];

  return (
    <section className="relative isolate bg-neutral-950 bg-square-checks px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, scale: 0.98, y: 20 },
          visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] sm:rounded-3xl px-5 py-8 sm:px-8 sm:py-12 text-center shadow-[0_0_80px_rgba(37,99,235,0.1)]"
      >
        
        {/* Flattened but vibrant blue background */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[#3b82f6]"
          style={{
            backgroundImage: "linear-gradient(180deg, #3b82f6 0%, #3b82f6 100%)",
          }}
        />

        <div className="relative z-10">
          {/* Badge */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
            className="mb-4"
          >
            <span className="inline-block rounded-full bg-black/5 backdrop-blur-md px-5 py-2 text-[10px] font-black tracking-[0.2em] text-white">
              Manufacturing Redefined
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } } }}
            className="mx-auto max-w-4xl font-black text-gray-950 tracking-[-0.03em] pb-2"
            style={{ fontSize: "clamp(35px, 7vw, 95px)", lineHeight: "0.98" }}
          >
            Build Your <br />
            <span className="text-white">Manufacturing Future.</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.4 } } }}
            className="mx-auto mt-5 max-w-2xl text-base sm:text-xl font-bold text-gray-900 leading-snug"
          >
            Stop experimenting. Start engineering your vision with 
            integrated precision manufacturing from Pinnacle.
          </motion.p>



          {/* Logo Carousel - Reverted to Original Gold Design */}
          <motion.div 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.8, duration: 1 } } }}
            className="relative mt-12 overflow-hidden"
          >
            <div className="mb-6 text-center">
              <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.3em] text-black underline underline-offset-[6px] decoration-black/20">
                Core Capabilities & Partnerships
              </span>
            </div>

            {/* Row 1 - Refined Horizontal Style */}
            <div className="flex w-max animate-marquee gap-3 sm:gap-5 py-2 sm:py-3">
              {[...row1, ...row1].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 min-w-[170px] sm:min-w-[240px] h-12 sm:h-20 rounded-xl sm:rounded-2xl bg-white/20 border border-white/10 px-4 sm:px-6 shadow-sm transition-transform hover:scale-105"
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-black shrink-0" />
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-black">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2 - Refined Horizontal Style */}
            <div className="flex w-max animate-marquee-reverse gap-3 sm:gap-5 py-2 sm:py-3">
              {[...row2, ...row2].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 min-w-[170px] sm:min-w-[240px] h-12 sm:h-20 rounded-xl sm:rounded-2xl bg-white/20 border border-white/10 px-4 sm:px-6 shadow-sm transition-transform hover:scale-105"
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-black shrink-0" />
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-black">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
