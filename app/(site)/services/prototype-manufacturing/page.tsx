"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function PrototypeManufacturingPage() {
  const serviceData = {
    category: "Service" as const,
    title: "Engineering Services",
    subtitle: "Turning complex engineering ideas into functional industrial prototypes with speed and precision.",
    description1: "Pinnacle provides comprehensive prototype manufacturing services tailored to fast-paced product development. We help innovators turn ideas into tangible prototypes using precision CNC, wire EDM, and sheet metal processes. Whether it's a single test part or a small batch, we ensure rapid turnaround without compromising on material properties or tolerances.",
    description2: `
      Our expertise spans metal, plastic, and composite prototyping with traceable quality and industrial accuracy. By eliminating minimum order quantities, we support <strong>agile product testing</strong>, low-volume pilots, and early-stage production. 
      <br/><br/>
      We offer <strong>DFM (Design for Manufacturability)</strong> analysis to ensure your prototype is production-ready from day one. We also build custom jigs and gauges to simulate operational environments and validate part functionality in real time.
    `,
    images: [
      "/images/pinnacle/prototype.png",
      "/images/pinnacle/prototype/prototype1.jpeg",
      "/images/pinnacle/prototype/prototype2.jpeg",
      "/images/pinnacle/prototype/prototype3.jpeg",
      "/images/pinnacle/prototype/prototype5.jpeg"
    ],
    faqs: [
      {
        question: "Why Start With Prototype Injection Molding?",
        answer: "Prototype injection molding bridges the gap between modeling and full-scale production. It offers quick functional testing and helps uncover production issues early on.",
        points: [
          "Production-like Material Properties",
          "Efficient Fit & Function Testing",
          "Shorter Design Cycles",
          "Ideal for Pilot Runs",
          "Cost-effective Validation"
        ]
      },
      {
        question: "Why Choose Pinnacle for Prototype Manufacturing?",
        answer: "We offer industry-grade prototype services with zero MOQ requirements. Our in-house tooling and diverse material capabilities make us ideal for R&D and innovation labs.",
        points: [
          "Zero MOQ Policy",
          "Rapid Prototyping Tools",
          "End-to-End Engineering Support",
          "Diverse Material Options",
          "Agile and Accurate Outputs"
        ]
      }
    ]
  };

  return <InnerPageLayout {...serviceData} />;
}
