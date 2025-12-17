"use server";

import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// --- CREATE PRODUCT ---
export async function createProduct(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const tagline = formData.get("tagline") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as "Active" | "Beta" | "Archived";
  const techStack = formData.get("techStack") as string; // String dipisah koma
  const demoUrl = formData.get("demoUrl") as string;
  const repoUrl = formData.get("repoUrl") as string;
  const isPublished = formData.get("isPublished") === "on";

  try {
    // Convert string "React, Next.js" jadi JSON string array '["React", "Next.js"]'
    const techArray = techStack ? JSON.stringify(techStack.split(",").map((t) => t.trim())) : "[]";

    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      status,
      techStack: techArray,
      demoUrl,
      repoUrl,
      isPublished,
    });

    revalidatePath("/admin/products"); // Refresh halaman admin
    revalidatePath("/products");       // Refresh halaman publik
  } catch (error) {
    console.error("Create Product Error:", error);
    return { error: "Failed to create product. Slug might already exist." };
  }

  redirect("/admin/products");
}

// --- UPDATE PRODUCT ---
export async function updateProduct(id: number, prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const tagline = formData.get("tagline") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as "Active" | "Beta" | "Archived";
  const techStack = formData.get("techStack") as string;
  const demoUrl = formData.get("demoUrl") as string;
  const repoUrl = formData.get("repoUrl") as string;
  const isPublished = formData.get("isPublished") === "on";

  try {
    const techArray = techStack ? JSON.stringify(techStack.split(",").map((t) => t.trim())) : "[]";

    await db.update(products).set({
      name,
      slug,
      tagline,
      description,
      status,
      techStack: techArray,
      demoUrl,
      repoUrl,
      isPublished,
      updatedAt: new Date().toISOString(), // Update timestamp
    }).where(eq(products.id, id));

    revalidatePath("/admin/products");
    revalidatePath("/products");
    revalidatePath(`/products/${slug}`); // Refresh halaman detail produk
  } catch (error) {
    return { error: "Failed to update product." };
  }

  redirect("/admin/products");
}

// --- DELETE PRODUCT ---
export async function deleteProduct(id: number) {
  try {
    await db.delete(products).where(eq(products.id, id));
    revalidatePath("/admin/products");
    revalidatePath("/products");
  } catch (error) {
    console.error("Delete Error:", error);
  }
}