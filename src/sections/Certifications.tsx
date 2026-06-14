import React from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import Card from "@/components/Shared/Card";
import { portfolioData } from "@/data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <div className="section-container">
        <SectionHeading
          badgeText="Credentials"
          title="Certifications & Education"
          subtitle="Verified training and academic background"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {portfolioData.certifications.map((c, idx) => (
            <Card key={idx} delay={idx * 0.06}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>{c.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.3rem" }}>{c.issuer} • {c.date}</div>
                </div>
                <span style={{
                  fontSize: "0.72rem",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "9999px",
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.25)",
                  color: "#a78bfa",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}>
                  ✓ Certified
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
