import { api } from "@/trpc/server";
import { notFound } from "next/navigation";
import { type NextPageProps } from "@/types";
import RecipeView from "@/components/recipe/recipe-view/recipe-view";

const page = async ({ params }: NextPageProps) => {
  if (!params.id) {
    return notFound();
  }

  const fullRecipe = await api.recipe.getById.query(+params.id);

  if (!fullRecipe) {
    return notFound();
  }

  return <RecipeView recipe={fullRecipe} />;
};

export default page;
