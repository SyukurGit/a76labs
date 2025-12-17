import Link from "next/link";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products - A76LABS",
  description: "Browse our collection of digital products, tools, and SaaS experiments.",
};

async function getAllProducts() {
  const data = await db
    .select()
    .from(products)
    .where(eq(products.isPublished, true))
    .orderBy(desc(products.createdAt));
  return data;
}

export default async function ProductsPage() {
  const allProducts = await getAllProducts();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#027FDB] to-blue-700 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            A collection of tools, SaaS starters, and utilities we've built to solve real problems.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#027FDB]/30"
              >
                <div className="p-5 sm:p-6 flex flex-col h-full">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
                        product.status === "Active"
                          ? "bg-green-50 text-green-700"
                          : product.status === "Beta"
                          ? "bg-blue-50 text-[#027FDB]"
                          : "bg-gray-50 text-gray-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-[#027FDB] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 line-clamp-3 flex-grow">
                    {product.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {product.techStack &&
                        JSON.parse(product.techStack)
                          .slice(0, 3)
                          .map((tech: string) => (
                            <span
                              key={tech}
                              className="text-[11px] font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                      {product.techStack &&
                        JSON.parse(product.techStack).length > 3 && (
                          <span className="text-[11px] text-gray-500 px-1 py-1">
                            +more
                          </span>
                        )}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-base">No products launched yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}