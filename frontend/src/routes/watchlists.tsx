import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendDelta } from "@/components/common/TrendDelta";
import { watchlists } from "@/lib/mock/watchlists";
import { Plus, Star } from "lucide-react";

export const Route = createFileRoute("/watchlists")({
  head: () => ({ meta: [{ title: "Watchlists · Fingenie" }] }),
  component: Watchlists,
});

function Watchlists() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Watchlists" title="Your Tracked Instruments"
          action={<Button size="sm"><Plus className="mr-1 size-3" />New list</Button>} />
        <div className="grid gap-3 xl:grid-cols-2">
          {watchlists.map((w) => (
            <Card key={w.id} className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2"><Star className="size-4 text-[color:var(--gold)]" /><p className="text-base font-semibold">{w.name}</p></div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{w.items.length} items</span>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {w.items.map((it) => (
                    <tr key={it.sym} className="border-t border-border first:border-0">
                      <td className="py-2.5"><span className="font-medium">{it.sym}</span></td>
                      <td className="py-2.5 text-right font-mono text-xs">{typeof it.price==="number"?it.price.toLocaleString("en-IN"):it.price}</td>
                      <td className="py-2.5 pl-3 text-right"><TrendDelta value={it.change} /></td>
                      <td className="py-2.5 pl-3 text-right">
                        <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${it.signal==="Buy"?"bg-[color:var(--success)]/15 text-[color:var(--success)]":it.signal==="Sell"?"bg-[color:var(--danger)]/15 text-[color:var(--danger)]":"bg-muted text-muted-foreground"}`}>{it.signal}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}