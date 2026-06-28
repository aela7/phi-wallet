import AnimateIn from "../ui/AnimateIn";

const badges = [
  { icon: "⬡", label: "LBMA Certified", sub: "999.9 Pure Gold" },
  { icon: "🏛", label: "Singapore PMEX", sub: "Le Freeport Vault" },
  { icon: "⛓", label: "Blockchain-Recorded", sub: "Immutable Ledger" },
  { icon: "✓", label: "Independently Audited", sub: "Regular Reports" },
  { icon: "☪", label: "Shariah-Compliant", sub: "Certified Halal" },
];

export default function TrustBar() {
  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="container">
        <AnimateIn>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 cursor-default"
                style={{
                  background: "rgba(212,175,55,0.06)",
                  border: "1px solid rgba(212,175,55,0.16)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(212,175,55,0.12)";
                  el.style.borderColor = "rgba(212,175,55,0.30)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(212,175,55,0.06)";
                  el.style.borderColor = "rgba(212,175,55,0.16)";
                }}
              >
                <span className="text-base">{b.icon}</span>
                <div>
                  <span
                    className="text-xs font-medium block leading-none mb-0.5"
                    style={{ color: "var(--gold-400)" }}
                  >
                    {b.label}
                  </span>
                  <span
                    className="text-xs leading-none"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {b.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
