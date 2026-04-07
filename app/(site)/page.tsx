import HeroCinematic from "@/components/HeroCinematic";
import TechStack from "@/components/TechStack";
import SectionHeader from "@/components/SectionHeader";
import Testimonials from "@/components/Testimonials";
import ServiceGrid from "@/components/ServiceGrid";
import StrategicEcosystem from "@/components/StrategicEcosystem";
import Differentiators from "@/components/Differentiators";
import DynamicCTA from "@/components/DynamicCTA";
import PrimaryCTA from "@/components/PrimaryCTA";

export const metadata = {
  title: "Pinnacle – Flexible Manufacturing for Complex Needs",
  description:
    "Pinnacle empowers you to move from concept to component with speed and confidence. Precision manufacturing from prototyping to scale.",
};

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "Prototype Manufacturing",
    text: "DMLS, Vacuum Casting, Prototype Machining, and Injection Molding for rapid prototyping with no MOQ.",
    icon: "wrench",
    href: "/services/prototype-manufacturing",
  },
  {
    title: "Tool Design & Development",
    text: "Expert design for Stamping, Die casting, Injection moulding, Investment casting, Jigs and Fixtures.",
    icon: "cog",
    href: "/services/tool-design-development",
  },
  {
    title: "Precision Machining",
    text: "High-precision CNC Turning, Milling, Micro Machining, and Multi-Material Machining for complex parts.",
    icon: "factory",
    href: "/services/precision-machining",
  },
  {
    title: "Refurbishment",
    text: "Specialized Valve Overhauling, Damper Refurbishment, and Gasket Replacement services.",
    icon: "wrench",
    href: "/services/refurbishment",
  },
  {
    title: "Fabrication",
    text: "Advanced Laser Cutting, Welding, Bending, and Sheet Metal Fabrication for industrial needs.",
    icon: "box",
    href: "/services/fabrication",
  },
  {
    title: "Industrial Products",
    text: "High-quality Industrial Valves and Dampers engineered for performance and reliability.",
    icon: "factory",
    href: "/products",
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
            description="One Partner. Every Process. Pinnacle empowers you to move from concept to component with speed and confidence."
          />
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* ================= STRATEGIC ECOSYSTEM ================= */}
      <StrategicEcosystem />

      {/* ================= TESTIMONIALS ================= */}
      <Differentiators />
      <DynamicCTA />
      <Testimonials />

    </main>
  );
}
