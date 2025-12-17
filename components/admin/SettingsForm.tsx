"use client";

import { useActionState } from "react";
import { updateSettings } from "@/lib/admin-actions";
import { Save, Loader2, Globe, Mail, Github, Twitter } from "lucide-react";

interface SettingsFormProps {
  initialData: Record<string, string>;
}

export function SettingsForm({ initialData }: SettingsFormProps) {
  const [state, formAction, isPending] = useActionState(updateSettings, undefined);

  return (
    <form action={formAction} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      
      {/* Header Messages */}
      {(state?.success || state?.error) && (
        <div className={`px-8 py-3 text-sm font-bold ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {state.success || state.error}
        </div>
      )}

      <div className="p-8 space-y-8">
        
        {/* SECTION 1: General Info */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
            General Information
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Website Title</label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-black">
                <Globe size={18} className="text-gray-400" />
                <input 
                  name="site_title" 
                  type="text" 
                  defaultValue={initialData.site_title || "A76LABS"}
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">SEO Description</label>
              <textarea 
                name="site_description" 
                rows={3}
                defaultValue={initialData.site_description || "An independent product lab focused on digital tools."}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Contact & Socials */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
            Contact & Socials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Contact Email</label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-black">
                <Mail size={18} className="text-gray-400" />
                <input 
                  name="contact_email" 
                  type="email" 
                  defaultValue={initialData.contact_email || ""}
                  placeholder="hello@example.com"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>
            
            {/* Empty Spacer */}
            <div className="hidden md:block"></div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">GitHub URL</label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-black">
                <Github size={18} className="text-gray-400" />
                <input 
                  name="social_github" 
                  type="url" 
                  defaultValue={initialData.social_github || ""}
                  placeholder="https://github.com/..."
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Twitter / X URL</label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-black">
                <Twitter size={18} className="text-gray-400" />
                <input 
                  name="social_twitter" 
                  type="url" 
                  defaultValue={initialData.social_twitter || ""}
                  placeholder="https://x.com/..."
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
        <button 
          type="submit" 
          disabled={isPending}
          className="bg-black text-white px-8 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isPending ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} 
          Save Configuration
        </button>
      </div>
    </form>
  );
}