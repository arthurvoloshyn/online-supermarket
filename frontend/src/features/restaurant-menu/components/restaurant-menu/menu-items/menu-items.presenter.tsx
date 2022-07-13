import {
  getProductsByCategory$,
  productsRequestStatus$,
} from "@app/core/repository/products.repository";
import { combineLatest, map, switchMap } from "rxjs";
import { currentCategory$ } from "../../../repository/menu.repository";
import { fetchProducts } from "../../../use-cases/products.use-case";
import { MenuItemWireframe } from "./menu-item/menu-item.wireframe";
import { MenuItemsProps } from "./menu-items.view";

export const currentMenuItemsProps$ = currentCategory$.pipe(
  switchMap((category) =>
    combineLatest([
      getProductsByCategory$(category),
      productsRequestStatus$,
    ]).pipe(
      map(
        ([products, status]): MenuItemsProps => ({
          items: products.map((product) => (
            <MenuItemWireframe key={product.id} product={product} />
          )),
          loader: {
            inProgress: status.value === "pending",
            error: status.value === "error",
            retry: fetchProducts,
          },
        })
      )
    )
  )
);
