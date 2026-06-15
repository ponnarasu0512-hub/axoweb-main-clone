import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";

export const BrandLogo: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 48 }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img 
        src="/logo-dark.png" 
        alt="Axoweb Logo" 
        style={{ 
          height: size, 
          width: "auto",
          display: "block"
        }} 
      />
      <span className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-black-rich select-none leading-none">
        AXOWEB
      </span>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const servicesLinks = [
    { title: "Web Development", href: "/services/web-development" },
    { title: "Internal Systems", href: "/services/internal-systems" },
    { title: "AI Solutions", href: "/services/ai-solutions" },
    { title: "Automation Systems", href: "/services/automation-systems" },
    { title: "Security & Privacy", href: "/services/security-privacy" }
  ];

  const links = [
    { title: "Home", href: "/" },
    { title: "Why Choose Us", href: "/why-us" },
    { title: "Industries", href: "/#industries" },
    { title: "Our Work", href: "/#portfolio" },
    { title: "Team", href: "/team" }
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1440px] transition-all duration-300">
      <div className="bg-white/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] rounded-full px-4 sm:px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-between relative">
        {/* Liquid Glass Highlight/Glare */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/40 to-transparent" />
        </div>
        
        {/* Left: Logo */}
        <div className="relative z-10 flex items-center lg:w-1/4 justify-start">
          <Link to="/">
            <BrandLogo size={40} className="scale-90 sm:scale-100" />
          </Link>
        </div>

        {/* Center: Links (Hidden on Mobile/Tablet) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 relative z-10 justify-center flex-1">
          <Link
            to="/"
            className={`relative text-[13px] lg:text-[15px] font-medium transition-colors duration-200 ${(location.pathname === '/' && !location.hash) ? "text-purple-accent font-bold" : "text-black-rich hover:text-purple-accent"}`}
            onMouseEnter={() => setHoveredIndex(-1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="relative z-10">Home</span>
            {hoveredIndex === -1 && (
              <motion.span
                layoutId="navUnderline"
                className="absolute bottom-[-6px] left-0 h-[2px] w-full bg-purple-accent"
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className={`flex items-center gap-1 cursor-pointer text-[13px] lg:text-[15px] font-medium transition-colors duration-200 ${(location.pathname.includes('/services') && location.pathname !== '/services') ? 'text-purple-accent font-bold' : 'text-black-rich'}`}>
              <span className="relative z-10">Services</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            {/* Services Dropdown */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-64 bg-white/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 shadow-[0_16px_32px_rgba(0,0,0,0.1)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] rounded-3xl py-2 z-50 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
                  {servicesLinks.map((sublink) => (
                    <NavLink
                      key={sublink.title}
                      to={sublink.href}
                      className={({ isActive }) => `block relative z-10 px-4 py-2.5 text-[14px] font-semibold transition-colors duration-200 ${isActive ? "bg-purple-accent/10 text-purple-accent" : "text-black-rich hover:bg-black-rich/5 hover:text-purple-accent"}`}
                    >
                      {sublink.title}
                    </NavLink>
                  ))}
                  <div className="border-t border-gray-light/40 mt-1 pt-1 mb-1">
                    <NavLink
                      to="/services"
                      className={({ isActive }) => `block relative z-10 px-4 py-2.5 text-[13px] font-bold transition-colors duration-200 uppercase tracking-widest ${isActive ? "bg-purple-accent/10 text-purple-accent" : "text-purple-accent hover:bg-black-rich/5"}`}
                    >
                      View All Services &rarr;
                    </NavLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.slice(1).map((link, index) => {
            const isHashActive = link.href.includes('#') && location.hash === '#' + link.href.split('#')[1];
            const isPathActive = !link.href.includes('#') && location.pathname === link.href;
            const isActive = isHashActive || isPathActive;
            
            return (
              <Link
                key={link.title}
                to={link.href}
                className={`relative text-[13px] lg:text-[15px] font-medium transition-colors duration-200 ${isActive ? "text-purple-accent font-bold" : "text-black-rich hover:text-purple-accent"}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{link.title}</span>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute bottom-[-6px] left-0 h-[2px] w-full bg-purple-accent"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right: CTA & FAQ */}
        <div className="flex items-center justify-end gap-3 lg:gap-4 relative z-10 lg:w-1/4">
          <NavLink
            to="/faq"
            className={({ isActive }) => `hidden lg:inline-block text-[13px] lg:text-[15px] font-medium hover:text-purple-accent transition-colors ${isActive ? "text-purple-accent font-bold" : "text-black-rich"}`}
          >
            FAQ
          </NavLink>
          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-1.5 lg:gap-2 border border-black-rich rounded-full px-4 py-1.5 lg:px-5 lg:py-2 text-[12px] lg:text-[14px] font-semibold hover:bg-black-rich hover:text-white transition-all duration-300 transform active:scale-95"
          >
            Contact Us
            <ArrowRight size={13} />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden rounded-full p-1.5 hover:bg-gray-light text-black-rich z-50 cursor-pointer ml-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-[calc(100%+12px)] w-full max-h-[85vh] overflow-y-auto bg-white/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 shadow-[0_16px_32px_rgba(0,0,0,0.1)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] rounded-[40px] px-8 py-8 flex flex-col gap-6 md:hidden z-40"
          >
            {/* Liquid Glass Highlight Component */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-[40px]" />
            <div className="relative z-10 flex flex-col gap-5">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold transition-colors py-2 border-b border-gray-light/40 ${(location.pathname === '/' && !location.hash) ? "text-purple-accent" : "text-black-rich hover:text-purple-accent"}`}
              >
                Home
              </Link>
              
              <div className="flex flex-col gap-2 py-2 border-b border-gray-light/40">
                <span className="text-lg font-semibold text-black-rich">Services</span>
                <div className="flex flex-col gap-2 pl-4">
                  {servicesLinks.map((sublink) => (
                    <NavLink
                      key={sublink.title}
                      to={sublink.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `text-[15px] font-medium transition-colors py-1 ${isActive ? "text-purple-accent" : "text-gray-600 hover:text-purple-accent"}`}
                    >
                      {sublink.title}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="text-[14px] font-bold text-purple-accent transition-colors py-1 mt-1 uppercase tracking-wider"
                  >
                    View All Services &rarr;
                  </NavLink>
                </div>
              </div>

              {links.slice(1).map((link) => {
                const isHashActive = link.href.includes('#') && location.hash === '#' + link.href.split('#')[1];
                const isPathActive = !link.href.includes('#') && location.pathname === link.href;
                const isActive = isHashActive || isPathActive;
                
                return (
                  <Link
                    key={link.title}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-semibold transition-colors py-2 border-b border-gray-light/40 ${isActive ? "text-purple-accent" : "text-black-rich hover:text-purple-accent"}`}
                  >
                    {link.title}
                  </Link>
                )
              })}
              <NavLink
                to="/faq"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `text-lg font-semibold transition-colors py-2 border-b border-gray-light/40 ${isActive ? "text-purple-accent" : "text-black-rich hover:text-purple-accent"}`}
              >
                FAQ
              </NavLink>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="relative z-10 w-full flex items-center justify-center gap-2 bg-black-rich text-white hover:bg-purple-accent rounded-full py-4 text-base font-semibold transition-all"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
