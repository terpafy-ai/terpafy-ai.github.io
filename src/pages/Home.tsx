import { Hero } from "@/components/sections/Hero";
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
      <ChatCTA />
      <BigChat />
      <Problem />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTA />
    </main>
  );
}
