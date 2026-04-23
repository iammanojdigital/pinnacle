"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function SpecialProcessesPage() {
  const serviceData = {
    category: "Service" as const,
    title: "Special Processes",
    subtitle: "Advanced surface treatments, protective coatings, and non-destructive testing for industrial durability.",
    description1: "Pinnacle delivers a comprehensive suite of special processes designed to enhance the durability, corrosion resistance, and structural integrity of precision components. From industrial-grade PU coating to advanced anodizing and metallurgical testing, we provide end-to-end finishing in-house.",
    description2: `
      Our capabilities include <strong>Anodizing</strong> for aluminium protection, <strong>Black & Sulphide Oxide</strong> for wear resistance, and <strong>PU Coating</strong> for extreme environmental resilience. 
      <br/><br/>
      We also integrate <strong>Non-Destructive Testing (NDT)</strong> including Dye Penetrant and Magnetic Particle inspection to ensure absolute material fidelity. These processes are critical for components operating in high-pressure oil & gas environments or aerospace handling systems.
    `,
    images: [
      "/images/pinnacle/Refurbishment.png",
      "/images/pinnacle/refurbishment/refurbishment1.jpeg",
      "/images/pinnacle/refurbishment/refurbishment2.jpeg",
      "/images/pinnacle/refurbishment/refurbishment3.jpeg"
    ],
    faqs: [
      {
        question: "Why are special processes important?",
        answer: "Special processes like anodizing and NDT ensure that components can withstand harsh environments and meet safety-critical material standards.",
        points: [
          "Corrosion Protection",
          "Wear Resistance",
          "Surface Hardening",
          "NDT Material Verification",
          "Aerospace-Grade Finishing"
        ]
      }
    ]
  };

  return <InnerPageLayout {...serviceData} />;
}
