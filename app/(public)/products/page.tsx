import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description: "Software products developed, operated, and maintained directly by A76LABS.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-14 pb-8 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-4">
            A76LABS Software Products
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 mb-4">
            Flagship Product
          </h1>
          <p className="text-gray-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            Software products developed, maintained, and operated directly by A76LABS. We build focused tools that solve genuine day-to-day bookkeeping and operational friction.
          </p>
        </div>

        {/* Flagship Product Showcase */}
        <div className="p-8 sm:p-10 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Live & Operated by A76LABS
                </span>
                <span className="text-xs font-mono text-gray-400">Personal Cashflow Management</span>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-950">Dompet Pintar</h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/products/dompet-pintar"
                className="text-xs font-semibold px-4 py-2.5 rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors flex items-center gap-1.5"
              >
                Detailed Specification <ArrowRight size={13} />
              </Link>
              <a
                href="https://dompetpintar.a76labs.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-5 py-2.5 rounded-lg bg-gray-950 text-white hover:bg-gray-800 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                Launch App <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Dompet Pintar is a personal cashflow tracking and bookkeeping platform. It eliminates daily logging friction through a dual-channel interface: instant on-the-go expense capture via a conversational Telegram bot, paired with a web dashboard for multi-account ledger reviews, categorization, and period-filtered Excel reporting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 font-mono">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-gray-950">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Dual-Channel Input</span>
                  </div>
                  <p className="text-gray-600 pl-5">Telegram bot for rapid chat entry; web dashboard for deep audits.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-gray-950">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Multi-Account Ledger</span>
                  </div>
                  <p className="text-gray-600 pl-5">Segregated cash, bank, and digital wallet balances.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-gray-950">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Spreadsheet Exports</span>
                  </div>
                  <p className="text-gray-600 pl-5">Generate filtered Microsoft Excel (.xlsx) financial statements.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-gray-950">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Account Isolation</span>
                  </div>
                  <p className="text-gray-600 pl-5">Isolated per-user records with secure session authentication.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-200 text-xs font-mono text-gray-600 leading-relaxed">
                <strong className="text-gray-900 block mb-0.5">Canonical Brand Note:</strong>
                Dompet Pintar is the official public product brand operated by A76LABS. During initial backend development, the project was internally codenamed MoneyBot.
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "Go (Gin)", "Tailwind CSS", "Telegram Bot API", "SQLite / Turso"].map((tech) => (
                    <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white border border-gray-200 text-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 space-y-3 text-xs">
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">
                  Product Profile
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-semibold text-emerald-700">Live (Active)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operator:</span>
                    <span className="font-semibold text-gray-950">A76LABS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lead Engineer:</span>
                    <span className="font-semibold text-gray-950">Muhammad Syukur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demarcation Card */}
        <div className="mt-14 p-6 rounded-xl border border-gray-200 bg-gray-50/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-sm font-bold text-gray-950">Looking for institutional systems or client work?</h3>
            <p className="text-xs text-gray-600 mt-0.5">
              Production systems built for universities and operational deployments are categorized separately under Founder Work to maintain clear ownership distinctions.
            </p>
          </div>
          <Link
            href="/work"
            className="text-xs font-semibold bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-50 shrink-0 shadow-sm"
          >
            View Founder Work →
          </Link>
        </div>
      </div>
    </div>
  );
}
