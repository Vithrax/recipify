"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const AppPreviewCarousel = () => {
  return (
    <Carousel
      className="mx-auto mt-4 w-full max-w-xs overflow-hidden rounded-lg"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <Image
              src={`/images/app_preview_${index + 1}.jpg`}
              alt="App preview in iPhone"
              width={1024}
              height={1024}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AppPreviewCarousel;
