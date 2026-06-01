import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account · Fingenie" }] }),
  component: Signup,
});

function Signup() {
  return (
    <AuthShell title="Open your console" subtitle="14-day Pro trial. No card required."
      footer={<>Have an account? <Link to="/login" className="text-[color:var(--emerald-brand)] hover:underline">Sign in</Link></>}>
      <Button variant="outline" className="w-full">Continue with Google</Button>
      <div className="relative my-2 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="bg-background px-2 relative z-10">or</span>
        <span className="absolute inset-x-0 top-1/2 h-px bg-border" />
      </div>
      <div className="space-y-2"><Label>Full name</Label><Input placeholder="Aarav Mehta" /></div>
      <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@email.com" /></div>
      <div className="space-y-2"><Label>Mobile</Label><Input placeholder="+91 98xxx xx412" /></div>
      <Button asChild className="w-full bg-[color:var(--emerald-brand)] text-background hover:bg-[color:var(--emerald-brand)]/90">
        <Link to="/dashboard">Create account →</Link>
      </Button>
      <p className="text-[11px] text-muted-foreground">By continuing you agree to our Terms & Privacy Policy.</p>
    </AuthShell>
  );
}
