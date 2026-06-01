export const user = {
  name: "Aarav Mehta",
  email: "aarav@fingenie.app",
  phone: "+91 98xxx xx412",
  plan: "Pro Intelligence",
  broker: { name: "Zerodha", status: "connected" as const },
  brokers: [
    { name: "Zerodha", status: "connected" as const, logo: "Z" },
    { name: "Groww", status: "available" as const, logo: "G" },
    { name: "Upstox", status: "available" as const, logo: "U" },
    { name: "ICICI Direct", status: "available" as const, logo: "I" },
    { name: "Angel One", status: "available" as const, logo: "A" },
  ],
};
