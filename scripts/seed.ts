import * as dotenv from "dotenv";
import bcrypt from "bcryptjs"; 

// 1. Load Environment Variables DULUAN
dotenv.config({ path: ".env.local" });

async function main() {
  console.log("🌱 Seeding database...");

  // 2. Import DB & Schema DI DALAM fungsi async
  const { db } = await import("../lib/db");
  const { products, labs, users } = await import("../lib/schema");

  try {
    // --- SEED ADMIN USER ---
    // Cek dulu apakah admin sudah ada agar tidak error duplicate
    // (Atau gunakan onConflictDoNothing jika kolom email unique)
    console.log("👤 Seeding admin user...");
    const hashedPassword = await bcrypt.hash("admin123", 10);
    
    await db.insert(users).values({
      email: "admin@a76labs.com",
      passwordHash: hashedPassword,
    }).onConflictDoNothing({ target: users.email }); // <--- INI KUNCINYA

    // --- SEED PRODUCTS ---
    console.log("📦 Seeding products...");
    await db.insert(products).values([
      {
        slug: "project-alpha",
        name: "Project Alpha",
        tagline: "The next gen SaaS starter kit",
        description: "Project Alpha solves the problem of repetitive setup by providing a production-ready boilerplate. Built for speed and scale.",
        status: "Beta",
        techStack: JSON.stringify(["Next.js", "Turso", "Tailwind"]),
        demoUrl: "https://example.com",
        isPublished: true,
      },
      {
        slug: "neon-dash",
        name: "Neon Dash",
        tagline: "Real-time analytics dashboard",
        description: "A lightweight dashboard for monitoring server metrics in real-time without the overhead of heavy enterprise tools.",
        status: "Active",
        techStack: JSON.stringify(["React", "WebSockets", "D3.js"]),
        repoUrl: "https://github.com/example/neon",
        isPublished: true,
      },
    ]).onConflictDoNothing({ target: products.slug }); // <--- Cuma insert kalau slug belum ada

    // --- SEED LABS ---
    console.log("🧪 Seeding labs...");
    await db.insert(labs).values([
      {
        slug: "ai-text-gen",
        title: "AI Text Generator Experiment",
        type: "Prototype",
        content: "This is an experiment using OpenAI API to generate marketing copy automatically.",
        isPublished: true,
      },
    ]).onConflictDoNothing({ target: labs.slug }); // <--- Sama di sini

    console.log("✅ Seeding finished successfully! (Existing data was skipped)");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    process.exit(0);
  }
}

main();