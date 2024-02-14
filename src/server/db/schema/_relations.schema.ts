import { relations } from "drizzle-orm";
import { accounts, ingredients, recipes, sessions, steps, users } from ".";

// next-auth
export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  recipes: many(recipes),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

// recipes
export const recipesRelations = relations(recipes, ({ one, many }) => ({
  users: one(users, { fields: [recipes.createdBy], references: [users.id] }),
  ingredients: many(ingredients),
  steps: many(steps),
}));

export const ingredientsRelations = relations(ingredients, ({ one }) => ({
  recipes: one(recipes, {
    fields: [ingredients.recipeId],
    references: [recipes.id],
  }),
}));

export const stepsRelations = relations(steps, ({ one }) => ({
  recipes: one(recipes, { fields: [steps.recipeId], references: [recipes.id] }),
}));
