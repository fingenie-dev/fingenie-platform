import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { news } from "@/lib/mock/news";

const CATS = ["All","Markets","Economy","RBI","SEBI","Corporate","Global","Commodities","Forex"] as const;

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [{ title: "News Intelligence · Fingenie" }] }),
  component: News,
});

function News() {
  const [cat, setCat] = useState<typeof CATS[number]>("All");
  const filtered = cat === "All" ? news : news.filter((n) => n.category === cat);
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="News Intelligence" title="AI-curated Markets News" />
        <div className="flex flex-wrap gap-1.5">{CATS.map((c)=>(
          <button key={c} onClick={()=>setCat(c)} className={`rounded-full border px-3 py-1 text-xs ${cat===c?"border-[color:var(--emerald-brand)] bg-[color:var(--emerald-brand)]/10 text-[color:var(--emerald-brand)]":"border-border text-muted-foreground hover:text-foreground"}`}>{c}</button>
        ))}</div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((n) => (
            <Card key={n.id} className="flex flex-col p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest">{n.category}</span>
                <span className="text-[10px] text-muted-foreground">{n.source} · {n.time}</span>
              </div>
              <h4 className="text-sm font-semibold leading-snug">{n.headline}</h4>
              <p className="mt-2 text-xs text-muted-foreground">{n.summary}</p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                <span className={`rounded px-1.5 py-0.5 text-[10px] uppercase ${n.sentiment==="positive"?"bg-[color:var(--success)]/15 text-[color:var(--success)]":n.sentiment==="negative"?"bg-[color:var(--danger)]/15 text-[color:var(--danger)]":"bg-muted text-muted-foreground"}`}>{n.sentiment}</span>
                {n.stocks.slice(0,3).map((s)=>(<span key={s} className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">{s}</span>))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">AI Impact</span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-24 overflow-hidden rounded bg-muted"><div className="h-full bg-[color:var(--emerald-brand)]" style={{ width: `${n.impact}%` }} /></div>
                  <span className="font-mono text-xs">{n.impact}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}