"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimateIn from "../ui/AnimateIn";

const GOLD_BAR_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Flijq6ljdU6c7mp3yCuUlja72b/hf_20260628_151333_aa0fd6d9-6c18-4f85-94b9-2831b2d7d982.png";

const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Flijq6ljdU6c7mp3yCuUlja72b/hf_20260628_151639_e4482e1f-0006-48d2-9b7b-b7dd4489c1bb.mp4";

function useParallax() {
  const scrollY = useRef(0);
  const raf = useRef<number>(0);
  const targets = useRef<Map<string, { el: HTMLElement; speed: number }>>(new Map());

  useEffect(() => {
    const onScroll = () => { scrollY.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });
    const tick = () => {
      targets.current.forEach(({ el, speed }) => {
        el.style.transform = `translateY(${scrollY.current * speed}px)`;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const register = (key: string, el: HTMLElement | null, speed: number) => {
    if (el) targets.current.set(key, { el, speed });
    else targets.current.delete(key);
  };

  return { register };
}

function FloatingBadge({ label, value, icon, style }: { label: string; value: string; icon: string; style?: React.CSSProperties; }) {
  return (
    <div className="absolute flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm hidden md:flex"
      style={{ background: "rgba(26,25,22,0.95)", border: "1px solid rgba(212,175,55,0.25)", backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", animation: "float 4s ease-in-out infinite", ...style }}>
      <span className="text-lg">{icon}</span>
      <div>
        <div className="font-mono text-xs" style={{ color: "var(--gold-400)" }}>{value}</div>
        <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>{label}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { register } = useParallax();
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 1.5 + 0.5, opacity: Math.random() * 0.5 + 0.1 });
    }
    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: "var(--bg-base)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(212,175,55,0.14) 0%, transparent 70%)" }} />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />
      <div className="absolute left-0 right-0 h-px top-1/3 pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)" }} />
      <div className="absolute left-0 right-0 h-px bottom-1/3 pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.06), transparent)" }} />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-16 lg:py-24">
          <div ref={(el) => register("copy", el, -0.03)}>
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-8" style={{ background: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.25)", color: "var(--gold-400)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--gold-400)" }} />
                999.9 LBMA-Certified Physical Gold
              </div>
            </AnimateIn>
            <AnimateIn delay={80}>
              <h1 className="font-display mb-6" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: "1.05", letterSpacing: "-0.02em", color: "var(--text-primary)", fontWeight: 300 }}>
                Gold you own,{" "}
                <span style={{ background: "linear-gradient(135deg, #D4AF37, #F7D870, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundSize: "200% 100%", animation: "shimmer 3s ease-in-out infinite", fontStyle: "italic" }}>control</span><br />
                and understand.
              </h1>
            </AnimateIn>
            <AnimateIn delay={160}>
              <p className="text-lg mb-10 max-w-md" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>For decades, physical gold was out of reach. Too expensive. Too complex. We removed every barrier — so anyone can own, sell, and hold real gold from their phone.</p>
            </AnimateIn>
            <AnimateIn delay={240}>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="https://apps.apple.com/us/app/phi-gold-wallet/id1630948687" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #D4AF37, #F0C14B)", color: "#08080A" }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(212,175,55,0.4)")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.06.04c-.22.13-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.08.29zm-3.19-16.9c.73-.88 1.22-2.1 1.09-3.33-1.05.04-2.32.7-3.07 1.58-.67.78-1.26 2.03-1.1 3.22 1.16.09 2.35-.59 3.08-1.47z"/></svg>
                  App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.phiwallet.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "var(--text-primary)" }} onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(212,175,55,0.3)"; el.style.background = "rgba(212,175,55,0.06)"; }} onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.background = "transparent"; }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.35.2.74.24 1.12.12L15.67 12 3.3.12C2.92 0 2.53.04 2.18.24 1.5.63 1.06 1.38 1.06 2.24v19.52c0 .86.44 1.61 1.12 2zm5.66-14.88L5.9 6.04l10.6 6.12-2.66 2.66zM1.06 2.24zm19.52 9.5L18.22 10.3l-2.96 2.96 2.96 2.96 2.4-1.37c.68-.4 1.12-1.14 1.12-2s-.44-1.61-1.16-2.11z"/></svg>
                  Google Play
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={320}>
              <div className="flex flex-wrap items-center gap-4">
                {["LBMA Certified", "Singapore Vault", "Blockchain-Recorded", "Independently Audited"].map((trust) => (
                  <span key={trust} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-tertiary)" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5 2 6" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {trust}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" ref={(el) => register("goldMedia", el, -0.12)}>
              {HERO_VIDEO_URL && (<video src={HERO_VIDEO_URL} autoPlay loop muted playsInline onCanPlay={() => setVideoReady(true)} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: videoReady ? 0.40 : 0, filter: "saturate(1.3)", transition: "opacity 800ms ease" }} />)}
              <Image src={GOLD_BAR_URL} alt="24-karat gold bar" fill className="object-cover" style={{ opacity: HERO_VIDEO_URL && videoReady ? 0 : 0.38, filter: "blur(0.5px) saturate(1.2)", transition: "opacity 800ms ease" }} priority unoptimized />
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(8,8,10,0.50) 0%, rgba(8,8,10,0.88) 100%)" }} />
            </div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.14) 0%, transparent 70%)" }} />
            <div ref={(el) => register("phone", el, -0.06)} className="relative w-[260px] md:w-[300px]" style={{ animation: "float 5s ease-in-out infinite" }}>
              <div className="relative rounded-[44px] overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid rgba(212,175,55,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.1), inset 0 1px 0 rgba(255,255,255,0.08)", aspectRatio: "9/19" }}>
                <div className="flex items-center justify-between px-6 pt-4 pb-2 text-xs" style={{ color: "var(--text-tertiary)" }}>
                  <span className="font-mono">9:41</span>
                  <div className="w-16 h-4 rounded-full bg-black" />
                  <div className="flex gap-1 items-center"><svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor"><rect x="0" y="3" width="2" height="5" rx="1" /><rect x="3" y="2" width="2" height="6" rx="1" /><rect x="6" y="1" width="2" height="7" rx="1" /><rect x="9" y="0" width="2" height="8" rx="1" /></svg></div>
                </div>
                <div className="px-5 pt-3 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div><p className="text-xs mb-0.5" style={{ color: "var(--text-tertiary)" }}>Good morning, Yasmin</p><p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Your Portfolio</p></div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "linear-gradient(135deg, #D4AF37, #F0C14B)", color: "#08080A" }}>Y</div>
                  </div>
                  <div className="rounded-2xl p-4 mb-4" style={{ background: "linear-gradient(135deg, #1A1916 0%, #23211C 100%)", border: "1px solid rgba(212,175,55,0.2)" }}>
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>Total Gold Holdings</p>
                    <p className="font-mono text-2xl font-medium mb-0.5" style={{ color: "var(--gold-400)" }}>5.34g</p>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>≈ $346.82 USD</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs" style={{ color: "#4ADE80" }}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2L8 7H2L5 2Z" fill="currentColor" /></svg>+2.4% this week</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[{ label: "Buy", icon: "↓" }, { label: "Sell", icon: "↑" }, { label: "Send", icon: "→" }].map(({ label, icon }) => (
                      <button key={label} className="flex flex-col items-center gap-1 py-2.5 rounded-xl text-xs font-medium" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)", color: "var(--gold-400)" }}><span className="text-sm">{icon}</span>{label}</button>
                    ))}
                  </div>
                  <div><p className="text-xs mb-2" style={{ color: "var(--text-tertiary)" }}>Recent</p>
                    {[{ label: "Bought Gold", amount: "+0.5g", date: "Today", color: "#4ADE80" }, { label: "Gold Price ↑", amount: "+$12.40", date: "Yesterday", color: "#4ADE80" }, { label: "Storage Fee", amount: "-$0.02", date: "Jul 1", color: "var(--text-secondary)" }].map((tx, i) => (
                      <div key={i} className="flex items-center justify-between py-2"><div><p className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>{tx.label}</p><p className="text-xs" style={{ color: "var(--text-tertiary)" }}>{tx.date}</p></div><span className="font-mono text-xs" style={{ color: tx.color }}>{tx.amount}</span></div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-around py-4 pb-6" style={{ background: "rgba(8,8,10,0.9)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {["▦", "◎", "⊞", "◈"].map((icon, i) => (<button key={i} className="text-sm" style={{ color: i === 0 ? "var(--gold-400)" : "var(--text-tertiary)" }}>{icon}</button>))}
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 rounded-b-2xl" style={{ background: "#08080A" }} />
              </div>
            </div>
            <FloatingBadge label="Today's rate" value="$64,820 / kg" icon="📈" style={{ top: "15%", left: "-8%", animationDelay: "0s" }} />
            <FloatingBadge label="Gold purity" value="999.9 Fine" icon="✦" style={{ bottom: "25%", left: "-12%", animationDelay: "1.5s" }} />
            <FloatingBadge label="Vault location" value="Singapore" icon="🏛" style={{ top: "30%", right: "-8%", animationDelay: "0.8s" }} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--bg-base))" }} />
    </section>
  );
}
