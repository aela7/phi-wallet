import AnimateIn from "../ui/AnimateIn";

export default function CTA() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Decorative lines */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
        }}
      />
      <div
        className="absolute left-0 right-0 bottom-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)",
        }}
      />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateIn>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-8"
              style={{
                background: "rgba(212,175,55,0.10)",
                border: "1px solid rgba(212,175,55,0.25)",
                color: "var(--gold-400)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Available worldwide
            </div>
          </AnimateIn>

          <AnimateIn delay={80}>
            <h2
              className="font-display mb-5"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                fontWeight: 300,
                lineHeight: "1.1",
              }}
            >
              Gold you own,
              <br />
              <em
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F7D870, #D4AF37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                control and understand.
              </em>
            </h2>
          </AnimateIn>

          <AnimateIn delay={160}>
            <p
              className="text-base mb-10"
              style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
            >
              Download the app and own your first gram today.
              <br />
              No minimum. No complexity. Just real gold.
            </p>
          </AnimateIn>

          <AnimateIn delay={240}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="https://apps.apple.com/us/app/phi-gold-wallet/id1630948687"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F0C14B)",
                  color: "#08080A",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 30px rgba(212,175,55,0.45)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow = "none")
                }
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.06.04c-.22.13-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.08.29zm-3.19-16.9c.73-.88 1.22-2.1 1.09-3.33-1.05.04-2.32.7-3.07 1.58-.67.78-1.26 2.03-1.1 3.22 1.16.09 2.35-.59 3.08-1.47z"/>
                </svg>
                Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.phiwallet.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(212,175,55,0.35)";
                  el.style.background = "rgba(212,175,55,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.15)";
                  el.style.background = "transparent";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.35.2.74.24 1.12.12L15.67 12 3.3.12C2.92 0 2.53.04 2.18.24 1.5.63 1.06 1.38 1.06 2.24v19.52c0 .86.44 1.61 1.12 2zm5.66-14.88L5.9 6.04l10.6 6.12-2.66 2.66zM1.06 2.24zm19.52 9.5L18.22 10.3l-2.96 2.96 2.96 2.96 2.4-1.37c.68-.4 1.12-1.14 1.12-2s-.44-1.61-1.16-2.11z"/>
                </svg>
                Download for Android
              </a>
            </div>
          </AnimateIn>

          {/* QR + countries */}
          <AnimateIn delay={320}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* QR placeholder */}
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                <div className="grid grid-cols-4 gap-0.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-sm"
                      style={{
                        background: [0, 1, 2, 4, 6, 7, 8, 10, 12, 14, 15].includes(i)
                          ? "rgba(212,175,55,0.8)"
                          : "transparent",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="text-left">
                <p className="text-xs mb-2" style={{ color: "var(--text-tertiary)" }}>
                  Scan to download
                </p>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Available in 🇵🇹 Portugal · 🇸🇬 Singapore
                  <br />
                  🇨🇦 Canada · 🇴🇲 Oman · 🇲🇾 Malaysia
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
