import {
  ProductDetailsWireframe,
  RestaurantMenuWireframe,
} from "@app/features/restaurant-menu";
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);
