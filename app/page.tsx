import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyGold from "@/components/sections/WhyGold";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <WhyGold />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
