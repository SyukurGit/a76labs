"use server";

import { db } from "@/lib/db";
import { products, labs, messages, siteSettings } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface ActionErrorState {
  error?: string;
  success?: string;
}

// --- CREATE PRODUCT ---
export async function createProduct(_prevState: ActionErrorState | undefined, formData: FormData): Promise<ActionErrorState | undefined> {
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

    revalidatePath("/admin/products");
    revalidatePath("/products");
  } catch (error) {
    console.error("Create Product Error:", error);
    return { error: "Failed to create product. Slug might already exist." };
  }

  redirect("/admin/products");
}

// --- UPDATE PRODUCT ---
export async function updateProduct(id: number, _prevState: ActionErrorState | undefined, formData: FormData): Promise<ActionErrorState | undefined> {
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
      updatedAt: new Date().toISOString(),
    }).where(eq(products.id, id));

    revalidatePath("/admin/products");
    revalidatePath("/products");
    revalidatePath(`/products/${slug}`);
  } catch (error) {
    console.error("Update Product Error:", error);
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

// 1. CREATE LAB
export async function createLab(_prevState: ActionErrorState | undefined, formData: FormData): Promise<ActionErrorState | undefined> {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const type = formData.get("type") as "Prototype" | "Experiment" | "Archived";
  const content = formData.get("content") as string;
  const isPublished = formData.get("isPublished") === "on";

  try {
    await db.insert(labs).values({
      title,
      slug,
      type,
      content,
      isPublished,
    });

    revalidatePath("/admin/labs");
    revalidatePath("/labs");
  } catch (error) {
    console.error("Create Lab Error:", error);
    return { error: "Failed to create lab. Slug might exist." };
  }

  redirect("/admin/labs");
}

// 2. UPDATE LAB
export async function updateLab(id: number, _prevState: ActionErrorState | undefined, formData: FormData): Promise<ActionErrorState | undefined> {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const type = formData.get("type") as "Prototype" | "Experiment" | "Archived";
  const content = formData.get("content") as string;
  const isPublished = formData.get("isPublished") === "on";

  try {
    await db.update(labs).set({
      title,
      slug,
      type,
      content,
      isPublished,
    }).where(eq(labs.id, id));

    revalidatePath("/admin/labs");
    revalidatePath("/labs");
  } catch (error) {
    console.error("Update Lab Error:", error);
    return { error: "Failed to update lab." };
  }

  redirect("/admin/labs");
}

// 3. DELETE LAB
export async function deleteLab(id: number) {
  try {
    await db.delete(labs).where(eq(labs.id, id));
    revalidatePath("/admin/labs");
    revalidatePath("/labs");
  } catch (error) {
    console.error("Delete Lab Error:", error);
  }
}

export async function markMessageAsRead(id: number) {
  try {
    await db.update(messages).set({ isRead: true }).where(eq(messages.id, id));
    revalidatePath("/admin/messages");
  } catch (error) {
    console.error("Update Message Error:", error);
  }
}

export async function deleteMessage(id: number) {
  try {
    await db.delete(messages).where(eq(messages.id, id));
    revalidatePath("/admin/messages");
  } catch (error) {
    console.error("Delete Message Error:", error);
  }
}

export async function updateSettings(_prevState: ActionErrorState | undefined, formData: FormData): Promise<ActionErrorState | undefined> {
  const settings = {
    site_title: formData.get("site_title") as string,
    site_description: formData.get("site_description") as string,
    contact_email: formData.get("contact_email") as string,
    social_github: formData.get("social_github") as string,
    social_twitter: formData.get("social_twitter") as string,
  };

  try {
    for (const [key, value] of Object.entries(settings)) {
      await db
        .insert(siteSettings)
        .values({ key, value })
        .onConflictDoUpdate({
          target: siteSettings.key,
          set: { value },
        });
    }

    revalidatePath("/admin/settings");
    revalidatePath("/");
    
    return { success: "Settings saved successfully!" };
  } catch (error) {
    console.error("Settings Update Error:", error);
    return { error: "Failed to save settings." };
  }
}
