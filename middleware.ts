import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  // 1. Cek apakah user akses halaman admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    
    // 2. Ambil cookie session
    const session = request.cookies.get("session")?.value;

    // 3. Validasi session
    // Jika tidak ada session atau session tidak valid, lempar ke login
    if (!session || !(await verifySession(session))) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};