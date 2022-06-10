import { Product } from "@app/core/entities/Product";
import {
  updateOrRemoveProductIdFromCart,
  upsertProductIdToCart,
} from "../repository/cart.repository";

export const addProductToCart = (product: Product) => {
  upsertProductIdToCart(product.id);
};

export const removeProductFromCart = (product: Product) => {
  updateOrRemoveProductIdFromCart(product.id);
};
