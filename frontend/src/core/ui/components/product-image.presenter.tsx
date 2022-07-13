import { Product } from "@app/core/entities/product";
import { ReactElement } from "react";
import { ImageDrink, ImagePizza, ImageSide } from "./product-image.view";

const ImageMap: Record<Product["category"], typeof ImageDrink> = {
  drink: ImageDrink,
  side: ImageSide,
  pizza: ImagePizza,
};

const Colors = [
  "#b2226c",
  "#f075f0",
  "#34b8e8",
  "#26d57d",
  "#cab724",
  "#f027e7",
  "#9892ec",
  "#c16296",
  "#4d5aa7",
  "#54f9a9",
];

export const productImageElement = ({
  category,
  name,
}: Product): ReactElement => {
  const Component = ImageMap[category];
  return <Component color={getProductColor(name)} />;
};

const getProductColor = (key: string) =>
  Colors[key.charCodeAt(0) % Colors.length];
