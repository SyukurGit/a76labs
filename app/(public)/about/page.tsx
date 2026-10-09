import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, User, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About A76LABS — Founder-led early-stage software startup building practical digital products.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.a76labs.online/about#webpage",
      "url": "https://www.a76labs.online/about",
      "name": "About A76LABS",
      "description": "Founder-led early-stage software startup building practical digital products from Indonesia.",
      "about": {
        "@id": "https://www.a76labs.online/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.a76labs.online/#organization",
      "name": "A76LABS",
      "url": "https://www.a76labs.online",
      "founder": {
        "@type": "Person",
        "name": "Muhammad Syukur",
        "url": "https://syukur.dev",
        "sameAs": ["https://github.com/SyukurGit"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Banda Aceh",
        "addressRegion": "Aceh",
        "addressCountry": "ID"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "founder@a76labs.online",
        "contactType": "founder inquiry"
      }
    }
  ]
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <div className="border-b border-gray-100 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-4">
            Founder-Led Software Startup
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-4">
            About A76LABS
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl">
            A76LABS is a founder-led early-stage software startup based in Banda Aceh, Indonesia. We build, operate, and maintain focused digital products for real-world utility—from personal cashflow management to systems telemetry.
          </p>
        </div>

        {/* Company Facts Table */}
        <section className="p-7 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-[#027FDB]" />
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">
                Verified Company Information
              </h2>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Active Startup
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
            <div className="p-3.5 rounded-lg bg-gray-50/70 border border-gray-100">
              <span className="text-gray-400 block mb-0.5 font-mono uppercase text-[10px]">Entity Name</span>
              <p className="font-bold text-gray-950 text-sm">A76LABS</p>
              <p className="text-gray-500 text-[11px] mt-0.5">Software Venture / Startup</p>
            </div>
            <div className="p-3.5 rounded-lg bg-gray-50/70 border border-gray-100">
              <span className="text-gray-400 block mb-0.5 font-mono uppercase text-[10px]">Founder & Leadership</span>
              <p className="font-bold text-gray-950 text-sm">Muhammad Syukur</p>
              <p className="text-gray-500 text-[11px] mt-0.5">Founder & Lead Engineer</p>
            </div>
            <div className="p-3.5 rounded-lg bg-gray-50/70 border border-gray-100">
              <span className="text-gray-400 block mb-0.5 font-mono uppercase text-[10px]">Operating Timeline</span>
              <p className="font-bold text-gray-950 text-sm">Operating Since Late 2025</p>
              <p className="text-gray-500 text-[11px] mt-0.5">Domain registered Dec 16, 2025</p>
            </div>
            <div className="p-3.5 rounded-lg bg-gray-50/70 border border-gray-100">
              <span className="text-gray-400 block mb-0.5 font-mono uppercase text-[10px]">Operating Base</span>
              <p className="font-bold text-gray-950 text-sm">Banda Aceh, Indonesia</p>
              <p className="text-gray-500 text-[11px] mt-0.5">Timezone: WIB (UTC+7)</p>
            </div>
            <div className="p-3.5 rounded-lg bg-gray-50/70 border border-gray-100">
              <span className="text-gray-400 block mb-0.5 font-mono uppercase text-[10px]">Primary Domain & Email</span>
              <p className="font-bold text-gray-950 text-sm">a76labs.online</p>
              <p className="text-gray-500 text-[11px] mt-0.5">founder@a76labs.online</p>
            </div>
            <div className="p-3.5 rounded-lg bg-gray-50/70 border border-gray-100">
              <span className="text-gray-400 block mb-0.5 font-mono uppercase text-[10px]">Flagship Product</span>
              <p className="font-bold text-gray-950 text-sm">Dompet Pintar</p>
              <p className="text-emerald-600 text-[11px] mt-0.5 font-medium">Live & Maintained</p>
            </div>
          </div>
        </section>

        {/* Narrative & Philosophy */}
        <section className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          <p>
            A76LABS was established to design, develop, and operate practical software tools that address clear friction points in daily workflows. Rather than pursuing speculative trends, heavy venture structures, or artificial complexity, we operate with a lean, disciplined engineering ethos: identify a concrete problem, ship a focused solution, and maintain it with rigor.
          </p>
          <p>
            Our core product focus is personal and operational utility. Our flagship application, <strong>Dompet Pintar</strong>, provides a personal cashflow management platform combining an interactive web dashboard with an on-the-go Telegram bot for zero-friction daily expense capture. Alongside our live product operations, we maintain an engineering research track focused on robust data architectures, pragmatic automation, and application security.
          </p>
        </section>

        {/* How We Operate */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-gray-950 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-[#027FDB] rounded-full"></span>
            Operational Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
              <h3 className="font-bold text-gray-950 text-sm">Product-First Utility</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Code exists to solve tangible user problems. We prioritize reducing cognitive and manual friction over assembling complex architectural monuments.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
              <h3 className="font-bold text-gray-950 text-sm">Ship and Sustain</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Software must be reliable and maintainable. We maintain active production instances directly, ensuring database consistency, fast response times, and dependable uptime.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
              <h3 className="font-bold text-gray-950 text-sm">Strict Engineering Boundaries</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We enforce tight schema validation, clean session segregation, and deterministic error boundaries. No unvalidated inputs or opaque external dependencies.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
              <h3 className="font-bold text-gray-950 text-sm">Empirical Prototyping</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                New architectural concepts (such as ephemeral session authorization and structured schema extraction) are evaluated systematically in our Labs space before production integration.
              </p>
            </div>
          </div>
        </section>

        {/* AI Engineering Workflow */}
        <section className="p-8 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-4">
          <div className="flex items-center gap-2 text-gray-950 font-bold">
            <Cpu size={20} className="text-[#027FDB]" />
            <h2 className="text-lg">AI-Assisted Engineering Workflow</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            As a lean, founder-led software venture, A76LABS utilizes AI-assisted development tools—specifically Claude Code—to amplify engineering productivity. We use these workflows for codebase navigation, prototyping new components, debugging edge cases, authoring test suites, and maintaining technical documentation.
          </p>
          <div className="pt-2 text-xs font-mono text-gray-500 space-y-1">
            <p>• Used strictly as an engineering accelerator, not as decorative marketing</p>
            <p>• All code, schemas, and security-critical paths are authored and verified under direct founder oversight</p>
          </div>
        </section>

        {/* Technical Foundation */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-950 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-[#027FDB] rounded-full"></span>
            Technical Foundation
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our technology choices emphasize maintainability, rapid execution, and low operational overhead:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-gray-700">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <p className="font-bold text-gray-950 mb-1">Backend & APIs</p>
              <p className="text-gray-500">Go (Gin), REST APIs, WebSockets, Telegram Bot API, Laravel</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <p className="font-bold text-gray-950 mb-1">Web & Frontend</p>
              <p className="text-gray-500">Next.js, React 19, TypeScript, Tailwind CSS, D3.js</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <p className="font-bold text-gray-950 mb-1">Data & Ops</p>
              <p className="text-gray-500">Turso / SQLite, MySQL, Docker, Vercel Edge, Linux</p>
            </div>
          </div>
        </section>

        {/* Founder-Led Section */}
        <section className="p-8 rounded-2xl border border-gray-200 bg-white space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-gray-950 font-bold">
            <User size={20} className="text-[#027FDB]" />
            <h2 className="text-lg">Founder Leadership & Engineering Ownership</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            A76LABS is founded and led by Muhammad Syukur. The founder holds a Bachelor&apos;s Degree in Information Technology (S.Kom.) and has hands-on production experience designing, building, and deploying live institutional web portals and operational systems for Universitas Islam Negeri Ar-Raniry, alongside academic security research in access control.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <a
              href="https://syukur.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#027FDB] flex items-center gap-1"
            >
              Founder Profile: syukur.dev <ArrowUpRight size={13} />
            </a>
            <a
              href="https://github.com/SyukurGit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#027FDB] flex items-center gap-1"
            >
              GitHub: @SyukurGit <ArrowUpRight size={13} />
            </a>
            <Link
              href="/updates"
              className="text-gray-900 hover:text-[#027FDB] flex items-center gap-1"
            >
              Company Build Log →
            </Link>
          </div>
        </section>

        {/* Institutional Demarcation */}
        <section className="p-5 rounded-xl border border-amber-200 bg-amber-50/50 text-xs text-amber-900 leading-relaxed font-mono">
          <strong className="font-semibold block mb-1">Portfolio & Product Separation</strong>
          Institutional systems (such as Pascasarjana and Perpustakaan UIN Ar-Raniry) are documented on this site solely to demonstrate verified engineering track record. They are owned and operated by their respective institutions and are not commercial products of A76LABS.
        </section>

        {/* Contact info bar */}
        <section className="pt-4 border-t border-gray-100 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
          <p>Operating Base: Banda Aceh, Indonesia · WIB (UTC+7)</p>
          <p>
            Official Inquiry:{" "}
            <a href="mailto:founder@a76labs.online" className="text-gray-900 font-semibold hover:underline">
              founder@a76labs.online
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
