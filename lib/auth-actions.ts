"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { createSession } from "@/lib/auth";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction(_prevState: { error?: string } | undefined, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please enter email and password." };
  }

  try {
    const userResult = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = userResult[0];

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return { error: "Invalid credentials." };
    }

    await createSession(user.id, user.email);
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Something went wrong." };
  }

  redirect("/admin/dashboard");
}

export async function logoutAction() {
  const { deleteSession } = await import("@/lib/auth");
  await deleteSession();
  redirect("/login");
}
