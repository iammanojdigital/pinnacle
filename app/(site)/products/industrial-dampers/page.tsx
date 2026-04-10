"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function IndustrialDampersPage() {
  const damperData = {
    category: "Product" as const,
    title: "Industrial Dampers",
    subtitle: "Robust airflow regulation and system isolation for heavy-duty process industries.",
    description1: "Pinnacle provides robust industrial dampers engineered to regulate airflow and isolate systems in HVAC, power generation, cement, and process industries. Our product lineup includes butterfly dampers, louver dampers, guillotine dampers, and multi-louver dampers—all designed for high-performance in heavy-duty environments.",
    description2: `
      Each damper is tailored for application-specific needs including dust-laden gases, corrosive air streams, and large duct systems. With options for manual, pneumatic, and electric actuation, Pinnacle dampers offer tight shut-off, reduced vibration, and long service life. 
      <br/><br/>
      Manufactured with <strong>precision welding and CNC machining</strong>, our dampers maintain consistent airflow control even under high temperature and pressure fluctuations. We provide turnkey solutions including frames and sealing arrangements.
    `,
    images: [
      "/images/pinnacle/dampers1.jpg",
      "/images/pinnacle/dampers2.jpg",
      "/images/pinnacle/dampers3.jpg",
      "/images/pinnacle/dampers4.jpg",
      "/images/pinnacle/Industrial_dampers.jpg", // The main showcase image
      "/images/pinnacle/dampers5.jpg"
    ],
    faqs: [
      {
        question: "Why Are Industrial Dampers Essential?",
        answer: "Dampers control and direct airflow in industrial processes, ensuring temperature control and safety. They play a key role in emergency shut-off and system isolation.",
        points: [
          "Accurate Airflow Regulation",
          "High-Temperature Resistance",
          "Supports Complex Ducting",
          "Manual and Motorized Options",
          "Enhanced Safety and Isolation"
        ]
      },
      {
        question: "Why Choose Pinnacle for Industrial Dampers?",
        answer: "Pinnacle dampers are engineered for performance, endurance, and adaptability. We provide turnkey solutions for any industrial airflow control challenge.",
        points: [
          "Custom Engineered Designs",
          "Wide Range of Actuation",
          "Withstand Harsh Environments",
          "Tight Shut-off & Low Leakage",
          "On-Site Commissioning"
        ]
      }
    ]
  };

  return <InnerPageLayout {...damperData} />;
}
