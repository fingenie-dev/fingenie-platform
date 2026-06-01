import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in · Fingenie" }] }),
  component: Login,
});

function Login() {
  return (
    <AuthShell title="Welcome back" subtitle="Sign in to your AI wealth console."
      footer={<>New to Fingenie? <Link to="/signup" className="text-[color:var(--emerald-brand)] hover:underline">Create account</Link></>}>
      <Button variant="outline" className="w-full">Continue with Google</Button>
      <div className="relative my-2 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="bg-background px-2 relative z-10">or</span>
        <span className="absolute inset-x-0 top-1/2 h-px bg-border" />
      </div>
      <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@email.com" defaultValue="aarav@fingenie.app" /></div>
      <div className="space-y-2">
        <div className="flex items-center justify-between"><Label>Password</Label>
          <Link to="/forgot-password" className="text-xs text-muted-foreground hover:text-foreground">Forgot?</Link>
        </div>
        <Input type="password" defaultValue="••••••••" />
      </div>
      <Button asChild className="w-full bg-[color:var(--emerald-brand)] text-background hover:bg-[color:var(--emerald-brand)]/90">
        <Link to="/dashboard">Sign in →</Link>
      </Button>
    </AuthShell>
  );
}
