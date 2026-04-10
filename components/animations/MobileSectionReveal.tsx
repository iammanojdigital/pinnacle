"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MobileSectionRevealProps {
  children: React.ReactNode;
}

export default function MobileSectionReveal({ children }: MobileSectionRevealProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we are on mobile (less than 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On Desktop, just return the content without animations to keep it snappy
  if (!isMobile) {
    return <>{children}</>;
  }

  // On Mobile, apply the reveal animation
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 1.11, 0.81, 0.99] // Smooth elastic-like ease
      }}
    >
      {children}
    </motion.div>
  );
}
