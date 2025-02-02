import React from "react";
import Logo from "../public/BORCELLE.png";
import Image from "next/image";

import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full py-10 md:p-16 text-white bg-[#1C1678]" id="contact">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image
            src={Logo}
            width={300}
            height={300}
            quality={100}
            alt="logo"
            className="rounded-md"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg">Contact Us</h4>
          <ul className="space-y-4 mt-4">
            <li>
              <Link
                href="https://maps.app.goo.gl/AYHZ1FMyEmCgFsF3A"
                target="_blank"
                className="flex gap-2"
              >
                <IoLocationSharp className="mt-1 w-8 h-8 bg-red-500 p-2 rounded-full" />
                Naina's Dreamland, Baarish restaurant & cafe, <br />
                Tikona peth road, Near oven fresh, <br /> Near pawna dam
              </Link>
            </li>
            <li>
              <Link
                href="mailto:dreamland.naina@gmail.com"
                className="flex gap-2 items-center"
              >
                <IoIosMail className="w-8 h-8 bg-red-500 p-2 rounded-full" />
                dreamland.naina@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="tel:+918356801843"
                className="flex gap-2 items-center"
              >
                <IoCall className="w-8 h-8 bg-red-500 p-2 rounded-full" />
                +91-8356801843
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Subscribe Now</h4>
          <div className="flex">
            <input type="text" className="w-full p-4 bg-white" />
            <button className="bg-red-500 text-white px-8">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
