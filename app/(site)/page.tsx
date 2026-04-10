import HeroCinematic from "@/components/HeroCinematic";
import TechStack from "@/components/TechStack";
import SectionHeader from "@/components/SectionHeader";

import ServiceGrid from "@/components/ServiceGrid";
import StrategicEcosystem from "@/components/StrategicEcosystem";
import Differentiators from "@/components/Differentiators";
import DynamicCTA from "@/components/DynamicCTA";
import PrimaryCTA from "@/components/PrimaryCTA";

export const metadata = {
  title: "Pinnacle Design Solutions & Manufacturing",
  description:
    '"Pinnacle Design Solutions & Manufacturing" empower you to move from concept to component with absolute confidence. Precision manufacturing from prototyping to scale.',
};

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "CNC Machining",
    text: "3-axis, 4-axis, and 5-axis machining centres designed for handling complex geometries.",
    icon: "factory",
    href: "/services",
  },
  {
    title: "Turning & Milling",
    text: "Advanced CNC lathes equipped with live tooling capabilities alongside high-speed milling.",
    icon: "cog",
    href: "/services",
  },
  {
    title: "Sheet Metal Fabrication",
    text: "Precision stamping, bending, and forming processes combined with optimized nesting.",
    icon: "box",
    href: "/services",
  },
  {
    title: "Welding Expertise",
    text: "AWS-certified TIG, MIG, and Laser welding across steel, aluminium, and special metals.",
    icon: "wrench",
    href: "/services",
  },
  {
    title: "Engineering Services",
    text: "Comprehensive product design architectures accompanied by extensive Reverse Engineering.",
    icon: "wrench",
    href: "/services",
  },
  {
    title: "Special Processes",
    text: "End-to-end finishing including PU coating, Anodizing, Black & Sulphide oxide, and NDT.",
    icon: "factory",
    href: "/services",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <HeroCinematic />
      <TechStack />

      {/* ================= WHAT WE BUILD ================= */}
      <section className="relative bg-white pt-16 sm:pt-32 pb-20 sm:pb-44 overflow-hidden">
        {/* Subtle Animated Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.5) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Precision Engineering"
            title="Manufacturing"
            titleAccent="Redefined"
            description="One Partner. Every Process. We empower you to move from concept to component with absolute confidence."
          />
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* ================= STRATEGIC ECOSYSTEM ================= */}
      <StrategicEcosystem />

      {/* ================= TESTIMONIALS ================= */}
      <Differentiators />
      <DynamicCTA />

    </main>
  );
}
