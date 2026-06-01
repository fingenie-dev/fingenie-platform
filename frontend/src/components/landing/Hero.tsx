import { Link } from "@tanstack/react-router";
import { Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sparkline } from "@/components/common/Sparkline";
import { ConfidenceBadge } from "@/components/common/ConfidenceBadge";
import { portfolioSeries } from "@/lib/mock/portfolio";

export function Hero() {
  const series = portfolioSeries.slice(-40).map((p) => p.value);
  return (
    <header className="relative overflow-hidden pb-20 pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[700px] grid-pattern opacity-40" />
      <div className="absolute left-1/2 top-32 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[color:var(--emerald-brand)]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl animate-fade-in-up text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--emerald-brand)]">
            <Sparkles className="size-3" /> AI-Native Wealth Engine
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Your money,<br />
            <span className="text-gradient-emerald">fully autonomous.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Fingenie is the AI financial copilot built for Indian investors. Track every rupee across stocks, mutual funds, NPS,
            forex and MCX — and let Genie rebalance, optimize tax, and forecast retirement with institutional precision.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 md:justify-start">
            <Button asChild size="lg" className="bg-[color:var(--emerald-brand)] text-background shadow-[0_0_40px_-8px_var(--emerald-brand)] hover:bg-[color:var(--emerald-brand)]/90">
              <Link to="/signup">Start with AI <span aria-hidden>→</span></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#demo"><Play className="mr-2 size-4" /> Watch demo</a>
            </Button>
          </div>
        </div>

        {/* Dashboard preview */}
        <div id="demo" className="relative mx-auto mt-16 animate-fade-in-up [animation-delay:120ms]">
          <div className="absolute -inset-4 -z-10 bg-[color:var(--emerald-brand)]/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border glass glow-emerald">
            <div className="grid grid-cols-12 min-h-[520px]">
              {/* Sidebar */}
              <aside className="col-span-3 hidden border-r border-border p-5 md:block">
                <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <span className="size-2 rounded-full bg-[color:var(--emerald-brand)] animate-pulse" /> Genie Active
                </div>
                <ul className="space-y-1 text-sm">
                  {["Dashboard","Portfolio","AI Advisor","Goals","Retirement","Forex","MCX"].map((l, i) => (
                    <li key={l} className={`rounded-md px-3 py-2 ${i === 0 ? "bg-[color:var(--emerald-brand)]/10 text-[color:var(--emerald-brand)]" : "text-muted-foreground"}`}>
                      {l}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-lg border border-border bg-card/50 p-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Goal: Retirement 2045</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded bg-muted">
                    <div className="h-full w-[64%] bg-[color:var(--emerald-brand)]" />
                  </div>
                  <p className="mt-1 font-mono text-[11px]">64% • on track</p>
                </div>
              </aside>
              {/* Main */}
              <div className="col-span-12 flex flex-col gap-4 p-6 md:col-span-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">Net Worth</p>
                    <p className="font-mono text-4xl font-bold tabular-nums text-gradient-emerald">₹84,12,400</p>
                    <p className="mt-1 font-mono text-xs text-[color:var(--success)]">+₹18,420 today · +1.42%</p>
                  </div>
                  <div className="hidden max-w-sm rounded-xl border border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/5 p-3 md:block">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--emerald-brand)]">Genie Insight</span>
                      <ConfidenceBadge value={92} />
                    </div>
                    <p className="text-xs leading-relaxed">
                      Your IT exposure is 1.6× benchmark. Rebalancing 8% to defensives reduces drawdown risk by 22%.
                    </p>
                  </div>
                </div>
                <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-3">
                  <div className="md:col-span-2 rounded-xl border border-border bg-background/40 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Portfolio · 40D</span>
                      <span className="font-mono text-[10px] text-[color:var(--success)]">+12.4%</span>
                    </div>
                    <Sparkline data={series} width={520} height={140} className="w-full" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { l: "SIP Health", v: "92/100", t: "+4 this month" },
                      { l: "Tax Saved", v: "₹42,300", t: "LTCG harvest" },
                      { l: "Retirement", v: "72/100", t: "Inflation adj." },
                    ].map((x) => (
                      <div key={x.l} className="rounded-lg border border-border bg-background/40 p-3">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{x.l}</p>
                        <p className="font-mono text-lg font-semibold">{x.v}</p>
                        <p className="text-[10px] text-muted-foreground">{x.t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span>Built for India</span>
          <span>•</span>
          <span>SEBI-aligned</span>
          <span>•</span>
          <span>Bank-grade Encryption</span>
          <span>•</span>
          <span>50,000+ Investors</span>
        </div>
      </div>
    </header>
  );
}
