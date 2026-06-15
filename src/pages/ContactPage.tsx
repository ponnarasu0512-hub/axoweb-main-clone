import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export const ContactPage: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userConcept, setUserConcept] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableServices = ["Web Development", "Internal Systems", "AI Solutions", "Automation Systems", "Security & Compliance"];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      const mailtoSubject = encodeURIComponent("AXOWEB Project Inquiry");
      const mailtoBody = encodeURIComponent(
        `Dear AXOWEB Team,\n\nI'd like to discuss a project with the following details:\n\n` +
        `• Name: ${userName}\n` +
        `• Email: ${userEmail}\n` +
        `• Phone: ${userPhone || "Not provided"}\n` +
        `• Services needed: ${selectedServices.length > 0 ? selectedServices.join(", ") : "Not specified"}\n` +
        `• Project details: ${userConcept || "Not provided"}\n\n` +
        `Looking forward to connecting.\n\n` +
        `Best regards,\n${userName}`
      );

      window.location.href = `mailto:hello@axoweb.in?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 1200);
  };

  return (
    <>
      <SEO
        title="Contact Us | AXOWEB"
        description="Get in touch with AXOWEB for custom web development, AI solutions, automation systems, and enterprise security. Schedule a free discovery call today."
        canonicalUrl="https://axoweb.in/contact"
      />

      {/* Hero Header */}
      <section className="w-full bg-white px-6 md:px-12 lg:px-16 pt-8 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-5 max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-[#6D28FF] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D28FF] animate-pulse" />
              GET IN TOUCH
            </div>
            <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight uppercase text-black-rich">
              Let's Talk About{" "}
              <span className="inline-block px-5 py-2 bg-lime-accent text-black-rich rounded-[100px] border-2 border-black-rich select-none shadow-[4px_4px_0px_#000] hover:scale-[1.03] transition-all duration-300 font-sans font-black text-3xl sm:text-5xl md:text-[50px] lg:text-[60px] leading-none my-2">
                Your Project.
              </span>
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-mid font-semibold leading-relaxed max-w-xl">
              Whether you need a website, an internal system, AI automation, or a complete digital overhaul — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="w-full bg-white px-3 sm:px-4 md:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1440px] w-full bg-black-rich text-white rounded-[28px] sm:rounded-[40px] md:rounded-[48px] px-5 sm:px-8 py-8 sm:py-12 lg:px-14 lg:py-16 shadow-2xl relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-accent/40 to-transparent" />
          <div className="absolute left-[10%] top-[-100px] w-[300px] h-[300px] bg-[#6D28FF]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10">

            {/* Form Column */}
            <div className="lg:col-span-7">
              {!isSubmitted ? (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-7"
                >
                  <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                    Send Us a Message
                  </h2>
                  <p className="font-sans text-sm text-gray-400 max-w-lg leading-relaxed font-semibold">
                    Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Aravind Kumar"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder:text-gray-650 text-sm focus:outline-none focus:border-lime-accent focus:bg-white/10 transition-all font-sans text-white w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="aravind@firm.com"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder:text-gray-650 text-sm focus:outline-none focus:border-lime-accent focus:bg-white/10 transition-all font-sans text-white w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Phone Number</label>
                      <input
                        type="tel"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder:text-gray-650 text-sm focus:outline-none focus:border-lime-accent focus:bg-white/10 transition-all font-sans text-white w-full"
                      />
                    </div>
                  </div>

                  {/* Services selection */}
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                      Select Services You Need
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const active = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer select-none ${
                              active
                                ? "bg-lime-accent text-black-rich border-lime-accent font-bold scale-[1.03]"
                                : "bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Tell us about your project (Optional)</label>
                    <textarea
                      value={userConcept}
                      onChange={(e) => setUserConcept(e.target.value)}
                      rows={4}
                      placeholder="What challenges are you facing? What tools do you currently use?"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder:text-gray-650 text-sm focus:outline-none focus:border-lime-accent focus:bg-white/10 transition-all font-sans text-white resize-none w-full"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex items-center justify-center gap-3 bg-white text-black-rich hover:bg-lime-accent hover:text-black-rich disabled:bg-gray-500 rounded-full px-7 py-3.5 text-sm font-bold tracking-tight transition-all shadow-lg active:scale-95 cursor-pointer"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-black-rich border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-lime-accent/10 border border-lime-accent/30 rounded-3xl p-7 max-w-lg flex flex-col gap-4 text-left"
                >
                  <div className="flex items-center gap-3 text-lime-accent">
                    <CheckCircle2 size={36} />
                    <h3 className="font-sans font-black text-2xl uppercase tracking-tight text-white">Message Sent!</h3>
                  </div>
                  <p className="text-sm font-medium text-gray-300 leading-relaxed">
                    Thanks, <strong className="text-white">{userName}</strong>! We've received your project details and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setUserName("");
                      setUserEmail("");
                      setUserPhone("");
                      setUserConcept("");
                      setSelectedServices([]);
                    }}
                    className="font-mono text-xs uppercase tracking-widest text-[#B6E82C] hover:underline self-start mt-2"
                  >
                    ← Send another message
                  </button>
                </motion.div>
              )}
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:text-right lg:items-end">
              <div className="flex flex-col gap-6 font-sans items-start lg:items-end text-left lg:text-right">

                <div className="font-semibold text-lg text-white uppercase tracking-tight flex items-center lg:justify-end gap-2 text-lime-accent">
                  <img
                    src="/logo-dark.png"
                    alt="Axoweb Logo"
                    className="h-10 w-auto invert"
                    style={{ display: "block" }}
                  />
                </div>

                <h3 className="font-sans font-black text-xl uppercase tracking-tight text-white">
                  Contact Information
                </h3>

                <div className="flex items-start lg:justify-end gap-3 text-sm text-gray-400">
                  <MapPin size={16} className="text-purple-accent shrink-0 mt-0.5 lg:order-2" />
                  <span className="font-medium text-xs leading-relaxed">Plot no.64, CLV Nagar 1st Street., ECR Road, Kanathur Pin 603112.</span>
                </div>

                <div className="flex items-start lg:justify-end gap-3 text-sm text-gray-400">
                  <Phone size={16} className="text-purple-accent shrink-0 mt-0.5 lg:order-2" />
                  <div className="flex flex-col items-start lg:items-end">
                    <a href="tel:+916380695874" className="font-medium font-mono text-xs hover:text-lime-accent transition-colors">+91 63806 95874</a>
                    <a href="tel:+918015383591" className="font-medium font-mono text-xs hover:text-lime-accent transition-colors">+91 80153 83591</a>
                    <a href="tel:+919176267316" className="font-medium font-mono text-xs hover:text-lime-accent transition-colors">+91 91762 67316</a>
                  </div>
                </div>

                <div className="flex items-center lg:justify-end gap-3 text-sm text-gray-400">
                  <Mail size={16} className="text-purple-accent shrink-0 lg:order-2" />
                  <a href="mailto:hello@axoweb.in" className="font-mono hover:text-lime-accent transition-colors font-medium text-xs break-all">
                    hello@axoweb.in
                  </a>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] flex flex-col gap-4 w-full">
                <h4 className="font-sans font-bold text-sm uppercase tracking-tight text-white">Prefer a call?</h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Schedule a free 30-minute discovery call to discuss your project requirements.
                </p>
                <a
                  href="tel:+916380695874"
                  className="flex items-center justify-center gap-2 bg-lime-accent text-black-rich rounded-full px-5 py-3 font-sans font-bold text-xs uppercase tracking-wide hover:bg-white transition-all"
                >
                  Call Now
                  <ArrowRight size={14} className="stroke-[3]" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
