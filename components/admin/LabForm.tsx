"use client";

import { useActionState } from "react";
import { Save, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface LabFormProps {
  initialData?: {
    title: string;
    slug: string;
    type: string;
    content: string | null;
    isPublished: boolean | null;
  };
  action: (prevState: any, formData: FormData) => Promise<any>;
}

export function LabForm({ initialData, action }: LabFormProps) {
  const [state, formAction, isPending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-bold text-gray-700">{initialData ? "Edit Experiment" : "New Experiment"}</h2>
        {state?.error && <span className="text-red-600 text-xs font-bold bg-red-50 px-2 py-1 rounded">{state.error}</span>}
      </div>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Title</label>
            <input name="title" type="text" required defaultValue={initialData?.title} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Slug</label>
            <input name="slug" type="text" required defaultValue={initialData?.slug} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black" />
          </div>
        </div>

        <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Type</label>
            <select name="type" defaultValue={initialData?.type || "Prototype"} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black bg-white">
              <option value="Prototype">Prototype</option>
              <option value="Experiment">Experiment</option>
              <option value="Archived">Archived</option>
            </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Content (Markdown supported)</label>
          <textarea name="content" rows={8} defaultValue={initialData?.content || ""} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black" />
        </div>

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <input type="checkbox" name="isPublished" id="isPublished" defaultChecked={initialData?.isPublished || false} className="w-5 h-5 text-black rounded focus:ring-black" />
          <label htmlFor="isPublished" className="text-sm font-medium text-gray-700">Publish to Labs?</label>
        </div>
      </div>

      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-4">
        <Link href="/admin/labs" className="px-6 py-2 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-200 flex items-center gap-2"><ArrowLeft size={16} /> Cancel</Link>
        <button type="submit" disabled={isPending} className="bg-black text-white px-8 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 flex items-center gap-2 disabled:opacity-50">
          {isPending ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} Save Experiment
        </button>
      </div>
    </form>
  );
}