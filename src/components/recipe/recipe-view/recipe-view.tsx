import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import StepItem from "./recipe-instruction-step";
import IngredientItem from "./recipe-ingredient";
import RecipeDropdownOptions from "./recipe-dropdown-options";
import { type RouterOutputs } from "@/trpc/shared";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import RecipeUploadDropzone from "./recipe-upload-dropzone";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ImageWithPlaceholder from "@/components/ui/image-with-placeholder";

type FullRecipe = NonNullable<RouterOutputs["recipe"]["getById"]>;

interface Props {
  recipe: FullRecipe;
}

const RecipeView = ({ recipe }: Props) => {
  const { name, description, steps, ingredients } = recipe;

  return (
    <>
      <header>
        {recipe.image ? (
          <ImageWithPlaceholder
            src={recipe.image}
            alt="dish preview"
            width={2000}
            height={2000}
            className="max-h-72 object-cover"
          />
        ) : (
          <RecipeUploadDropzone recipeId={recipe.id} />
        )}
        <div className="px-2 pt-4">
          <h2 className="flex items-center justify-between text-3xl font-semibold tracking-tight">
            <span className="truncate">{name}</span>{" "}
            <RecipeDropdownOptions id={recipe.id} />
          </h2>
          <p className="pr-8 leading-5 text-muted-foreground">{description}</p>
        </div>
      </header>
      <Separator className="my-5 bg-background" />
      {ingredients.length === 0 && (
        <div className="flex h-40 flex-col items-center justify-center gap-2">
          <span>No ingredients added</span>
          <Button>
            <PlusCircle className="mr-1.5 h-5 w-5" />
            Add New
          </Button>
        </div>
      )}
      <ul className="grid grid-cols-2 space-y-1 px-4">
        {ingredients.map((ing) => (
          <IngredientItem key={name} {...ing} />
        ))}
      </ul>
      <Separator className="my-5 bg-background" />
      {steps.length === 0 && (
        <div className="flex h-40 flex-col items-center justify-center gap-2">
          <span>No steps added</span>
          <Button>
            <PlusCircle className="mr-1.5 h-5 w-5" />
            Add New
          </Button>
        </div>
      )}
      <ul className="px-2">
        {steps.map((step, index) => (
          <StepItem
            key={name}
            {...step}
            index={index}
            last={index + 1 === steps.length}
          />
        ))}
      </ul>
    </>
  );
};

export default RecipeView;
