import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ConfidenceBadge } from "@/components/common/ConfidenceBadge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { insights, aiHealthScore, aiConfidence } from "@/lib/mock/ai-insights";
import { Sparkles, Send, TrendingUp, Shield, Receipt, Target } from "lucide-react";

export const Route = createFileRoute("/ai-advisor")({
  head: () => ({ meta: [{ title: "AI Advisor · Fingenie" }] }),
  component: AIAdvisor,
});

const CONVERSATIONS = [
  { who: "ai", text: "Good morning Aarav. I've analyzed overnight markets and your portfolio. Three things worth your attention." },
  { who: "ai", text: "1. IT capex commentary from MSFT/META is lifting Nifty IT — your INFY position is +3.9%.\n2. RBI policy at 6.5% — dovish tilt favors your banking holdings.\n3. ASIANPAINT down 2.8% — tax-loss harvesting opportunity, ₹18K offset available." },
];

export default function AIAdvisor() {
  const [msgs, setMsgs] = useState(CONVERSATIONS);
  const [val, setVal] = useState("");

  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="AI Copilot" title="Genie · Your AI Financial Advisor"
          action={<ConfidenceBadge value={aiConfidence} />} />

        <div className="grid gap-3 md:grid-cols-4">
          {[
            { i: TrendingUp, l: "Health Score", v: `${aiHealthScore}/100` },
            { i: Shield, l: "Risk Rating", v: "Moderate" },
            { i: Target, l: "Goal Track", v: "On track" },
            { i: Receipt, l: "Tax Saved", v: "₹42,300" },
          ].map(({ i: Icon, l, v }) => (
            <Card key={l} className="p-5">
              <Icon className="mb-2 size-4 text-[color:var(--emerald-brand)]" />
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{l}</p>
              <p className="mt-1 font-mono text-xl font-bold">{v}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
          <Card className="flex h-[600px] flex-col">
            <div className="border-b border-border p-4">
              <div className="flex items-center gap-2">
                <div className="grid size-8 place-items-center rounded-md bg-[color:var(--emerald-brand)]/15"><Sparkles className="size-4 text-[color:var(--emerald-brand)]" /></div>
                <div><p className="text-sm font-semibold">Genie</p><p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--emerald-brand)]">Online · GPT-4o + RAG</p></div>
              </div>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {msgs.map((m, i) => (
                <div key={i} className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${m.who === "ai" ? "border border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/5" : "ml-auto bg-muted/60"}`}>{m.text}</div>
              ))}
            </div>
            <div className="border-t border-border p-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {["Why is INFY up?","Should I book gains in TCS?","Best ELSS for FY26?","Retirement gap?"].map((p) => (
                  <button key={p} onClick={()=>{setMsgs(m=>[...m,{who:"me",text:p},{who:"ai",text:"Working on that…"}]);}} className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground hover:text-foreground">{p}</button>
                ))}
              </div>
              <form onSubmit={(e)=>{e.preventDefault();if(!val.trim())return;setMsgs(m=>[...m,{who:"me",text:val}]);setVal("");}}
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
                <input value={val} onChange={(e)=>setVal(e.target.value)} placeholder="Ask Genie anything about your money…" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                <Button size="icon"><Send className="size-4" /></Button>
              </form>
            </div>
          </Card>

          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Latest insights</p>
            {insights.slice(0,5).map((i) => (
              <Card key={i.id} className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-[color:var(--emerald-brand)]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--emerald-brand)]">{i.kind}</span>
                  <ConfidenceBadge value={i.confidence} />
                </div>
                <p className="text-sm font-semibold">{i.title}</p>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{i.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}