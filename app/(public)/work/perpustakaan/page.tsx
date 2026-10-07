import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sistem Denda & Bebas Pustaka UIN Ar-Raniry — Case Study",
  description: "Operational library fine tracking, clearance letter generation, and QR verification system.",
};

export default function PerpustakaanCaseStudy() {
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
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Live · In Operational Use
            </span>
            <span className="text-xs font-mono text-gray-400">Library Operational Workflow</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 mb-3">
            Sistem Denda & Surat Bebas Pustaka UIN Ar-Raniry
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Integrated clearance platform connecting library overdue fine APIs, payment workflow validation, dynamic PDF letter generation, and cryptographic QR code verification.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a 
              href="https://admin.opac.ar-raniry.ac.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gray-950 text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors shadow-sm"
            >
              Open Operational Portal <ArrowUpRight size={13} />
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

        {/* Framing notice */}
        <div className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/50 text-xs text-amber-900 leading-relaxed mb-10 font-mono">
          <strong>Framing Notice:</strong> This system was engineered and integrated by founder Muhammad Syukur for UPT Perpustakaan UIN Ar-Raniry. A76LABS presents this case study as documented engineering evidence of backend system integration.
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">Context</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Graduating university students are required to clear library obligations before taking part in graduation and collecting academic credentials. This requires checking whether students have outstanding book loans or overdue late fees, ensuring payment reconciliation, and issuing a signed certificate of clearance (Surat Bebas Pustaka).
              </p>
            </section>

            <section className="p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">The Problem</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                Manually inspecting physical library ledgers or standalone OPAC terminals resulted in long administrative queues during graduation seasons. Paper receipts had to be manually matched with circulation records, creating risk of human accounting discrepancies and fraudulent printed clearance certificates.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#027FDB] font-semibold mb-2">The Solution & Workflow</h2>
              <p className="text-gray-700 leading-relaxed text-sm mb-6">
                The founder engineered an integrated operational web system connecting the university&apos;s OPAC book database via API with a settlement and document verification engine.
              </p>

              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 font-mono text-xs text-gray-700 mb-6 space-y-1.5">
                <p><strong>System Lifecycle:</strong></p>
                <p>1. Query library OPAC API for student borrow & overdue fine history</p>
                <p>2. Validate settlement status across internal & payment gateway channels</p>
                <p>3. Generate cryptographically hashed PDF clearance certificate</p>
                <p>4. Embed scannable QR verification code pointing to tamper-proof check endpoint</p>
              </div>

              <h3 className="text-sm font-bold text-gray-950 mb-3">Key Technical Capabilities</h3>
              <ul className="space-y-2.5">
                {[
                  "API Integration: Real-time query integration against library circulation services.",
                  "Payment Reconciliation: Structured record-keeping linking fine receipts directly to student IDs.",
                  "Automated PDF Engine: Server-side rendering of official clearance letters with standardized institutional formatting.",
                  "Cryptographic QR Verification: Each issued certificate includes an authenticating QR code verifiable by academic affairs staff via mobile scan.",
                  "Multi-Role Management: Segregated access for library front-desk clerks, financial cashiers, and supervisory staff."
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
                  <span>Institution:</span>
                  <span className="font-semibold text-gray-950">UPT Perpustakaan</span>
                </div>
                <div className="flex justify-between">
                  <span>Founder Role:</span>
                  <span className="font-semibold text-gray-950">System Dev & Integration</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-semibold text-emerald-700">Operational</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Laravel", "PHP", "MySQL", "REST API", "PDF Generation", "QR Code Generation", "RBAC"].map((tech) => (
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
