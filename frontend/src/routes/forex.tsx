import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Sparkline } from "@/components/common/Sparkline";
import { TrendDelta } from "@/components/common/TrendDelta";
import { currencies, fxSeries, fxForecast, fxVolatility } from "@/lib/mock/forex";

export const Route = createFileRoute("/forex")({
  head: () => ({ meta: [{ title: "Forex Analytics · Fingenie" }] }),
  component: Forex,
});

function Forex() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Forex Analytics" title="Currency Markets" />
        <Card className="p-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">USD/INR</p>
              <p className="font-mono text-4xl font-bold">{currencies[0].rate.toFixed(2)}</p>
              <TrendDelta value={currencies[0].change} className="mt-1" />
            </div>
            <div className="rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-3 text-right">
              <p className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">AI Forecast · {fxForecast.horizon}</p>
              <p className="font-mono text-lg font-bold">{fxForecast.target.toFixed(2)}</p>
              <p className="text-[10px] text-muted-foreground">{fxForecast.confidence}% confidence · σ {fxVolatility}</p>
            </div>
          </div>
          <div className="mt-6"><Sparkline data={fxSeries(83.1).map(p=>p.v)} width={1200} height={240} className="w-full" /></div>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {currencies.map((c) => (
            <Card key={c.pair} className="p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.pair}</p>
              <p className="mt-1 font-mono text-2xl font-bold">{c.rate.toFixed(2)}</p>
              <TrendDelta value={c.change} className="mt-1" />
              <div className="mt-3"><Sparkline data={fxSeries(c.rate).map(p=>p.v)} width={280} height={60} className="w-full" /></div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}