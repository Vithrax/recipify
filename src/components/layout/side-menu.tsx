import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu, Settings } from "lucide-react";
import { type User } from "next-auth";
import { randItem } from "@/lib/utils";
import { sideMenuGreetings } from "@/config";

interface SideMenuProps {
  user: User;
}

const SideMenu = ({ user }: SideMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full flex-col justify-between"
      >
        <SheetHeader>
          <SheetTitle className="font-logo text-primary">Recipify</SheetTitle>
          <SheetDescription>
            {randItem(sideMenuGreetings)}, {user.name?.split(" ")[0]}!
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button variant="outline" className="bottom-0">
            <Settings className="mr-1.5 h-4 w-4" />
            Account
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
