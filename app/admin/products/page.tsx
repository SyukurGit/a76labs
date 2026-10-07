import Link from "next/link";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { desc } from "drizzle-orm";
import { Plus, ExternalLink, Edit } from "lucide-react";
import { DeleteProductButton } from "@/components/admin/DeleteProductButton";

export default async function AdminProductsPage() {
  const allProducts = await db.select().from(products).orderBy(desc(products.createdAt));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Products Management</h1>
          <p className="text-gray-500 text-sm">Manage your public products showcase here.</p>
        </div>
        <Link 
          href="/admin/products/new"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all flex items-center gap-2"
        >
          <Plus size={16} /> Add Product
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Public URL</th>
              <th className="px-6 py-4">Published</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {allProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50/50">
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {product.name}
                  <span className="block text-xs text-gray-400 font-normal">{product.slug}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    product.status === 'Active' ? 'bg-green-50 text-green-700' :
                    product.status === 'Beta' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link 
                    href={`/products/${product.slug}`} 
                    target="_blank"
                    className="text-gray-500 hover:text-black flex items-center gap-1 text-xs"
                  >
                    /products/{product.slug} <ExternalLink size={12} />
                  </Link>
                </td>
                <td className="px-6 py-4">
                  {product.isPublished ? (
                    <span className="text-green-600 text-xs font-semibold">Yes</span>
                  ) : (
                    <span className="text-gray-400 text-xs">Draft</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <Link 
                    href={`/admin/products/${product.id}/edit`}
                    className="inline-flex p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-all"
                  >
                    <Edit size={16} />
                  </Link>
                  <DeleteProductButton id={product.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {allProducts.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No products found. Click &quot;Add Product&quot; to start.
          </div>
        )}
      </div>
    </div>
  );
}
