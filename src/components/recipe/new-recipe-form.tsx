"use client";

import { type User } from "next-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewRecipeSchema, type NewRecipe } from "@/server/db/schema";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type InitialRecipe = Pick<NewRecipe, "name" | "description" | "createdBy">;

interface Props {
  user: User;
}

const NewRecipeForm = ({ user }: Props) => {
  const router = useRouter();
  const form = useForm<InitialRecipe>({
    resolver: zodResolver(NewRecipeSchema),
    defaultValues: {
      description: "",
      name: "",
      createdBy: user.id,
    },
  });

  const { mutate: addRecipe } = api.recipe.create.useMutation({
    onSuccess: ([recipe]) => {
      // if successfull then return value is 100% returned
      const { id, slug } = recipe!;
      toast.success("Recipe created successfully!");
      router.push(`/app/recipes/${id}/${slug}`);
      router.refresh();
    },
  });

  const onSubmit = (values: NewRecipe) => {
    addRecipe(values);
  };
  return (
    <div className="px-2 pt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="recipe name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  {/* @ts-expect-error drizzle-zod createInputSchema null conflict */}
                  <Textarea
                    placeholder="Describe your recipe!"
                    {...field}
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewRecipeForm;
