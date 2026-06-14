import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/Shared/SectionHeading";
import Card from "@/components/Shared/Card";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <div className="section-container" style={{ maxWidth: "1200px" }}>
        <SectionHeading badgeText="Work" title="Projects" subtitle="Featured projects and case studies" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {portfolioData.projects.map((p, idx) => (
            <Card key={idx} delay={idx * 0.06} style={{ display: "flex", flexDirection: "column" }}>
              {p.imageUrl && (
                <div style={{ width: "100%", height: "180px", position: "relative", marginBottom: "1.25rem", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <Image src={p.imageUrl} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              )}
              <h4 style={{ fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: "0.5rem" }}>{p.title}</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7, flexGrow: 1, marginBottom: "1rem" }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                {p.techStack.map(t => (
                  <span key={t} style={{ fontSize: "0.72rem", padding: "0.2rem 0.6rem", background: "rgba(30,41,59,0.9)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.4rem", color: "#94a3b8" }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ fontSize: "0.875rem", color: "#c084fc", textDecoration: "none" }}>GitHub ↗</a>}
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{ fontSize: "0.875rem", color: "#34d399", textDecoration: "none" }}>Live ↗</a>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
