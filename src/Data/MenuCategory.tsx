import { SVG } from "@/assets/svg/SVG";

export type MenuGroup = {
  id: string;
  name: string;
  img: string;
  position: string;
};

export const menuGroup: MenuGroup[] = [
  {
    id: "be8a7141-be3f-41b7-b5ee-171ffe83ec2d",
    name: "Pork",
    img: SVG.pork,
    position: "left",
  },
  {
    id: "5221db61-5a2c-42b7-850e-d6769c4d0bfe",
    name: "Beef",
    img: SVG.beef,
    position: "left",
  },
  {
    id: "c764c776-833d-43bd-8056-4ce5d33a26fc",
    name: "Seafood",
    img: SVG.seafood,
    position: "left",
  },
  {
    id: "4fbeb679-91c0-48e2-8f11-65c8acd4f92d",
    name: "Vegetable",
    img: SVG.vegetable,
    position: "left",
  },
  {
    id: "e07239c9-c597-4c6b-a6cc-f2e7be742fed",
    name: "Noodle",
    img: SVG.noodle_menu,
    position: "right",
  },
  {
    id: "a7454e4e-cc23-4e45-a486-362cb7aacf0c",
    name: "Meatball",
    img: SVG.meatball_menu,
    position: "right",
  },
  {
    id: "51b7d656-db26-40e4-8fc7-19a662d1bc00",
    name: "FriedFoods",
    img: SVG.friedFoods,
    position: "right",
  },
  {
    id: "0e2362e0-5e05-41f0-87e3-d08d59e760d8",
    name: "Drinks",
    img: SVG.drinks,
    position: "right",
  },
];

export const getMenuCategory = (category: string) => {
  return menuGroup.find((id) => id.name === category) ?? ({} as MenuGroup);
};
