import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/common/Logo";

export function AuthShell({ title, subtitle, children, footer }: {
  title: string; subtitle?: string; children: ReactNode; footer?: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden border-r border-border bg-card/50 lg:block">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--emerald-brand)]/15 blur-3xl" />
        <div className="relative z-10 flex h-full flex-col justify-between p-10">
          <Link to="/"><Logo /></Link>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--emerald-brand)]">Genie AI</p>
            <p className="mt-3 max-w-md text-3xl font-semibold leading-tight">
              "Your IT exposure is 1.6× benchmark. Rebalance 8% to defensives — drawdown risk drops 22%."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— Genie, on Aarav's portfolio · this morning</p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">SEBI INA000012345 · ISO 27001</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8"><Link to="/"><Logo /></Link></div>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-8 space-y-4">{children}</div>
          {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
        </div>
      </div>
    </div>
  );
}
