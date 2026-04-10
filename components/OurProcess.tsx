"use client";

import { motion } from "framer-motion";

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "1",
    title: "Design & Analysis",
    description: "We evaluate your CAD designs and engineering requirements to optimize for manufacturing efficiency and cost.",
  },
  {
    number: "2",
    title: "Rapid Prototyping",
    description: "Fast turnaround using DMLS, Vacuum Casting, or CNC to validate your design in physical form before mass production.",
  },
  {
    number: "3",
    title: "Precision Tooling",
    description: "Our experts develop custom tools, dies, and molds with micron-level accuracy tailored for your specific project.",
  },
  {
    number: "4",
    title: "Scale Production",
    description: "Seamlessly transition to high-volume manufacturing with integrated quality control and massive capacity network.",
  },
];


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function OurProcess() {
  return (
    <section className="relative w-full bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">
            Integrated Precision Workflow.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-gray-600">
            No guesswork. No jargon. Just a structured approach focused on results.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid gap-12 md:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="group relative text-center"
            >
              {/* Number */}
              <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-500 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-200">
                {step.number}

                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full ring-2 ring-blue-200 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
