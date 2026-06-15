import React from "react";
import { Award, Zap, Shield, Sparkles, Database, Cpu, Globe, Layers } from "lucide-react";

export const Clients: React.FC = () => {
  // Core Engineering Tech Stack
  const brandRow1 = [
    { name: "React", icon: <Award size={18} /> },
    { name: "Next.js", icon: <Zap size={18} /> },
    { name: "TypeScript", icon: <Shield size={18} /> },
    { name: "Node.js", icon: <Cpu size={18} /> },
  ];

  const brandRow2 = [
    { name: "GSAP", icon: <Sparkles size={18} /> },
    { name: "Tailwind CSS", icon: <Layers size={18} /> },
    { name: "Cloudflare", icon: <Globe size={18} /> },
    { name: "PostgreSQL", icon: <Database size={18} /> },
  ];

  return (
    <section id="client" className="gsap-reveal-stagger w-full bg-white py-16 md:py-24 overflow-hidden border-t border-b border-gray-light/40">
      <div className="gsap-reveal-item opacity-0 mx-auto max-w-[1440px] px-6 text-center mb-8">
        <p className="font-mono text-[10px] tracking-widest text-gray-mid font-semibold uppercase">
          ENGINEERED WITH INDUSTRY STANDARDS
        </p>
      </div>

      <div className="gsap-reveal-item opacity-0 flex flex-col gap-8">
        {/* ROW 1: Running Left to Right */}
        <div className="relative flex overflow-x-hidden w-full group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-24 items-center">
            {/* Double the array for seamless infinite looping */}
            {[...brandRow1, ...brandRow1, ...brandRow1, ...brandRow1].map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-black-rich/30 hover:text-purple-accent/80 transition-colors duration-300 font-display text-xl md:text-2xl font-black tracking-widest uppercase cursor-pointer select-none"
              >
                {brand.icon}
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
          {/* Loop protection gradient on left/right ends */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* ROW 2: Running Left to Right but slightly offset */}
        <div className="relative flex overflow-x-hidden w-full group py-1">
          <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-24 items-center" style={{ animationDirection: "reverse", animationDuration: "36s" }}>
            {[...brandRow2, ...brandRow2, ...brandRow2, ...brandRow2].map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-black-rich/30 hover:text-lime-accent/80 transition-colors duration-300 font-display text-xl md:text-2xl font-black tracking-widest uppercase cursor-pointer select-none"
              >
                {brand.icon}
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
