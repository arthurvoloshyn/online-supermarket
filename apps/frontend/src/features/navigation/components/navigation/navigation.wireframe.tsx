import { CartPageWireframe } from "@app/features/cart/components/cart-page/cart-page.wireframe";
import { ProductDetailsWireframe } from "@app/features/restaurant-menu/components/product-details/product-details.wireframe";
import { RestaurantMenuWireframe } from "@app/features/restaurant-menu/components/restaurant-menu/restaurant-menu.wireframe";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../not-found/not-found.view";
import { TopBarWireframe } from "../top-bar/top-bar.wireframe";

export const NavigationWireframe: FC<{}> = () => (
  <>
    <BrowserRouter>
      <TopBarWireframe />
      <Routes>
        <Route index element={<RestaurantMenuWireframe />} />
        <Route path="menu">
          <Route index element={<RestaurantMenuWireframe />} />
          <Route path=":productSlug" element={<ProductDetailsWireframe />} />
        </Route>
        <Route path="cart" element={<CartPageWireframe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);
