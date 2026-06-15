import React from "react";
import { motion } from "motion/react";
import { X, Calendar, User, Eye, Target, Award, Milestone, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../types";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Rich case study content specific to AXOWEB projects
  const getCaseStudyDetails = (id: string) => {
    switch (id) {
      case "meredith":
        return {
          tagline: "Seamless college fest coordination and student registrations.",
          challenge: "Managing registrations, schedule shifts, and announcements across 20+ fest events led to duplicate entries and staff fatigue.",
          solution: "Built a responsive React landing portal with live updates, quick schedule views, and single-click student Google Auth registration.",
          metrics: [
            { label: "Response Delay", value: "< 1s" },
            { label: "Manual Labour Saved", value: "95hr/fest" },
            { label: "Registrations Logged", value: "2,500+" },
          ],
          timeline: "2 Weeks",
          role: "Full-Stack Event Tech Delivery",
        };
      case "educational-institution":
        return {
          tagline: "A unified, accessible web presence for the modern campus.",
          challenge: "The old institutional website was non-responsive, difficult to navigate for prospective students, and lacked CMS admin controls for announcements.",
          solution: "Implemented a fully accessible portal with structured course listings, online admissions forms, and a clean Markdown-powered news board.",
          metrics: [
            { label: "Speed Score", value: "98/100" },
            { label: "Admissions Filed", value: "+42%" },
            { label: "Admin Overhead", value: "-60%" },
          ],
          timeline: "3 Weeks",
          role: "Institutional Web Engineering",
        };
      case "e-commerce":
        return {
          tagline: "High-performance storefront and payment pipelines built to convert.",
          challenge: "Slow cart load speeds and complex checkout steps caused a 70% cart abandonment rate on mobile devices.",
          solution: "Designed a lightweight React storefront integrated with smooth checkout pipelines and instant mobile-payment support.",
          metrics: [
            { label: "Abandonment Rate", value: "-45%" },
            { label: "Mobile Load Time", value: "1.1s" },
            { label: "Revenue Growth", value: "+32%" },
          ],
          timeline: "4 Weeks",
          role: "Storefront UI & Payment Integration",
        };
      case "amet-lms":
        return {
          tagline: "Database-driven book tracking and circulation analytics.",
          challenge: "The campus library relied on manual paper registers, resulting in lost books, late fee tracking errors, and high admin delay.",
          solution: "Engineered a custom Library Management System with real-time stock availability search, student accounts, and automated return notifications.",
          metrics: [
            { label: "Check-in Speed", value: "Sub-second" },
            { label: "Lost Asset Rate", value: "0%" },
            { label: "Admin Time Saved", value: "120hr/mo" },
          ],
          timeline: "4 Weeks",
          role: "LMS Database & Backend Architecture",
        };
      case "expense-tracker":
      default:
        return {
          tagline: "Intuitive expense analysis and budgeting controls.",
          challenge: "Manual spreadsheet expense logs were tedious, prone to input errors, and offered no live analytics for business budgets.",
          solution: "Created a secure personal expense dashboard with auto-categorized records, dynamic monthly budgets, and clean chart visualizers.",
          metrics: [
            { label: "Tracking Error", value: "0%" },
            { label: "Category Auto-Tag", value: "98%" },
            { label: "User Budget Accuracy", value: "+25%" },
          ],
          timeline: "3 Weeks",
          role: "Dashboard UI & Analytical Scripts",
        };
    }
  };

  const details = getCaseStudyDetails(project.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark blur backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black-rich/80 backdrop-blur-md cursor-default"
      />

      {/* Case Study Container Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
        className="bg-white text-black-rich rounded-[32px] w-full max-w-4xl max-h-[85vh] overflow-y-auto relative z-10 border border-gray-light shadow-2xl scrollbar-thin"
      >
        {/* Sticky Header Row inside modal */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-xs px-8 py-5 border-b border-gray-light flex justify-between items-center z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] bg-purple-accent text-white px-3 py-1 rounded-full uppercase tracking-widest font-bold">
              CASE STUDY
            </span>
            <span className="text-gray-mid font-mono text-[11px]">{details.timeline}</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-light border border-gray-light flex items-center justify-center hover:bg-black-rich hover:text-white transition-all cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 md:p-10 flex flex-col gap-8">
          
          {/* Main Title Headings */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black-rich">
                {project.client}
              </h3>
              <p className="font-sans font-semibold text-lg text-purple-accent italic">
                "{details.tagline}"
              </p>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black-rich text-white hover:bg-lime-accent hover:text-black-rich px-5 py-3 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all self-start sm:self-center cursor-pointer"
              >
                Visit Website
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          {/* Big Featured Image */}
          <div className="w-full h-[280px] md:h-[380px] rounded-2xl overflow-hidden shadow-inner border border-gray-light">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover scale-[1.32]"
            />
          </div>

          {/* Project Metas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-light/40 border border-gray-light p-6 rounded-2xl">
            <div className="flex items-center gap-3">
              <Calendar className="text-purple-accent" size={20} />
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-gray-mid font-semibold">Timeline</div>
                <div className="text-sm font-bold text-black-rich">{details.timeline}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="text-purple-accent" size={20} />
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-gray-mid font-semibold">Core Role</div>
                <div className="text-sm font-bold text-black-rich">{details.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-purple-accent" size={20} />
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-gray-mid font-semibold">Client Vertical</div>
                <div className="text-sm font-bold text-black-rich">{project.title}</div>
              </div>
            </div>
          </div>

          {/* Narrative Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-black-rich font-bold text-base uppercase font-display border-b border-gray-light pb-2">
                <Target size={16} className="text-purple-accent" /> THE CHALLENGE
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {details.challenge}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-black-rich font-bold text-base uppercase font-display border-b border-gray-light pb-2">
                <Milestone size={16} className="text-lime-accent fill-black" /> THE CREATIVE SOLUTION
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {details.solution}
              </p>
            </div>
          </div>

          {/* Outcome Stat Cards */}
          <div className="flex flex-col gap-4">
            <div className="text-xs uppercase font-mono tracking-widest text-gray-mid font-bold border-b border-gray-light pb-2 flex items-center gap-1.5 font-medium">
              <Eye size={14} className="text-purple-accent" /> METRIC OUTCOMES & KPI IMPACTS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
              {details.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-lime-accent/10 border border-lime-accent/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-black-rich/60 font-semibold mb-1">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-extrabold text-[#3a580a] font-display">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-light">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-mono bg-gray-light text-black-rich px-3 py-1 rounded-full font-bold"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
};
