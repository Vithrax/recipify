"use client";

import { type FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Trash2 } from "lucide-react";

interface Props {
  title: string;
  callback: () => void;
}

const RecipeRemoveDrawer: FC<Props> = ({ title }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div>
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Remove {title}?</DrawerTitle>
          <DrawerDescription>This action is irreversible!</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button className="mt-6" variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default RecipeRemoveDrawer;
