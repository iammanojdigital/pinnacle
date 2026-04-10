"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  CheckCircleIcon, 
  CpuChipIcon, 
  ShieldCheckIcon,
  XMarkIcon,
  MagnifyingGlassPlusIcon,
  MinusIcon,
  PlusIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState, useRef } from "react";

interface FaqItem {
  question: string;
  answer: string;
  points?: string[];
}

interface InnerPageLayoutProps {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  images: string[];
  faqs: FaqItem[];
  category: "Product" | "Service";
  children?: React.ReactNode;
  hideGallery?: boolean;
  disableZoom?: boolean;
  tiltCardLabel?: string;
}

export default function InnerPageLayout({
  title,
  subtitle,
  description1,
  description2,
  images,
  faqs,
  category,
  children,
  hideGallery = false,
  disableZoom = false,
  tiltCardLabel,
}: InnerPageLayoutProps) {
  const containerRef = useRef(null);
  const [inspectImage, setInspectImage] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroZoom = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#05070a] text-white min-h-screen selection:bg-orange-500/30 selection:text-white overflow-x-hidden pt-20">
      <AnimatePresence>
        {!disableZoom && inspectImage && (
          <ImageLightbox 
            image={inspectImage} 
            onClose={() => setInspectImage(null)} 
          />
        )}
      </AnimatePresence>

      {/* Cinematic Hero */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroZoom }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/60 via-[#05070a]/20 to-[#05070a] z-10" />
          <Image
            src={images[0]?.startsWith("/") ? images[0] : `/images/pinnacle/${images[0]}`}
            alt={title}
            fill
            className="object-cover opacity-60"
            priority
          />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-20 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] sm:text-xs font-black tracking-[0.2em] uppercase mb-6 sm:mb-8">
              Pinnacle <span className="text-white/40 mx-2">|</span> {category} Excellence
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black mb-6 sm:mb-8 tracking-tighter leading-tight sm:leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
              {title}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-400 leading-relaxed font-medium max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3D Overview Section */}
      <section className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 -mt-10 sm:-mt-20 md:-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-6 space-y-6 sm:space-y-8"
           >
              <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden group">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 flex items-center gap-4">
                    <CpuChipIcon className="h-8 w-8 sm:h-10 sm:w-10 text-orange-500" />
                    Engineering Depth
                 </h2>
                 <div className="space-y-4 sm:space-y-6 text-gray-400 leading-relaxed text-base sm:text-lg font-medium">
                    <p className="text-white text-lg sm:text-xl border-l-[3px] sm:border-l-4 border-blue-500 pl-4 sm:pl-6 mb-6 sm:mb-8 italic">
                       {description1}
                    </p>
                    <div className="prose prose-invert max-w-none text-sm sm:text-base md:text-lg" dangerouslySetInnerHTML={{ __html: description2 }} />
                 </div>
              </div>
           </motion.div>

            <div className="lg:col-span-6">
              <TiltCard 
                image={images[1]} 
                title={title} 
                onInspect={() => !disableZoom && setInspectImage(images[1])}
                disableZoom={disableZoom}
                label={tiltCardLabel}
              />
            </div>
        </div>
      </section>

      {/* Dynamic Gallery Section */}
      {!hideGallery && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 sm:mt-32 md:mt-40">
          <div className="text-center mb-10 sm:mb-16">
             <h3 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter">Project Highlights</h3>
             <p className="text-xs sm:text-base text-gray-500 max-w-xl mx-auto">High-precision components delivered to global industrial partners.</p>
          </div>
          
          {images.length > 3 ? (
            <CinematicCarousel 
              images={images.slice(2)} 
              title={title} 
              onInspect={setInspectImage} 
              disableZoom={disableZoom}
            />
          ) : (
              <TiltCard 
                image={images[1]} 
                title={title} 
                onInspect={() => !disableZoom && setInspectImage(images[1])}
                disableZoom={disableZoom}
                label={tiltCardLabel}
              />
          )}
        </section>
      )}

      {/* Page Specific Content (Children) */}
      {children && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-10 sm:mt-20">
          {children}
        </section>
      )}

      {/* Technical FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 sm:mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
           {faqs.map((faq, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-12 transition-all hover:bg-white/[0.03] group"
             >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                   <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <span className="text-white font-black text-lg sm:text-xl">0{idx + 1}</span>
                   </div>
                   <div className="space-y-4 w-full">
                      <h4 className="text-xl sm:text-2xl font-black text-white">{faq.question}</h4>
                      <p className="text-gray-400 text-sm sm:text-lg">{faq.answer}</p>
                      {faq.points && (
                        <div className="grid grid-cols-1 gap-2 pt-2 sm:pt-4">
                          {faq.points.map((pt, i) => (
                            <div key={i} className="flex items-start text-left gap-3 text-xs sm:text-sm font-bold text-gray-400 bg-white/5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl">
                              <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 shrink-0 mt-0.5" />
                              {pt}
                            </div>
                          ))}
                        </div>
                      )}
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Brand CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 mt-20 sm:mt-40 pb-20">
        <div className="bg-gradient-to-br from-blue-600/30 to-orange-600/20 border border-white/10 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-16 text-center relative overflow-hidden group">
           <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl sm:text-5xl font-black mb-6 sm:mb-8 tracking-tighter">Ready for Execution?</h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 sm:px-12 sm:py-5 rounded-full font-black transition-all flex items-center gap-3 text-base sm:text-lg shadow-2xl shadow-orange-500/20 active:scale-95">
                 Start Consultation <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
           </div>
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        </div>
      </section>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function ImageLightbox({ image, onClose }: { image: string; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
         <div className="bg-white/10 border border-white/20 rounded-2xl flex items-center overflow-hidden backdrop-blur-xl">
            <button onClick={handleZoomOut} className="p-3 hover:bg-white/10 transition-all border-r border-white/10"><MinusIcon className="h-6 w-6" /></button>
            <span className="px-4 font-black tabular-nums text-sm">{Math.round(zoom * 100)}%</span>
            <button onClick={handleZoomIn} className="p-3 hover:bg-white/10 transition-all border-l border-white/10"><PlusIcon className="h-6 w-6" /></button>
         </div>
         <button onClick={onClose} className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all">
            <XMarkIcon className="h-6 w-6" />
         </button>
      </div>

      <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
        <motion.div 
          drag={zoom > 1}
          dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
          animate={{ scale: zoom }}
          className="relative w-full h-full max-w-[1200px] max-h-[800px] flex items-center justify-center"
        >
          <Image
            src={image.startsWith("/") ? image : `/images/pinnacle/${image}`}
            alt="Magnified View"
            width={1200}
            height={800}
            className="object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function TiltCard({ image, title, onInspect, disableZoom, label }: { image: string; title: string; onInspect: () => void; disableZoom?: boolean; label?: string }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ 
        rotateX: rotate.x, 
        rotateY: rotate.y,
        y: [0, -15, 0] 
      }}
      transition={{ 
        rotateX: { type: "spring", stiffness: 300, damping: 30 },
        rotateY: { type: "spring", stiffness: 300, damping: 30 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
      className="relative aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl group cursor-crosshair [perspective:1000px]"
    >
      <Image
        src={image.startsWith("/") ? image : `/images/pinnacle/${image}`}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      
      {/* Zoom Indicator */}
      {!disableZoom && (
        <div 
          onClick={onInspect}
          className="absolute inset-0 flex items-center justify-center bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer"
        >
           <div className="bg-white/10 border border-white/20 p-4 rounded-full flex items-center gap-3">
              <MagnifyingGlassPlusIcon className="h-8 w-8 text-white" />
              <span className="text-xs font-black tracking-widest uppercase">Inspect</span>
           </div>
        </div>
      )}

      <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-center justify-between backdrop-blur-md bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 pointer-events-none">
        <span className="text-white text-sm sm:text-base font-bold tracking-tight">{label || "Technical Overview"}</span>
        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-orange-500 flex items-center justify-center">
          <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

