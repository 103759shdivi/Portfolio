import React from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import Card from "@/components/Shared/Card";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="section-container">
        <SectionHeading
          badgeText="Skills"
          title="Technical Skills"
          subtitle="Frontend, Backend, Databases and Tools"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {portfolioData.skills.map((cat, idx) => (
            <Card key={cat.title} delay={idx * 0.07}>
              <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#c084fc", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
                {cat.title}
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    style={{
                      fontSize: "0.78rem",
                      padding: "0.35rem 0.75rem",
                      background: "rgba(30, 41, 59, 0.8)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "0.5rem",
                      color: "#cbd5e1",
                      cursor: "default",
                      transition: "all 0.2s ease",
                    }}
                    className="skill-pill"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
