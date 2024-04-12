import Image from "next/image";
import Logo from "../public/BORCELLE (2).png";
import BackgroundImg from "../public/bg.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdOutlineExpandCircleDown } from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Butterfly from "/components/Butterfly";

export default function Home() {
  const picArray = ["/pic1.jpg", "/pic2.jpg", "/pic3.jpg"];
  return (
    <>
      <main className="flex min-h-screen justify-between flex-col bg-gray-700 text-white relative">
        <Image
          src={BackgroundImg}
          width={1280}
          height={800}
          className="fixed w-full min-h-screen z-0 mix-blend-overlay object-cover h-[90vh]"
          alt="background"
        />

        <nav className="flex justify-between items-center relative z-10 w-[90%] mx-auto">
          <Image
            src={Logo}
            width={100}
            height={100}
            quality={100}
            alt="logo"
            className="rounded-md"
          />
          <div className="flex gap-6 text-xl">
            <div className="p-2 hover:border-b cursor-pointer border-white">
              <Link href={"/"}>HOME</Link>
            </div>
            <div className="p-2 hover:border-b cursor-pointer border-white">
              <Link href={"/"}>ABOUT</Link>
            </div>
            <div className="p-2 hover:border-b cursor-pointer border-white">
              <Link href={"/"}>CONTACT US</Link>
            </div>
            <div className="p-2 hover:border-b cursor-pointer border-white">
              <Link href={"/"} className="uppercase">
                Services
              </Link>
            </div>
          </div>
          <div className="text-xl">
            <Button variant="outline" className="uppercase bg-transparent mr-4">
              Pre-Checkin
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="uppercase bg-transparent"
            >
              Book Now
            </Button>
          </div>
        </nav>
        <div className="text-center">
          <h1 className="uppercase text-5xl font-semibold relative z-10 mx-auto">
            Embark on Nature's Delight <br /> Where{" "}
            <span className="uppercase font-bold text-orange-600">
              Adventure
            </span>
            Meets <br /> Flavor!
          </h1>
        </div>
        <MdOutlineExpandCircleDown className="text-3xl font-bold mx-auto m-2 animate-bounce" />
      </main>
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="flex items-center gap-4">
          <div className="flex grow-0 flex-col justify-center gap-4 p-4 w-1/3">
            <h1 className="text-5xl font-thin">
              THE SEARCH FOR YOUR REAL NATURE <br />{" "}
              <span className="text-5xl font-bold">
                IS THE GREATEST ADVENTURE YOU CAN IMAGINE
              </span>
            </h1>
            <p className="text-lg">
              Located close to the Dunes of the National Park and 250m from
              Praia Principal, Villa Praia is one of the 7 guesthouses of the La
              Villa Group and an excellent option for admiring the exuberant
              nature of Jeri. In addition to an incredible view, with a swimming
              pool and bar, it is ideal for watching the beautiful Jericoacoara
              sunset. The Inn has 14 fully equipped accommodations, in addition
              to all the exclusive services of the La Villa Group. Luxury lies
              in the special attention given by the team to each guest, allowing
              for personalized service. Our guesthouse will exceed all your
              expectations.
            </p>
          </div>
          <div className="flex w-2/3 items-center justify-center m-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="flex flex-col w-full p-4"
            >
              <CarouselContent className="flex">
                {picArray.map((p, index) => (
                  <CarouselItem key={index} className="object-contain ">
                    <Image
                      src={p}
                      alt="carousel"
                      width={1100}
                      height={600}
                      quality={100}
                      className="object-contain bg-cover bg-center"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white flex justify-center items-center relative">
        <div className="absolute animate-bounce left-20 z-40">
          <Butterfly />
        </div>
        <div className="absolute top-10 left-32 z-40">
          <Butterfly />
        </div>
        <div className="absolute bottom-10 left-32 z-40">
          <Butterfly />
        </div>
        <div className="absolute bottom-10 right-32 z-40">
          <Butterfly />
        </div>
        <div className="absolute top-10 right-32 z-40">
          <Butterfly />
        </div>
        <div className="absolute right-20 z-40">
          <Butterfly />
        </div>
      </div>
    </>
  );
}
