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
    title: "Precision Engineering",
    description: "One Partner. Every Process. We transform concepts into tangible products with unparalleled accuracy and industry-specific expertise.",
    icon: Target,
    theme: "bg-[#111827] text-white border border-white/5",
    iconBg: "bg-white/10",
    metrics: ["Quality Assurance", "Technical Precision", "Industry Expertise"],
    glow: "shadow-[20px_20px_50px_-15px_rgba(37,99,235,0.1)]",
  },
  {
    title: "Flexible Manufacturing",
    description: "Rapid prototyping to mass production with no MOQ. Utilizing DMLS, Vacuum Casting, and advanced injection molding.",
    icon: Code2,
    theme: "bg-[#111827] text-white border border-white/5",
    iconBg: "bg-white/10",
    metrics: ["Instant Quoting", "No MOQ Policy", "Fast Lead Times"],
    glow: "shadow-[20px_20px_50px_-15px_rgba(37,99,235,0.1)]",
  },
  {
    title: "End-To-End Technology",
    description: "Specialized in Tool Design, Precision Machining, and Refurbishment. Complete technology partner for complex engineering needs.",
    icon: Cpu,
    theme: "bg-[#111827] text-white border border-white/5",
    iconBg: "bg-white/10",
    metrics: ["Tool Development", "CNC Machining", "Refurbishment"],
    glow: "shadow-[20px_20px_50px_-15px_rgba(37,99,235,0.1)]",
  },
  {
    title: "Reliable & Scalable",
    description: "Backed by 100% customer references. We provide a massive network capacity and stable partnership for all projects.",
    icon: Workflow,
    theme: "bg-[#111827] text-white border border-white/5",
    iconBg: "bg-white/10",
    metrics: ["Global Network", "Customer Satisfaction"],
    glow: "shadow-[20px_20px_50px_-15px_rgba(37,99,235,0.1)]",
  },
];

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
             className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/30 blur-[120px] rounded-full"
          />
          <motion.div
             animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full"
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
              {pillars.slice(0, 4).map((pillar, i) => {
                return (
                  <motion.div
                    key={pillar.title}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className="group relative z-10 flex flex-col w-full rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border border-white/5 bg-[#111827] shadow-2xl min-h-[350px] sm:min-h-[420px]"
                  >
                  <div className="relative mb-4 sm:mb-6 flex items-center justify-between">
                    <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:bg-white/10">
                      <pillar.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-[17px] sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight leading-tight text-white uppercase relative z-10">
                    {pillar.title}
                  </h3>

                  <p className="text-[13px] sm:text-[16px] leading-relaxed mb-5 sm:mb-6 font-medium tracking-tight text-white/40 group-hover:text-white transition-colors relative z-10">
                    {pillar.description}
                  </p>

                  <div className="mt-auto pt-4 sm:pt-5 border-t border-white/5 space-y-1.5 sm:space-y-2 relative z-20">
                    {pillar.metrics.map((metric, mi) => (
                      <div key={mi} className="flex items-center gap-2 sm:gap-2.5 group/item">
                        <div className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-blue-500/40 group-hover/item:bg-blue-500 transition-all shadow-[0_0_8px_rgba(59,130,246,0)] group-hover/item:shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                        <span className="text-[8px] sm:text-[11px] font-black uppercase tracking-[0.12em] text-white/40 transition-colors group-hover/item:text-white leading-tight">
                          {metric}
                        </span>
                      </div>
                    ))}
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
            <div className="relative group p-[1px] rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] transition-shadow duration-500">
              <div className="relative flex items-center gap-3 sm:gap-5 px-5 sm:px-10 py-3 sm:py-5 rounded-full bg-[#05070a] backdrop-blur-2xl transition-all group-hover:bg-[#080d15]">
                <Workflow className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-[10px] sm:text-base font-black tracking-tight text-white/80 text-center leading-tight">
                  Unified Growth. Full Transparency. 100% Client Ownership.
                </span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white/30 group-hover:translate-x-1.5 transition-transform group-hover:text-white shrink-0" />
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
