import { useObservable } from "@ngneat/react-rxjs";
import { FC } from "react";
import { cartStatusProps$ } from "./cart-status.presenter";
import { CartStatus } from "./cart-status.view";

export const CartStatusWireframe: FC<{}> = () => {
  const [cartStatusProps] = useObservable(cartStatusProps$);
  return <CartStatus {...cartStatusProps} />;
};
