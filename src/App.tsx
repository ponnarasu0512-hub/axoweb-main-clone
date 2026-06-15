/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Compass } from "lucide-react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
import { SEO } from "./components/SEO";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Statement } from "./components/Statement";
import { Portfolio } from "./components/Portfolio";
import { Clients } from "./components/Clients";
import { FAQ } from "./components/FAQ";
import { ContactCTA } from "./components/ContactCTA";
import { Industries } from "./components/Industries";
import { WhyChoose } from "./components/WhyChoose";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Testimonials } from "./components/Testimonials";
import { ContactPage } from "./pages/ContactPage";
import { TeamPage } from "./pages/TeamPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (hash) {
      const isRouteChange = prevPathname.current !== pathname;
      const delay = isRouteChange ? 450 : 50;
      
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, delay);

      prevPathname.current = pathname;
      return () => clearTimeout(timer);
    } else {
      const isRouteChange = prevPathname.current !== pathname;
      const delay = isRouteChange ? 350 : 0;
      
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
      }, delay);

      prevPathname.current = pathname;
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);
  return null;
}

function ScrollAnimateTracker() {
  const { pathname } = useLocation();

  useGSAP(() => {
    // 1. Kill old ScrollTriggers to prevent leaks and duplication
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // 2. Initialize animations for the new page after the route transition finishes
    const timer = setTimeout(() => {
      const sections = gsap.utils.toArray(".gsap-reveal-stagger");
      sections.forEach((section: any) => {
        const items = section.querySelectorAll(".gsap-reveal-item");
        if (items.length > 0) {
          gsap.fromTo(items,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play reverse play reverse",
                markers: false,
              }
            }
          );
        }
      });
      // 3. Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();
    }, 350);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <div className="flex flex-col gap-12">
      <SEO 
        title="AXOWEB | Custom Web Development, AI & Automation Solutions"
        description="AXOWEB builds custom websites, internal business systems, AI-powered automation, and enterprise security solutions for growing businesses in India and worldwide."
      />
      <Hero />
      <Expertise />
      <Statement />
      <Industries />
      <Clients />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

function Services() {
  return (
    <div className="pb-16">
      <SEO 
        title="Our Services | AXOWEB"
        description="Custom web development, internal systems, AI solutions, automation, and enterprise security services by AXOWEB."
      />
      <Expertise />
    </div>
  );
}

function WhyUs() {
  return (
    <div className="pb-16">
      <SEO 
        title="Why Choose Us | AXOWEB"
        description="See why growing businesses choose AXOWEB over traditional agencies — one unified partner, faster delivery, full code ownership, and long-term support."
      />
      <WhyChoose />
    </div>
  );
}

function FAQPage() {
  return (
    <div className="pb-16">
      <SEO 
        title="FAQ | AXOWEB"
        description="Common questions about working with AXOWEB — timelines, pricing, security, AI solutions, and our development process."
      />
      <FAQ />
    </div>
  );
}

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error - key is not in RoutesProps but is supported by React for re-mounting */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/services/:serviceId" element={<PageTransition><ServiceDetail /></PageTransition>} />
        <Route path="/why-us" element={<PageTransition><WhyUs /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/team" element={<PageTransition><TeamPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  // Smooth scroll helper to contact form section
  const scrollToContact = () => {
    const section = document.getElementById("footer-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      gsap.to("#contact .gsap-reveal-item", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        overwrite: "auto"
      });
    }
  };

  // GSAP initialization moved to ScrollAnimateTracker within Router context

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollAnimateTracker />
        <div className="relative min-h-screen bg-white text-black-rich font-sans overflow-x-hidden selection:bg-lime-accent selection:text-black-rich pt-24 md:pt-[104px]">

        {/* Premium Minimal Swiss Navbar */}
        <Navbar />

        {/* Main Routes */}
        <main className="min-h-[70vh]">
          <AnimatedRoutes />
        </main>

        <ContactCTA />
      </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

