import Link from "next/link";
import Image from "next/image"; // <--- Import wajib untuk gambar optimasi
import { db } from "@/lib/db";
import { siteSettings } from "@/lib/schema";
import { eq } from "drizzle-orm";

async function getSiteTitle() {
  const setting = await db.select().from(siteSettings).where(eq(siteSettings.key, "site_title")).limit(1);
  return setting.length > 0 ? setting[0].value : "A76LABS";
}

export async function Navbar() {
  const siteTitle = await getSiteTitle();

  return (
    <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Logo Image Area */}
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="Go to Homepage"
        >
          <div className="relative h-14 w-40 md:h-16 md:w-56"> {/* Container pembatas ukuran logo */}
            <Image 
              src="/a76trans.png"       // Path gambar (otomatis baca dari folder public)
              alt={siteTitle}      // Penting untuk SEO (Google baca ini sebagai teks)
              fill                 // Agar gambar memenuhi container pembatas
              className="object-contain object-left" // Logo rata kiri & proporsional
              priority             // Load prioritas (karena ini LCP/Elemen utama)
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/products" className="hover:text-black transition-colors">
            Products
          </Link>
          <Link href="/labs" className="hover:text-black transition-colors">
            Labs
          </Link>
          <Link href="/about" className="hover:text-black transition-colors">
            About
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden md:block bg-black text-white text-xs px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}