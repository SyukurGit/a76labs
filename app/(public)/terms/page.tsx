import { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service, product scope disclaimers, and acceptable use guidelines for A76LABS applications.",
};

export default function TermsPage() {
  return (
    <article className="min-h-screen py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-gray-100 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-4">
            Terms of Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Please read these terms carefully before accessing or using software products and services operated by A76LABS.
          </p>
          <p className="text-xs font-mono text-gray-400 mt-3">
            Effective Date: October 2026 · Operator: Muhammad Syukur (Founder, A76LABS)
          </p>
        </header>

        <div className="space-y-10 text-sm leading-relaxed text-gray-700">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#027FDB] rounded-full"></span>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the A76LABS website (<code>a76labs.online</code>) or our applications including Dompet Pintar (<code>dompetpintar.a76labs.online</code>), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#027FDB] rounded-full"></span>
              2. Product Scope & Financial Disclaimer
            </h2>
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50 text-xs text-amber-900 leading-relaxed flex items-start gap-3 font-mono">
              <AlertCircle size={18} className="text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-1">Strict Bookkeeping & Informational Scope</strong>
                Dompet Pintar and related A76LABS utilities are personal cashflow tracking, bookkeeping, and operational tools. A76LABS is NOT a bank, licensed broker, certified financial planner, or registered investment advisory institution. The software does NOT provide financial advice, investment counsel, tax recommendations, or automated banking transaction execution.
              </div>
            </div>
            <p className="text-xs text-gray-600">
              Users are solely responsible for verifying the accuracy of their recorded transaction data and should consult a certified financial or tax advisor for professional financial planning.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#027FDB] rounded-full"></span>
              3. User Responsibilities & Acceptable Use
            </h2>
            <p>When creating an account or using our tools:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600 font-mono">
              <li>You agree to provide accurate registration information and keep your credentials confidential.</li>
              <li>You must not attempt to reverse engineer, disrupt server integrity, or execute denial-of-service attacks against our API endpoints.</li>
              <li>You must not use our software for fraudulent activities, money laundering simulation, or unlawful actions under Indonesian or international law.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#027FDB] rounded-full"></span>
              4. Availability & Warranties
            </h2>
            <p>
              A76LABS software is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While we strive to maintain high service availability and implement routine database backups, we make no express warranties that services will be uninterrupted or error-free.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#027FDB] rounded-full"></span>
              5. Contact Information
            </h2>
            <p>
              For questions regarding these terms, inquiries, or notice of alleged violations, please email:
            </p>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 font-mono text-xs text-gray-800 flex items-center gap-2">
              <Mail size={14} className="text-[#027FDB]" />
              <a href="mailto:founder@a76labs.online" className="font-semibold text-gray-950 hover:underline">
                founder@a76labs.online
              </a>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
