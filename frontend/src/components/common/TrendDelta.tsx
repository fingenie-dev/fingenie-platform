import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrendDelta({ value, suffix = "%", className }: { value: number; suffix?: string; className?: string }) {
  const up = value >= 0;
  return (
    <span className={cn(
      "inline-flex items-center gap-0.5 text-xs font-medium tabular-nums",
      up ? "text-[color:var(--success)]" : "text-[color:var(--danger)]",
      className,
    )}>
      {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
      {up ? "+" : ""}{value.toFixed(2)}{suffix}
    </span>
  );
}
