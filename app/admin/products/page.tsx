import Link from "next/link";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { desc } from "drizzle-orm";
import { Edit, Plus, Globe, EyeOff } from "lucide-react"; // Trash2 dihapus karena sudah ada di dalam komponen baru
import { DeleteProductButton } from "@/components/admin/DeleteProductButton"; // <--- Import komponen baru

export default async function AdminProductsPage() {
  const allProducts = await db.select().from(products).orderBy(desc(products.createdAt));

  return (
    <div className="p-8 max-w-6xl">
      {/* ... Header tetap sama ... */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Products Management</h1>
        <Link 
          href="/admin/products/new" 
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-all text-sm font-medium"
        >
          <Plus size={16} />
          Add Product
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            {/* ... Header Table tetap sama ... */}
            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
              <th className="p-4">Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Visibility</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {allProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-gray-900">{product.name}</div>
                  <div className="text-xs text-gray-500">/{product.slug}</div>
                </td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-1 rounded font-bold border ${
                    product.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' :
                    product.status === 'Beta' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                    'bg-gray-100 text-gray-600 border-gray-200'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="p-4">
                  {product.isPublished ? (
                    <span className="flex items-center gap-1 text-green-600 text-xs font-medium">
                      <Globe size={14} /> Published
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                      <EyeOff size={14} /> Draft
                    </span>
                  )}
                </td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <Link 
                    href={`/admin/products/${product.id}/edit`}
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all"
                  >
                    <Edit size={16} />
                  </Link>
                  
                  {/* GANTI BAGIAN FORM LAMA DENGAN INI: */}
                  <DeleteProductButton id={product.id} />
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* ... Empty state tetap sama ... */}
        {allProducts.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No products found. Click "Add Product" to start.
          </div>
        )}
      </div>
    </div>
  );
}