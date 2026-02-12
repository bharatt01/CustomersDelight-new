import React, { memo } from "react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The 7-point formula isn't just theory. We saw a 40% increase in repeat footfall within the first three months of partnering with Shoppers Club.",
    author: "Arjun Mehta",
    position: "Managing Director",
    company: "Mehta Lifestyle Retail"
  },
  {
    quote: "Their understanding of the Faridabad consumer landscape is unmatched. They helped us build a digital presence that actually converts walk-ins.",
    author: "Sonia Verma",
    position: "Founder",
    company: "The Wellness Collective"
  },
  {
    quote: "Professional, data-driven, and results-oriented. Customers Delight transformed how we look at customer loyalty and rewards.",
    author: "Rajesh Khanna",
    position: "Operations Head",
    company: "Khanna Automobiles"
  }
];

const ClientTestimonials: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Testimonials
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-amber-950 leading-none">
              What Our <span className="italic">Clients Say.</span>
            </h2>
          </div>
          <p className="text-stone-500 text-lg max-w-xs border-l border-amber-500 pl-6">
            Real growth stories from Faridabad’s leading business owners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {testimonials.map((t, index) => (
            <div key={index} className="group relative">
              {/* Decorative Large Quote Mark */}
              <span className="text-8xl font-serif text-amber-100 absolute -top-10 -left-4 select-none group-hover:text-amber-200 transition-colors duration-500">
                &ldquo;
              </span>
              
              <div className="relative z-10">
                <blockquote className="text-xl leading-relaxed text-stone-800 mb-8 font-light italic">
                  "{t.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder / Initial */}
                  <div className="w-12 h-12 rounded-full bg-amber-950 flex items-center justify-center text-amber-500 font-bold">
                    {t.author.charAt(0)}
                  </div>
                  
                  <div>
                    <h4 className="text-amber-950 font-bold tracking-tight">
                      {t.author}
                    </h4>
                    <p className="text-amber-600 text-xs uppercase tracking-widest font-semibold">
                      {t.position} <span className="text-stone-300 mx-1">|</span> {t.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle hover line */}
              <div className="mt-12 w-8 h-[1px] bg-amber-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom Context */}
        <div className="mt-24 pt-12 border-t border-stone-100 flex flex-col items-center">
          <p className="text-stone-400 text-sm mb-6">Trusted by 250+ businesses across the region</p>
          <div className="flex gap-8 grayscale opacity-40 hover:opacity-100 transition-all duration-700 cursor-default">
            {/* You can add small partner logos here */}
            <span className="font-serif text-2xl font-bold">RETAIL CO.</span>
            <span className="font-serif text-2xl font-bold">LUXE FARIDABAD</span>
            <span className="font-serif text-2xl font-bold">AUTO HUB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ClientTestimonials);