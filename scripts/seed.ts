import * as dotenv from "dotenv";

// 1. Load Environment Variables DULUAN
dotenv.config({ path: ".env.local" });

async function main() {
  console.log("🌱 Seeding database...");

  // 2. Import DB & Schema DI DALAM fungsi async
  // Ini trik agar env vars terbaca dulu sebelum koneksi dibuat
  const { db } = await import("../lib/db");
  const { products, labs } = await import("../lib/schema");

  try {
    // 3. Masukkan data dummy
    
    // Sample Product
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
    ]);

    // Sample Lab Experiment
    await db.insert(labs).values([
      {
        slug: "ai-text-gen",
        title: "AI Text Generator Experiment",
        type: "Prototype",
        content: "This is an experiment using OpenAI API to generate marketing copy automatically.",
        isPublished: true,
      },
    ]);

    console.log("✅ Seeding finished successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    process.exit(0);
  }
}

main();