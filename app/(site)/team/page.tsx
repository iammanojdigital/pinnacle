"use client";

import InnerPageLayout from "@/components/InnerPageLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

export default function TeamPage() {
  const teamData = {
    title: "The Expert Team",
    subtitle: "Precision engineering driven by veteran leadership and a results-oriented execution culture.",
    description1: "Leadership at Pinnacle is defined by technical rigor and a commitment to global manufacturing excellence. Our directors bridge the gap between complex engineering concepts and world-class industrial execution.",
    description2: `
      Our core team is comprised of <strong>AWS-certified specialists</strong> and veteran mechanical engineers who have delivered components to global industrial partners. 
      <br/><br/>
      Operating under a strict <strong>ISO 9001:2015</strong> framework, we ensure that every stage of our production—from prototype to mass scale—adheres to the highest benchmarks of industrial safety and precision engineering.
    `,
    category: "Service" as const,
    images: [
      "/images/pinnacle/Refurbishment.png",
      "/images/pinnacle/profile-pic/rahul-profile.jpg",
      "/images/pinnacle/vector-man.jpg",
      "/images/pinnacle/tooldesgin.png",
      "/images/pinnacle/precission.png"
    ],
    faqs: [
      {
        question: "Professional Certifications",
        answer: "Our team maintains active AWS Certified Welding credentials and operates within an ISO 9001:2015 certified environment.",
        points: ["ISO 9001:2015", "AWS Certified Team", "MSME Registered"]
      },
      {
        question: "Design Expertise",
        answer: "Our mechanical designers specialize in complex GHE, Aerospace systems, and high-pressure valvular mechanisms.",
        points: ["Mechanical Design", "Hydraulic Systems", "Blueprint Validation"]
      }
    ]
  };

  const leaders = [
    {
      name: "Parikshitha",
      role: "Director, Pinnacle",
      image: "/images/pinnacle/vector-man.jpg",
      linkedin: "https://www.linkedin.com/company/pinnacle-design-solutions-manufacturing-pvt-ltd/about/"
    }
  ];

  return (
    <InnerPageLayout 
      {...teamData}
      hideGallery={true}
      disableZoom={true}
      tiltCardLabel="Rahul, Director"
    >
      <div className="py-20">
        <h3 className="text-3xl sm:text-5xl font-black mb-16 tracking-tighter text-center">Executive Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -12, 0] }}
              transition={{ 
                delay: idx * 0.2,
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 } 
              }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-white/5">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-60" />
                
                {/* Social Overlay */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <a 
                    href={leader.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/20 hover:scale-110 transition-all"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h4 className="text-2xl font-black text-white mb-2">{leader.name}</h4>
                <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </InnerPageLayout>
  );
}
