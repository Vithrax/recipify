import { getServerAuthSession } from "@/server/auth";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import NewRecipeForm from "./new-recipe-form";

const NewRecipeDrawer = async () => {
  const session = (await getServerAuthSession())!;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full" size="lg">
          Add new recipe
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create Recipe</DrawerTitle>
          <DrawerDescription>
            Add new record to your collection!
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <NewRecipeForm user={session.user} />
          <DrawerClose asChild>
            <Button className="mx-2" variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NewRecipeDrawer;
