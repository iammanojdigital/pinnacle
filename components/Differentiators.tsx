"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  BarChart3,
  LineChart,
  Layers,
  ShieldCheck,
} from "lucide-react";

import Image from "next/image";
/* ── Count-up hook ── */
function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}

/* ── Shared card style ── */
const card = "group relative rounded-3xl bg-white/70 backdrop-blur-xl border p-7 sm:p-9 transition-all duration-500 hover:-translate-y-1";

/* ── Main Component ── */
export default function Differentiators() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-32"
    >
      {/* Decorative orbs - Hardware Accelerated to prevent scroll jank */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-[120px] pointer-events-none will-change-transform transform-gpu" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none will-change-transform transform-gpu" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* ── Section Header ── */}
        <div className="mx-auto mb-16 sm:mb-20 max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-5"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-black text-gray-900 tracking-[-0.03em] pb-2"
            style={{ fontSize: "clamp(35px, 4.5vw, 65px)", lineHeight: "1" }}
          >
            What Makes{" "}
            <span className="text-blue-600">Pinnacle</span>{" "}
            <span className="italic text-gray-400">Different</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 sm:mt-10 max-w-2xl text-[19px] sm:text-[21px] md:text-[23px] text-gray-500 font-medium leading-relaxed"
          >
            We don't operate like a traditional manufacturer. We provide 
            integrated precision engineering and rapid production systems.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">

          {/* ── Card 1: One Partner (lg: 5 cols, tall) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`${card} border-blue-100 hover:shadow-[0_24px_48px_rgba(37,99,235,0.1)] lg:col-span-5 lg:row-span-2 flex flex-col will-change-transform transform-gpu`}
          >
            <div className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-transform group-hover:scale-110">
              <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight relative">
              One Partner. Every Process.
              
              {/* The "Siri-style" Strategic Orb */}
              <div className="absolute -top-24 -right-12 w-32 h-32 flex items-center justify-center pointer-events-none select-none">
                {/* Outer Glow 1 */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-blue-400 blur-2xl flex-shrink-0 will-change-transform transform-gpu"
                  style={{ transformOrigin: "center center" }}
                />
                {/* Outer Glow 2 */}
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-indigo-400 blur-3xl flex-shrink-0 will-change-transform transform-gpu"
                  style={{ transformOrigin: "center center" }}
                />
                {/* Core Pulsating Orb */}
                <motion.div
                  animate={{ scale: [0.8, 1.1, 0.8], rotate: [0, 90, 180, 270, 360] }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                  className="relative h-16 w-16 rounded-full bg-gradient-to-tr from-blue-300 via-blue-500 to-indigo-400 shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center overflow-hidden flex-shrink-0 will-change-transform transform-gpu"
                >
                   {/* Internal "Siri" waves */}
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_60%)] animate-pulse" />
                   <div className="h-full w-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                </motion.div>
                
                {/* Orbiting Particle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute h-24 w-24 flex-shrink-0"
                  style={{ transformOrigin: "center center" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-blue-200 shadow-[0_0_10px_#bfdbfe]" />
                </motion.div>
              </div>
            </h3>
            <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-gray-500">
              From concept to component, we handle every stage of the manufacturing lifecycle with precision and speed.
            </p>

            {/* Strategy Steps — fills the mid section */}
            <div className="mt-6 sm:mt-8 space-y-4">
              {[
                { step: "01", label: "Design Optimization", desc: "Collaborate with experts to refine and optimize your designs for manufacturing.", pct: 100 },
                { step: "02", label: "Rapid Prototyping", desc: "Move from concept to physical prototype in days with our advanced technologies.", pct: 75 },
                { step: "03", label: "Precision Production", desc: "Scale production with high-precision CNC, injection molding, and more.", pct: 50 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 rounded-lg px-2.5 py-1.5 shrink-0">{item.step}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[17px] font-bold text-gray-800">{item.label}</p>
                    <p className="text-[15px] text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mini Growth Chart — bottom */}
            <div className="mt-6 sm:mt-8 flex-1 flex flex-col justify-end">
              <div className="flex items-end gap-1.5 sm:gap-2 h-24 sm:h-32">
                {[25, 40, 35, 55, 50, 70, 65, 85, 80, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true, margin: "-10px" }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className={`flex-1 rounded-md sm:rounded-lg ${i === 9 ? "bg-blue-600" : "bg-blue-200/60"}`}
                  />
                ))}
              </div>
              <p className="mt-3 text-[10px] font-bold text-blue-600/50 uppercase tracking-widest">Production Efficiency Index</p>
            </div>
          </motion.div>

          {/* ── Card 2: Advanced Technology (lg: 7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={`${card} border-orange-100 hover:shadow-[0_24px_48px_rgba(251,146,60,0.08)] lg:col-span-7 flex flex-col will-change-transform transform-gpu`}
          >
            <div className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 transition-transform group-hover:scale-110">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Advanced Technology Stack</h3>
            <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-gray-500">
              Access the future of manufacturing with DMLS, Vacuum Casting, High-Precision CNC, and 5-axis machining.
            </p>

            {/* Connected Pipeline with lines */}
            <div className="mt-6 sm:mt-8 flex-1 flex flex-col justify-end">
              <div className="relative flex items-start justify-between">
                {/* Connecting line behind the dots */}
                <div className="absolute top-[18px] sm:top-[22px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-orange-300 via-orange-200 to-gray-200" />

                {[
                  { label: "DMLS", desc: "3D Metal Print" },
                  { label: "CNC", desc: "Multi-Axis" },
                  { label: "Molding", desc: "Injection" },
                  { label: "Design", desc: "Tool & Die" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10px" }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative z-10 flex flex-col items-center gap-2 flex-1"
                  >
                    <div className={`h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 flex items-center justify-center text-[9px] sm:text-[10px] font-black shadow-sm ${i === 0 ? "border-orange-400 bg-orange-50 text-orange-600" : "border-gray-200 bg-white text-gray-400"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-gray-700 uppercase tracking-wider">{item.label}</span>
                    <span className="text-[8px] sm:text-[9px] font-medium text-gray-400 hidden sm:block">{item.desc}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom highlight */}
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-orange-50/60 border border-orange-100/50 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-orange-600">Integrated manufacturing workflow for maximum speed</span>
              </div>
            </div>
          </motion.div>

          {/* ── Card 3: Quality & Precision (lg: 7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={`${card} border-emerald-100 hover:shadow-[0_24px_48px_rgba(16,185,129,0.08)] lg:col-span-7 will-change-transform transform-gpu`}
          >
            <div className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-transform group-hover:scale-110">
              <LineChart className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Quality & Precision</h3>
            <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-gray-500">
              Zero-defect commitment with ISO 9001 standards and micron-level precision for every component.
            </p>
            {/* Live Metrics */}
            <div className="mt-6 sm:mt-8 space-y-3">
              {[
                { label: "Precision Rate", value: "99.9%", width: "99%", color: "bg-emerald-400" },
                { label: "Compliance", value: "ISO 9001", width: "100%", color: "bg-emerald-300" },
                { label: "Material Yield", value: "98%", width: "98%", color: "bg-emerald-200" },
              ].map((m, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                    <span>{m.label}</span>
                    <span className="text-gray-700">{m.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: m.width }}
                      viewport={{ once: true, margin: "-10px" }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className={`h-full rounded-full ${m.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 4: Scalable Production (lg: 6 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={`${card} border-blue-100 hover:shadow-[0_24px_48px_rgba(59,130,246,0.08)] lg:col-span-6 will-change-transform transform-gpu`}
          >
            <div className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-transform group-hover:scale-110">
              <Layers className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Scalable Production</h3>
            <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-gray-500">
               Seamlessly transition from single prototypes to high-volume manufacturing with our massive network capacity.
            </p>
            {/* Stacking Layers */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-2.5">
              {["Concept", "Prototype", "Batch", "Scale"].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className={`h-2 w-2 rounded-full shrink-0 ${i === 3 ? "bg-blue-500" : "bg-blue-200"}`} />
                  <span className={`text-[17px] font-bold ${i === 3 ? "text-blue-700" : "text-gray-400"}`}>{step}</span>
                  {i === 3 && <span className="ml-auto text-[10px] font-black text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full">ACTIVE</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 5: Industry Expertise (lg: 6 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={`${card} border-violet-100 hover:shadow-[0_24px_48px_rgba(139,92,246,0.08)] lg:col-span-6 will-change-transform transform-gpu`}
          >
            <div className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition-transform group-hover:scale-110">
              <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Industry Expertise</h3>
            <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-gray-500">
               Dedicated support for Aerospace, Defence, Semiconductor, and Automobile sectors with deep process knowledge.
            </p>
            {/* Milestone Timeline */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 border-l-2 border-violet-100 pl-5">
              {[
                { year: "Defence", event: "Aerospace Grade Precision" },
                { year: "Energy", event: "Renewable & Thermal Solutions" },
                { year: "Auto", event: "Automotive Part Production" },
                { year: "Semi", event: "Semiconductor Infrastructure" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[10px] font-black text-violet-500 bg-violet-50 px-2 py-1 rounded-md whitespace-nowrap shrink-0">{m.year}</span>
                  <span className="text-[17px] text-gray-500 font-medium">{m.event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Stats Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 sm:mt-20 rounded-3xl bg-white/50 backdrop-blur-xl border border-blue-100/60 p-8 sm:p-12 transform-gpu will-change-transform"
        >
          <StatsStrip />
        </motion.div>
      </div>
    </section>
  );
}

/* ── Stats Strip ── */
function StatsStrip() {
  const clients = useCountUp(500);
  const industries = useCountUp(10);
  const precision = useCountUp(99);
  const response = useCountUp(24);

  const stats = [
    { ref: clients.ref, value: `${clients.value}+`, label: "Global Clients" },
    { ref: industries.ref, value: `${industries.value}+`, label: "Industries Served" },
    { ref: precision.ref, value: `${precision.value}.9%`, label: "Precision Rate" },
    { ref: response.ref, value: `${response.value}/7`, label: "Expert Support" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center">
          <span ref={s.ref} className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {s.value}
          </span>
          <span className="mt-2 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
