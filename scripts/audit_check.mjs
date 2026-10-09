import assert from "node:assert";
import fs from "node:fs";

// 1. Robots crawler configuration check
const robots = fs.readFileSync("app/robots.ts", "utf8");
assert(robots.includes("ClaudeBot"), "robots.ts must allow ClaudeBot");
assert(robots.includes("anthropic-ai"), "robots.ts must allow anthropic-ai");

// 2. Sitemap comprehensive routes check
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
assert(sitemap.includes("/updates"), "sitemap must include /updates");
assert(sitemap.includes("/privacy"), "sitemap must include /privacy");
assert(sitemap.includes("/terms"), "sitemap must include /terms");
assert(!sitemap.includes("neon-dash"), "sitemap must NOT include dummy neon-dash");

// 3. Homepage structured data & startup positioning check
const home = fs.readFileSync("app/(public)/page.tsx", "utf8");
assert(home.includes("Founder-Led Software Startup"), "home must use founder-led software startup framing");
assert(home.includes("dompet-pintar"), "home must feature dompet-pintar");
assert(!home.toLowerCase().includes("neon"), "home must NOT contain dummy neon-dash");

// 4. Products page check
const prod = fs.readFileSync("app/(public)/products/page.tsx", "utf8");
assert(prod.includes("Dompet Pintar"), "products page must feature Dompet Pintar");
assert(!prod.toLowerCase().includes("neon"), "products page must NOT contain dummy neon");

// 5. Slug detail check
const slugPage = fs.readFileSync("app/(public)/products/[slug]/page.tsx", "utf8");
assert(!slugPage.includes("neon-dash"), "slug page must NOT contain neon-dash");

// 6. Next config permanent redirect check
const nextConfig = fs.readFileSync("next.config.ts", "utf8");
assert(nextConfig.includes("/products/neon-dash"), "next.config.ts must redirect legacy neon-dash");

// 7. Verification pack integrity check
const expectedFiles = [
  "FOUNDER_PROFILE.md",
  "GITHUB_PROFILE.md",
  "LINKEDIN_COMPANY.md",
  "LINKEDIN_FOUNDER.md",
  "CLAUDE_APPLICATION.md",
  "PUBLIC_COMPANY_FACTS.md",
  "VERIFICATION_GAPS.md",
  "REINDEX_ACTIONS.md"
];
expectedFiles.forEach(file => {
  const path = `docs/public-verification/${file}`;
  assert(fs.existsSync(path), `Missing ${path}`);
  assert(fs.statSync(path).size > 100, `${path} is too small`);
});

// 8. Research & Readiness reports check
assert(fs.existsSync("docs/CLAUDE_STARTUPS_READINESS.md"), "Missing readiness report");
assert(fs.existsSync("docs/CLAUDE_STARTUPS_CURRENT_RESEARCH_2026-10-09.md"), "Missing research report");

console.log("All forensic audit, dummy removal, and readiness assertions passed successfully!");
