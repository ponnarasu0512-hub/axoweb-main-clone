import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import gsap from "gsap";
import { SEO } from "../components/SEO";
import { CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Zap, Code2, Database, Cpu } from "lucide-react";

// Mock data to act as content source
const SERVICES_DATA: Record<string, any> = {
  "web-development": {
    title: "Web Development",
    subtitle: "High-conversion, mobile-first websites and e-commerce platforms designed to attract, engage, and convert leads into loyal customers.",
    icon: <Code2 size={40} className="text-purple-accent" />,
    features: [
      "Custom Frontend Architecture (React/Next.js)",
      "High-Performance Load Speeds (Sub 1-second)",
      "Technical SEO & Core Web Vitals Optimization",
      "Headless CMS Integration",
      "Conversion Rate Optimized UX/UI"
    ],
    whyUs: "We don't use bloated templates. We custom-code lightweight, highly scalable web applications that serve as a true business asset, guaranteeing top-tier security and pixel-perfect design.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  "internal-systems": {
    title: "Internal Systems",
    subtitle: "Custom-built, database-driven enterprise systems that replace fragmented workflows and spreadsheets with unified admin portals.",
    icon: <Database size={40} className="text-purple-accent" />,
    features: [
      "Custom ERP & CRM Solutions",
      "Unified Admin Dashboards",
      "Complex Relational Database Design",
      "Role-based Access Control (RBAC)",
      "API-first Architecture"
    ],
    whyUs: "Off-the-shelf software rarely fits your specific operational quirks. We architect relational databases and custom interfaces that mold exactly to how your team works, eliminating friction and spreadsheet chaos.",
    techStack: ["PostgreSQL", "Prisma", "Express", "React", "GraphQL"]
  },
  "ai-solutions": {
    title: "AI Solutions",
    subtitle: "Intelligent systems that automate support, understand documents, and make predictions built around your actual business use cases.",
    icon: <Cpu size={40} className="text-purple-accent" />,
    features: [
      "Custom LLM Integrations (OpenAI, Gemini)",
      "RAG (Retrieval-Augmented Generation) Systems",
      "Automated Customer Support Agents",
      "Document Parsing & Extraction",
      "Predictive Analytics Models"
    ],
    whyUs: "We cut through the AI hype. We implement deterministic, highly grounded AI models that solve real operational bottlenecks, ensuring your data remains private and outputs are strictly reliable.",
    techStack: ["Python", "TensorFlow", "LangChain", "Vector DBs", "OpenAI/Gemini APIs"]
  },
  "automation-systems": {
    title: "Automation Systems",
    subtitle: "Establish robust, rule-based custom API pipelines that sync tools and completely eliminate repetitive manual entry.",
    icon: <Zap size={40} className="text-purple-accent" />,
    features: [
      "Third-party API Integrations (Stripe, Twilio, etc.)",
      "Webhook-driven Event Pipelines",
      "Custom Zapier/Make Module Development",
      "Automated Reporting & ETL",
      "Legacy System Connecting"
    ],
    whyUs: "Manual data moving is an expensive human error risk. We build invisible cloud bridges between your disparate software tools that run 24/7, freeing your staff to focus on actual deep work.",
    techStack: ["Node.js", "REST APIs", "Webhooks", "AWS EventBridge", "Google Cloud Functions"]
  },
  "security-privacy": {
    title: "Security & Privacy",
    subtitle: "Granular access roles, secure cloud configurations, data encryption, and automatic backups protecting company intellectual property.",
    icon: <ShieldCheck size={40} className="text-purple-accent" />,
    features: [
      "End-to-End Encryption Implementation",
      "Automated Daily Database Backups",
      "Compliance Ready Architecture (GDPR/SOC2 foundations)",
      "DDoS Protection & WAF Setup",
      "Secure Authentication (MFA, SSO)"
    ],
    whyUs: "Security is not an afterthought—it's foundational. We configure military-grade AES encryption, bulletproof authentication flows, and automated disaster recovery, ensuring your IP and client data is never compromised.",
    techStack: ["AES-256", "OAuth2.0/OIDC", "Cloudflare WAF", "AWS KMS", "Docker/Kubernetes"]
  }
};

interface RelatedProject {
  id: string;
  client: string;
  title: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  services: string[];
}

