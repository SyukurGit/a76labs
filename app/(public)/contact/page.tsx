import { Metadata } from "next";
import { ContactForm } from "@/components/public/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with A76LABS directly.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-700 mb-4">
            Direct Communication
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 mb-3">
            Contact A76LABS
          </h1>
          <p className="text-gray-600 max-w-xl text-base leading-relaxed">
            Have a question about our products, feedback, or an engineering collaboration inquiry? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left info column */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Direct Email
              </h2>
              <a
                href="mailto:founder@a76labs.online"
                className="flex items-center gap-2 text-sm font-semibold text-gray-950 hover:text-[#027FDB] transition-colors break-all"
              >
                <Mail size={16} className="text-[#027FDB] shrink-0" />
                <span>founder@a76labs.online</span>
              </a>
              <p className="text-xs text-gray-500 leading-relaxed">
                Direct mailbox to the founder. We review all incoming inquiries.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50/60 space-y-3 text-xs text-gray-600">
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Inquiry Categories
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#027FDB]"></span>
                  <span>General Inquiries</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#027FDB]"></span>
                  <span>Product Feedback</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#027FDB]"></span>
                  <span>Engineering Collaboration</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-3 text-xs text-gray-600">
              <div className="flex items-center gap-2 text-gray-900 font-medium">
                <MapPin size={15} className="text-gray-500" />
                <span>Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-mono">
                <Clock size={15} className="text-gray-400" />
                <span>Timezone: WIB (UTC+7)</span>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="md:col-span-2">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-950 mb-2">Send a Message</h2>
              <p className="text-xs text-gray-500 mb-6">
                Fill in the form below and we will receive your message in our inbox.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
