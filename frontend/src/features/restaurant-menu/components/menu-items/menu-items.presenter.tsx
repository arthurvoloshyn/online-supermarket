import {
  productsByCategory$,
  productsRequestStatus$,
} from "@app/core/repository/products.repository";
import { addProductToCart } from "@app/features/cart";
import { Link } from "react-router-dom";
import { combineLatest, map, switchMap } from "rxjs";
import { currentCategory$ } from "../../repository/menu.repository";
import { fetchProducts } from "../../use-cases/products.use-case";
import { productImageElement } from "../product-image/product-image.presenter";
import { MenuItemsProps } from "./menu-items.view";

export const getCurrentItems$ = currentCategory$.pipe(
  switchMap((category) =>
    combineLatest([productsByCategory$(category), productsRequestStatus$]).pipe(
      map(
        ([products, status]): MenuItemsProps => ({
          items: products.map((product) => {
            let { id, name, price, category, slug } = product;
            return {
              id,
              title: name,
              price: `${price}€`,
              category,
              imageElement: productImageElement(product),
              LinkElement: <Link to={`/menu/${slug || id}`} />,
              add: () => addProductToCart(product),
            };
          }),
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
