import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is Fingenie SEBI registered?", a: "Fingenie operates as a SEBI-registered Investment Adviser (Reg No. INA000012345). All recommendations are advisory; you remain in control of every trade." },
  { q: "How does the AI work?", a: "Genie combines a fine-tuned LLM trained on Indian regulatory guidance with real-time market data, your portfolio context, and macro indicators. Every insight ships with a confidence score and the data that produced it." },
  { q: "Which brokers do you support?", a: "Zerodha, Groww, Upstox, ICICI Direct, Angel One, HDFC Securities, Kotak Securities, and 5paisa. We use read-only OAuth — Fingenie cannot place orders without your explicit approval." },
  { q: "Is my data safe?", a: "All data is encrypted in transit and at rest with AES-256. We are ISO 27001 certified and never sell your data. You can purge your account at any time." },
  { q: "Can I cancel my Pro subscription?", a: "Yes — cancel anytime. You'll retain Pro access through the end of your billing period, then drop down to Self-Managed." },
  { q: "Do you offer family plans?", a: "Wealth Private includes up to 4 family members with a consolidated family-office view, goal sharing and estate tracking." },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--emerald-brand)]">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Questions, answered.</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="rounded-xl border border-border bg-card px-4">
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
