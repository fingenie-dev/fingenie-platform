import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { inr } from "@/lib/format";
import { goals } from "@/lib/mock/goals";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/goals")({
  head: () => ({ meta: [{ title: "Goals · Fingenie" }] }),
  component: Goals,
});

function Goals() {
  const totalTarget = goals.reduce((s,g)=>s+g.target,0);
  const totalCurrent = goals.reduce((s,g)=>s+g.current,0);
  const totalSip = goals.reduce((s,g)=>s+g.sip,0);
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Goal-based investing" title="Your Financial Goals"
          action={<Button size="sm"><Plus className="mr-1 size-3" />New Goal</Button>} />
        <div className="grid gap-3 md:grid-cols-3">
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Total Target</p>
            <p className="mt-1 font-mono text-2xl font-bold">{inr(totalTarget,{compact:true})}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Total Saved</p>
            <p className="mt-1 font-mono text-2xl font-bold text-[color:var(--emerald-brand)]">{inr(totalCurrent,{compact:true})}</p>
            <p className="text-xs text-muted-foreground">{((totalCurrent/totalTarget)*100).toFixed(1)}% of target</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Monthly SIP</p>
            <p className="mt-1 font-mono text-2xl font-bold">{inr(totalSip,{decimals:0})}</p>
            <p className="text-xs text-muted-foreground">across {goals.length} goals</p></Card>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {goals.map((g) => {
            const p = (g.current/g.target)*100;
            return (
              <Card key={g.id} className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-base font-semibold">{g.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">By {g.by} · {g.risk} risk</p>
                  </div>
                  <span className="rounded-full bg-[color:var(--emerald-brand)]/15 px-2 py-0.5 font-mono text-xs font-bold text-[color:var(--emerald-brand)]">{p.toFixed(0)}%</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-gradient-to-r from-[color:var(--emerald-brand)] to-[color:var(--gold)]" style={{ width: `${p}%` }} /></div>
                <div className="mt-3 flex justify-between text-xs"><span className="font-mono">{inr(g.current,{compact:true})}</span><span className="font-mono text-muted-foreground">{inr(g.target,{compact:true})}</span></div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <div><p className="text-[10px] uppercase tracking-widest text-muted-foreground">SIP</p><p className="font-mono text-sm">{inr(g.sip,{decimals:0})}/mo</p></div>
                  <Button variant="outline" size="sm">Adjust</Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}