"use client";

import InnerPageLayout from "@/components/InnerPageLayout";

export default function AboutPage() {
  const aboutData = {
    title: "Precision in Every Layer",
    subtitle: "An ambitious extension of Sri Mahalakshmi Technocrats—redefining excellence in manufacturing and design.",
    description1: "Pinnacle Design Solutions & Manufacturing is a forward-looking venture established as a strategic extension of Sri Mahalakshmi Technocrats—a name built on commitment, reliability, and customer-centric values. We empower engineers to move from concept to component with absolute confidence.",
    description2: `
      Founded with a clear vision to expand our global reach and redefine service standards, Pinnacle represents the next chapter in delivering excellence with agility and purpose. 
      <br/><br/>
      Our foundation is rooted in heritage, but our vision is global. We are actively exploring new markets and international collaborations, bringing our high-precision manufacturing and values-driven approach to customers worldwide. Based in <strong>Shimoga</strong>, our facility serves as a hub for complex engineering solutions.
    `,
    images: [
      "/images/pinnacle/about-job-main.jpg",
      "/images/pinnacle/precission.png",
      "/images/pinnacle/fabrication.png",
      "/images/pinnacle/prototype.png",
      "/images/pinnacle/tooldesgin.png"
    ],
    faqs: [
      {
        question: "Our Heritage",
        answer: "As an extension of Sri Mahalakshmi Technocrats, we carry forward a legacy of reliability and deep industrial expertise.",
        points: ["Sri Mahalakshmi Technocrats Legacy", "Established Reliability", "Global Expansion Vision"]
      },
      {
        question: "Mission & Vision",
        answer: "We aim to build lasting partnerships by aligning with the evolving needs of our clients, offering not just solutions but complete satisfaction.",
        points: ["Customer-Centric Values", "Agility and Purpose", "International Collaboration"]
      }
    ]
  };

  return (
    <InnerPageLayout 
      {...aboutData}
      category="Product"
    />
  );
}
