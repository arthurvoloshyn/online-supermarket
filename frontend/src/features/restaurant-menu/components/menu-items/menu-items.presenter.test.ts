import { Product } from "@app/core/entities/Product";
import { setProducts } from "@app/core/repository/products.repository";
import { resetAllStores } from "@app/core/repository/repository";
import { getFirstValue } from "@app/core/test/observable-test-utils";
import { setCurrentCategory } from "../../repository/menu.repository";
import { getCurrentItems$ } from "./menu-items.presenter";

const Products: Product[] = [
  {
    id: "1",
    category: "pizza",
    name: "name-1",
    slug: "name-1",
    price: 1,
    image: "",
    description: "description-1",
  },
  {
    id: "2",
    category: "pizza",
    name: "name-2",
    slug: "name-2",
    price: 2,
    image: "",
    description: "description-2",
  },
  {
    id: "3",
    category: "drink",
    name: "drink-1",
    slug: "drink-1",
    price: 3,
    image: "",
    description: "description-3",
  },
];

describe("Menu items presenter", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("returns the view model with the products of the current category", () => {
    setCurrentCategory("pizza");
    setProducts(Products);
    expect(getFirstValue(getCurrentItems$)).toMatchInlineSnapshot(`
      Object {
        "items": Array [
          Object {
            "LinkElement": <Link
              to="name-1"
            />,
            "add": [Function],
            "category": "pizza",
            "id": "1",
            "imageElement": <styled.div
              color="#b2226c"
            />,
            "price": "1€",
            "title": "name-1",
          },
          Object {
            "LinkElement": <Link
              to="name-2"
            />,
            "add": [Function],
            "category": "pizza",
            "id": "2",
            "imageElement": <styled.div
              color="#b2226c"
            />,
            "price": "2€",
            "title": "name-2",
          },
        ],
        "loader": Object {
          "error": false,
          "inProgress": false,
          "retry": [Function],
        },
      }
    `);
  });
});
