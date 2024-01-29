import { Product } from "@app/core/entities/product";
import { productImageElement } from "@app/core/ui/components/product-image.presenter";
import { map } from "rxjs";
import { CartItem } from "../../entities/cart-item";
import {
  CartItemData,
  cartItemsWithProducts$,
} from "../../use-cases/get-cart-items-with-products";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../use-cases/update-product-in-cart";
import { CartItemProps } from "./cart-item.view";
import { CartPageProps } from "./cart-page.view";

export const cartPageProps$ = cartItemsWithProducts$.pipe(
  map(
    (items): CartPageProps => ({
      itemsProps: items.map((item) => {
        return getCartItemProps(item.cartItem, item.product);
      }),
      totalPrice: calculateTotalPrice(items).toFixed(2) + "€",
      onCheckout: () => alert("Checkout"),
    })
  )
);

const getCartItemProps = (
  cartItem: CartItem,
  product: Product
): CartItemProps => ({
  key: cartItem.productId,
  title: product.name,
  count: cartItem.count.toString(),
  price: (product.price * cartItem.count).toFixed(2) + "€",
  imageElement: productImageElement(product),
  onAdd: () => addProductToCart(product),
  onRemove: () => removeProductFromCart(product),
});

const calculateTotalPrice = (items: CartItemData[]): number =>
  items.reduce(
    (acc, item) => acc + item.product.price * item.cartItem.count,
    0
  );
