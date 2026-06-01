import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendDelta } from "./TrendDelta";

type Props = {
  label: string;
  value: ReactNode;
  delta?: number;
  hint?: string;
  icon?: ReactNode;
  accent?: "emerald" | "blue" | "gold" | "muted";
  className?: string;
};

const accents: Record<NonNullable<Props["accent"]>, string> = {
  emerald: "before:bg-[color:var(--emerald-brand)]",
  blue: "before:bg-[color:var(--deep-blue)]",
  gold: "before:bg-[color:var(--gold)]",
  muted: "before:bg-muted-foreground/30",
};

export function KpiCard({ label, value, delta, hint, icon, accent = "emerald", className }: Props) {
  return (
    <Card className={cn(
      "relative overflow-hidden p-5 transition-colors hover:border-[color:var(--emerald-brand)]/40",
      "before:absolute before:left-0 before:top-0 before:h-full before:w-[2px]",
      accents[accent],
      className,
    )}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
        {icon && <span className="text-muted-foreground">{icon}</span>}
      </div>
      <p className="mt-3 font-mono text-2xl font-semibold tabular-nums">{value}</p>
      <div className="mt-2 flex items-center justify-between">
        {delta !== undefined && <TrendDelta value={delta} />}
        {hint && <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{hint}</span>}
      </div>
    </Card>
  );
}
