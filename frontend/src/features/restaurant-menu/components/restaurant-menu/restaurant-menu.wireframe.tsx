import { useObservable } from "@ngneat/react-rxjs";
import { useEffect } from "react";
import { fetchProducts } from "../../use-cases/products.use-case";
import { getCategories$ } from "../categories/categories.presenter";
import { Categories } from "../categories/categories.view";
import { getCurrentItems$ } from "../menu-items/menu-items.presenter";
import { MenuItems } from "../menu-items/menu-items.view";
import { RestaurantMenu } from "./restaurant-menu.view";

export const RestaurantMenuWireframe = () => {
  const [categories] = useObservable(getCategories$);
  const [items] = useObservable(getCurrentItems$);
  useEffect(fetchProducts, []);
  return (
    <RestaurantMenu>
      <Categories {...categories} />
      <MenuItems {...items} />
    </RestaurantMenu>
  );
};
