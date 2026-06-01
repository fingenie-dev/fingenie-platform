import { tickers } from "@/lib/mock/market";
import { cn } from "@/lib/utils";

export function TickerStrip() {
  const items = [...tickers, ...tickers];
  return (
    <div className="overflow-hidden border-y border-border/60 bg-background/60 py-2 backdrop-blur">
      <div className="flex animate-marquee items-center gap-10 whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-wider">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-muted-foreground">{t.sym}</span>
            <span className="text-foreground/90">{t.val}</span>
            <span className={cn(t.up ? "text-[color:var(--success)]" : "text-[color:var(--danger)]")}>{t.chg}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
