"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/Shared/Card";
import Button from "@/components/Shared/Button";
import SectionHeading from "@/components/Shared/SectionHeading";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");

    // Simulate API request submission
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      
      // Reset back to idle after a few seconds
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-purple-400" />, label: "Email Me", value: portfolioData.personalDetails.email, href: `mailto:${portfolioData.personalDetails.email}` },
    { icon: <Phone className="w-5 h-5 text-emerald-400" />, label: "Call Me", value: portfolioData.personalDetails.phone, href: `tel:${portfolioData.personalDetails.phone}` },
    { icon: <MapPin className="w-5 h-5 text-sky-400" />, label: "Location", value: portfolioData.personalDetails.location, href: "#" }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badgeText="✦ CONTACT"
        title="Get In Touch"
        subtitle="Feel free to reach out for software collaborations, IT troubleshooting requests, or general inquiries."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Info Column */}
        <div className="md:col-span-5 flex flex-col gap-5">
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.href}
              className={`block group ${info.href === "#" ? "pointer-events-none" : ""}`}
            >
              <Card glowOnHover={true} className="!p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-white/5 bg-slate-900 flex items-center justify-center group-hover:border-purple-500/30 group-hover:bg-purple-500/5 transition-all duration-300">
                  {info.icon}
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">
                    {info.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">
                    {info.value}
                  </span>
                </div>
              </Card>
            </a>
          ))}

          {/* Social icons connector card */}
          <Card className="flex flex-col items-center gap-4 text-center mt-2">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-mono">
              Find Me On
            </span>
            <div className="flex gap-4">
              <a
                href={portfolioData.personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/5 bg-slate-900 hover:border-purple-500/50 hover:bg-purple-500/5 text-slate-400 hover:text-purple-400 flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/5 bg-slate-900 hover:border-purple-500/50 hover:bg-purple-500/5 text-slate-400 hover:text-purple-400 flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </Card>
        </div>

        {/* Contact Form Column */}
        <div className="md:col-span-7">
          <Card glowOnHover={false} className="relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-xs leading-relaxed font-medium">
                    Thank you for reaching out. Kavinda will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <h3 className="text-base font-bold text-white uppercase tracking-widest font-mono mb-2">
                    Send a Message
                  </h3>
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-slate-950 text-slate-200 text-xs sm:text-sm outline-none focus:border-purple-500/50 focus:bg-slate-900/50 transition-all font-medium"
                      disabled={status === "sending"}
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-slate-950 text-slate-200 text-xs sm:text-sm outline-none focus:border-purple-500/50 focus:bg-slate-900/50 transition-all font-medium"
                      disabled={status === "sending"}
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-slate-950 text-slate-200 text-xs sm:text-sm outline-none focus:border-purple-500/50 focus:bg-slate-900/50 transition-all resize-none font-medium"
                      disabled={status === "sending"}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="glow"
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full mt-2"
                    icon={status === "sending" ? undefined : <Send className="w-4 h-4" />}
                  >
                    {status === "sending" ? "Sending Message..." : "Send Message"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </section>
  );
}
