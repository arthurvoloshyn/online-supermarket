import { makeMockProduct } from "@app/core/entities/product.mock";
import { setProducts } from "@app/core/repository/products.repository";
import { resetAllStores } from "@app/core/repository/repository";
import { getFirstValue } from "@app/core/test/observable-test-utils";
import { cartItemsWithProducts$ } from "./get-cart-items-with-products";
import { addProductToCart } from "./update-product-in-cart";

const MockProducts = [makeMockProduct(1), makeMockProduct(2)];

describe("Get cart items with products", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("returns the cart items and the products", () => {
    setProducts(MockProducts);
    addProductToCart(MockProducts[0]);
    addProductToCart(MockProducts[1]);
    expect(getFirstValue(cartItemsWithProducts$)).toMatchInlineSnapshot(`
      Array [
        Object {
          "cartItem": Object {
            "count": 1,
            "productId": "1",
          },
          "product": Object {
            "category": "pizza",
            "description": "description of product 1",
            "id": "1",
            "image": "",
            "name": "Product 1",
            "price": 10,
            "slug": "product-1",
          },
        },
        Object {
          "cartItem": Object {
            "count": 1,
            "productId": "2",
          },
          "product": Object {
            "category": "pizza",
            "description": "description of product 2",
            "id": "2",
            "image": "",
            "name": "Product 2",
            "price": 20,
            "slug": "product-2",
          },
        },
      ]
    `);
  });

  it("skips the cart items if product is not found", () => {
    setProducts([MockProducts[0]]);
    addProductToCart(MockProducts[0]);
    addProductToCart(MockProducts[1]);
    expect(getFirstValue(cartItemsWithProducts$)).toMatchInlineSnapshot(`
      Array [
        Object {
          "cartItem": Object {
            "count": 1,
            "productId": "1",
          },
          "product": Object {
            "category": "pizza",
            "description": "description of product 1",
            "id": "1",
            "image": "",
            "name": "Product 1",
            "price": 10,
            "slug": "product-1",
          },
        },
      ]
    `);
  });

  it("returns an empty array if no items were added to cart", () => {
    setProducts(MockProducts);
    expect(getFirstValue(cartItemsWithProducts$)).toEqual([]);
  });

  it("returns an empty array if all items in the cart are not resolved", () => {
    addProductToCart(MockProducts[0]);
    addProductToCart(MockProducts[1]);
    expect(getFirstValue(cartItemsWithProducts$)).toEqual([]);
  });
});
