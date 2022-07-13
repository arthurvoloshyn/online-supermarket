import { Link } from "react-router-dom";
import { map } from "rxjs";
import { cartItemsTotalCount$ } from "../../repository/cart.repository";
import { CartStatusProps } from "./cart-status.view";

const MAX_DISPLAYABLE_NUMBER = 9;

export const cartStatusProps$ = cartItemsTotalCount$.pipe(
  map(
    (count): CartStatusProps => ({
      count: formatCount(count),
      linkToCartPage: <Link to="/cart" />,
    })
  )
);

const formatCount = (count: number): string => {
  return count === 0
    ? ""
    : count <= MAX_DISPLAYABLE_NUMBER
    ? `(${count})`
    : `(${MAX_DISPLAYABLE_NUMBER}+)`;
};
