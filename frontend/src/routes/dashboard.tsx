import { createFileRoute } from "@tanstack/react-router";
import { KpiCard } from "@/components/common/KpiCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ConfidenceBadge } from "@/components/common/ConfidenceBadge";
import { Sparkline } from "@/components/common/Sparkline";
import { TrendDelta } from "@/components/common/TrendDelta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { inr, pct } from "@/lib/format";
import {
  netWorth, totalCurrent, todayPnL, totalReturns, totalReturnsPct, totalInvested,
  cashAvailable, portfolioSeries, allocation, sectorAllocation, holdings,
} from "@/lib/mock/portfolio";
import { insights, aiHealthScore } from "@/lib/mock/ai-insights";
import { gainers, losers, sectorHeatmap, fearGreed, globalMarkets, trending } from "@/lib/mock/market";
import { news } from "@/lib/mock/news";
import { goals, retirement } from "@/lib/mock/goals";
import { currencies } from "@/lib/mock/forex";
import { commodities } from "@/lib/mock/mcx";
import { watchlists } from "@/lib/mock/watchlists";
import { AppShell } from "@/components/app-shell/AppShell";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "AI Wealth Command Center · Fingenie" }] }),
  component: Dashboard,
});

function Dashboard() {
  const series = portfolioSeries.map((p) => p.value);
  return (
    <AppShell>
      <div className="space-y-10">
          {/* Section 1: Overview */}
          <section>
            <SectionHeader eyebrow="Section 1" title="Portfolio Overview" />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
              <KpiCard label="Net Worth" value={inr(netWorth, { compact: true })} delta={2.4} accent="emerald" />
              <KpiCard label="Portfolio Value" value={inr(totalCurrent, { compact: true })} delta={1.2} />
              <KpiCard label="Today's P&L" value={inr(todayPnL, { decimals: 0 })} delta={0.42} accent="gold" />
              <KpiCard label="Total Returns" value={inr(totalReturns, { compact: true })} delta={totalReturnsPct} />
              <KpiCard label="Invested" value={inr(totalInvested, { compact: true })} hint="across 10" accent="blue" />
              <KpiCard label="Cash Available" value={inr(cashAvailable, { compact: true })} hint="settled T+1" accent="muted" />
              <KpiCard label="Goal Progress" value="58%" delta={3.1} accent="emerald" />
              <KpiCard label="Retirement Score" value="72/100" delta={1.4} accent="gold" />
              <KpiCard label="AI Health Score" value={`${aiHealthScore}/100`} delta={2.0} accent="emerald" />
            </div>
          </section>

          {/* Section 2: Performance */}
          <section>
            <SectionHeader eyebrow="Section 2" title="Portfolio Performance" action={<span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">90 days</span>} />
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Portfolio Growth</p>
                  <p className="mt-1 font-mono text-3xl font-bold tabular-nums">{inr(totalCurrent, { compact: true })}</p>
                  <TrendDelta value={totalReturnsPct} className="mt-1" />
                </div>
                <div className="hidden gap-2 md:flex">
                  {["1D","1W","1M","3M","1Y","ALL"].map((p, i) => (
                    <button key={p} className={`rounded-md px-3 py-1 text-xs ${i === 3 ? "bg-[color:var(--emerald-brand)]/15 text-[color:var(--emerald-brand)]" : "text-muted-foreground hover:bg-muted"}`}>{p}</button>
                  ))}
                </div>
              </div>
              <div className="mt-4"><Sparkline data={series} width={1100} height={220} className="w-full" /></div>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <Stat label="CAGR (3Y)" value="14.8%" />
                <Stat label="XIRR" value="16.2%" />
                <Stat label="Sharpe" value="1.42" />
                <Stat label="Max Drawdown" value="-9.4%" />
              </div>
            </Card>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <Card className="p-5">
                <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Asset Allocation</p>
                {allocation.map((a) => (
                  <div key={a.name} className="mb-2">
                    <div className="flex justify-between text-xs"><span>{a.name}</span><span className="font-mono">{a.value}%</span></div>
                    <div className="h-1.5 overflow-hidden rounded bg-muted"><div className="h-full" style={{ width: `${a.value}%`, background: a.fill }} /></div>
                  </div>
                ))}
              </Card>
              <Card className="p-5">
                <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Sector Allocation</p>
                {sectorAllocation.map((s) => (
                  <div key={s.name} className="mb-2">
                    <div className="flex justify-between text-xs"><span>{s.name}</span><span className="font-mono">{s.value}%</span></div>
                    <div className="h-1.5 overflow-hidden rounded bg-muted"><div className="h-full bg-[color:var(--emerald-brand)]/70" style={{ width: `${s.value * 3}%`, maxWidth: "100%" }} /></div>
                  </div>
                ))}
              </Card>
              <Card className="p-5">
                <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Top Holdings</p>
                <ul className="space-y-2 text-sm">
                  {holdings.slice(0, 6).map((h) => (
                    <li key={h.symbol} className="flex items-center justify-between">
                      <div><p className="font-medium">{h.symbol}</p><p className="text-[10px] text-muted-foreground">{h.sector}</p></div>
                      <div className="text-right"><p className="font-mono text-xs">{inr(h.ltp, { decimals: 1 })}</p>
                        <TrendDelta value={((h.ltp - h.avg) / h.avg) * 100} /></div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* Section 3: AI Insights */}
          <section>
            <SectionHeader eyebrow="Section 3" title="AI Financial Insights" action={<ConfidenceBadge value={91} />} />
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {insights.map((i) => (
                <Card key={i.id} className="flex flex-col gap-3 p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[color:var(--emerald-brand)]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--emerald-brand)]">{i.kind}</span>
                    <ConfidenceBadge value={i.confidence} />
                  </div>
                  <h4 className="text-sm font-semibold">{i.title}</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">{i.body}</p>
                  <Button variant="outline" size="sm" className="mt-auto">{i.cta} →</Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 4: Market Intelligence */}
          <section>
            <SectionHeader eyebrow="Section 4" title="Market Intelligence" />
            <div className="grid gap-3 lg:grid-cols-3">
              <Card className="p-5">
                <p className="mb-3 text-[11px] uppercase tracking-widest text-[color:var(--success)]">Top Gainers</p>
                <ul className="space-y-2">{gainers.map((g) => (
                  <li key={g.symbol} className="flex justify-between text-sm">
                    <span>{g.symbol}</span>
                    <span className="flex items-center gap-3 font-mono text-xs"><span>{inr(g.price, { decimals: 1 })}</span><TrendDelta value={g.change} /></span>
                  </li>))}</ul>
              </Card>
              <Card className="p-5">
                <p className="mb-3 text-[11px] uppercase tracking-widest text-[color:var(--danger)]">Top Losers</p>
                <ul className="space-y-2">{losers.map((g) => (
                  <li key={g.symbol} className="flex justify-between text-sm">
                    <span>{g.symbol}</span>
                    <span className="flex items-center gap-3 font-mono text-xs"><span>{inr(g.price, { decimals: 1 })}</span><TrendDelta value={g.change} /></span>
                  </li>))}</ul>
              </Card>
              <Card className="p-5">
                <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Sentiment</p>
                <p className="font-mono text-4xl font-bold text-[color:var(--emerald-brand)]">{fearGreed}<span className="text-base text-muted-foreground"> / 100</span></p>
                <p className="text-xs text-muted-foreground">Fear & Greed Index · Greedy</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-gradient-to-r from-[color:var(--danger)] via-[color:var(--gold)] to-[color:var(--success)]" style={{ width: `${fearGreed}%` }} />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">Trending</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {trending.map((t) => (<span key={t} className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-[11px]">{t}</span>))}
                </div>
              </Card>
              <Card className="p-5 lg:col-span-2">
                <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Sector Heatmap</p>
                <div className="grid grid-cols-4 gap-2">
                  {sectorHeatmap.map((s) => (
                    <div key={s.name} className="rounded-md p-3" style={{
                      background: `color-mix(in oklab, ${s.change >= 0 ? "var(--success)" : "var(--danger)"} ${Math.min(Math.abs(s.change) * 18, 50)}%, transparent)`,
                    }}>
                      <p className="text-[11px] font-medium">{s.name}</p>
                      <p className="font-mono text-xs">{pct(s.change)}</p>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-5">
                <p className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Global Markets</p>
                <ul className="space-y-2 text-sm">{globalMarkets.map((g) => (
                  <li key={g.name} className="flex justify-between"><span className="text-muted-foreground">{g.name}</span>
                    <span className="flex items-center gap-3 font-mono text-xs"><span>{g.value}</span><TrendDelta value={g.chg} /></span>
                  </li>))}</ul>
              </Card>
            </div>
          </section>

          {/* Section 5: News */}
          <section>
            <SectionHeader eyebrow="Section 5" title="News Intelligence" />
            <div className="grid gap-3 md:grid-cols-2">
              {news.slice(0, 6).map((n) => (
                <Card key={n.id} className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest">{n.category}</span>
                    <span className="text-[10px] text-muted-foreground">{n.source} · {n.time}</span>
                    <span className="ml-auto font-mono text-[10px] text-muted-foreground">Impact {n.impact}</span>
                  </div>
                  <h4 className="text-sm font-semibold">{n.headline}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{n.summary}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <span className={`rounded px-1.5 py-0.5 text-[10px] uppercase ${
                      n.sentiment === "positive" ? "bg-[color:var(--success)]/15 text-[color:var(--success)]" :
                      n.sentiment === "negative" ? "bg-[color:var(--danger)]/15 text-[color:var(--danger)]" :
                      "bg-muted text-muted-foreground"}`}>{n.sentiment}</span>
                    {n.stocks.slice(0, 3).map((s) => (<span key={s} className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">{s}</span>))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 6: Goals */}
          <section>
            <SectionHeader eyebrow="Section 6" title="Goal Planning" />
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {goals.map((g) => {
                const p = (g.current / g.target) * 100;
                return (
                  <Card key={g.id} className="p-5">
                    <div className="flex items-start justify-between">
                      <div><p className="text-sm font-semibold">{g.name}</p><p className="text-[10px] uppercase tracking-widest text-muted-foreground">By {g.by} · {g.risk}</p></div>
                      <p className="font-mono text-xs text-[color:var(--emerald-brand)]">{p.toFixed(0)}%</p>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-[color:var(--emerald-brand)]" style={{ width: `${p}%` }} /></div>
                    <div className="mt-3 flex justify-between font-mono text-xs"><span>{inr(g.current, { compact: true })}</span><span className="text-muted-foreground">{inr(g.target, { compact: true })}</span></div>
                    <p className="mt-2 text-[11px] text-muted-foreground">SIP <span className="font-mono text-foreground">{inr(g.sip, { decimals: 0 })}</span>/mo</p>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Section 7: Retirement & NPS */}
          <section>
            <SectionHeader eyebrow="Section 7" title="Retirement & NPS" />
            <div className="grid gap-3 lg:grid-cols-3">
              <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Retirement Corpus</p>
                <p className="mt-2 font-mono text-3xl font-bold text-[color:var(--gold)]">{inr(retirement.corpusTarget, { compact: true })}</p>
                <p className="mt-1 text-xs text-muted-foreground">Target at age {retirement.ageRetire}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-[color:var(--gold)]" style={{ width: `${(retirement.corpusCurrent / retirement.corpusTarget) * 100}%` }} /></div>
              </Card>
              <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Expected Monthly Income</p>
                <p className="mt-2 font-mono text-3xl font-bold">{inr(retirement.inflationAdjusted, { decimals: 0 })}</p>
                <p className="mt-1 text-xs text-muted-foreground">Inflation-adjusted, today's value {inr(retirement.monthlyExpense, { decimals: 0 })}</p>
              </Card>
              <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Readiness</p>
                <p className="mt-2 font-mono text-3xl font-bold text-[color:var(--emerald-brand)]">{retirement.readiness}/100</p>
                <p className="mt-1 text-xs text-muted-foreground">On track if SIP +₹4,500</p>
              </Card>
            </div>
          </section>

          {/* Section 8: Forex */}
          <section>
            <SectionHeader eyebrow="Section 8" title="Forex Analytics" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {currencies.map((c) => (
                <Card key={c.pair} className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.pair}</p>
                  <p className="mt-1 font-mono text-xl font-semibold">{c.rate.toFixed(2)}</p>
                  <TrendDelta value={c.change} />
                </Card>
              ))}
            </div>
          </section>

          {/* Section 9: MCX */}
          <section>
            <SectionHeader eyebrow="Section 9" title="MCX Commodities" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {commodities.map((c) => (
                <Card key={c.symbol} className="p-5">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{c.name}</p>
                  <p className="mt-1 font-mono text-2xl font-bold">{inr(c.price, { decimals: 0 })}</p>
                  <p className="text-[10px] text-muted-foreground">{c.unit}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <TrendDelta value={c.change} />
                    <span className="font-mono text-[10px] text-muted-foreground">σ {c.volatility}</span>
                  </div>
                  <p className="mt-3 text-[10px] text-[color:var(--gold)]">AI target {inr(c.forecast, { decimals: 0 })}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 10: Watchlist */}
          <section>
            <SectionHeader eyebrow="Section 10" title="Watchlists" />
            <div className="grid gap-3 md:grid-cols-3">
              {watchlists.map((w) => (
                <Card key={w.id} className="p-5">
                  <p className="mb-3 text-sm font-semibold">{w.name}</p>
                  <ul className="space-y-2">
                    {w.items.map((it) => (
                      <li key={it.sym} className="flex items-center justify-between text-sm">
                        <span className="font-medium">{it.sym}</span>
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-xs">{typeof it.price === "number" ? it.price.toLocaleString("en-IN") : it.price}</span>
                          <TrendDelta value={it.change} />
                          <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                            it.signal === "Buy" ? "bg-[color:var(--success)]/15 text-[color:var(--success)]" :
                            it.signal === "Sell" ? "bg-[color:var(--danger)]/15 text-[color:var(--danger)]" :
                            "bg-muted text-muted-foreground"}`}>{it.signal}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>
      </div>
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="font-mono text-lg font-semibold">{value}</p>
    </div>
  );
}
