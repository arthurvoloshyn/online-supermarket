import { makeMockProduct } from "@app/core/entities/product.mock";
import { setProducts } from "@app/core/repository/products.repository";
import { resetAllStores } from "@app/core/repository/repository";
import { getFirstValue } from "@app/core/test/observable-test-utils";
import { addProductToCart } from "../../use-cases/update-product-in-cart";
import { cartPageProps$ } from "./cart-page.presenter";

const MockProducts = [makeMockProduct(1), makeMockProduct(2)];

describe("Cart page presenter", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("returns the cart page props when there are products in the cart", () => {
    setProducts(MockProducts);
    addProductToCart(MockProducts[0]);
    addProductToCart(MockProducts[1]);
    addProductToCart(MockProducts[1]);
    expect(getFirstValue(cartPageProps$)).toMatchInlineSnapshot(`
      Object {
        "itemsProps": Array [
          Object {
            "count": "1",
            "imageElement": <styled.div
              color="#b2226c"
            />,
            "key": "1",
            "onAdd": [Function],
            "onRemove": [Function],
            "price": "10.00€",
            "title": "Product 1",
          },
          Object {
            "count": "2",
            "imageElement": <styled.div
              color="#b2226c"
            />,
            "key": "2",
            "onAdd": [Function],
            "onRemove": [Function],
            "price": "40.00€",
            "title": "Product 2",
          },
        ],
        "onCheckout": [Function],
        "totalPrice": "50.00€",
      }
    `);
  });

  it("returns the cart page props when no products are added to the cart", () => {
    expect(getFirstValue(cartPageProps$)).toMatchInlineSnapshot(`
      Object {
        "itemsProps": Array [],
        "onCheckout": [Function],
        "totalPrice": "0.00€",
      }
    `);
  });
});
