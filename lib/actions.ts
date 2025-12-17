"use server";

import { db } from "@/lib/db";
import { messages } from "@/lib/schema";
import { revalidatePath } from "next/cache";

// Return type agar frontend tahu hasilnya
type ActionState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(prevState: ActionState, formData: FormData): Promise<ActionState> {
  // 1. Ambil data dari form HTML
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // 2. Validasi sederhana
  if (!email || !message) {
    return { error: "Email and message are required." };
  }

  try {
    // 3. Simpan ke Database Turso
    await db.insert(messages).values({
      senderEmail: email,
      messageBody: message,
    });

    // 4. Refresh cache admin panel (jika nanti admin sedang buka halaman pesan)
    revalidatePath("/admin/messages");

    return { success: true };
  } catch (error) {
    console.error("Failed to submit message:", error);
    return { error: "Something went wrong. Please try again." };
  }
}