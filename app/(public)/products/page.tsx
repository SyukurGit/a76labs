import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            Software products developed, maintained, and operated directly by A76LABS. Focused on practical utility, clean architectures, and sustainable maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dompet Pintar */}
          <div className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Live · Operated by A76LABS
                </span>
                <span className="text-xs font-mono text-gray-400">Personal Finance</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-950 mb-1">Dompet Pintar</h2>
              <p className="text-xs font-medium text-gray-500 mb-4">
                Personal cashflow tracking with web dashboard & Telegram bot
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                A personal cashflow management application combining a web dashboard, fast expense input via Telegram, multi-account ledger, and Excel reporting for periodic financial review.
              </p>

              <div className="space-y-2 mb-6 text-xs text-gray-600 font-mono">
                <p>• Dual input: Web dashboard or conversational Telegram bot</p>
                <p>• Categorized inflow & outflow tracking with balance summaries</p>
                <p>• Period-filtered Excel reporting for personal records</p>
                <p>• Isolated per-user ledger records with protected sessions</p>
              </div>

              <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 text-[11px] font-mono text-gray-600 mb-6 leading-relaxed">
                <strong>Canonical Brand:</strong> Dompet Pintar is the official public product name. Initial backend development used the codename MoneyBot.
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Next.js", "Go", "Tailwind CSS", "Telegram Bot API", "Turso / SQLite"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="/products/dompet-pintar"
                className="text-xs font-semibold text-gray-950 hover:text-[#027FDB] flex items-center gap-1"
              >
                Detailed overview <ArrowRight size={13} />
              </Link>
              <a
                href="https://dompetpintar.a76labs.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-[#027FDB] hover:underline flex items-center gap-1"
              >
                Open live app <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Neon Dash */}
          <div className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Active Prototype · R&D
                </span>
                <span className="text-xs font-mono text-gray-400">Monitoring</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-950 mb-1">Neon Dash</h2>
              <p className="text-xs font-medium text-gray-500 mb-4">
                Real-time server analytics and metrics monitoring dashboard
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                A lightweight, real-time metrics dashboard designed for low-overhead operational visibility without the complexity and resource footprint of heavy enterprise monitoring suites.
              </p>

              <div className="space-y-2 mb-6 text-xs text-gray-600 font-mono">
                <p>• Streaming metrics over WebSocket connections</p>
                <p>• Reactive charting with D3.js and React</p>
                <p>• Zero-agent baseline health pinging architecture</p>
                <p>• Minimal resource footprint for lean VPS setups</p>
              </div>

              <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 text-[11px] font-mono text-blue-800 mb-6 leading-relaxed">
                <strong>Status:</strong> Active engineering prototype under internal testing and performance evaluation.
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["React", "WebSockets", "D3.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="/products/neon-dash"
                className="text-xs font-semibold text-gray-950 hover:text-[#027FDB] flex items-center gap-1"
              >
                Detailed overview <ArrowRight size={13} />
              </Link>
              <span className="text-xs font-mono text-gray-400">
                Prototype Specification
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 p-6 rounded-xl border border-gray-200 bg-gray-50/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-sm font-bold text-gray-950">Looking for institutional systems or client integrations?</h3>
            <p className="text-xs text-gray-600 mt-0.5">
              Work built for universities and operational deployments is categorized separately under Founder Work to preserve clear ownership distinctions.
            </p>
          </div>
          <Link
            href="/work"
            className="text-xs font-semibold bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-50 shrink-0"
          >
            View Founder Work →
          </Link>
        </div>
      </div>
    </div>
  );
}
