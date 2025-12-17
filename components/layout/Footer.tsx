import Link from "next/link";
import { db } from "@/lib/db";
import { siteSettings } from "@/lib/schema";
import { Github, Twitter, Mail } from "lucide-react";

// Helper untuk ambil data settings dari DB
async function getSettings() {
  const data = await db.select().from(siteSettings);
  
  // Convert Array ke Object biar gampang dipanggil (misal: settings.social_github)
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
        
        {/* Kiri: Brand & Deskripsi */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg">{settings.site_title || "A76LABS"}</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-xs">
            {settings.site_description || "Building practical digital products."}
          </p>
          <p className="text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} {settings.site_title || "A76LABS"}. All rights reserved.
          </p>
        </div>
        
        {/* Kanan: Social Links Dynamic */}
        <div className="flex items-center gap-6">
          
          {/* Email Link */}
          {settings.contact_email && (
            <a 
              href={`mailto:${settings.contact_email}`} 
              className="text-gray-400 hover:text-black transition-colors"
              title="Email Us"
            >
              <Mail size={20} />
            </a>
          )}

          {/* GitHub Link */}
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

          {/* Twitter Link */}
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