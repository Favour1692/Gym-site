import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { program } from "@/constants";
import Image from "next/image";
import { Button } from "./ui/button";

const Program = () => {
  return (
    <Carousel>
      <CarouselContent>
        {program.map((data) => (
          <CarouselItem key={data.id} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent>
                <div>
                  <Image src={data.image} alt="program image" width={200} height={200}></Image>
                  <p>{data.title}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="capitalize">
                  learn more
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Program;
