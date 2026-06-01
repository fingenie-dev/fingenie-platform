import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { inr } from "@/lib/format";

export const Route = createFileRoute("/tax")({
  head: () => ({ meta: [{ title: "Tax Planner · Fingenie" }] }),
  component: Tax,
});

const SECTIONS = [
  { code: "80C", used: 95000, limit: 150000, items: ["ELSS","PPF","EPF","Home loan principal"] },
  { code: "80CCD(1B)", used: 0, limit: 50000, items: ["NPS Tier-1"] },
  { code: "80D", used: 18000, limit: 25000, items: ["Health insurance"] },
  { code: "24(b)", used: 180000, limit: 200000, items: ["Home loan interest"] },
];

function Tax() {
  const totalSaved = 42300;
  const harvestable = 42300;
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Tax Planner" title="FY 2025-26 Tax Optimization" />
        <div className="grid gap-3 md:grid-cols-3">
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Total saved</p><p className="mt-1 font-mono text-2xl font-bold text-[color:var(--emerald-brand)]">{inr(totalSaved,{decimals:0})}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Harvestable LTCG</p><p className="mt-1 font-mono text-2xl font-bold text-[color:var(--gold)]">{inr(harvestable,{decimals:0})}</p><p className="text-xs text-muted-foreground">Before March 31</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Regime</p><p className="mt-1 text-xl font-bold">Old · Recommended</p><p className="text-xs text-muted-foreground">Saves ₹38,400 vs new regime</p></Card>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {SECTIONS.map((s) => {
            const p = (s.used/s.limit)*100;
            return (
              <Card key={s.code} className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">Section {s.code}</p>
                    <p className="text-sm">{s.items.join(" · ")}</p>
                  </div>
                  <span className="font-mono text-xs">{p.toFixed(0)}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded bg-muted"><div className="h-full bg-[color:var(--emerald-brand)]" style={{ width: `${p}%` }} /></div>
                <div className="mt-2 flex justify-between text-xs"><span className="font-mono">{inr(s.used,{decimals:0})}</span><span className="font-mono text-muted-foreground">{inr(s.limit,{decimals:0})}</span></div>
                {s.used < s.limit && <p className="mt-3 text-[11px] text-[color:var(--gold)]">Save up to {inr((s.limit-s.used)*0.31,{decimals:0})} more in tax</p>}
              </Card>
            );
          })}
        </div>
        <Card className="border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--gold)]">Genie Tax Move</p>
          <p className="mt-1 text-sm font-semibold">Book ₹42,300 LTCG before March to exhaust your ₹1L exemption</p>
          <p className="mt-2 text-xs text-muted-foreground">Suggested: trim HDFCBANK by 12 shares, harvest loss in ASIANPAINT for ₹18K offset.</p>
          <Button className="mt-3" size="sm">Run harvest plan</Button>
        </Card>
      </div>
    </AppShell>
  );
}