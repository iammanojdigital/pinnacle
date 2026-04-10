"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TAGS = [
  { text: "#Precision", color: "bg-blue-100 text-blue-700", left: "5%", hideOnMobile: false },
  { text: "#Aerospace", color: "bg-orange-100 text-orange-700", left: "17%", hideOnMobile: true },
  { text: "#Prototyping", color: "bg-blue-50 text-blue-500", left: "30%", hideOnMobile: false },
  { text: "#Engineering", color: "bg-slate-100 text-slate-800", left: "46%", hideOnMobile: true },
  { text: "#CNC-Machining", color: "bg-blue-100 text-blue-700", left: "60%", hideOnMobile: false },
  { text: "#DMLS-3DPrint", color: "bg-orange-100 text-orange-700", left: "72%", hideOnMobile: true },
  { text: "#Automotive", color: "bg-blue-50 text-blue-500", left: "10%", hideOnMobile: true },
  { text: "#Manufacturing", color: "bg-slate-100 text-slate-800", left: "40%", hideOnMobile: false },
  { text: "#MassProduction", color: "bg-blue-100 text-blue-700", left: "54%", hideOnMobile: true },
  { text: "#ToolDesign", color: "bg-orange-100 text-orange-700", left: "84%", hideOnMobile: false },
  { text: "#Fabrication", color: "bg-blue-50 text-blue-500", left: "24%", hideOnMobile: true },
  { text: "#QualityControl", color: "bg-slate-100 text-slate-800", left: "66%", hideOnMobile: false },
  { text: "#VacuumCasting", color: "bg-blue-100 text-blue-700", left: "88%", hideOnMobile: true },
  { text: "#MicronPrecision", color: "bg-orange-100 text-orange-700", left: "36%", hideOnMobile: true },
];

const ROTATIONS = [-6, 4, -10, 2, 8, -3, 5, -8, 12, -4, 7, -15, 3, 9];

export default function FallingTags() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {TAGS.map((tag, i) => (
        <motion.span
          key={i}
          initial={{
            top: "0%",
            opacity: 0,
            rotate: 0,
            scale: 0.5,
          }}
          whileInView={{
            top: "calc(100% - 56px)",
            opacity: 1,
            rotate: ROTATIONS[i % ROTATIONS.length],
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.55,
            delay: 0.1 * i,
            ease: [0.33, 0, 0.97, 0.36],
          }}
          style={{
            position: "absolute",
            left: `clamp(2%, ${tag.left}, calc(100% - 130px))`,
          }}
          className={`
            ${tag.hideOnMobile ? 'hidden sm:inline-flex' : 'inline-flex'} 
            align-middle px-3 py-1.5 sm:px-6 sm:py-3 rounded-full text-[10px] sm:text-base font-extrabold
            shadow-lg border border-white/50 backdrop-blur-md
            whitespace-nowrap select-none overflow-hidden
            ${tag.color}
          `}
        >
          {tag.text}
        </motion.span>
      ))}
    </div>
  );
}
