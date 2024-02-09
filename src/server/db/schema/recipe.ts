import { type z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { int, text } from "drizzle-orm/sqlite-core";
import { createTable, users } from ".";
import { sql } from "drizzle-orm";

export const recipe = createTable("recipe", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }).notNull(),
  description: text("description", { length: 256 }),
  image: text("image", { length: 256 }),
  cookingTime: int("cookingTime", { mode: "number" }),
  favorite: int("favorite", { mode: "boolean" }),
  createdBy: text("createdBy", { length: 255 })
    .notNull()
    .references(() => users.id),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});

const selectRecipeSchema = createSelectSchema(recipe);
const insertRecipeSchema = createInsertSchema(recipe);

export type Recipe = z.infer<typeof selectRecipeSchema>;
export type NewRecipe = z.infer<typeof insertRecipeSchema>;
