import { Product } from "@app/core/entities/product";

export interface CartItem {
  productId: Product["id"];
  count: number;
}
