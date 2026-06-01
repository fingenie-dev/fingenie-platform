import { type ReactNode, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Search, Sparkles, Send, Menu, X, Sun, Moon,
  LayoutDashboard, PieChart, Brain, Activity, Newspaper, Target,
  Sunset, Landmark, Banknote, Coins, Wallet, Receipt, Eye,
  BellRing, FileText, BarChart3, Settings as SettingsIcon } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/portfolio", label: "Portfolio", icon: PieChart },
  { to: "/ai-advisor", label: "AI Advisor", icon: Brain },
  { to: "/market", label: "Market Intelligence", icon: Activity },
  { to: "/news", label: "News Intelligence", icon: Newspaper },
  { to: "/goals", label: "Goals", icon: Target },
  { to: "/retirement", label: "Retirement Planner", icon: Sunset },
  { to: "/nps", label: "NPS Dashboard", icon: Landmark },
  { to: "/forex", label: "Forex Analytics", icon: Banknote },
  { to: "/mcx", label: "MCX Commodities", icon: Coins },
  { to: "/budget", label: "Budget Planner", icon: Wallet },
  { to: "/tax", label: "Tax Planner", icon: Receipt },
  { to: "/watchlists", label: "Watchlists", icon: Eye },
  { to: "/alerts", label: "Alerts", icon: BellRing },
  { to: "/documents", label: "Documents", icon: FileText },
  { to: "/reports", label: "Reports", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
] as const;

const PROMPTS = [
  "Why is my portfolio down today?",
  "Should I increase my SIP?",
  "Tax-loss harvesting ideas",
  "Is gold a buy at current levels?",
];

export function AppShell({ children }: { children: ReactNode }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [aiOpen, setAiOpen] = useState(true);
  const { theme, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-border bg-background/85 px-3 py-3 backdrop-blur md:px-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileNav(true)}>
            <Menu className="size-4" />
          </Button>
          <Link to="/"><Logo /></Link>
          <span className="hidden rounded-full border border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[color:var(--emerald-brand)] md:inline-flex">
            <span className="mr-1 size-1.5 animate-pulse-glow rounded-full bg-[color:var(--emerald-brand)]" />NSE · Live
          </span>
        </div>
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input placeholder="Search stocks, funds, commodities, AI knowledge…"
            className="w-full rounded-lg border border-border bg-card/50 py-2 pl-10 pr-12 text-sm placeholder:text-muted-foreground focus:border-[color:var(--emerald-brand)]/50 focus:outline-none" />
          <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground md:inline">⌘K</kbd>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="theme">
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-4" />
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-[color:var(--danger)]" />
          </Button>
          <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setAiOpen((v) => !v)}>
            <Sparkles className="size-4 text-[color:var(--emerald-brand)]" />
          </Button>
          <Link to="/settings" className="grid size-8 place-items-center rounded-full bg-[color:var(--emerald-brand)]/20 font-mono text-xs font-bold text-[color:var(--emerald-brand)]">AM</Link>
        </div>
      </header>

      <div className="grid xl:grid-cols-[240px_1fr_360px] lg:grid-cols-[240px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden border-r border-border p-3 lg:block">
          <SidebarNav pathname={pathname} />
        </aside>

        {/* Mobile sidebar */}
        {mobileNav && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-background/80 backdrop-blur" onClick={() => setMobileNav(false)} />
            <aside className="absolute left-0 top-0 h-full w-72 overflow-y-auto border-r border-border bg-card p-4">
              <div className="mb-4 flex items-center justify-between">
                <Logo />
                <Button variant="ghost" size="icon" onClick={() => setMobileNav(false)}><X className="size-4" /></Button>
              </div>
              <SidebarNav pathname={pathname} onNavigate={() => setMobileNav(false)} />
            </aside>
          </div>
        )}

        <main className="min-w-0 p-4 md:p-6">{children}</main>

        <aside className={cn(
          "border-l border-border bg-card/30 p-4",
          "hidden xl:block",
          aiOpen && "block fixed inset-y-0 right-0 z-40 w-[340px] bg-card xl:static xl:w-auto xl:bg-card/30",
        )}>
          <AIPanel onClose={() => setAiOpen(false)} />
        </aside>
      </div>
    </div>
  );
}

function SidebarNav({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="space-y-0.5 text-sm">
      {NAV.map(({ to, label, icon: Icon }) => {
        const active = pathname === to;
        return (
          <Link key={to} to={to} onClick={onNavigate} className={cn(
            "flex items-center gap-2.5 rounded-md px-3 py-2 transition-colors",
            active
              ? "bg-[color:var(--emerald-brand)]/12 text-[color:var(--emerald-brand)]"
              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          )}>
            <Icon className="size-4" />
            <span>{label}</span>
          </Link>
        );
      })}
      <div className="mt-6 rounded-lg border border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/5 p-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--emerald-brand)]">Broker</p>
        <p className="mt-1 text-sm font-medium">Zerodha · Synced</p>
        <p className="text-[10px] text-muted-foreground">2 min ago · 10 holdings</p>
      </div>
    </nav>
  );
}

function AIPanel({ onClose }: { onClose: () => void }) {
  const [msgs, setMsgs] = useState([
    { who: "ai", text: "Good morning, Aarav. Markets opened +0.8%. Your portfolio is up ₹18,420 today. Want today's playbook?" },
  ]);
  const [val, setVal] = useState("");
  const send = (q: string) => {
    if (!q.trim()) return;
    setMsgs((m) => [...m, { who: "me", text: q }, {
      who: "ai",
      text: "Based on your portfolio, I'd suggest reviewing IT exposure (28% vs 18% benchmark) and considering tax-loss harvesting in ASIANPAINT before March. Confidence: 87%.",
    }]);
    setVal("");
  };
  return (
    <div className="flex h-[calc(100vh-72px)] flex-col">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-md bg-[color:var(--emerald-brand)]/20">
            <Sparkles className="size-3.5 text-[color:var(--emerald-brand)]" />
          </div>
          <div>
            <p className="text-sm font-semibold">Genie AI</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--emerald-brand)]">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={onClose}><X className="size-4" /></Button>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto pr-1">
        {msgs.map((m, i) => (
          <div key={i} className={cn(
            "max-w-[88%] rounded-lg p-3 text-xs leading-relaxed",
            m.who === "ai"
              ? "border border-border bg-background"
              : "ml-auto bg-[color:var(--emerald-brand)]/15 text-foreground",
          )}>{m.text}</div>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {PROMPTS.map((p) => (
            <button key={p} onClick={() => send(p)} className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[10px] text-muted-foreground hover:border-[color:var(--emerald-brand)]/40 hover:text-foreground">{p}</button>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); send(val); }} className="flex items-center gap-2 rounded-lg border border-border bg-background p-2">
          <input value={val} onChange={(e) => setVal(e.target.value)} placeholder="Ask Genie anything…" className="flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground" />
          <Button size="icon" className="size-7"><Send className="size-3" /></Button>
        </form>
        <p className="text-center font-mono text-[9px] uppercase tracking-widest text-muted-foreground">AES-256 · RAG · SEBI compliant</p>
      </div>
    </div>
  );
}