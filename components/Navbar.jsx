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
        className={`fixed top-0 left-0 right-0 z-20 text-white shadow-xl ${
          navbarChange
            ? "bg-[#1C1678] text-black animate-in fade-in-10"
            : "animate-out fade-out-10 "
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
            className="cursor-pointer flex md:hidden text-2xl"
          >
            <IoMenu />
          </span>
          <ul
            className={`md:flex flex-col md:flex-row md:relative absolute z-0 inset-0 gap-6 text-lg  text-white  ${
              open ? " mt-20  animate-in slide-in-from-top-20 " : "hidden"
            } `}
          >
            <li className="p-2 hover:border-b cursor-pointer">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="p-2 hover:border-b  cursor-pointer">
              <Link className="mb-4" href={"/"}>
                ABOUT
              </Link>
            </li>
            <li className="p-2 hover:border-b cursor-pointer ">
              <Link href={"/"}>CONTACT US</Link>
            </li>
            <li className="p-2 hover:border-b cursor-pointer ">
              <Link href={"/"} className="uppercase">
                Services
              </Link>
            </li>
            <li className="p-2 hover:border-b cursor-pointer border-white">
              <Link href={"/"} className="uppercase">
                Pre-Checkin
              </Link>
            </li>
            <li className="p-2 cursor-pointer">
              <Link href={"/"} className="uppercase">
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
