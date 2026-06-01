import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Upload } from "lucide-react";

const DOCS = [
  { name: "Zerodha CAS · Jan 2026", type: "CAS", date: "01 Feb 2026", size: "182 KB" },
  { name: "Contract Notes · Jan 2026", type: "Contract", date: "31 Jan 2026", size: "1.4 MB" },
  { name: "Capital Gains Statement FY25", type: "Tax", date: "12 Apr 2025", size: "98 KB" },
  { name: "Form 16 · 2024-25", type: "Tax", date: "30 Jun 2025", size: "421 KB" },
  { name: "NPS Transaction Statement", type: "NPS", date: "01 Feb 2026", size: "67 KB" },
  { name: "Mutual Fund Account Statement", type: "MF", date: "01 Feb 2026", size: "240 KB" },
];

export const Route = createFileRoute("/documents")({
  head: () => ({ meta: [{ title: "Documents · Fingenie" }] }),
  component: Documents,
});

function Documents() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Vault" title="Documents"
          action={<Button size="sm"><Upload className="mr-1 size-3" />Upload</Button>} />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {DOCS.map((d) => (
            <Card key={d.name} className="flex items-center gap-3 p-4">
              <div className="grid size-10 place-items-center rounded-md bg-[color:var(--emerald-brand)]/10 text-[color:var(--emerald-brand)]"><FileText className="size-5" /></div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium">{d.name}</p>
                <p className="text-[11px] text-muted-foreground">{d.type} · {d.date} · {d.size}</p>
              </div>
              <Button variant="ghost" size="icon"><Download className="size-4" /></Button>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}