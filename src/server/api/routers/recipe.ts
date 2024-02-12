import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { NewRecipeSchema, recipes } from "@/server/db/schema";
import { eq, and } from "drizzle-orm";
import { z } from "zod";
import slugify from "slugify";

export const recipeRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const { id } = ctx.session.user;

    return await ctx.db.select().from(recipes).where(eq(recipes.createdBy, id));
  }),
  getById: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      return await ctx.db
        .select()
        .from(recipes)
        .where(
          and(
            eq(recipes.id, input),
            eq(recipes.createdBy, ctx.session.user.id),
          ),
        );
    }),
  create: protectedProcedure
    .input(NewRecipeSchema)
    .mutation(async ({ ctx, input }) => {
      const slug = slugify(input.name.toLowerCase());
      const data = {
        ...input,
        createdBy: ctx.session.user.id,
        slug,
      };

      await ctx.db.insert(recipes).values(data);
    }),
  toggleFavorite: protectedProcedure
    .input(z.number())
    .mutation(async ({ ctx, input }) => {
      const currentStatus = await ctx.db.query.recipes.findFirst({
        columns: {
          favorite: true,
        },
        where: (recipes, { eq, and }) =>
          and(
            eq(recipes.id, input),
            eq(recipes.createdBy, ctx.session.user.id),
          ),
      });

      const favorite = currentStatus?.favorite;

      await ctx.db
        .update(recipes)
        .set({ favorite: !favorite })
        .where(
          and(
            eq(recipes.id, input),
            eq(recipes.createdBy, ctx.session.user.id),
          ),
        );

      return !favorite;
    }),
});
