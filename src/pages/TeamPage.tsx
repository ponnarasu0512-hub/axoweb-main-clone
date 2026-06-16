import React, { useState, useEffect } from "react";
import { SEO } from "../components/SEO";
import { Globe, Phone, Mail, X } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  category: string;
}

const teamMembers: TeamMember[] = [
  
  {
    id: "1",
    name: "Narain Karti",
    role: "CEO & Co-founder",
    image: "/team-cto.jpeg",
    phone: "9176257316",
    email: "hello@axoweb.in",
    category: "LEADERSHIP"
  },
  {
    id: "2",
    name: "Vishal Raaj DND",
    role: "CTO & Co-founder",
    image: "/team-3.png?v=2",
    phone: "8015383591",
    email: "hello@axoweb.in",
    category: "LEADERSHIP"
  },
  {
    id: "3",
    name: "A M TESHA",
    role: "COO & CFO & Co-founder",
    image: "/team-tesha.jpg",
    phone: "6380695874",
    email: "hello@axoweb.in",
    category: "LEADERSHIP"
  },
  {
    id: "4",
    name: "Ponnarasu P",
    role: "CPO & Co-founder",
    image: "/team-1.png",
    phone: "9003075415",
    email: "hello@axoweb.in",
    category: "LEADERSHIP"
  },
  {
    id: "5",
    name: "Kubenthira D",
    role: "Chief Strategy Officer",
    image: "/team-5.jpg",
    phone: "9087309541",
    email: "hello@axoweb.in",
    category: "STRATEGY"
  }
  
];

export const TeamPage: React.FC = () => {
  const [activeContactId, setActiveContactId] = useState<string | null>(null);

  const filteredMembers = teamMembers;

  // Close the popover if clicked outside
  useEffect(() => {
    const handleClickOutside = () => setActiveContactId(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center bg-white py-20 px-4 sm:px-8">
      <SEO 
        title="Our Team | AXOWEB"
        description="Meet the core team members behind AXOWEB."
      />
      
      <div className="w-full max-w-[1440px] mx-auto mb-16 md:mb-24 text-center px-4 md:px-12">
        <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] font-bold text-[#6D28FF] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28FF] animate-pulse" />
            OUR TEAM
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight uppercase text-black-rich">
            MEET THE{" "}
            <span className="inline-block px-5 py-2.5 bg-lime-accent text-black-rich rounded-[100px] border-2 border-black-rich my-2 select-none shadow-[4px_4px_0px_#000] hover:scale-[1.03] transition-all duration-300 font-sans font-black text-3xl sm:text-5xl md:text-[50px] lg:text-[60px] leading-none align-middle">
              TEAM.
            </span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-gray-mid font-semibold leading-relaxed max-w-2xl mx-auto text-center mt-2">
            A collective of digital experts united by passion, driven by data, and engineered for growth.
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 px-4 md:px-12">
        
        {filteredMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center group bg-black-rich text-white p-6 md:p-8 rounded-[32px] shadow-xl transition-all duration-300 border border-gray-mid/20 hover:-translate-y-2 relative">
            
            {/* Circular Headshot Container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-6">
              {/* Outer Dashed Ring */}
              <div className="absolute inset-[-12px] rounded-full border-[1.5px] border-dashed border-white/20 group-hover:border-lime-accent group-hover:rotate-12 transition-all duration-700 ease-out pointer-events-none" />
              
              {/* Photo */}
              <img 
                src={member.image} 
                alt={`${member.name} Headshot`} 
                className="w-full h-full object-cover object-top rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Location Badge / Contact Toggle */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveContactId(activeContactId === member.id ? null : member.id);
                }}
                className="absolute bottom-2 -left-2 w-10 h-10 bg-lime-accent rounded-full flex items-center justify-center shadow-lg border-[3px] border-black-rich text-black-rich transform group-hover:scale-110 transition-transform duration-300 z-20 cursor-pointer"
                aria-label="View Contact Info"
              >
                {activeContactId === member.id ? <X size={18} strokeWidth={2.5} /> : <Globe size={18} strokeWidth={2.5} />}
              </button>

              {/* Floating Contact Popover */}
              {activeContactId === member.id && (
                <div 
                  className="absolute bottom-12 left-0 min-w-[220px] bg-black-rich text-white rounded-2xl shadow-[0_15px_40px_rgba(109,40,255,0.2)] p-4 flex flex-col gap-3 z-30 animate-in fade-in slide-in-from-bottom-2 duration-200 border border-purple-accent/40 backdrop-blur-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a 
                    href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '').replace(/^(\d{10})$/, '91$1')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-semibold text-gray-300 hover:text-lime-accent transition-colors group/link"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover/link:text-black-rich group-hover/link:bg-lime-accent transition-colors shrink-0">
                      <Phone size={14} />
                    </div>
                    <span className="truncate">{member.phone}</span>
                  </a>
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-semibold text-gray-300 hover:text-lime-accent transition-colors group/link"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover/link:text-black-rich group-hover/link:bg-lime-accent transition-colors shrink-0">
                      <Mail size={14} />
                    </div>
                    <span className="truncate" title={member.email}>{member.email}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Name */}
            <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2 uppercase tracking-wider text-center leading-[1.1] max-w-[180px]">
              {member.name}
            </h3>
            
            {/* Job Title */}
            <p className="font-sans text-[10px] md:text-[11px] font-bold text-purple-accent uppercase tracking-widest text-center max-w-[180px] drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
              {member.role}
            </p>
            
          </div>
        ))}
        
      </div>
    </div>
  );
};
