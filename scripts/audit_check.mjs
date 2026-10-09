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

// 3. Homepage structured data & startup positioning check
const home = fs.readFileSync("app/(public)/page.tsx", "utf8");
assert(home.includes("Founder-Led Software Startup"), "home must use founder-led software startup framing");
assert(home.includes("dompet-pintar"), "home must feature dompet-pintar");

// 4. Verification pack integrity check
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

// 5. Readiness report check
assert(fs.existsSync("docs/CLAUDE_STARTUPS_READINESS.md"), "Missing readiness report");
assert(fs.statSync("docs/CLAUDE_STARTUPS_READINESS.md").size > 5000, "Readiness report incomplete");

console.log("All forensic audit and readiness assertions passed successfully!");
