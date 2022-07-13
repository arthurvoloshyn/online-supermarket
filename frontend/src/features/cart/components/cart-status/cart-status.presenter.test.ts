import { resetAllStores } from "@app/core/repository/repository";
import { getFirstValue } from "@app/core/test/observable-test-utils";
import { setCartItems } from "../../repository/cart.repository";
import { cartStatusProps$ } from "./cart-status.presenter";

describe("Categories presenter", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("returns expected props for 0 items", () => {
    expect(getFirstValue(cartStatusProps$)).toMatchInlineSnapshot(`
      Object {
        "count": "",
        "linkToCartPage": <Link
          to="/cart"
        />,
      }
    `);
  });

  it("returns expected props for 5 items", () => {
    setCartItems([{ productId: "1", count: 5 }]);
    expect(getFirstValue(cartStatusProps$)).toMatchInlineSnapshot(`
      Object {
        "count": "(5)",
        "linkToCartPage": <Link
          to="/cart"
        />,
      }
    `);
  });

  it("returns expected props for many items", () => {
    setCartItems([{ productId: "1", count: 100 }]);
    expect(getFirstValue(cartStatusProps$)).toMatchInlineSnapshot(`
      Object {
        "count": "(9+)",
        "linkToCartPage": <Link
          to="/cart"
        />,
      }
    `);
  });
});
