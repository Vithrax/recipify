"use client";

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

const NewRecipeForm = () => {
  const form = useForm<NewRecipe>({
    resolver: zodResolver(NewRecipeSchema),
    defaultValues: {
      cookingTime: 0,
      description: "",
      favorite: false,
      image: "",
      name: "",
    },
  });

  const onSubmit = (values: NewRecipe) => {
    console.log(values);
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
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image link</FormLabel>
                <FormControl>
                  {/* @ts-expect-error drizzle-zod createInputSchema conflict */}
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewRecipeForm;
