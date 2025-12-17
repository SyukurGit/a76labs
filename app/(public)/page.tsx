import Link from "next/link";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { desc, eq } from "drizzle-orm";

// Ini Server Component. Fetching data terjadi langsung di server.
// Aman, cepat, dan SEO-friendly.
async function getFeaturedProducts() {
  // Ambil produk yang statusnya 'published', urutkan dari yang terbaru
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
    <div className="flex flex-col gap-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-black">
            We build <span className="text-gray-400">practical</span> digital products.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A76LABS is an independent product lab. We focus on solving real problems with clean code and scalable architecture. No fluff, just shipping.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/products" 
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
            >
              View Products
            </Link>
            <Link 
              href="/labs" 
              className="bg-gray-100 text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all"
            >
              Explore Labs
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS (Dynamic from Turso) */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold tracking-tight">Latest Releases</h2>
            <Link href="/products" className="text-sm font-medium text-gray-500 hover:text-black">
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/products/${product.slug}`}
                className="group block p-6 border border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all bg-white"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
                    product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {product.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {product.tagline}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {/* Parsing JSON string tech_stack menjadi array */}
                  {product.techStack && JSON.parse(product.techStack).slice(0, 3).map((tech: string) => (
                    <span key={tech} className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
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