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



{/* Features Section */}
<section className="relative pt-14 pb-28 bg-[#fafaf9] overflow-hidden">
  <div className="container-wide">

    {/* Heading – pulled upward */}
    <div className="mb-14">
      <SectionHeading
        tag="Our Solutions"
        title="Everything You Need to Grow"
        description="A complete system designed specifically for local businesses to build lasting customer relationships and sustainable revenue."
      />
    </div>

    {/* Decorative background glow */}
    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-200/30 blur-[140px] -z-10" />

    {/* Feature Grid */}
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {features.map((feature, index) => (
        <Link to={feature.link} key={feature.title} className="group">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="
              relative h-full
              rounded-2xl
              bg-white/70 backdrop-blur
              border border-slate-200/60
              p-7
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-amber-900/10
            "
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-amber-300/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative flex items-start gap-5">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-amber-100/70 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-amber-200">
                <feature.icon className="w-6 h-6 text-amber-800" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                  {feature.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </div>

  {/* Bottom divider (matches previous section) */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
</section>

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
