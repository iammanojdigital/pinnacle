"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function FabricationPage() {
  const serviceData = {
    category: "Service" as const,
    title: "Sheet Metal Fabrication",
    subtitle: "Complete metal fabrication solutions from laser cutting and bending to complex structural assembly.",
    description1: "Pinnacle provides comprehensive metal fabrication services including cutting, bending, welding, assembly, and finishing for a wide variety of metals and alloys. Using advanced CNC laser cutting, press brakes, robotic welding, and skilled craftsmanship, we deliver parts and assemblies with tight tolerances and consistent quality.",
    description2: `
      Our team collaborates closely with customers to optimize designs for <strong>manufacturability, cost, and strength</strong>. We handle complex assemblies, incorporating machining, surface treatment, and inspection as required. 
      <br/><br/>
      Whether you need frames, brackets, enclosures, or custom sheet metal assemblies, Pinnacle fabrication ensures <strong>structural integrity</strong> and compliance with industry standards. We provide reliable and scalable solutions that accelerate your project timelines from concept to completion.
    `,
    images: [
      "/images/pinnacle/fabrication.png",
      "/images/pinnacle/fabrication/fab1.jpeg",
      "/images/pinnacle/fabrication/fab2.jpeg",
      "/images/pinnacle/fabrication/fab3.jpeg",
      "/images/pinnacle/fabrication/fab5.jpeg"
    ],
    faqs: [
      {
        question: "What are the advantages of Pinnacle Fabrication?",
        answer: "We offer flexibility and precision, enabling production of complex metal assemblies with consistent quality and structural integrity.",
        points: [
          "High Accuracy Cutting & Forming",
          "Advanced Welding Techniques",
          "Custom Assembly Solutions",
          "Surface Finishing Options",
          "Quick Turnaround"
        ]
      },
      {
        question: "Why choose Pinnacle for Fabrication?",
        answer: "We deliver end-to-end fabrication with state-of-the-art equipment and experienced technicians, ensuring your project moves from concept to completion with confidence.",
        points: [
          "Modern CNC Equipment",
          "Experienced Welding Team",
          "Full Project Management",
          "Quality Assurance Systems",
          "Flexible Production Volumes"
        ]
      }
    ]
  };

  return <InnerPageLayout {...serviceData} />;
}
