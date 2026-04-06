import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { Positioning } from "@/components/sections/Positioning";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ForWho } from "@/components/sections/ForWho";
import { MarketContext } from "@/components/sections/MarketContext";
import { Principles } from "@/components/sections/Principles";
import { Manifesto } from "@/components/sections/Manifesto";
import { CTA } from "@/components/sections/CTA";

export function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <Positioning />
      <HowItWorks />
      <ForWho />
      <MarketContext />
      <Principles />
      <Manifesto />
      <CTA />
    </main>
  );
}
