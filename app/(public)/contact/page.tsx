import { Metadata } from "next";
import { ContactForm } from "@/components/public/ContactForm";

export const metadata: Metadata = {
  title: "Contact - A76LABS",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600">
            Have a question or want to collaborate? <br/>
            Send us a message directly.
          </p>
        </div>

        {/* Form Component */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <ContactForm />
        </div>

        {/* Alternative Contact Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Prefer email? Write to <a href="mailto:hello@a76labs.com" className="text-black underline">hello@a76labs.com</a></p>
        </div>

      </div>
    </div>
  );
}