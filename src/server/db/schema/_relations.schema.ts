import { relations } from "drizzle-orm";
import { accounts, recipes, sessions, users } from ".";

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
export const recipesRelations = relations(recipes, ({ one }) => ({
  users: one(users),
}));
