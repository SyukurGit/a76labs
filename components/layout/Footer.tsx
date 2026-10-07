import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/db";
import { siteSettings } from "@/lib/schema";
import { Github, Mail, ArrowUpRight } from "lucide-react";

async function getSettings() {
  try {
    const data = await db.select().from(siteSettings);
    const settings: Record<string, string> = {};
    data.forEach((item) => {
      settings[item.key] = item.value;
    });
    return settings;
  } catch {
    return {};
  }
}

export async function Footer() {
  const settings = await getSettings();
  const contactEmail = settings.contact_email || "founder@a76labs.online";

  return (
    <footer className="w-full border-t border-gray-100 py-16 mt-24 bg-white text-gray-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Positioning */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-36">
                <Image 
                  src="/a76trans.png" 
                  alt="A76LABS" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Independent, founder-led product lab building practical digital products, software tools, and focused experiments.
            </p>
            <p className="text-xs text-gray-500">
              Location: Indonesia · WIB (UTC+7)
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><Link href="/products" className="hover:text-gray-950 transition-colors">Products</Link></li>
              <li><Link href="/work" className="hover:text-gray-950 transition-colors">Selected Work</Link></li>
              <li><Link href="/research" className="hover:text-gray-950 transition-colors">Research</Link></li>
              <li><Link href="/labs" className="hover:text-gray-950 transition-colors">Labs</Link></li>
              <li><Link href="/about" className="hover:text-gray-950 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-950 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Core Products & Work */}
          <div>
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-wider mb-4">Focus</h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><Link href="/products/dompet-pintar" className="hover:text-gray-950 transition-colors">Dompet Pintar</Link></li>
              <li><Link href="/products/neon-dash" className="hover:text-gray-950 transition-colors">Neon Dash</Link></li>
              <li><Link href="/work/pascasarjana" className="hover:text-gray-950 transition-colors">Pascasarjana UIN</Link></li>
              <li><Link href="/work/perpustakaan" className="hover:text-gray-950 transition-colors">Library Operations</Link></li>
              <li><Link href="/research/least-privilege-jit" className="hover:text-gray-950 transition-colors">Security Research</Link></li>
            </ul>
          </div>

          {/* Contact & Founder */}
          <div>
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li>
                <a 
                  href={`mailto:${contactEmail}`} 
                  className="flex items-center gap-1.5 hover:text-gray-950 transition-colors"
                >
                  <Mail size={13} />
                  <span>{contactEmail}</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://syukur.dev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:text-gray-950 transition-colors"
                >
                  <span>Founder Profile: syukur.dev</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/SyukurGit" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 hover:text-gray-950 transition-colors"
                >
                  <Github size={13} />
                  <span>GitHub (@SyukurGit)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:text-gray-950 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 A76LABS. All rights reserved.</p>
          <p>Product-first. Engineering-driven. Built to be useful.</p>
        </div>
      </div>
    </footer>
  );
}
