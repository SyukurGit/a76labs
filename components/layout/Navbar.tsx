import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-gray-600 transition-colors">
          A76LABS
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

        {/* CTA Button (Small) */}
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