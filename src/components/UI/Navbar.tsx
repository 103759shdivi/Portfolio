"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection based on page scroll
      const scrollPosition = window.scrollY + 150;
      
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-40 mx-auto max-w-5xl px-4 transition-all duration-300 ${
          isScrolled ? "scale-98" : ""
        }`}
      >
        <div
          className={`relative w-full h-14 md:h-16 px-4 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-slate-950/70 border-white/5 shadow-2xl backdrop-blur-md"
              : "bg-transparent border-transparent"
          } border`}
          style={{
            backdropFilter: isScrolled ? "blur(12px)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none"
          }}
        >
          <div className="grid grid-cols-3 items-center w-full h-full">
            {/* Logo (left) */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg border border-purple-500/30 flex items-center justify-center bg-slate-900 group-hover:border-purple-500/80 transition-colors">
                  <span className="font-mono text-sm font-bold text-purple-400 group-hover:text-purple-300">KS</span>
                </div>
                <span className="font-bold text-sm tracking-widest uppercase hidden sm:block bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  {portfolioData.personalDetails.name}
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links (center) */}
            <div className="flex items-center justify-center">
              <nav className="hidden md:flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      activeSection === item.id ? "text-purple-300" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-purple-500/10 border border-purple-500/20 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-4 justify-end">
            <a
              href={portfolioData.personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-500/30 hover:border-purple-500/80 bg-purple-500/10 text-xs font-semibold text-purple-300 hover:text-purple-200 hover:bg-purple-500/20 transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5" />
              Hire Me
            </a>
          </div>

            {/* Mobile Menu Toggle Button (right column) */}
            <div className="flex items-center justify-end md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-slate-900/50 hover:bg-slate-900 text-slate-300 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel rounded-2xl overflow-hidden shadow-2xl border-white/5"
          >
            <div className="flex flex-col p-6 gap-4 bg-slate-950/90 backdrop-blur-2xl">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`py-2 text-sm font-semibold border-b border-white/5 transition-colors ${
                    activeSection === item.id ? "text-purple-400" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex items-center justify-between mt-2 pt-2">
                <div className="flex gap-4">
                  <a
                    href={portfolioData.personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={portfolioData.personalDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-xs font-semibold text-white shadow-lg hover:shadow-purple-500/20 hover:brightness-110 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
