
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import partner1 from "@/assets/our-patners/Screenshot 2024-12-31 191340.png";
import partner2 from "@/assets/our-patners/Screenshot 2025-01-07 144920 - Copy.png";
import partner3 from "@/assets/our-patners/Screenshot 2025-01-07 144920.png";
import partner4 from "@/assets/our-patners/Screenshot 2025-01-09 190606.png";
import partner5 from "@/assets/our-patners/Screenshot 2025-01-09 190630.png";
import partner6 from "@/assets/our-patners/Screenshot 2025-01-09 190637.png";
import partner7 from "@/assets/our-patners/Screenshot 2025-01-09 190657 - Copy.png";
import partner8 from "@/assets/our-patners/Screenshot 2025-01-09 190708 - Copy.png";
import partner9 from "@/assets/our-patners/Screenshot 2025-01-09 190724 - Copy.png";


const OurClients = () => {
  const partners= [
    {
      id: 1,
      name: "Amajon",
      path: partner1
  },
    {
      id: 2,
      name: "Amajon",
      path: partner2
  },
    {
      id: 3,
      name: "Amajon",
      path: partner3
  },
    {
      id: 4,
      name: "Amajon",
      path: partner4
  },
    {
      id: 5,
      name: "Amajon",
      path: partner5
  },
    {
      id: 7,
      name: "Amajon",
      path: partner7
  },
    {
      id: 8,
      name: "Amajon",
      path: partner8
  },
    {
      id: 6,
      name: "Amajon",
      path: partner6
  },
    {
      id: 9,
      name: "Amajon",
      path: partner9
  },
]
    return (
        <div className="w-[1440] mx-auto">
          <h1 className="text-4xl font-bold text-center">Our Clients</h1>
            <Carousel
            plugins={[ Autoplay({ delay: 2000 })]}
      opts={{
        align: "start",
      }}
      className="w-full mx-auto border py-10"
    >
      <CarouselContent>
       {partners.map((item)=>{
        return (
          <CarouselItem key={item.id} className="
          basis-1/3 lg:basis-1/6">
            <img
            src={item.path}
            alt={item.name}
            className="h-9 sm:h-14 object-contain"
             />

          </CarouselItem>
        );
       })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </div>
    );
};

export default OurClients;