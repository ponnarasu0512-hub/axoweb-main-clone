import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import { ProjectItem } from "../types";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { CircularText } from "./CircularText";

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isAllProjectsModalOpen, setIsAllProjectsModalOpen] = useState(false);

  const projects: ProjectItem[] = [
    {
      id: "meredith",
      client: "Meredith",
      title: "College Event Website",
      imageUrl: "/college-event-website-final.png",
      tags: ["College Event", "Web Platform", "Interactive"],
      link: "https://m2k26.vercel.app/"
    },
    {
      id: "educational-institution",
      client: "Educational Institution",
      title: "College Institutional Website",
      imageUrl: "/educational-instituition-final.png",
      tags: ["Institutional", "University Portal", "Database"],
      link: "https://dawoodiyya.in/"
    },
    {
      id: "e-commerce",
      client: "Ozeno EC",
      title: "E-Commerce Platform",
      imageUrl: "/e-commerce-final.png",
      tags: ["E-Commerce", "Payments", "Storefront"],
      link: "https://ozenoec.vercel.app/"
    },
    {
      id: "amet-lms",
      client: "AMET LMS",
      title: "College Library Management System",
      imageUrl: "/college-library-management-final.png",
      tags: ["Library System", "Admin Panel", "Book Tracker"]
    },
    {
      id: "expense-tracker",
      client: "Expense Tracker",
      title: "Personal & Business Expense Tracker",
      imageUrl: "/expense-tracker-final.png",
      tags: ["Finance Tools", "Dashboards", "Security"]
    }
  ];

  return (
    <section id="portfolio" className="gsap-reveal-stagger relative w-full bg-white px-6 py-24 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Modern Technical Dot-Matrix / Mesh Background for subtle luxury texture */}
      <div className="absolute right-0 top-[10%] w-[600px] h-[600px] opacity-25 pointer-events-none z-0">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-lime-accent">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="currentColor" />
            </pattern>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#B6E82C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
          <circle cx="50%" cy="50%" r="40%" fill="url(#grad)" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1440px] relative z-10">
        
        {/* Section Header elements */}
        <div className="gsap-reveal-item opacity-0 flex flex-col gap-4 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-accent" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6D28FF]">
              RECENT WORK
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl font-sans font-extrabold text-3xl sm:text-4xl md:text-[50px] leading-[1.12] tracking-tight text-black-rich uppercase"
          >
            Our Recent Work
          </motion.h2>
        </div>

        {/* 2-Column Masonry Grid of Projects */}
        <div className="gsap-reveal-item opacity-0 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* COLUMN 1 - Left */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {projects.filter((_, idx) => idx % 2 === 0).map((project) => (
              <motion.div
                key={project.id}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col gap-5 cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* Floating Lime Star Shape on Card 1 */}
                {project.id === "meredith" && (
                  <div className="absolute top-[20px] left-[20px] z-20 w-12 h-12 bg-lime-accent rounded-full border-2 border-black-rich shadow-md flex items-center justify-center animate-spin-slow">
                    <Sparkles size={20} className="text-black-rich fill-black" />
                  </div>
                )}

                {/* Image layout container */}
                <div className="w-full aspect-[4/3] rounded-[36px] overflow-hidden bg-gray-light border border-gray-light/60 shadow-lg relative">
                  <img
                    src={project.imageUrl}
                    alt={project.client}
                    className="w-full h-full object-cover scale-[1.32] group-hover:scale-[1.42] transition-all duration-700 ease-out"
                  />
                  {/* Card overlay screen */}
                  <div className="absolute inset-0 bg-black-rich/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                  
                  {/* Inline interactive circular arrow overlay bottom right */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-black-rich border border-gray-light flex items-center justify-center shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Metadata details */}
                <div className="flex flex-col gap-2 px-2">
                  <h4 className="font-sans font-black text-2xl uppercase tracking-tight text-purple-accent group-hover:text-black-rich transition-colors">
                    {project.client}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] uppercase tracking-wider text-gray-mid font-semibold bg-gray-light/60 border border-gray-light/80 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* COLUMN 2 - Right */}
          <div className="flex flex-col gap-12 lg:gap-16 md:mt-20">
            {projects.filter((_, idx) => idx % 2 === 1).map((project, idx) => (
              <motion.div
                key={project.id}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group flex flex-col gap-5 cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* Overlapping neon lime rotating sticker badge on first card on right column */}
                {idx === 0 && (
                  <>
                    {/* Desktop Hovering Overlap Sticker Badge */}
                    <div className="hidden md:block absolute bottom-[-50px] right-[-10px] z-30 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        transition={{ type: "spring", stiffness: 350, damping: 15 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsAllProjectsModalOpen(true);
                        }}
                        className="pointer-events-auto cursor-pointer"
                      >
                        <CircularText
                          text="VIEW MORE • VIEW MORE • "
                          id="portfolio-view-more-desktop"
                          size={140}
                          color="fill-black"
                          className="bg-lime-accent rounded-full shadow-[0_12px_40px_rgba(182,232,44,0.4)] border border-lime-accent/80 p-2 cursor-pointer"
                          icon={
                            <ArrowUpRight size={24} className="text-black-rich stroke-3 animate-pulse" />
                          }
                        />
                      </motion.div>
                    </div>

                    {/* Mobile Safe Inset Sticker Badge */}
                    <div 
                      className="block md:hidden absolute bottom-4 right-4 z-30 pointer-events-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsAllProjectsModalOpen(true);
                      }}
                    >
                      <CircularText
                        text="VIEW MORE • VIEW MORE • "
                        id="portfolio-view-more-mobile"
                        size={100}
                        color="fill-black"
                        className="bg-lime-accent rounded-full shadow-[0_8px_24px_rgba(182,232,44,0.3)] border border-lime-accent/80 p-1 cursor-pointer"
                        icon={
                          <ArrowUpRight size={18} className="text-black-rich stroke-3 animate-pulse" />
                        }
                      />
                    </div>
                  </>
                )}

                {/* Image layout container */}
                <div className="w-full aspect-[4/3] rounded-[36px] overflow-hidden bg-gray-light border border-gray-light/60 shadow-lg relative">
                  <img
                    src={project.imageUrl}
                    alt={project.client}
                    className="w-full h-full object-cover scale-[1.32] group-hover:scale-[1.42] transition-all duration-700 ease-out"
                  />
                  {/* Card overlay screen */}
                  <div className="absolute inset-0 bg-black-rich/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                  
                  {/* Inline interactive circular arrow overlay bottom right */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-black-rich border border-gray-light flex items-center justify-center shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Metadata details */}
                <div className="flex flex-col gap-2 px-2">
                  <h4 className="font-sans font-black text-2xl uppercase tracking-tight text-purple-accent group-hover:text-black-rich transition-colors">
                    {project.client}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] uppercase tracking-wider text-gray-mid font-semibold bg-gray-light/60 border border-gray-light/80 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Section View More CTA */}
        <div className="gsap-reveal-item opacity-0 flex flex-col items-center justify-center mt-20 relative z-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsAllProjectsModalOpen(true)}
            className="group relative inline-flex items-center gap-3 bg-black-rich text-white hover:bg-lime-accent hover:text-black-rich px-8 py-5 rounded-full font-sans font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl border-2 border-black-rich cursor-pointer"
          >
            Explore All Live Websites
            <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

      </div>

      {/* Directory Modal for All Projects */}
      <AnimatePresence>
        {isAllProjectsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAllProjectsModalOpen(false)}
              className="absolute inset-0 bg-black-rich/85 backdrop-blur-md cursor-default"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-white text-black-rich rounded-[32px] w-full max-w-4xl max-h-[85vh] overflow-y-auto relative z-10 border border-gray-light shadow-2xl scrollbar-thin p-6 md:p-10 flex flex-col gap-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-light pb-5">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] bg-lime-accent text-black-rich px-3 py-1 rounded-full uppercase tracking-widest font-bold w-max">
                    PROJECT DIRECTORY
                  </span>
                  <h3 className="font-sans font-black text-2xl md:text-3xl uppercase tracking-tight text-black-rich mt-2">
                    Our Production Work
                  </h3>
                </div>
                <button
                  onClick={() => setIsAllProjectsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-light border border-gray-light flex items-center justify-center hover:bg-black-rich hover:text-white transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Grid of All Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="border border-gray-light/80 hover:border-purple-accent/40 rounded-2xl p-5 flex flex-col justify-between bg-gray-light/10 hover:bg-gray-light/30 transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      {/* Image Thumbnail */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-gray-light">
                        <img 
                          src={project.imageUrl} 
                          alt={project.client} 
                          className="w-full h-full object-cover scale-[1.32]"
                        />
                      </div>

                      {/* Meta */}
                      <div className="flex flex-col gap-1">
                        <h4 className="font-sans font-black text-lg uppercase tracking-tight text-black-rich leading-none">
                          {project.client}
                        </h4>
                        <span className="text-xs text-purple-accent font-semibold">{project.title}</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.tags.slice(0, 2).map((t) => (
                            <span key={t} className="font-mono text-[8px] uppercase tracking-wider text-gray-mid font-semibold bg-white border border-gray-light px-1.5 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-5 pt-4 border-t border-gray-light">
                      <button
                        onClick={() => {
                          setIsAllProjectsModalOpen(false);
                          setSelectedProject(project);
                        }}
                        className="flex-1 py-2 px-3 rounded-xl border border-black-rich text-xs font-bold uppercase tracking-wider text-center hover:bg-black-rich hover:text-white transition-all cursor-pointer font-sans"
                      >
                        Case Study
                      </button>

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 rounded-xl bg-lime-accent hover:bg-black-rich hover:text-white text-black-rich text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1 transition-all cursor-pointer font-sans"
                        >
                          Visit Site
                          <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <span className="flex-1 py-2 px-3 rounded-xl bg-gray-light text-gray-mid text-xs font-bold uppercase tracking-wider text-center select-none font-sans flex items-center justify-center">
                          Internal System
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Case Study Modals Showcase */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
};
