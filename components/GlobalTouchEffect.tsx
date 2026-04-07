"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalTouchEffect() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // We can show it directly on touch events across all devices 
    const handlePointerDown = (e: PointerEvent) => {
      // Trigger effect only on touch-capable actions (mobile fingers or emulated generic taps)
      // Allow it to run universally if it's touch! 
      if (e.pointerType !== "touch" && window.innerWidth > 768) return; 

      const id = Date.now() + Math.random();
      setRipples(prev => [...prev.slice(-3), { id, x: e.clientX, y: e.clientY }]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== id));
      }, 2500);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  if (ripples.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {ripples.map((r) => (
        <div key={r.id}>
          {/* Inner high-energy flare */}
          <motion.div
            initial={{ width: 0, height: 0, opacity: 1, x: r.x, y: r.y }}
            animate={{ 
              width: 1000, height: 1000, opacity: 0, 
              x: r.x - 500, y: r.y - 500 
            }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="absolute rounded-full border-[3px] border-cyan-400 bg-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,1)]"
          />
          
          {/* Outer sonic boom ring */}
          <motion.div
            initial={{ width: 0, height: 0, opacity: 0.8, x: r.x, y: r.y }}
            animate={{ 
              width: 1500, height: 1500, opacity: 0, 
              x: r.x - 750, y: r.y - 750 
            }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.1 }}
            className="absolute rounded-full border-[5px] border-blue-500/60 shadow-[0_0_150px_rgba(59,130,246,1)]"
          />

          {/* Blinding Core blast point */}
          <motion.div
            initial={{ width: 40, height: 40, opacity: 1, x: r.x - 20, y: r.y - 20, scale: 1 }}
            animate={{ scale: 5, opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="absolute rounded-full bg-white blur-[4px] shadow-[0_0_80px_white]"
          />
        </div>
      ))}
    </div>
  );
}
