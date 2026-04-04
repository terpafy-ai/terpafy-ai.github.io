import { Hero } from "@/components/sections/Hero";
import { EcosystemBanner } from "@/components/common/EcosystemBanner";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { ChatCTA } from "@/components/sections/ChatCTA";
import { BigChat } from "@/components/sections/BigChat";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";

export function Home() {
  return (
    <main>
      <Hero />
      <EcosystemBanner />
      <Problem />
      <Features />
      <ChatCTA />
      <BigChat />
      <HowItWorks />
      <Benefits />
      <CTA />
    </main>
  );
}
