"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/BORCELLE.png";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [navbarChange, setNavbarChange] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 680) {
        setNavbarChange(true);
      } else {
        setNavbarChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] text-white shadow-xl ${
          navbarChange
            ? "bg-[#1C1678] text-black animate-in fade-in-10"
            : "animate-out fade-out-20 "
        }`}
      >
        <div className="container flex justify-between items-center relative z-10">
          <Image
            src={Logo}
            width={70}
            height={70}
            quality={100}
            alt="logo"
            className="rounded-md"
          />
          <span
            onClick={() => setOpen(!open)}
            className="cursor-pointer flex md:hidden text-2xl z-20"
          >
            <IoMenu />
          </span>
          <ul
            className={`flex flex-col md:flex-row md:relative fixed inset-x-0 z-0 left-0 gap-6 text-lg ${
              navbarChange
                ? "bg-[#1C1678] md:bg-transparent"
                : "bg-black md:bg-transparent"
            } text-white  ${
              open
                ? " translate-y-40 animate-in slide-in-from-top-40"
                : "-translate-y-40 md:translate-y-0"
            } `}
          >
            <li className="p-2 hover:border-b cursor-pointer">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="p-2 hover:border-b  cursor-pointer">
              <Link className="mb-4" href={"#about"}>
                ABOUT
              </Link>
            </li>
            <li className="p-2 hover:border-b cursor-pointer ">
              <Link href={"#contact"}>CONTACT US</Link>
            </li>
            <li className="p-2 hover:border-b cursor-pointer ">
              <Link href={"#services"} className="uppercase">
                Services
              </Link>
            </li>
            {/* <li className="p-2 hover:border-b cursor-pointer border-white">
              <Link href={"/"} className="uppercase">
                Pre-Checkin
              </Link>
            </li>
            <li className="p-2 cursor-pointer">
              <Link href={"/"} className="uppercase">
                Book Now
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
