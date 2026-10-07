import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About A76LABS — Independent, founder-led product lab building practical software.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-3xl space-y-16">
        <div className="border-b border-gray-100 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-4">
            Independent Studio
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 mb-4">
            About A76LABS
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
            A76LABS is an independent, founder-led product lab focused on building practical digital products and software tools.
          </p>
        </div>

        <section className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          <p>
            The lab works across product engineering, backend systems, operational integrations, application security, and increasingly AI-assisted workflows.
          </p>
          <p>
            We start with real problems, build focused solutions, validate them quickly in working software, and iterate on what proves genuinely useful. We avoid building unnecessary software or chasing short-lived industry hype.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-bold text-gray-950 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-[#027FDB] rounded-full"></span>
            How We Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
              <h3 className="font-bold text-gray-950 text-sm">Product First</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Code serves the product and the user need. We prioritize solving genuine friction over building architectural monuments.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
              <h3 className="font-bold text-gray-950 text-sm">Ship and Iterate</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Build small, test quickly, and improve continuously with real operational usage rather than prolonged planning loops.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
              <h3 className="font-bold text-gray-950 text-sm">Engineering Discipline</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Favor maintainable, understandable systems over fragile cleverness. Strict input validation, predictable schemas, and solid error boundaries.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
              <h3 className="font-bold text-gray-950 text-sm">Experiment With Purpose</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Use the Labs space to evaluate concepts, APIs, and workflows before committing them into commercial product architectures.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-950 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-[#027FDB] rounded-full"></span>
            Technical Foundation
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our work spans backend systems, API integration, and web engineering:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-gray-700">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <p className="font-bold text-gray-950 mb-1">Backend & APIs</p>
              <p className="text-gray-500">Go (Gin), Laravel, REST APIs, WebSockets</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <p className="font-bold text-gray-950 mb-1">Web & Frontend</p>
              <p className="text-gray-500">Next.js, React 19, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <p className="font-bold text-gray-950 mb-1">Data & Ops</p>
              <p className="text-gray-500">MySQL, Turso / SQLite, Docker, Linux</p>
            </div>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-4">
          <h2 className="text-lg font-bold text-gray-950">
            Founder-Led Organization
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A76LABS is founder-led by Muhammad Syukur. The founder brings hands-on experience developing and deploying live institutional web systems, operational workflows, API integrations, and access control research.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <a
              href="https://syukur.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#027FDB] flex items-center gap-1"
            >
              Founder Portfolio: syukur.dev <ArrowUpRight size={13} />
            </a>
            <a
              href="https://github.com/SyukurGit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#027FDB] flex items-center gap-1"
            >
              GitHub: @SyukurGit <ArrowUpRight size={13} />
            </a>
          </div>
        </section>

        <section className="pt-4 border-t border-gray-100 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
          <p>Location: Indonesia · WIB (UTC+7)</p>
          <p>
            Direct contact:{" "}
            <a href="mailto:founder@a76labs.online" className="text-gray-900 font-semibold hover:underline">
              founder@a76labs.online
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
