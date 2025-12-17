import { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { eq } from "drizzle-orm";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Ganti domain ini sesuai domain Vercel kamu nanti
  const baseUrl = "https://a76labs.vercel.app"; 

  // 1. Ambil data produk yang sudah dipublish dari Database
  // Ini yang membuat sitemap kita "Dinamis" (Otomatis nambah kalau ada produk baru)
  const allProducts = await db
    .select()
    .from(products)
    .where(eq(products.isPublished, true));

  // 2. Format URL untuk setiap produk
  const productUrls = allProducts.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(product.updatedAt || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 3. Gabungkan dengan halaman statis utama
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/labs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...productUrls,
  ];
}