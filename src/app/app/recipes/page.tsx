import RecipePreviewCard from "@/components/recipe/recipe-preview-card";
import { unstable_noStore as noStore } from "next/cache";
import { api } from "@/trpc/server";
import { Ghost } from "lucide-react";
import RecipeListStyleSwitch from "@/components/recipe/recipe-list-style-switch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RecipeListSortSelect from "@/components/recipe/recipie-list-sort";

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
        <Button className="w-full" size="lg" asChild>
          <Link href="/app/recipes/new">New Recipe</Link>
        </Button>
      </div>
    </>
  );
};

export default Page;
