import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "@/lib/auth"; // Kita pakai fungsi verifikasi JWT kita

export async function middleware(request: NextRequest) {
  // 1. Cek apakah user sedang mencoba akses halaman admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    
    // 2. Ambil cookie session
    const session = request.cookies.get("session")?.value;

    // 3. Validasi session
    // Jika tidak ada session ATAU session tidak valid -> Tendang ke login
    if (!session || !(await verifySession(session))) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Konfigurasi: Middleware hanya aktif di path yang relevan untuk hemat resource
export const config = {
  matcher: ["/admin/:path*"],
};