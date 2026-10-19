import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Cpu, Clock, Building2, User, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "A76LABS — Founder-Led Software Startup",
  description: "A76LABS is a founder-led early-stage software startup building and operating practical digital products from Indonesia. Led by founder Muhammad Syukur.",
  openGraph: {
    title: "A76LABS — Founder-Led Software Startup",
    description: "A76LABS is a founder-led early-stage software startup building and operating practical digital products from Indonesia. Led by founder Muhammad Syukur.",
    url: "https://www.a76labs.online",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.a76labs.online/#organization",
      "name": "A76LABS",
      "alternateName": "A76 Labs",
      "url": "https://www.a76labs.online",
      "logo": "https://www.a76labs.online/icon.png",
      "description": "Founder-led early-stage software startup building and operating practical digital products from Indonesia.",
      "foundingDate": "2025-12-16",
      "founder": {
        "@type": "Person",
        "@id": "https://syukur.dev/#person",
        "name": "Muhammad Syukur",
        "jobTitle": "Founder & Lead Engineer",
        "url": "https://syukur.dev",
        "sameAs": [
          "https://github.com/SyukurGit"
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Banda Aceh",
        "addressRegion": "Aceh",
        "addressCountry": "ID"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "team@a76labs.online",
        "contactType": "founder inquiry"
      },
      "sameAs": [
        "https://github.com/SyukurGit"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.a76labs.online/#dompet-pintar",
      "name": "Dompet Pintar",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web, Telegram",
      "url": "https://dompetpintar.a76labs.online",
      "description": "Personal cashflow management application combining a web dashboard, dual-channel Telegram bot logging, multi-account ledger, and Excel reporting.",
      "author": {
        "@id": "https://www.a76labs.online/#organization"
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="flex flex-col gap-24 pb-24">
        {/* HERO SECTION */}
        <section className="pt-20 md:pt-28 pb-8 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-left sm:text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-8">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Founder-Led Software Startup · Indonesia (WIB UTC+7)
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-950 mb-6 leading-[1.12]">
              Practical digital products &amp; <br className="hidden sm:inline" />
              <span className="text-[#027FDB]">systems engineering</span>.
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl sm:mx-auto leading-relaxed">
              A76LABS is a founder-led software venture based in Banda Aceh, Indonesia. We build and operate our own digital products while developing practical web systems, software integrations, and institutional workflows.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4 mb-6">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold bg-gray-950 text-white hover:bg-gray-800 transition-colors shadow-sm text-sm"
              >
                <span>Flagship Product</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <a
                href="https://dompetpintar.a76labs.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors text-sm"
              >
                <span>Dompet Pintar (Live App)</span>
                <ArrowUpRight size={15} className="ml-1.5" />
              </a>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors text-sm"
              >
                Selected Engineering Work
              </Link>
            </div>

            <p className="text-xs font-mono text-gray-500">
              Founder-led venture · Product &amp; systems engineering · Operating since late 2025 · Banda Aceh, Indonesia
            </p>
          </div>
        </section>

        {/* COMPANY SNAPSHOT */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-[#027FDB]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">
                    Company Snapshot &amp; Overview
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
                  Active Venture
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-xs">
                <div>
                  <span className="text-gray-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">Entity</span>
                  <p className="font-bold text-gray-950 text-sm">A76LABS</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">Software Venture</p>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">Founder</span>
                  <p className="font-bold text-gray-950 text-sm">Muhammad Syukur</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">Lead Engineer</p>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">Location</span>
                  <p className="font-bold text-gray-950 text-sm">Indonesia</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">Banda Aceh (WIB UTC+7)</p>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">Timeline</span>
                  <p className="font-bold text-gray-950 text-sm">Operating Since</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">Late 2025 (~10 mos)</p>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">Owned Product</span>
                  <p className="font-bold text-gray-950 text-sm">Dompet Pintar</p>
                  <p className="text-emerald-600 text-[11px] mt-0.5 font-medium">Live &amp; Maintained</p>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">Contact</span>
                  <p className="font-bold text-gray-950 text-sm">contact@</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">a76labs.online</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLAGSHIP PRODUCT: DOMPET PINTAR */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#027FDB] font-semibold">Flagship Product</span>
                <h2 className="text-3xl font-extrabold text-gray-950 mt-1">Dompet Pintar</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Personal cashflow management platform operated directly by A76LABS.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                  Live & Maintained
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gray-400">Canonical Product · Web & Telegram Bot</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-950">
                    Zero-friction daily cashflow tracking with dual-channel capture.
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Dompet Pintar solves the friction of traditional personal accounting. Rather than forcing users through cumbersome menus, quick expense and income inputs occur in seconds via an interactive Telegram bot, while high-level reviews, category management, and Excel exports are managed through a clean web dashboard.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                      <p className="font-bold text-gray-950 text-xs">Dual-Channel Logging</p>
                      <p className="text-xs text-gray-600">Telegram bot for rapid daily inputs, web UI for monthly retrospectives.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                      <p className="font-bold text-gray-950 text-xs">Multi-Account Ledger</p>
                      <p className="text-xs text-gray-600">Separate balances across accounts, categorized inflow/outflow breakdown.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                      <p className="font-bold text-gray-950 text-xs">Excel Statement Exports</p>
                      <p className="text-xs text-gray-600">Date-filtered spreadsheet generation for personal bookkeeping audits.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                      <p className="font-bold text-gray-950 text-xs">Data Boundaries &amp; Auth</p>
                      <p className="text-xs text-gray-600">Strictly segregated per-user ledgers, salted bcrypt password hashing, and HTTPS transport encryption.</p>
                    </div>
                  </div>

                  {/* Brand Continuity Clarification */}
                  <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/40 text-xs text-blue-900 leading-relaxed font-mono">
                    <strong className="font-semibold block mb-0.5">Brand Consistency Note</strong>
                    Dompet Pintar is the official canonical product brand. During early backend prototyping, the service was developed under the internal project codename MoneyBot. All current public instances and development roadmap operate under Dompet Pintar.
                  </div>
                </div>

                <div className="space-y-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8">
                  <div className="space-y-5">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block mb-2">
                        Production Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {["Next.js", "Go (Gin)", "Tailwind CSS", "Telegram Bot API", "Turso / SQLite"].map((t) => (
                          <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-gray-100 text-gray-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-gray-600 font-mono">
                      <div className="flex justify-between py-1 border-b border-gray-100">
                        <span>Lifecycle:</span>
                        <span className="font-bold text-gray-950">Active Production</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-gray-100">
                        <span>Operator:</span>
                        <span className="font-bold text-gray-950">A76LABS</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-gray-100">
                        <span>Hosting:</span>
                        <span className="font-bold text-gray-950">Vercel Edge</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4">
                    <a
                      href="https://dompetpintar.a76labs.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-semibold bg-gray-950 text-white hover:bg-gray-800 transition-colors text-xs shadow-sm"
                    >
                      <span>Launch Web Dashboard</span>
                      <ArrowUpRight size={14} className="ml-1.5" />
                    </a>
                    <a
                      href="https://t.me/DompetPintar_A76Labs_Bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-semibold bg-[#027FDB] text-white hover:bg-blue-600 transition-colors text-xs shadow-sm"
                    >
                      <span>Open Telegram Bot (@DompetPintar_A76Labs_Bot)</span>
                      <ArrowUpRight size={14} className="ml-1.5" />
                    </a>
                    <Link
                      href="/products/dompet-pintar"
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors text-xs"
                    >
                      Read Technical Breakdown →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Authentic Product UI Preview & Concrete Workflow */}
              <div className="pt-8 border-t border-gray-100 space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#027FDB] font-semibold">Authentic Product Interface</span>
                      <h4 className="text-lg font-bold text-gray-950 mt-0.5">Live Application Screens</h4>
                    </div>
                    <span className="text-xs font-mono text-gray-500">Unmodified production capture</span>
                  </div>

                  {/* Main Preview: Dashboard */}
                  <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-950 shadow-md">
                    <div className="bg-gray-900 px-4 py-2 flex items-center justify-between text-xs font-mono text-gray-400 border-b border-gray-800">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span className="text-gray-200 font-semibold">Web Dashboard — dompetpintar.a76labs.online</span>
                      </div>
                      <span className="text-[11px] text-gray-500">Live Production UI</span>
                    </div>
                    <div className="relative aspect-[16/9] w-full bg-gray-950">
                      <Image
                        src="/images/dompet-pintar/dashboard.png"
                        alt="Dompet Pintar live web dashboard showing balance, cashflow distribution chart, and transaction history"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 1000px"
                      />
                    </div>
                  </div>

                  {/* Secondary Screen Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/70 space-y-2.5">
                      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-gray-200 bg-white">
                        <Image
                          src="/images/dompet-pintar/telegram.png"
                          alt="Dompet Pintar Telegram bot conversational entry"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-gray-950">Conversational Telegram Bot</p>
                        <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                          Instant mobile transaction entry via chat commands (<code className="font-mono text-emerald-700">/start</code>, <code className="font-mono text-emerald-700">-20rb Makan</code>) synced instantly with the web dashboard.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/70 space-y-2.5">
                      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-gray-200 bg-white">
                        <Image
                          src="/images/dompet-pintar/laporan.png"
                          alt="Dompet Pintar monthly report and Excel export view"
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-gray-950">Excel Statement Generator</p>
                        <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                          Date-range filtered financial reports with one-click Microsoft Excel (<code className="font-mono text-blue-700">.xlsx</code>) spreadsheet download.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/70 space-y-2.5">
                      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-gray-200 bg-white">
                        <Image
                          src="/images/dompet-pintar/input.png"
                          alt="Dompet Pintar categorized transaction form"
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-gray-950">Categorized Accounting</p>
                        <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                          Structured income and expense records with customizable tag taxonomy across segregated physical cash and bank balances.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Concrete 3-Step Flow */}
                <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">
                    Concrete Production Workflow
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="space-y-1">
                      <span className="font-mono font-bold text-[#027FDB]">Step 1 · Setup</span>
                      <p className="font-bold text-gray-950">Register Account &amp; Configure Ledgers</p>
                      <p className="text-gray-600 leading-relaxed">
                        Create an account on the web application to initialize accounts (Cash, Bank, E-Wallet) and custom spending categories.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono font-bold text-emerald-600">Step 2 · Daily Logging</span>
                      <p className="font-bold text-gray-950">Dual-Channel Rapid Capture</p>
                      <p className="text-gray-600 leading-relaxed">
                        Input on-the-go via Telegram bot (<a href="https://t.me/DompetPintar_A76Labs_Bot" target="_blank" rel="noopener noreferrer" className="underline font-mono text-gray-900">@DompetPintar_A76Labs_Bot</a>) in under 5 seconds, or via web form with zero friction.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono font-bold text-purple-600">Step 3 · Reconciliation</span>
                      <p className="font-bold text-gray-950">Monthly Review &amp; Excel Export</p>
                      <p className="text-gray-600 leading-relaxed">
                        Review inflow/outflow balance trends on the dashboard and export structured spreadsheet statements for personal records.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Scope Notice */}
              <div className="pt-4 border-t border-gray-100 flex items-start gap-2.5 text-xs text-gray-500">
                <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Product Scope Notice:</strong> Dompet Pintar is strictly a personal bookkeeping and cashflow tracking utility. It does not provide financial advisory services, investment recommendations, or automated banking operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY A76LABS / PRODUCT PHILOSOPHY */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 rounded-2xl border border-gray-200 bg-gray-50/60">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">Product Direction</span>
                <h2 className="text-2xl font-bold text-gray-950">Practical tools for tangible problems.</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We build software designed to eliminate friction in daily tasks. We avoid bloated multi-tier feature sets and market speculation, focusing instead on software that performs its intended task reliably and simply.
                </p>
              </div>

              <div className="space-y-3 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">Engineering Discipline</span>
                <h2 className="text-2xl font-bold text-gray-950">Ship, maintain, and iterate with rigor.</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  From initial prototype to live deployment, every product is maintained directly by engineering leadership. We prioritize clean architectures, strict schema contracts, and deterministic error handling over fragile cleverness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER & LEADERSHIP */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="p-8 sm:p-10 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-[#027FDB]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">
                    Founder & Engineering Leadership
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-500">
                  Banda Aceh, Indonesia · S.Kom. (Information Technology)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-950">
                    Founded & Led by Muhammad Syukur
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A76LABS is founder-led. Technical architecture, product engineering, deployment infrastructure, and security research are driven directly by founder Muhammad Syukur. The founder brings hands-on experience building and maintaining live university administrative systems, operational API integrations, and access control research prototypes.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    By keeping the startup founder-led and engineering-driven, we maintain rapid iteration velocity, eliminate communication layers, and ensure every line of code meets strict production quality standards.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
                    <a
                      href="https://syukur.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-900 hover:text-[#027FDB]"
                    >
                      Founder Profile: syukur.dev <ArrowUpRight size={13} />
                    </a>
                    <a
                      href="https://github.com/SyukurGit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-900 hover:text-[#027FDB]"
                    >
                      GitHub Profile: @SyukurGit <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-3 text-xs font-mono text-gray-700">
                  <p className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Founder Background</p>
                  <p>• Bachelor of Information Technology (S.Kom.), thesis on application security (2026)</p>
                  <p>• Primary backend & systems engineering stack: Go, Laravel, Next.js, MySQL, SQLite</p>
                  <p>• Built operational institutional systems serving academic faculty and students</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-ASSISTED ENGINEERING WORKFLOW & RESEARCH ROADMAP */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="p-8 sm:p-10 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Cpu size={20} className="text-[#027FDB]" />
                  <h3 className="text-xl font-bold text-gray-950">AI Tooling &amp; Architecture Roadmap</h3>
                </div>
                <span className="text-xs font-mono text-gray-500">
                  Engineering Leverage · Pragmatic Evaluation
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                A76LABS utilizes modern AI-assisted engineering workflows—specifically Claude Code—for codebase navigation, architectural prototyping, test synthesis, and iterative documentation under direct founder verification. We maintain strict demarcation between our current developer toolchain and future model API integrations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs text-gray-700 font-mono">
                <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-950">Current: Claude Code Toolchain</p>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Active Daily</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-sans text-xs">
                    Applied exclusively as a local CLI accelerator for rapid refactoring, type definitions, and test harness authoring. Every generated line is verified by human engineering leadership before deployment.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-950">Planned: Claude API Integration</p>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Labs Evaluation</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-sans text-xs">
                    Evaluating Claude 3.5 Haiku/Sonnet API for natural language transaction extraction from Indonesian conversational messages. Production applications operate on deterministic commands today; API integration is in active evaluation design.
                  </p>
                  <Link href="/labs" className="text-xs font-semibold text-[#027FDB] hover:underline inline-flex items-center gap-1 pt-1 font-mono">
                    View Labs Evaluation Protocol →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER PROFESSIONAL ENGINEERING WORK */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">Founder Engineering Track Record</span>
                <h2 className="text-3xl font-extrabold text-gray-950 mt-1">Institutional Systems &amp; Integrations</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Practical web systems and software integrations developed by founder Muhammad Syukur during institutional engagements.
                </p>
              </div>
              <Link 
                href="/work" 
                className="text-xs font-semibold text-gray-800 hover:text-black flex items-center gap-1 group"
              >
                All Selected Work <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 text-xs text-blue-950 leading-relaxed mb-8 font-mono space-y-1">
              <div>
                <strong>Verifiable Public Proof &amp; Institutional Attribution:</strong> These operational systems were engineered by founder Muhammad Syukur during institutional and internship roles at Universitas Islam Negeri Ar-Raniry. Their production status and founder authorship can be audited directly on live state university portals (such as the active developer watermark on <a href="https://en.pps.ar-raniry.ac.id/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#027FDB]">en.pps.ar-raniry.ac.id</a> linking to <em>syukur.dev</em>).
              </div>
              <div className="text-[11px] text-blue-800">
                <strong>Demarcation:</strong> Documented here as factual proof of engineering competence supporting A76LABS, not as corporate A76LABS vendor contracts or proprietary SaaS products.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pascasarjana */}
              <div className="p-6 rounded-xl border border-gray-200 bg-white flex flex-col justify-between hover:border-gray-300 transition-all shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                      Live · Institutional
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">Laravel</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-950 mb-1">
                    Sistem Informasi Pascasarjana
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">UIN Ar-Raniry · Role: Primary Developer</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Academic portal and administrative panel serving public academic programs, defense schedules, and faculty administration.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link href="/work/pascasarjana" className="text-xs font-semibold text-gray-900 hover:text-[#027FDB]">
                    Case study →
                  </Link>
                  <a 
                    href="https://en.pps.ar-raniry.ac.id/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-gray-900 flex items-center gap-0.5"
                  >
                    Live <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Perpustakaan */}
              <div className="p-6 rounded-xl border border-gray-200 bg-white flex flex-col justify-between hover:border-gray-300 transition-all shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                      Live · Operational
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">API Integration</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-950 mb-1">
                    Sistem Denda & Bebas Pustaka
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">UIN Ar-Raniry · Role: Developer & Integration</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Library operational system connecting fine data APIs, payment verification, automated PDF certificates, and QR verification.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link href="/work/perpustakaan" className="text-xs font-semibold text-gray-900 hover:text-[#027FDB]">
                    Case study →
                  </Link>
                  <a 
                    href="https://admin.opac.ar-raniry.ac.id/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-gray-900 flex items-center gap-0.5"
                  >
                    Live <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Tokenetic */}
              <div className="p-6 rounded-xl border border-gray-200 bg-white flex flex-col justify-between hover:border-gray-300 transition-all shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                      Maintenance
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">Telegram Bot</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-950 mb-1">
                    Tokenetic
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">Data Aggregator & Market Analysis</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Telegram bot synthesizing price feeds, trading volume, order depth, and market news across multiple external APIs.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link href="/work/tokenetic" className="text-xs font-semibold text-gray-900 hover:text-[#027FDB]">
                    Case study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESEARCH / SECURITY */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="p-8 sm:p-10 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Academic Research · 2026
                  </span>
                  <span className="text-xs font-mono text-gray-400">Application Security & Access Control</span>
                </div>
                <span className="text-xs font-mono text-gray-500">Author: Muhammad Syukur</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-950 mb-2">
                  Least Privilege & Just-in-Time Access Control Prototype
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                  Undergraduate research examining contextual access control mechanisms in digital wallet architectures. Evaluates how traditional Role-Based Access Control (RBAC) is constrained through ticket-bound scoping and ephemeral Just-in-Time sessions to prevent unauthorized internal data inspection.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-700">
                  <span className="px-2 py-0.5 bg-gray-100 rounded">Go / Gin</span>
                  <span className="px-2 py-0.5 bg-gray-100 rounded">Docker</span>
                  <span className="px-2 py-0.5 bg-gray-100 rounded">19 Empirical Test Scenarios</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/research/least-privilege-jit"
                    className="text-xs font-semibold text-gray-900 hover:text-[#027FDB]"
                  >
                    Research Overview →
                  </Link>
                  <a
                    href="https://skripsi.syukur.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-gray-500 hover:text-gray-900 flex items-center gap-1"
                  >
                    Interactive Portal <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST UPDATES / BUILD LOG PREVIEW */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="p-8 sm:p-10 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#027FDB] mb-2 font-semibold">
                  <Clock size={13} />
                  <span>Build Log & Milestones</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950">
                  Operating & Iterating Since Late 2025
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-xl mt-1 leading-relaxed">
                  Track our chronological milestone history from domain registration and early Telegram bot integration to ongoing ledger optimization.
                </p>
              </div>
              <Link
                href="/updates"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-semibold bg-gray-950 text-white hover:bg-gray-800 transition-colors shrink-0 shadow-sm"
              >
                <span>View Full Timeline</span>
                <ArrowRight size={14} className="ml-1.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="p-8 sm:p-12 rounded-2xl bg-gray-950 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Direct Communication</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 mb-2">Have a question or engineering collaboration inquiry?</h2>
                <p className="text-sm text-gray-400 max-w-xl">
                  Reach out directly to engineering and product leadership. No sales representatives.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-semibold bg-white text-gray-950 hover:bg-gray-100 transition-colors"
                >
                  Send a Message
                </Link>
                <a
                  href="mailto:team@a76labs.online"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-semibold border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                >
                  team@a76labs.online
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
