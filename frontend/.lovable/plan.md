## Direction picked

Since you skipped the picker, I'm going with **Direction C — "Living Dashboard"** (v3). It's the strongest fit for an AI-first, data-rich fintech: bento grid features, full-bleed dashboard hero, emerald glow, JetBrains Mono for numerics, dark-first. Tokens go verbatim into the project.

If you'd rather the editorial v2 or obsidian v1 direction, say so before I start and I'll swap.

## Scope (this pass)

Full frontend shell, all pages with realistic mock fintech data. No backend, no real auth, no AI calls. Dark + light themes, mobile responsive.

## Design system

Locked tokens from v3 ported into `src/styles.css`:
- Primary Emerald `#10B981`, Deep Blue `#1E3A8A`, Gold `#D4AF37`
- Dark bg `#0F172A` (slightly deepened to `#060910` for hero per direction), Light bg `#F8FAFC`
- Inter (sans) + JetBrains Mono (numerics/tickers)
- 12px radius, glass cards, emerald glow shadow, marquee + scanline keyframes
- All shadcn components retuned to these tokens — no hardcoded colors in components

## Routes

```text
src/routes/
  __root.tsx                       (theme provider, toaster, head)
  index.tsx                        Landing page
  login.tsx
  signup.tsx
  forgot-password.tsx
  otp.tsx                          OTP verification
  mfa.tsx                          MFA verification
  onboarding.tsx                   Multi-step onboarding wizard
  broker-connect.tsx               Broker connection wizard
  _app.tsx                         Authenticated layout (sidebar + topnav + AI panel + Outlet)
  _app/dashboard.tsx               AI Wealth Command Center (all 10 sections)
  _app/portfolio.tsx
  _app/ai-advisor.tsx              Full-page chat
  _app/market.tsx                  Market Intelligence
  _app/news.tsx                    News Intelligence
  _app/goals.tsx
  _app/retirement.tsx
  _app/nps.tsx
  _app/forex.tsx
  _app/mcx.tsx
  _app/budget.tsx
  _app/tax.tsx
  _app/watchlists.tsx
  _app/alerts.tsx
  _app/documents.tsx
  _app/reports.tsx
  _app/settings.tsx                with tab subroutes
```

`_app.tsx` is a pathless layout (no auth guard — mock-only) so the same chrome wraps every authenticated page. Sidebar collapses to icon-only on small screens via shadcn sidebar.

## Component architecture

```text
src/components/
  landing/         Hero, TickerStrip, FeatureBento, AICopilotBand,
                   Testimonials, Pricing, FAQ, Footer, LandingNav
  auth/            AuthShell, OtpInput, MfaSelector, BrokerCard, OnboardingStepper
  app-shell/       Sidebar, TopNav, GlobalSearch, NotificationBell,
                   ThemeToggle, BrokerStatus, ProfileMenu, AIAssistantPanel
  dashboard/       OverviewCards, PerformanceCharts, AIInsightsGrid,
                   MarketIntelWidgets, NewsFeed, GoalsWidget, RetirementWidget,
                   ForexWidget, MCXWidget, WatchlistWidget
  charts/          Recharts wrappers — AreaChart, DonutChart, Sparkline,
                   Heatmap, GaugeChart, CandlestickMock
  ui/              (existing shadcn)
  common/          KpiCard, GlassCard, SectionHeader, EmptyState,
                   ConfidenceBadge, Sentiment, TrendDelta
```

## Mock data layer

```text
src/lib/mock/
  portfolio.ts     holdings, allocation, daily P&L series, CAGR
  market.ts        NIFTY/SENSEX/sector heatmap, gainers/losers, fear&greed
  news.ts          ~30 cards with AI summary, impact, sentiment, sectors
  ai-insights.ts   8 insight cards with confidence scores
  goals.ts         6 goals incl. retirement
  forex.ts         USDINR/EURINR/GBPINR/AEDINR series
  mcx.ts           Gold/Silver/Copper/Crude/NatGas
  watchlists.ts    3 default lists
  alerts.ts        notification stream
  user.ts          profile, broker connections
```

All numbers in INR, India-context (SIP, NPS Tier-1/2, ELSS, MCX, RBI/SEBI).

## Theming

`ThemeProvider` writes `.dark` on `<html>`, persists to localStorage, hydrates on mount. Toggle in TopNav. Both modes tuned per direction tokens.

## AI Assistant Panel

Persistent right-side drawer, collapsible. Mock chat with typing shimmer, suggested prompts, canned responses keyed off prompt keywords (no LLM call). Floating FAB on mobile that opens it as a sheet.

## Charts

Recharts (already common with shadcn). Sparklines hand-rolled SVG to keep them light. No real-time WebSocket — use `setInterval` mock ticker for the strip and dashboard top cards so numbers actually move.

## Mobile

Sidebar → sheet, dashboard sections stack, AI panel → bottom sheet. Test viewports 375 / 768 / 1440.

## Out of scope (flag for later)

- Real auth, real broker OAuth, real market data
- Functional AI chat (Lovable AI wiring)
- PDF/Excel export — buttons render, downloads are stubs
- Persistence of watchlists/goals — in-memory only

## Build order

1. Design tokens + ThemeProvider + shadcn retune
2. Mock data + chart primitives + common components
3. Landing page (most visible deliverable)
4. Auth flow pages
5. `_app` shell (sidebar + topnav + AI panel)
6. Dashboard (all 10 sections) — the big one
7. Remaining 16 sidebar pages built from shared widgets
8. Mobile pass + polish

Approve and I'll start.