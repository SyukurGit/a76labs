import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Terminal, ShieldCheck, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "A76LABS — Practical Digital Products",
  description: "A76LABS is an independent, founder-led product lab building practical digital products, software tools, and focused experiments.",
  openGraph: {
    title: "A76LABS — Practical Digital Products",
    description: "A76LABS is an independent, founder-led product lab building practical digital products, software tools, and focused experiments.",
    url: "https://www.a76labs.online",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "A76LABS",
  url: "https://www.a76labs.online",
  description: "A76LABS is an independent, founder-led product lab building practical digital products, software tools, and focused experiments.",
  founder: {
    "@type": "Person",
    name: "Muhammad Syukur",
    url: "https://syukur.dev",
  },
  sameAs: [
    "https://github.com/SyukurGit",
  ],
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
        <section className="pt-20 md:pt-28 pb-12 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-left sm:text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-8">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Independent Product Lab · Indonesia (WIB UTC+7)
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-950 mb-6 leading-[1.12]">
              Practical digital products, <br className="hidden sm:inline" />
              built with <span className="text-[#027FDB]">strong engineering</span>.
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl sm:mx-auto leading-relaxed">
              A76LABS is an independent, founder-led product lab building practical digital products, software tools, and focused experiments from idea to working software.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4 mb-6">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold bg-gray-950 text-white hover:bg-gray-800 transition-colors shadow-sm"
              >
                <span>Explore Products</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors"
              >
                View Selected Work
              </Link>
            </div>

            <p className="text-xs font-mono text-gray-500">
              Product-first. Engineering-driven. Built to be useful.
            </p>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 rounded-2xl border border-gray-200 bg-gray-50/60">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">Vision</span>
                <h2 className="text-2xl font-bold text-gray-950">Simple tools for real problems.</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Build useful software that turns complex problems into simpler tools. We do not chase trends or build superfluous complexity—we build what actually works.
                </p>
              </div>

              <div className="space-y-3 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">Mission</span>
                <h2 className="text-2xl font-bold text-gray-950">Discipline from prototype to production.</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Build, validate, and continuously improve practical digital products through strong engineering, focused experimentation, and modern development workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#027FDB] font-semibold">Product Studio</span>
                <h2 className="text-3xl font-extrabold text-gray-950 mt-1">Our Products</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Products built and operated under the A76LABS banner.
                </p>
              </div>
              <Link 
                href="/products" 
                className="text-xs font-semibold text-gray-800 hover:text-black flex items-center gap-1 group"
              >
                All products <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dompet Pintar */}
              <div className="flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-all shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Active
                    </span>
                    <span className="text-xs font-mono text-gray-400">Web · Telegram</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-950 mb-2">Dompet Pintar</h3>
                  <p className="text-xs font-medium text-gray-500 mb-4">
                    Personal cashflow management with web dashboard & Telegram bot
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    A personal finance tracking tool combining a web dashboard, fast expense input via Telegram, multi-account ledger, and Excel reporting for periodic financial review.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["Next.js", "Go", "Tailwind CSS", "Telegram Bot API", "Excel Report"].map((tech) => (
                      <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <Link 
                    href="/products/dompet-pintar" 
                    className="text-xs font-semibold text-gray-900 hover:text-[#027FDB] flex items-center gap-1"
                  >
                    Product details <ArrowRight size={13} />
                  </Link>
                  <a 
                    href="https://dompetpintar.a76labs.online" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-mono font-medium text-gray-500 hover:text-gray-950 flex items-center gap-1"
                  >
                    Open app <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Neon Dash */}
              <div className="flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-all shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      Active · Exploring
                    </span>
                    <span className="text-xs font-mono text-gray-400">Monitoring</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-950 mb-2">Neon Dash</h3>
                  <p className="text-xs font-medium text-gray-500 mb-4">
                    Real-time server analytics and metrics monitoring dashboard
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    A lightweight, real-time metrics dashboard designed for low-overhead operational visibility without the complexity and resource footprint of heavy enterprise monitoring suites.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["React", "WebSockets", "D3.js", "TypeScript"].map((tech) => (
                      <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <Link 
                    href="/products/neon-dash" 
                    className="text-xs font-semibold text-gray-900 hover:text-[#027FDB] flex items-center gap-1"
                  >
                    Product details <ArrowRight size={13} />
                  </Link>
                  <span className="text-xs font-mono text-gray-400">
                    Prototype Direction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED WORK PREVIEW */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-4 pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">Engineering Evidence</span>
                <h2 className="text-3xl font-extrabold text-gray-950 mt-1">Selected Work</h2>
                <p className="text-gray-600 text-sm mt-1 max-w-2xl">
                  Beyond our own products, A76LABS founder has built and maintained real systems for institutional and operational environments.
                </p>
              </div>
              <Link 
                href="/work" 
                className="text-xs font-semibold text-gray-800 hover:text-black flex items-center gap-1 group"
              >
                All case studies <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="bg-amber-50/60 border border-amber-200/60 rounded-lg px-4 py-2.5 text-xs text-amber-900 mb-8 font-mono">
              Note: Institutional systems listed here represent engineering work built and maintained by the founder, not company-owned assets.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pascasarjana */}
              <div className="p-6 rounded-xl border border-gray-200 bg-white flex flex-col justify-between hover:border-gray-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                      Live · Institutional
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">Laravel</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-950 mb-1">
                    Sistem Informasi Pascasarjana
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">UIN Ar-Raniry · Role: Primary Developer</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Academic portal and administrative panel serving public academic programs, schedules, and faculty administration.
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
              <div className="p-6 rounded-xl border border-gray-200 bg-white flex flex-col justify-between hover:border-gray-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                      Live · Operational
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">API Integration</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-950 mb-1">
                    Sistem Denda & Bebas Pustaka
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">UIN Ar-Raniry · Role: Developer & Integration</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Library operational system connecting fine data APIs, payment processing, automated PDF certificates, and QR verification.
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
              <div className="p-6 rounded-xl border border-gray-200 bg-white flex flex-col justify-between hover:border-gray-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                      Maintenance
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">Telegram Bot</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-950 mb-1">
                    Tokenetic
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">Market Analysis & Data Aggregator</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Telegram bot synthesizing price data, market depth, trading volume, and news across multiple APIs. Not an execution or trading system.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link href="/work/tokenetic" className="text-xs font-semibold text-gray-900 hover:text-[#027FDB]">
                    Case study →
                  </Link>
                  <a 
                    href="https://t.me/Tokenetic_Bot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-gray-900 flex items-center gap-0.5"
                  >
                    Bot <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY RESEARCH HIGHLIGHT */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="p-8 sm:p-10 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-indigo-600" />
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 font-semibold">
                    Systems & Security Research · 2026
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-950">
                  Least Privilege & Just-in-Time Access Prototypes
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Academic thesis research by the founder implementing fine-grained, ticket-scoped internal access control and temporary Just-in-Time (JIT) elevated sessions on a digital wallet backend. Verified across 19 scenario-based tests.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500 pt-1">
                  <span>Stack: Go · Gin · MySQL · Docker</span>
                  <span>·</span>
                  <span>Author: Muhammad Syukur</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/research/least-privilege-jit"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold bg-gray-950 text-white hover:bg-gray-800 transition-colors"
                >
                  Read Research Overview
                </Link>
                <a
                  href="https://skripsi.syukur.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Research Site <ArrowUpRight size={13} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI-ASSISTED DEVELOPMENT & FOUNDER */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Positioning */}
            <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-4">
              <div className="flex items-center gap-2 text-gray-950 font-bold">
                <Cpu size={20} className="text-[#027FDB]" />
                <h3 className="text-xl">AI-Assisted Product Development</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                We increasingly use modern AI tools across product engineering for prototyping, architecture exploration, debugging, evaluation, automation, and iteration. We are also exploring where AI-powered capabilities create genuine product value.
              </p>
              <div className="pt-2 text-xs font-mono text-gray-500 space-y-1">
                <p>• Used for engineering leverage, not marketing decoration</p>
                <p>• Strict human review of code, logic, and security boundaries</p>
              </div>
            </div>

            {/* Founder-Led Note */}
            <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-4">
              <div className="flex items-center gap-2 text-gray-950 font-bold">
                <Terminal size={20} className="text-gray-900" />
                <h3 className="text-xl">Founder-Led Software Company</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                A76LABS is currently founder-led, with product engineering, architecture, research, and experimentation driven directly by its founder, Muhammad Syukur.
              </p>
              <div className="pt-2">
                <a
                  href="https://syukur.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-gray-900 hover:text-[#027FDB] gap-1"
                >
                  View founder portfolio at syukur.dev <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="p-8 sm:p-12 rounded-2xl bg-gray-950 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Start a Conversation</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 mb-2">Have a question or collaboration idea?</h2>
                <p className="text-sm text-gray-400 max-w-xl">
                  Reach out directly. No sales representatives, straight to engineering and product.
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
                  href="mailto:founder@a76labs.online"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-semibold border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                >
                  founder@a76labs.online
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
