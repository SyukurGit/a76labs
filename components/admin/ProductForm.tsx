"use client";

import { useActionState } from "react";
import { Save, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ActionErrorState } from "@/lib/admin-actions";

interface ProductFormProps {
  initialData?: {
    name: string;
    slug: string;
    tagline: string;
    description: string;
    status: string;
    techStack: string | null;
    demoUrl: string | null;
    repoUrl: string | null;
    isPublished: boolean | null;
  };
  action: (prevState: ActionErrorState | undefined, formData: FormData) => Promise<ActionErrorState | undefined>;
}

export function ProductForm({ initialData, action }: ProductFormProps) {
  const [state, formAction, isPending] = useActionState(action, undefined);

  const formattedTechStack = initialData?.techStack 
    ? JSON.parse(initialData.techStack).join(", ") 
    : "";

  return (
    <form action={formAction} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-bold text-gray-700">
          {initialData ? "Edit Product" : "New Product Details"}
        </h2>
        {state?.error && (
          <span className="text-red-600 text-xs font-bold bg-red-50 px-2 py-1 rounded">
            {state.error}
          </span>
        )}
      </div>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Product Name</label>
            <input 
              name="name" 
              type="text" 
              required
              defaultValue={initialData?.name}
              placeholder="e.g. Dompet Pintar"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Slug (URL)</label>
            <input 
              name="slug" 
              type="text" 
              required
              defaultValue={initialData?.slug}
              placeholder="dompet-pintar"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tagline</label>
          <input 
            name="tagline" 
            type="text" 
            required
            defaultValue={initialData?.tagline}
            placeholder="Short, punchy description..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Description</label>
          <textarea 
            name="description" 
            rows={5}
            required
            defaultValue={initialData?.description}
            placeholder="Explain the problem and solution..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tech Stack (Comma Separated)</label>
            <input 
              name="techStack" 
              type="text" 
              defaultValue={formattedTechStack}
              placeholder="Next.js, Go, Tailwind, Turso"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Status</label>
            <select 
              name="status" 
              defaultValue={initialData?.status || "Active"}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white"
            >
              <option value="Active">Active</option>
              <option value="Beta">Beta</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Demo URL</label>
            <input 
              name="demoUrl" 
              type="url" 
              defaultValue={initialData?.demoUrl || ""}
              placeholder="https://dompetpintar.a76labs.online"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">GitHub Repo URL</label>
            <input 
              name="repoUrl" 
              type="url" 
              defaultValue={initialData?.repoUrl || ""}
              placeholder="https://github.com/..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <input 
            type="checkbox" 
            name="isPublished" 
            id="isPublished"
            defaultChecked={initialData?.isPublished || false}
            className="w-5 h-5 text-black rounded focus:ring-black"
          />
          <label htmlFor="isPublished" className="text-sm font-medium text-gray-700">
            Publish this product? <span className="text-gray-400 font-normal">(Visible to public)</span>
          </label>
        </div>
      </div>

      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-4">
        <Link 
          href="/admin/products"
          className="px-6 py-2 rounded-lg text-sm font-bold text-gray-600 hover:text-black hover:bg-gray-200 transition-all flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Cancel
        </Link>
        <button 
          type="submit" 
          disabled={isPending}
          className="bg-black text-white px-8 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isPending ? (
            <><Loader2 size={16} className="animate-spin" /> Saving...</>
          ) : (
            <><Save size={16} /> Save Product</>
          )}
        </button>
      </div>
    </form>
  );
}
