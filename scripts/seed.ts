import * as dotenv from "dotenv";
import bcrypt from "bcryptjs"; 

dotenv.config({ path: ".env.local" });

async function main() {
  console.log("🌱 Seeding database...");

  const { db } = await import("../lib/db");
  const { products, labs, users, siteSettings } = await import("../lib/schema");

  try {
    // --- ADMIN USER ---
    console.log("👤 Seeding admin user...");
    const hashedPassword = await bcrypt.hash("admin123", 10);
    
    await db.insert(users).values({
      email: "founder@a76labs.online",
      passwordHash: hashedPassword,
    }).onConflictDoNothing({ target: users.email });

    // --- SITE SETTINGS ---
    console.log("⚙️ Seeding site settings...");
    const settingsList = [
      { key: "site_title", value: "A76LABS" },
      { key: "site_description", value: "Founder-led early-stage software startup building and operating practical digital products from Indonesia. Led by founder Muhammad Syukur." },
      { key: "contact_email", value: "founder@a76labs.online" },
      { key: "social_github", value: "https://github.com/SyukurGit" },
      { key: "social_twitter", value: "https://x.com/a76labs" },
      { key: "founder_site", value: "https://syukur.dev" },
      { key: "location", value: "Indonesia · WIB (UTC+7)" }
    ];
    for (const s of settingsList) {
      await db.insert(siteSettings).values(s).onConflictDoUpdate({
        target: siteSettings.key,
        set: { value: s.value }
      });
    }

    // --- PRODUCTS ---
    console.log("📦 Seeding products...");
    await db.insert(products).values([
      {
        slug: "dompet-pintar",
        name: "Dompet Pintar",
        tagline: "Personal cashflow management with web dashboard & Telegram bot",
        description: "Dompet Pintar is a personal cashflow management application combining a web dashboard, structured transaction recording, account management, Excel reporting, and Telegram bot input workflows.",
        status: "Active",
        techStack: JSON.stringify(["Next.js", "Go", "Tailwind CSS", "Telegram Bot API"]),
        demoUrl: "https://dompetpintar.a76labs.online",
        repoUrl: null,
        isPublished: true,
      }
    ]).onConflictDoNothing({ target: products.slug });

    // --- LABS ---
    console.log("🧪 Seeding labs...");
    await db.insert(labs).values([
      {
        slug: "ai-workflow-automation",
        title: "AI-Assisted Workflow Automation",
        type: "Experiment",
        content: "Exploration of LLM-assisted workflows for automating operational tasks, ticket triage, and structured report synthesis from raw event streams. Focuses on pragmatic prompt orchestration and deterministic schema validation.",
        isPublished: true,
      },
    ]).onConflictDoNothing({ target: labs.slug });

    console.log("✅ Seeding finished successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    process.exit(0);
  }
}

main();
