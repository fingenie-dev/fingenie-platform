export type Goal = {
  id: string; name: string; target: number; current: number;
  by: string; sip: number; risk: "Low" | "Moderate" | "High"; icon: string;
};

export const goals: Goal[] = [
  { id: "g1", name: "Retirement", target: 30000000, current: 11240000, by: "2045", sip: 35000, risk: "Moderate", icon: "Sunset" },
  { id: "g2", name: "Child Education", target: 5800000, current: 2640000, by: "2031", sip: 18000, risk: "Moderate", icon: "GraduationCap" },
  { id: "g3", name: "House Purchase", target: 8500000, current: 3120000, by: "2029", sip: 42000, risk: "Low", icon: "Home" },
  { id: "g4", name: "Car Upgrade", target: 1800000, current: 980000, by: "2026", sip: 22000, risk: "Low", icon: "Car" },
  { id: "g5", name: "Emergency Fund", target: 600000, current: 480000, by: "2025", sip: 8000, risk: "Low", icon: "ShieldCheck" },
  { id: "g6", name: "Europe Trip", target: 450000, current: 162000, by: "2027", sip: 6500, risk: "Low", icon: "Plane" },
];

export const retirement = {
  corpusTarget: 30000000,
  corpusCurrent: 11240000,
  monthlyExpense: 85000,
  inflationAdjusted: 230000,
  readiness: 72,
  ageNow: 34, ageRetire: 60,
  projected: Array.from({ length: 27 }, (_, i) => ({
    year: 2024 + i,
    corpus: Math.round(11240000 * Math.pow(1.12, i)),
    target: Math.round(30000000 * Math.pow(1.06, i)),
  })),
};

export const nps = {
  tier1: 840000, tier2: 320000,
  expectedAnnuity: 48000,
  cagr: 11.8,
  health: 78,
  allocation: [
    { name: "Equity (E)", value: 65 },
    { name: "Corp Bonds (C)", value: 20 },
    { name: "Govt Sec (G)", value: 15 },
  ],
};
