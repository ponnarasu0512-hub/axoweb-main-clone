import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How does AXOWEB help with regional lead loss?",
      answer: "We design fast-loading, mobile-first websites with built-in lead capture. When someone fills out a form, your sales team gets notified instantly via WhatsApp, email, or SMS — so no lead slips through the cracks.",
    },
    {
      question: "Can you migrate messy Excel spreadsheets into web systems?",
      answer: "Yes, it's one of our specialties. We build custom dashboards and admin panels that replace messy spreadsheets with clean, searchable databases. Everything gets role-based access controls so your team only sees what they need.",
    },
    {
      question: "What concrete AI solutions can you deploy for our work?",
      answer: "We focus on AI that actually solves business problems — not lab experiments. That means custom chatbots trained on your company docs, document parsers that extract key data automatically, and scheduling tools that save your team hours every week.",
    },
    {
      question: "How do you protect business databases and data security?",
      answer: "Security is built into everything we build from day one. We implement end-to-end encryption (AES-256), automated database backups, strict role-based access controls, and TLS for all data in transit.",
    },
    {
      question: "What is your typical schedule timeline and cost model?",
      answer: "We work in focused weekly sprints. Most MVPs are ready in 4–6 weeks. Pricing is modular — you pay for what gets built, with no large upfront commitments or waterfall-style lock-ins.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white px-4 sm:px-6 md:px-12 lg:px-16 pt-8 pb-14 sm:pb-20 md:pb-24 border-t border-gray-light/40 relative overflow-hidden">
      {/* Decorative light grid element */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-72 h-72 bg-purple-accent/5 rounded-full blur-[80px] pointer-events-none z-0" />
      
      <div className="mx-auto max-w-[1440px] relative z-10">
        
        <div className="gsap-reveal-stagger grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Side: Bold Title & Design Language Information (5 columns) */}
          <div className="gsap-reveal-item opacity-0 lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-accent" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6D28FF]">
                FAQ
              </span>
            </div>
            
            <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl lg:text-[45px] xl:text-[50px] leading-[1.1] uppercase tracking-tight text-black-rich">
              Frequently Asked Questions
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-gray-mid max-w-sm leading-relaxed">
              Everything you need to know about working with us — from timelines and pricing to security and support.
            </p>

            <div className="hidden lg:flex items-center gap-2 border border-lime-accent bg-lime-accent/15 px-4 py-2.5 rounded-2xl mt-2">
              <Sparkles className="text-purple-accent animate-pulse" size={16} />
              <span className="font-mono text-[10px] text-black font-extrabold uppercase">FAST DELIVERY. CLEAN CODE.</span>
            </div>
          </div>

          {/* Right Side: Accordion Lists (7 columns) */}
          <div className="gsap-reveal-item opacity-0 lg:col-span-7 flex flex-col gap-4">
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "border-purple-accent bg-purple-accent/[0.02] shadow-[0_4px_20px_rgba(109,40,255,0.05)]"
                      : "border-gray-light hover:border-purple-accent/40 bg-white"
                  }`}
                >
                  {/* Trigger Button / Header line */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-4 sm:p-5 md:p-6 flex items-center justify-between gap-3 focus:outline-none cursor-pointer group select-none"
                  >
                    <span className="flex items-start sm:items-center gap-2 sm:gap-4">
                      {/* Interactive numeral marker */}
                      <span className={`font-mono text-xs sm:text-sm font-semibold mt-0.5 sm:mt-0 ${
                        isOpen ? "text-purple-accent" : "text-gray-mid/60"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-sans font-extrabold text-sm sm:text-base md:text-lg tracking-tight uppercase transition-colors ${
                        isOpen ? "text-purple-accent" : "text-black-rich group-hover:text-purple-accent/80"
                      }`}>
                        {item.question}
                      </span>
                    </span>

                    {/* Rotating visual status trigger */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-purple-accent border-purple-accent text-white rotate-180"
                        : "border-gray-light bg-gray-light/30 text-black-rich"
                    }`}>
                      {isOpen ? (
                        <Minus size={14} className="stroke-[2.5]" />
                      ) : (
                        <Plus size={14} className="stroke-[2.5] group-hover:scale-110" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content Panel with clean height transitions */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 pt-0 sm:px-5 sm:pb-6 md:px-6 md:pb-8 ml-6 sm:ml-9 border-t border-gray-light/40 pt-4 flex flex-col gap-3">
                          <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold">
                            {item.answer}
                          </p>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
                            <span className="font-mono text-[9px] uppercase tracking-wider text-purple-accent font-bold">
                              AXOWEB Standard
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
