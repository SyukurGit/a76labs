import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, ArrowLeft, Lock, Database, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Data Policy",
  description: "Factual data handling disclosures, privacy standards, and deletion procedures for A76LABS and Dompet Pintar.",
};

export default function PrivacyPage() {
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
            Data Handling & Privacy
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-3">
            Privacy & Data Policy
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            This disclosure outlines how A76LABS handles visitor information, product data, and personal financial records across our website and live applications.
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
              1. Operating Entity & Data Controller
            </h2>
            <p>
              A76LABS is an early-stage, founder-led software venture operating from Banda Aceh, Indonesia. Product engineering, server infrastructure, and database operations are managed directly by founder Muhammad Syukur. For any data inquiries, privacy questions, or removal requests, the designated point of contact is:
            </p>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 font-mono text-xs text-gray-800 flex items-center gap-2">
              <Mail size={14} className="text-[#027FDB]" />
              <span>Official Inquiries:</span>
              <a href="mailto:founder@a76labs.online" className="font-semibold text-gray-950 hover:underline">
                founder@a76labs.online
              </a>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#027FDB] rounded-full"></span>
              2. Website Data Handling (a76labs.online)
            </h2>
            <p>
              When you browse our primary website (<code>a76labs.online</code>):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600 font-mono">
              <li>We do NOT embed third-party advertising pixels, commercial trackers, or marketing analytics beacons.</li>
              <li>Minimal runtime infrastructure logs (HTTP method, path, response status, IP address) are processed by our hosting provider (Vercel) solely for traffic routing, DDoS mitigation, and uptime monitoring.</li>
              <li>Contact messages submitted via the on-site contact form are stored in our secure database and routed directly to our founder inbox. We do not sell or share contact details with third parties.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#027FDB] rounded-full"></span>
              3. Dompet Pintar Data Model & Telegram Integration
            </h2>
            <p>
              Dompet Pintar (<code>dompetpintar.a76labs.online</code>) is our live personal cashflow tracking application. Because financial records require strict confidentiality, we enforce the following engineering standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-gray-950 font-bold">
                  <Database size={15} className="text-[#027FDB]" />
                  <span>What We Store</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Registered account email, cryptographically salted and hashed passwords (bcrypt), user-defined expense/income entries, amounts, category labels, timestamps, and linked Telegram chat IDs for bot logging.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-gray-950 font-bold">
                  <Lock size={15} className="text-emerald-600" />
                  <span>What We NEVER Store</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We NEVER ask for, process, or store bank account passwords, debit/credit card numbers, security codes (CVV), one-time passwords (OTP), or third-party bank credentials.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Telegram Bot Integration:</strong> When linking the Telegram bot (@Tokenetic_Bot or Dompet Pintar bot workflows), messages sent to the bot are processed exclusively to parse transaction commands (e.g. <code>/in</code>, <code>/out</code>, <code>/saldo</code>). Unrelated personal conversations are not archived or analyzed.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#027FDB] rounded-full"></span>
              4. Data Export, Portability, and Account Deletion
            </h2>
            <p>
              We believe users should always maintain sovereign control over their records:
            </p>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Export Your Data:</strong> Authenticated users can generate and download their complete historical ledger in Microsoft Excel (<code>.xlsx</code>) format directly from the web dashboard.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Trash2 size={16} className="text-red-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Account & Data Deletion:</strong> You may request complete deletion of your account and all associated transaction entries by emailing <a href="mailto:founder@a76labs.online" className="font-semibold text-gray-950 underline">founder@a76labs.online</a> with your registered email address. All database records and session tokens will be permanently purged within 7 business days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#027FDB] rounded-full"></span>
              5. Security Measures
            </h2>
            <p>
              All traffic to A76LABS web surfaces is encrypted using Transport Layer Security (HTTPS/TLS). Sessions utilize HttpOnly, Secure cookie attributes, and backend requests use parameterized SQL queries to prevent injection vulnerabilities.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