function CinematicCarousel({ images, title, onInspect, disableZoom }: { images: string[]; title: string; onInspect: (img: string) => void; disableZoom?: boolean }) {
  const [index, setIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!isAuto) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAuto, isMobile]);

  // Handle visibility logic (1-up on mobile, 3-up on desktop)
  const visibleIndices = isMobile 
    ? [index]
    : [
        (index - 1 + images.length) % images.length,
        index,
        (index + 1) % images.length
      ];

  return (
    <div 
      className="relative group px-0 min-h-[300px] sm:min-h-[400px] flex flex-col items-center"
      onMouseEnter={() => setIsAuto(false)}
      onMouseLeave={() => setIsAuto(true)}
    >
      <div className="relative w-full overflow-hidden py-6 sm:py-10">
        <div className="flex justify-center items-center gap-4 md:gap-8 max-w-[1400px] mx-auto px-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleIndices.map((imgIdx, i) => {
              const isCenter = isMobile ? true : (i === 1);
              const img = images[imgIdx];
              
              return (
                <motion.div
                  key={`${imgIdx}-${i}`}
                  initial={{ opacity: 0, x: isMobile ? 50 : (i === 0 ? -100 : i === 2 ? 100 : 0), scale: 0.8 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.4, 
                    scale: isCenter ? 1.05 : 0.8,
                    x: 0,
                    zIndex: isCenter ? 20 : 10,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: isMobile ? -50 : (i === 0 ? -100 : i === 2 ? 100 : 0) }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => isCenter && !disableZoom ? onInspect(img) : (!isCenter ? setIndex(imgIdx) : null)}
                  className={`relative shrink-0 ${isCenter ? "w-full md:w-[40%]" : "w-[25%] md:w-[25%]"} 
                             ${isMobile && !isCenter ? "hidden" : "block"}
                             aspect-video rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden border border-white/20 
                             shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer group/card`}
                >
                  <Image
                    src={img.startsWith("/") ? img : `/images/pinnacle/${img}`}
                    alt={`${title} highlight ${imgIdx}`}
                    fill
                    className="object-cover"
                  />
                  
                  {isCenter && !disableZoom && (
                    <>
                       {/* Magnify hover hint on center image */}
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                          <MagnifyingGlassPlusIcon className="h-10 w-10 text-white" />
                       </div>
                       <motion.div 
                          animate={{ top: ["0%", "100%", "0%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 right-0 h-px bg-white/30 shadow-[0_0_20px_rgba(255,255,255,0.6)] z-10"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    </>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6 sm:gap-10 mt-6 sm:mt-8">
        <button onClick={prev} className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group/btn shadow-xl backdrop-blur-md">
          <ArrowLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover/btn:text-white" />
        </button>
        
        <div className="flex gap-2 sm:gap-3">
          {images.map((_, i) => (
            <div 
               key={i} 
               onClick={() => setIndex(i)}
               className={`relative h-1 transition-all rounded-full overflow-hidden cursor-pointer ${i === index ? "w-6 sm:w-10" : "w-1.5 sm:w-2 bg-white/10"}`}
            >
               {i === index && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    key={index}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                  />
               )}
            </div>
          ))}
        </div>

        <button onClick={next} className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group/btn shadow-xl backdrop-blur-md">
          <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover/btn:text-white" />
        </button>
      </div>
    </div>
  );
}

function HeroicImageView({ image, title, onInspect, disableZoom }: { image: string; title: string; onInspect: () => void; disableZoom?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onClick={onInspect}
      className="relative aspect-video sm:aspect-[21/9] w-full rounded-[2rem] sm:rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl group cursor-pointer"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1], x: [0, 5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image
          src={image.startsWith("/") ? image : `/images/pinnacle/${image}`}
          alt={title}
          fill
          className="object-cover opacity-80"
        />
      </motion.div>
      <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-overlay" />
      {!disableZoom && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6 sm:p-10">
           {/* Magnify hover hint */}
           <div className="bg-white/10 border border-white/20 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm mb-4">
              <MagnifyingGlassPlusIcon className="h-10 w-10 text-white" />
           </div>
           <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center max-w-md">
              <h4 className="text-lg sm:text-xl font-bold mb-2">High Precision Standard</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Every component undergoes rigorous 3D quality inspection and material verification to ensure absolute fidelity.</p>
           </div>
        </div>
      )}
      {disableZoom && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 p-6 sm:p-10 pointer-events-none" />
      )}
    </motion.div>
  );
}
