import { SVG } from "@/assets/svg/SVG";

export interface SideBarItemProps {
  id: number;
  name: string;
  slug: string;
  img: string;
}
export const leftMenuList = [
  { id: 0, name: "Pork", slug: "/menu/pork", img: SVG.pork },
  { id: 1, name: "Beef", slug: "/menu/beef", img: SVG.beef },
  { id: 2, name: "Seafood", slug: "/menu/seafood", img: SVG.seafood },
  { id: 3, name: "Vegetable", slug: "/menu/vegetable", img: SVG.vegetable },
];

export const rightMenuList = [
  { id: 0, name: "Noodle", slug: "/menu/noodle", img: SVG.noodle_menu },
  { id: 1, name: "Meatball", slug: "/menu/meatball", img: SVG.meatball_menu },
  { id: 2, name: "Fried Foods", slug: "/menu/friedfood", img: SVG.friedFoods },
  { id: 3, name: "Drinks", slug: "/menu/drink", img: SVG.drinks },
];

export * from "./SideBarItemLeft";
export * from "./SideBarItemRight";
