"use client";
import { useState } from "react";
import AnimateIn from "../ui/AnimateIn";

const faqs = [
  {
    q: "How do I know my gold is really mine?",
    a: "Your gold is 100% yours, physically available. We only sell what we physically hold in our vaults. Each purchase includes a detailed receipt with quantity, purity, and a unique transaction order. All transactions are recorded on an immutable ledger and confirmed by independent audits.",
  },
  {
    q: "Where is my gold stored?",
    a: "Your gold is stored at Le Freeport in Singapore — one of the world's most secure precious-metals facilities. It's kept in a custodial account at the Singapore Precious Metals Exchange. All holdings are fully insured and legally protected, separate from any company or institutional assets.",
  },
  {
    q: "What fees should I expect?",
    a: "We charge 5% when buying gold and 3% when selling. Storage is free for your first year, then 0.5% per year on your total holdings (covers vaulting and insurance). No hidden fees — ever.",
  },
  {
    q: "Can I receive my gold physically?",
    a: "Yes. You can request physical delivery for amounts of 100 grams or multiples thereof, up to 1 kg per shipment, directly from the app. Shipping and insurance fees apply.",
  },
  {
    q: "Is Phi Wallet Shariah-compliant?",
    a: "Yes. We have a fatwa explaining our Shariah-compliant model, including the immediate ownership transfer (Taqabud) guaranteed after each transaction. We don't oversell, lend, or leverage your assets.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background: open ? "var(--bg-card)" : "transparent",
        border: `1px solid ${open ? "rgba(212,175,55,0.2)" : "rgba(255,255,255,0.07)"}`,
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5 gap-4">
        <h4
          className="text-sm font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          {q}
        </h4>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: open ? "rgba(212,175,55,0.15)" : "rgba(255,255,255,0.05)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path
              d="M1 1L5 5L9 1"
              stroke={open ? "#D4AF37" : "currentColor"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        style={{
          maxHeight: open ? "300px" : "0px",
          overflow: "hidden",
          transition: "max-height 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <p
          className="px-5 pb-5 text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="label-caps block mb-4" style={{ color: "var(--text-tertiary)" }}>
                FAQ
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
                Honest answers.
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} {...faq} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
