import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { Metadata } from "next";

// UPDATE 1: Definisikan params sebagai Promise
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getProduct(slug: string) {
  const result = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug))
    .limit(1);

  if (result.length === 0) return null;
  return result[0];
}

// UPDATE 2: Tambahkan await params di sini
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // <--- Await dulu
  const product = await getProduct(slug);
  
  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} - A76LABS`,
    description: product.tagline,
  };
}

// UPDATE 3: Tambahkan await params di komponen utama juga
export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params; // <--- Await dulu
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const techStack = product.techStack ? JSON.parse(product.techStack) : [];

  return (
    <article className="min-h-screen py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/" 
          className="text-sm text-gray-500 hover:text-black mb-8 inline-block"
        >
          ← Back to Home
        </Link>

        <header className="mb-12 border-b border-gray-100 pb-12">
          <div className="flex items-center gap-3 mb-4">
             <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
                product.status === 'Active' ? 'bg-green-100 text-green-800' : 
                product.status === 'Beta' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}>
              {product.status}
            </span>
            <span className="text-gray-400 text-sm">/ {product.slug}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            {product.tagline}
          </p>

          <div className="flex gap-4 mt-8">
            {product.demoUrl && (
              <a 
                href={product.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-2.5 rounded-md font-medium hover:bg-gray-800 transition-all"
              >
                Live Demo ↗
              </a>
            )}
            {product.repoUrl && (
              <a 
                href={product.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-all"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h3 className="text-lg font-bold text-black mb-3">The Problem</h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </section>

            <section>
               <h3 className="text-lg font-bold text-black mb-3">Key Solution</h3>
               <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-gray-600 italic">
                  Features data is not yet structured in DB, but this area will list key capabilities like "Real-time sync", "Zero-config deployment", etc.
               </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech: string) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
                Last Updated
              </h3>
              <p className="text-sm text-gray-500">
                {product.updatedAt ? new Date(product.updatedAt).toLocaleDateString() : 'Recently'}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}