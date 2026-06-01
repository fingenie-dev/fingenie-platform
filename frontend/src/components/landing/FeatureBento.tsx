import { Brain, LineChart, Target, Sunset, DollarSign, Gem } from "lucide-react";
import { Sparkline } from "@/components/common/Sparkline";

const series = Array.from({ length: 30 }, (_, i) => 100 + Math.sin(i / 3) * 12 + i * 0.8);

export function FeatureBento() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--emerald-brand)]">Six pillars · One brain</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Institutional tools for retail minds.</h2>
        <p className="mt-4 text-muted-foreground">Every workflow an HNI investor pays a private banker for — automated, transparent and 24/7.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Portfolio Intelligence — wide */}
        <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[color:var(--emerald-brand)]/40 md:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div className="grid size-10 place-items-center rounded-lg bg-[color:var(--emerald-brand)]/10 text-[color:var(--emerald-brand)]">
              <LineChart className="size-5" />
            </div>
            <span className="rounded-full bg-[color:var(--emerald-brand)]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--emerald-brand)]">Live</span>
          </div>
          <h3 className="text-xl font-semibold">Portfolio Intelligence</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            One unified view across NSE, BSE, mutual funds, NPS and crypto. XIRR, drawdown and risk scored in real-time.
          </p>
          <div className="mt-6 rounded-lg border border-border bg-background/50 p-4">
            <Sparkline data={series} width={620} height={80} className="w-full" />
          </div>
        </div>

        {/* AI Advisor */}
        <div className="rounded-2xl border border-border bg-gradient-to-br from-[color:var(--emerald-brand)]/15 to-[color:var(--deep-blue)]/15 p-6">
          <div className="grid size-10 place-items-center rounded-lg bg-background/40 text-[color:var(--emerald-brand)]">
            <Brain className="size-5" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">AI Copilot</h3>
          <p className="mt-2 text-sm text-muted-foreground">Ask anything from "should I switch SIPs" to "tax impact of selling Infy"—in plain English.</p>
          <div className="mt-6 space-y-2">
            <div className="rounded-md border border-border bg-background/40 px-3 py-2 text-[11px]">"Why is my portfolio down today?"</div>
            <div className="rounded-md border border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/10 px-3 py-2 text-[11px]">Analyzing FII flows and sector contributions…</div>
          </div>
        </div>

        {/* Goal Planning */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="grid size-10 place-items-center rounded-lg bg-[color:var(--gold)]/15 text-[color:var(--gold)]">
            <Target className="size-5" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Goal Planning</h3>
          <p className="mt-2 text-sm text-muted-foreground">House, education, retirement — simulate SIPs and timelines instantly.</p>
          <div className="mt-5 flex items-end gap-1.5">
            {[12, 22, 18, 30, 26, 38, 44, 52].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-[color:var(--emerald-brand)]/30" style={{ height: `${h}px` }} />
            ))}
          </div>
        </div>

        {/* Retirement & NPS */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="grid size-10 place-items-center rounded-lg bg-[color:var(--deep-blue)]/20 text-[color:var(--deep-blue)] dark:text-[color:var(--emerald-brand)]">
            <Sunset className="size-5" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Retirement & NPS</h3>
          <p className="mt-2 text-sm text-muted-foreground">Tier-1, Tier-2 NPS optimization with inflation-adjusted corpus modelling.</p>
          <p className="mt-6 font-mono text-3xl font-bold text-[color:var(--gold)]">₹12.4 Cr</p>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Est. corpus at 60</p>
        </div>

        {/* Forex */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="grid size-10 place-items-center rounded-lg bg-[color:var(--emerald-brand)]/10 text-[color:var(--emerald-brand)]">
            <DollarSign className="size-5" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Forex Analytics</h3>
          <p className="mt-2 text-sm text-muted-foreground">Live USD/INR, EUR/INR, GBP/INR analysis with AI-driven volatility forecast.</p>
          <div className="mt-4 flex items-center justify-between rounded-md border border-border bg-background/40 px-3 py-2 font-mono text-xs">
            <span>USD/INR</span><span>83.12</span><span className="text-[color:var(--danger)]">-0.04%</span>
          </div>
        </div>

        {/* MCX */}
        <div className="rounded-2xl border border-border bg-card p-6 md:col-span-1">
          <div className="grid size-10 place-items-center rounded-lg bg-[color:var(--gold)]/15 text-[color:var(--gold)]">
            <Gem className="size-5" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">MCX Commodities</h3>
          <p className="mt-2 text-sm text-muted-foreground">Gold, Silver, Crude — supply-chain & global event correlation built-in.</p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
            <div><p className="text-muted-foreground">GOLD</p><p>71,240</p></div>
            <div><p className="text-muted-foreground">SILVER</p><p>84,615</p></div>
            <div><p className="text-muted-foreground">CRUDE</p><p>6,540</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
