import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { KpiCard } from "@/components/common/KpiCard";
import { TrendDelta } from "@/components/common/TrendDelta";
import { Sparkline } from "@/components/common/Sparkline";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { inr } from "@/lib/format";
import {
  holdings, totalCurrent, totalInvested, totalReturns, totalReturnsPct,
  todayPnL, allocation, sectorAllocation, portfolioSeries, monthlyReturns,
} from "@/lib/mock/portfolio";
import { Download, Filter } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [{ title: "Portfolio · Fingenie" }] }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <SectionHeader eyebrow="Portfolio" title="Holdings & Performance"
          action={<div className="flex gap-2"><Button variant="outline" size="sm"><Filter className="mr-1 size-3" />Filter</Button><Button size="sm"><Download className="mr-1 size-3" />Export</Button></div>} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <KpiCard label="Current Value" value={inr(totalCurrent, { compact: true })} delta={totalReturnsPct} />
          <KpiCard label="Invested" value={inr(totalInvested, { compact: true })} accent="blue" />
          <KpiCard label="Total P&L" value={inr(totalReturns, { compact: true })} delta={totalReturnsPct} accent="gold" />
          <KpiCard label="Today's Change" value={inr(todayPnL, { decimals: 0 })} delta={0.42} />
        </div>

        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold">Portfolio Value · 90 days</p>
            <div className="flex gap-1">{["1D","1W","1M","3M","1Y","ALL"].map((p,i)=>(
              <button key={p} className={`rounded-md px-2 py-1 text-[10px] ${i===3?"bg-[color:var(--emerald-brand)]/15 text-[color:var(--emerald-brand)]":"text-muted-foreground"}`}>{p}</button>
            ))}</div>
          </div>
          <Sparkline data={portfolioSeries.map(p=>p.value)} width={1200} height={240} className="w-full" />
        </Card>

        <Card className="overflow-hidden">
          <div className="border-b border-border p-5"><p className="text-sm font-semibold">Holdings ({holdings.length})</p></div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/30 text-[10px] uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-4 py-2.5 text-left">Symbol</th>
                  <th className="px-4 py-2.5 text-left">Sector</th>
                  <th className="px-4 py-2.5 text-right">Qty</th>
                  <th className="px-4 py-2.5 text-right">Avg</th>
                  <th className="px-4 py-2.5 text-right">LTP</th>
                  <th className="px-4 py-2.5 text-right">Invested</th>
                  <th className="px-4 py-2.5 text-right">Current</th>
                  <th className="px-4 py-2.5 text-right">P&L</th>
                  <th className="px-4 py-2.5 text-right">%</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((h) => {
                  const inv = h.qty * h.avg, cur = h.qty * h.ltp, pnl = cur - inv, p = (pnl / inv) * 100;
                  return (
                    <tr key={h.symbol} className="border-t border-border hover:bg-muted/30">
                      <td className="px-4 py-3"><p className="font-medium">{h.symbol}</p><p className="text-[10px] text-muted-foreground">{h.name}</p></td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">{h.sector}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs">{h.qty}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs">{inr(h.avg,{decimals:1})}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs">{inr(h.ltp,{decimals:1})}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs">{inr(inv,{compact:true})}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs">{inr(cur,{compact:true})}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs">{inr(pnl,{decimals:0})}</td>
                      <td className="px-4 py-3 text-right"><TrendDelta value={p} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid gap-3 md:grid-cols-3">
          <Card className="p-5">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Asset Mix</p>
            {allocation.map((a) => (
              <div key={a.name} className="mb-2.5">
                <div className="flex justify-between text-xs"><span>{a.name}</span><span className="font-mono">{a.value}%</span></div>
                <div className="mt-1 h-1.5 overflow-hidden rounded bg-muted"><div className="h-full" style={{ width: `${a.value}%`, background: a.fill }} /></div>
              </div>
            ))}
          </Card>
          <Card className="p-5">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Sector Exposure</p>
            {sectorAllocation.map((s) => (
              <div key={s.name} className="mb-2.5">
                <div className="flex justify-between text-xs"><span>{s.name}</span><span className="font-mono">{s.value}%</span></div>
                <div className="mt-1 h-1.5 overflow-hidden rounded bg-muted"><div className="h-full bg-[color:var(--emerald-brand)]/70" style={{ width: `${s.value*3.5}%`, maxWidth:"100%" }} /></div>
              </div>
            ))}
          </Card>
          <Card className="p-5">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Monthly Returns</p>
            <div className="grid grid-cols-6 gap-1.5">
              {monthlyReturns.map((m) => (
                <div key={m.m} className="text-center">
                  <div className="mx-auto h-12 w-full rounded" style={{ background: `color-mix(in oklab, ${m.r>=0?"var(--success)":"var(--danger)"} ${Math.min(Math.abs(m.r)*22,80)}%, transparent)` }} />
                  <p className="mt-1 text-[9px] text-muted-foreground">{m.m}</p>
                  <p className="font-mono text-[10px]">{m.r}%</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}