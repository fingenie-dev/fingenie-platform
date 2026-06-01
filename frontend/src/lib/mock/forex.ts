export type Currency = { pair: string; rate: number; change: number };

export const currencies: Currency[] = [
  { pair: "USD/INR", rate: 83.12, change: -0.04 },
  { pair: "EUR/INR", rate: 90.41, change: 0.18 },
  { pair: "GBP/INR", rate: 105.27, change: 0.32 },
  { pair: "AED/INR", rate: 22.63, change: -0.02 },
  { pair: "JPY/INR", rate: 0.55, change: -0.21 },
  { pair: "SGD/INR", rate: 61.84, change: 0.09 },
];

export const fxSeries = (base: number) =>
  Array.from({ length: 60 }, (_, i) => ({
    d: i,
    v: +(base + Math.sin(i / 5) * 0.6 + Math.cos(i / 9) * 0.4 + (Math.random() - 0.5) * 0.15).toFixed(3),
  }));

export const fxVolatility = 12.4;
export const fxForecast = { pair: "USD/INR", target: 83.6, horizon: "30d", confidence: 74 };
