"use client";

import { type User } from "next-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewRecipeSchema, type NewRecipe } from "@/server/db/schema";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props {
  user: User;
}

const NewRecipeForm = ({ user }: Props) => {
  const router = useRouter();
  const form = useForm<NewRecipe>({
    resolver: zodResolver(NewRecipeSchema),
    defaultValues: {
      cookingTime: 0,
      description: "",
      favorite: false,
      image: "",
      name: "",
      createdBy: user.id,
    },
  });

  const { mutate: addRecipe } = api.recipe.create.useMutation({
    onSuccess: () => {
      toast.success("Recipe created successfully!");
      router.push("/app/recipes");
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
            name="cookingTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cooking Time</FormLabel>
                <FormControl>
                  {/* @ts-expect-error drizzle-zod createInputSchema null conflict */}
                  <Input
                    placeholder="recipe name..."
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image link</FormLabel>
                <FormControl>
                  {/* @ts-expect-error drizzle-zod createInputSchema null conflict */}
                  <Input
                    placeholder="https://images.unsplashed.com/"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Use can use only images from unsplashed
                </FormDescription>
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
                    rows={8}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="favorite"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Favorite</FormLabel>
                  <FormDescription>
                    Mark this recipe as your favorite
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    // @ts-expect-error drizzle-zod createInputSchema null conflict
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewRecipeForm;
