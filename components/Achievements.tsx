import { ReactNode } from "react";

type Achievement = {
  icon: ReactNode;
  title: string;
  org: string;
  desc: string;
  gradient: string;
};

const achievements: Achievement[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Hackmoney 2026 Hackathon",
    org: "Partner Prize Winner",
    desc: "Competed and won a partner prize at one of Web3's premier hackathons.",
    gradient: "linear-gradient(135deg, #1e1340 0%, var(--color-primary-card) 100%)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Certified Full Stack Developer",
    org: "SmartED India",
    desc: "Completed a rigorous full-stack development certification program.",
    gradient: "linear-gradient(135deg, var(--color-secondary) 0%, #5b21b6 100%)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Leadership Certification",
    org: "Competitiveness Mindset Institute",
    desc: "Recognized for leadership excellence and competitive mindset.",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, var(--color-primary-card) 100%)",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
        >
          // Achievements
        </p>
        <h2
          className="font-bold tracking-[-0.02em] mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 40px)",
            color: "var(--color-primary)",
          }}
        >
          Recognition &amp; Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map(({ icon, title, org, desc, gradient }) => (
            <div
              key={title}
              className="rounded-[1.5rem] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01]"
              style={{
                background: gradient,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <div className="mb-5">{icon}</div>
              <p
                className="text-[16px] font-bold leading-snug mb-1.5"
                style={{ fontFamily: "var(--font-display)", color: "#fff" }}
              >
                {title}
              </p>
              <p
                className="text-[13px] font-medium mb-3"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.7)" }}
              >
                {org}
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
