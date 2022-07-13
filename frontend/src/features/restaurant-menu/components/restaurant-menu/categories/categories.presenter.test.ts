import { resetAllStores } from "@app/core/repository/repository";
import { getFirstValue } from "@app/core/test/observable-test-utils";
import { categoriesProps$ } from "./categories.presenter";

describe("Categories presenter", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("returns the view model with the categories", () => {
    expect(getFirstValue(categoriesProps$)).toMatchInlineSnapshot(`
      Object {
        "categories": Array [
          Object {
            "id": "pizza",
            "onSelect": [Function],
            "selected": true,
            "title": "🍕 Pizza",
          },
          Object {
            "id": "drink",
            "onSelect": [Function],
            "selected": false,
            "title": "🍹 Drinks",
          },
          Object {
            "id": "side",
            "onSelect": [Function],
            "selected": false,
            "title": "🍟 Sides",
          },
        ],
      }
    `);
  });
});
