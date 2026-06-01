export type Holding = {
  symbol: string;
  name: string;
  qty: number;
  avg: number;
  ltp: number;
  sector: string;
};

export const holdings: Holding[] = [
  { symbol: "RELIANCE", name: "Reliance Industries", qty: 25, avg: 2410, ltp: 2987.4, sector: "Energy" },
  { symbol: "HDFCBANK", name: "HDFC Bank", qty: 40, avg: 1480, ltp: 1672.15, sector: "Financials" },
  { symbol: "INFY", name: "Infosys", qty: 60, avg: 1320, ltp: 1845.7, sector: "IT" },
  { symbol: "TCS", name: "Tata Consultancy", qty: 12, avg: 3210, ltp: 4012.3, sector: "IT" },
  { symbol: "ITC", name: "ITC Ltd", qty: 200, avg: 380, ltp: 437.9, sector: "FMCG" },
  { symbol: "TATAMOTORS", name: "Tata Motors", qty: 80, avg: 620, ltp: 982.05, sector: "Auto" },
  { symbol: "BAJFINANCE", name: "Bajaj Finance", qty: 8, avg: 6700, ltp: 7240.5, sector: "Financials" },
  { symbol: "ASIANPAINT", name: "Asian Paints", qty: 15, avg: 2890, ltp: 2710.4, sector: "Materials" },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever", qty: 22, avg: 2540, ltp: 2398.6, sector: "FMCG" },
  { symbol: "SBIN", name: "State Bank of India", qty: 120, avg: 540, ltp: 814.25, sector: "Financials" },
];

export const totalInvested = holdings.reduce((s, h) => s + h.qty * h.avg, 0);
export const totalCurrent = holdings.reduce((s, h) => s + h.qty * h.ltp, 0);
export const todayPnL = 18420.55;
export const totalReturns = totalCurrent - totalInvested;
export const totalReturnsPct = (totalReturns / totalInvested) * 100;
export const netWorth = totalCurrent + 248000 + 1240000; // + cash + real estate
export const cashAvailable = 248000;

// 90-day portfolio value series
export const portfolioSeries = Array.from({ length: 90 }, (_, i) => {
  const base = totalInvested * 0.9;
  const growth = (totalCurrent - base) * (i / 89);
  const noise = Math.sin(i / 4) * 12000 + Math.cos(i / 7) * 8000;
  return {
    date: new Date(Date.now() - (89 - i) * 86400000).toISOString().slice(0, 10),
    value: Math.round(base + growth + noise),
  };
});

export const dailyPnL = Array.from({ length: 30 }, (_, i) => ({
  day: `D${i + 1}`,
  pnl: Math.round(Math.sin(i / 3) * 12000 + (Math.random() - 0.4) * 8000),
}));

export const monthlyReturns = [
  { m: "Jan", r: 2.1 }, { m: "Feb", r: -0.8 }, { m: "Mar", r: 3.4 },
  { m: "Apr", r: 1.2 }, { m: "May", r: 4.5 }, { m: "Jun", r: -1.6 },
  { m: "Jul", r: 2.9 }, { m: "Aug", r: 0.7 }, { m: "Sep", r: 3.2 },
  { m: "Oct", r: 1.8 }, { m: "Nov", r: 2.6 }, { m: "Dec", r: 4.1 },
];

export const allocation = [
  { name: "Equity", value: 62, fill: "var(--emerald-brand)" },
  { name: "Debt", value: 18, fill: "var(--deep-blue)" },
  { name: "Gold", value: 8, fill: "var(--gold)" },
  { name: "Cash", value: 7, fill: "var(--muted-foreground)" },
  { name: "Crypto", value: 5, fill: "var(--chart-4)" },
];

export const sectorAllocation = [
  { name: "Financials", value: 28 },
  { name: "IT", value: 22 },
  { name: "Energy", value: 14 },
  { name: "FMCG", value: 12 },
  { name: "Auto", value: 10 },
  { name: "Materials", value: 8 },
  { name: "Others", value: 6 },
];
