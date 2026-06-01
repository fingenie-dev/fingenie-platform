import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/otp")({
  head: () => ({ meta: [{ title: "Verify · Fingenie" }] }),
  component: OTP,
});

function OTP() {
  const [vals, setVals] = useState(["","","","","",""]);
  const set = (i: number, v: string) => setVals((a) => a.map((x,j)=>j===i?v.slice(-1):x));
  return (
    <AuthShell title="Enter verification code" subtitle="Sent to +91 98xxx xx412 · valid for 5 min"
      footer={<Link to="/login" className="text-[color:var(--emerald-brand)]">Use a different number</Link>}>
      <div className="flex gap-2">{vals.map((v,i)=>(
        <input key={i} value={v} onChange={(e)=>set(i,e.target.value)} maxLength={1}
          className="size-12 rounded-lg border border-border bg-card text-center font-mono text-xl focus:border-[color:var(--emerald-brand)]/50 focus:outline-none" />
      ))}</div>
      <Link to="/mfa"><Button className="w-full">Verify</Button></Link>
      <p className="text-center text-xs text-muted-foreground">Resend code in <span className="font-mono">00:42</span></p>
    </AuthShell>
  );
}