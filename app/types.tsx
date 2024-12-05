export type SideNavItem = {
  title: string;
  path: string;
  image?: string;
  images?: boolean;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};
