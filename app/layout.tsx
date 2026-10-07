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
    default: "A76LABS — Practical Digital Products",
    template: "%s — A76LABS",
  },
  description: "A76LABS is an independent, founder-led product lab building practical digital products, software tools, and focused experiments.",
  keywords: [
    "Product Lab",
    "A76LABS",
    "Software Engineering",
    "Backend Systems",
    "Web Applications",
    "Access Control",
    "Indie Software",
    "Muhammad Syukur"
  ],
  authors: [{ name: "Muhammad Syukur", url: "https://syukur.dev" }],
  openGraph: {
    title: "A76LABS — Practical Digital Products",
    description: "A76LABS is an independent, founder-led product lab building practical digital products, software tools, and focused experiments.",
    url: "https://www.a76labs.online",
    siteName: "A76LABS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A76LABS — Practical Digital Products",
    description: "Independent, founder-led product lab building practical digital products, software tools, and focused experiments.",
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
