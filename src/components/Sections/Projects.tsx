"use client";
import { Github, ExternalLink, Code2, Bot, ShoppingCart, Kanban, User } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/Shared/Card";
import SectionHeading from "@/components/Shared/SectionHeading";

// Custom inline SVG visualizations for projects to make the UI look premium without broken images
function ProjectVisual({ title }: { title: string }) {
  const getVisual = () => {
    switch (title) {
      case "Treasure Hunter AI":
        return (
          <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Grid pathfinder simulation */}
            <div className="grid grid-cols-5 gap-1.5 w-32 h-32 opacity-40">
              {Array.from({ length: 25 }).map((_, i) => {
                const isObstacle = [2, 7, 12, 13, 14, 18].includes(i);
                const isPath = [0, 1, 6, 11, 16, 21, 22, 23, 24].includes(i);
                const isTarget = i === 24;
                return (
                  <div
                    key={i}
                    className={`w-5 h-5 rounded-sm border border-white/5 transition-all duration-500 ${
                      isTarget
                        ? "bg-emerald-500/80 shadow shadow-emerald-400"
                        : isObstacle
                        ? "bg-slate-800"
                        : isPath
                        ? "bg-purple-500/20 border-purple-500/30"
                        : "bg-slate-900"
                    }`}
                  />
                );
              })}
            </div>
            <Bot className="absolute w-8 h-8 text-purple-400 animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        );
      case "AI Chat Application":
        return (
          <div className="w-full h-full bg-slate-950 flex flex-col justify-end p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Chat bubble wires */}
            <div className="flex flex-col gap-2 w-full max-w-[180px] mx-auto opacity-40 mb-6">
              <div className="h-4 w-28 bg-purple-500/20 rounded-lg rounded-tl-none border border-purple-500/30" />
              <div className="h-4 w-36 bg-emerald-500/20 rounded-lg rounded-tr-none border border-emerald-500/30 self-end" />
              <div className="h-6 w-32 bg-purple-500/20 rounded-lg rounded-tl-none border border-purple-500/30" />
            </div>
            <Code2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-emerald-400 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        );
      case "E-Commerce System":
        return (
          <div className="w-full h-full bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Dashboard / Analytics chart representation */}
            <div className="flex items-end gap-2 h-20 w-36 opacity-30">
              <div className="w-6 h-8 bg-slate-800 rounded-sm" />
              <div className="w-6 h-12 bg-emerald-500/30 rounded-sm border border-emerald-500/40" />
              <div className="w-6 h-16 bg-slate-800 rounded-sm" />
              <div className="w-6 h-20 bg-purple-500/40 rounded-sm border border-purple-500/50" />
            </div>
            <ShoppingCart className="absolute w-8 h-8 text-sky-400" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        );
      case "Task Management System":
        return (
          <div className="w-full h-full bg-slate-950 flex items-center justify-center gap-3 p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Kanban Columns representation */}
            <div className="flex gap-2 w-44 opacity-30">
              <div className="flex flex-col gap-1.5 w-14 p-1 rounded bg-white/5 h-20">
                <div className="h-3 w-full bg-slate-800 rounded-sm" />
                <div className="h-3 w-full bg-slate-800 rounded-sm" />
              </div>
              <div className="flex flex-col gap-1.5 w-14 p-1 rounded bg-white/5 h-20">
                <div className="h-4 w-full bg-purple-500/20 border border-purple-500/30 rounded-sm" />
              </div>
              <div className="flex flex-col gap-1.5 w-14 p-1 rounded bg-white/5 h-20">
                <div className="h-3 w-full bg-slate-800 rounded-sm" />
              </div>
            </div>
            <Kanban className="absolute w-8 h-8 text-purple-400" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Portfolio glow shapes */}
            <div className="absolute -top-12 -left-12 w-28 h-28 bg-purple-500/10 rounded-full filter blur-xl animate-pulse-slow" />
            <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full filter blur-xl animate-pulse-slow" />
            <User className="w-8 h-8 text-emerald-400" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        );
    }
  };

  return (
    <div className="h-44 w-full border-b border-white/5 overflow-hidden relative">
      {getVisual()}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badgeText="✦ PORTFOLIO"
        title="Featured Projects"
        subtitle="A selection of full-stack products, artificial intelligence simulations, and application frameworks."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project, idx) => (
          <Card
            key={project.title}
            glowOnHover={true}
            className="flex flex-col !p-0 overflow-hidden relative h-full group"
            delay={idx * 0.05}
          >
            {/* Visual Header */}
            <ProjectVisual title={project.title} />

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                {project.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-bold font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons Actions */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors ml-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
