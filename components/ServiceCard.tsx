"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  Megaphone,
  BarChart3,
  LayoutTemplate,
  Video,
  Bot,
  LineChart,
  ShoppingBag,
  Search,
  Fingerprint,
  Globe,
  Factory,
  Cog,
  Wrench,
  Microscope,
  Box,
} from "lucide-react";

const ICONS = {
  megaphone: Megaphone,
  chart: BarChart3,
  layout: LayoutTemplate,
  video: Video,
  bot: Bot,
  analytics: LineChart,
  shopping: ShoppingBag,
  search: Search,
  brand: Fingerprint,
  globe: Globe,
  factory: Factory,
  cog: Cog,
  wrench: Wrench,
  microscope: Microscope,
  box: Box,
};

type ServiceCardProps = {
  title: string;
  text: string;
  icon: keyof typeof ICONS;
  href: string;
};

const CardBackground = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      
      {/* Floating Mechanical Part Outlines (Subtle) - Only Render Client-Side to avoid Hydration Error */}
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

export default function ServiceCard({
  title,
  text,
  icon,
  href,
}: ServiceCardProps) {
  const Icon = ICONS[icon];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
      }}
      whileHover="hover"
      className="h-full"
    >
      <Link href={href} className="group relative block h-full">
        <div className="relative h-full rounded-[2.2rem] border border-blue-500/5 p-[1px] shadow-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-slate-900/40 backdrop-blur-sm overflow-hidden">
          
          {/* Main Card Shell - Industrial Tech Aesthetic */}
          <div
            className="
              relative h-full overflow-hidden rounded-[2.1rem] border border-white/5
              bg-slate-900/95 p-8 sm:p-10 z-10
              transition-all duration-500 ease-[0.16,1,0.3,1]
            "
          >
            {/* Background Animation Component - Deeply Layered */}
            <div className="absolute inset-0 z-0">
              <CardBackground />
            </div>

            {/* Main Content Content Container - Above Background */}
            <div className="relative z-10">
              {/* Icon - High Tech Style */}
              <div
                className="
                  mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl 
                  bg-white/5 border border-white/10 shadow-sm
                  transition-all duration-500 ease-out
                  group-hover:border-orange-500/50 group-hover:bg-orange-500/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]
                "
              >
                {Icon && <Icon className="h-6 w-6 transition-colors duration-500 text-slate-400 group-hover:text-orange-400" />}
              </div>

              {/* Typography - Precision Authority */}
              <h3 className="text-xl sm:text-2xl font-black mb-4 tracking-tight text-white transition-colors group-hover:text-orange-500 uppercase">
                {title}
              </h3>

              <p className="text-base leading-relaxed text-slate-400 font-medium transition-colors group-hover:text-slate-200">
                {text}
              </p>

              {/* Adaptive Learn More Link */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-sm font-black uppercase tracking-widest text-[#3b82f6]/60 group-hover:text-orange-500 transition-all duration-300">
                <span>Learn More</span>
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  <ArrowUpRight className="h-4 w-4 transform" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  );
}
