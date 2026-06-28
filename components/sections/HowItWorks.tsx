"use client";
import AnimateIn from "../ui/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Download the App",
    description:
      "Available on iOS and Android. Takes 30 seconds to get started. No account needed to browse.",
    note: "App Store & Google Play",
  },
  {
    number: "02",
    title: "Verify Your Account",
    description:
      "A quick KYC check — your ID and a few details. Usually approved in minutes. Your gold belongs to no one but you.",
    note: "Takes ~3 minutes",
  },
  {
    number: "03",
    title: "Add Funds & Buy Gold",
    description:
      "Top up via SEPA or SWIFT. The moment funds arrive, buy gold instantly. Your first gram is three steps away.",
    note: "From any amount",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute right-0 top-1/4 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="label-caps block mb-4" style={{ color: "var(--text-tertiary)" }}>
              Get Started
            </span>
            <h2
              className="font-display mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                fontWeight: 600,
              }}
            >
              Your first gram,{" "}
              <em
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F7D870)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                three steps away.
              </em>
            </h2>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div
            className="absolute top-8 left-[16.66%] right-[16.66%] h-px hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.3) 20%, rgba(212,175,55,0.3) 80%, transparent)",
            }}
          />

          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div className="relative flex flex-col items-center text-center md:items-start md:text-left p-8 rounded-2xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {/* Step number */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <span
                    className="font-mono font-medium text-sm"
                    style={{ color: "var(--gold-400)" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="font-display text-xl font-semibold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
                <span
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(212,175,55,0.08)",
                    border: "1px solid rgba(212,175,55,0.15)",
                    color: "var(--text-tertiary)",
                  }}
                >
                  {step.note}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA below steps */}
        <AnimateIn delay={400}>
          <div className="text-center mt-12">
            <a
              href="https://apps.apple.com/us/app/phi-gold-wallet/id1630948687"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0C14B)",
                color: "#08080A",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 28px rgba(212,175,55,0.4)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = "none")
              }
            >
              Start Owning Gold Today
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p className="mt-3 text-xs" style={{ color: "var(--text-tertiary)" }}>
              Free to download · No minimum purchase
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
