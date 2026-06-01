import { cn } from "@/lib/utils";

export function ConfidenceBadge({ value, className }: { value: number; className?: string }) {
  const tone = value >= 85 ? "text-[color:var(--success)] border-[color:var(--success)]/30 bg-[color:var(--success)]/10"
    : value >= 70 ? "text-[color:var(--gold)] border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10"
    : "text-muted-foreground border-border bg-muted";
  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider",
      tone, className,
    )}>
      <span className="size-1 rounded-full bg-current animate-pulse-glow" />
      AI {value}%
    </span>
  );
}
