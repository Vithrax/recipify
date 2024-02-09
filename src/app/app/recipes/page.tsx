import RecipePreviewCard from "@/components/recipe-preview-card";
import { api } from "@/trpc/server";
import { Ghost } from "lucide-react";

const Page = async () => {
  const recipes = await api.recipe.getAll.query();

  console.log(recipes);

  return (
    <>
      <h2 className="p-3 text-3xl font-semibold tracking-tight">Recipies</h2>
      <ul className="space-y-3 pb-3">
        {recipes.map((recipe) => (
          <RecipePreviewCard recipe={recipe} key={recipe.id} />
        ))}
        {recipes.length === 0 && (
          <li className="mt-8 flex flex-col items-center justify-center gap-1.5">
            <Ghost className="h-8 w-8 text-primary" />
            <p className="text-muted-foreground">Pretty empty out here!</p>
          </li>
        )}
      </ul>
    </>
  );
};

export default Page;
