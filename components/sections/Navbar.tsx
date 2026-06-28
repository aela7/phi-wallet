"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8,8,10,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0C14B)",
                color: "#08080A",
                boxShadow: "0 0 16px rgba(212,175,55,0.3)",
              }}
            >
              Φ
            </div>
            <span
              className="font-display text-xl font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Phi Wallet
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {[
              ["About", "#about"],
              ["Features", "#features"],
              ["How It Works", "#how"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-[#F0C14B]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://apps.apple.com/us/app/phi-gold-wallet/id1630948687"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0C14B)",
                color: "#08080A",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.boxShadow =
                  "0 0 24px rgba(212,175,55,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.boxShadow = "none";
              }}
            >
              Download App
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span
                className="block h-px w-full transition-all duration-300"
                style={{
                  background: menuOpen ? "#F0C14B" : "currentColor",
                  transform: menuOpen
                    ? "translateY(4px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="block h-px w-full transition-all duration-300"
                style={{
                  background: menuOpen ? "#F0C14B" : "currentColor",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px w-full transition-all duration-300"
                style={{
                  background: menuOpen ? "#F0C14B" : "currentColor",
                  transform: menuOpen
                    ? "translateY(-4px) rotate(-45deg)"
                    : "none",
                }}
              />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-500"
          style={{
            maxHeight: menuOpen ? "300px" : "0px",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <div
            className="pb-6 pt-2 flex flex-col gap-4"
            style={{ borderTop: "1px solid var(--border-subtle)" }}
          >
            {[
              ["About", "#about"],
              ["Features", "#features"],
              ["How It Works", "#how"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-base font-medium py-1"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="https://apps.apple.com/us/app/phi-gold-wallet/id1630948687"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-3 rounded-xl text-center mt-2"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0C14B)",
                color: "#08080A",
              }}
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
