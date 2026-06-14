"use client";
import { Award, Calendar, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/Shared/Card";
import SectionHeading from "@/components/Shared/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badgeText="✦ CREDENTIALS"
        title="Certifications"
        subtitle="Platform verifications, courses, and specialization pathways completed throughout my developer journey."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.certifications.map((cert, idx) => (
          <Card
            key={cert.title}
            glowOnHover={true}
            className="relative flex flex-col group h-full justify-between"
            delay={idx * 0.05}
          >
            {/* Visual Icon Node Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl border border-emerald-500/20 bg-slate-900 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </div>
              </div>

              {/* Title & Issuer details */}
              <h3 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors mb-1.5 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-slate-500 font-mono mb-4 uppercase tracking-wider">
                {cert.issuer}
              </p>
            </div>

            {/* Issued date */}
            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5 text-[10px] sm:text-xs font-mono text-slate-500 font-semibold">
              <Calendar className="w-4 h-4 text-slate-600" />
              <span>Issued {cert.date}</span>
            </div>

            {/* Ambient Background blur */}
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-purple-500/5 rounded-full filter blur-xl -z-10 pointer-events-none" />
          </Card>
        ))}
      </div>
    </section>
  );
}
