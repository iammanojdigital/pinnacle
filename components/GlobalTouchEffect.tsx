"use client";

import { useScroll, useSpring, motion, useTransform, useVelocity } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function GlobalTouchEffect() {
  const { scrollYProgress, scrollY } = useScroll();
  
  // Smooth out the scroll position for the aura
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track velocity to make the aura react to speed
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 50,
    damping: 20
  });

  // Transform hooks for the Aura - Enhanced for more visibility
  const auraTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const auraScale = useTransform(smoothVelocity, [-3000, 0, 3000], [2.5, 1, 2.5]);
  const auraOpacity = useTransform(smoothVelocity, [-3000, 0, 3000], [0.35, 0.15, 0.35]);
  const sidebarHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Perspective Grid Hooks
  const gridRotateX = useTransform(smoothProgress, [0, 1], [45, 25]);
  const gridTranslateZ = useTransform(smoothProgress, [0, 1], [-200, 0]);
  const gridY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden select-none mix-blend-screen">
      {/* 3D Perspective Grid (Blueprint Depth) */}
      <div className="absolute inset-0 [perspective:1000px] opacity-25">
        <motion.div
          style={{
            rotateX: gridRotateX,
            translateZ: gridTranslateZ,
            y: gridY,
          }}
          className="absolute inset-[-100%] border-t border-l border-blue-400/30"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />
      </div>

      {/* Cinematic Kinetic Aura (Backdrop lighting) */}
      <motion.div
        style={{
          top: auraTop,
          scale: auraScale,
          opacity: auraOpacity,
        }}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-blue-500/30 blur-[150px] will-change-transform z-0"
      />

      {/* Floating Atmospheric Dust Particles */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <ScrollParticle key={i} index={i} smoothVelocity={smoothVelocity} />
        ))}
      </div>

      {/* Ultra-Minimal Sidebar Progress */}
      <div className="fixed right-1 top-1/2 -translate-y-1/2 w-[2px] h-20 bg-white/5 rounded-full overflow-hidden z-20">
        <motion.div 
          style={{ height: sidebarHeight }}
          className="w-full bg-blue-500/30"
        />
      </div>
    </div>
  );
}

function ScrollParticle({ index, smoothVelocity }: { index: number; smoothVelocity: any }) {
  const randomX = useRef(Math.random() * 100);
  const randomY = useRef(Math.random() * 100);
  const randomSize = useRef(1 + Math.random() * 2);
  
  // Highly subtle drift based on scroll velocity
  const yOffset = useTransform(smoothVelocity, [-2000, 2000], [30, -30]);

  return (
    <motion.div
      style={{
        left: `${randomX.current}%`,
        top: `${randomY.current}%`,
        y: yOffset,
        width: randomSize.current,
        height: randomSize.current,
      }}
      className="absolute bg-blue-300/30 rounded-full blur-[1px]"
      animate={{
        opacity: [0.1, 0.4, 0.1],
      }}
      transition={{
        duration: 4 + Math.random() * 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.3
      }}
    />
  );
}
