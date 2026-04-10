"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function RefurbishmentPage() {
  const serviceData = {
    category: "Service" as const,
    title: "Refurbishment Services",
    subtitle: "Extending the service life and optimizing the performance of industrial valves and dampers.",
    description1: "Pinnacle offers comprehensive refurbishment solutions for industrial valves and dampers, ensuring extended service life and optimized performance. Our skilled team restores worn or damaged components to OEM or better standards, helping you avoid costly replacements.",
    description2: `
      Our refurbishment process includes <strong>Precision Machining</strong>, surface treatment, seal replacement, and functional testing. We handle butterfly and gate valves as well as dampers and actuators of various makes and models. 
      <br/><br/>
      Each unit follows strict quality protocols and uses <strong>traceable materials</strong> to meet industrial safety standards. From seal and gasket replacement to complete valve overhauling, we deliver field-proven results with fast turnaround.
    `,
    images: [
      "/images/pinnacle/Refurbishment.png",
      "/images/pinnacle/refurbishment/refurbishment1.jpeg",
      "/images/pinnacle/refurbishment/refurbishment2.jpeg",
      "/images/pinnacle/refurbishment/refurbishment3.jpeg",
      "/images/pinnacle/service-details.png"
    ],
    faqs: [
      {
        question: "Why Refurbish Instead of Replacing?",
        answer: "Refurbishment significantly reduces costs and lead times while maintaining performance and compliance. It also supports sustainability by extending asset life.",
        points: [
          "Cost-Effective Alternative",
          "Improved Equipment Longevity",
          "Reduced Downtime",
          "Sustainability Through Reuse",
          "OEM-Level Testing"
        ]
      },
      {
        question: "Why Choose Pinnacle for Refurbishment?",
        answer: "We combine mechanical expertise with advanced machining and a rigorous testing process to restore your critical components to peak condition.",
        points: [
          "Specialized Valve/Damper Team",
          "In-House Inspection",
          "Reverse Engineering Support",
          "Fast Turnaround",
          "Legacy Component Support"
        ]
      }
    ]
  };

  return <InnerPageLayout {...serviceData} />;
}
