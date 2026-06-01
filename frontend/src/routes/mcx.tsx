import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Sparkline } from "@/components/common/Sparkline";
import { TrendDelta } from "@/components/common/TrendDelta";
import { commodities, commoditySeries } from "@/lib/mock/mcx";
import { inr } from "@/lib/format";

export const Route = createFileRoute("/mcx")({
  head: () => ({ meta: [{ title: "MCX Commodities · Fingenie" }] }),
  component: MCX,
});

function MCX() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="MCX" title="Commodity Markets" />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {commodities.map((c) => (
            <Card key={c.symbol} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{c.name}</p>
                  <p className="mt-1 font-mono text-2xl font-bold">{inr(c.price,{decimals:0})}<span className="ml-1 text-xs text-muted-foreground">{c.unit}</span></p>
                  <TrendDelta value={c.change} className="mt-1" />
                </div>
                <div className="rounded border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 px-2 py-1 text-right">
                  <p className="text-[9px] uppercase tracking-widest text-[color:var(--gold)]">AI Target</p>
                  <p className="font-mono text-sm">{inr(c.forecast,{decimals:0})}</p>
                </div>
              </div>
              <div className="mt-4"><Sparkline data={commoditySeries(c.price).map(p=>p.v)} width={400} height={70} className="w-full" /></div>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[11px]">
                <span className="text-muted-foreground">Volatility σ</span>
                <span className="font-mono">{c.volatility}%</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}