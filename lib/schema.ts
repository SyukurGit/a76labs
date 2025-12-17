import { sqliteTable, text, integer,  } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// 1. ADMIN USERS
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

// 2. PRODUCTS (Showcase)
export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(), // Problem & Solution
  status: text("status", { enum: ["Active", "Beta", "Archived"] }).notNull(),
  techStack: text("tech_stack"), // JSON string: ["Next.js", "Turso"]
  demoUrl: text("demo_url"),
  repoUrl: text("repo_url"),
  isPublished: integer("is_published", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

// 3. LABS (Experiments)
export const labs = sqliteTable("labs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  type: text("type", { enum: ["Prototype", "Experiment", "Archived"] }).notNull(),
  content: text("content"), // Markdown content
  isPublished: integer("is_published", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

// 4. MESSAGES (Contact Form)
export const messages = sqliteTable("messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  senderEmail: text("sender_email").notNull(),
  messageBody: text("message_body").notNull(),
  isRead: integer("is_read", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});