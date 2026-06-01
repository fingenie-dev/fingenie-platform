const items = [
  { name: "Priya Sharma", role: "Product Manager, Bengaluru", quote: "Genie spotted a sector concentration risk my advisor missed for 3 years. Saved me from a 14% drawdown in October." },
  { name: "Rohit Kapoor", role: "First-time investor, Pune", quote: "I was paralyzed by mutual fund choices. Fingenie built me a 3-fund portfolio in under 5 minutes. SIP set, done." },
  { name: "Anita Iyer", role: "Doctor, Chennai", quote: "The retirement planner accounts for medical inflation. Finally a tool that thinks like an Indian, not a Silicon Valley algo." },
  { name: "Vikram Joshi", role: "MCX trader, Mumbai", quote: "AI forecasts on crude and gold are eerily accurate. The supply-chain context layer is a game-changer." },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--emerald-brand)]">Trusted by India's investors</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">50,000+ portfolios. One brain.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((t) => (
          <figure key={t.name} className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6">
            <blockquote className="text-sm leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-5">
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
