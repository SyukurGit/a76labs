import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Updates & Build Log",
  description: "Chronological build log, engineering milestones, and product updates from A76LABS.",
};

interface Milestone {
  date: string;
  tag: string;
  title: string;
  description: string;
  details: string[];
  link?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

const MILESTONES: Milestone[] = [
  {
    date: "October 2026",
    tag: "Company Identity & Operations",
    title: "Public Entity Verification & Product Demarcation",
    description: "Refactored public company identity to clearly reflect A76LABS as a founder-led software startup. Standardized canonical product branding, clarified the separation between company-operated products and founder institutional work, and established crawler-transparent architecture.",
    details: [
      "Canonicalized Dompet Pintar product naming across all documentation and repositories.",
      "Established clear demarcation between proprietary products and founder institutional client work.",
      "Audited robots.txt, canonical links, and OpenGraph metadata to guarantee crawler accessibility for general bots and ClaudeBot.",
      "Documented public verification evidence and factual operating timeline."
    ]
  },
  {
    date: "August – September 2026",
    tag: "Core Engineering",
    title: "Ledger Engine Optimization & Transaction Reliability",
    description: "Refined backend calculation logic for multi-account balance ledgers and optimized periodic statement generation.",
    details: [
      "Optimized query performance for high-volume monthly transaction aggregations.",
      "Enhanced session isolation and CSRF/auth token validation for web dashboard users.",
      "Maintained operational stability on live instances."
    ],
    link: {
      label: "View Dompet Pintar",
      href: "/products/dompet-pintar"
    }
  },
  {
    date: "May 2026",
    tag: "Security Research",
    title: "Access Control Research Prototype Completion",
    description: "Founder Muhammad Syukur completed thesis research on Least Privilege and Just-in-Time (JIT) access control mechanisms on internal digital wallet architectures.",
    details: [
      "Built Go/Gin backend and Dockerized test harness validating ticket-bound data scoping.",
      "Evaluated 19 empirical test scenarios encompassing Customer Support, Operation elevation, and cross-account access.",
      "Published interactive research verification portal and source repositories."
    ],
    link: {
      label: "Read Research Breakdown",
      href: "/research/least-privilege-jit"
    }
  },
  {
    date: "February 2026",
    tag: "Product Release",
    title: "Dompet Pintar Dual-Channel Telegram Bot Launch",
    description: "Integrated the Telegram Bot API with the Dompet Pintar backend, introducing a conversational input workflow alongside the web dashboard.",
    details: [
      "Implemented natural command-based transaction entry (/in, /out, /saldo) directly from mobile chat.",
      "Synchronized instant state updates between Telegram interactions and the web dashboard ledger.",
      "Automated weekly cashflow summary broadcasts directly to registered accounts."
    ],
    link: {
      label: "Launch Dompet Pintar",
      href: "https://dompetpintar.a76labs.online",
      isExternal: true
    }
  },
  {
    date: "December 2025",
    tag: "Startup Inception",
    title: "A76LABS Venture Establishment & Official Domain Registration",
    description: "Formally founded A76LABS as a founder-led software venture in Banda Aceh, Indonesia. Secured official domain a76labs.online on December 16, 2025, and deployed primary web infrastructure.",
    details: [
      "Registered official company domain a76labs.online (December 16, 2025).",
      "Configured official domain email founder@a76labs.online with MX routing.",
      "Deployed centralized production platform on Vercel with Turso SQLite backend."
    ]
  },
  {
    date: "November 2025",
    tag: "Product Engineering",
    title: "Initial Development of Personal Cashflow Engine",
    description: "Began development of a personal financial tracking tool (initial development codename MoneyBot) to address friction in manual daily expense logging.",
    details: [
      "Architected relational schema for dual-entry transaction categorization.",
      "Implemented initial frontend prototype with Next.js and backend core with Go.",
      "Established foundational ledger logic that became the core of Dompet Pintar."
    ]
  }
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Homepage
        </Link>

        {/* Header */}
        <div className="mb-14 pb-8 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-4">
            <Calendar size={13} className="text-[#027FDB]" />
            Verifiable Company Timeline
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 mb-4">
            Updates & Build Log
          </h1>
          <p className="text-gray-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            A chronological log of genuine product milestones, architectural investigations, and company developments since the inception of A76LABS in late 2025.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 space-y-12">
          {MILESTONES.map((item, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-gray-400 group-hover:border-[#027FDB] group-hover:scale-110 transition-all"></div>

              <div className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#027FDB]">
                    {item.date}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">
                    {item.tag}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-950">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-gray-100">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {item.link && (
                  <div className="pt-3">
                    {item.link.isExternal ? (
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-[#027FDB]"
                      >
                        {item.link.label} <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-[#027FDB]"
                      >
                        {item.link.label} →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-6 rounded-2xl border border-gray-200 bg-gray-50/70 text-xs text-gray-600 leading-relaxed space-y-2 font-mono">
          <div className="flex items-center gap-2 font-bold text-gray-950">
            <Terminal size={14} className="text-[#027FDB]" />
            <span>Timeline Integrity & Public Proof</span>
          </div>
          <p>
            Every milestone listed above is corroborated by git commit history, domain registry records (Radix RDAP), public deployment timestamps (Vercel), and published research artifacts. No speculative or unreleased features are logged as completed milestones.
          </p>
        </div>
      </div>
    </div>
  );
}
