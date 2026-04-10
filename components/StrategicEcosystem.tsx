"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Zap, Code2, Cpu, ArrowRight, Activity, Target, Workflow, TrendingUp, Layers, PenTool, BarChart3 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const pillars = [
  {
    title: "Aerospace Industry",
    description: "End-to-end turnkey execution and high-precision component manufacturing for aerospace applications.",
    icon: Target,
    theme: "bg-[#111827] text-white border border-white/5",
    iconBg: "bg-white/10",
    metrics: ["MRO & GSE", "Structural Fabrications", "Aero Tooling Solutions"],
    glow: "shadow-[20px_20px_50px_-15px_rgba(37,99,235,0.1)]",
  },
  {
    title: "Oil & Gas",
    description: "Manufacturing, maintenance, and comprehensive overhauling of critical valves, dampers, and sealing systems.",
    icon: Activity,
    theme: "bg-[#111827] text-white border border-white/5",
    iconBg: "bg-white/10",
    metrics: ["Valves & Dampers", "Refurbishment", "Overhauling & Spares"],
    glow: "shadow-[20px_20px_50px_-15px_rgba(37,99,235,0.1)]",
  },
  {
    title: "The Problem We Solve",
    description: "We eliminate unplanned downtime from valve failures, resolving leakages in high-pressure systems.",
    icon: Zap,
    theme: "bg-[#111827] text-white border border-white/5",
    iconBg: "bg-white/10",
    metrics: ["Reduce OEM Lead Times", "Upgrade Aging Systems", "End Import Dependency"],
    glow: "shadow-[20px_20px_50px_-15px_rgba(37,99,235,0.1)]",
  },
  {
    title: "Turnkey Execution",
    description: "Concept development, engineering design validation, and complete reliability assurance under one roof.",
    icon: Workflow,
    theme: "bg-[#111827] text-white border border-white/5",
    iconBg: "bg-white/10",
    metrics: ["Design Validation", "Traceability Control", "Inspection Reports"],
    glow: "shadow-[20px_20px_50px_-15px_rgba(37,99,235,0.1)]",
  },
];

const PillarCardBackground = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      
      {/* Floating Mechanical Part Outlines (Subtle) */}
      {hasMounted && [...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%", 
            rotate: 0,
            opacity: 0.1 
          }}
          animate={{ 
            y: ["-10%", "110%"],
            rotate: 360 
          }}
          transition={{ 
            duration: 15 + i * 5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-12 h-12 stroke-blue-500/20 fill-none"
        >
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" strokeDasharray="10 10" />
            <path d="M 50 10 L 50 25 M 50 75 L 50 90 M 10 50 L 25 50 M 75 50 L 90 50" />
          </svg>
        </motion.div>
      ))}

      {/* Holographic Laser Scan - Moves on card Hover */}
      <motion.div
        variants={{
          hover: { left: "120%", opacity: [0, 1, 0] }
        }}
        initial={{ left: "-20%", opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 bottom-0 w-[2px] bg-orange-500/60 shadow-[0_0_15px_#f97316,0_0_30px_#f97316] z-0"
      />
    </div>
  );
};

export default function StrategicEcosystem() {
  return (
    <>
      <section className="relative bg-[#010204] pt-20 sm:pt-28 overflow-hidden">
        
        {/* ─── BACKGROUND LAYER (clipped independently) ─── */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1224] via-[#010204] to-[#0a1224] opacity-50" />
          <div className="absolute inset-0 bg-[#010204]/80" />

          {/* Animated Moving Grid */}
          <motion.div
            animate={{ x: [-20, 0], y: [-20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-40px] opacity-[0.3]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Animated Orbs */}
          <motion.div
             animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/30 blur-[120px] rounded-full"
          />
          <motion.div
             animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-500/20 blur-[150px] rounded-full"
          />
        </div>
        {/* ─── SECTION HEADER ─── */}
        <div className="relative z-10 w-full px-6 mb-12 sm:mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              {...fadeUp(0)}
              className="mb-4 sm:mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 sm:px-5 sm:py-2 backdrop-blur-xl shadow-lg"
            >
              <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
                Precision Manufacturing
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="font-black tracking-[-0.03em] text-white pb-2"
              style={{ fontSize: "clamp(32px, 4vw, 55px)", lineHeight: "1" }}
            >
              The Pinnacle{" "}
              <span className="relative inline-block text-blue-500">
                Ecosystem
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/20 rounded-full" />
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-4 sm:mt-6 mx-auto max-w-2xl text-sm sm:text-lg text-white/40 font-medium leading-relaxed px-4"
            >
              One Partner. Every Process. We handle the complexity of manufacturing so you can focus on innovation.
            </motion.p>
          </div>
        </div>

        {/* ─── 2x2 GRID CARDS ─── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pb-16 pt-4 sm:pt-8 w-full"
          >
              {pillars.slice(0, 2).map((pillar, i) => {
                return (
                  <motion.div
                    key={pillar.title}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    whileHover="hover"
                    className="h-full"
                  >
                    <div className="group relative block h-full">
                      <div className="relative h-full rounded-[2.2rem] border border-blue-500/5 p-[1px] shadow-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-slate-900/40 backdrop-blur-sm overflow-hidden">
                        
                        <div className="relative min-h-[500px] sm:min-h-0 h-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900/95 p-12 sm:p-10 z-10 transition-all duration-500 ease-[0.16,1,0.3,1] flex flex-col">
                          
                          <div className="absolute inset-0 z-0">
                            <PillarCardBackground />
                          </div>

                          <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-sm transition-all duration-500 ease-out group-hover:border-orange-500/50 group-hover:bg-orange-500/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                              <pillar.icon className="h-8 w-8 transition-colors duration-500 text-slate-400 group-hover:text-orange-400" />
                            </div>

                            <h3 className="text-[28px] sm:text-2xl font-black mb-5 tracking-tight text-white transition-colors group-hover:text-orange-500 uppercase leading-tight">
                              {pillar.title}
                            </h3>

                            <p className="text-base leading-relaxed text-slate-400 font-medium transition-colors group-hover:text-slate-200 mb-6">
                              {pillar.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
                              {pillar.metrics.map((metric, mi) => (
                                <div key={mi} className="flex items-center gap-2.5 group/item">
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover/item:bg-orange-500 transition-all group-hover/item:shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                                  <span className="text-[11px] font-black uppercase tracking-[0.12em] text-white/40 transition-colors group-hover/item:text-orange-500 leading-tight">
                                    {metric}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </div>

        {/* ─── BOTTOM CTA ─── */}
        <div className="relative z-10 w-full px-6 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative group p-[1px] rounded-full bg-gradient-to-r from-blue-500 to-orange-500 shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] transition-all duration-500">
              <div className="relative flex items-center gap-4 sm:gap-7 px-8 sm:px-16 py-6 sm:py-8 rounded-full bg-[#05070a] backdrop-blur-2xl transition-all group-hover:bg-[#080d15]">
                <Workflow className="h-6 w-6 sm:h-9 sm:w-9 text-blue-500 group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-xs sm:text-xl font-black tracking-tight text-white transition-colors text-center leading-tight">
                  Accelerated Growth. Radical Transparency. Complete Ownership.
                </span>
                <ArrowRight className="h-6 w-6 sm:h-9 sm:w-9 text-white/30 group-hover:translate-x-2 transition-transform group-hover:text-white shrink-0" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hidden-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hidden-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </>
  );
}
