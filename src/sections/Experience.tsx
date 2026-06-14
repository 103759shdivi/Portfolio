import React from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import Card from "@/components/Shared/Card";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="section-container">
        <SectionHeading
          badgeText="Work"
          title="Experience"
          subtitle="Professional roles and achievements"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {portfolioData.experience.map((exp, idx) => (
            <Card key={idx} delay={idx * 0.08}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem" }}>
                <div>
                  <h4 style={{ fontWeight: 700, color: "#fff", fontSize: "1rem" }}>{exp.role}</h4>
                  <p style={{ color: "#a78bfa", fontSize: "0.875rem", fontWeight: 500, marginTop: "0.2rem" }}>{exp.company}</p>
                </div>
                <span style={{
                  fontSize: "0.75rem",
                  color: "#64748b",
                  background: "rgba(30,41,59,0.8)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  whiteSpace: "nowrap",
                }}>
                  {exp.period}
                </span>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {exp.description.map((d, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.7 }}>
                    <span style={{ color: "#34d399", marginTop: "0.25rem", flexShrink: 0 }}>▸</span>
                    {d}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
