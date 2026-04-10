"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function IndustrialValvesPage() {
  const valveData = {
    category: "Product" as const,
    title: "Industrial Valves",
    subtitle: "High-performance flow control solutions for mission-critical industrial applications.",
    description1: "Pinnacle designs and manufactures high-performance industrial valves for demanding flow control applications across oil & gas, power, water treatment, chemical, and manufacturing sectors. Our precision-engineered valves include ball valves, gate valves, globe valves, check valves, and butterfly valves—available in a wide range of sizes, materials, and actuation types.",
    description2: `
      Each valve is crafted using advanced <strong>CNC machining</strong> and rigorous quality standards, including <strong>NDT and hydro-testing</strong>. Built to withstand extreme pressures and corrosive environments, Pinnacle valves ensure safety and efficiency in mission-critical operations. 
      <br/><br/>
      We deliver robust flow control solutions engineered for longevity and compliance with international standards like <strong>API, ASME, and ISO</strong>. Our solutions support manual, pneumatic, and motorized operations with integration-ready designs.
    `,
    images: [
      "/images/pinnacle/IndustrialValves1.jpg",
      "/images/pinnacle/IndustrialValves2.jpg",
      "/images/pinnacle/IndustrialValves3.jpg",
      "/images/pinnacle/IndustrialValves4.jpg",
      "/images/pinnacle/IndustrialValves5.jpg"
    ],
    faqs: [
      {
        question: "Why Use Precision-Engineered Industrial Valves?",
        answer: "Precision valves are the backbone of safe and efficient flow control. They prevent leakage, reduce downtime, and protect assets in challenging environments.",
        points: [
          "Leak-Free Sealing",
          "High Temp & Pressure Resistance",
          "Corrosion-Resistant Materials",
          "Manual and Automated Actuation",
          "Custom Fit for Any Pipeline"
        ]
      },
      {
        question: "Why Choose Pinnacle for Industrial Valves?",
        answer: "Our valves are backed by expert support, rigorous testing (NDT/Hydro), and complete traceability for mission-critical reliability.",
        points: [
          "Wide Range of Valve Types",
          "Certified Quality Assurance",
          "Customization Support",
          "Global Standard Compliance",
          "Technical Support"
        ]
      }
    ]
  };

  return <InnerPageLayout {...valveData} />;
}
