import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";

export function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTA />
    </main>
  );
}
