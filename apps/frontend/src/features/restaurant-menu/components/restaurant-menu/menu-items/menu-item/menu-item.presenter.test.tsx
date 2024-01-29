import { Product } from "@app/core/entities/product";
import { setProducts } from "@app/core/repository/products.repository";
import { resetAllStores } from "@app/core/repository/repository";
import { getFirstValue } from "@app/core/test/observable-test-utils";
import { setCartItems } from "@app/features/cart/repository/cart.repository";
import { getMenuItemProps$ } from "./menu-item.presenter";

const ProductMock: Product = {
  id: "1",
  category: "pizza",
  name: "name-1",
  slug: "name-1",
  price: 1,
  image: "",
  description: "description-1",
};

describe("Menu item presenter", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("returns the view model for the product when it's not in cart", () => {
    expect(getFirstValue(getMenuItemProps$(ProductMock)))
      .toMatchInlineSnapshot(`
      Object {
        "add": [Function],
        "addTitle": "Add",
        "id": "1",
        "imageElement": <styled.div
          color="#b2226c"
        />,
        "linkElement": <Link
          to="/menu/name-1"
        />,
        "price": "1€",
        "title": "name-1",
      }
    `);
  });

  it("returns the view model for the product when it's in cart", () => {
    setProducts([ProductMock]);
    setCartItems([{ productId: ProductMock.id, count: 1 }]);
    expect(getFirstValue(getMenuItemProps$(ProductMock)))
      .toMatchInlineSnapshot(`
      Object {
        "add": [Function],
        "addTitle": "Add one more",
        "id": "1",
        "imageElement": <styled.div
          color="#b2226c"
        />,
        "linkElement": <Link
          to="/menu/name-1"
        />,
        "price": "1€",
        "title": "name-1",
      }
    `);
  });
});
