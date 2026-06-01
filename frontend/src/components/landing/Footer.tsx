import { Logo } from "@/components/common/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The AI financial copilot for India. Built with regulatory compliance and bank-grade security at the core.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">SEBI INA000012345 · ISO 27001</p>
          </div>
          <div>
            <h6 className="mb-4 text-[11px] font-bold uppercase tracking-widest">Product</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Portfolio Intelligence</li><li>AI Advisor</li><li>Retirement & NPS</li>
              <li>Forex Analytics</li><li>MCX Intelligence</li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 text-[11px] font-bold uppercase tracking-widest">Company</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About</li><li>Compliance</li><li>Security</li><li>Careers</li><li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-[10px] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="max-w-4xl leading-relaxed">
            Investments in securities market are subject to market risks. Read all the related documents carefully before investing.
            Past performance is not indicative of future returns. Fingenie Technologies Pvt Ltd.
          </p>
          <p className="font-mono uppercase tracking-widest">© 2026 Fingenie · Made in Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
