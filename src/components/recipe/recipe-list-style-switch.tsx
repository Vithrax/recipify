"use client";
import { Switch } from "../ui/switch";
import { useRecipeListStore } from "@/state/recipe-list";

const RecipeListStyleSwitch = () => {
  const { minimized, setIsMinimized } = useRecipeListStore();

  return (
    <div className="flex items-center justify-center gap-2">
      <p className="text-sm text-muted-foreground">Condensed list</p>
      <Switch checked={minimized} onCheckedChange={setIsMinimized} />
    </div>
  );
};

export default RecipeListStyleSwitch;
