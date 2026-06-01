import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell/AppShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { user } from "@/lib/mock/user";

const TABS = ["Profile","Security","Brokers","Notifications","Billing","Privacy"] as const;

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings · Fingenie" }] }),
  component: Settings,
});

function Settings() {
  const [tab, setTab] = useState<typeof TABS[number]>("Profile");
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Account" title="Settings" />
        <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
          <nav className="space-y-1">{TABS.map((t)=>(
            <button key={t} onClick={()=>setTab(t)} className={`block w-full rounded-md px-3 py-2 text-left text-sm ${tab===t?"bg-[color:var(--emerald-brand)]/12 text-[color:var(--emerald-brand)]":"text-muted-foreground hover:bg-muted/50 hover:text-foreground"}`}>{t}</button>
          ))}</nav>

          {tab==="Profile" && (
            <Card className="p-6">
              <div className="flex items-center gap-4 border-b border-border pb-5">
                <div className="grid size-14 place-items-center rounded-full bg-[color:var(--emerald-brand)]/20 font-mono text-lg font-bold text-[color:var(--emerald-brand)]">AM</div>
                <div><p className="text-base font-semibold">{user.name}</p><p className="text-xs text-muted-foreground">{user.plan} · since 2023</p></div>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="space-y-1"><Label>Full name</Label><Input defaultValue={user.name} /></div>
                <div className="space-y-1"><Label>Email</Label><Input defaultValue={user.email} /></div>
                <div className="space-y-1"><Label>Phone</Label><Input defaultValue={user.phone} /></div>
                <div className="space-y-1"><Label>PAN</Label><Input defaultValue="ABCDE1234F" /></div>
              </div>
              <Button className="mt-6">Save changes</Button>
            </Card>
          )}

          {tab==="Security" && (
            <Card className="space-y-5 p-6">
              <Row label="Two-factor authentication" desc="Authenticator app · enabled" checked />
              <Row label="Biometric login" desc="Face ID on iOS, Fingerprint on Android" checked />
              <Row label="Device binding" desc="Restrict logins to verified devices" checked />
              <Row label="Login alerts" desc="Email on new device sign-in" />
              <Button variant="outline">Change password</Button>
            </Card>
          )}

          {tab==="Brokers" && (
            <Card className="p-6">
              <p className="mb-4 text-sm font-semibold">Connected Brokers</p>
              <div className="space-y-3">{user.brokers.map((b)=>(
                <div key={b.name} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-md bg-muted font-mono text-sm font-bold">{b.logo}</div>
                    <div><p className="text-sm font-medium">{b.name}</p>
                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{b.status}</p></div>
                  </div>
                  <Button variant={b.status==="connected"?"outline":"default"} size="sm">{b.status==="connected"?"Manage":"Connect"}</Button>
                </div>
              ))}</div>
            </Card>
          )}

          {tab==="Notifications" && (
            <Card className="space-y-5 p-6">
              <Row label="Portfolio alerts" desc="Daily P&L summary" checked />
              <Row label="AI insights" desc="When Genie spots opportunities" checked />
              <Row label="News digest" desc="Top 5 stories at 8 AM" checked />
              <Row label="Price alerts" desc="Custom price triggers" />
              <Row label="Goal milestones" desc="Every 10% progress" checked />
            </Card>
          )}

          {tab==="Billing" && (
            <Card className="p-6">
              <p className="text-sm">Current plan</p>
              <p className="mt-1 text-2xl font-bold">{user.plan}</p>
              <p className="text-xs text-muted-foreground">₹499 / month · renews 15 Feb 2026</p>
              <div className="mt-5 flex gap-2"><Button>Upgrade to Wealth</Button><Button variant="outline">Cancel</Button></div>
            </Card>
          )}

          {tab==="Privacy" && (
            <Card className="space-y-5 p-6">
              <Row label="Personalized AI" desc="Train Genie on your portfolio" checked />
              <Row label="Share aggregated data" desc="Anonymous benchmarks" />
              <Row label="Marketing emails" desc="Product updates from Fingenie" />
              <Button variant="outline" className="text-[color:var(--danger)]">Download my data</Button>
            </Card>
          )}
        </div>
      </div>
    </AppShell>
  );
}

function Row({ label, desc, checked }: { label: string; desc: string; checked?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div><p className="text-sm font-medium">{label}</p><p className="text-xs text-muted-foreground">{desc}</p></div>
      <Switch defaultChecked={checked} />
    </div>
  );
}