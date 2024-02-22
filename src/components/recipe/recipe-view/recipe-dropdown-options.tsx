"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { env } from "@/env";
import { api } from "@/trpc/react";
import { Link2, MoreVertical, PenLine, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  id: number;
}

const RecipeDropdownOptions = ({ id }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { mutate: deleteRecipe } = api.recipe.delete.useMutation();

  const handleShareClick = async () => {
    const shareLink = env.NEXT_PUBLIC_HOSTNAME_URL + pathname;
    await navigator.clipboard.writeText(shareLink);
    toast.info("Share link copied to clipboard");
  };

  const handleDeleteClick = async () => {
    deleteRecipe({ id });
    toast.success("Recipe removed.");
    router.push("/app/recipes/");
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="px-4">Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={pathname + "/edit"}>
              <PenLine className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleShareClick}>
            <Link2 className="mr-2 h-4 w-4" />
            <span>Share</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive"
            onClick={handleDeleteClick}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RecipeDropdownOptions;
