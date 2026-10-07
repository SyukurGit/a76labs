import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected engineering work built by the founder across institutional systems, integrations, and operational tools.",
};

export default function SelectedWorkPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10 pb-8 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-4">
            Founder Engineering Work
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 mb-4">
            Selected Work
          </h1>
          <p className="text-gray-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            Selected engineering work built by the founder across institutional systems, operational web platforms, API integrations, and technical research.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-amber-200/80 bg-amber-50/50 text-xs text-amber-900 leading-relaxed mb-12 font-mono">
          <strong className="font-semibold block mb-1">Credibility & Ownership Framing</strong>
          Institutional systems presented in this section were developed and integrated by founder Muhammad Syukur for institutional clients and operational environments. A76LABS does not claim company ownership of institutional assets; they are documented here to provide transparent, verifiable engineering evidence.
        </div>

        <div className="space-y-8">
          {/* Card 1: Pascasarjana */}
          <div className="p-7 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Live · In Active Use
                </span>
                <span className="text-xs font-mono text-gray-400">Institutional Portal</span>
              </div>
              <span className="text-xs font-mono text-gray-500">Role: Primary Developer</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-950 mb-2">
              Sistem Informasi Pascasarjana UIN Ar-Raniry
            </h2>
            <p className="text-xs font-medium text-gray-500 mb-4">
              Universitas Islam Negeri Ar-Raniry Banda Aceh
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-3xl">
              Web-based institutional system serving as the primary digital communication portal and administrative management center for Pascasarjana UIN Ar-Raniry. Features a public academic portal and a protected administrative backend for content, defense schedules, accreditation data, and multi-role operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-gray-600 font-mono">
              <p>• Public portal: Academic programs, news, faculty profiles, schedules</p>
              <p>• Admin panel: Multi-role authentication, staff workflows, activity logging</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-1.5">
                {["Laravel", "MySQL", "Tailwind CSS", "Multi-role RBAC", "Activity Logs"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/work/pascasarjana"
                  className="text-xs font-semibold text-gray-950 hover:text-[#027FDB] flex items-center gap-1"
                >
                  Read Case Study <ArrowRight size={13} />
                </Link>
                <a
                  href="https://en.pps.ar-raniry.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gray-500 hover:text-gray-950 flex items-center gap-1"
                >
                  Live System <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Perpustakaan */}
          <div className="p-7 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Live · In Operational Use
                </span>
                <span className="text-xs font-mono text-gray-400">Library Operations</span>
              </div>
              <span className="text-xs font-mono text-gray-500">Role: System Development & Integration</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-950 mb-2">
              Sistem Denda & Surat Bebas Pustaka UIN Ar-Raniry
            </h2>
            <p className="text-xs font-medium text-gray-500 mb-4">
              UPT Perpustakaan UIN Ar-Raniry Banda Aceh
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-3xl">
              Operational system linking library catalog fine APIs, payment workflow validation, dynamic PDF certificate generation, and cryptographic QR code verification for graduating students.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-gray-600 font-mono">
              <p>• OPAC API synchronization for overdue fines</p>
              <p>• Automated clearance letter generation with verifiable QR code</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-1.5">
                {["Laravel", "API Integration", "PDF Engine", "QR Verification", "Payment Workflow"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/work/perpustakaan"
                  className="text-xs font-semibold text-gray-950 hover:text-[#027FDB] flex items-center gap-1"
                >
                  Read Case Study <ArrowRight size={13} />
                </Link>
                <a
                  href="https://admin.opac.ar-raniry.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gray-500 hover:text-gray-950 flex items-center gap-1"
                >
                  Operational Portal <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Tokenetic */}
          <div className="p-7 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  Maintenance
                </span>
                <span className="text-xs font-mono text-gray-400">Telegram Bot</span>
              </div>
              <span className="text-xs font-mono text-gray-500">Role: Bot Development & Integration</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-950 mb-2">
              Tokenetic
            </h2>
            <p className="text-xs font-medium text-gray-500 mb-4">
              Market Data Aggregator & Analysis Bot
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-3xl">
              Telegram bot consolidating live market prices, trading volume, order book bid/ask depth, and relevant news from multiple cryptocurrency and market APIs into structured messages and chart snapshots.
            </p>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 text-xs text-gray-600 mb-6 font-mono">
              Important: Tokenetic is an informational market data aggregation utility. It is NOT an automated trading system, financial advisory tool, or execution algorithm.
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-1.5">
                {["Telegram Bot API", "Multi-API Integration", "Data Aggregation", "Market Depth"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/work/tokenetic"
                  className="text-xs font-semibold text-gray-950 hover:text-[#027FDB] flex items-center gap-1"
                >
                  Read Case Study <ArrowRight size={13} />
                </Link>
                <a
                  href="https://t.me/Tokenetic_Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gray-500 hover:text-gray-950 flex items-center gap-1"
                >
                  Telegram Bot <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 p-6 rounded-xl border border-gray-200 bg-gray-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-sm font-bold text-gray-950">Looking for application security research?</h3>
            <p className="text-xs text-gray-600 mt-0.5">
              Read the founder&apos;s research on Least Privilege and Just-in-Time access control in digital wallet architectures.
            </p>
          </div>
          <Link
            href="/research"
            className="text-xs font-semibold bg-gray-950 text-white px-4 py-2 rounded-lg hover:bg-gray-800 shrink-0"
          >
            Explore Research →
          </Link>
        </div>
      </div>
    </div>
  );
}
