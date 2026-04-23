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
              <li><Link href="/services/prototype-manufacturing" className="text-gray-400 hover:text-blue-500 transition-colors">Prototype Manufacturing</Link></li>
              <li><Link href="/services/tool-design" className="text-gray-400 hover:text-blue-500 transition-colors">Tool Design</Link></li>
              <li><Link href="/services/precision-machining" className="text-gray-400 hover:text-blue-500 transition-colors">Precision Machining</Link></li>
              <li><Link href="/services/refurbishment" className="text-gray-400 hover:text-blue-500 transition-colors">Refurbishment</Link></li>
              <li><Link href="/services/sheet-metal-fabrication" className="text-gray-400 hover:text-blue-500 transition-colors">Sheet Metal & Fabrication</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-blue-500 transition-colors">Our Expert Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block font-bold text-white mb-2">Head Office:</span>
                <p className="text-white font-bold mb-1">Pinnacle Design Solutions</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No. 329, Ashwathnagar,<br />
                  Shimoga, Karnataka - 577204
                </p>
              </li>
              <li>
                <a href="mailto:info@pinnacle-designsolutions.com" className="text-gray-400 hover:text-blue-500 transition-colors">
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
              className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors mb-6"
            >
              <Phone size={20} />
              <p className="text-white font-black text-lg">+91 9481763083</p>
            </a>


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
                  alt="Pinnacle Design Solutions & Manufacturing"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Pinnacle Design Solutions & Manufacturing transforms concepts into tangible products with precision and speed. One Partner. Every Process.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/pinnacle-design-solutions-manufacturing-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-gray-900 hover:bg-blue-500 hover:border-blue-500 transition-all"
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
            <p>© 2026 Pinnacle Design Solutions & Manufacturing Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
