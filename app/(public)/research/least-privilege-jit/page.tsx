import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Least Privilege & Just-in-Time Access — Research Case Study",
  description: "Research prototype for internal backend access control using assignment tickets and temporary JIT sessions in a digital wallet system.",
};

export default function LeastPrivilegeResearchPage() {
  return (
    <article className="min-h-screen py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/research" 
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Research Overview
        </Link>

        <header className="mb-12 border-b border-gray-100 pb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              Research Prototype · 2026
            </span>
            <span className="text-xs font-mono text-gray-400">Application Security & Access Control</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-950 mb-4 leading-snug">
            Least Privilege & Just-in-Time Access untuk Kontrol Akses Pengguna Internal
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Implementasi kontrol akses berlapis pada backend untuk membatasi lingkup data pengguna internal melalui tiket tugas dan membatasi durasi operasi sensitif melalui sesi Just-in-Time.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a 
              href="https://skripsi.syukur.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gray-950 text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors shadow-sm"
            >
              Open Research Portal <ArrowUpRight size={13} />
            </a>
            <a 
              href="https://github.com/SyukurGit/backend-skripsi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-gray-200 bg-white text-gray-800 px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
            >
              Backend Repository <ArrowUpRight size={13} />
            </a>
            <a 
              href="https://github.com/SyukurGit/frontend-skripsi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-gray-200 bg-white text-gray-800 px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
            >
              Frontend Repository <ArrowUpRight size={13} />
            </a>
          </div>
        </header>

        <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 text-xs text-gray-700 leading-relaxed mb-10 font-mono">
          <strong>Framing Notice:</strong> This research was conducted by founder Muhammad Syukur as part of academic research in Information Technology at UIN Ar-Raniry Banda Aceh (2026). It is presented here as technical evidence of backend security and authorization engineering, not as a commercial SaaS product.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <section className="p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">The Security Problem</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                In many digital wallet and financial backend systems, internal employee permissions are overly broad. Conventional Role-Based Access Control (RBAC) separates duties (e.g. &quot;Customer Support&quot; vs. &quot;Finance&quot;), but once assigned a role, staff often retain persistent ability to query any customer account or execute high-risk operations across the entire database at all hours, creating insider threat risks and credential-hijacking vulnerabilities.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#027FDB] font-semibold mb-2">Two-Tiered Control Approach</h2>
              <p className="text-gray-700 leading-relaxed text-sm mb-6">
                The research designed and implemented a dual-layer access enforcement architecture on a Go backend:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl border border-gray-200 bg-white">
                  <h3 className="font-bold text-gray-950 text-sm mb-1">1. Ticket-Scoped Least Privilege</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Customer Support personnel cannot arbitrarily query arbitrary user balances or transaction histories. Read permissions are restricted strictly to the user associated with an actively assigned, in-progress support ticket.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-white">
                  <h3 className="font-bold text-gray-950 text-sm mb-1">2. Ephemeral Just-in-Time (JIT) Sessions</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    High-risk operations (such as manual balance reconciliations or account unfreezing) cannot be triggered from regular session tokens. The operator must request a JIT elevation token, valid for a strictly bounded window (TTL), backed by automated audit trail capture.
                  </p>
                </div>
              </div>

              <h3 className="text-sm font-bold text-gray-950 mb-3">Empirical Test Results</h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                The prototype backend was evaluated across 19 concrete security scenarios designed to stress authorization boundaries:
              </p>

              <ul className="space-y-2">
                {[
                  "Verified CS access denial to unassigned customer accounts (Out-of-scope block).",
                  "Verified automated session revocation upon ticket closure or reassignment.",
                  "Verified strict expiration and rejection of expired JIT elevation tokens.",
                  "100% concordance between expected and actual allow/deny outcomes across all 19 test vectors."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Research Metadata
              </h3>
              <div className="text-xs space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Author:</span>
                  <span className="font-semibold text-gray-950">Muhammad Syukur</span>
                </div>
                <div className="flex justify-between">
                  <span>Year:</span>
                  <span className="font-semibold text-gray-950">2026</span>
                </div>
                <div className="flex justify-between">
                  <span>Field:</span>
                  <span className="font-semibold text-gray-950">App Security</span>
                </div>
                <div className="flex justify-between">
                  <span>Verification:</span>
                  <span className="font-semibold text-emerald-700">19/19 Scenarios</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Go (Golang)", "Gin Framework", "MySQL", "Docker", "JWT", "RBAC Middleware", "Audit Logger"].map((tech) => (
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
