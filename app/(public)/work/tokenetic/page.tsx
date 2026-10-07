import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tokenetic — Case Study",
  description: "Telegram-based market data aggregator and analysis bot synthesizing multiple APIs into structured responses.",
};

export default function TokeneticCaseStudy() {
  return (
    <article className="min-h-screen py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Selected Work
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-gray-100 pb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              Maintenance
            </span>
            <span className="text-xs font-mono text-gray-400">Telegram Bot & Data Aggregator</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 mb-3">
            Tokenetic
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Market analysis and data aggregation bot synthesizing live market feeds, trading volume, order book depth, and relevant news into unified Telegram responses.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a 
              href="https://t.me/Tokenetic_Bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gray-950 text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors shadow-sm"
            >
              Open Telegram Bot <ArrowUpRight size={13} />
            </a>
            <a 
              href="https://github.com/SyukurGit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-gray-200 bg-white text-gray-800 px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
            >
              Founder GitHub <ArrowUpRight size={13} />
            </a>
          </div>
        </header>

        {/* Critical Disclaimer */}
        <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/60 text-xs text-amber-900 leading-relaxed mb-10 flex items-start gap-2.5 font-mono">
          <AlertCircle size={16} className="text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5">Strict Utility Scope</strong>
            Tokenetic is strictly a data aggregation and information formatting utility. It does NOT execute trades, manage funds, provide financial advice, or operate an algorithmic trading strategy.
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">Context & Background</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Cryptocurrency analysts and traders frequently spend hours toggling across disparate browser tabs—checking spot tickers on one platform, reviewing order book depth on another, checking 24-hour volume spikes on a third, and scanning news aggregators on a fourth. Tokenetic was engineered to condense this scattered investigation into a fast conversational query interface.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">The Engineering Problem</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                Each financial API employs different data schemas, polling rate limits, and latency profiles. Transforming these conflicting payload structures into a single coherent, human-readable Telegram response without exceeding messaging payload limits or causing request timeouts was the central technical challenge.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#027FDB] font-semibold mb-2">Solution & Data Pipeline</h2>
              <p className="text-gray-700 leading-relaxed text-sm mb-6">
                The bot handles incoming chat commands, queries corresponding REST endpoints concurrently, extracts primary market signals, and returns cleanly formatted Markdown and visual chart snapshots directly into Telegram.
              </p>

              <h3 className="text-sm font-bold text-gray-950 mb-3">Key Technical Features</h3>
              <ul className="space-y-2.5">
                {[
                  "Market Data Ingestion: Spot price queries, 24-hour high/low metrics, and percentage changes across selected asset pairs.",
                  "Order Book Depth Parsing: Summaries of top bids and asks to observe local liquidity concentration.",
                  "Volume Analysis: Aggregated trading volume indicators to gauge market activity.",
                  "News Ingestion: Contextual headlines pulled from market feeds relating to queried tokens.",
                  "Visual Chart Responses: Server-side rendering and delivery of lightweight chart graphics directly into chat."
                ].map((cap, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Project Profile
              </h3>
              <div className="text-xs space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-semibold text-gray-950">Telegram Bot</span>
                </div>
                <div className="flex justify-between">
                  <span>Founder Role:</span>
                  <span className="font-semibold text-gray-950">Developer</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-semibold text-amber-700">Maintenance</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Telegram Bot API", "REST APIs", "Data Aggregation", "JSON Parsing", "Image Generation"].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 bg-gray-100 text-gray-800 text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
