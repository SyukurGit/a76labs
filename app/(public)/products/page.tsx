import Link from "next/link";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products - A76LABS",
  description: "Browse our collection of digital products, tools, and SaaS experiments.",
};

// Function untuk ambil SEMUA produk yang dipublish
async function getAllProducts() {
  const data = await db
    .select()
    .from(products)
    .where(eq(products.isPublished, true))
    .orderBy(desc(products.createdAt)); // Urutkan dari yang terbaru
  
  return data;
}

export default async function ProductsPage() {
  const allProducts = await getAllProducts();

  return (
    <div className="min-h-screen py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            A collection of tools, SaaS starters, and utilities we've built to solve real problems.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.slug}`}
              className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 hover:shadow-md transition-all duration-300"
            >
              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
                    product.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    product.status === 'Beta' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {product.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow">
                  {product.description}
                </p>

                {/* Tech Stack Footer */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {product.techStack && JSON.parse(product.techStack).slice(0, 3).map((tech: string) => (
                      <span key={tech} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {product.techStack && JSON.parse(product.techStack).length > 3 && (
                      <span className="text-xs text-gray-400 px-1 py-1">
                        +more
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </Link>
          ))}

          {/* Empty State (Jika belum ada produk) */}
          {allProducts.length === 0 && (
            <div className="col-span-full text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500">No products launched yet.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}