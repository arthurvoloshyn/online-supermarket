import { Product } from "@app/core/entities/product";
import { resetAllStores } from "@app/core/repository/repository";
import { getFirstValue } from "@app/core/test/observable-test-utils";
import { isProductInCart$ } from "./is-product-in-cart";
import { addProductToCart } from "./update-product-in-cart";

const MockProduct: Product = {
  id: "1",
  category: "drink",
  name: "product",
  slug: "product",
  price: 10,
  image: "",
  description: "description",
};

describe("Is product in cart", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("returns true when the product is in the cart", () => {
    addProductToCart(MockProduct);
    expect(getFirstValue(isProductInCart$(MockProduct))).toEqual(true);
  });

  it("returns false when product is not in the cart", () => {
    expect(getFirstValue(isProductInCart$(MockProduct))).toEqual(false);
  });
});
