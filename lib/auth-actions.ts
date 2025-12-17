"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { createSession } from "@/lib/auth"; // Fungsi dari file auth.ts sebelumnya
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please enter email and password." };
  }

  try {
    // 1. Cari user di Database
    const userResult = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = userResult[0];

    // 2. Jika user tidak ada ATAU password salah
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return { error: "Invalid credentials." };
    }

    // 3. Login sukses -> Buat Session Cookie
    await createSession(user.id, user.email);

  } catch (error) {
    console.error("Login error:", error);
    return { error: "Something went wrong." };
  }

  // 4. Redirect (Harus di luar try/catch di Next.js)
  redirect("/admin/dashboard");
}

// Fungsi Logout
export async function logoutAction() {
  const { deleteSession } = await import("@/lib/auth");
  await deleteSession();
  redirect("/login");
}