import React from "react";
import { motion, Variants } from "framer-motion";
import { Lightbulb, Users, Plane, CheckCircle, LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const processSteps: Step[] = [
  { icon: Lightbulb, title: "Discovery", desc: "A deep dive into your unique market requirements and growth goals." },
  { icon: Users, title: "Alignment", desc: "Strategic joint planning with your team for a seamless integration." },
  { icon: Plane, title: "Activation", desc: "Agile execution delivering high-impact results with precision." },
  { icon: CheckCircle, title: "Optimization", desc: "Continuous performance monitoring and long-term support." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const WorkProcess: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            The Methodology
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-amber-950">
            How We <span className="italic font-light text-stone-500">Work.</span>
          </h2>
        </div>

        {/* Process Roadmap */}
        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Subtle connecting line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-0 w-full h-px bg-stone-200 -z-0" />

          {processSteps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="relative group flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
            >
              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-white border border-stone-200 flex items-center justify-center transition-all duration-500 group-hover:border-amber-500 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] mb-8">
                <Icon className="w-8 h-8 text-amber-950 group-hover:text-amber-600 transition-colors" />
                
                {/* Step Marker */}
                <div className="absolute -top-3 -right-3 w-7 h-7 bg-amber-950 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-4 border-white">
                  0{i + 1}
                </div>
              </div>

              {/* Text Content */}
              <div className="px-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-600 font-bold block mb-2">
                  Phase {i + 1}
                </span>
                <h3 className="text-xl font-bold text-amber-950 mb-4 tracking-tight">
                  {title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                  {desc}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-4 bg-amber-50/50 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500 rounded-xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-24 text-center">
          <p className="text-stone-400 text-sm italic">
            Transparent. Systematic. Scalable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;