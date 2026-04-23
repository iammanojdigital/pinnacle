"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function WeldingExpertisePage() {
  const serviceData = {
    category: "Service" as const,
    title: "Welding Expertise",
    subtitle: "High-integrity welding solutions for Aerospace, Oil & Gas, and Industrial applications.",
    description1: "Pinnacle provides AWS-certified TIG, MIG, and Laser welding across a diverse range of materials including stainless steel, aluminium, and specialized alloys. We specialize in precision joining of critical components where structural integrity and micron-level accuracy are paramount.",
    description2: `
      Our welding expertise extends to <strong>structural fabrication</strong> of load-bearing frames and handling rigs, as well as complex pressure vessel assemblies for the oil and gas sector. 
      <br/><br/>
      Every weldment undergoes rigorous inspection and non-destructive testing (NDT) to ensure compliance with international aerospace and industrial standards. We combine manual craftsmanship with semi-automated processes to deliver consistent quality for both prototypes and batch production.
    `,
    images: [
      "/images/pinnacle/fabrication/fab1.jpeg",
      "/images/pinnacle/fabrication/fab1.jpeg",
      "/images/pinnacle/fabrication/fab2.jpeg",
      "/images/pinnacle/fabrication/fab3.jpeg"
    ],
    faqs: [
      {
        question: "What welding certifications does Pinnacle hold?",
        answer: "Our technicians are certified to AWS standards, specializing in high-precision TIG and MIG processes for aerospace and industrial materials.",
        points: [
          "AWS Certified Technicians",
          "Aerospace Material Expertise",
          "High-Pressure Vessel Welds",
          "Clean-Room Capable Joining",
          "NDT Verified Structural Integrity"
        ]
      }
    ]
  };

  return <InnerPageLayout {...serviceData} />;
}
