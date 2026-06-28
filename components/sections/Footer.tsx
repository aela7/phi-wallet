"use client";
export default function Footer() {
  return (
    <footer className="py-12 relative" style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: "linear-gradient(135deg, #D4AF37, #F0C14B)", color: "#08080A" }}>Φ</div>
              <span className="font-display text-base font-semibold" style={{ color: "var(--text-primary)" }}>Phi Wallet</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed mb-5" style={{ color: "var(--text-tertiary)" }}>Physical gold ownership, built for the way you live today. LBMA-certified. Singapore-vaulted. Blockchain-recorded.</p>
            <div className="flex gap-3">{[{href:"https://www.facebook.com/PhiWallet",label:"Facebook",icon:"f"},{href:"https://twitter.com/PhiWallet",label:"Twitter",icon:"X"},{href:"https://www.linkedin.com/company/phiwallet",label:"LinkedIn",icon:"in"},{href:"https://www.instagram.com/phi.wallet",label:"Instagram",icon:"◎"}].map(s => (<a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w8 h-8 rounded-lg flex items-center justify-center text-xs transition-all duration-200" style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)", color: "var(--text-tertiary)" }} onMouseEnter={(e)=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(212,175,55,0.25)";el.style.color="var(--gold-400)";}} onMouseLeave={(e)=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="var(--border-subtle)";el.style.color="var(--text-tertiary)";}}>{s.icon}</a>))}</div>
          </div>
          <div><p className="label-caps mb-4" style={{ color: "var(--text-tertiary)" }}>Company</p><ul className="flex flex-col gap-3">{[["About","https://phiwallet.com/en/about"],["Blog","https://phiwallet.com/en/blog"],["Audit Report","https://phiwallet.com/en/audit"],["Contact","https://phiwallet.com/en/contact"]].map(([label,href]) => (<li key={label}><a href={href} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200 hover:text-[#F0C14B]" style={{ color: "var(--text-secondary)" }}>{label}</a></li>))}</ul></div>
          <div><p className="label-caps mb-4" style={{ color: "var(--text-tertiary)" }}>Legal</p><ul className="flex flex-col gap-3">{[["Terms of Use","https://phiwallet.com/en/terms"],["Privacy Policy","https://phiwallet.com/en/privacy"],["Cookies Policy","https://phiwallet.com/en/cookies"],["FAQ","https://intercom.help/phiwallet/en"]].map(([label,href]) => (<li key={label}><a href={href} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200 hover:text-[#F0C14B]" style={{ color: "var(--text-secondary)" }}>{label}</a></li>))}</ul></div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>© 2021–2026 Phi Wallet Unipersonal LDA · NIPC: 516547186 · Gold dealer license: T7164</p>
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>🇵🇹 Portugal · 🇸🇬 Singapore · 🇨🇦 Canada · 🇴🇲 Oman · 🇲🇾 Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
