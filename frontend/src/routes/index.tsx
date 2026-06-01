import { createFileRoute } from "@tanstack/react-router";
import { LandingNav } from "@/components/landing/LandingNav";
import { TickerStrip } from "@/components/landing/TickerStrip";
import { Hero } from "@/components/landing/Hero";
import { AICopilotBand } from "@/components/landing/AICopilotBand";
import { FeatureBento } from "@/components/landing/FeatureBento";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fingenie — Your AI Financial Copilot for India" },
      { name: "description", content: "AI-native wealth management for Indian investors. Portfolio, NPS, MCX, forex and goal planning in one premium console." },
      { property: "og:title", content: "Fingenie — AI Financial Copilot" },
      { property: "og:description", content: "AI-native wealth management for Indian investors." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TickerStrip />
      <LandingNav />
      <Hero />
      <AICopilotBand />
      <FeatureBento />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
