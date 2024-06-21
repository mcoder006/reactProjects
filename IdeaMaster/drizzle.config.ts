import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/Schema.ts", 
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});
