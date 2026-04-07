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
      { href: "/products/industrial-valves", label: "Industrial Valves", accent: true },
      { href: "/products/industrial-dampers", label: "Industrial Dampers" },
    ],
  },
  {
    label: "Services",
    key: "services",
    items: [
      { href: "/services/prototype-manufacturing", label: "Prototype Manufacturing", accent: true },
      { href: "/services/tool-design-development", label: "Tool Design & Development" },
      { href: "/services/precision-machining", label: "Precision Machining", accent: true },
      { href: "/services/refurbishment", label: "Refurbishment" },
      { href: "/services/fabrication", label: "Fabrication" },
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
    dropdownTimer = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 pt-2 sm:pt-3">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.03)",
            boxShadow: scrolled
              ? "0 10px 40px rgba(0,0,0,0.08)"
              : "0 10px 30px rgba(0,0,0,0.1)",
            height: scrolled ? "64px" : "76px",
            y: 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`pointer-events-auto rounded-3xl sm:rounded-full backdrop-blur-md border transition-colors duration-300 overflow-hidden ${
            scrolled ? "border-gray-200/50" : "border-white/10"
          }`}
        >
          {/* Internal Glass Highlight */}
          {!scrolled && <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />}
          
          <div className="mx-auto px-6 h-full flex items-center justify-between">
            
            {/* LOGO: Exclusive usage of pinnacle-logo.svg */}
            <Link href="/" className="relative z-10 flex shrink-0 items-center">
              <Image
                src="/logos/pinnacle-logo.svg"
                alt="Pinnacle"
                width={200}
                height={200}
                className={`h-12 xl:h-16 w-auto object-contain transition-all duration-500 hover:scale-110 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]`}
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center gap-0.5" onMouseLeave={closeDropdown}>
              {navLinks.map((group) => (
                <div key={group.key} className="relative" onMouseEnter={() => openDropdown(group.key)}>
                  <button
                    className={`flex items-center gap-1 rounded-full px-3 2xl:px-4 py-2 text-[13px] 2xl:text-[14px] font-bold tracking-tight transition-all duration-200 ${
                      activeDropdown === group.key
                        ? (scrolled ? "text-blue-600 bg-blue-50" : "text-blue-400 bg-white/10")
                        : (scrolled ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50" : "text-white/70 hover:text-white hover:bg-white/5")
                    }`}
                  >
                    {group.label}
                    <ChevronDownIcon
                      className={`h-3 w-3 transition-transform duration-300 ${
                        activeDropdown === group.key ? "rotate-180" : ""
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
                        className="absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2"
                        onMouseEnter={() => openDropdown(group.key)}
                      >
                        <div className="w-[300px] rounded-[1.75rem] bg-white ring-1 ring-black/[0.08] shadow-[0_20px_48px_rgba(0,0,0,0.12)] overflow-hidden">
                          <div className="h-1.5 bg-gradient-to-r from-blue-400 to-blue-600" />
                          <div className="p-3">
                            {group.items.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-[14px] font-medium transition-all duration-150 hover:bg-gray-50 ${
                                  item.accent
                                    ? "text-blue-600 hover:text-blue-700 font-bold"
                                    : "text-gray-600 hover:text-gray-900"
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

              <DesktopLink href="/contact" scrolled={scrolled}>Contact</DesktopLink>
            </nav>

            {/* DESKTOP CTAs */}
            <div className={`hidden xl:flex items-center gap-2.5 ${pathname.startsWith("/internship") ? "opacity-0 pointer-events-none" : ""}`}>
              <a
                href={`tel:${phoneNumber}`}
                className={`flex items-center gap-1.5 rounded-full border px-4 2xl:px-5 py-2.5 text-[13px] 2xl:text-[14px] font-bold shadow-sm transition-all hover:shadow-md hover:-translate-y-px active:scale-95 ${
                  scrolled 
                    ? "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100" 
                    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <PhoneIcon className={`h-4.5 w-4.5 ${scrolled ? "text-blue-600" : "text-blue-400"}`} />
                {phoneNumber}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                className={`flex items-center gap-1.5 rounded-full border-2 px-5 2xl:px-6 py-2.5 text-[13px] 2xl:text-[14px] font-black transition-all backdrop-blur-md active:scale-[0.98] ${
                  scrolled 
                    ? "border-[#25D366] bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20" 
                    : "border-[#25D366] bg-[#25D366]/10 text-white hover:bg-[#25D366]/20"
                }`}
              >
                <FaWhatsapp className="h-4 w-4 2xl:h-4.5 2xl:w-4.5" />
                WhatsApp
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            {!pathname.startsWith("/internship") && (
              <div className="flex items-center gap-2.5 xl:hidden relative z-10">
                <a
                  href={whatsappLink}
                  target="_blank"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 backdrop-blur-md transition-transform hover:scale-105 ${
                    scrolled 
                    ? "border-[#25D366] bg-[#25D366]/10 text-[#128C7E]" 
                    : "border-[#25D366] bg-[#25D366]/10 text-white"
                  }`}
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all hover:scale-105 ${
                    scrolled 
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
                {navLinks.map((group) => (
                <div key={group.key} className="border-b border-gray-100 last:border-0 pb-1 mb-1">
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === group.key ? null : group.key)}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-[16px] font-semibold text-white/90 transition-colors hover:bg-white/5"
                  >
                    {group.label}
                    <ChevronDownIcon
                      className={`h-5 w-5 text-white/30 transition-transform duration-300 ${
                        mobileAccordion === group.key ? "rotate-180 text-blue-400" : ""
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
                        <div className="ml-5 border-l-2 border-blue-400/30 pl-4 pb-4 space-y-1">
                           {group.items.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              onClick={() => setMenuOpen(false)}
                              className={`block py-2.5 text-[15px] font-medium transition-colors ${
                                item.accent ? "text-blue-400" : "text-white/50 hover:text-white"
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

              <MobileNavLink href="/contact" setOpen={setMenuOpen}>Contact Us</MobileNavLink>

              {/* Mobile CTAs */}
              <div className="pt-6 mt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 py-4 text-[15px] font-semibold text-white transition-transform hover:scale-[0.98] active:scale-95"
                >
                  <PhoneIcon className="h-4.5 w-4.5 text-blue-400" /> Call
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#25D366] bg-[#25D366]/10 backdrop-blur-xl py-4 text-[15px] font-bold text-white shadow-lg transition-transform hover:scale-[0.98] active:scale-95"
                >
                  <FaWhatsapp className="h-4.5 w-4.5 text-[#25D366]" /> WhatsApp
                </a>
              </div>
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
      className={`rounded-full px-3 2xl:px-4 py-2 text-[13px] 2xl:text-[14px] font-bold tracking-tight transition-all duration-200 ${
        scrolled 
          ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50" 
          : "text-white/70 hover:text-white hover:bg-white/5"
      }`}
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
