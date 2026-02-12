import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Crown, Globe, Gift, TrendingUp, Zap, Target, BarChart3 } from 'lucide-react';
import FloatingShapes from '@/components/3d/FloatingShapes';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useLoader } from "@react-three/fiber"
import { useGLTF, Center, Environment } from '@react-three/drei'
import { TextureLoader } from "three"
import * as THREE from "three"
// The Building Shell
import { useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
// import OwnerBenefits from '@/components/ui/OwnerBenefits';
import HeroSection from '@/components/ui/OurWorkHero';
import AssociateWithUs from '@/components/ui/AssociateWithUs';
import NumberSpeaksLouder from '@/components/ui/ImpactCounters';
import Testimonial from '@/components/ui/Testimonial';
import WorkProcess from '@/components/ui/WorProcess';



const features = [
  {
    icon: Users,
    title: 'Build Customer Community',
    description: 'Transform walk-in customers into loyal community members who keep coming back.',
    link: '/community',
  },
  {
    icon: Crown,
    title: 'Prime Membership',
    description: 'Create exclusive membership programs that convert enquiries into long-term relationships.',
    link: '/prime-members',
  },
  {
    icon: Globe,
    title: 'Digital Presence',
    description: 'Establish trust and visibility where your customers are searching for you.',
    link: '/digital-presence',
  },
  {
    icon: Gift,
    title: 'Loyalty Systems',
    description: 'Smart rewards that increase visit frequency and drive repeat sales.',
    link: '/loyalty-systems',
  },
];

const stats = [
  { value: '3x', label: 'Customer Retention' },
  { value: '47%', label: 'Repeat Purchase Rate' },
  { value: '2.5x', label: 'Average Order Value' },
  { value: '89%', label: 'Customer Satisfaction' },
];

const processSteps = [
  {
    icon: Target,
    title: 'Understand',
    description: 'We analyze your business, customers, and growth opportunities.',
  },
  {
    icon: Zap,
    title: 'Strategize',
    description: 'Craft a tailored growth plan that fits your business model.',
  },
  {
    icon: BarChart3,
    title: 'Execute',
    description: 'Implement systems that drive measurable, sustainable growth.',
  },
];




const Index = () => {
  const images = [
    "/Images/hero.png",
    "/Images/hero2.png",
    "/Images/hero3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    let mounted = true;

    const runFlip = async () => {
      while (mounted) {
        // 1️⃣ First half flip
        await controls.start({
          rotateY: 180,
          transition: { duration: 0.2, ease: "easeIn" },
        });

        // 🔥 CHANGE IMAGE EXACTLY AT FLIP
        setCurrentImage((prev) => (prev + 1) % images.length);

        // 2️⃣ Second half flip
        await controls.start({
          rotateY: 360,
          transition: { duration: 0.2, ease: "easeOut" },
        });

        // Reset rotation (so it doesn't accumulate)
        controls.set({ rotateY: 0 });

        // ⏸️ Wait 5 seconds before next flip
        await new Promise((res) => setTimeout(res, 5000));
      }
    };

    runFlip();
    return () => {
      mounted = false;
    };
  }, [controls, images.length]);

  
  return (
    <>
 <HeroSection />
       
    <section className="relative py-32 bg-[#FCFAF8] overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-stone-200/50 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Left Aligned for a more "Agency" look */}
        <div className="max-w-4xl mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Our Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-amber-950 leading-[1.1] mb-8"
          >
            Everything You Need <br />
            <span className="italic font-light text-stone-500">to Scale.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-stone-600 text-xl max-w-xl leading-relaxed border-l-2 border-amber-500 pl-8"
          >
            A high-performance ecosystem engineered for local businesses to dominate their market and secure long-term capital growth.
          </motion.p>
        </div>

        {/* Feature Grid - Using a 12-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              // Alternate column spans for a more dynamic grid (7 cols and 5 cols)
              className={`${index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"} group`}
            >
              <Link to={feature.link} className="block h-full">
                <div className="relative h-full bg-white border border-stone-200 p-10 transition-all duration-500 group-hover:border-amber-400 group-hover:shadow-[0_20px_50px_rgba(180,83,9,0.05)]">
                  
                  {/* Step Numbering */}
                  <span className="absolute top-10 right-10 text-stone-100 font-serif text-6xl transition-colors duration-500 group-hover:text-amber-50">
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="w-16 h-16 mb-12 flex items-center justify-center bg-stone-50 border border-stone-100 transition-all duration-500 group-hover:bg-amber-500 group-hover:border-amber-500">
                      <feature.icon className="w-7 h-7 text-amber-700 transition-colors duration-500 group-hover:text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-amber-950 mb-4 flex items-center gap-3">
                      {feature.title}
                      <ArrowRight className="w-5 h-5 text-amber-500 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>
                    
                    <p className="text-stone-500 leading-relaxed text-lg max-w-md">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Line Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 transition-all duration-700 group-hover:w-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elegant Footer Line */}
      <div className="mt-32 flex justify-center">
        <div className="w-px h-24 bg-gradient-to-b from-amber-500 to-transparent" />
      </div>
    </section>
  

 <section className="relative min-h-[85vh] flex items-start pt-28 -mt-16 bg-[#fafaf9] overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <motion.div
            animate={controls}
            initial={{ rotateY: 0 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1200,
            }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-amber-300/30 blur-3xl -z-10" />

            {/* Image */}
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Retail Shop System"
              className="
                w-[320px] md:w-[420px] lg:w-[480px]
                rounded-[2.5rem]
                border-[6px] border-amber-500
                shadow-xl
                object-cover
              "
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>


        {/* RIGHT SIDE – Text Content */}
        <div className="w-full lg:w-1/2">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/50 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            <h2 className="text-amber-800 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Retail Shop Owners
            </h2>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Turn Every Walk-In
            </h1>

            <div className="relative inline-block mt-3">
              <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                into a Loyal Customer
              </span>
              <span className="absolute -bottom-2 left-0 w-1/3 h-[5px] rounded-full bg-amber-500" />
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
            We bridge the gap between your physical storefront and digital retention.
            Smart, modern systems built for boutique and retail brands.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-5">
            <button className="bg-amber-600 text-amber-50 px-10 py-4 rounded-full font-extrabold shadow-lg shadow-amber-900/20 hover:bg-amber-950 hover:-translate-y-1 transition-all duration-300">
              Get Started Now
            </button>

            <button className="group flex items-center gap-2 px-6 py-4 text-slate-900 font-bold hover:text-amber-900 transition-colors">
              <span>View Demo</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-amber-500/70 to-transparent blur-[0.5px]" />
    </section>

<AssociateWithUs />
<WorkProcess />
      {/* Process Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1.5 text-sm font-medium rounded-full bg-accent/20 text-accent mb-4"
            >
              Our Approach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg mb-6"
            >
              Simple. Strategic. Sustainable.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/70"
            >
              We don't believe in quick fixes. Our approach builds systems that grow with your business.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-sm font-medium text-accent mb-2">Step {index + 1}</div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NumberSpeaksLouder />
      <Testimonial />
{/* <OwnerBenefits /> */}
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl bg-gradient-to-br from-secondary via-card to-secondary/50 p-10 md:p-16 lg:p-20 text-center overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-olive/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8"
              >
                <TrendingUp className="w-8 h-8 text-accent" />
              </motion.div>
              
              <h2 className="heading-lg mb-6 max-w-2xl mx-auto">
                Ready to Transform Your Business Growth?
              </h2>
              <p className="body-lg max-w-xl mx-auto mb-10">
                Join hundreds of local businesses that have built sustainable customer relationships and predictable revenue.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/community" className="btn-accent group">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link to="/digital-presence" className="btn-outline">
                  See How It Works
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
