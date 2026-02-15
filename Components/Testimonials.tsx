import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonial } from "@/constants";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2>Our happy clients</h2>
        <div className="flex gap-4">
          <RiDoubleQuotesL className="text-4xl md:text-5xl text-crimson" />
          <RiDoubleQuotesR className="text-4xl md:text-5xl text-crimson" />
        </div>
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonial.map((data) => (
              <CarouselItem
                key={data.id}
                className="pl-4 w-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="flex justify-center items-center h-full border-burntblue dark:border-darkblue">
                    <CardContent className="flex items-center justify-center p-2 w-full max-w-full">
                      {data.content}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 text-fog bg-burntblue font-semibold" />
          <CarouselNext className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-fog bg-burntblue font-semibold" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
