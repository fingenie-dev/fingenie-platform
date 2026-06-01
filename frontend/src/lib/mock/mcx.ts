export type Commodity = {
  symbol: string; name: string; price: number; change: number;
  unit: string; volatility: number; forecast: number;
};

export const commodities: Commodity[] = [
  { symbol: "GOLD", name: "Gold", price: 71240, change: 1.2, unit: "/10g", volatility: 14.2, forecast: 73500 },
  { symbol: "SILVER", name: "Silver", price: 84615, change: 0.92, unit: "/kg", volatility: 22.1, forecast: 88200 },
  { symbol: "COPPER", name: "Copper", price: 832.4, change: 1.8, unit: "/kg", volatility: 18.7, forecast: 855 },
  { symbol: "CRUDEOIL", name: "Crude Oil", price: 6540, change: 2.1, unit: "/bbl", volatility: 28.4, forecast: 6720 },
  { symbol: "NATGAS", name: "Natural Gas", price: 168.2, change: -1.4, unit: "/mmBtu", volatility: 34.8, forecast: 162 },
];

export const commoditySeries = (base: number) =>
  Array.from({ length: 60 }, (_, i) => ({
    d: i,
    v: Math.round(base + Math.sin(i / 4) * base * 0.04 + (Math.random() - 0.5) * base * 0.02),
  }));
