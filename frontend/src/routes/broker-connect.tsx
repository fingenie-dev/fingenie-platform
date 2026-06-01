import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/common/Logo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { user } from "@/lib/mock/user";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/broker-connect")({
  head: () => ({ meta: [{ title: "Connect Broker · Fingenie" }] }),
  component: BrokerConnect,
});

function BrokerConnect() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <Link to="/"><Logo /></Link>
        <Link to="/dashboard" className="text-xs text-muted-foreground hover:text-foreground">Skip</Link>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">Connect your broker</h1>
        <p className="mt-2 text-sm text-muted-foreground">Secure OAuth · read-only access · we never store credentials.</p>
        <div className="mt-3 flex items-center gap-2 text-xs text-[color:var(--emerald-brand)]"><ShieldCheck className="size-4" />AES-256 token encryption · SEBI compliant</div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">{user.brokers.map((b)=>(
          <Card key={b.name} className="flex items-center gap-4 p-5">
            <div className="grid size-12 place-items-center rounded-md bg-muted font-mono text-lg font-bold">{b.logo}</div>
            <div className="flex-1">
              <p className="font-semibold">{b.name}</p>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{b.status}</p>
            </div>
            <Button variant={b.status==="connected"?"outline":"default"} size="sm">
              {b.status==="connected"?"Manage":"Connect"}
            </Button>
          </Card>
        ))}</div>

        <p className="mt-10 text-center text-xs text-muted-foreground">Not seeing your broker? <a className="text-[color:var(--emerald-brand)]" href="#">Request integration →</a></p>
      </main>
    </div>
  );
}