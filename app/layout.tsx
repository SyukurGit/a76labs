import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import font
import "./globals.css";


// 1. Setup Font Utama (Inter)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Variable CSS
  display: "swap",
});

// 2. Setup Font Coding (JetBrains Mono - untuk nuansa Labs)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// GANTI BAGIAN METADATA INI:
export const metadata: Metadata = {
  // Ganti URL ini dengan domain Vercel aslimu nanti saat deploy
  metadataBase: new URL('https://a76labs.vercel.app'), 
  
  title: {
    default: "A76LABS - Independent Product Lab",
    template: "%s | A76LABS", // %s akan diganti judul per halaman
  },
  description: "A showcase of practical digital products, experiments, and engineering labs. Built with Next.js and Turso.",
  keywords: ["Product Lab", "SaaS", "Next.js", "Turso", "Software Engineering", "Indie Hacker"],
  authors: [{ name: "A76LABS Team" }],
  openGraph: {
    title: "A76LABS",
    description: "Building practical digital products.",
    url: 'https://a76labs.vercel.app',
    siteName: 'A76LABS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A76LABS',
    description: 'Independent Product Lab',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}