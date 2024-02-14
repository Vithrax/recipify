import { type Recipe } from "@/server/db/schema";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import StepItem from "./recipe-instruction-step";
import IngredientItem from "./recipe-ingredient";
import RecipeDropdownOptions from "./recipe-dropdown-options";

interface Props {
  recipe: Recipe;
}

const RecipeView = ({ recipe }: Props) => {
  const { name, description } = recipe;
  const ingredients = [
    { amount: "400g", name: "minced beef" },
    { amount: "2", name: "buns" },
    { amount: "4-6", name: "slices of lettuce or other similar vegge" },
    { amount: "1/2", name: "onion" },
    { amount: "2 slices", name: "bacon" },
    { amount: "2 slices", name: "tomato" },
    { amount: "2 slices", name: "pickle" },
    { amount: "1 tbsp", name: "mustard" },
    { amount: "1 tbsp", name: "ketchup" },
  ];

  const steps = [
    {
      title: "Prepare Meat",
      description:
        "Unpack meat, place it in a bowl, mix well, shape into 2cm thick burgers, add salt and pepper",
    },
    {
      title: "Prepare veggies",
      description: "cut onion into rings, slice tomato and pickles",
    },
    {
      title: "Grill the meat and toast buns",
      description:
        "on a high heat above the flame, take the burgers and cook them on both sides, around 2mins on each side. Take buns and slice them into two parts, add a touch of butter and place them butter down on cooler side of a grill with slices of bacon",
    },
    {
      title: "Assemble the burger",
      description:
        "take the bottom half of the bun, add ketchup, then place onions tomato and pickles. place the burger, and bacon, add mustard and add the top half of bun",
    },
  ];

  return (
    <>
      <header>
        {recipe.image && (
          <Image
            src={recipe.image}
            alt="dish preview"
            width={2000}
            height={2000}
            className="max-h-72 object-cover"
          />
        )}
        <div className="px-2 pt-4">
          <h2 className="flex items-center justify-between text-3xl font-medium tracking-tight">
            <span className="truncate">{name}</span>{" "}
            <RecipeDropdownOptions id={recipe.id} />
          </h2>
          <p className="pr-8 leading-5 text-muted-foreground">{description}</p>
        </div>
      </header>
      <Separator className="my-5 bg-background" />
      <ul className="grid grid-cols-2 space-y-1 px-4">
        {ingredients.map((ing) => (
          <IngredientItem key={name} {...ing} />
        ))}
      </ul>
      <Separator className="my-5 bg-background" />
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
