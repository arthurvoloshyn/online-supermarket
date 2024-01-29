import { Product } from "./product";

export const makeMockProduct = (
  id: number,
  category: Product["category"] = "pizza"
): Product => ({
  id: id.toString(),
  category,
  name: `Product ${id}`,
  slug: `product-${id}`,
  price: id * 10,
  image: "",
  description: `description of product ${id}`,
});
