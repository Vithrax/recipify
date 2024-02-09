import { type ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

interface Props {
  href: string;
  title: string;
  description: string;
  children: ReactNode;
}

const DashboardCard = ({ href, children, description, title }: Props) => {
  return (
    <Link href={href}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-primary">
            {title} <LinkIcon className="h-4 w-4" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">{children}</CardContent>
      </Card>
    </Link>
  );
};

export default DashboardCard;
