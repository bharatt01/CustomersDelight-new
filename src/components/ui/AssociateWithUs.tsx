import React, { memo } from "react";
import { IconType } from "react-icons";
import {
  FaUsers,
  FaBullhorn,
  FaGift,
  FaChartLine,
  FaUsersCog,
  FaSyncAlt,
  FaHashtag,
} from "react-icons/fa";

interface Point {
  title: string;
  description: string;
  icon: IconType;
}

const points: Point[] = [
  { title: "Bring More Customers", description: "Scale your daily customer influx through Shoppers Club Faridabad's network.", icon: FaUsers },
  { title: "Reach Out to All", description: "Implement effective outreach strategies to capture the entire Faridabad market.", icon: FaBullhorn },
  { title: "Create Loyalty Rewards", description: "Develop high-retention reward systems for sustainable long-term growth.", icon: FaGift },
  { title: "Strong Digital Presence", description: "Establish brand authority and trust through a cohesive digital footprint.", icon: FaChartLine },
  { title: "Build Loyal Community", description: "Cultivate a dedicated community of brand advocates and repeat buyers.", icon: FaUsersCog },
  { title: "Convert Walk-ins", description: "Transform one-time visitors into lifecycle customers for sustained sales.", icon: FaSyncAlt },
  { title: "Leverage Social Media", description: "Harness Instagram, Facebook, and YouTube to build local brand equity.", icon: FaHashtag },
];

const SevenPointCards: React.FC = () => {
  return (
    <section className="bg-[#FCFAF8] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            The Growth Framework
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-amber-950 leading-tight mb-8">
            7 Point Formula to <span className="italic">Double Your Sale</span> in 12 Months
          </h2>
          <div className="h-1 w-24 bg-amber-500 mb-8" />
          <p className="text-stone-600 text-lg leading-relaxed">
            We are <span className="text-amber-900 font-semibold">Customers Delight</span>. Based in Faridabad, we provide a strategic roadmap to scale your business through data-driven steps.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-px bg-stone-200 overflow-hidden border border-stone-200 rounded-sm md:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, description, icon: Icon }, index) => (
            <article
              key={index}
              className="bg-white p-10 group transition-all duration-500 hover:bg-amber-50/30"
            >
              <div className="flex flex-col h-full">
                {/* Number and Icon Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-sm group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                    <Icon className="text-2xl" />
                  </div>
                  <span className="text-stone-300 font-mono text-4xl group-hover:text-amber-200 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-amber-950 mb-4 tracking-tight">
                  {title}
                </h3>
                <p className="text-stone-500 leading-relaxed text-sm flex-grow">
                  {description}
                </p>

                {/* Decorative Bottom Bar */}
                <div className="mt-8 w-0 h-[2px] bg-amber-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
          
          {/* Final CTA Card - Integrating the button into the grid */}
          <article className="bg-amber-600 p-10 flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-2xl font-bold mb-6 italic">Ready to scale?</h3>
            <button className="w-full py-4 px-6 border border-white/30 hover:bg-white hover:text-amber-700 transition-all font-bold uppercase tracking-widest text-xs">
              Join Customers Delight
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default memo(SevenPointCards);