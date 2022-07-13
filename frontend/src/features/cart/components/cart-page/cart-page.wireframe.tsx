import { useObservable } from "@ngneat/react-rxjs";
import { FC } from "react";

import "./cart-page.presenter";
import { cartPageProps$ } from "./cart-page.presenter";
import { CartPage } from "./cart-page.view";
import { EmptyCartPage } from "./empty-cart-page.view";

export const CartPageWireframe: FC<{}> = () => {
  const [cartProps] = useObservable(cartPageProps$);
  return cartProps.itemsProps.length > 0 ? (
    <CartPage {...cartProps} />
  ) : (
    <EmptyCartPage />
  );
};
