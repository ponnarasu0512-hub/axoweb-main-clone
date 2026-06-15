import React, { useRef } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { 
  ArrowUpRight, 
  Layout, 
  Server, 
  Bot, 
  Cpu, 
  Lock 
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isSpecial?: boolean;
}

const ServiceVisual: React.FC<{ id: string }> = ({ id }) => {
  const images: Record<string, string> = {
    "web-development": "/web-dev-mockup-new.png",
    "internal-systems": "/internal-sys-mockup-new.png",
    "ai-solutions": "/ai-sol-mockup-new.png",
    "automation-systems": "/auto-sys-mockup-new.png",
    "security-privacy": "/security-mockup-new.png",
  };

  const src = images[id];
  if (!src) return null;

  return (
    <div className="w-full h-[220px] bg-black-rich/50 rounded-2xl border border-white/10 overflow-hidden mt-5 group-hover:border-[#B6E82C]/30 transition-all duration-300 relative select-none pointer-events-none">
      <img
        src={src}
        alt={`${id} illustration`}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        loading="lazy"
      />
      {/* Subtle glass glare overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export const Expertise: React.FC = () => {
  const navigate = useNavigate();

  const services: ServiceItem[] = [
    {
      id: "web-development",
      title: "Web Development",
      description: "High-conversion, mobile-first websites and e-commerce platforms designed to attract, engage, and convert leads into loyal customers.",
      icon: <Layout className="text-lime-accent" size={24} />,
      isSpecial: false,
    },
    {
      id: "internal-systems",
      title: "Internal Systems",
      description: "Custom-built, database-driven enterprise systems that replace fragmented workflows and spreadsheets with unified admin portals.",
      icon: <Server className="text-purple-accent" size={24} />,
      isSpecial: false,
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      description: "Intelligent systems that automate support, understand documents, and make predictions built around your actual business use cases.",
      icon: <Bot className="text-lime-accent animate-bounce-slow" size={24} />,
      isSpecial: true,
    },
    {
      id: "automation-systems",
      title: "Automation Systems",
      description: "Establish robust, rule-based custom API pipelines that sync tools and completely eliminate repetitive manual entry.",
      icon: <Cpu className="text-purple-accent" size={24} />,
      isSpecial: false,
    },
    {
      id: "security-privacy",
      title: "Security & Privacy",
      description: "Granular access roles, secure cloud configurations, data encryption, and automatic backups protecting company intellectual property.",
      icon: <Lock className="text-lime-accent" size={24} />,
      isSpecial: false,
    },
  ];

  return (
    <section id="service" className="w-full bg-white px-2 sm:px-4 md:px-8 py-10">
      {/* Outer rounded black container */}
      <div className="gsap-reveal-stagger mx-auto max-w-[1440px] bg-black-rich text-white rounded-[40px] md:rounded-[56px] px-6 py-16 md:px-16 md:py-24 shadow-2xl relative overflow-hidden">
        
        {/* Subtle geometric lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-accent/30 to-transparent" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/[0.02] hidden xl:block" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.02] hidden xl:block" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/[0.02] hidden xl:block" />

        {/* Section Header */}
        <div className="gsap-reveal-item opacity-0 flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 relative z-10">
          <div className="flex items-center gap-4">
            <span className="w-2 h-8 bg-purple-accent rounded-full animate-pulse-slow" />
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-[54px] xl:text-[60px] tracking-tight uppercase leading-none">
              Our Services
            </h2>
          </div>
          <p className="font-sans font-medium text-gray-400 text-xs sm:text-sm md:text-base max-w-lg lg:text-right leading-relaxed">
            We build high-performance websites, custom internal tools, and intelligent automation systems for businesses that need to move fast and scale confidently.
          </p>
        </div>

        {/* Interactive Responsive Grid - Tailored bento cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((service, idx) => {
            const isSpecial = service.isSpecial;
            const serviceNum = (idx + 1).toString().padStart(2, "0");
            return (
              <div
                key={service.id}
                className={`gsap-reveal-item opacity-0 group relative min-h-[360px] sm:min-h-[380px] cursor-pointer select-none ${
                  isSpecial ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
                onClick={() => navigate(`/services/${service.id}`)}
              >
                {/* Animated Inner Container */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`w-full h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden border transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.3)] ${
                    isSpecial
                      ? "bg-gradient-to-b from-[#6D28FF] to-[#4d13bf] border-purple-accent/60 shadow-[0_20px_50px_rgba(109,40,255,0.25)] group-hover:shadow-[0_25px_60px_rgba(109,40,255,0.4)] text-white"
                      : "bg-white/[0.02] border-white/10 backdrop-blur-md group-hover:border-[#B6E82C]/40 group-hover:bg-white/[0.04] group-hover:shadow-[0_15px_40px_rgba(182,232,44,0.08)]"
                  }`}
                >
                  {/* Corner notches/blueprint marks */}
                  <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-white/10 group-hover:border-[#B6E82C]/30 transition-colors pointer-events-none" />
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-white/10 group-hover:border-[#B6E82C]/30 transition-colors pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-white/10 group-hover:border-[#B6E82C]/30 transition-colors pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-white/10 group-hover:border-[#B6E82C]/30 transition-colors pointer-events-none" />

                  {/* Expanding bottom highlight line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#6D28FF] to-[#B6E82C] group-hover:w-[90%] transition-all duration-500 pointer-events-none" />

                  {/* Background outline number */}
                  <div 
                    className="absolute bottom-12 right-6 font-sans font-black text-6xl text-white/[0.015] group-hover:text-white/[0.025] transition-colors select-none pointer-events-none"
                    style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.015)" }}
                  >
                    {serviceNum}
                  </div>

                  {/* Background lighting layer inside cards */}
                  <div className="absolute -inset-x-0 -top-40 h-80 bg-radial-gradient from-white/[0.08] to-transparent pointer-events-none group-hover:opacity-100 transition-opacity" />

                  {/* Top Row: Title & Arrow/Icon Badge */}
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <div className="p-2.5 bg-white/10 border border-white/15 w-max rounded-xl">
                        {service.icon}
                      </div>
                      <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight mt-2 text-white">
                        <span className={isSpecial ? "text-lime-accent block" : ""}>
                          {service.title.split(" ")[0]}
                        </span>
                        <span>
                          {service.title.split(" ").slice(1).join(" ")}
                        </span>
                      </h3>
                    </div>

                    {/* Top-Right Arrow Indicator */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-lime-accent group-hover:text-black-rich transition-colors duration-300 font-bold">
                      <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed mt-4 ${isSpecial ? "text-white/95" : "text-gray-400 group-hover:text-white transition-colors"}`}>
                    {service.description}
                  </p>

                  {/* Visualizing the Service */}
                  <ServiceVisual id={service.id} />

                  {/* Subtle Interactive Prompt Overlay */}
                  <div className="flex items-center gap-1.5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-ping" />
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 group-hover:text-white transition-colors">Click for details &rarr;</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
