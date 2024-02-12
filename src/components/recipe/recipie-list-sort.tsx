import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RecipeListSortSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-fit gap-1 border-none text-muted-foreground">
        <SelectValue defaultValue="date" placeholder="Order by Date" />
      </SelectTrigger>
      <SelectContent className="w-fit">
        <SelectGroup defaultValue="date">
          <SelectItem value="date">Order by Date</SelectItem>
          <SelectItem value="name">Order by Name</SelectItem>
          <SelectItem value="rate">Order by Rate</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RecipeListSortSelect;
