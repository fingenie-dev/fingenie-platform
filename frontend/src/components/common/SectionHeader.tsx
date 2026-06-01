import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, action }: { eyebrow?: string; title: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--emerald-brand)]">
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}
