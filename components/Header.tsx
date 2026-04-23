"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  {
    label: "Products",
    key: "products",
    items: [
      { href: "/products/industrial-valves", label: "Industrial Valves" },
      { href: "/products/industrial-dampers", label: "Industrial Dampers" },
    ],
  },
  {
    label: "Services",
    key: "services",
    items: [
      { href: "/services/prototype-manufacturing", label: "Prototype Manufacturing" },
      { href: "/services/tool-design", label: "Tool Design" },
      { href: "/services/sheet-metal-fabrication", label: "Sheet Metal & Fabrication" },
      { href: "/services/precision-machining", label: "CNC Machining" },
      { href: "/services/refurbishment", label: "Refurbishment" },
      { href: "/services/welding-expertise", label: "Welding Expertise" },
      { href: "/services/special-processes", label: "Special Processes" },
    ],
  },
  {
    label: "About Us",
    key: "about",
    items: [
      { href: "/about", label: "Our Story" },
      { href: "/team", label: "Expert Team" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const phoneNumber = "9481763083";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let dropdownTimer: NodeJS.Timeout;
  const openDropdown = (key: string) => {
    clearTimeout(dropdownTimer);
    setActiveDropdown(key);
  };
  const closeDropdown = () => {
    dropdownTimer = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 pt-2 sm:pt-3">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(10, 15, 25, 0.85)" : "rgba(10, 15, 25, 0.4)",
            boxShadow: scrolled
              ? "0 10px 40px rgba(0,0,0,0.3)"
              : "0 10px 30px rgba(0,0,0,0.2)",
            height: scrolled ? "72px" : "84px",
            y: 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`pointer-events-auto rounded-3xl sm:rounded-full backdrop-blur-md border transition-colors duration-300  ${scrolled ? "border-gray-200/50" : "border-white/10"
            }`}
        >
          {/* Internal Glass Highlight */}
          {!scrolled && <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />}

          <div className="mx-auto px-3 sm:px-6 h-full flex items-center justify-between">

            {/* LOGO: Exclusive usage of pinnacle-logo.svg */}
            <Link href="/" className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-4 group">
              <div className="relative flex items-center h-10 xl:h-12 w-auto">
                <Image
                  src="/logos/pinnacle-logo.svg"
                  alt="Pinnacle Logo Icon"
                  width={60}
                  height={60}
                  className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center border-l border-white/10 pl-2 sm:pl-4 py-1 group-hover:border-orange-500/50 transition-colors duration-500">
                <span className="text-base xl:text-lg font-black tracking-[0.1em] sm:tracking-[0.2em] text-white uppercase leading-none">
                  Pinnacle
                </span>
                <span className="text-[8px] xl:text-[8px] font-bold tracking-normal sm:tracking-[0.3em] text-white/40 uppercase mt-1 group-hover:text-white/60 transition-colors">
                  Design Solutions & Manufacturing
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center gap-0.5" onMouseLeave={closeDropdown}>
              <Link 
                href="/" 
                className={`rounded-full px-3 2xl:px-4 py-2 text-[13px] 2xl:text-[14px] font-bold tracking-tight transition-all duration-200 ${
                  pathname === "/" 
                    ? "text-orange-500 bg-white/10" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>
              {navLinks.map((group) => (
                <div key={group.key} className="relative" onMouseEnter={() => openDropdown(group.key)}>
                  <button
                    className={`flex items-center gap-1 rounded-full px-3 2xl:px-4 py-2 text-[13px] 2xl:text-[14px] font-bold tracking-tight transition-all duration-200 ${
                      activeDropdown === group.key || group.items.some(item => pathname === item.href)
                        ? "text-orange-500 bg-white/10 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {group.label}
                    <ChevronDownIcon
                      className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === group.key ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === group.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.99 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 top-[calc(100%-2px)] -translate-x-1/2 pt-3"
                        onMouseEnter={() => openDropdown(group.key)}
                      >
                        <div className="w-[300px] rounded-[1.75rem] bg-[#0f172a] border border-white/10 shadow-[0_20px_48px_rgba(0,0,0,0.4)] backdrop-blur-xl overflow-hidden">

                          <div className="p-3">
                            {group.items.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-[14px] font-medium transition-all duration-150 hover:bg-white/5 ${
                                  pathname === item.href
                                    ? "text-orange-500 hover:text-orange-400 font-bold bg-white/5 shadow-inner"
                                    : "text-white/70 hover:text-white"
                                }`}
                              >
                                {item.label}
                                <ArrowRightIcon className="h-4 w-4 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-60 group-hover:translate-x-0" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}


            </nav>

            {/* DESKTOP CTAs */}
            <div className="hidden xl:flex items-center gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-105 ${scrolled
                  ? "bg-white text-gray-900 border-gray-200 shadow-sm"
                  : "bg-white/10 text-white border-white/10"
                  }`}
              >
                <PhoneIcon className="h-4 w-4" />
              </a>

              <a
                href="tel:+919481763083"
                className={`rounded-full px-6 py-2.5 text-[14px] font-bold transition-all duration-300 backdrop-blur-md border border-orange-500/50 text-white hover:bg-orange-500/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] active:scale-95 shadow-orange-500/5`}
              >
                Let's Discuss
              </a>
            </div>

            {/* DESKTOP CTAs Removed */}

            {/* MOBILE TOGGLE */}
            {!pathname.startsWith("/internship") && (
              <div className="flex items-center gap-2.5 xl:hidden relative z-10">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all hover:scale-105 ${scrolled
                    ? "bg-white text-gray-900 border-gray-200 shadow-sm"
                    : "bg-white/10 text-white border-white/10"
                    }`}
                >
                  {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <div className="mx-auto max-w-7xl px-4 pointer-events-none">
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="xl:hidden overflow-hidden bg-[#05070a]/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl mt-3 pointer-events-auto"
            >
              <div className="px-5 py-6 space-y-2">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-3.5 text-[16px] font-semibold transition-colors ${
                    pathname === "/" ? "text-orange-500 bg-white/5" : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  Home
                </Link>
                {navLinks.map((group) => (
                  <div key={group.key} className="border-b border-white/5 last:border-0 pb-1 mb-1">
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === group.key ? null : group.key)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-[16px] font-semibold transition-colors ${
                        group.items.some(item => pathname === item.href) ? "text-orange-500 bg-white/5" : "text-white/90 hover:bg-white/5"
                      }`}
                    >
                      {group.label}
                      <ChevronDownIcon
                        className={`h-5 w-5 text-white/30 transition-transform duration-300 ${mobileAccordion === group.key ? "rotate-180 text-orange-500" : ""
                          }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileAccordion === group.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-5 border-l-2 border-blue-500/30 pl-4 pb-4 space-y-1">
                            {group.items.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={`block py-2.5 text-[15px] font-medium transition-colors ${
                                  pathname === item.href ? "text-orange-500 font-bold" : "text-white/50 hover:text-white"
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function DesktopLink({ href, scrolled, children }: { href: string; scrolled: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-3 2xl:px-4 py-2 text-[13px] 2xl:text-[14px] font-bold tracking-tight transition-all duration-200 text-white/70 hover:text-white hover:bg-white/5`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, setOpen, children }: { href: string; setOpen: (v: boolean) => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block rounded-2xl px-4 py-3.5 text-[16px] font-semibold text-white/90 hover:bg-white/5"
    >
      {children}
    </Link>
  );
}
