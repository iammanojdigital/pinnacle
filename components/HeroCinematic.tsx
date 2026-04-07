"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect, Suspense } from "react";
import InteractiveNetwork from "./ui/InteractiveNetwork";
import {
  ArrowRight,
  Globe,
  Shield,
  Activity,
  Layers,
  Cpu,
  Settings,
  Zap,
  Maximize2,
  Minimize2,
  MessageCircle
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Environment, PerspectiveCamera, Stars } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/models/engine.glb");

type HeroCinematicProps = {
  onCallbackClick?: () => void;
};

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

// ──── ADVANCED HUD CURSOR SUB-COMPONENT ────
const AdvancedHUDCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number; color?: string }[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  // Smoother, "lazier" spring for less aggressive movement
  const springX = useSpring(mouseX, { damping: 40, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 120 });

  const [coords, setCoords] = useState({ x: 0, y: 0, lat: 0, long: 0 });

  useEffect(() => {
    setHasMounted(true);
    let sparkId = 0;
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      mouseX.set(clientX);
      mouseY.set(clientY);

      const lat = (clientY / window.innerHeight) * 180 - 90;
      const long = (clientX / window.innerWidth) * 360 - 180;
      setCoords({
        x: Math.round(clientX),
        y: Math.round(clientY),
        lat: Number(lat.toFixed(2)),
        long: Number(long.toFixed(2))
      });

      // Add a subtle spark pulse with random colors (blue/orange)
      if (Math.random() > 0.75) {
        const id = sparkId++;
        const isOrange = Math.random() > 0.7;
        setSparks(prev => [...prev.slice(-20), { id, x: clientX, y: clientY, color: isOrange ? "#f97316" : "#60a5fa" }]);
        setTimeout(() => {
          setSparks(prev => prev.filter(s => s.id !== id));
        }, 1000);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Background Sparks (Blue & Orange) */}
      <div className="fixed inset-0 z-[90] pointer-events-none overflow-hidden">
        {hasMounted && sparks.map(spark => (
          <motion.div
            key={spark.id}
            initial={{ opacity: 0.4, scale: 1, x: spark.x, y: spark.y }}
            animate={{
              opacity: 0,
              scale: 0,
              y: spark.y + (Math.random() * 30 - 15),
              x: spark.x + (Math.random() * 30 - 15)
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-1 h-1 rounded-full blur-[1px]"
            style={{ backgroundColor: spark.color }}
          />
        ))}
      </div>

      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 z-[100] pointer-events-none hidden lg:block"
      >
        <div className="relative group">
          {/* Main HUD Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-blue-500/20" />

          {/* Orbiting Orange Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500 rounded-full" />

          {/* Minimalist Coordinate Readout */}
          <div className="absolute top-6 left-6 p-2 bg-black/40 backdrop-blur-sm border border-white/5 rounded flex flex-col gap-0.5 font-mono text-left">
            <div className="flex gap-3 text-[9px] text-white/40">
              <span>X:{coords.x}</span>
              <span>Y:{coords.y}</span>
            </div>
            <div className="flex gap-3 text-[8px] text-blue-400/50 font-bold tracking-tighter">
              <span>LAT:{coords.lat}°</span>
              <span>LNG:{coords.long}°</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// ──── LEFT SIDE: BLUEPRINT CAD DRAWINGS ────
const BlueprintCAD = () => {
  return (
    <div className="absolute inset-y-0 left-0 w-1/2 z-0 opacity-20 pointer-events-none overflow-hidden">
      {/* Drawing of a Micrometer */}
      <svg viewBox="0 0 400 300" className="absolute top-[20%] left-[10%] w-[300px] h-auto fill-none">
        <motion.path
          d="M 50,150 L 150,150 M 150,120 L 150,180 M 150,150 L 250,150 M 240,140 L 260,140 L 260,160 L 240,160 Z M 50,130 Q 30,130 30,150 Q 30,170 50,170"
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <text x="50" y="120" className="font-mono text-[8px] fill-blue-400/40">REF: PRECISION_AXIS_01</text>
      </svg>

      {/* Drawing of a Manifold Schematic */}
      <svg viewBox="0 0 400 300" className="absolute bottom-[20%] left-[5%] w-[400px] h-auto fill-none">
        <motion.path
          d="M 50,50 L 350,50 L 350,250 L 50,250 Z M 100,100 L 300,100 M 100,150 L 300,150 M 100,200 L 300,200"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.25"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <motion.circle
          cx="200" cy="150" r="40"
          stroke="rgba(59,130,246,0.2)"
          strokeWidth="0.5"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

// ──── RIGHT SIDE: GEAR HOBBING MACHINE ANIMATION ────
const GearHobbingAnimation = () => {
  const [chips, setChips] = useState<{ id: number; x: number; y: number }[]>([]);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  useEffect(() => {
    let chipId = 0;
    const interval = setInterval(() => {
      const id = chipId++;
      setChips(prev => [...prev.slice(-15), { id, x: 200, y: 250 }]); // Contact point
      setTimeout(() => {
        setChips(prev => prev.filter(c => c.id !== id));
      }, 600);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-y-0 right-0 w-1/2 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
        <svg viewBox="0 0 500 500" className="w-full h-full fill-none">
          {/* WORKPIECE: MAIN GEAR */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="origin-center"
          >
            <circle cx="200" cy="250" r="100" stroke="rgba(59,130,246,0.3)" strokeWidth="1" strokeDasharray="10 5" />
            <circle cx="200" cy="250" r="85" stroke="rgba(255,255,255,0.05)" strokeWidth="30" strokeDasharray="4 8" />
            {/* Gear Teeth */}
            {[...Array(24)].map((_, i) => (
              <rect
                key={i}
                x="195" y="140" width="10" height="20"
                fill="rgba(59,130,246,0.2)"
                className="origin-center"
                style={{ transformOrigin: "200px 250px", transform: `rotate(${i * 15}deg) translateY(-85px)` }}
              />
            ))}
          </motion.g>

          {/* HOB CUTTER TOOL */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            style={{ x: 50 }} // Shifted right to meet the Gear at x=200
          >
            {/* The Hob Tool */}
            <rect x="250" y="180" width="25" height="140" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" rx="4" />
            {[...Array(10)].map((_, i) => (
              <line key={i} x1="250" y1={190 + i * 13} x2="275" y2={182 + i * 13} stroke="rgba(249,115,22,0.4)" strokeWidth="2" />
            ))}
          </motion.g>

          {/* Orange Sparks / Chips */}
          {hasMounted && chips.map(chip => (
            <motion.circle
              key={chip.id}
              cx="300" cy="250" // Near contact point (X=200+radius vs Tool)
              r="1.2"
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{
                opacity: 0,
                x: 30 + Math.random() * 60,
                y: (Math.random() * 80 - 40)
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              fill="#f97316"
            />
          ))}

          {/* HUD OVERLAYS */}
          <g className="font-mono text-[10px]">
            <text x="360" y="180" fill="#f97316" className="font-black">HOB_CUT: ACTIVE</text>
            <text x="360" y="200" fill="gray">RPM: 12,400</text>
            <text x="360" y="220" fill="gray">LOAD: 64%</text>
            <motion.line
              x1="350" y1="185" x2="350" y2="225"
              stroke="#f97316" strokeWidth="2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

// ──── GENERATIVE INDUSTRIAL BACKGROUND ────
const GenerativeBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="absolute inset-0 z-0 bg-[#05070a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0a121e_0%,#05070a_100%)] opacity-80" />

      {/* Grid Textures */}
      <div className="absolute inset-0 perspective-[1000px]">
        <motion.div
          animate={{ y: [0, -100] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 h-[300%] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] transform rotateX-60 origin-top opacity-30"
        />
      </div>

      {/* Mechanical Asset Tickers */}
      {mounted && [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0], y: "-=50" }}
          transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
        >
          <div className="font-mono text-[7px] text-blue-300 tracking-widest bg-black/40 px-2 py-1 border border-white/5">
            ID_{Math.random().toString(36).substring(7).toUpperCase()}
          </div>
        </motion.div>
      ))}

      {/* Large Industry Markers with Light Sweep */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] flex items-center justify-center overflow-hidden">
        <div className="relative">
        </div>
      </div>

      {/* Protective Radial Mask (Left Darker for Text) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,7,10,0.9)_0%,rgba(5,7,10,0.4)_50%,rgba(5,7,10,0.7)_100%)] z-[1]" />
    </div>
  );
};

// ──── INDUSTRIAL VALVE SYSTEM ────
const ValveSystem = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center perspective-[1200px] overflow-hidden grayscale opacity-20">
      <motion.div className="relative z-10 w-full max-w-[500px] aspect-square">
        <svg viewBox="0 0 500 500" className="w-full h-full fill-none outline-none">
          <motion.path
            d="M50 250 H450"
            stroke="rgba(59,130,246,0.3)"
            strokeWidth="30"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            strokeDasharray="20 40"
          />
          <motion.path
            d="M180 180 L320 180 L350 250 L320 320 L180 320 L150 250 Z"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>
    </div>
  );
};

// ──── PRECISION PART FLOW: INDUSTRIAL SILHOUETTES ────
const PrecisionPartFlow = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [
    { d: "M 20,40 L 80,40 L 90,60 L 10,60 Z", name: "Piston" },
    { d: "M 50,20 C 30,20 20,30 20,50 L 20,80 L 80,80 L 80,50 C 80,30 70,20 50,20", name: "ValveBody" },
    { d: "M 10,10 L 90,10 L 90,30 L 70,30 L 70,70 L 30,70 L 30,30 L 10,30 Z", name: "ConnectBox" },
    { d: "M 40,10 L 60,10 L 70,40 L 90,50 L 70,60 L 60,90 L 40,90 L 30,60 L 10,50 L 30,40 Z", name: "SparkPlug" }
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => {
        const icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${20 + Math.random() * 60}%`,
              scale: 0.5 + Math.random(),
              opacity: 0
            }}
            animate={{
              x: ["-10%", "110%"],
              opacity: [0, 1, 1, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 4
            }}
            className="absolute"
          >
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="rgba(59,130,246,0.5)" strokeWidth="0.5">
              <path d={icon.d} />
              <circle cx="50" cy="50" r="2" fill="rgba(59,130,246,0.3)" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

// ──── 3D HOLOGRAPHIC .GLB MODEL INTEGRATION ────
// ──── 3D HOLOGRAPHIC .GLB ENGINE HERO ────
const MainEngineHero = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
  const { scene } = useGLTF("/models/engine.glb");
  const engineRef = useRef<THREE.Group>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    if (!engineRef.current) return;

    // Smooth mouse-tracking rotation
    const targetRotateX = (mouseY.get() / (typeof window !== "undefined" ? window.innerHeight : 800) - 0.5) * 0.4;
    const targetRotateY = (mouseX.get() / (typeof window !== "undefined" ? window.innerWidth : 1200) - 0.5) * 0.4;

    // Mobile specific dramatic scroll rotation
    const scrollEffect = isMobile ? (window.scrollY * 0.003) : 0;

    engineRef.current.rotation.x = THREE.MathUtils.lerp(engineRef.current.rotation.x, targetRotateX, 0.08);
    engineRef.current.rotation.y = THREE.MathUtils.lerp(engineRef.current.rotation.y, targetRotateY + state.clock.getElapsedTime() * 0.1 + scrollEffect, 0.08);
  });

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#020617"), // Deep Midnight Blue
          emissive: new THREE.Color("#1e40af"), // Sapphire Radium Blue
          emissiveIntensity: 10,
          wireframe: true,
          transparent: true,
          opacity: 0.3, // Reduced opacity for subtle look
          metalness: 1,
          roughness: 0
        });
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={engineRef}
      object={scene}
      scale={isMobile ? 1.8 : 1.3}
      position={isMobile ? [0, 0, 0] : [2.5, -0.2, 0]}
    />
  );
};

const HolographicModel3D = ({ styleY }: { styleY?: any }) => {
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div style={{ y: styleY }} className="relative -mt-24 lg:mt-0 lg:absolute lg:inset-0 w-full h-[40vh] lg:h-full z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2ff" />

          <PresentationControls
            global
            snap={true}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <MainEngineHero mouseX={mouseX} mouseY={mouseY} />
          </PresentationControls>

          <Environment preset="night" resolution={256} />
          <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={0.5} />
        </Suspense>
      </Canvas>

      {/* Overlay Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none opacity-10" />
    </motion.div>
  );
};

export default function HeroCinematic({ onCallbackClick }: HeroCinematicProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const modelY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[100svh] overflow-hidden bg-[#05070a]">

      {/* ── GENERATIVE INDUSTRIAL BACKGROUND ── */}
      <GenerativeBackground />
      <InteractiveNetwork />

      {/* ── PRECISION CONTEXTUAL LAYERS ── */}
      <BlueprintCAD />
      <PrecisionPartFlow />

      {/* ── INTERACTIVE MOUSE LAYER ── */}
      <AdvancedHUDCursor />

      {/* ── MAIN CONTENT ── */}
      <div className="z-30 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 items-center lg:min-h-[100svh] pt-32 pb-16 lg:pt-24 lg:pb-24">

          <motion.div 
            style={{ y: textY, opacity: textOpacity }}
            className="lg:col-span-7 flex flex-col items-start translate-y-[-5%] sm:translate-y-0 text-left relative z-30"
          >

            {/* Content Body ... */}
            {/* Same as before but nested correctly in col-span-8 */}

            <div className="flex flex-col items-start gap-0 relative">
              {/* THE PINNACLE BRAND: ORANGE LASER SCAN Reveal */}
              <div className="relative group overflow-visible">
                <motion.h1
                  className="text-7xl sm:text-9xl md:text-[9rem] lg:text-[12rem] xl:text-[14rem] leading-[0.85] scale-y-110 font-black tracking-[-0.06em] text-white flex flex-wrap"
                >
                  {"Pinnacle".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0.05, color: "rgba(255,255,255,0.05)" }}
                      animate={{
                        opacity: 1,
                        color: ["rgba(255,255,255,0.05)", "#f97316", "#ffffff"]
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + index * 0.2, // Perfect sync for 2s scan
                        times: [0, 0.5, 1]
                      }}
                      className="relative inline-block"
                    >
                      <span className="relative z-10">{char}</span>

                      {/* Secondary Sparkle effect when scanned */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 0.2 + index * 0.2, duration: 0.4 }}
                        className="absolute inset-0 z-0 bg-orange-400/30 blur-[15px] rounded-full"
                      />
                    </motion.span>
                  ))}
                </motion.h1>

                {/* THE ORANGE LASER BEAM - Adjusted timing to match character delays */}
                <motion.div
                  initial={{ left: "-5%", opacity: 0 }}
                  animate={{
                    left: "105%",
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 2.0,
                    delay: 0.4,
                    ease: "linear",
                    times: [0, 0.1, 0.9, 1]
                  }}
                  className="absolute top-0 bottom-[-10px] left-0 z-30 w-[3px] bg-orange-500 shadow-[0_0_20px_#f97316,0_0_40px_#f97316] pointer-events-none"
                />
              </div>

              {/* SECONDARY BRAND LINE: Sub-revealed after scan */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
                className="flex items-center gap-4 mt-2 sm:mt-0 pl-1"
              >
                <div className="h-[1.5px] w-8 sm:w-16 bg-orange-500/30" />
                <span className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-mono font-black uppercase tracking-[0.2em] text-orange-500/80">
                  for Manufacturing
                </span>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 bg-orange-500 rounded-full shadow-[0_0_10px_orange]"
                />
              </motion.div>
            </div>

            <div className="relative mt-2 lg:mt-6 -mx-4 px-4 py-4">
              <div className="relative z-10">
                {/* Localized Technical Grid for Text Anchor */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.15, 0.1] }}
                  transition={{ duration: 2, delay: 2 }}
                  className="absolute -inset-4 z-[-1] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
                />

                <motion.div
                  {...fadeUp(0.2)}
                  className="max-w-3xl text-xl sm:text-2xl lg:text-3xl leading-relaxed text-white/50 font-medium font-mono relative"
                >
                  <strong className="text-white/80">Manufacturing Redefined.</strong> One Partner. Every Process. Pinnacle empowers you to move from concept to component with speed and confidence.

                  {/* Subtle Horizontal Scanner Line for Text */}
                  <motion.div
                    animate={{ y: [0, 40, 0], opacity: [0, 0.3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/50 blur-[1px]"
                  />
                </motion.div>
              </div>

              <motion.div
                {...fadeUp(0.35)}
                className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 w-auto relative z-30"
              >
                <button
                  onClick={onCallbackClick}
                  className="group relative flex items-center justify-center gap-4 rounded-full bg-blue-600 px-8 py-3.5 sm:px-12 sm:py-5 text-[16px] font-black text-white shadow-[0_0_50px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_80px_rgba(37,99,235,0.6)] hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <ArrowRight className="h-5 w-5" />
                  <span>Get a Quote</span>
                </button>

                <a
                  href="https://wa.me/919481763083"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-4 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-xl px-8 py-3.5 sm:px-12 sm:py-5 text-[16px] font-bold text-white transition-all hover:bg-white/10 hover:-translate-y-1"
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
          <HolographicModel3D styleY={modelY} />
        </div>
      </div>

      <div className="absolute bottom-10 left-10 z-40 hidden xl:flex items-center gap-5 text-white/20 font-mono text-[9px] tracking-[0.4em] uppercase">
        <span className="flex items-center gap-2">
          <div className="w-1 h-1 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          SYS_READY: PRECISION_LOCKED
        </span>
        <div className="w-5 h-[1px] bg-white/10" />
        <span>ISO_9001:2015</span>
      </div>

    </section>
  );
}
