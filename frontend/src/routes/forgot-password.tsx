import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password · Fingenie" }] }),
  component: Forgot,
});

function Forgot() {
  return (
    <AuthShell title="Reset your password" subtitle="We'll email you a reset link."
      footer={<Link to="/login" className="text-[color:var(--emerald-brand)] hover:underline">Back to sign in</Link>}>
      <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@email.com" /></div>
      <Button className="w-full bg-[color:var(--emerald-brand)] text-background hover:bg-[color:var(--emerald-brand)]/90">Send reset link</Button>
    </AuthShell>
  );
}
