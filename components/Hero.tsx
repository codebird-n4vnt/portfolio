import Image from "next/image";

const socialChips = [
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
    label: "IIT (ISM) Dhanbad",
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    label: "HackMoney 2026 · ENS prize",
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
    label: "Solana · EVM · TypeScript",
  },
];

const secondaryButton =
  "inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold border border-[var(--color-outline-var)] text-[var(--color-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)]";

export default function Hero() {
  return (
    <section id="about" className="py-16 sm:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — Content */}
          <div className="order-2 lg:order-1">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
            >
              # Full Stack &amp; Web3 Developer
            </p>

            <h1
              className="font-extrabold leading-[1.05] tracking-[-0.04em] mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 6vw, 72px)",
                color: "var(--color-primary)",
              }}
            >
              Navneet<br />Sahu.
            </h1>

            <p
              className="font-semibold tracking-[-0.02em] mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 2.2vw, 26px)",
                color: "var(--color-secondary)",
              }}
            >
              On-chain programs, and the apps people use them through.
            </p>

            <p
              className="text-[17px] leading-[1.7] mb-8 max-w-[600px]"
              style={{ color: "var(--color-on-surface-var)" }}
            >
              I&apos;m a B.Tech Chemical Engineering student at{" "}
              <strong style={{ color: "var(--color-primary)" }}>
                IIT (ISM) Dhanbad
              </strong>
              . I write Solana programs in Rust and contracts in Solidity, then
              the TypeScript backends and React frontends around them. Right now
              I&apos;m building{" "}
              <a
                href="#projects"
                className="font-semibold underline decoration-[var(--color-outline-var)] underline-offset-4 transition-colors hover:text-[var(--color-secondary)] hover:decoration-[var(--color-secondary)]"
                style={{ color: "var(--color-primary)" }}
              >
                Sealed
              </a>
              , private stablecoin payroll on Solana, for the Colosseum Crypto
              World&apos;s Fair.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-7">
              <a
                id="btn-github"
                href="https://github.com/codebird-n4vnt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold text-white bg-[var(--color-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-secondary)]"
                style={{
                  fontFamily: "var(--font-display)",
                  boxShadow: "0 4px 14px rgba(15,23,42,0.15)",
                }}
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                id="btn-linkedin"
                href="https://www.linkedin.com/in/navneet-sahu-b33009317"
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
                style={{ fontFamily: "var(--font-display)" }}
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                id="btn-email"
                href="mailto:sahunavneet871@gmail.com"
                className={secondaryButton}
                style={{ fontFamily: "var(--font-display)" }}
              >
                <EmailIcon /> Email
              </a>
            </div>

            {/* Social chips */}
            <div className="flex flex-wrap gap-3">
              {socialChips.map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.06em] border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "var(--color-surface)",
                    borderColor: "var(--color-outline-var)",
                    color: "var(--color-on-surface-var)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <span style={{ color: "var(--color-secondary)" }}>{icon}</span>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Profile Image */}
          <div className="order-1 lg:order-2 flex justify-start lg:justify-end">
            <div
              className="relative w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px] rounded-[1.5rem] overflow-hidden"
              style={{ boxShadow: "0 20px 48px rgba(0,0,0,0.14)" }}
            >
              <Image
                src="/profile.jpg"
                alt="Navneet Sahu"
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 160px"
                className="object-cover object-[50%_20%]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Inline SVG icons ── */
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
