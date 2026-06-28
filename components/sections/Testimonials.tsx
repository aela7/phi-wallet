import AnimateIn from "../ui/AnimateIn";

const testimonials = [
  {
    quote:
      "I have been using the app for several weeks and couldn't be happier with the experience. The interface is clean, buying gold is instant, and knowing it's physically in Singapore gives me peace of mind.",
    author: "Yasmin S.",
    location: "Malaysia",
    rating: 5,
    avatar: "Y",
  },
  {
    quote:
      "What convinced me was the audit report. I can see exactly how much gold they hold. No smoke and mirrors. This is how financial products should work.",
    author: "Mohammed A.",
    location: "Oman",
    rating: 5,
    avatar: "M",
  },
  {
    quote:
      "As someone looking for halal investment options, Phi Wallet checked every box. The fatwa certification, the immediate ownership transfer — it's done properly.",
    author: "Fatimah R.",
    location: "Canada",
    rating: 5,
    avatar: "F",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="label-caps block mb-4" style={{ color: "var(--text-tertiary)" }}>
              What Our Users Say
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                fontWeight: 600,
              }}
            >
              Real stories. Real gold.
            </h2>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <div
                className="p-7 rounded-2xl h-full flex flex-col gap-5"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(212,175,55,0.12)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} width="12" height="12" viewBox="0 0 12 12" fill="#D4AF37">
                      <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.1 3.22 9.55l.53-3.1L1.5 4.25l3.1-.45L6 1z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.1))",
                      border: "1px solid rgba(212,175,55,0.3)",
                      color: "var(--gold-400)",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {t.author}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Trustpilot link */}
        <AnimateIn delay={350}>
          <div className="text-center mt-10">
            <a
              href="https://www.trustpilot.com/review/phiwallet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")
              }
            >
              Read all reviews on Trustpilot
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
