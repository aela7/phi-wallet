"use client";
import { useEffect, useRef, useState } from "react";
import AnimateIn from "../ui/AnimateIn";

const features = [
  {
    icon: "◈",
    label: "Pure Gold",
    title: "999.9 Fine Gold",
    description:
      "Every gram is LBMA-certified 24-karat gold — the same standard used by central banks worldwide. VAT-free in supported markets.",
    metric: "24K",
    metricLabel: "Purity Grade",
  },
  {
    icon: "🏛",
    label: "World-Class Storage",
    title: "Singapore Vault",
    description:
      "Your gold is stored at Le Freeport, Singapore — one of the world's most secure precious-metals facilities, fully insured and legally protected.",
    metric: "Free",
    metricLabel: "Year 1 storage",
  },
  {
    icon: "⛓",
    label: "Full Transparency",
    title: "Blockchain-Verified",
    description:
      "Every transaction is recorded on an immutable ledger. No one can alter your history. No hidden movements. Your proof, always on-chain.",
    metric: "100%",
    metricLabel: "Transparent",
  },
  {
    icon: "⚡",
    label: "Speed",
    title: "Instant Transactions",
    description:
      "Buy or sell in seconds — no jeweler visits, no bank delays. Your gold is always liquid, ready to move when you need it.",
    metric: "<3s",
    metricLabel: "Average time",
  },
  {
    icon: "☾",
    label: "Ethical Finance",
    title: "Shariah-Compliant",
    description:
      "Immediate ownership transfer (Taqabud) after every purchase. We only sell what we physically hold. Certified halal, no speculation.",
    metric: "Fatwa",
    metricLabel: "Certified",
  },
];

/** Scrollytelling: pinned left panel — active index tracks scroll */
function ScrollyFeatures() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const f = features[active];

  return (
    <div ref={sectionRef} className="relative hidden lg:grid grid-cols-2 gap-0 mb-8">
      {/* Sticky left panel */}
      <div className="sticky top-24 self-start h-[520px] p-10 rounded-2xl mr-8 flex flex-col justify-between overflow-hidden"
        style={{ background: "var(--bg-card)", border: "1px solid rgba(212,175,55,0.16)" }}>
        {/* Animated background number */}
        <div
          className="absolute right-6 bottom-4 font-display font-bold select-none pointer-events-none transition-all duration-700"
          style={{ fontSize: "10rem", lineHeight: 1, color: "rgba(212,175,55,0.05)" }}
        >
          {String(active + 1).padStart(2, "0")}
        </div>

        <div>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 transition-all duration-500"
            style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.25)" }}
          >
            {f.icon}
          </div>
          <span className="label-caps block mb-3" style={{ color: "var(--text-tertiary)" }}>
            {f.label}
          </span>
          <h3
            className="font-display text-4xl font-semibold mb-4 transition-all duration-500"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            {f.title}
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {f.description}
          </p>
        </div>

        <div>
          <div className="font-mono text-4xl font-medium mb-1" style={{ color: "var(--gold-400)" }}>
            {f.metric}
          </div>
          <div className="text-sm" style={{ color: "var(--text-tertiary)" }}>{f.metricLabel}</div>

          {/* Progress dots */}
          <div className="flex gap-2 mt-6">
            {features.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-400"
                style={{
                  width: i === active ? "24px" : "6px",
                  height: "6px",
                  background: i === active ? "var(--gold-400)" : "rgba(212,175,55,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right scroll column */}
      <div className="flex flex-col gap-6 py-2">
        {features.map((feat, i) => (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="p-7 rounded-2xl transition-all duration-500"
            style={{
              background: i === active ? "var(--bg-subtle)" : "var(--bg-card)",
              border: `1px solid ${i === active ? "rgba(212,175,55,0.28)" : "rgba(212,175,55,0.10)"}`,
              opacity: i === active ? 1 : 0.55,
              transform: i === active ? "translateX(0)" : "translateX(4px)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-lg">{feat.icon}</span>
              <span className="label-caps" style={{ color: "var(--text-tertiary)" }}>{feat.label}</span>
            </div>
            <h4 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              {feat.title}
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 relative"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span
              className="label-caps block mb-4"
              style={{ color: "var(--text-tertiary)" }}
            >
              Why Phi Wallet
            </span>
            <h2
              className="font-display mb-5"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              Built on foundations{" "}
              <em
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F7D870)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                that last.
              </em>
            </h2>
            <p
              className="max-w-md mx-auto text-base"
              style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
            >
              Gold has preserved wealth for 5,000 years. We built the
              infrastructure to make it accessible for the next 5,000.
            </p>
          </div>
        </AnimateIn>

        {/* Pinned scrollytelling — desktop only */}
        <ScrollyFeatures />

        {/* Mobile/tablet fallback grid */}
        <div className="grid md:grid-cols-2 lg:hidden gap-5">
          {features.map((feature, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div
                className="group relative p-7 rounded-2xl h-full cursor-default transition-all duration-500"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(212,175,55,0.14)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow =
                    "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.24)";
                  el.style.borderColor = "rgba(212,175,55,0.28)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "rgba(212,175,55,0.14)";
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{
                      background: "rgba(212,175,55,0.10)",
                      border: "1px solid rgba(212,175,55,0.20)",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div className="text-right">
                    <div
                      className="font-mono text-xl font-medium"
                      style={{ color: "var(--gold-400)" }}
                    >
                      {feature.metric}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {feature.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Label */}
                <span
                  className="label-caps block mb-2"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {feature.label}
                </span>

                {/* Title */}
                <h3
                  className="font-display text-xl font-semibold mb-3"
                  style={{ color: "var(--text-primary)", lineHeight: "1.2" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feature.description}
                </p>

                {/* Hover accent */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
                  }}
                />
              </div>
            </AnimateIn>
          ))}

          {/* Wide "coming soon" card */}
          <AnimateIn delay={features.length * 80} className="md:col-span-2 lg:col-span-1">
            <div
              className="relative p-7 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.03) 100%)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 80% 80%, rgba(212,175,55,0.08) 0%, transparent 60%)",
                }}
              />
              <span
                className="label-caps block mb-3"
                style={{ color: "var(--gold-600)" }}
              >
                Coming Soon
              </span>
              <h3
                className="font-display text-xl font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Spend, Send & Gift Gold
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Pay with your gold balance, send grams to friends, or gift
                elegantly. Gold as money — the way it was always meant to be.
              </p>
              <div className="mt-4 flex gap-2">
                {["Payments", "P2P Transfers", "Gold Gifting"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs"
                    style={{
                      background: "rgba(212,175,55,0.10)",
                      border: "1px solid rgba(212,175,55,0.20)",
                      color: "var(--gold-400)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
