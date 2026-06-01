import { ConfidenceBadge } from "@/components/common/ConfidenceBadge";

const prompts = [
  "Why is my portfolio down today?",
  "How can I retire by age 55?",
  "Which sectors are undervalued right now?",
  "Impact of RBI policy on my SIPs?",
];

export function AICopilotBand() {
  return (
    <section id="ai" className="border-y border-border bg-card/40 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--emerald-brand)]">Meet Genie</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">An AI that thinks like your private banker.</h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Genie reads your portfolio, your goals, the news, and every macro indicator — then explains decisions in plain
            language. Trained on RBI/SEBI guidance, audited monthly, and never trades without your approval.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Real-time portfolio diagnostics",
              "Plain-English tax & SIP advice",
              "News impact scored against your holdings",
              "Goal-aware rebalancing recommendations",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[color:var(--emerald-brand)]" />{t}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-background/60 p-6 glass">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Genie · Session #2,148</span>
            <ConfidenceBadge value={94} />
          </div>
          <div className="space-y-4">
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm border border-border bg-muted/60 px-4 py-2.5 text-sm">
              Should I switch from active to index for my large-cap allocation?
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/5 px-4 py-3 text-sm">
              <p>Over 5Y your two active large-caps trailed NIFTY 50 TRI by 1.4% net of TER. Switching saves ₹38K/yr at current AUM
                and reduces fund-manager risk. I can stagger the switch over 6 months to manage exit-load and LTCG.</p>
              <div className="mt-3 flex gap-2">
                <button className="rounded-md border border-[color:var(--emerald-brand)] bg-[color:var(--emerald-brand)] px-3 py-1 text-xs font-semibold text-background">Build switch plan</button>
                <button className="rounded-md border border-border px-3 py-1 text-xs">Show comparison</button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {prompts.map((p) => (
              <span key={p} className="rounded-full border border-border bg-card px-3 py-1 text-[11px] text-muted-foreground hover:border-[color:var(--emerald-brand)]/40 hover:text-foreground">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
