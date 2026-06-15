import React, { useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles, Cpu } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Mount/entry animation sequence
    const tl = gsap.timeline();
    tl.fromTo(".hero-title-row", 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
    )
    .fromTo(".hero-scroll-btn", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.3"
    );

    // 2. Scroll-linked exit transition (fade + parallax downwards)
    gsap.to(".hero-parallax-content", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom 30%",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="how-it-works" className="relative w-full overflow-hidden bg-white px-6 pt-16 pb-24 md:px-12 lg:px-16">
      {/* Blueprint grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f3f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f6_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none opacity-60 z-0" />
      
      {/* Soft neon gradient lighting halos */}
      <div className="absolute top-[-10%] left-[20%] w-[35%] h-[35%] bg-[#6D28FF]/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-[#B6E82C]/4 rounded-full blur-[90px] pointer-events-none z-0" />

      {/* Decorative SVG connection lines backdrop */}
      <svg className="absolute inset-0 pointer-events-none w-full h-full stroke-gray-light/80 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 15 15 L 50 30 L 85 15" fill="none" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        <path d="M 50 30 L 50 90" fill="none" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M 10 55 L 50 55" fill="none" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="hero-parallax-content mx-auto max-w-[1440px] relative z-10">
        
        {/* Hero Title */}
        <div className="text-center relative py-6">
          <h1 className="font-display font-black text-black-rich flex flex-col items-center justify-center">
            {/* Row 1: Build Websites */}
            <span
              className="hero-title-row text-[34px] min-[380px]:text-[42px] min-[480px]:text-[52px] sm:text-[76px] md:text-[96px] lg:text-[116px] leading-[0.9] tracking-[-0.04em] font-extrabold uppercase block opacity-0"
            >
              BUILD WEBSITES
            </span>

            {/* Row 2: AUTOMATE OPERATIONS */}
            <span
              className="hero-title-row text-[34px] min-[380px]:text-[42px] min-[480px]:text-[52px] sm:text-[76px] md:text-[96px] lg:text-[116px] leading-[0.9] tracking-[-0.04em] font-extrabold uppercase flex items-center justify-center gap-2 sm:gap-4 flex-wrap opacity-0"
            >
              AUTOMATE 
              {/* Centered Static White Brand Logo representing automation */}
              <span 
                className="relative inline-flex items-center justify-center w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[2.5px] md:border-[3px] border-black-rich bg-purple-accent shrink-0 shadow-[0_0_20px_rgba(109,40,255,0.4)]"
              >
                <img 
                  src="/logo-dark.png" 
                  alt="Axoweb Logo" 
                  className="w-[85%] h-[85%] object-contain invert" 
                />
              </span>
               OPERATIONS
            </span>

            {/* Row 3: ADD AI • GROW FASTER */}
            <span
              className="hero-title-row text-[34px] min-[380px]:text-[42px] min-[480px]:text-[52px] sm:text-[76px] md:text-[96px] lg:text-[116px] leading-[0.9] tracking-[-0.04em] font-extrabold uppercase flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-4 opacity-0"
            >
              {/* Lime Colored Capsule Background for 'AI Solutions' */}
              <div className="relative px-5 min-[380px]:px-8 md:px-12 py-1 md:py-2 bg-lime-accent text-black-rich rounded-[120px] border-[2.5px] md:border-[3px] border-black-rich shadow-[3px_3px_0px_#090909] md:shadow-[4px_4px_0px_#090909] transform hover:scale-[1.03] transition-transform duration-300">
                <span className="relative z-10 block pr-2">Add AI</span>
              </div>
              <span className="tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black-rich via-purple-accent to-black-rich">
                GROW FASTER
              </span>
            </span>
          </h1>
        </div>

        {/* Centered Scroll Indicator */}
        <div className="hero-scroll-btn flex justify-center mt-12 md:mt-8 opacity-0">
          <a
            href="#statement"
            className="group flex flex-col items-center gap-3 text-black-rich cursor-pointer transition-transform hover:scale-105"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-gray-mid font-medium select-none">
              Identify Challenges
            </span>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-light bg-white shadow-md text-purple-accent group-hover:bg-purple-accent group-hover:text-white transition-all duration-300">
              <ArrowDown size={18} className="translate-y-0 group-hover:translate-y-1 transition-transform" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
