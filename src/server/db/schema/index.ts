import { sqliteTableCreator } from "drizzle-orm/sqlite-core";

export * from "./auth";
export * from "./recipe";

export const createTable = sqliteTableCreator((name) => `recipify_${name}`);
