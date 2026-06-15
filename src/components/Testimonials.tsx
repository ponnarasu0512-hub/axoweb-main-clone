import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t_meredith",
    quote: "AXOWEB delivered our college event platform on an extremely tight deadline. The design was incredibly creative and the interactive elements worked flawlessly during peak event registration.",
    author: "Meredith Client",
    role: "",
    company: "",
    image: ""
  },
  {
    id: "t_musharaf",
    quote: "The educational institution website AXOWEB built is perfect. Everything we envisioned was executed incredibly fast and with absolute accuracy. Our student and staff portals are now running seamlessly.",
    author: "Educational Institution Client",
    role: "",
    company: "",
    image: ""
  },
  {
    id: "t_expense",
    quote: "The expense tracker application is lightning fast and has a highly secure, intuitive layout. It has completely simplified our daily business expense auditing and financial reporting.",
    author: "Expense Tracker Client",
    role: "",
    company: "",
    image: ""
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Auto advance every 8 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#050505] text-white py-24 sm:py-32 relative overflow-hidden">
        {/* Subtle grid and glows */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-purple-accent/10 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-lime-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />
        
        <div className="gsap-reveal-stagger max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Context Section */}
            <div className="gsap-reveal-item opacity-0 w-full md:w-5/12 flex flex-col gap-6 md:gap-8 shrink-0">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-[1px] bg-lime-accent/50" />
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-lime-accent font-bold">Client Success</span>
                    </div>
                    <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-5xl leading-[1.05] tracking-tight uppercase">
                        What Our <br className="hidden md:block"/> <span className="text-gray-mid">Clients Say</span>
                    </h2>
                    <p className="text-gray-400 font-sans text-base md:text-lg max-w-md leading-relaxed">
                        Real feedback from real businesses we've helped build, automate, and scale.
                    </p>
                    
                    <div className="flex gap-4 items-center mt-4">
                        <div className="flex flex-col">
                            <span className="font-mono text-xs text-white/50 uppercase tracking-widest mb-1.5">Average System Rating</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-lime-accent fill-lime-accent" />
                                ))}
                            </div>
                        </div>
                        <div className="w-px h-8 bg-white/10 mx-2" />
                        <div className="flex gap-3">
                            <button 
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
                            >
                                <ChevronLeft size={20} className="text-white" />
                            </button>
                            <button 
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full border border-lime-accent/50 bg-lime-accent/10 flex items-center justify-center hover:bg-lime-accent/20 transition-all cursor-pointer"
                            >
                                <ChevronRight size={20} className="text-lime-accent" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Carousel Section */}
            <div className="gsap-reveal-item opacity-0 w-full md:w-7/12 relative h-auto min-h-[450px] sm:min-h-[350px] md:h-[450px] mt-8 md:mt-0">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0 flex items-center"
                    >
                        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[32px] w-full flex flex-col gap-8 shadow-2xl relative">
                            {/* Large quote mark decor */}
                            <Quote size={80} className="absolute top-6 right-8 text-white/5 rotate-180 pointer-events-none" />
                            
                            <p className="font-sans text-xl md:text-3xl leading-[1.4] font-medium text-white relative z-10">
                                "{testimonials[currentIndex].quote}"
                            </p>
                            
                            <div className="flex items-center gap-5 mt-auto border-t border-white/10 pt-6">
                                <div className={`w-14 h-14 rounded-full border border-white/20 bg-gradient-to-br ${currentIndex % 3 === 0 ? 'from-[#6D28FF] to-[#A880FF]' : currentIndex % 3 === 1 ? 'from-[#00C9FF] to-[#92FE9D]' : 'from-[#F40076] to-[#DF98FA]'} flex items-center justify-center text-white font-sans font-black text-xl shrink-0 select-none`}>
                                    {testimonials[currentIndex].author.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-sans font-bold text-lg">{testimonials[currentIndex].author}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
        </div>
    </section>
  );
};
