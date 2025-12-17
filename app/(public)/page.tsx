import Link from "next/link";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { desc, eq } from "drizzle-orm";

async function getFeaturedProducts() {
  const data = await db
    .select()
    .from(products)
    .where(eq(products.isPublished, true))
    .orderBy(desc(products.createdAt))
    .limit(3);
  return data;
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="flex flex-col gap-20 pb-20 bg-white">
      {/* 1. HERO SECTION — Web3 Modern with #027FDB */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            We build{" "}
            <span className="bg-gradient-to-r from-[#027FDB] to-black bg-clip-text text-transparent">
              practical
            </span>{" "}
            digital products.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            A76LABS is an independent product lab. We solve real problems with clean code, scalable architecture, and Web3-native thinking—no hype, just utility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold bg-[#027FDB] text-white shadow-[0_4px_16px_0_rgba(2,127,219,0.35)] hover:shadow-[0_6px_20px_0_rgba(2,127,219,0.45)] hover:bg-[#026bbd] transition-all duration-300"
            >
              Explore Products
            </Link>
            <Link
              href="/labs"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors duration-300"
            >
              Discover Labs
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS — Cards with #027FDB accents */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#027FDB] to-black bg-clip-text text-transparent">
              Latest Releases
            </h2>
            <Link
              href="/products"
              className="text-sm font-medium text-[#027FDB] hover:text-[#026bbd] flex items-center gap-1 transition-colors"
            >
              View all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group block p-5 border border-gray-200 rounded-2xl bg-white hover:border-[#027FDB] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                      product.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {product.status}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-[#027FDB] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.tagline}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {product.techStack &&
                    JSON.parse(product.techStack)
                      .slice(0, 3)
                      .map((tech: string) => (
                        <span
                          key={tech}
                          className="text-xs text-[#027FDB] bg-[#f0f9ff] px-2 py-1 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}