import { ModeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { unstable_noStore as noStore } from "next/cache";
import TestToast from "@/components/test-toast";

export default async function Home() {
  noStore();

  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-2">
      <h1 className="line text-3xl font-extrabold leading-6 tracking-tight">
        T3 + Turso + Shadcn
      </h1>
      <p className="text-muted-foreground">
        Initially configured theme, vaul and toast
      </p>
      <p className="mt-12">Go ahead and test the toast!</p>
      <TestToast />
      <p className="mt-6">Now try to change color mode</p>
      <ModeToggle />
      <p className="mt-6">Finally, you can check Vaul!</p>
      <Drawer>
        <Button asChild>
          <DrawerTrigger>Vaul</DrawerTrigger>
        </Button>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
