import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.a76labs.online"),
  title: {
    default: "A76LABS — Founder-Led Software Startup",
    template: "%s — A76LABS",
  },
  description: "A76LABS is a founder-led early-stage software startup building and operating practical digital products from Indonesia. Led by founder Muhammad Syukur.",
  keywords: [
    "A76LABS",
    "Software Startup",
    "Software Venture",
    "Founder-Led Startup",
    "Dompet Pintar",
    "Muhammad Syukur",
    "Software Engineering Indonesia",
    "Web Applications",
    "Cashflow Management",
    "Backend Systems"
  ],
  authors: [{ name: "Muhammad Syukur", url: "https://syukur.dev" }],
  creator: "Muhammad Syukur",
  publisher: "A76LABS",
  openGraph: {
    title: "A76LABS — Founder-Led Software Startup",
    description: "A76LABS is a founder-led early-stage software startup building and operating practical digital products from Indonesia. Led by founder Muhammad Syukur.",
    url: "https://www.a76labs.online",
    siteName: "A76LABS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A76LABS — Founder-Led Software Startup",
    description: "Founder-led early-stage software startup building and operating practical digital products from Indonesia. Led by founder Muhammad Syukur.",
  },
  alternates: {
    canonical: "https://www.a76labs.online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen selection:bg-gray-950 selection:text-white">
        {children}
      </body>
    </html>
  );
}
