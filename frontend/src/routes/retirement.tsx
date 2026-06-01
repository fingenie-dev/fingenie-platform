import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Sparkline } from "@/components/common/Sparkline";
import { inr } from "@/lib/format";
import { retirement } from "@/lib/mock/goals";

export const Route = createFileRoute("/retirement")({
  head: () => ({ meta: [{ title: "Retirement Planner · Fingenie" }] }),
  component: Retirement,
});

function Retirement() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Retirement" title="When Will You Retire Comfortably?" />
        <div className="grid gap-3 md:grid-cols-4">
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Current age</p><p className="mt-1 font-mono text-2xl font-bold">{retirement.ageNow}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Target age</p><p className="mt-1 font-mono text-2xl font-bold text-[color:var(--gold)]">{retirement.ageRetire}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Corpus needed</p><p className="mt-1 font-mono text-2xl font-bold">{inr(retirement.corpusTarget,{compact:true})}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Readiness</p><p className="mt-1 font-mono text-2xl font-bold text-[color:var(--emerald-brand)]">{retirement.readiness}/100</p></Card>
        </div>

        <Card className="p-6">
          <p className="text-sm font-semibold">Corpus Projection vs Target</p>
          <p className="mt-1 text-xs text-muted-foreground">Inflation-adjusted at 6% with current SIP & 12% expected returns</p>
          <div className="mt-4">
            <Sparkline data={retirement.projected.map(p=>p.corpus)} width={1200} height={240} className="w-full" />
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div><p className="text-[10px] uppercase tracking-widest text-muted-foreground">Projected corpus @60</p><p className="font-mono text-lg font-semibold">{inr(retirement.projected[retirement.projected.length-1].corpus,{compact:true})}</p></div>
            <div><p className="text-[10px] uppercase tracking-widest text-muted-foreground">Inflation-adjusted expense</p><p className="font-mono text-lg font-semibold">{inr(retirement.inflationAdjusted,{decimals:0})}</p></div>
            <div><p className="text-[10px] uppercase tracking-widest text-muted-foreground">Gap</p><p className="font-mono text-lg font-semibold text-[color:var(--danger)]">{inr(retirement.corpusTarget - retirement.projected[retirement.projected.length-1].corpus, {compact:true})}</p></div>
          </div>
        </Card>

        <Card className="border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/5 p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--emerald-brand)]">Genie Recommendation</p>
          <p className="mt-1 text-sm font-semibold">Increase SIP by ₹4,500/month or extend retirement to 62</p>
          <p className="mt-2 text-xs text-muted-foreground">A modest SIP bump closes 62% of the gap. Alternatively, NPS Tier-1 contribution of ₹50K/year provides ₹15,600 tax relief and locks in pension income.</p>
        </Card>
      </div>
    </AppShell>
  );
}