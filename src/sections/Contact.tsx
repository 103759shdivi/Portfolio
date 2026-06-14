"use client";
import React from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import Card from "@/components/Shared/Card";
import { portfolioData } from "@/data/portfolioData";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1rem",
  background: "rgba(15, 23, 42, 0.8)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "0.75rem",
  color: "#fff",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s ease",
};

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="section-container" style={{ maxWidth: "700px" }}>
        <SectionHeading
          badgeText="Say Hi"
          title="Contact"
          subtitle="Get in touch — I'm open to new opportunities."
        />
        <Card>
          <form
            action={`mailto:${portfolioData.personalDetails.email}`}
            method="post"
            encType="text/plain"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input name="name" placeholder="Your name" style={inputStyle} />
            <input name="email" type="email" placeholder="Email address" style={inputStyle} />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={6}
              style={{ ...inputStyle, resize: "none" }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.5rem" }}>
              <button
                type="submit"
                style={{
                  padding: "0.65rem 1.5rem",
                  background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.75rem",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
              <a
                href={`mailto:${portfolioData.personalDetails.email}`}
                style={{
                  padding: "0.65rem 1.25rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "0.75rem",
                  color: "#cbd5e1",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                Email Directly
              </a>
              <a
                href={portfolioData.personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "0.65rem 1.25rem",
                  border: "1px solid rgba(139,92,246,0.25)",
                  borderRadius: "0.75rem",
                  color: "#a78bfa",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                LinkedIn ↗
              </a>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
