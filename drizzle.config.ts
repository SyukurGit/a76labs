import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL +
      (process.env.TURSO_AUTH_TOKEN ? `?authToken=${process.env.TURSO_AUTH_TOKEN}` : ""),
  },
});