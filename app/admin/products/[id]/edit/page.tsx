import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { ProductForm } from "@/components/admin/ProductForm";
import { updateProduct } from "@/lib/admin-actions";

// UPDATE: Definisikan params sebagai Promise (Next.js 15)
interface EditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({ params }: EditPageProps) {
  // 1. Await params dulu
  const { id } = await params;
  const productId = parseInt(id);

  if (isNaN(productId)) {
    return notFound();
  }

  // 2. Ambil data produk yang mau diedit
  const productData = await db
    .select()
    .from(products)
    .where(eq(products.id, productId))
    .limit(1);

  if (productData.length === 0) {
    return notFound();
  }

  const product = productData[0];

  // 3. Bind ID ke fungsi updateProduct agar server tahu produk mana yang diupdate
  // .bind(null, productId) artinya: argumen pertama fungsi updateProduct otomatis diisi productId
  const updateAction = updateProduct.bind(null, productId);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Edit Product</h1>
        <p className="text-gray-500">Updating details for <span className="font-mono text-black">{product.name}</span></p>
      </div>

      {/* Panggil Form DENGAN initialData dan action update */}
      <ProductForm 
        initialData={product} 
        action={updateAction} 
      />
    </div>
  );
}