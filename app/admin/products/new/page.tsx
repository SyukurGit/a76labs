import { ProductForm } from "@/components/admin/ProductForm";
import { createProduct } from "@/lib/admin-actions";

export default function NewProductPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Add New Product</h1>
        <p className="text-gray-500">Showcase a new tool or experiment.</p>
      </div>

      {/* Panggil Form tanpa initialData (Mode Create) */}
      <ProductForm action={createProduct} />
    </div>
  );
}