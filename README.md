# CFO AI 2026

A Progressive Web App (PWA) for financial data visualization and AI-powered business decision support.

## Overview

CFO AI helps business leaders analyze financial data and receive AI-generated strategic recommendations. Upload accounting data and get actionable insights instantly.

## Key Features

### 1. Data Visualization
- Visualize financial metrics with graphs and tables
- Track trends, outliers, max/min values across time periods
- Support for P&L (Profit & Loss) and B/S (Balance Sheet) accounts

### 2. AI-Powered Decision Support
- Automated analysis of financial data
- 10 offensive strategy recommendations
- 10 defensive strategy recommendations
- Presentation-ready output format

## Data Requirements

**Format:** CSV or Excel files from "freee会計" (or compatible format)

**Time Period:** 6 months of historical data
- Starting from N-8 months to N-2 months (where N = current month)
- Excludes current and previous month to ensure complete monthly closing

**Accounts:** Key P&L and B/S accounts only

## Access

The app works on: 
- **Mobile:** Smartphone browsers with PDF viewing capability
- **Desktop:** Web browsers (PWA)

## Development Status

**Current Version:** 1.0 (Planned)

### Version 1.0 Scope
- [x] Core data visualization
- [x] AI analysis and recommendations
- [x] PWA implementation
- [ ] Login/Signup functionality
- [ ] Production deployment on Vercel

### Authentication Note
- Full authentication system required for production
- Password-protected URLs available for internal testing

## Deployment

- **Testing:** Local development environment
- **Staging/Production:** Vercel

---

**Repository:** [Kiara-Dev-Team/cfo-ai-2026](https://github.com/Kiara-Dev-Team/cfo-ai-2026)