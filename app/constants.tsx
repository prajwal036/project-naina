import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "SHOP",
    path: "/",
    images: false,
  },

  {
    title: "ABOUT",
    path: "/about",
    images: false,
  },
  {
    title: "CONTACT US",
    path: "/wedding-party-cups",
    image: "/public/images/can.png",
    images: false,
  },
  {
    title: "WEDDING SHOT GLASSES",
    path: "/wedding-glassware-wedding-shot-glasses",
    image: "/public/images/can.png",
    images: true,
    submenu: true,
    subMenuItems: [
      {
        title: "1.75 oz Clear Shot Glasses",
        path: "/wedding-glassware-wedding-shot-glasses/1.75-oz-clear-shot-glasses",
        image: "/images/shotglasses/w4.jpg",
      },
      {
        title: "1.75 oz Frosted Shot Glasses",
        path: "/wedding-glassware-wedding-shot-glasses/1.75-oz-frosted-shot-glasses",
        image: "/images/shotglasses/w3.jpg",
      },
      {
        title: "2 oz Mini Mason Jar Shot Glasses",
        path: "/wedding-glassware-wedding-shot-glasses/2-oz-mini-mason-jar-shot-glasses",
        image: "/images/shotglasses/w1.jpg",
      },
      {
        title: "2 oz Clear Tall Shot Glasses",
        path: "/wedding-glassware-wedding-shot-glasses/2-oz-clear-tall-shot-glasses",
        image: "/images/shotglasses/w2.jpg",
      },
      { title: "All", path: "/wedding-glassware-wedding-shot-glasses" },
    ],
  },
  {
    title: "CUSTOMIZE YOUR OWN",
    path: "/customize-your-own",
    image: "/public/images/can.png",
    images: false,
  },
  {
    title: "BLOGS",
    path: "/blog",
    image: "/public/images/can.png",
    images: false,
  },
  // {
  //   title: 'WEDDING Party Gifts',
  //   path: '/',
  //   images:false,
  // }
];
