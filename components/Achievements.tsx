import { ReactNode } from "react";

type Achievement = {
  icon: ReactNode;
  title: string;
  org: string;
  desc?: string;
  href?: string;
  gradient: string;
};

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "rgba(255,255,255,0.8)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const hackathons: Achievement[] = [
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "HackMoney 2026",
    org: "ETHGlobal · ENS prize winner",
    desc: "Mand(ate) won ENS's Integrate ENS prize for putting credit intents into ENS text records.",
    href: "https://ethglobal.com/showcase/mand-ate-3npu6",
    gradient: "linear-gradient(135deg, #1e1340 0%, var(--color-primary-card) 100%)",
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Colosseum Crypto World's Fair",
    org: "2026 · Main and Superteam India tracks",
    desc: "Entering Sealed, private stablecoin payroll on Solana's Confidential Balances.",
    href: "https://github.com/codebird-n4vnt/sealed",
    gradient: "linear-gradient(135deg, var(--color-secondary) 0%, #5b21b6 100%)",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <path d="M4 22v-7" />
      </svg>
    ),
    title: "Solana Frontier Hackathon",
    org: "Participant",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, var(--color-primary-card) 100%)",
  },
];

const certifications = [
  { title: "Certified Full Stack Developer", org: "SmartED India" },
  { title: "Leadership Certification", org: "Competitiveness Mindset Institute" },
];

function HackathonCard({ icon, title, org, desc, href, gradient }: Achievement) {
  const body = (
    <>
      <div className="mb-5 flex items-start justify-between">
        {icon}
        {href && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        )}
      </div>
      <p
        className="text-[16px] font-bold leading-snug mb-1.5"
        style={{ fontFamily: "var(--font-display)", color: "#fff" }}
      >
        {title}
      </p>
      <p
        className="text-[12px] font-medium mb-3"
        style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.7)" }}
      >
        {org}
      </p>
      {desc && (
        <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          {desc}
        </p>
      )}
    </>
  );
  const className =
    "block rounded-[1.5rem] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01]";
  const style = { background: gradient, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" };

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {body}
    </a>
  ) : (
    <div className={className} style={style}>
      {body}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
        >
          # Achievements
        </p>
        <h2
          className="font-bold tracking-[-0.02em] mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 40px)",
            color: "var(--color-primary)",
          }}
        >
          Hackathons &amp; Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {hackathons.map((a) => (
            <HackathonCard key={a.title} {...a} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certifications.map(({ title, org }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-[1.5rem] px-7 py-5 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-outline-var)]"
              style={{ background: "var(--color-surface)", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(113,42,226,0.08)", color: "var(--color-secondary)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </span>
              <div>
                <p
                  className="text-[15px] font-bold leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}
                >
                  {title}
                </p>
                <p
                  className="text-[12px] font-medium"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-on-surface-var)" }}
                >
                  {org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
