export type NewsItem = {
  id: string;
  headline: string;
  summary: string;
  source: string;
  time: string;
  category: "Markets" | "Economy" | "RBI" | "SEBI" | "Corporate" | "Global" | "Commodities" | "Forex";
  impact: number; // 0-100
  sentiment: "positive" | "neutral" | "negative";
  sectors: string[];
  stocks: string[];
  risk: "low" | "medium" | "high";
};

export const news: NewsItem[] = [
  {
    id: "n1",
    headline: "RBI holds repo rate at 6.5%, signals dovish tilt for FY26",
    summary: "MPC voted 5-1 to hold; governor highlighted easing inflation trajectory and improving growth outlook. Bond yields softened 4 bps.",
    source: "Mint", time: "2h ago", category: "RBI", impact: 88, sentiment: "positive",
    sectors: ["Banking", "Realty", "Auto"], stocks: ["HDFCBANK", "ICICIBANK", "DLF"], risk: "low",
  },
  {
    id: "n2",
    headline: "Tata Motors Q3: PV margins surge to 8.4%, JLR guidance raised",
    summary: "Operating leverage and EV mix lift India PV margin; JLR raises FY EBIT margin to 8.5%+. Brokerages turn constructive.",
    source: "Bloomberg", time: "3h ago", category: "Corporate", impact: 74, sentiment: "positive",
    sectors: ["Auto"], stocks: ["TATAMOTORS"], risk: "low",
  },
  {
    id: "n3",
    headline: "SEBI tightens F&O eligibility framework; mid-cap impact likely",
    summary: "Revised liquidity and turnover thresholds may shrink the derivatives universe by ~25 names. Short-term volatility expected.",
    source: "Economic Times", time: "5h ago", category: "SEBI", impact: 71, sentiment: "negative",
    sectors: ["Broking", "Mid-cap"], stocks: ["ANGELONE", "MOTILALOFS"], risk: "medium",
  },
  {
    id: "n4",
    headline: "Crude slips below $78 on demand concerns; OMC margins to expand",
    summary: "Brent down 1.8% on weak China PMI. Indian OMCs likely to see ₹3-4/L marketing margin tailwind if levels sustain.",
    source: "Reuters", time: "6h ago", category: "Commodities", impact: 62, sentiment: "positive",
    sectors: ["Oil & Gas"], stocks: ["IOC", "BPCL", "HPCL"], risk: "low",
  },
  {
    id: "n5",
    headline: "USD/INR breaches 83.20 intraday; RBI intervention suspected",
    summary: "Pair recovered to 83.12 after suspected PSB selling. FX reserves at all-time high $645bn provides cushion.",
    source: "CNBC TV18", time: "8h ago", category: "Forex", impact: 68, sentiment: "neutral",
    sectors: ["IT", "Pharma", "Importers"], stocks: ["INFY", "TCS"], risk: "medium",
  },
  {
    id: "n6",
    headline: "Nifty IT hits 52-week high on AI capex commentary from US peers",
    summary: "Microsoft + Meta capex guides boost Indian IT services; TCS, Infy, HCLTech up 2-4%.",
    source: "Moneycontrol", time: "1d ago", category: "Markets", impact: 79, sentiment: "positive",
    sectors: ["IT"], stocks: ["TCS", "INFY", "HCLTECH", "WIPRO"], risk: "low",
  },
  {
    id: "n7",
    headline: "India CPI eases to 4.83%, lowest in 11 months",
    summary: "Food disinflation drives headline lower; opens door for RBI to consider rate cuts in H2 FY26.",
    source: "Mint", time: "1d ago", category: "Economy", impact: 82, sentiment: "positive",
    sectors: ["Consumption", "Banking"], stocks: ["HINDUNILVR", "ITC"], risk: "low",
  },
  {
    id: "n8",
    headline: "Gold scales record ₹71,500 on safe-haven bid; silver outperforms",
    summary: "Geopolitical risk premium and central bank buying push gold higher. Silver up 1.8% on industrial demand.",
    source: "Bloomberg", time: "1d ago", category: "Commodities", impact: 67, sentiment: "neutral",
    sectors: ["Jewellery", "Mining"], stocks: ["TITAN", "HINDZINC"], risk: "low",
  },
  {
    id: "n9",
    headline: "Fed minutes hint at one rate cut in 2026; EM flows positive",
    summary: "FOMC participants saw inflation moderating; FII inflows to India touched ₹8,400 Cr this week.",
    source: "Reuters", time: "2d ago", category: "Global", impact: 73, sentiment: "positive",
    sectors: ["Banking", "IT"], stocks: ["HDFCBANK", "ICICIBANK"], risk: "low",
  },
  {
    id: "n10",
    headline: "Adani Green commissions 1GW solar plant in Khavda",
    summary: "World's largest single-location renewable park crosses 3GW operational. PPA already tied at ₹2.42/unit.",
    source: "Business Standard", time: "2d ago", category: "Corporate", impact: 54, sentiment: "positive",
    sectors: ["Renewables"], stocks: ["ADANIGREEN"], risk: "medium",
  },
];
