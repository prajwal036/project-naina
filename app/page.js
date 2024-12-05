import Image from "next/image";
import BackgroundImg from "../public/bg1.jpg";
import Restaurant from "../public/restaurant.jpg";
import RoomOne from "../public/room1.jpg";
import RoomTwo from "../public/room2.jpg";
import RoomThree from "../public/room3.jpg";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { MdOutlineExpandCircleDown } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { BiSolidDoorOpen } from "react-icons/bi";
import { FaRegSnowflake } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { TbDiscount } from "react-icons/tb";

import Butterfly from "/components/Butterfly";
import { Button } from "../components/ui/button";

export default function Home() {
  const picArray = ["/pic1.jpg", "/pic2.jpg", "/pic3.jpg"];
  return (
    <>
      <Navbar />
      <main className="flex h-screen justify-between flex-col bg-gray-600 text-white relative">
        <Image
          src={BackgroundImg}
          width={1280}
          height={800}
          className="absolute w-full min-h-screen  mix-blend-overlay object-cover h-[90vh]"
          alt="background"
        />
        <div className="flex items-center justify-center h-screen">
          <h1 className="uppercase text-4xl text-center font-semibold relative z-10 mx-auto">
            Embark on Nature's Delight <br /> Where{" "}
            <span className="uppercase font-bold text-orange-600">
              Adventure
            </span>
            Meets <br /> Flavor!
          </h1>
        </div>
        <MdOutlineExpandCircleDown className="text-3xl font-bold mx-auto m-2 animate-bounce" />
      </main>
      <div className=" bg-white container my-10">
        <div className="flex lg:flex-row flex-col items-center gap-4 my-10">
          <div className="flex grow-0 flex-col justify-center gap-4 p-4 w-full lg:w-[40vw] py-6">
            <h1 className="text-4xl font-thin">
              THE SEARCH FOR YOUR REAL NATURE <br />{" "}
              <span className="text-4xl font-bold">
                IS THE GREATEST ADVENTURE YOU CAN IMAGINE
              </span>
            </h1>
            <p className="text-md">
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
          <div className="flex w-full lg:w-[60vw] items-center justify-center m-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="flex flex-col w-full p-4"
            >
              <CarouselContent className="flex w-full md:w-[60vw]">
                {picArray.map((p, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full md:w-[60vw] h-72 md:h-[50vw] relative"
                  >
                    <Image
                      src={p}
                      alt="carousel"
                      fill
                      quality={100}
                      className="object-cover bg-cover bg-center rounded-2xl"
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
      <div className="flex relative flex-col items-center justify-center gap-6 py-4 text-center bg-[#7BC9FF] h-[70vh] overflow-hidden">
        <div className="w-full flex flex-col md:flex-row justify-between items-center py-6">
          <h1 className="invisible ml-28">hello</h1>
          <h2 className="font-bold text-5xl md:pb-0 pb-10">
            Our Core Priority
          </h2>
          <Button className="md:mr-20">Know More</Button>
        </div>
        <div className=" w-full  container flex gap-6 text-black overflow-x-scroll ">
          <Card className=" min-w-[300px] bg-[#A3FFD6]">
            <CardHeader>
              <CardTitle className="flex justify-center">
                <div className="w-20 h-20 bg-black rounded-2xl flex justify-center items-center">
                  <BiSolidDoorOpen className="text-white text-5xl" />
                </div>
              </CardTitle>
              <CardDescription className="text-2xl font-semibold">
                Cozy Rooms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our first priority is to give you a confortable sleep and rest
                during your lazy weekends
              </p>
            </CardContent>
          </Card>
          <Card className=" min-w-[300px] bg-[#A3FFD6]">
            <CardHeader>
              <CardTitle className="flex justify-center">
                <div className="w-20 h-20 bg-black rounded-2xl flex justify-center items-center">
                  <FaRegSnowflake className="text-white text-5xl" />
                </div>
              </CardTitle>
              <CardDescription className="text-2xl font-semibold">
                AC Rooms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Make yourself comfortable as you are staying home by adjusting
                the room temperature.
              </p>
            </CardContent>
          </Card>
          <Card className=" min-w-[300px] min-h-[265px] bg-[#A3FFD6]">
            <CardHeader>
              <CardTitle className="flex justify-center">
                <div className="w-20 h-20 bg-black rounded-2xl flex justify-center items-center">
                  <FaWifi className="text-[#A3FFD6] text-5xl" />
                </div>
              </CardTitle>
              <CardDescription className="text-2xl font-semibold">
                Free Wifi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Enjoy the blasing fast free Wifi in the midst of nature</p>
            </CardContent>
          </Card>
          <Card className="min-w-[300px] bg-[#A3FFD6]">
            <CardHeader>
              <CardTitle className="flex justify-center">
                <div className="w-20 h-20 bg-black rounded-2xl flex justify-center items-center">
                  <TbDiscount className="text-white text-5xl" />
                </div>
              </CardTitle>
              <CardDescription className="text-2xl font-semibold">
                Special Offers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                You are always welcome with our love. And we always have some
                offers to show our love.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="min-h-screen container  bg-white flex justify-center items-center relative">
        <div className="flex md:flex-row flex-col justify-center items-center gap-10">
          <div className="w-[80vw] md:w-1/2 flex justify-end">
            <Image
              src={Restaurant}
              className="rounded-lg"
              width={580}
              height={580}
              alt="restaurant"
            />
          </div>
          <div className="w-[80vw] md:w-1/2 space-y-10">
            <div className=" flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Restaurant & Lounge</h2>
              <div className="w-full h-[2px] bg-black"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nostrum, iste a voluptatem consectetur eveniet porro
                repellendus. Tempora assumenda accusantium quia obcaecati modi
                iste repudiandae reprehenderit animi, quo odio voluptatem ad
                quod. Enim provident vitae repellendus aperiam delectus autem
                deserunt, consequatur aspernatur officiis voluptatibus fuga ipsa
                perspiciatis esse voluptatum unde!
              </p>
            </div>
            <Button>Discover More</Button>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col items-center justify-center gap-6 py-14 text-center bg-[#7BC9FF] overflow-hidden">
        <div className="w-full flex flex-row justify-between items-center py-6 px-4">
          <h1 className="invisible ml-28 hidden md:block"></h1>
          <h2 className="font-bold text-2xl md:text-5xl md:pb-0 text-left">
            Our Rooms & Suites
          </h2>
          <Button className="md:mr-20">View all</Button>
        </div>
        <div className=" w-full  container flex gap-6 text-black overflow-x-scroll ">
          <Card className="min-w-[350px]  bg-[#A3FFD6] ">
            <CardHeader className="p-0 ">
              <CardTitle className="w-full flex justify-center">
                <div className="w-full h-72  flex">
                  <Image
                    src={RoomOne}
                    className="rounded-lg object-cover"
                    width={500}
                    height={400}
                    alt="single room"
                  />
                </div>
              </CardTitle>
              <CardDescription className="text-2xl font-semibold">
                Single Room
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsum ullam accusantium corrupti explicabo illum
                magni ea quis labore asperiores?
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <h3 className="font-semibold">Rs. 7000 /day</h3>
                <button className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                  Book Now
                </button>
              </div>
            </CardFooter>
          </Card>
          <Card className=" min-w-[350px] bg-[#A3FFD6] ">
            <CardHeader className="p-0 ">
              <CardTitle className="w-full flex justify-center">
                <div className="w-full h-72 flex object-contain">
                  <Image
                    src={RoomTwo}
                    className="rounded-lg bg-cover object-cover"
                    width={500}
                    height={200}
                    alt="single room"
                  />
                </div>
              </CardTitle>
              <CardDescription className="text-2xl font-semibold">
                Double Room
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsum ullam accusantium corrupti explicabo illum
                magni ea quis labore asperiores?
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <h3 className="font-semibold">Rs. 7000/day</h3>
                <button className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                  Book Now
                </button>
              </div>
            </CardFooter>
          </Card>
          <Card className=" min-w-[350px] bg-[#A3FFD6] ">
            <CardHeader className="p-0 ">
              <CardTitle className="w-full flex justify-center">
                <div className=" w-full h-72  flex">
                  <Image
                    src={RoomThree}
                    className="rounded-lg bg-cover object-cover"
                    width={500}
                    height={200}
                    alt="single room"
                  />
                </div>
              </CardTitle>
              <CardDescription className="text-2xl font-semibold">
                Delux Room
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsum ullam accusantium corrupti explicabo illum
                magni ea quis labore asperiores?
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <h3 className="font-semibold">Rs. 7000 /day</h3>
                <button className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                  Book Now
                </button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
