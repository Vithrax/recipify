import NewRecipeForm from "@/components/recipe/new-recipe-form";
import { getServerAuthSession } from "@/server/auth";

const page = async () => {
  const session = (await getServerAuthSession())!;

  return (
    <div>
      <h2 className="p-3 text-2xl font-semibold tracking-tight">
        Create new recipe
      </h2>
      <NewRecipeForm user={session.user} />
    </div>
  );
};

export default page;
