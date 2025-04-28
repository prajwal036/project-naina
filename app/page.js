import Image from "next/image";
import BackgroundImg from "/public/img/img1.jpeg";
import Restaurant from "../public/img/img9.jpeg";
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
import { BiSolidDoorOpen } from "react-icons/bi";
import { FaRegSnowflake } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { TbDiscount } from "react-icons/tb";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import Butterfly from "/components/Butterfly";
import { Button } from "../components/ui/button";
import SwiperJs from "../components/ui/swiper-js";
import TinderSwiper from "../components/ui/tinder-swiper";

export default function Home() {
  const picArray = ["/img/img2.jpeg", "/img/img3.jpeg", "/img/img4.jpeg"];
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const products = [
    {
      title: "Introduction to JSON",
      link: "https://example.com/json-guide",
      thumbnail:
        "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Understanding APIs",
      link: "https://example.com/api-tutorial",
      thumbnail:
        "https://images.pexels.com/photos/723177/pexels-photo-723177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "JavaScript Basics",
      link: "https://example.com/javascript-basics",
      thumbnail:
        "https://images.pexels.com/photos/2527556/pexels-photo-2527556.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "JavaScript Basics",
      link: "https://example.com/javascript-basics",
      thumbnail:
        "https://images.pexels.com/photos/2527556/pexels-photo-2527556.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <>
      <main className="flex h-screen justify-between flex-col bg-gray-600 text-white relative">
        <Image
          src={BackgroundImg}
          width={1080}
          height={800}
          className="absolute w-full min-h-screen  mix-blend-overlay object-top object-cover h-[90vh]"
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
      <div className=" bg-white container my-10 scroll-mt-20" id="about">
        <div className="flex lg:flex-row flex-col items-center gap-4 my-10">
          <div className="flex grow-0 flex-col justify-center gap-4 md:p-4 w-full lg:w-1/2 py-6">
            <h1 className="text-4xl font-thin">
              Welcome to Baarish & d'naina's dreamland
            </h1>
            <h2 className="text-3xl font-bold">
              Where culinary excellence meets luxurious stays in a breathtaking
              lakeside setting.
            </h2>
            <p className="text-md">
              Nestled by serene lake waters, our haven offers two extraordinary
              experiences: dine in romantic private gazebos at Baarish
              Restaurant where culinary artistry comes alive with spectacular
              views, or escape to our French-inspired cottages at d'naina's
              dreamland, where comfort meets sophistication. Each cottage
              welcomes you with modern amenities including a private kitchen,
              personal bartender, plush comfort room, and a balcony overlooking
              the shimmering lake. Whether you're celebrating a special occasion
              at our restaurant or seeking an adventure-filled getaway with
              activities like kayaking and paragliding, we've crafted our rates
              to make luxury accessible to all. Here, every moment becomes a
              cherished memory without breaking the bank – because we believe
              everyone deserves a taste of extraordinary living.
            </p>
          </div>

          <div className="w-full lg:w-1/2  py-10 px-6">
            <TinderSwiper picArray={picArray} />
          </div>
        </div>
      </div>

      {/* <AnimatedTestimonials testimonials={testimonials} /> */}

      <div
        className="flex relative flex-col items-center justify-center  px-4 gap-6 py-4 text-center bg-[#7BC9FF] md:h-[70vh] overflow-hidden"
        id="services"
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center  py-6">
          <h1 className="invisible ml-28">hello</h1>
          <h2 className="font-bold text-4xl md:text-5xl md:pb-0 pb-4">
            Our Core Priority
          </h2>
          <Button className="md:mr-20 hidden md:block">Know More</Button>
        </div>
        <div className=" w-full  container flex gap-6 text-black overflow-x-scroll overflow-y-hidden pb-4">
          <Card className=" min-w-[300px]  bg-[#A3FFD6]">
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
          <Card className="min-w-[300px] bg-[#A3FFD6]">
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
        <Button className=" md:hidden block w-full">Know More</Button>
      </div>
      <div className=" container  bg-white flex justify-center items-center relative my-20">
        <div className="flex md:flex-row flex-col justify-center items-center gap-10">
          <div className="w-full md:w-1/2 h-96 md:h-[600px] flex justify-end">
            <Image
              src={Restaurant}
              className="rounded-lg object-cover"
              width={580}
              height={580}
              alt="restaurant"
            />
          </div>
          <div className="w-[80vw] md:w-1/2 space-y-10">
            <div className=" flex flex-col gap-4">
              <div>
                <h2 className="text-3xl font-bold">Baarish Restaurant</h2>
                <h3 className="text-2xl font-semibold">
                  {" "}
                  Where Every Meal Tells a Story
                </h3>
              </div>
              <div className="w-full h-[2px] bg-black"></div>
              <p>
                Perched along the tranquil shores of the lake, Baarish
                Restaurant invites you to experience dining at its finest. Our
                signature private gazebos offer an intimate escape where you can
                savor exquisite cuisine while embracing stunning waterfront
                views. Whether you're celebrating a special occasion, planning a
                romantic evening, or seeking a memorable dining experience, our
                expert chefs and attentive staff create magic in every moment.
                From intimate birthday celebrations to elegant ring ceremonies,
                Baarish transforms ordinary moments into extraordinary memories,
                all while you dine under the stars with the gentle whispers of
                the lake as your companion.
              </p>
            </div>
            <Button>Discover More</Button>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col items-center justify-center gap-6 py-14 text-center bg-[#7BC9FF] overflow-hidden">
        <div className="container w-full flex flex-row justify-center md:justify-between items-center py-6 px-4">
          <span className="md:w-24"></span>
          <h2 className="font-bold text-4xl md:text-5xl md:pb-0 md:text-left">
            Gallery
          </h2>
          <Link
            href={"/gallery"}
            className="hidden md:block py-2 px-6 bg-black hover:bg-black/80 duration-200 text-white rounded-lg"
          >
            View More
          </Link>
        </div>
        <div className=" w-full  flex gap-6 text-black overflow-x-scroll md:pt-10 pb-10 md:pb-20">
          {/* <Card className="min-w-[350px]  bg-[#A3FFD6] ">
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
          </Card> */}
          <SwiperJs />
        </div>
      </div>
    </>
  );
}
