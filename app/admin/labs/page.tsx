import Link from "next/link";
import { db } from "@/lib/db";
import { labs } from "@/lib/schema";
import { desc } from "drizzle-orm";
import { Edit, Plus, FlaskConical } from "lucide-react";
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
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold">
              <th className="p-4">Experiment Title</th>
              <th className="p-4">Type</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {allLabs.map((lab) => (
              <tr key={lab.id} className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-900">{lab.title}</td>
                <td className="p-4"><span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs border border-purple-200">{lab.type}</span></td>
                <td className="p-4 text-sm">{lab.isPublished ? "Visible" : "Hidden"}</td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <Link href={`/admin/labs/${lab.id}/edit`} className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md"><Edit size={16} /></Link>
                  <DeleteLabButton id={lab.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {allLabs.length === 0 && <div className="p-8 text-center text-gray-500">No experiments yet.</div>}
      </div>
    </div>
  );
}