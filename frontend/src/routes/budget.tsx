import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { inr } from "@/lib/format";

export const Route = createFileRoute("/budget")({
  head: () => ({ meta: [{ title: "Budget Planner · Fingenie" }] }),
  component: Budget,
});

const CATS = [
  { name: "Housing & EMI", spent: 38000, budget: 40000, color: "var(--deep-blue)" },
  { name: "Groceries", spent: 14200, budget: 15000, color: "var(--emerald-brand)" },
  { name: "Transport & Fuel", spent: 6800, budget: 8000, color: "var(--gold)" },
  { name: "Utilities", spent: 4100, budget: 5000, color: "var(--chart-5)" },
  { name: "Dining & Entertainment", spent: 9400, budget: 7000, color: "var(--danger)" },
  { name: "Health & Wellness", spent: 3200, budget: 4000, color: "var(--success)" },
  { name: "Education", spent: 12000, budget: 12000, color: "var(--chart-4)" },
  { name: "Investments / SIP", spent: 35000, budget: 35000, color: "var(--emerald-brand)" },
];

function Budget() {
  const income = 185000;
  const spent = CATS.reduce((s,c)=>s+c.spent,0);
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Budget" title="Monthly Cashflow · February" />
        <div className="grid gap-3 md:grid-cols-4">
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Income</p><p className="mt-1 font-mono text-2xl font-bold text-[color:var(--emerald-brand)]">{inr(income,{decimals:0})}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Spent</p><p className="mt-1 font-mono text-2xl font-bold">{inr(spent,{decimals:0})}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Saved</p><p className="mt-1 font-mono text-2xl font-bold text-[color:var(--gold)]">{inr(income-spent,{decimals:0})}</p></Card>
          <Card className="p-5"><p className="text-[11px] uppercase tracking-widest text-muted-foreground">Save Rate</p><p className="mt-1 font-mono text-2xl font-bold">{(((income-spent)/income)*100).toFixed(1)}%</p></Card>
        </div>
        <Card className="p-6">
          <p className="mb-4 text-sm font-semibold">Categories</p>
          <div className="space-y-4">
            {CATS.map((c) => {
              const p = (c.spent/c.budget)*100;
              const over = c.spent > c.budget;
              return (
                <div key={c.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{c.name}</span>
                    <span className="font-mono text-xs">{inr(c.spent,{decimals:0})} <span className="text-muted-foreground">/ {inr(c.budget,{decimals:0})}</span></span>
                  </div>
                  <div className="h-2 overflow-hidden rounded bg-muted">
                    <div className="h-full" style={{ width: `${Math.min(p,100)}%`, background: over ? "var(--danger)" : c.color }} />
                  </div>
                  {over && <p className="mt-1 text-[10px] text-[color:var(--danger)]">Over budget by {inr(c.spent-c.budget,{decimals:0})}</p>}
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}