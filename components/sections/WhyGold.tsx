import AnimateIn from "../ui/AnimateIn";

const stats = [
  { number: "5,000+", label: "Years as a store of value", note: "Longer than any currency" },
  { number: "0.5%", label: "Annual storage fee (year 2+)", note: "Includes full insurance" },
  { number: "5%", label: "Buy fee, 3% sell fee", note: "No hidden charges" },
  { number: "100g", label: "Minimum physical delivery", note: "Real gold, your door" },
];

export default function WhyGold() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — editorial text */}
          <div>
            <AnimateIn>
              <span className="label-caps block mb-4" style={{ color: "var(--text-tertiary)" }}>
                The Case for Gold
              </span>
            </AnimateIn>
            <AnimateIn delay={80}>
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  fontWeight: 300,
                  lineHeight: "1.15",
                }}
              >
                Real wealth isn't built{" "}
                <br />
                on{" "}
                <em
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #F7D870)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontStyle: "italic",
                  }}
                >
                  speculation.
                </em>
              </h2>
            </AnimateIn>
            <AnimateIn delay={160}>
              <p
                className="text-base mb-6 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Currencies are printed. Markets are manipulated. Gold is dug
                from the earth — there's only so much of it, and it has been
                recognized as valuable by every civilization in history.
              </p>
            </AnimateIn>
            <AnimateIn delay={240}>
              <p
                className="text-base mb-8 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Phi Wallet doesn't sell paper gold, borrowed gold, or
                fractional-reserve promises. Every gram you buy is physically
                held in your name, in a vault, right now. Not leveraged. Not
                lent out. Yours.
              </p>
            </AnimateIn>
            <AnimateIn delay={320}>
              <div className="flex items-center gap-4">
                <a
                  href="https://phiwallet.com/en/audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium flex items-center gap-2 transition-colors duration-200"
                  style={{ color: "var(--gold-400)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--gold-300)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--gold-400)")
                  }
                >
                  View latest audit report
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div
                  className="p-6 rounded-2xl group cursor-default transition-all duration-400"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid rgba(212,175,55,0.12)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(212,175,55,0.28)";
                    el.style.background = "var(--bg-subtle)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(212,175,55,0.12)";
                    el.style.background = "var(--bg-card)";
                  }}
                >
                  <div
                    className="font-mono text-2xl md:text-3xl font-medium mb-2"
                    style={{ color: "var(--gold-400)" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-sm font-medium mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {stat.note}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
