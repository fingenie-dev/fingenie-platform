import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Smartphone, Mail, KeyRound } from "lucide-react";

export const Route = createFileRoute("/mfa")({
  head: () => ({ meta: [{ title: "Multi-Factor · Fingenie" }] }),
  component: MFA,
});

const METHODS = [
  { i: Smartphone, t: "Authenticator app", d: "TOTP from Google/Authy", best: true },
  { i: KeyRound, t: "Hardware key", d: "YubiKey / FIDO2" },
  { i: Mail, t: "Email code", d: "Sent to a••••@fingenie.app" },
];

function MFA() {
  return (
    <AuthShell title="Add an extra layer" subtitle="Choose how to verify it's you on every device."
      footer={<Link to="/dashboard" className="text-muted-foreground hover:text-foreground">Set up later</Link>}>
      <div className="space-y-2">{METHODS.map(({ i: Icon, t, d, best }) => (
        <button key={t} className="flex w-full items-center gap-3 rounded-lg border border-border bg-card/50 p-3 text-left hover:border-[color:var(--emerald-brand)]/40">
          <Icon className="size-5 text-[color:var(--emerald-brand)]" />
          <div className="flex-1"><p className="text-sm font-medium">{t}</p><p className="text-xs text-muted-foreground">{d}</p></div>
          {best && <span className="rounded bg-[color:var(--emerald-brand)]/15 px-1.5 py-0.5 text-[10px] font-bold uppercase text-[color:var(--emerald-brand)]">Recommended</span>}
        </button>
      ))}</div>
      <Link to="/onboarding"><Button className="w-full"><ShieldCheck className="mr-2 size-4" />Continue</Button></Link>
    </AuthShell>
  );
}