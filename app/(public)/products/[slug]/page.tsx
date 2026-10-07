import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface ProductDetail {
  slug: string;
  name: string;
  tagline: string;
  status: "Active" | "Beta" | "Exploring" | "Archived";
  category: string;
  description: string;
  problem: string;
  solution: string;
  capabilities: string[];
  techStack: string[];
  disclaimer?: string;
  demoUrl?: string;
  repoUrl?: string;
  plannedFeatures?: string[];
}

const PRODUCTS_DATA: Record<string, ProductDetail> = {
  "dompet-pintar": {
    slug: "dompet-pintar",
    name: "Dompet Pintar",
    tagline: "Personal cashflow tracking with web dashboard & Telegram bot",
    status: "Active",
    category: "Personal Finance & Cashflow",
    description: "Dompet Pintar is a personal cashflow management application combining a web dashboard, structured transaction recording, account management, Excel reporting, and Telegram bot input workflows.",
    problem: "Most individuals fail to maintain consistent financial records because standard accounting software is overly convoluted, while simple note apps lack aggregation, categorization, and reporting. The friction of opening an app, authenticating, and navigating menus causes missed entries.",
    solution: "Dompet Pintar solves this by offering a zero-friction dual-channel input mechanism: quick expense inputs happen in seconds through an interactive Telegram bot, while high-level reviews, category management, and data exports take place in a responsive web dashboard.",
    capabilities: [
      "Dual input channels: Web interface for management, Telegram bot for instant on-the-go entries.",
      "Categorized cashflow tracking: Automatic separation of income vs. expenses with custom categories.",
      "Cashflow summaries: Monthly and periodic net balance overviews with visual trend charts.",
      "Structured Excel exports: Filter transactions by date ranges and export audit-ready spreadsheets.",
      "Account & access management: Protected account sessions with isolated per-user ledger records."
    ],
    techStack: ["Next.js", "Go", "Gin Framework", "Tailwind CSS", "Telegram Bot API", "SQLite / Turso"],
    disclaimer: "Dompet Pintar is strictly a personal cashflow tracking and bookkeeping utility. It does NOT provide financial advisory services, investment recommendations, automated trading, or regulated financial services.",
    demoUrl: "https://dompetpintar.a76labs.online"
  },
  "neon-dash": {
    slug: "neon-dash",
    name: "Neon Dash",
    tagline: "Real-time analytics and server monitoring dashboard",
    status: "Active",
    category: "Infrastructure Monitoring Prototype",
    description: "A lightweight, real-time metrics dashboard designed for low-overhead operational visibility without the complexity and resource footprint of heavy enterprise monitoring suites.",
    problem: "Enterprise observability platforms (e.g. Datadog, Prometheus/Grafana clusters) require substantial configuration, dedicated servers, memory overhead, and complex query languages—making them excessive for lean micro-services, independent developers, or small VPS setups.",
    solution: "Neon Dash provides a focused monitoring surface delivering instantaneous socket-based telemetry and reactive charting with minimal resource utilization and zero heavyweight background daemons.",
    capabilities: [
      "Real-time WebSocket streaming: Low-latency metric propagation directly into the UI.",
      "Reactive charting engine: Built with D3.js and React for crisp, performant data visualizations.",
      "Zero-daemon health pings: HTTP and heartbeat pinging without cumbersome remote agent installations.",
      "Responsive operational surface: Designed for fast triage on desktop and mobile devices."
    ],
    plannedFeatures: [
      "Threshold-based webhook alerts (Telegram & Discord)",
      "Multi-node health federation",
      "Historical time-series rollups export"
    ],
    techStack: ["React", "WebSockets", "D3.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/SyukurGit/a76labs"
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();
  const product = PRODUCTS_DATA[normalizedSlug];

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();
  const product = PRODUCTS_DATA[normalizedSlug];

  if (!product) {
    notFound();
  }

  return (
    <article className="min-h-screen py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/products" 
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Products
        </Link>

        <header className="mb-12 border-b border-gray-100 pb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
              product.status === "Active" 
                ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                : "bg-blue-50 text-blue-700 border-blue-200"
            }`}>
              {product.status}
            </span>
            <span className="text-xs font-mono text-gray-400">/ {product.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-3">
            {product.name}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
            {product.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {product.demoUrl && (
              <a 
                href={product.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gray-950 text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors shadow-sm"
              >
                Open Live Application <ArrowUpRight size={13} />
              </a>
            )}
            {product.repoUrl && (
              <a 
                href={product.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-gray-200 bg-white text-gray-800 px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
              >
                View Repository <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </section>

            <section className="p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">The Problem</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {product.problem}
              </p>
            </section>

            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#027FDB] font-semibold mb-2">The Solution</h2>
              <p className="text-gray-700 leading-relaxed text-sm mb-6">
                {product.solution}
              </p>

              <h3 className="text-sm font-bold text-gray-950 mb-3">Key Capabilities</h3>
              <ul className="space-y-2.5">
                {product.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </section>

            {product.plannedFeatures && (
              <section className="p-6 rounded-xl border border-blue-100 bg-blue-50/30">
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold mb-2">
                  Roadmap / Exploring
                </h3>
                <ul className="space-y-1.5">
                  {product.plannedFeatures.map((item, i) => (
                    <li key={i} className="text-xs text-gray-600 font-mono flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {product.disclaimer && (
              <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/40 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                <AlertCircle size={16} className="text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block mb-0.5">Product Scope Notice</strong>
                  {product.disclaimer}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {product.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 bg-gray-100 text-gray-800 text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Product Lifecycle
              </h3>
              <div className="text-xs space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-semibold text-gray-950">{product.status}</span>
                </div>
                <div className="flex justify-between">
                  <span>Maintenance:</span>
                  <span className="font-semibold text-gray-950">Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Operated by:</span>
                  <span className="font-semibold text-gray-950">A76LABS</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
