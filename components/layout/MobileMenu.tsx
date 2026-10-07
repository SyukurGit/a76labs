"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-900 rounded-lg"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-16 bg-white border-b border-gray-200 shadow-xl z-50 px-6 py-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-800">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-gray-100 hover:text-[#027FDB] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center bg-gray-950 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
