import React from "react";
// import LayoutGrid from "../../components/ui/layout-grid";
import Image from "next/image";

const page = () => {
  const data = [
    "/img/gallery/gallery1.jpg",
    "/img/gallery/gallery2.jpg",
    "/img/gallery/gallery3.jpg",
    "/img/gallery/gallery4.jpeg",
    "/img/gallery/gallery5.jpeg",
    "/img/gallery/gallery6.jpg",
    "/img/gallery/gallery7.jpg",
    "/img/gallery/gallery8.jpg",
    "/img/gallery/gallery9.jpg",
    "/img/gallery/gallery10.jpg",
    "/img/gallery/gallery11.jpg",
    "/img/gallery/gallery12.jpg",
  ];
  return (
    <div className=" py-10 md:py-20 px-4 md:px-10">
      <h1 className="text-5xl font-semibold py-10 text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
        {data.map((item) => (
          <div className="overflow-hidden rounded-2xl">
            <Image
              key={item}
              src={item}
              width={500}
              height={600}
              className="hover:scale-105 duration-200"
              alt="Gallery image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
