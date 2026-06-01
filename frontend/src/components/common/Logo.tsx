import { cn } from "@/lib/utils";

export function Logo({ className, mark = false }: { className?: string; mark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold tracking-tight", className)}>
      <span className="relative grid size-7 place-items-center rounded-md bg-[color:var(--emerald-brand)] shadow-[0_0_20px_-4px_var(--emerald-brand)]">
        <span className="size-3 rounded-full bg-background" />
      </span>
      {!mark && <span className="text-base">Fingenie</span>}
    </span>
  );
}
