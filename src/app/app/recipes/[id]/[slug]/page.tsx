import { api } from "@/trpc/server";
import { notFound } from "next/navigation";
import { type NextPageProps } from "@/types";

const page = async ({ params }: NextPageProps) => {
  if (!params.id) {
    return notFound();
  }

  const recipe = await api.recipe.getById.query(+params.id);

  console.log(recipe);

  return <div>page</div>;
};

export default page;
