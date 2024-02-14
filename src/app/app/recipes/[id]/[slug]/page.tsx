import { api } from "@/trpc/server";
import { notFound } from "next/navigation";
import { type NextPageProps } from "@/types";
import RecipeView from "@/components/recipe/recipe-view/recipe-view";

const page = async ({ params }: NextPageProps) => {
  if (!params.id) {
    return notFound();
  }

  const [recipe] = await api.recipe.getById.query(+params.id);

  if (!recipe) {
    return notFound();
  }

  return <RecipeView recipe={recipe} />;
};

export default page;
