"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function PrecisionMachiningPage() {
  const serviceData = {
    category: "Service" as const,
    title: "Precision Machining",
    subtitle: "High-accuracy manufacturing of complex components using advanced CNC Turning and Milling.",
    description1: "Precision Machining at Pinnacle ensures high-accuracy manufacturing of complex components using advanced CNC turning and milling technologies. We specialize in tight-tolerance parts for critical applications across aerospace, automotive, medical, and industrial sectors.",
    description2: `
      Our <strong>CNC Turning</strong> services manufacture cylindrical components with exceptional surface finish, while our <strong>CNC Milling</strong> capabilities enable precise 3D contouring and shaping. 
      <br/><br/>
      We guarantee consistent dimensional accuracy and repeatable quality at any production scale, from individual prototypes to high-volume industrial runs. Our expertise in multi-material machining ensures reliability across diverse technical sectors.
    `,
    images: [
      "/images/pinnacle/precission.png",
      "/images/pinnacle/precision_machining/precision_machining1.jpeg",
      "/images/pinnacle/precision_machining/precision_machining5.jpeg",
      "/images/pinnacle/precision_machining/precision_machining12.jpeg",
      "/images/pinnacle/precision_machining/precision_machining20.jpeg"
    ],
    faqs: [
      {
        question: "Why Use Precision Machining?",
        answer: "It is essential for components that meet tight tolerances and exact specifications, ensuring consistent quality and minimal material waste.",
        points: [
          "High Dimensional Accuracy",
          "Excellent Repeatability",
          "Supports Complex Geometries",
          "Tight Tolerance Control",
          "Scalable Production"
        ]
      },
      {
        question: "Why Choose Pinnacle for Machining?",
        answer: "We combine advanced CNC technology with expert engineering to deliver components that meet the highest industrial benchmarks.",
        points: [
          "Advanced Multi-Axis CNC",
          "Metals & Plastics Expertise",
          "Rapid Prototyping Capability",
          "Tolerance Control (0.01mm)",
          "Application-Specific Strategies"
        ]
      }
    ]
  };

  return <InnerPageLayout {...serviceData} />;
}
