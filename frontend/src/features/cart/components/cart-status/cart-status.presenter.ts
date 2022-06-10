import { map } from "rxjs";
import { cartItemsTotalCount$ } from "../../repository/cart.repository";

const MAX_DISPLAYABLE_NUMBER = 9;

export const cartStatusProps$ = cartItemsTotalCount$.pipe(
  map((count) => ({
    count: formatCount(count),
  }))
);

const formatCount = (count: number): string => {
  return count === 0
    ? ""
    : count <= MAX_DISPLAYABLE_NUMBER
    ? `(${count})`
    : `(${MAX_DISPLAYABLE_NUMBER}+)`;
};
