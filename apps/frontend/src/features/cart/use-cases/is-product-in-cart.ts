import { Product } from "@app/core/entities/product";
import { distinct, map } from "rxjs";
import { getCartItemWithProductId$ } from "../repository/cart.repository";

export const isProductInCart$ = (product: Product) =>
  getCartItemWithProductId$(product.id).pipe(
    map((p) => p != null),
    distinct()
  );
