import { cn } from "@/lib/utils";

interface StepProps {
  title: string;
  description: string;
  index: number;
  last: boolean;
}

const StepItem = ({ title, description, index, last }: StepProps) => {
  return (
    <li className="grid grid-cols-[auto,1fr] items-center justify-center gap-x-2 text-sm text-muted-foreground">
      <p className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
        {index + 1}
      </p>
      <h3 className="text-base font-medium">{title}</h3>
      <div
        className={cn("mx-auto h-full w-[2px] bg-primary/10", {
          "bg-background": last,
        })}
      />
      <p className="pb-6">{description}</p>
    </li>
  );
};

export default StepItem;
