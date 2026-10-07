import Link from "next/link";
import { db } from "@/lib/db";
import { labs } from "@/lib/schema";
import { desc } from "drizzle-orm";
import { Edit, Plus } from "lucide-react";
import { DeleteLabButton } from "@/components/admin/DeleteLabButton";

export default async function AdminLabsPage() {
  const allLabs = await db.select().from(labs).orderBy(desc(labs.createdAt));

  return (
    <div className="p-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Labs Experiments</h1>
        <Link href="/admin/labs/new" className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-sm font-medium">
          <Plus size={16} /> Add Experiment
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-500">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Type</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {allLabs.map((lab) => (
              <tr key={lab.id} className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-900">{lab.title}</td>
                <td className="p-4"><span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded">{lab.type}</span></td>
                <td className="p-4">{lab.isPublished ? <span className="text-xs text-green-600 font-semibold">Published</span> : <span className="text-xs text-gray-400">Draft</span>}</td>
                <td className="p-4 text-right space-x-2">
                  <Link href={`/admin/labs/${lab.id}/edit`} className="inline-flex p-1.5 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg"><Edit size={16} /></Link>
                  <DeleteLabButton id={lab.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
