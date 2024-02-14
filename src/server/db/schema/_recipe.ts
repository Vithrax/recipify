import type z from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { createTable } from "@/lib/utils";
import { int, text } from "drizzle-orm/sqlite-core";
import { users } from ".";
import { sql } from "drizzle-orm";

export const recipes = createTable("recipe", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }).notNull(),
  description: text("description", { length: 256 }),
  slug: text("slug", { length: 256 }),
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

export const ingredients = createTable("ingredient", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  recipeId: int("recipeId")
    .notNull()
    .references(() => recipes.id),
  amount: text("amount", { length: 255 }).notNull(),
  name: text("name", { length: 255 }).notNull(),
});

export const steps = createTable("step", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  recipeId: int("recipeId")
    .notNull()
    .references(() => recipes.id),
  title: text("amount", { length: 255 }).notNull(),
  description: text("name", { length: 255 }).notNull(),
});

// Schemas

export const RecipeSchema = createSelectSchema(recipes);
export const NewRecipeSchema = createInsertSchema(recipes, {
  image: (schema) =>
    schema.image.regex(
      /^https:\/\/images.unsplash.com\/[\w\W]+/gm,
      "Invalid url",
    ),
});

export const IngredientSchema = createSelectSchema(ingredients);
export const NewIngredientSchema = createInsertSchema(ingredients);

export const StepSchema = createSelectSchema(steps);
export const NewStepSchema = createInsertSchema(steps);

// Types

export type Recipe = z.infer<typeof RecipeSchema>;
export type NewRecipe = z.infer<typeof NewRecipeSchema>;

export type Ingredient = z.infer<typeof IngredientSchema>;
export type NewIngredient = z.infer<typeof NewIngredientSchema>;

export type Step = z.infer<typeof StepSchema>;
export type NewStep = z.infer<typeof NewStepSchema>;
