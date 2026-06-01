export const indices = [
  { name: "NIFTY 50", value: 22453.20, change: 0.85, prev: 22264.13 },
  { name: "SENSEX", value: 74119.39, change: 0.72, prev: 73589.27 },
  { name: "BANK NIFTY", value: 47284.55, change: -0.34, prev: 47445.92 },
  { name: "NIFTY IT", value: 38120.15, change: 1.45, prev: 37576.72 },
];

export const tickers = [
  { sym: "NIFTY 50", val: "22,453.20", chg: "+0.85%", up: true },
  { sym: "SENSEX", val: "74,119.39", chg: "+0.72%", up: true },
  { sym: "BANKNIFTY", val: "47,284.55", chg: "-0.34%", up: false },
  { sym: "USDINR", val: "83.12", chg: "-0.04%", up: false },
  { sym: "EURINR", val: "90.41", chg: "+0.18%", up: true },
  { sym: "MCX GOLD", val: "71,240", chg: "+1.20%", up: true },
  { sym: "MCX SILVER", val: "84,615", chg: "+0.92%", up: true },
  { sym: "MCX CRUDE", val: "6,540", chg: "+2.10%", up: true },
  { sym: "BTC", val: "₹56.2L", chg: "+1.40%", up: true },
];

export const gainers = [
  { symbol: "TATAMOTORS", price: 982.05, change: 5.8 },
  { symbol: "ADANIENT", price: 3120.4, change: 4.7 },
  { symbol: "INFY", price: 1845.7, change: 3.9 },
  { symbol: "WIPRO", price: 514.8, change: 3.6 },
  { symbol: "HCLTECH", price: 1582.3, change: 3.1 },
];

export const losers = [
  { symbol: "ASIANPAINT", price: 2710.4, change: -2.8 },
  { symbol: "NESTLEIND", price: 2412.6, change: -2.1 },
  { symbol: "BRITANNIA", price: 4820.5, change: -1.9 },
  { symbol: "HINDUNILVR", price: 2398.6, change: -1.6 },
  { symbol: "DRREDDY", price: 5840.2, change: -1.3 },
];

export const mostActive = [
  { symbol: "RELIANCE", volume: "2.1Cr", price: 2987.4 },
  { symbol: "SBIN", volume: "1.8Cr", price: 814.25 },
  { symbol: "TATAMOTORS", volume: "1.4Cr", price: 982.05 },
  { symbol: "ITC", volume: "1.2Cr", price: 437.9 },
  { symbol: "HDFCBANK", volume: "98L", price: 1672.15 },
];

export const sectorHeatmap = [
  { name: "IT", change: 2.1 },
  { name: "Banking", change: -0.4 },
  { name: "Auto", change: 3.2 },
  { name: "Pharma", change: 0.8 },
  { name: "FMCG", change: -1.1 },
  { name: "Energy", change: 1.6 },
  { name: "Metals", change: 2.5 },
  { name: "Realty", change: -0.8 },
  { name: "Media", change: 1.2 },
  { name: "Telecom", change: 0.4 },
  { name: "Infra", change: 1.8 },
  { name: "PSU", change: 2.9 },
];

export const fearGreed = 64; // 0-100
export const marketSentiment = "Bullish";

export const globalMarkets = [
  { name: "Dow Jones", value: "38,712", chg: 0.42 },
  { name: "S&P 500", value: "5,128", chg: 0.61 },
  { name: "NASDAQ", value: "16,310", chg: 0.94 },
  { name: "FTSE 100", value: "8,247", chg: -0.18 },
  { name: "Nikkei", value: "39,512", chg: 1.21 },
  { name: "Hang Seng", value: "17,283", chg: -0.74 },
];

export const economicEvents = [
  { time: "10:00", event: "RBI Monetary Policy Statement", impact: "high" as const },
  { time: "11:30", event: "India CPI Inflation YoY", impact: "high" as const },
  { time: "14:00", event: "US Non-Farm Payrolls", impact: "high" as const },
  { time: "16:00", event: "ECB Interest Rate Decision", impact: "medium" as const },
  { time: "18:30", event: "Crude Oil Inventories", impact: "medium" as const },
];

export const trending = ["TATAPOWER", "ZOMATO", "IRCTC", "PAYTM", "DMART", "ADANIGREEN"];
