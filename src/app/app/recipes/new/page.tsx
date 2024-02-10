import NewRecipeForm from "@/components/recipe/new-recipe-form";

const page = () => {
  return (
    <div>
      <h2 className="p-3 text-2xl font-semibold tracking-tight">
        Create new recipe
      </h2>
      <NewRecipeForm />
    </div>
  );
};

export default page;
