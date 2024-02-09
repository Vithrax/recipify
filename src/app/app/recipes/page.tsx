import RecipePreviewCard from "@/components/recipe-preview-card";

const Page = () => {
  return (
    <>
      <h2 className="p-3 text-3xl font-semibold tracking-tight">Recipies</h2>
      <ul className="space-y-3">
        <RecipePreviewCard />
        <RecipePreviewCard />
        <RecipePreviewCard />
      </ul>
    </>
  );
};

export default Page;
