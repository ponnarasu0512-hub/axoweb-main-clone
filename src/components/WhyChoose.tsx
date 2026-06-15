import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  Cpu,
  Target,
  MessageSquareCode,
  GraduationCap,
  ShieldCheck,
  Globe,
  CheckCircle2,
  XCircle
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ComparisonCard {
  id: number;
  badge: string;
  divideTitle: string;
  divideDesc: string;
  traditionalTitle: string;
  traditionalProblems: string[];
  axowebTitle: string;
  axowebBenefits: string[];
  imageUrl: string;
}

const CardImageVisual: React.FC<{ imageUrl: string, title: string }> = ({ imageUrl, title }) => (
  <div className="w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden relative select-none pointer-events-none flex flex-col shrink-0 border border-white/10 bg-[#090909]">
    <img
      src={imageUrl}
      alt={`${title} screenshot`}
      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      loading="lazy"
    />
  </div>
);

const CommitmentCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  text: string;
  index: number;
}> = ({ title, icon, text, index }) => {
  const cardNum = ((index % 6) + 1).toString().padStart(2, "0");

  return (
    <div className="w-[340px] sm:w-[380px] h-[190px] shrink-0 rounded-[32px] bg-[#090909] border border-white/10 p-5 sm:p-6 flex flex-col gap-3 relative overflow-hidden select-none transition-all duration-300 group hover:-translate-y-2 hover:border-[#B6E82C]/45 hover:bg-white/[0.02] hover:shadow-[0_20px_50px_rgba(109,40,255,0.08)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      {/* Corner notches/blueprint marks */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/10 group-hover:border-[#B6E82C]/30 transition-colors pointer-events-none" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/10 group-hover:border-[#B6E82C]/30 transition-colors pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/10 group-hover:border-[#B6E82C]/30 transition-colors pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/10 group-hover:border-[#B6E82C]/30 transition-colors pointer-events-none" />

      {/* Expanding bottom highlight line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#6D28FF] to-[#B6E82C] group-hover:w-[90%] transition-all duration-500 pointer-events-none" />

      {/* Background large outline number */}
      <div 
        className="absolute bottom-4 right-6 font-sans font-black text-7xl text-white/[0.01] group-hover:text-[#6D28FF]/5 transition-all duration-300 select-none pointer-events-none"
        style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.02)" }}
      >
        {cardNum}
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 w-11 h-11 flex items-center justify-center shrink-0 group-hover:bg-[#6D28FF]/10 transition-all duration-300 text-[#B6E82C]">
          {icon}
        </div>
        <h4 className="font-sans font-black text-sm sm:text-base uppercase tracking-tight text-white leading-tight">
          {title}
        </h4>
      </div>

      <p className="font-sans text-[11px] sm:text-xs text-gray-400 font-semibold leading-relaxed max-w-sm relative z-10">
        {text}
      </p>
    </div>
  );
};

export const WhyChoose: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const comparisons: ComparisonCard[] = [
    {
      id: 0,
      badge: "Simplified Operations",
      divideTitle: "Vendor\nFatigue",
      divideDesc: "Say goodbye to disjointed agencies. We coordinate your entire digital ecosystem under a single engineering blueprint.",
      traditionalTitle: "Hire Multiple Vendors",
      traditionalProblems: [
        "Website agency builds siloed assets",
        "Separate app team lacks context",
        "Third-party AI & cloud vendors charge high fees"
      ],
      axowebTitle: "One Unified Partner",
      axowebBenefits: [
        "Single dedicated point of contact",
        "Unified full-stack engineering team",
        "Faster releases with zero coordination overhead"
      ],
      imageUrl: "/unified-ops.png"
    },
    {
      id: 1,
      badge: "ROI Driven",
      divideTitle: "Cost\nOverhead",
      divideDesc: "We build software targeted to reduce operational leaks, automating workflows to pay for itself in months.",
      traditionalTitle: "Technology First",
      traditionalProblems: [
        "Overcomplicating with expensive subscriptions",
        "Unnecessary custom engineering overhead",
        "Mismatched tech with zero business utility"
      ],
      axowebTitle: "Business First",
      axowebBenefits: [
        "Audit exact operational leaks first",
        "Define concrete financial targets",
        "Only deploy high-impact software"
      ],
      imageUrl: "/roi-metrics.png"
    },
    {
      id: 2,
      badge: "Built For You",
      divideTitle: "Generic\nLimits",
      divideDesc: "Own your intellectual property. Zero vendor lock-in, 100% extensible clean code built for your unique operations.",
      traditionalTitle: "Generic Templates",
      traditionalProblems: [
        "One-size-fits-all generic themes",
        "Rigid, frustrating user flows",
        "Difficult to scale or expand custom code"
      ],
      axowebTitle: "Custom Digital Systems",
      axowebBenefits: [
        "Built exactly around your operations",
        "Tailored custom-crafted workflows",
        "100% extensible clean code architecture"
      ],
      imageUrl: "/custom-blocks.png"
    },
    {
      id: 3,
      badge: "Faster Results",
      divideTitle: "Launch\nDelays",
      divideDesc: "We release software in rapid, continuous iterations, giving you instant operational visibility instead of months of delays.",
      traditionalTitle: "Long Discovery & Stall",
      traditionalProblems: [
        "Endless consulting meetings",
        "Delayed code delivery & delayed release",
        "Stale project scopes before launch"
      ],
      axowebTitle: "Agile Rapid Delivery",
      axowebBenefits: [
        "Working prototypes in days, not months",
        "Focused 2-week agile sprints",
        "Continuous progress updates you can see"
      ],
      imageUrl: "/agile-speed.png"
    },
    {
      id: 4,
      badge: "Full Ownership",
      divideTitle: "Black Box\nTactics",
      divideDesc: "Real-time staging previews, live weekly build updates, and crystal-clear communication loops.",
      traditionalTitle: "Black Box Operations",
      traditionalProblems: [
        "Zero project development transparency",
        "Difficult complex team handovers",
        "Forced costly vendor-lock dependencies"
      ],
      axowebTitle: "Transparent Collaboration",
      axowebBenefits: [
        "Live weekly build reviews",
        "Clear documentation and project logs",
        "You own 100% of the code and IP"
      ],
      imageUrl: "/vault-ownership.png"
    },
    {
      id: 5,
      badge: "Future Ready",
      divideTitle: "System\nRot",
      divideDesc: "Ongoing performance monitoring, encrypted backups, and proactive scaling to protect your competitive edge.",
      traditionalTitle: "Post-Launch Abandonment",
      traditionalProblems: [
        "Zero help desk after deployment",
        "No proactive security upgrades",
        "Systems quickly rot & slow down"
      ],
      axowebTitle: "Long-Term Growth Partner",
      axowebBenefits: [
        "Guaranteed responsive support with SLAs",
        "Ongoing security patches and updates",
        "Strategic scaling as your business grows"
      ],
      imageUrl: "/secure-shield.png"
    }
  ];

  const commitments = [
    {
      title: "Business-First Thinking",
      icon: <Target className="text-[#6D28FF]" size={28} />,
      text: "We start with your business goals, not a tech stack. Every feature we build ties directly to your operational targets and bottom line."
    },
    {
      title: "Transparent Communication",
      icon: <MessageSquareCode className="text-[#6D28FF]" size={28} />,
      text: "Weekly updates, live staging previews, and direct communication via Slack and email. You always know exactly where your project stands."
    },
    {
      title: "Future-Proof Architecture",
      icon: <Cpu className="text-[#6D28FF]" size={28} />,
      text: "We build modular, scalable codebases designed to grow with your business — ready for AI integrations, traffic spikes, and new features."
    },
    {
      title: "Knowledge Transfer",
      icon: <GraduationCap className="text-[#6D28FF]" size={28} />,
      text: "We train your team with hands-on walkthroughs and documentation so you can operate and maintain the system independently."
    },
    {
      title: "Security By Design",
      icon: <ShieldCheck className="text-[#6D28FF]" size={28} />,
      text: "Every system includes end-to-end encryption, role-based access controls, and automated backups as standard — not optional add-ons."
    },
    {
      title: "Globally Competitive Engineering",
      icon: <Globe className="text-[#6D28FF]" size={28} />,
      text: "Local market understanding combined with world-class engineering standards. Premium custom systems without offshore communication friction."
    }
  ];

  const stats = [
    { value: "95%", label: "Client Satisfaction" },
    { value: "70%", label: "Reduction In Manual Work" },
    { value: "3X", label: "Faster Lead Response" },
    { value: "24/7", label: "AI Automation Live" },
    { value: "100%", label: "Custom Built Codebases" }
  ];

  const commitmentsRef = useRef<HTMLDivElement>(null);

  // Split commitments for a dual-row marquee
  const row1Commitments = [commitments[0], commitments[1], commitments[2]];
  const row2Commitments = [commitments[3], commitments[4], commitments[5]];

  const duplicatedRow1 = [...row1Commitments, ...row1Commitments, ...row1Commitments, ...row1Commitments];
  const duplicatedRow2 = [...row2Commitments, ...row2Commitments, ...row2Commitments, ...row2Commitments];

  // Track progress of commitments section scroll
  const { scrollYProgress: commitmentsScrollY } = useScroll({
    target: commitmentsRef,
    offset: ["start end", "end start"]
  });

  // Dual direction scroll translation: Row 1 moves right, Row 2 moves left as scroll down
  const rawX1 = useTransform(commitmentsScrollY, [0, 1], [-250, 250]);
  const rawX2 = useTransform(commitmentsScrollY, [0, 1], [250, -250]);

  // Spring animations for a smooth, organic feel
  const slideX1 = useSpring(rawX1, { damping: 18, stiffness: 35 });
  const slideX2 = useSpring(rawX2, { damping: 18, stiffness: 35 });

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Responsive setup: only activate scroll effects on viewport widths >= 768px
    mm.add("(min-width: 768px)", () => {
      const container = containerRef.current;
      
      // Horizontal scroll pinning
      if (container && triggerRef.current) {
        const getScrollAmount = () => {
          const panelWidth = window.innerWidth * 0.75;
          const totalWidth = comparisons.length * panelWidth;
          return totalWidth - window.innerWidth;
        };

        gsap.to(container, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            pinSpacing: true,
            scrub: 1.2,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            invalidateOnRefresh: true,
          }
        });
      }
    });

    return () => {
      mm.revert(); // cleanly revert and destroy all ScrollTriggers on unmount or media query change
    };
  }, []);

  return (
    <div className="w-full bg-white text-black-rich pb-24 overflow-hidden relative select-none">
      {/* HEADER SECTION */}
      <section className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto w-full mb-16 md:mb-24 text-center md:text-left pt-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-end justify-between">
          <div className="flex flex-col gap-5 max-w-3xl">
            <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-[10px] font-bold text-[#6D28FF] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D28FF] animate-pulse" />
              WHY CHOOSE AXOWEB
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight uppercase text-black-rich">
              More Than A Service Provider. <br className="hidden md:inline" />
              Your{" "}
              <span className="inline-block px-5 py-2.5 bg-lime-accent text-black-rich rounded-[100px] border-2 border-black-rich my-2 select-none shadow-[4px_4px_0px_#000] hover:scale-[1.03] transition-all duration-300 font-sans font-black text-3xl sm:text-5xl md:text-[50px] lg:text-[60px] leading-none">
                Partner.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-gray-550 font-semibold leading-relaxed max-w-sm">
            We don't just build websites. We design, build, and continuously improve the digital systems that help your business run better and grow faster.
          </p>
        </div>
      </section>

      {/* VERSUS ADVANTAGES SECTION */}
      <section className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto w-full mb-24">
        <div className="flex flex-col gap-4 mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-[10px] font-bold text-[#6D28FF] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28FF] animate-pulse" />
              HOW WE COMPARE
          </div>
          <h3 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tight text-black-rich">
            Traditional Agencies vs AXOWEB
          </h3>
        </div>

        <div className="border border-gray-200 rounded-[32px] overflow-hidden bg-gray-50/50 shadow-sm">
          <div className="grid grid-cols-2 bg-[#090909] text-white text-center py-4 font-sans font-black text-xs sm:text-sm uppercase tracking-wider">
            <div className="border-r border-white/10 flex items-center justify-center gap-2">
              <XCircle className="text-red-500" size={16} />
              Traditional Way
            </div>
            <div className="flex items-center justify-center gap-2 text-lime-accent">
              <CheckCircle2 className="text-lime-accent" size={16} />
              AXOWEB Standard
            </div>
          </div>
          <div className="divide-y divide-gray-150 font-sans text-xs sm:text-sm">
            {comparisons.map((item, idx) => {
              return (
                <div key={idx} className="grid grid-cols-2 divide-x divide-gray-150 hover:bg-white transition-colors duration-300">
                  <div className="p-6 text-gray-500 flex flex-col gap-1.5 text-left justify-center">
                    <span className="font-mono text-[8px] text-red-500 tracking-widest uppercase font-black">THE OLD LIMIT</span>
                    <span className="font-bold text-black-rich uppercase text-sm">{item.traditionalTitle}</span>
                    <p className="text-xs text-gray-400 font-semibold leading-relaxed mt-1">{item.traditionalProblems.join(", ")}</p>
                  </div>
                  <div className="p-6 text-black-rich flex flex-col gap-1.5 text-left justify-center bg-lime-accent/[0.01] relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#6D28FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-mono text-[8px] text-[#6D28FF] tracking-widest uppercase font-black">AXOWEB WAY</span>
                    <span className="font-bold text-[#6D28FF] uppercase text-sm">{item.axowebTitle}</span>
                    <p className="text-xs text-gray-550 font-semibold leading-relaxed mt-1">{item.axowebBenefits.join(", ")}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GSAP HORIZONTAL SCROLL TIMELINE */}
      <div ref={triggerRef} className="w-full md:h-screen bg-white md:overflow-hidden flex flex-col justify-center relative z-10">
        <div ref={containerRef} className="flex flex-col md:flex-row md:flex-nowrap gap-8 md:gap-0 items-stretch py-8">
          {comparisons.map((item) => {
            const parts = item.divideTitle.split('\n');
            const firstPart = parts[0];
            const secondPart = parts[1];

            return (
              <div 
                key={item.id} 
                className="scroll-panel w-full md:w-[75vw] md:flex-shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16"
              >
                <div className="w-full bg-[#090909] text-white border border-white/10 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_55px_-12px_rgba(182,232,44,0.06)] hover:border-lime-accent/30 transition-all duration-500 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group min-h-[380px] sm:min-h-[460px]">
                  
                  {/* Left Column: Bold Copy */}
                  <div className="flex-1 flex flex-col items-start gap-4 text-left z-10">
                    <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-[#6D28FF] tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D28FF] animate-pulse" />
                      {item.badge}
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl leading-[1.05] uppercase tracking-tight text-white flex flex-col items-start gap-2 my-1">
                      <span>{firstPart}</span>
                      <span className="inline-block px-3.5 py-1.5 bg-lime-accent text-black-rich rounded-[100px] border-[1.5px] border-black-rich transform rotate-[-2deg] select-none shadow-[3px_3px_0px_#000] group-hover:rotate-1 group-hover:scale-[1.03] transition-all duration-300 font-sans font-black text-xs sm:text-sm uppercase tracking-tight">
                        {secondPart}
                      </span>
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-gray-400 font-semibold leading-relaxed max-w-md">
                      {item.divideDesc}
                    </p>

                    {/* Split Comparison Box */}
                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mt-2 w-full">
                      {/* Traditional Pane */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1.5">
                          <XCircle className="text-red-500 shrink-0" size={12} />
                          <span className="font-mono text-[8px] text-red-500 uppercase tracking-wider font-bold">Old Way</span>
                        </div>
                        <ul className="flex flex-col gap-1.5">
                          {item.traditionalProblems.slice(0, 2).map((p, i) => (
                            <li key={i} className="font-sans text-[10px] text-gray-400 leading-snug font-medium flex items-start gap-1">
                              <span className="text-red-400 shrink-0 select-none">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AXOWEB Pane */}
                      <div className="flex flex-col gap-2 border-l border-white/10 pl-4">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="text-lime-accent shrink-0" size={12} />
                          <span className="font-mono text-[8px] text-[#B6E82C] uppercase tracking-wider font-bold">AXOWEB</span>
                        </div>
                        <ul className="flex flex-col gap-1.5">
                          {item.axowebBenefits.slice(0, 2).map((b, i) => (
                            <li key={i} className="font-sans text-[10px] text-white leading-snug font-semibold flex items-start gap-1">
                              <span className="text-lime-accent shrink-0 select-none">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Premium Custom Image Visual */}
                  <div className="flex-1 w-full flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden">
                    <CardImageVisual imageUrl={item.imageUrl} title={item.badge} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto w-full mt-24 mb-24 md:mt-32 md:mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 border-y border-gray-200 py-16">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center p-4"
            >
              <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black-rich to-[#6D28FF] tracking-tight block mb-3">
                {item.value}
              </span>
              <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed max-w-[120px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENTS MARQUEE */}
      <section 
        ref={commitmentsRef}
        id="commitments-section" 
        className="w-full bg-[#050505] text-white py-16 sm:py-20 relative overflow-hidden select-none"
      >
        {/* 1. Low-opacity watermark logo */}
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
        <div className="absolute top-[10%] right-[-15%] w-[600px] h-[600px] bg-[#6D28FF]/10 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute bottom-[10%] left-[-15%] w-[600px] h-[600px] bg-[#B6E82C]/6 rounded-full blur-[180px] pointer-events-none z-0" />

        <div className="flex flex-col gap-4 mb-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-16 relative z-20">
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-[#B6E82C] tracking-widest uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6E82C] animate-pulse" />
            OUR COMMITMENTS
          </div>
          <h3 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
            Our Engineering Commitments
          </h3>
          <p className="font-sans text-sm text-gray-400 leading-relaxed font-medium">
            These aren't marketing promises — they're the standards we hold ourselves to on every project.
          </p>
        </div>

        {/* MARQUEE RUNWAY CARDS CONTAINER */}
        <div className="w-full flex flex-col gap-5 mt-6 relative overflow-hidden z-20">
          
          {/* ROW 1: Glides continuous RIGHT */}
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
                  key={`commit-r1-${idx}`}
                  className="group opacity-80 hover:opacity-100 scale-95 hover:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <CommitmentCard 
                    title={item.title} 
                    icon={item.icon} 
                    text={item.text} 
                    index={idx}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* ROW 2: Glides continuous LEFT */}
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
                  key={`commit-r2-${idx}`}
                  className="group opacity-80 hover:opacity-100 scale-95 hover:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <CommitmentCard 
                    title={item.title} 
                    icon={item.icon} 
                    text={item.text} 
                    index={idx + 3}
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto w-full mt-24 md:mt-32">
        <div className="w-full bg-black-rich text-white rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          {/* Decorative Laser Background */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(109,40,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-purple-accent/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col gap-6 max-w-2xl text-left relative z-10">
            <span className="font-mono text-[10px] text-lime-accent font-bold tracking-widest uppercase">
              ◈ READY TO SCALE
            </span>
            <h3 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.95]">
               Build The Digital <br/> Backbone Of Your Business
            </h3>
            <p className="font-sans text-xs sm:text-sm md:text-base text-gray-300 font-medium leading-relaxed max-w-xl">
               Whether you need a custom website, AI-powered automation, internal tools, or a full digital transformation — we're here to be your long-term technology partner.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 justify-start relative z-10">
            <Link
              to="/contact"
              className="w-full px-6 py-4 md:px-8 md:py-5 rounded-full bg-lime-accent text-black-rich hover:bg-white hover:text-black-rich font-sans font-black text-[11px] md:text-sm uppercase tracking-wide cursor-pointer transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-[1.02]"
            >
              Get in Touch
              <ArrowRight size={18} className="stroke-[3]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
