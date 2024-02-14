import { Check } from "lucide-react";

interface IngredientProps {
  amount: string;
  name: string;
}

const IngredientItem = ({ amount, name }: IngredientProps) => {
  return (
    <li className="flex items-center justify-start gap-1.5 text-sm text-muted-foreground">
      <Check className="h-4 w-4 shrink-0 text-primary" />
      <span className="line-clamp-3 text-wrap">{`${amount} ${name}`}</span>
    </li>
  );
};

export default IngredientItem;
