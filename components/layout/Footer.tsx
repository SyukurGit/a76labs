import Link from "next/link";
import Image from "next/image"; // <--- Import Image
import { db } from "@/lib/db";
import { siteSettings } from "@/lib/schema";
import { Github, Twitter, Mail } from "lucide-react";

async function getSettings() {
  const data = await db.select().from(siteSettings);
  
  const settings: Record<string, string> = {};
  data.forEach((item) => {
    settings[item.key] = item.value;
  });
  
  return settings;
}

export async function Footer() {
  const settings = await getSettings();

  return (
    <footer className="w-full border-t border-gray-100 py-12 mt-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Kiri: Brand Logo & Deskripsi */}
        <div className="text-center md:text-left">
          
          {/* --- BAGIAN INI DIGANTI DENGAN LOGO --- */}
          <div className="relative h-14 w-40 mx-auto md:mx-0 mb-4">
            <Image 
  src="/a76trans.png" 
  alt={settings.site_title || "A76LABS"} 
  fill 
  className="object-contain scale-150"
/>

          </div>
          {/* -------------------------------------- */}

          <p className="text-xs text-gray-500 mt-1 max-w-xs">
            {settings.site_description || "Building practical digital products."}
          </p>
          <p className="text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} {settings.site_title || "A76LABS"}. All rights reserved.
          </p>
        </div>
        
        {/* Kanan: Social Links (Tetap Sama) */}
        <div className="flex items-center gap-6">
          {settings.contact_email && (
            <a 
              href={`mailto:${settings.contact_email}`} 
              className="text-gray-400 hover:text-black transition-colors"
              title="Email Us"
            >
              <Mail size={20} />
            </a>
          )}

          {settings.social_github && (
            <a 
              href={settings.social_github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          )}

          {settings.social_twitter && (
            <a 
              href={settings.social_twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
              title="Twitter / X"
            >
              <Twitter size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}