"use client";

import { buttonVariants } from "@/components/ui/button";
import { UploadDropzone } from "@/lib/uploadthing";
import { api } from "@/trpc/react";
import { UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface Props {
  recipeId: number;
}

const RecipeUploadDropzone = ({ recipeId }: Props) => {
  const router = useRouter();
  const { mutate: uploadImage } = api.recipe.uploadImage.useMutation();

  return (
    <UploadDropzone
      endpoint="imageUploader"
      appearance={{
        label: "text-primary mt-0",
        container: "border-0 bg-primary/5 m-0 rounded-none",
        button: buttonVariants(),
      }}
      content={{
        label: "Upload dish picture",
        uploadIcon: <UploadCloud className="h-10 w-10 text-primary" />,
      }}
      onClientUploadComplete={async ([file]) => {
        const image = file!.url;
        uploadImage({ image, recipeId });
        toast.success("Image uploaded successfully!");
        router.refresh();
      }}
      onUploadError={(err) => toast.error(err.message)}
    />
  );
};

export default RecipeUploadDropzone;
