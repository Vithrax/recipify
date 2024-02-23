"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

type NextImage = React.ComponentProps<typeof Image>;

interface Props extends NextImage {
  containerClass?: string;
  zoomable?: boolean;
}

const ImageWithPlaceholder = ({
  alt,
  src,
  containerClass,
  className,
  zoomable = false,
  ...props
}: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [maximize, setMaximize] = useState<boolean>(false);

  return (
    <>
      <div className={cn("relative h-72", containerClass)}>
        <Image
          className={cn("object-cover", className, {
            "h-0": !show,
          })}
          alt={alt}
          src={src}
          fill
          onLoad={() => setShow(true)}
          onClick={() => setMaximize(true)}
          {...props}
        />
        {!show && <Skeleton className="inset-0" />}
      </div>
      {zoomable && (
        <Dialog open={maximize} onOpenChange={setMaximize}>
          <DialogContent className="h-4/5 bg-background">
            <Image className="object-contain" alt={alt} src={src} fill />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ImageWithPlaceholder;
