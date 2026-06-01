import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { inr } from "@/lib/format";
import { nps } from "@/lib/mock/goals";

export const Route = createFileRoute("/nps")({
  head: () => ({ meta: [{ title: "NPS Dashboard · Fingenie" }] }),
  component: NPS,
});

function NPS() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="NPS" title="National Pension System" />
        <div className="grid gap-3 md:grid-cols-4">
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Tier-1 corpus</p><p className="mt-1 font-mono text-2xl font-bold">{inr(nps.tier1,{compact:true})}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Tier-2 corpus</p><p className="mt-1 font-mono text-2xl font-bold">{inr(nps.tier2,{compact:true})}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">CAGR (5Y)</p><p className="mt-1 font-mono text-2xl font-bold text-[color:var(--emerald-brand)]">{nps.cagr}%</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Health score</p><p className="mt-1 font-mono text-2xl font-bold text-[color:var(--gold)]">{nps.health}/100</p></Card>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          <Card className="p-6">
            <p className="mb-4 text-sm font-semibold">Active Allocation (E-C-G)</p>
            {nps.allocation.map((a)=>(
              <div key={a.name} className="mb-3">
                <div className="flex justify-between text-xs"><span>{a.name}</span><span className="font-mono">{a.value}%</span></div>
                <div className="mt-1 h-2 overflow-hidden rounded bg-muted"><div className="h-full bg-[color:var(--emerald-brand)]/70" style={{ width: `${a.value}%` }} /></div>
              </div>
            ))}
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold">Tax & Annuity Outlook</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between"><span className="text-muted-foreground">Sec 80CCD(1B) saving</span><span className="font-mono">₹15,600/yr</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Expected monthly annuity @60</span><span className="font-mono">{inr(nps.expectedAnnuity,{decimals:0})}</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Recommended fund manager</span><span>HDFC Pension</span></li>
            </ul>
            <Button className="mt-5 w-full">Contribute ₹50,000 now</Button>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}