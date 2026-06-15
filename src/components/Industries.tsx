import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import gsap from "gsap";
import {
  Factory,
  HeartPulse,
  Home,
  ShoppingBag,
  Rocket,
  TrendingUp,
  Briefcase,
  Utensils,
  Truck,
  GraduationCap,
  Sparkles
} from "lucide-react";

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  index?: number;
}

const IndustryCard: React.FC<CardData> = ({ icon, title, subtitle, index = 0 }) => {
  const cardNum = ((index % 5) + 1).toString().padStart(2, "0");

  return (
    <div
      className="w-[320px] h-[240px] shrink-0 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-md p-8 flex flex-col justify-center gap-5 relative overflow-hidden select-none transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#B6E82C]/40 group-hover:bg-white/[0.04] group-hover:shadow-[0_20px_50px_rgba(182,232,44,0.08)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      {/* Corner notches/blueprint marks */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#B6E82C]/50 transition-colors pointer-events-none" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#B6E82C]/50 transition-colors pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#B6E82C]/50 transition-colors pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#B6E82C]/50 transition-colors pointer-events-none" />

      {/* Expanding bottom highlight line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#6D28FF] to-[#B6E82C] group-hover:w-[90%] transition-all duration-500 pointer-events-none" />

      {/* Background large outline number */}
      <div 
        className="absolute bottom-4 right-6 font-sans font-black text-7xl text-white/[0.015] group-hover:text-[#B6E82C]/10 transition-all duration-300 select-none pointer-events-none"
        style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.02)" }}
      >
        {cardNum}
      </div>


      {/* Icon Frame animates upward slightly */}
      <div className="text-[#B6E82C] shrink-0 group-hover:-translate-y-1 transition-transform duration-300">
        {icon}
      </div>

      {/* Text shifts slightly on hover */}
      <div className="flex flex-col gap-2 group-hover:translate-x-1 transition-transform duration-300">
        <h3 className="font-sans font-bold text-[17px] text-white uppercase tracking-tight leading-tight">
          {title}
        </h3>
        <p className="font-sans text-xs text-[#8B95A7] font-semibold leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export const Industries: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Row 1 & Row 2 items to populate marquee
  const row1Items: CardData[] = [
    { id: "raw1-1", title: "Manufacturing", subtitle: "Supply chain visibility", icon: <Factory size={26} /> },
    { id: "raw1-2", title: "Healthcare", subtitle: "HIPAA-compliant systems", icon: <HeartPulse size={26} /> },
    { id: "raw1-3", title: "Real Estate", subtitle: "Automated lead tracking", icon: <Home size={26} /> },
    { id: "raw1-4", title: "Retail", subtitle: "Omnichannel integration", icon: <ShoppingBag size={26} /> },
    { id: "raw1-5", title: "Startups & SaaS", subtitle: "Faster time-to-market", icon: <Rocket size={26} /> },
  ];

  const row2Items: CardData[] = [
    { id: "raw2-1", title: "Finance", subtitle: "Secure data handling", icon: <TrendingUp size={26} /> },
    { id: "raw2-2", title: "Professional Services", subtitle: "Client onboarding automation", icon: <Briefcase size={26} /> },
    { id: "raw2-3", title: "Hospitality", subtitle: "Booking systems", icon: <Utensils size={26} /> },
    { id: "raw2-4", title: "Logistics", subtitle: "Real-time tracking", icon: <Truck size={26} /> },
    { id: "raw2-5", title: "Education", subtitle: "Student portals", icon: <GraduationCap size={26} /> },
  ];

  // Repeat components to generate a continuous visual track
  const duplicatedRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const duplicatedRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items];

  // Track progress of parent segment in standard frame screen viewport scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Dual direction scroll translation: Top moves right, bottom moves left as scroll down
  const rawX1 = useTransform(scrollYProgress, [0, 1], [-250, 250]);
  const rawX2 = useTransform(scrollYProgress, [0, 1], [250, -250]);

  // Buttery-smooth spring motion representing GSAP scrub: 1.5
  const slideX1 = useSpring(rawX1, { damping: 18, stiffness: 35 });
  const slideX2 = useSpring(rawX2, { damping: 18, stiffness: 35 });

  return (
    <section 
      ref={containerRef}
      id="industries" 
      className="gsap-reveal-stagger w-full bg-[#050505] text-white py-24 sm:py-32 relative overflow-hidden select-none"
    >
      {/* 1. Low-opacity AXOWEB logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.015] select-none overflow-hidden">
        <span className="font-sans font-black text-[30vw] tracking-tighter uppercase leading-none">
          AXOWEB
        </span>
      </div>

      {/* 2. Delicate technical grid pattern layout overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.012)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none z-10" />

      {/* 3. Noise texture overlay (3% opacity) */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-10 mix-blend-overlay" />

      {/* 4. Large blurred neon gradient purple & lime blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-[#6D28FF]/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-15%] w-[600px] h-[600px] bg-[#B6E82C]/6 rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="relative z-20 w-full text-center flex flex-col items-center">
        
        {/* SECTION HEADER BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="gsap-reveal-item opacity-0 flex flex flex-col items-center justify-center gap-4 mb-20 max-w-4xl"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B6E82C]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#B6E82C]">
              INDUSTRIES
            </span>
          </div>

          <h2 className="font-sans font-black text-[36px] sm:text-[52px] lg:text-[72px] leading-tight uppercase tracking-tight text-white">
            Industries We Serve
          </h2>

          <p className="font-sans text-sm sm:text-lg text-[#8B95A7] font-semibold leading-relaxed max-w-2xl mt-1">
            Tailored digital systems for every sector.
          </p>
        </motion.div>
      </div>

      {/* SECTOR CAROUSEL WRAPPERS WITH PERSPECTIVE */}
      <div className="gsap-reveal-item opacity-0 w-full flex flex-col gap-10 mt-10 relative overflow-hidden z-20">
        
        {/* ROW 1: Glides continuous RIGHT (represented by springX1) */}
        <div 
          className="w-full flex items-center justify-center"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d"
          }}
        >
          <motion.div 
            style={{ 
              x: slideX1,
              transformStyle: "preserve-3d",
              rotateY: "3deg"
            }}
            className="flex gap-6 shrink-0 pr-12 pl-12"
          >
            {duplicatedRow1.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className="group opacity-80 scale-95 transition-all duration-300 pointer-events-none select-none"
              >
                <IndustryCard 
                  id={item.id} 
                  title={item.title} 
                  subtitle={item.subtitle} 
                  icon={item.icon} 
                  index={idx}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Glides continuous LEFT (represented by springX2) */}
        <div 
          className="w-full flex items-center justify-center"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d"
          }}
        >
          <motion.div 
            style={{ 
              x: slideX2,
              transformStyle: "preserve-3d",
              rotateY: "-3deg"
            }}
            className="flex gap-6 shrink-0 pr-12 pl-12"
          >
            {duplicatedRow2.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className="group opacity-80 scale-95 transition-all duration-300 pointer-events-none select-none"
              >
                <IndustryCard 
                  id={item.id} 
                  title={item.title} 
                  subtitle={item.subtitle} 
                  icon={item.icon} 
                  index={idx}
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>

    </section>
  );
};