const PROJECTS_DATA: RelatedProject[] = [
  {
    id: "meredith",
    client: "Meredith",
    title: "College Event Website",
    imageUrl: "/college-event-website-final.png",
    tags: ["College Event", "Web Platform", "Interactive"],
    link: "https://m2k26.vercel.app/",
    services: ["web-development"]
  },
  {
    id: "educational-institution",
    client: "Educational Institution",
    title: "College Institutional Website",
    imageUrl: "/educational-instituition-final.png",
    tags: ["Institutional", "University Portal", "Database"],
    link: "https://dawoodiyya.in/",
    services: ["web-development", "internal-systems"]
  },
  {
    id: "e-commerce",
    client: "Ozeno EC",
    title: "E-Commerce Platform",
    imageUrl: "/e-commerce-final.png",
    tags: ["E-Commerce", "Payments", "Storefront"],
    link: "https://ozenoec.vercel.app/",
    services: ["web-development"]
  },
  {
    id: "amet-lms",
    client: "AMET LMS",
    title: "College Library Management System",
    imageUrl: "/college-library-management-final.png",
    tags: ["Library System", "Admin Panel", "Book Tracker"],
    services: ["internal-systems", "automation-systems"]
  },
  {
    id: "expense-tracker",
    client: "Expense Tracker",
    title: "Personal & Business Expense Tracker",
    imageUrl: "/expense-tracker-final.png",
    tags: ["Finance Tools", "Dashboards", "Security"],
    services: ["internal-systems", "security-privacy"]
  }
];

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? SERVICES_DATA[serviceId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const relatedProjects = PROJECTS_DATA.filter((project) =>
    project.services.includes(serviceId || "")
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-black mb-4">Service Not Found</h2>
          <Link to="/" className="text-purple-accent hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 px-4 sm:px-6 lg:px-8 bg-white selection:bg-purple-accent selection:text-white">
      <SEO 
        title={`${service.title} | AXOWEB`}
        description={service.subtitle}
      />
      <div className="max-w-[1200px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-mid hover:text-black-rich transition-colors mb-12">
          <ArrowLeft size={16} /> ← Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Intro block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="w-20 h-20 rounded-[24px] bg-[#050505] flex items-center justify-center mb-4">
              {service.icon}
            </div>
            
            <h1 className="font-sans font-black text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-black-rich uppercase">
              {service.title}
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-gray-mid leading-relaxed max-w-xl">
              {service.subtitle}
            </p>
            
            <div className="pt-8">
              <button 
                onClick={() => {
                  const element = document.getElementById("footer-form");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    gsap.to("#contact .gsap-reveal-item", {
                      opacity: 1,
                      y: 0,
                      stagger: 0.1,
                      duration: 0.6,
                      overwrite: "auto"
                    });
                  }
                }}
                className="flex items-center gap-2 bg-black-rich text-white hover:bg-purple-accent rounded-full px-8 py-4 text-base font-bold transition-all transform active:scale-95 group"
              >
                Get a Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Content block */}
          <div className="flex flex-col gap-12">
            
            {/* Dark Card - Features */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#050505] p-10 md:p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-purple-accent/10 to-transparent blur-[80px]" />
              
              <div className="relative z-10">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B6E82C] font-bold mb-6 block">Capabilities</span>
                <ul className="flex flex-col gap-5">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 size={24} className="text-[#B6E82C] shrink-0 mt-0.5" />
                      <span className="font-sans text-[17px] font-semibold text-gray-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Why Us Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-purple-accent font-bold">Why Choose Us</span>
              <p className="font-sans text-xl font-semibold text-black-rich leading-[1.6]">
                {service.whyUs}
              </p>
            </motion.div>

            {/* Tech Stack List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-mid font-bold">Core Infrastructure</span>
              <div className="flex flex-wrap gap-3 mt-2">
                {service.techStack.map((tech: string, idx: number) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="relative px-5 py-2.5 rounded-full border border-gray-light bg-white text-sm font-semibold text-black-rich shadow-sm cursor-help hover:border-purple-accent/40 hover:shadow-lg hover:shadow-purple-accent/10 transition-colors group"
                  >
                    {tech}
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black-rich text-white text-[11px] uppercase tracking-wider font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10 pointer-events-none shadow-xl">
                      Enterprise Standard
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black-rich rotate-45" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Related Case Studies Grid */}
        {relatedProjects.length > 0 && (
          <div className="mt-24 pt-16 border-t border-gray-light/60">
            <h2 className="font-sans font-black text-2xl md:text-3xl uppercase tracking-tight text-black-rich mb-8">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {relatedProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group flex flex-col gap-4 relative cursor-default"
                >
                  {/* Image container with cropping to hide watermarks */}
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-light border border-gray-light/60 shadow-md relative">
                    <img
                      src={project.imageUrl}
                      alt={project.client}
                      className="w-full h-full object-cover scale-[1.15] grayscale group-hover:grayscale-0 group-hover:scale-[1.22] transition-all duration-700 ease-out"
                    />
                  </div>
                  {/* Meta */}
                  <div className="flex flex-col gap-1 px-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-purple-accent font-bold">
                      {project.title}
                    </span>
                    <h4 className="font-sans font-black text-xl uppercase tracking-tight text-black-rich">
                      {project.client}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[8px] uppercase tracking-wider text-gray-mid font-semibold bg-gray-light border border-gray-light px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Action Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-[#6D28FF] hover:text-[#B6E82C] hover:bg-black-rich inline-flex items-center gap-1 mt-2 self-start bg-gray-light/50 border border-gray-light px-3 py-1.5 rounded-xl transition-all"
                    >
                      Visit Site &rarr;
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
