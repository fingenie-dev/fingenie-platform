import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";

export function LandingNav() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      <Link to="/"><Logo /></Link>
      <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        <a href="#features" className="hover:text-[color:var(--emerald-brand)]">Wealth</a>
        <a href="#ai" className="hover:text-[color:var(--emerald-brand)]">Intelligence</a>
        <a href="#markets" className="hover:text-[color:var(--emerald-brand)]">Markets</a>
        <a href="#pricing" className="hover:text-[color:var(--emerald-brand)]">Pricing</a>
        <a href="#faq" className="hover:text-[color:var(--emerald-brand)]">FAQ</a>
      </div>
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
          <Link to="/login">Sign in</Link>
        </Button>
        <Button asChild size="sm" className="bg-[color:var(--emerald-brand)] text-background hover:bg-[color:var(--emerald-brand)]/90">
          <Link to="/signup">Open Console</Link>
        </Button>
      </div>
    </nav>
  );
}
