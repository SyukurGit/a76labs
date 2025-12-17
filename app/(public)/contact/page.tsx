import { Metadata } from "next";
import { ContactForm } from "@/components/public/ContactForm";

export const metadata: Metadata = {
  title: "Contact - A76LABS",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 md:px-8 bg-gray-50/30">
      <div className="container mx-auto max-w-xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-[#027FDB] to-blue-700 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Have a question or want to collaborate? <br />
            Send us a message directly.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 hover:border-[#027FDB]/30 transition-colors">
          <ContactForm />
        </div>

        {/* Alternative Contact */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>
            Prefer email? Write to{" "}
            <a
              href="mailto:hello@a76labs.com"
              className="text-[#027FDB] hover:underline font-medium transition-colors"
            >
              hello@a76labs.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}