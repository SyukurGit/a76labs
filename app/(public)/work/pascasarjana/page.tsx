import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sistem Informasi Pascasarjana UIN Ar-Raniry — Case Study",
  description: "Institutional web system and administrative portal built for Pascasarjana UIN Ar-Raniry.",
};

export default function PascasarjanaCaseStudy() {
  return (
    <article className="min-h-screen py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Selected Work
        </Link>

        <header className="mb-12 border-b border-gray-100 pb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Live · In Active Institutional Use
            </span>
            <span className="text-xs font-mono text-gray-400">Institutional System</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 mb-3">
            Sistem Informasi Pascasarjana UIN Ar-Raniry
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Public academic portal and unified administrative panel serving the postgraduate faculty of Universitas Islam Negeri Ar-Raniry.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a 
              href="https://en.pps.ar-raniry.ac.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gray-950 text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors shadow-sm"
            >
              Open Live University Portal <ArrowUpRight size={13} />
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

        <div className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/50 text-xs text-amber-900 leading-relaxed mb-10 font-mono">
          <strong>Framing Notice:</strong> This system was developed and is maintained by founder Muhammad Syukur as primary developer for Pascasarjana UIN Ar-Raniry. A76LABS documents this project as verifiable engineering evidence and does not claim legal institutional ownership.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">Context</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Pascasarjana UIN Ar-Raniry Banda Aceh manages graduate academic programs (Master&apos;s and Doctoral degrees). The faculty required a modern, reliable, and easily maintainable digital channel to publish academic announcements, curriculum outlines, accreditation statuses, and defense schedules while empowering administrative staff to manage content without touching source code.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">The Problem</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                Before this system, academic notices and schedule changes were fragmented across offline bulletin boards and static files. Content updates required manual developer intervention, creating delays and risk of publishing errors during critical admission and thesis defense cycles.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#027FDB] font-semibold mb-2">The Solution & Architecture</h2>
              <p className="text-gray-700 leading-relaxed text-sm mb-6">
                As the primary developer, the founder designed and built a monolithic Laravel application with a responsive Tailwind CSS frontend, structured MySQL database schemas, and a segregated role-based administration panel.
              </p>

              <h3 className="text-sm font-bold text-gray-950 mb-3">Core Implemented Capabilities</h3>
              <ul className="space-y-2.5">
                {[
                  "Public Information Portal: Multi-category news, announcements, academic calendars, and institutional profile pages.",
                  "Academic Catalog: Comprehensive details for all active master's and doctoral study programs with accreditation records.",
                  "Thesis Defense Schedules: Dynamic publishing of thesis and dissertation defense schedules accessible by students and external examiners.",
                  "Administrative Control Panel: Secure backend enabling faculty staff to author and edit pages with immediate live updates.",
                  "Multi-Role Access Control: Role-based permissions ensuring administrative staff only modify authorized sections.",
                  "Activity Logging: Audit trail recording administrative modifications and publication timestamps."
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
                  <span>Client:</span>
                  <span className="font-semibold text-gray-950">UIN Ar-Raniry</span>
                </div>
                <div className="flex justify-between">
                  <span>Founder Role:</span>
                  <span className="font-semibold text-gray-950">Primary Developer</span>
                </div>
                <div className="flex justify-between">
                  <span>Current Status:</span>
                  <span className="font-semibold text-emerald-700">Live & Active</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Laravel", "PHP", "MySQL", "Tailwind CSS", "Blade", "RBAC", "Linux / Nginx"].map((tech) => (
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
