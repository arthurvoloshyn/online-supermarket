import { useEffect } from "react";
import { fetchProducts } from "../../use-cases/products.use-case";
import { CategoriesWireframe } from "./categories/categories.wireframe";
import { MenuItemsWireframe } from "./menu-items/menu-items.wireframe";
import { RestaurantMenu } from "./restaurant-menu.view";

export const RestaurantMenuWireframe = () => {
  useEffect(fetchProducts, []);
  return (
    <RestaurantMenu>
      <CategoriesWireframe />
      <MenuItemsWireframe />
    </RestaurantMenu>
  );
};
