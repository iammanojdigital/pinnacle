"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  BarChart3,
  LineChart,
  Layers,
  ShieldCheck,
} from "lucide-react";

import Image from "next/image";
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
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none will-change-transform transform-gpu" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* ── Section Header ── */}
        <div className="mx-auto mb-16 sm:mb-20 max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-5"
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
            <span className="text-blue-500">Pinnacle</span>{" "}
            <span className="italic text-gray-400">Different</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 sm:mt-10 max-w-2xl text-[19px] sm:text-[21px] md:text-[23px] text-gray-500 font-medium leading-relaxed"
          >
            Beyond traditional manufacturing. We architect scalable,
            hyper-precision engineering solutions designed to accelerate
            your most critical innovations.
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
              Why Pinnacle?

              {/* The "Siri-style" Strategic Orb */}
              <div className="absolute -top-24 -right-12 w-32 h-32 flex items-center justify-center pointer-events-none select-none">
                {/* Outer Glow 1 */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-blue-500 blur-2xl flex-shrink-0 will-change-transform transform-gpu"
                  style={{ transformOrigin: "center center" }}
                />
                {/* Outer Glow 2 */}
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-blue-200 blur-3xl flex-shrink-0 will-change-transform transform-gpu"
                  style={{ transformOrigin: "center center" }}
                />
                {/* Core Pulsating Orb */}
                <motion.div
                  animate={{ scale: [0.8, 1.1, 0.8], rotate: [0, 90, 180, 270, 360] }}
                  transition={{
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                  className="relative h-16 w-16 rounded-full bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center overflow-hidden flex-shrink-0 will-change-transform transform-gpu"
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
              Engineering-first approach backed by high-precision manufacturing and structural expertise.
            </p>

            {/* Strategy Steps — fills the mid section */}
            <div className="mt-6 sm:mt-8 space-y-4">
              {[
                { step: "01", label: "Integrated Expertise", desc: "Mechanical, hydraulic, and precision engineering across aerospace and oil & gas.", pct: 100 },
                { step: "02", label: "Reduced Dependency", desc: "Strong indigenization and modernization capabilities reducing OEM dependency.", pct: 75 },
                { step: "03", label: "End-to-End Execution", desc: "Turnkey execution from design to validation, restoration, and commissioning.", pct: 50 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-[10px] font-black text-blue-500 bg-blue-50 rounded-lg px-2.5 py-1.5 shrink-0">{item.step}</span>
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
                    className={`flex-1 rounded-md sm:rounded-lg ${i === 9 ? "bg-blue-500" : "bg-blue-200/60"}`}
                  />
                ))}
              </div>
              <p className="mt-3 text-[10px] font-bold text-blue-500/50 uppercase tracking-widest">Production Efficiency Index</p>
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
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Advanced Facility</h3>
            <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-gray-500">
              3000 Sq. ft workspace featuring VMC 3/4-axis, CNC Turning, and Phillips Machine Tools.
            </p>

            {/* Connected Pipeline with lines */}
            <div className="mt-6 sm:mt-8 flex-1 flex flex-col justify-end">
              <div className="relative flex items-start justify-between">
                {/* Connecting line behind the dots */}
                <div className="absolute top-[18px] sm:top-[22px] left-[12%] right-[12%] h-[2px] bg-gray-200 overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  />
                </div>

                {[
                  { label: "VMC", desc: "3 & 4 Axis" },
                  { label: "Turning", desc: "CNC Lathes" },
                  { label: "Drilling", desc: "Radial" },
                  { label: "Welding", desc: "TIG/MIG" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10px" }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative z-10 flex flex-col items-center gap-2 flex-1"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        boxShadow: ["0 0 0px rgba(251,146,60,0)", "0 0 15px rgba(251,146,60,0.4)", "0 0 0px rgba(251,146,60,0)"]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                      className="h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 flex items-center justify-center text-[9px] sm:text-[10px] font-black border-orange-400 bg-orange-50 text-orange-600"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.div>
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
            className={`${card} border-blue-100 hover:shadow-[0_24px_48px_rgba(59,130,246,0.08)] lg:col-span-7 will-change-transform transform-gpu`}
          >
            <div className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-transform group-hover:scale-110">
              <LineChart className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Technical Specifications</h3>
            <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-gray-500">
              Engineered for extreme performance across Oil & Gas and Aerospace handling systems.
            </p>
            {/* Live Metrics */}
            <div className="mt-6 sm:mt-8 space-y-5">
              {[
                {
                  label: "Engine Tooling Solutions",
                  points: ["Built to print solutions", "Surface treatment and coating for wear resistance and corrosion protection"]
                },
                {
                  label: "Aircraft Ground Handling Equipment (GHE)",
                  points: ["Structural fabrication of load-bearing frames and handling rigs", "Integration of hydraulic and mechanical actuation systems"]
                },
                {
                  label: "Aerospace Jacks",
                  points: ["Manufacturing of aircraft tripod and axle jacks", "High-precision screw or hydraulic actuation mechanisms"]
                },
                {
                  label: "End-to-End Turnkey Execution",
                  points: ["Concept development and engineering design validation", "Documentation, inspection reports and traceability control"]
                },
              ].map((item, i) => (
                <div key={i} className="group/spec">
                  <h4 className="text-[13px] font-black text-blue-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item.label}
                  </h4>
                  <ul className="space-y-1.5 ml-3.5">
                    {item.points.map((p, pi) => (
                      <li key={pi} className="text-[15px] text-gray-500 font-medium leading-snug flex items-start gap-2">
                        <span className="text-blue-300 mt-1.5">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
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
            className={`${card} border-orange-100 hover:shadow-[0_24px_48px_rgba(251,146,60,0.08)] lg:col-span-6 will-change-transform transform-gpu`}
          >
            <div className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 transition-transform group-hover:scale-110">
              <Layers className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Certifications & Compliance</h3>
            <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-gray-500">
              Recognized by government and international bodies for quality management and trade capabilities.
            </p>
            {/* Stacking Layers */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-2.5 relative">
              {/* Vertical Animated Line */}
              <div className="absolute left-[3px] top-3 bottom-3 w-[2px] bg-orange-100 z-0 hidden sm:block">
                <motion.div
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                  className="absolute top-0 left-0 w-full bg-orange-500"
                />
              </div>
              {["MSME Registered", "ISO 9001 Certified", "Import-Export License", "AWS Certified Welding"].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ delay: i * 0.3, duration: 0.4 }}
                  className="flex items-center gap-4 relative z-10"
                >
                  <motion.div
                    initial={{ backgroundColor: "#fed7aa" }}
                    whileInView={{ backgroundColor: "#fb923c" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.35), duration: 0.3 }}
                    className="h-2 w-2 rounded-full shrink-0 hidden sm:block"
                  />
                  <motion.span
                    initial={{ color: "#9ca3af" }}
                    whileInView={{ color: "#1f2937" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.35), duration: 0.3 }}
                    className="text-[17px] font-bold"
                  >
                    {step}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.35), duration: 0.3 }}
                    className="ml-auto text-[10px] font-black text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full"
                  >
                    ACTIVE
                  </motion.span>
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
            className={`${card} border-blue-100 hover:shadow-[0_24px_48px_rgba(59,130,246,0.08)] lg:col-span-6 will-change-transform transform-gpu`}
          >
            <div className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-transform group-hover:scale-110">
              <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Special Processes</h3>
            <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-gray-500">
              Complete in-house control over material treatment, protection, and non-destructive testing execution.
            </p>
            {/* Milestone Timeline */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 border-l-2 border-blue-100 pl-5">
              {[
                { year: "Coating", event: "Polyurethane (PU) Coating" },
                { year: "Oxide", event: "Black Oxide & Sulphide Oxide" },
                { year: "Testing", event: "Non-Destructive Testing (NDT)" },
                { year: "Finish", event: "Anodizing Surface Treatment" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-2 py-1 rounded-md whitespace-nowrap shrink-0">{m.year}</span>
                  <span className="text-[17px] text-gray-500 font-medium">{m.event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
