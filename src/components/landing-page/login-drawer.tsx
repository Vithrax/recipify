"use client";

import { type FC, type ReactNode } from "react";
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
import { Icons } from "../icons";
import { signIn } from "next-auth/react";

interface LoginDrawerProps {
  children: ReactNode;
}

const LoginDrawer: FC<LoginDrawerProps> = ({ children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Login to <span className="font-logo text-primary">Recipify</span>
          </DrawerTitle>
          <DrawerDescription>
            Create/login to account using listed providers
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="outline" onClick={() => signIn("google")}>
            <Icons.google className="mr-1.5 h-6 w-6" />
            <span className="">Continue with Google</span>
          </Button>
          <Button variant="outline" onClick={() => signIn("discord")}>
            <Icons.discord className="mr-1.5 h-6 w-6" />
            <span className="">Continue with Discord</span>
          </Button>
          <Button variant="outline" onClick={() => signIn("github")}>
            <Icons.github className="mr-1.5 h-5 w-5" />
            <span className="">Continue with Github</span>
          </Button>
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

export default LoginDrawer;
