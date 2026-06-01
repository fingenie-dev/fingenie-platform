import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { alerts } from "@/lib/mock/alerts";
import { Bell, TrendingUp, Sparkles, Newspaper, Target, Banknote, Coins } from "lucide-react";

const ICON: Record<string, any> = {
  price: TrendingUp, ai: Sparkles, portfolio: Bell, news: Newspaper,
  goal: Target, forex: Banknote, commodity: Coins,
};

export const Route = createFileRoute("/alerts")({
  head: () => ({ meta: [{ title: "Alerts · Fingenie" }] }),
  component: Alerts,
});

function Alerts() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Alerts" title="Notification Center"
          action={<Button variant="outline" size="sm">Mark all read</Button>} />
        <Card className="divide-y divide-border">
          {alerts.map((a) => {
            const Icon = ICON[a.type] || Bell;
            const tone = a.severity==="warn"?"text-[color:var(--gold)]":a.severity==="success"?"text-[color:var(--success)]":"text-[color:var(--emerald-brand)]";
            return (
              <div key={a.id} className="flex items-center gap-4 p-4 hover:bg-muted/30">
                <div className={`grid size-9 place-items-center rounded-md bg-muted/60 ${tone}`}><Icon className="size-4" /></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{a.title}</p>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{a.type} · {a.time}</p>
                </div>
                <Button variant="ghost" size="sm">Dismiss</Button>
              </div>
            );
          })}
        </Card>
      </div>
    </AppShell>
  );
}