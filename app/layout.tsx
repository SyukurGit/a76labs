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

export const metadata: Metadata = {
  title: "A76LABS",
  description: "Independent Product Lab",
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