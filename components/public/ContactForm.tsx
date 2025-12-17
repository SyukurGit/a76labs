"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/lib/actions";

// Initial state untuk form
const initialState = {
  success: false,
  error: "",
};

export function ContactForm() {
  // React 19 / Next 15 hook untuk handle form state
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
        <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
        <p>Thank you for reaching out. We will get back to you shortly.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 text-sm underline hover:text-green-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="bg-red-50 text-red-600 p-3 rounded text-sm">
          {state.error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or question..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}