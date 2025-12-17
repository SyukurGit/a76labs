import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - A76LABS",
  description: "Our philosophy, vision, and principles.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 md:px-8 bg-gray-50/30">
      <div className="container mx-auto max-w-3xl">
        {/* Judul Utama dengan Gradient */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 bg-gradient-to-r from-[#027FDB] to-blue-700 bg-clip-text text-transparent">
          About A76LABS
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-900 font-medium mb-10 leading-relaxed">
          We are an independent product lab building practical digital tools.
        </p>

        {/* Bagian: The Philosophy */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#027FDB] rounded-full"></span>
            The Philosophy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Software has become too complex. We believe in returning to the basics: solving clear problems with simple, maintainable code. We do not chase trends. We build what is necessary.
          </p>
        </section>

        {/* Bagian: How We Work */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#027FDB] rounded-full"></span>
            How We Work
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-2">
              <span className="text-[#027FDB] font-medium">•</span>
              <span><strong className="text-gray-900">Product First:</strong> The code serves the product, not the other way around.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#027FDB] font-medium">•</span>
              <span><strong className="text-gray-900">Speed:</strong> Ship fast, iterate often.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#027FDB] font-medium">•</span>
              <span><strong className="text-gray-900">Clarity:</strong> Clear code is better than clever code.</span>
            </li>
          </ul>
        </section>

        {/* Bagian: The Stack */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#027FDB] rounded-full"></span>
            The Stack
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We build primarily with <strong className="text-gray-900">Next.js</strong>, <strong className="text-gray-900">TypeScript</strong>, and <strong className="text-gray-900">SQLite (Turso)</strong>. This stack allows us to move fast without managing heavy infrastructure.
          </p>
        </section>
      </div>
    </div>
  );
}