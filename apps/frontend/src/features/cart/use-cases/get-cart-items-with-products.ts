import { Product } from "@app/core/entities/product";
import { getProductWithId$ } from "@app/core/repository/products.repository";
import { combineLatestAllowsEmpty } from "@app/core/utils/rxjs/combine-latest-allows-empty";
import { map, mergeMap } from "rxjs";
import { CartItem } from "../entities/cart-item";
import { cartItems$ } from "../repository/cart.repository";

export type CartItemData = { cartItem: CartItem; product: Product };

export const cartItemsWithProducts$ = cartItems$.pipe(
  mergeMap((items) =>
    combineLatestAllowsEmpty(
      items.map((cartItem) =>
        getProductWithId$(cartItem.productId).pipe(
          map((product) => ({ cartItem, product }))
        )
      )
    )
  ),
  map((items) => items.filter((item): item is CartItemData => !!item.product))
);
