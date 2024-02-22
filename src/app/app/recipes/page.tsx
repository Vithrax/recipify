import RecipePreviewCard from "@/components/recipe/recipe-list/recipe-list-preview-card";
import { unstable_noStore as noStore } from "next/cache";
import { api } from "@/trpc/server";
import { Ghost } from "lucide-react";
import RecipeListStyleSwitch from "@/components/recipe/recipe-list/recipe-list-style-switch";
import RecipeListSortSelect from "@/components/recipe/recipe-list/recipe-list-sort";
import NewRecipeDrawer from "@/components/recipe/new-recipe-drawer";

const Page = async () => {
  noStore();
  const recipes = await api.recipe.getAll.query();

  return (
    <>
      <div className="p-1 pb-16">
        <header className="flex items-center justify-between pb-1">
          <RecipeListSortSelect />
          <RecipeListStyleSwitch />
        </header>
        <ul className="space-y-1 pb-3">
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
      </div>
      <div className="fixed bottom-0 w-full p-1">
        <NewRecipeDrawer />
      </div>
    </>
  );
};

export default Page;
