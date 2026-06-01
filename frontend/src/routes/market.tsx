import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { KpiCard } from "@/components/common/KpiCard";
import { TrendDelta } from "@/components/common/TrendDelta";
import { Card } from "@/components/ui/card";
import { inr, pct } from "@/lib/format";
import { indices, gainers, losers, mostActive, sectorHeatmap, fearGreed, globalMarkets, economicEvents, trending } from "@/lib/mock/market";

export const Route = createFileRoute("/market")({
  head: () => ({ meta: [{ title: "Market Intelligence · Fingenie" }] }),
  component: Market,
});

function Market() {
  return (
    <AppShell>
      <div className="space-y-8">
        <SectionHeader eyebrow="Market Intelligence" title="Live Indian & Global Markets" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {indices.map((i) => (
            <KpiCard key={i.name} label={i.name} value={i.value.toLocaleString("en-IN")} delta={i.change} />
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <Card className="p-5">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-[color:var(--success)]">Top Gainers</p>
            <ul className="space-y-2.5">{gainers.map((g)=>(
              <li key={g.symbol} className="flex justify-between text-sm">
                <span>{g.symbol}</span>
                <span className="flex items-center gap-3 font-mono text-xs"><span>{inr(g.price,{decimals:1})}</span><TrendDelta value={g.change} /></span>
              </li>))}</ul>
          </Card>
          <Card className="p-5">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-[color:var(--danger)]">Top Losers</p>
            <ul className="space-y-2.5">{losers.map((g)=>(
              <li key={g.symbol} className="flex justify-between text-sm">
                <span>{g.symbol}</span>
                <span className="flex items-center gap-3 font-mono text-xs"><span>{inr(g.price,{decimals:1})}</span><TrendDelta value={g.change} /></span>
              </li>))}</ul>
          </Card>
          <Card className="p-5">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Most Active</p>
            <ul className="space-y-2.5">{mostActive.map((g)=>(
              <li key={g.symbol} className="flex justify-between text-sm">
                <span>{g.symbol}</span>
                <span className="font-mono text-xs text-muted-foreground">{g.volume}</span>
              </li>))}</ul>
          </Card>
        </div>

        <Card className="p-6">
          <p className="mb-4 text-[11px] uppercase tracking-widest text-muted-foreground">Sector Heatmap</p>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
            {sectorHeatmap.map((s) => (
              <div key={s.name} className="rounded-lg p-4" style={{
                background: `color-mix(in oklab, ${s.change >= 0 ? "var(--success)" : "var(--danger)"} ${Math.min(Math.abs(s.change) * 22, 65)}%, transparent)`,
              }}>
                <p className="text-xs font-semibold">{s.name}</p>
                <p className="font-mono text-sm">{pct(s.change)}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-3 lg:grid-cols-3">
          <Card className="p-5 lg:col-span-2">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Global Markets</p>
            <table className="w-full text-sm">
              <tbody>{globalMarkets.map((g) => (
                <tr key={g.name} className="border-b border-border last:border-0">
                  <td className="py-2.5">{g.name}</td>
                  <td className="py-2.5 text-right font-mono text-xs">{g.value}</td>
                  <td className="py-2.5 pl-4 text-right"><TrendDelta value={g.chg} /></td>
                </tr>))}</tbody>
            </table>
          </Card>
          <Card className="p-5">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Fear & Greed</p>
            <p className="font-mono text-4xl font-bold text-[color:var(--emerald-brand)]">{fearGreed}<span className="text-base text-muted-foreground">/100</span></p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-gradient-to-r from-[color:var(--danger)] via-[color:var(--gold)] to-[color:var(--success)]" style={{ width: `${fearGreed}%` }} /></div>
            <p className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">Trending</p>
            <div className="mt-2 flex flex-wrap gap-1.5">{trending.map((t)=>(<span key={t} className="rounded border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px]">{t}</span>))}</div>
          </Card>
        </div>

        <Card className="p-5">
          <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Economic Calendar · Today</p>
          <ul className="divide-y divide-border">{economicEvents.map((e,i)=>(
            <li key={i} className="flex items-center gap-4 py-3 text-sm">
              <span className="font-mono text-xs text-muted-foreground">{e.time}</span>
              <span className="flex-1">{e.event}</span>
              <span className={`rounded px-2 py-0.5 text-[10px] uppercase ${e.impact==="high"?"bg-[color:var(--danger)]/15 text-[color:var(--danger)]":"bg-[color:var(--gold)]/15 text-[color:var(--gold)]"}`}>{e.impact}</span>
            </li>))}</ul>
        </Card>
      </div>
    </AppShell>
  );
}