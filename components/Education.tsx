export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
        >
          # Education
        </p>
        <h2
          className="font-bold tracking-[-0.02em] mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 40px)",
            color: "var(--color-primary)",
          }}
        >
          Academic Background
        </h2>

        {/* Card */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start gap-6 rounded-[1.5rem] p-7 sm:p-10 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "var(--color-primary-card)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
        >
          <div>
            <p
              className="text-[22px] font-bold mb-1.5"
              style={{ fontFamily: "var(--font-display)", color: "#fff" }}
            >
              Indian Institute of Technology (ISM), Dhanbad
            </p>
            <p className="text-[15px] mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              Bachelor of Technology &middot; Chemical Engineering
            </p>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.06em]"
              style={{
                fontFamily: "var(--font-mono)",
                background: "rgba(113,42,226,0.3)",
                border: "1px solid rgba(138,76,252,0.4)",
                color: "#c4b5fd",
              }}
            >
              Adm. No. 24JE0562
            </span>
          </div>
          <div className="sm:text-right flex-shrink-0">
            <p
              className="text-[13px] font-semibold mb-1"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.7)" }}
            >
              Expected May 2028
            </p>
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Dhanbad, Jharkhand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
