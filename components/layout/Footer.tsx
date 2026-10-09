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
              Founder-led early-stage software startup building and operating practical digital products from Indonesia.
            </p>
            <div className="text-xs text-gray-500 space-y-0.5 font-mono">
              <p>Operating since late 2025</p>
              <p>Banda Aceh, Indonesia · WIB (UTC+7)</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><Link href="/products" className="hover:text-gray-950 transition-colors">Products</Link></li>
              <li><Link href="/updates" className="hover:text-gray-950 transition-colors">Updates & Build Log</Link></li>
              <li><Link href="/about" className="hover:text-gray-950 transition-colors">About Company</Link></li>
              <li><Link href="/work" className="hover:text-gray-950 transition-colors">Founder Work</Link></li>
              <li><Link href="/research" className="hover:text-gray-950 transition-colors">Research</Link></li>
              <li><Link href="/labs" className="hover:text-gray-950 transition-colors">Labs Space</Link></li>
              <li><Link href="/contact" className="hover:text-gray-950 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Core Products & Work */}
          <div>
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-wider mb-4">Focus</h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><Link href="/products/dompet-pintar" className="hover:text-gray-950 transition-colors font-medium text-gray-900">Dompet Pintar (Live)</Link></li>
              <li><Link href="/products/neon-dash" className="hover:text-gray-950 transition-colors">Neon Dash (Prototype)</Link></li>
              <li><Link href="/work/pascasarjana" className="hover:text-gray-950 transition-colors">Pascasarjana UIN (Portal)</Link></li>
              <li><Link href="/work/perpustakaan" className="hover:text-gray-950 transition-colors">Library Operations (Integration)</Link></li>
              <li><Link href="/research/least-privilege-jit" className="hover:text-gray-950 transition-colors">Security Research (LP/JIT)</Link></li>
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
                  <span>Founder: syukur.dev</span>
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
              <li className="pt-2 text-[11px] text-gray-400 font-mono">
                Direct founder-led development. No middlemen.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 A76LABS. All rights reserved.</p>
            <span>·</span>
            <Link href="/privacy" className="hover:text-gray-950 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-gray-950 transition-colors">Terms of Service</Link>
          </div>
          <p>Founder-led software startup · Banda Aceh, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
