import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const aiOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: varchar("aiResponse"),
  slug: varchar("slug").notNull(),
  createdBy: varchar("email").notNull(),
  createdAt: varchar("createdAt"),
  isPremium: varchar("isPremium").default("no"), // Premium status, defaults to 'no'
});
