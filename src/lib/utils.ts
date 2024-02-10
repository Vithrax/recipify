import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { sqliteTableCreator } from "drizzle-orm/sqlite-core";

export const createTable = sqliteTableCreator((name) => `recipify_${name}`);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function acronym(text: string | null | undefined) {
  if (!text) {
    return "";
  }

  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function randItem<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}
