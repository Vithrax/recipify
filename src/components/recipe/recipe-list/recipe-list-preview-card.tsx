"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Clock, Heart, Loader2, Star } from "lucide-react";
import { Separator } from "../../ui/separator";
import { cn } from "@/lib/utils";
import { useRecipeListStore } from "@/state/recipe-list";
import { api } from "@/trpc/react";
import { type Recipe } from "@/server/db/schema";
import Link from "next/link";

interface Props {
  recipe: Recipe;
}

const RecipePreviewCard = ({ recipe }: Props) => {
  const { minimized } = useRecipeListStore();
  const {
    mutate: toggleFavorite,
    data,
    isLoading,
  } = api.recipe.toggleFavorite.useMutation();

  const favorite = data ?? recipe.favorite;

  return (
    <li>
      <Card className="relative overflow-hidden">
        <Link href={`/app/recipes/${recipe.id}/${recipe.slug}`}>
          {recipe.image && !minimized && (
            <div className={cn("relative h-72")}>
              <Image
                src={recipe.image}
                alt="dish picture"
                fill
                className="object-cover"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle>{recipe.name}</CardTitle>
            <CardDescription className="line-clamp-3">
              {recipe.description}
            </CardDescription>
          </CardHeader>
        </Link>
        <CardFooter className="flex items-center gap-4 bg-primary/5 p-2 pl-3">
          <div className="flex items-center justify-center gap-1">
            <Clock className="h-5 w-5 text-primary" />
            {recipe.cookingTime} min
          </div>
          <Separator orientation="vertical" className="h-5" />
          <div className="flex items-center justify-center gap-1">
            <Star className="h-5 w-5 text-primary" />
            3.9
          </div>
          {isLoading ? (
            <Loader2 className="ml-auto mr-2 h-5 w-5 animate-spin text-primary" />
          ) : (
            <Heart
              onClick={() => toggleFavorite(recipe.id)}
              className={cn("ml-auto mr-2 h-5 w-5 text-primary", {
                "fill-primary": favorite,
              })}
            />
          )}
        </CardFooter>
      </Card>
    </li>
  );
};

export default RecipePreviewCard;
