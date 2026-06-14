"use client";
import { Code2, Palette, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/Shared/Card";
import SectionHeading from "@/components/Shared/SectionHeading";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "Web Development": <Code2 className="w-6 h-6 text-purple-400" />,
  "UI/UX Design": <Palette className="w-6 h-6 text-emerald-400" />,
  "Software Solutions": <Cpu className="w-6 h-6 text-sky-400" />
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badgeText="✦ WHAT I DO"
        title="Services Offered"
        subtitle="Leveraging my expertise to build robust software systems and run smooth business operations."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.services.map((service, idx) => (
          <Card
            key={service.title}
            glowOnHover={true}
            className="relative flex flex-col group h-full justify-between"
            delay={idx * 0.05}
          >
            {/* Visual Icon Node Header */}
            <div>
              <div className="w-12 h-12 rounded-2xl border border-white/5 bg-slate-900 flex items-center justify-center mb-6 group-hover:border-purple-500/30 group-hover:bg-purple-500/5 transition-all duration-300">
                {SERVICE_ICONS[service.title] || <Code2 className="w-6 h-6 text-purple-400" />}
              </div>

              {/* Title & Description details */}
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>

            {/* Ambient Background glow */}
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-purple-500/5 rounded-full filter blur-xl -z-10 pointer-events-none" />
          </Card>
        ))}
      </div>
    </section>
  );
}
