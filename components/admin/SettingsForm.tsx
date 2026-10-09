"use client";

import { Save, Loader2, Globe, Mail, Github, Twitter } from "lucide-react";
import { updateSettings } from "@/lib/admin-actions";
import { useActionState } from "react";

interface SettingsFormProps {
  initialData: Record<string, string>;
}

export function SettingsForm({ initialData }: SettingsFormProps) {
  const [state, formAction, isPending] = useActionState(updateSettings, undefined);

  return (
    <form action={formAction} className="space-y-6">
      {state?.error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg text-sm">
          {state.success}
        </div>
      )}

      {/* General Settings */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
          <Globe size={18} className="text-gray-400" />
          General Information
        </h2>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Site Title</label>
          <input 
            type="text" 
            name="site_title" 
            defaultValue={initialData.site_title || "A76LABS"}
            required
            className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Site Description</label>
          <textarea 
            name="site_description" 
            rows={3}
            defaultValue={initialData.site_description || "Founder-led early-stage software startup building and operating practical digital products from Indonesia. Led by founder Muhammad Syukur."}
            className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Contact & Socials */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
          <Mail size={18} className="text-gray-400" />
          Contact & Social Links
        </h2>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Contact Email</label>
          <input 
            type="email" 
            name="contact_email" 
            defaultValue={initialData.contact_email || "founder@a76labs.online"}
            placeholder="founder@a76labs.online"
            className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">GitHub URL</label>
            <div className="relative flex items-center">
              <span className="absolute left-3">
                <Github size={18} className="text-gray-400" />
              </span>
              <input 
                type="url" 
                name="social_github" 
                defaultValue={initialData.social_github || "https://github.com/SyukurGit"}
                placeholder="https://github.com/SyukurGit"
                className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Twitter / X URL</label>
            <div className="relative flex items-center">
              <span className="absolute left-3">
                <Twitter size={18} className="text-gray-400" />
              </span>
              <input 
                type="url" 
                name="social_twitter" 
                defaultValue={initialData.social_twitter || ""}
                placeholder="https://x.com/..."
                className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors shadow-sm"
        >
          {isPending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save size={16} />
              Save Settings
            </>
          )}
        </button>
      </div>
    </form>
  );
}
