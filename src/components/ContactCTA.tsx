import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { CircularText } from "./CircularText";

const SERVICES_SLUGS: Record<string, string> = {
  "Web Development": "/services/web-development",
  "Internal Systems": "/services/internal-systems",
  "AI Solutions": "/services/ai-solutions",
  "Automation Systems": "/services/automation-systems",
  "Security & Compliance": "/services/security-privacy"
};

export const ContactCTA: React.FC = () => {
  const availableServices = ["Web Development", "Internal Systems", "AI Solutions", "Automation Systems", "Security & Compliance"];
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="gsap-reveal-stagger w-full bg-white px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 flex flex-col gap-4 overflow-x-hidden">
      
      {/* First Card: Headings and Call to Action */}
      <div className="gsap-reveal-item opacity-0 mx-auto max-w-[1440px] w-full bg-black-rich text-white rounded-[28px] sm:rounded-[40px] md:rounded-[48px] px-5 sm:px-8 py-8 sm:py-12 lg:px-14 lg:py-16 shadow-2xl relative overflow-x-hidden">
        {/* Ambient top light */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-accent/40 to-transparent" />
        <div className="absolute left-[10%] top-[-100px] w-[300px] h-[300px] bg-[#6D28FF]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* CTA Top Subtitle */}
        <div className="flex flex-col gap-2 mb-5 sm:mb-7 relative z-10">
          <span className="font-mono text-[10px] sm:text-xs text-lime-accent uppercase tracking-widest font-semibold block leading-snug">
            Start Your Digital Transformation Sprints
          </span>
          <div className="w-12 h-0.5 bg-lime-accent" />
        </div>

        {/* Massive Headline and Rotating Badge Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center relative z-10">
          
          <div className="flex-1 min-w-0 overflow-hidden">
            <h3 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] tracking-tighter uppercase text-white">
              Let's build what your business actually needs to{" "}
              <span className="inline-block px-3 py-1 sm:px-5 sm:py-1.5 bg-lime-accent text-black-rich rounded-[100px] border-[1.5px] border-black-rich my-1 select-none hover:scale-[1.03] transition-transform duration-300">
                Scale Smarter
              </span>{" "}
              and save manual hours!
            </h3>
          </div>

          <div className="hidden sm:flex justify-start lg:justify-end shrink-0">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="cursor-pointer"
              >
                <CircularText
                  text="SCHEDULE CALL NOW • START DISCOVERY • "
                  id="cta-circle-badge"
                  size={110}
                  color="fill-white"
                  className="bg-purple-accent rounded-full shadow-[0_10px_35px_rgba(109,40,255,0.4)] border border-purple-accent/60 p-2 transform transition-transform"
                  icon={
                    <ArrowUpRight size={20} className="text-lime-accent animate-pulse" />
                  }
                />
              </motion.div>
            </Link>
          </div>

        </div>
      </div>

      {/* Second Card: Official Footer Directories */}
      <div id="footer-form" className="gsap-reveal-item opacity-0 mx-auto max-w-[1440px] w-full bg-black-rich text-white rounded-[28px] sm:rounded-[40px] md:rounded-[48px] px-5 sm:px-8 py-8 sm:py-12 lg:px-14 lg:py-16 shadow-2xl relative overflow-x-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
          
          {/* Left Column: CTA & Branding (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-center h-full">
            <div className="flex flex-col gap-6 max-w-xl">
              <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-white">
                Ready to transform your operations?
              </h2>
              <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
                Schedule a free discovery call or send us your project requirements. We'll analyze your needs and outline a custom technical roadmap.
              </p>
              
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center gap-3 bg-lime-accent text-black-rich hover:bg-white hover:text-black-rich rounded-full px-8 py-4 text-sm sm:text-base font-bold tracking-tight transition-all shadow-[0_0_20px_rgba(182,232,44,0.3)] active:scale-95 w-fit"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Luxury Brand Directory & Address (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-auto gap-10 lg:text-right lg:items-end">
            
            {/* Quick Links Group */}
            <div className="flex flex-col gap-4 items-start lg:items-end">
              <span className="font-mono text-[10px] text-gray-450 uppercase tracking-widest font-semibold block">OUR SERVICES</span>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {availableServices.map((srv) => (
                  <Link
                    key={srv}
                    to={SERVICES_SLUGS[srv]}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="relative px-4 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black-rich hover:border-white text-xs font-semibold tracking-wide transition-all uppercase"
                  >
                    {srv}
                  </Link>
                ))}
              </div>
            </div>

            {/* Address cards */}
            <div className="flex flex-col gap-4 font-sans items-start lg:items-end text-left lg:text-right">
              
              <div className="font-semibold text-lg text-white uppercase tracking-tight flex items-center lg:justify-end gap-2 text-lime-accent">
                <img 
                  src="/logo-dark.png" 
                  alt="Axoweb Logo" 
                  className="h-10 w-auto invert" 
                  style={{ display: "block" }}
                />
              </div>

              <div className="flex items-start lg:justify-end gap-3 text-white">
                <MapPin size={18} className="text-purple-accent shrink-0 mt-0.5 lg:order-2" />
                <span className="font-extrabold text-sm sm:text-base leading-relaxed text-white">Plot no.64, CLV Nagar 1st Street., ECR Road, Kanathur Pin 603112.</span>
              </div>

              <div className="flex items-start lg:justify-end gap-3 text-white">
                <Phone size={18} className="text-purple-accent shrink-0 mt-0.5 lg:order-2" />
                <div className="flex flex-col items-start lg:items-end gap-1">
                  <a href="tel:+916380695874" className="font-extrabold font-mono text-sm sm:text-base text-white hover:text-lime-accent transition-colors">+91 63806 95874</a>
                  <a href="tel:+918015383591" className="font-extrabold font-mono text-sm sm:text-base text-white hover:text-lime-accent transition-colors">+91 80153 83591</a>
                  <a href="tel:+919176267316" className="font-extrabold font-mono text-sm sm:text-base text-white hover:text-lime-accent transition-colors">+91 91762 67316</a>
                </div>
              </div>

              <div className="flex items-center lg:justify-end gap-3 text-white">
                <Mail size={18} className="text-purple-accent shrink-0 lg:order-2" />
                <a href="mailto:hello@axoweb.in" className="font-mono font-extrabold text-sm sm:text-base text-white hover:text-lime-accent transition-colors break-all">
                  hello@axoweb.in
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Traditional Corporate Footer bottom row */}
        <div className="mt-12 sm:mt-16 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs font-mono text-gray-400 relative z-10">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/10">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
          <div className="text-center sm:text-right">
            <span>AXOWEB Technologies © {currentYear}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
