import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowUpRight, ShieldCheck, Lock, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Systems Security",
  description: "Technical research, application security prototypes, and backend access control explored by the founder.",
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 pb-8 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-4">
            Security & Systems R&D
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 mb-4">
            Research & Systems Security
          </h1>
          <p className="text-gray-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            Explorations in application security, backend access control models, least privilege enforcement, and temporary just-in-time session mechanics.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70 text-xs text-gray-700 leading-relaxed mb-12 font-mono">
          <strong className="font-semibold block text-gray-900 mb-1">Research Positioning</strong>
          The work documented in this section represents foundational academic and technical security research conducted by founder Muhammad Syukur. These projects are prototypes and research demonstrations, not commercial products or turnkey security appliances.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-3">
            <Lock size={20} className="text-[#027FDB]" />
            <h3 className="font-bold text-gray-950 text-base">Least Privilege Architecture</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Constraining operational scopes beyond coarse role definitions. Ensuring operators only access specific data records tied to an active, assigned operational ticket.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-3">
            <Key size={20} className="text-indigo-600" />
            <h3 className="font-bold text-gray-950 text-base">Just-in-Time (JIT) Sessions</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Eliminating permanent standing administrative privileges by granting temporary, time-bounded elevation sessions for high-risk backend modifications.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-3">
            <ShieldCheck size={20} className="text-emerald-600" />
            <h3 className="font-bold text-gray-950 text-base">Deterministic Audit Logging</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Immutable logging of access grants, elevations, and denied requests across all internal security boundaries to verify compliance under audit conditions.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                Academic Research · 2026
              </span>
              <span className="text-xs font-mono text-gray-400">Undergraduate Thesis Prototype</span>
            </div>
            <span className="text-xs font-mono text-gray-500">Author: Muhammad Syukur</span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-3">
              Implementasi Mekanisme Least Privilege dan Just-in-Time Access pada Layer Kontrol Akses Pengguna Internal dalam Prototipe Sistem Dompet Digital
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
              Backend architecture implementing contextual access restriction on digital wallet systems. Evaluates how traditional Role-Based Access Control (RBAC) can be extended using ticket-bound scoping and ephemeral Just-in-Time sessions to prevent insider data leakage and unauthorized modifications.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 font-mono text-xs text-gray-700 space-y-1.5">
            <p><strong>Empirical Findings:</strong> Evaluated against 19 concrete test scenarios encompassing Customer Support ticket validation, temporary Operational elevation, and unauthorized cross-account inspection.</p>
            <p><strong>Stack:</strong> Go · Gin Framework · MySQL · Docker</p>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/research/least-privilege-jit"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-950 hover:text-[#027FDB]"
            >
              Read Detailed Research Breakdown <ArrowRight size={13} />
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://skripsi.syukur.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-gray-600 hover:text-black flex items-center gap-1"
              >
                Interactive Research Portal <ArrowUpRight size={12} />
              </a>
              <a
                href="https://github.com/SyukurGit/backend-skripsi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-gray-600 hover:text-black flex items-center gap-1"
              >
                Backend Repo <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
