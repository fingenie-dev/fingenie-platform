export type Insight = {
  id: string;
  kind: "risk" | "opportunity" | "tax" | "goal" | "rebalance" | "retirement";
  title: string;
  body: string;
  confidence: number;
  cta: string;
};

export const insights: Insight[] = [
  { id: "i1", kind: "risk", title: "Portfolio Concentration Alert",
    body: "Your top 3 holdings make up 47% of equity. IT exposure at 28% is 1.6× benchmark. Consider trimming TCS or adding defensives.",
    confidence: 92, cta: "Rebalance Plan" },
  { id: "i2", kind: "opportunity", title: "Banking Sector Mispriced",
    body: "PSU banks trading at 0.92× FY26E P/B vs 5-yr mean 1.18×. Genie suggests 8% tactical add — SBIN, BOB.",
    confidence: 81, cta: "Show Trade Idea" },
  { id: "i3", kind: "tax", title: "₹42,300 LTCG Harvesting Window",
    body: "Booking partial gains in HDFCBANK before March exhausts your ₹1L LTCG exemption. Tax-loss in ASIANPAINT offsets ₹18K.",
    confidence: 98, cta: "Run Harvest" },
  { id: "i4", kind: "rebalance", title: "Increase SIP by ₹4,500",
    body: "Bumping monthly SIP from ₹35K to ₹39.5K cuts your retirement gap by 14 months at current return assumptions.",
    confidence: 87, cta: "Modify SIP" },
  { id: "i5", kind: "goal", title: "Child Education Goal On-Track",
    body: "Projected corpus ₹62L vs target ₹58L (2031). Buffer of 7%. Genie will alert if drift exceeds 5%.",
    confidence: 95, cta: "View Goal" },
  { id: "i6", kind: "retirement", title: "Retirement Readiness 72/100",
    body: "Inflation-adjusted shortfall ₹1.4 Cr at 60. Pre-tax NPS Tier-1 contribution of ₹50K/yr closes 62% of gap.",
    confidence: 89, cta: "Open Planner" },
  { id: "i7", kind: "opportunity", title: "Gold Allocation Below Optimal",
    body: "Current 8% vs Genie-recommended 10-12% given Fed cut expectations. SGB Series IX opens Feb 18.",
    confidence: 76, cta: "Add SGB" },
  { id: "i8", kind: "risk", title: "USDINR Hedge Suggested",
    body: "INR-denominated tuition liability in 2027. Currency forward locks ₹83.40; saves ~3.2% in worst case.",
    confidence: 68, cta: "Discuss" },
];

export const aiHealthScore = 84;
export const aiConfidence = 91;
