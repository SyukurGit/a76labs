# A76LABS — Official Platform Repository

**A76LABS** is a founder-led software venture based in Banda Aceh, Indonesia. We build and operate our own digital products while developing practical web systems, software integrations, and institutional workflows.

- **Primary Web Platform**: [https://www.a76labs.online](https://www.a76labs.online)
- **Flagship Application**: [Dompet Pintar](https://dompetpintar.a76labs.online)
- **Founder & Lead Engineer**: Muhammad Syukur ([syukur.dev](https://syukur.dev) · [@SyukurGit](https://github.com/SyukurGit))
- **Official Inquiries**: [contact@a76labs.online](mailto:contact@a76labs.online)

---

## 1. Venture Architecture & Business Model

A76LABS operates on a disciplined dual-track software venture model:

### Track A: Owned Digital Products
- **Dompet Pintar (Flagship)**: Personal cashflow tracking and bookkeeping utility featuring a dual-channel capture interface (conversational Telegram bot for rapid mobile entries + responsive web dashboard for multi-account ledgering, categorization, and period-filtered Excel financial statement exports). Built with Next.js, Go/Gin, and SQLite/Turso. Live at `https://dompetpintar.a76labs.online`.

### Track B: Engineering Work & Systems Integrations
- Practical institutional and operational software developed by founder Muhammad Syukur during institutional engagements at Universitas Islam Negeri Ar-Raniry:
  - **Sistem Informasi Pascasarjana UIN Ar-Raniry**: Academic portal and administrative management center ([Live Portal](https://en.pps.ar-raniry.ac.id)).
  - **Sistem Denda & Surat Bebas Pustaka UIN Ar-Raniry**: Clearance platform linking library OPAC fine APIs, payment validation, and cryptographic QR code certificate generation ([Live System](https://admin.opac.ar-raniry.ac.id)).
  - **Tokenetic**: Telegram bot utility aggregating market data, price feeds, and order book depth across external APIs.
  - **Security Research**: Academic prototype evaluating Least Privilege and Just-in-Time (JIT) access control in digital wallet architectures ([skripsi.syukur.dev](https://skripsi.syukur.dev)).

*Attribution Note: Institutional systems are owned and operated by their respective university bodies. They are documented on this site as verifiable engineering evidence of the founder's technical capabilities, not as corporate A76LABS vendor contracts or company-owned SaaS assets.*

---

## 2. Technology Stack

- **Framework**: Next.js 16 (App Router, Turbopack, React 19)
- **Styling**: Tailwind CSS v4, Lucide React icons
- **Database & ORM**: Turso (libSQL / Edge SQLite) with Drizzle ORM
- **Authentication**: JWT & secure password hashing (bcryptjs, jose)
- **Email Infrastructure**: ImprovMX DNS MX routing for `contact@a76labs.online`
- **Hosting & Edge Delivery**: Vercel Edge Network with TLS / HTTPS encryption

---

## 3. Forensic Audit & Verification Documentation

A complete set of ground-truth audit documents is maintained in the `docs/` directory:

| Document | Description |
|---|---|
| [`docs/CLAUDE_STARTUPS_CURRENT_RESEARCH.md`](docs/CLAUDE_STARTUPS_CURRENT_RESEARCH.md) | Live research into Claude Startups eligibility, program terms, capacity constraints, and community reality (Oct 12, 2026). |
| [`docs/CLAUDE_STARTUPS_READINESS.md`](docs/CLAUDE_STARTUPS_READINESS.md) | 18-point skeptical reviewer evaluation, readiness matrix, and candid eligibility verdict. |
| [`docs/public-verification/PUBLIC_COMPANY_FACTS.md`](docs/public-verification/PUBLIC_COMPANY_FACTS.md) | Canonical ground-truth fact matrix (entity, dates, domain, products, founder). |
| [`docs/public-verification/VERIFICATION_GAPS.md`](docs/public-verification/VERIFICATION_GAPS.md) | Severity-classified verification gap analysis and external founder action items. |
| [`docs/public-verification/CLAUDE_APPLICATION.md`](docs/public-verification/CLAUDE_APPLICATION.md) | Exact copy-paste answers tailored for the Claude Startups application form. |
| [`docs/public-verification/FOUNDER_PROFILE.md`](docs/public-verification/FOUNDER_PROFILE.md) | Guide for aligning `syukur.dev` with A76LABS. |
| [`docs/public-verification/GITHUB_PROFILE.md`](docs/public-verification/GITHUB_PROFILE.md) | Guide for public GitHub profile alignment. |

---

## 4. Local Development & Quality Verification

### Prerequisites
- Node.js 20+
- npm or pnpm

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Verification Commands

```bash
# Run ESLint check
npm run lint

# Run forensic audit assertions
node scripts/audit_check.mjs

# Build production bundle
npm run build
```

---

## 5. Security & Crawler Accessibility

- **`robots.txt`**: Prerendered via `app/robots.ts`. Explicitly authorizes `ClaudeBot` and `anthropic-ai` while protecting administrative routes.
- **`sitemap.xml`**: Dynamically generated via `app/sitemap.ts` listing all 15 canonical public routes.
- **Structured Data**: Schema.org `Organization` and `SoftwareApplication` JSON-LD graphs embedded across key public routes.
- **Privacy Policy & Terms**: Dedicated disclosures at `/privacy` and `/terms` covering data retention, ledger export, and financial scope disclaimers.

---

## 6. License & Ownership

© 2025–2026 A76LABS. Operating as an early-stage founder-led software venture based in Banda Aceh, Indonesia. All rights reserved.
