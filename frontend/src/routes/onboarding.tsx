import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Get Started · Fingenie" }] }),
  component: Onboarding,
});

const STEPS = ["Profile","Risk Profile","Goals","Broker"] as const;

function Onboarding() {
  const [step, setStep] = useState(0);
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <Link to="/"><Logo /></Link>
        <Link to="/dashboard" className="text-xs text-muted-foreground hover:text-foreground">Skip for now</Link>
      </header>
      <main className="mx-auto max-w-2xl px-4 py-10">
        <ol className="mb-8 grid grid-cols-4 gap-2">{STEPS.map((s,i)=>(
          <li key={s} className="flex items-center gap-2">
            <div className={cn("grid size-7 place-items-center rounded-full font-mono text-xs", i<=step ? "bg-[color:var(--emerald-brand)] text-[color:var(--primary-foreground)]" : "bg-muted text-muted-foreground")}>
              {i<step ? <Check className="size-3.5" /> : i+1}
            </div>
            <span className={cn("text-xs", i<=step?"text-foreground":"text-muted-foreground")}>{s}</span>
          </li>
        ))}</ol>

        <Card className="p-8">
          {step===0 && <>
            <h2 className="text-xl font-semibold">Tell us about yourself</h2>
            <p className="mt-1 text-sm text-muted-foreground">We'll personalize Genie for your situation.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-1"><Label>Full name</Label><Input placeholder="Aarav Mehta" /></div>
              <div className="space-y-1"><Label>Age</Label><Input type="number" placeholder="34" /></div>
              <div className="space-y-1"><Label>Monthly income</Label><Input placeholder="₹1,85,000" /></div>
              <div className="space-y-1"><Label>City</Label><Input placeholder="Bengaluru" /></div>
            </div>
          </>}
          {step===1 && <>
            <h2 className="text-xl font-semibold">What's your risk appetite?</h2>
            <p className="mt-1 text-sm text-muted-foreground">This shapes asset allocation suggestions.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">{["Conservative","Moderate","Aggressive"].map((r,i)=>(
              <button key={r} className={cn("rounded-xl border p-5 text-left transition", i===1 ? "border-[color:var(--emerald-brand)] bg-[color:var(--emerald-brand)]/5" : "border-border hover:border-[color:var(--emerald-brand)]/40")}>
                <p className="font-semibold">{r}</p>
                <p className="mt-1 text-xs text-muted-foreground">{i===0?"Capital protection first":i===1?"Balance of growth and stability":"Maximize long-term growth"}</p>
              </button>
            ))}</div>
          </>}
          {step===2 && <>
            <h2 className="text-xl font-semibold">What are you saving for?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Pick at least one goal. You can add more later.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">{["Retirement","House","Car","Child Education","Travel","Emergency Fund"].map((g)=>(
              <button key={g} className="rounded-xl border border-border p-4 text-left text-sm hover:border-[color:var(--emerald-brand)]/50">{g}</button>
            ))}</div>
          </>}
          {step===3 && <>
            <h2 className="text-xl font-semibold">Connect your broker</h2>
            <p className="mt-1 text-sm text-muted-foreground">We sync holdings via secure OAuth.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">{["Zerodha","Groww","Upstox","Angel One","ICICI Direct","Skip for now"].map((b)=>(
              <Link key={b} to={b==="Skip for now"?"/dashboard":"/broker-connect"} className="flex items-center justify-between rounded-lg border border-border p-3 text-sm hover:border-[color:var(--emerald-brand)]/50">
                <span>{b}</span>
                <span className="text-xs text-muted-foreground">→</span>
              </Link>
            ))}</div>
          </>}

          <div className="mt-8 flex justify-between">
            <Button variant="ghost" disabled={step===0} onClick={()=>setStep(s=>Math.max(0,s-1))}>Back</Button>
            {step<STEPS.length-1 ? <Button onClick={()=>setStep(s=>s+1)}>Continue</Button> : <Link to="/dashboard"><Button>Enter dashboard</Button></Link>}
          </div>
        </Card>
      </main>
    </div>
  );
}