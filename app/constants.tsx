import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "SHOP",
    path: "/",
    images: false,
  },

  {
    title: "WEDDING CAN COOLERS",
    path: "/wedding-can-coolers",
    image: "/public/images/can.png",
    submenu: true,
    images: true,
    subMenuItems: [
      {
        title: "Premium Foam Wedding Can Coolers",
        path: "/wedding-can-coolers/premium-foam-wedding-can-coolers",
        image: "/images/cancooler/can1.jpg",
      },
      {
        title: "Neoprene Wedding Can Coolers",
        path: "/wedding-can-coolers/neoprene-wedding-can-coolers",
        image: "/images/cancooler/can3.jpg",
      },
      {
        title: "Premium Foam 12 oz Slim Wedding Can Coolers",
        path: "/wedding-can-coolers/premium-foam-12-oz-slim-wedding-can-coolers",
        image: "/images/cancooler/can2.jpg",
      },
      {
        title: "Neoprene 12 oz Slim Wedding Can Coolers",
        path: "/wedding-can-coolers/neoprene-12-oz-slim-wedding-can-coolers",
        image: "/images/cancooler/can4.jpg",
      },
      { title: "View All", path: "/wedding-can-coolers" },
    ],
  },
  {
    title: "WEDDING PARTY CUPS",
    path: "/wedding-party-cups",
    image: "/public/images/can.png",
    images: true,
    submenu: true,
    subMenuItems: [
      {
        title: "12 oz Wedding Stadium Cups",
        path: "/wedding-party-cups/12-oz-wedding-stadium-cups",
        image: "/images/weddingcups/w8.jpg",
      },
      {
        title: "16 oz Wedding Stadium Cups",
        path: "/wedding-party-cups/16-oz-wedding-stadium-cups",
        image: "/images/weddingcups/w9.jpg",
      },
      {
        title: "22 oz Wedding Stadium Cups",
        path: "/wedding-party-cups/22-oz-wedding-stadium-cups",
        image: "/images/weddingcups/w10.jpg",
      },
      {
        title: "32 oz Wedding Stadium Cups",
        path: "/wedding-party-cups/32-oz-wedding-stadium-cups",
        image: "/images/weddingcups/w11.jpg",
      },
      { title: "View All", path: "/wedding-party-cups" },
    ],
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
