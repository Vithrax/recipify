import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Clock, Heart, Star } from "lucide-react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { type Recipe } from "@/server/db/schema";

interface Props {
  recipe: Recipe;
}

const RecipePreviewCard = ({ recipe }: Props) => {
  return (
    <li>
      <Card className="relative overflow-hidden">
        <div className={cn("relative h-72")}>
          {recipe.image && (
            <Image
              src={recipe.image}
              alt="dish picture"
              fill
              className="object-cover"
            />
          )}
        </div>
        <CardHeader>
          <CardTitle>{recipe.name}</CardTitle>
          <CardDescription>{recipe.description}</CardDescription>
        </CardHeader>
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
          <Heart
            className={cn("ml-auto mr-2 h-5 w-5 text-primary", {
              "fill-primary": recipe.favorite,
            })}
          />
        </CardFooter>
      </Card>
    </li>
  );
};

export default RecipePreviewCard;
