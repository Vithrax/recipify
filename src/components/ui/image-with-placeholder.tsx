"use client";

import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<typeof Image> {}

const ImageWithPlaceholder = ({ alt, src, className, ...props }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <Image
        className={cn(className, {
          "h-0": !show,
        })}
        alt={alt}
        src={src}
        onLoad={() => setShow(true)}
        {...props}
      />
      {!show && <Skeleton className="h-72 w-full" />}
    </div>
  );
};

export default ImageWithPlaceholder;
