import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phi Wallet — Physical Gold, Made Liquid",
  description: "Buy, sell, and save 999.9 LBMA-certified physical gold from your phone. Stored in world-class vaults, recorded on blockchain, audited independently.",
  keywords: ["gold wallet", "physical gold", "LBMA gold", "buy gold", "gold investment", "digital gold", "wealth preservation"],
  openGraph: {
    title: "Phi Wallet — Physical Gold, Made Liquid",
    description: "Turn your phone into your private gold vault. LBMA-certified, Singapore-vaulted, blockchain-recorded.",
    type: "website",
    url: "https://phiwallet.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phi Wallet — Physical Gold, Made Liquid",
    description: "Turn your phone into your private gold vault.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
