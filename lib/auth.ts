import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET!;
const key = new TextEncoder().encode(SECRET_KEY);

// 1. Membuat Token (Saat Login)
export async function signSession(payload: { userId: number; email: string }) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24; // Token berlaku 24 jam

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(iat)
    .setExpirationTime(exp)
    .sign(key);
}

// 2. Verifikasi Token (Saat akses halaman Admin)
export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

// 3. Simpan Session ke Cookie Browser
export async function createSession(userId: number, email: string) {
  const token = await signSession({ userId, email });
  
  // Await cookies() karena di Next.js 15 cookies() itu async
  const cookieStore = await cookies();

  cookieStore.set("session", token, {
    httpOnly: true, // Tidak bisa diakses via JavaScript client (Aman dari XSS)
    secure: process.env.NODE_ENV === "production", // HTTPS only di production
    sameSite: "lax",
    path: "/",
  });
}

// 4. Hapus Session (Logout)
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

// 5. Cek apakah user sedang login (Untuk Middleware/Server Component)
export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  return await verifySession(session);
}