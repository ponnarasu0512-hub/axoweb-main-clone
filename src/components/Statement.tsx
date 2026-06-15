import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { CircularText } from "./CircularText";

export const Statement: React.FC = () => {
  return (
    <section id="statement" className="w-full bg-white px-2 sm:px-4 md:px-8 pb-10">
      {/* Black container matching the expertise container style */}
      <div className="gsap-reveal-stagger mx-auto max-w-[1440px] bg-black-rich text-white rounded-[40px] md:rounded-[56px] px-6 py-20 md:px-16 md:py-24 shadow-2xl relative overflow-hidden mt-[-20px] md:mt-[-30px]">
        
        {/* Glowing left accent border line */}
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#6D28FF] via-[#B6E82C] to-[#6D28FF] pointer-events-none z-10" />

        {/* Technical scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-10 opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.012)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none z-10" />

        {/* Corner notches/blueprint marks */}
        <div className="absolute top-4 left-6 w-2 h-2 border-t border-l border-white/20 pointer-events-none" />
        <div className="absolute top-4 right-6 w-2 h-2 border-t border-r border-white/20 pointer-events-none" />
        <div className="absolute bottom-4 left-6 w-2 h-2 border-b border-l border-white/20 pointer-events-none" />
        <div className="absolute bottom-4 right-6 w-2 h-2 border-b border-r border-white/20 pointer-events-none" />


        {/* Soft background radial lighting */}
        <div className="absolute right-[-20%] bottom-[-20%] w-[60%] h-[60%] bg-[#6D28FF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* LEFT: Huge Lime Editorial Text Column (8 cols on lg) */}
          <div className="gsap-reveal-item opacity-0 lg:col-span-8 flex flex-col gap-6">
            <h3 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl xl:text-[54px] leading-[1.05] tracking-tight uppercase text-lime-accent select-none flex flex-wrap gap-x-3 gap-y-1">
              {"REPLACE SPREADSHEETS. AUTOMATE WORK. SCALE SMARTER.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.15, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h3>
          </div>

          {/* RIGHT: Rotating Badge, Stats & Narrative (4 cols on lg) */}
          <div className="gsap-reveal-item opacity-0 lg:col-span-4 flex flex-col items-start lg:items-end gap-10">
            
            {/* Elegant Circular Let's Get Started Badge */}
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="cursor-pointer"
              >
                <CircularText
                  text="LET'S CHAT NOW • SCHEDULE CALL • "
                  id="statement-circle-badge"
                  size={150}
                  color="fill-white"
                  className="bg-purple-accent rounded-full shadow-[0_10px_35px_rgba(109,40,255,0.4)] border border-purple-accent/60 p-2 transform transition-transform"
                  icon={
                    <Sparkles size={20} className="text-lime-accent animate-pulse" />
                  }
                />
              </motion.div>
            </div>

            {/* Stats Block & Text */}
            <div className="flex flex-col gap-4 max-w-sm lg:text-right w-full lg:items-end">
              <div className="flex flex-col sm:flex-row sm:items-baseline lg:justify-end gap-1.5 sm:gap-3">
                <div className="flex items-baseline gap-1 lg:justify-end">
                  <span className="font-sans font-black text-6xl md:text-7xl tracking-tighter text-white">
                    15
                  </span>
                  <span className="font-sans font-black text-4xl text-purple-accent">
                    +
                  </span>
                </div>
                <span className="font-mono text-xs uppercase text-gray-400 tracking-wider block">
                  Projects Delivered
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-medium">
                We take pride in our local delivery, providing world-class execution with modular, future-proof API integrations that prevent technology lockdown and vendor dependence.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
