import { Sidebar } from "@/components/admin/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel - A76LABS",
  robots: "noindex, nofollow", // PENTING: Agar Google tidak mengindeks halaman admin
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar (Fixed) */}
      <Sidebar />

      {/* Main Content (Offset by Sidebar width) */}
      <main className="ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}