import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download } from "lucide-react";

const REPORTS = [
  { name: "Annual Portfolio Review", desc: "Holdings, P&L, allocation across FY", time: "Generated 5 mins ago" },
  { name: "Capital Gains Statement", desc: "STCG + LTCG, scrip-wise, with grandfathering", time: "Current FY" },
  { name: "Tax Optimization Report", desc: "80C, 80D, NPS, ELSS, HRA, gains harvest", time: "AI-generated" },
  { name: "Risk & Diversification Audit", desc: "Concentration, beta, drawdown, scenarios", time: "Updated daily" },
  { name: "Goals Forecast", desc: "Probability of achievement, SIP gap analysis", time: "Monte Carlo · 10K runs" },
  { name: "Retirement Readiness", desc: "Inflation-adjusted corpus & income projection", time: "Annual update" },
];

export const Route = createFileRoute("/reports")({
  head: () => ({ meta: [{ title: "Reports · Fingenie" }] }),
  component: Reports,
});

function Reports() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Reports" title="Generated Reports" />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {REPORTS.map((r) => (
            <Card key={r.name} className="p-5">
              <div className="mb-3 grid size-9 place-items-center rounded-md bg-[color:var(--emerald-brand)]/10 text-[color:var(--emerald-brand)]"><BarChart3 className="size-4" /></div>
              <p className="text-sm font-semibold">{r.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{r.time}</span>
                <Button size="sm" variant="outline"><Download className="mr-1 size-3" />PDF</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}