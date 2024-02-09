import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Clock, Heart, Star } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

// interface Props {
//   id: number;
//   imageRef?: string;
//   title: string;
//   description?: string;
//   cookingTime: number;
//   favorite: boolean;
// }

const RecipePreviewCard = (
  {
    //   cookingTime,
    //   favorite,
    //   id,
    //   title,
    //   description,
    //   imageRef,
  },
) => {
  return (
    <li>
      <Card className="relative overflow-hidden">
        <div className={cn("relative h-72")}>
          <Image
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dish picture"
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>Spaghetti Bolognese</CardTitle>
          <CardDescription>
            A classic italian pasta with tomato sauce with meat
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-4 bg-primary/5 p-2 pl-3">
          <div className="flex items-center justify-center gap-1">
            <Clock className="h-5 w-5 text-primary" />
            60 min
          </div>
          <Separator orientation="vertical" className="h-5" />
          <div className="flex items-center justify-center gap-1">
            <Star className="h-5 w-5 text-primary" />
            3.9
          </div>
          <Button size="icon" variant="ghost" className="ml-auto">
            <Heart className="h-5 w-5 text-primary" />
          </Button>
        </CardFooter>
      </Card>
    </li>
  );
};

export default RecipePreviewCard;
