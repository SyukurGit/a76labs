import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/db";
import { siteSettings } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { MobileMenu } from "./MobileMenu";

async function getSiteTitle() {
  try {
    const setting = await db
      .select()
      .from(siteSettings)
      .where(eq(siteSettings.key, "site_title"))
      .limit(1);
    return setting.length > 0 ? setting[0].value : "A76LABS";
  } catch {
    return "A76LABS";
  }
}

export async function Navbar() {
  const siteTitle = await getSiteTitle();

  const navItems = [
    { label: "Products", href: "/products" },
    { label: "Selected Work", href: "/work" },
    { label: "Research", href: "/research" },
    { label: "Labs", href: "/labs" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:opacity-85 transition-opacity"
          aria-label="A76LABS Homepage"
        >
          <div className="relative h-10 w-36 sm:h-12 sm:w-44">
            <Image 
              src="/a76trans.png"
              alt={siteTitle}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-950 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Controls */}
        <div className="flex items-center gap-3">
          <Link 
            href="/contact" 
            className="hidden md:inline-flex items-center justify-center bg-gray-950 text-white text-xs px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-sm"
          >
            Contact
          </Link>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </nav>
  );
}
