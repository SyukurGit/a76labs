import { Metadata } from "next";
import { Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Labs — R&D Experiments",
  description: "Focused experiments, prototypes, and technical investigations by A76LABS.",
};

interface LabItem {
  id: number;
  slug: string;
  title: string;
  type: "Prototype" | "Experiment" | "Research" | "Archived" | "Maintenance";
  purpose: string;
  technologies: string[];
  learned: string;
}

const STATIC_LABS: LabItem[] = [
  {
    id: 101,
    slug: "claude-api-evaluation",
    title: "Evaluation Protocol: Claude API for Indonesian Cashflow Transaction Parsing",
    type: "Experiment",
    purpose: "Testing Claude 3.5 Haiku/Sonnet via the Anthropic Claude API for structured extraction of financial transaction records (amount, transaction type, category, and date) from colloquial Indonesian chat inputs (e.g., 'kemarin beli bensin 50rb di pertamina', 'tf ke budi 150rb bayar kas').",
    technologies: ["Anthropic Claude API", "Structured Outputs / Tool Calling", "Zod Schema", "TypeScript", "Prompt Testing"],
    learned: "Decoupling LLM parsing from execution and enforcing rigid Zod JSON schemas prevents hallucinated data from corrupting database ledgers. Current production Dompet Pintar operates strictly on deterministic commands (/in, /out, /saldo); Claude API remains an experimental architecture undergoing evaluation across 5 criteria: schema validity, Indonesian semantic accuracy, roundtrip latency (<1.2s), client-side PII regex pre-filtering, and token economics per transaction."
  },
  {
    id: 102,
    slug: "ephemeral-jit-session-engine",
    title: "Micro-Session Just-in-Time Access Engine",
    type: "Prototype",
    purpose: "Lightweight Redis-free ephemeral authorization layer enforcing maximum 15-minute operational session leases on Go backends.",
    technologies: ["Go", "Gin", "JWT Claims", "Cryptographic Signatures"],
    learned: "Short-lived cryptographic tokens with signed ticket context eliminate continuous database session lookups while preserving zero-trust guarantees."
  }
];

export default function LabsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 pb-8 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-4">
            R&D Space
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 mb-3">
            Labs &amp; Experiments
          </h1>
          <p className="text-gray-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            Focused explorations, architectural prototypes, and engineering experiments. This space is used to validate technical feasibility and workflow ideas before turning them into products.
          </p>
        </div>

        {/* AI Demarcation Banner */}
        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 text-xs text-blue-950 font-mono leading-relaxed mb-8 space-y-1">
          <strong className="block text-blue-900">AI Toolchain Demarcation:</strong>
          Claude Code is utilized daily as a developer CLI toolchain for accelerated software engineering, test authoring, and codebase refactoring. In contrast, Claude API integration into Dompet Pintar is currently an experimental architecture plan undergoing rigorous evaluation in this Labs space, and is not yet deployed to production.
        </div>

        <div className="space-y-6">
          {STATIC_LABS.map((item) => (
            <div
              key={item.id}
              id={item.slug}
              className="p-6 sm:p-7 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all shadow-sm space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-bold text-gray-950">
                    {item.title}
                  </h2>
                  <span
                    className={
                      item.type === "Prototype"
                        ? "text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border bg-blue-50 text-blue-700 border-blue-200"
                        : "text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border bg-purple-50 text-purple-700 border-purple-200"
                    }
                  >
                    {item.type}
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-400">/{item.slug}</span>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-1">Purpose</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.purpose}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
                  <Lightbulb size={14} className="text-amber-500" />
                  <span>Key Technical Takeaway</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-5">
                  {item.learned}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-100">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
