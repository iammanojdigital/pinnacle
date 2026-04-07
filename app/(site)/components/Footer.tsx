"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#1a1f35] to-[#0d1218] text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-16">
          {/* Services Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/prototype-manufacturing" className="text-gray-400 hover:text-blue-400 transition-colors">Prototype Manufacturing</Link></li>
              <li><Link href="/services/tool-design-development" className="text-gray-400 hover:text-blue-400 transition-colors">Tool Design & Development</Link></li>
              <li><Link href="/services/precision-machining" className="text-gray-400 hover:text-blue-400 transition-colors">Precision Machining</Link></li>
              <li><Link href="/services/refurbishment" className="text-gray-400 hover:text-blue-400 transition-colors">Refurbishment</Link></li>
              <li><Link href="/services/fabrication" className="text-gray-400 hover:text-blue-400 transition-colors">Fabrication</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-blue-400 transition-colors">Our Expert Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block font-bold text-white">Head Office:</span>
                No. 329, Ashwathnagar, Shimoga, 577204
              </li>
              <li>
                <a href="mailto:info@pinnacle-designsolutions.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@pinnacle-designsolutions.com
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Quick Connect</h3>
            
            {/* Phone */}
            <a 
              href="tel:+919481763083" 
              className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors mb-6"
            >
              <Phone size={20} />
              <span className="font-semibold">+91 9481763083</span>
            </a>

            {/* Buttons */}
            <div className="space-y-3">
              <a 
                href="/contact" 
                className="flex items-center justify-center gap-2 w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-full text-sm font-bold transition-all"
              >
                <span>✉️</span> Get A Quote
              </a>
              <a 
                href="https://wa.me/919481763083" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold transition-all"
              >
                <FaWhatsapp size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section with Logo and Social Links */}
        <div className="border-t border-gray-700 pt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Logo and Description */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-4">
                <Image
                  src="/logos/pinnacle-logo.svg"
                  alt="Pinnacle"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Pinnacle transforms concepts into tangible products with precision and speed. One Partner. Every Process. Precision Manufacturing Made Effortless.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/pinnacle-design-solutions-manufacturing-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-gray-900 hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <FaLinkedin size={18} className="text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Right: Footer Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
              <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/terms-and-conditions" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500 text-xs">
            <p>© 2026 Pinnacle Manufacturing Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
