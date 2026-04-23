"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function ToolDesignPage() {
  const serviceData = {
    category: "Service" as const,
    title: "Tool Design and Development",
    subtitle: "Precision-engineered tooling solutions for stamping, die casting, and high-volume injection moulding.",
    description1: "Pinnacle provides end-to-end Tool Design and Development solutions tailored for high-performance manufacturing processes including stamping, die casting, injection moulding, and investment casting. We specialize in custom jigs and fixtures to ensure precision, repeatability, and production efficiency across all stages.",
    description2: `
      Our engineering core develops <strong>Stamping tools</strong> for high-speed metal forming, <strong>Die Casting tooling</strong> for complex metal components, and <strong>Injection Moulds</strong> optimized for consistent material flow. 
      <br/><br/>
      We also develop specialized <strong>Investment Casting</strong> dies for aerospace and defense, as well as custom jigs and fixtures that ensure correct positioning and alignment during assembly. Every tool is engineered for durability and maximum production uptime.
    `,
    images: [
      "/images/pinnacle/tooldesgin.png",
      "/images/pinnacle/tool_design/tool_design1.jpeg",
      "/images/pinnacle/tool_design/tool_design2.jpeg",
      "/images/pinnacle/tool_design/tool_design5.jpeg",
      "/images/pinnacle/tool_design/tool_design12.jpeg"
    ],
    faqs: [
      {
        question: "Why is Tool Design Crucial?",
        answer: "Well-engineered tools such as dies and moulds ensure accurate part production, reduce material waste, and minimize downtime.",
        points: [
          "Increased Tool Life & Durability",
          "Improved Production Efficiency",
          "Enhanced Product Quality",
          "Cost Optimization",
          "Seamless Automation Integration"
        ]
      },
      {
        question: "Why Choose Pinnacle for Tooling?",
        answer: "We combine decades of experience with advanced CAD/CAM capabilities to deliver tools that prioritize precision and ease of use.",
        points: [
          "Process-Specific Tool Expertise",
          "Integrated CAD/CAM Workflow",
          "High-Strength Materials",
          "Precision Jigs & Fixtures",
          "Collaborative Engineering Support"
        ]
      }
    ]
  };

  return <InnerPageLayout {...serviceData} />;
}
