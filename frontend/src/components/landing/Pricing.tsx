import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  { name: "Self-Managed", price: "₹0", period: "forever", featured: false,
    feats: ["Portfolio tracking", "Daily insights", "1 watchlist", "Goal planner (1)"], cta: "Get started" },
  { name: "Pro Intelligence", price: "₹999", period: "/ month", featured: true,
    feats: ["Unlimited AI chat", "Full MCX & Forex analytics", "Tax optimization (NPS/ELSS)", "Real-time risk scoring", "Unlimited goals & watchlists"], cta: "Start 14-day trial" },
  { name: "Wealth Private", price: "₹4,999", period: "/ month", featured: false,
    feats: ["Dedicated analyst", "Family office view", "Custom webhooks", "Estate & will tracker", "Priority support"], cta: "Contact sales" },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--emerald-brand)]">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Transparent. Institutional. Yours.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={cn(
              "relative rounded-2xl border p-8",
              t.featured ? "border-[color:var(--emerald-brand)] bg-[color:var(--emerald-brand)]/5 ring-1 ring-[color:var(--emerald-brand)]/20" : "border-border bg-card",
            )}>
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[color:var(--emerald-brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background">Most popular</span>
              )}
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{t.name}</p>
              <p className="mt-4 font-mono text-4xl font-bold">{t.price}<span className="ml-1 text-sm font-normal text-muted-foreground">{t.period}</span></p>
              <ul className="my-7 space-y-3 text-sm">
                {t.feats.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-foreground/80">
                    <Check className="size-4 text-[color:var(--emerald-brand)]" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className={cn("w-full", t.featured && "bg-[color:var(--emerald-brand)] text-background hover:bg-[color:var(--emerald-brand)]/90")}
                variant={t.featured ? "default" : "outline"}>
                <Link to="/signup">{t.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
