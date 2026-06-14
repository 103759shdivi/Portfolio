import React from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import Card from "@/components/Shared/Card";
import { portfolioData } from "@/data/portfolioData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-wrapper">
      <div className="section-container">
        <SectionHeading
          badgeText="Feedback"
          title="Testimonials"
          subtitle="What people say about working with me"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {portfolioData.testimonials.map((t, idx) => (
            <Card key={idx} delay={idx * 0.07} style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "0.9rem", fontStyle: "italic", flexGrow: 1, marginBottom: "1.5rem" }}>
                &ldquo;{t.content}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #8b5cf6, #10b981)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{t.role} • {t.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
