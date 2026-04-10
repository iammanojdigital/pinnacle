"use client";

import { motion } from "framer-motion";
import { 
  GiFactory,
  GiWindTurbine,
  GiOilPump,
  GiCog
} from "react-icons/gi";
import {
  MdOutlinePrecisionManufacturing,
  MdOutlineAirplanemodeActive,
  MdOutlineSdCard
} from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";

const techStack = [
  { name: "Aerospace & Defence", icon: MdOutlineAirplanemodeActive, color: "#3b82f6" },
  { name: "Oil and Gas", icon: GiOilPump, color: "#f97316" },
  { name: "Automobile", icon: IoCarSportSharp, color: "#3b82f6" },
  { name: "Thermal & Energy", icon: GiWindTurbine, color: "#f97316" },
  { name: "Semiconductor", icon: MdOutlineSdCard, color: "#3b82f6" },
  { name: "Precision Engineering", icon: MdOutlinePrecisionManufacturing, color: "#000000" },
  { name: "Industrial Products", icon: GiFactory, color: "#3b82f6" },
  { name: "Automation", icon: GiCog, color: "#f97316" },
];

export default function TechStack() {
  // Duplicate the list for seamless infinite scroll
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="relative bg-white py-6 sm:py-12 overflow-hidden border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 mb-5 sm:mb-8 text-center">
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-blue-500">
          Industries We Serve
        </span>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradients for smooth fade edge */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex items-center whitespace-nowrap gap-8 sm:gap-20 py-4 sm:py-8"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            delay: 0.5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedStack.map((tech, i) => (
            <div
              key={i}
              className="group flex items-center gap-2 sm:gap-4 transition-all duration-300"
            >
              <div 
                className="flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-xl sm:rounded-[2rem] bg-gray-50 border border-gray-100 transition-all group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] shrink-0"
              >
                <tech.icon 
                  className="h-6 w-6 sm:h-10 sm:w-10 transition-transform" 
                  style={{ color: tech.color }}
                />
              </div>
              <span className="text-[13px] sm:text-xl font-black text-gray-700 transition-colors group-hover:text-blue-500 tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
