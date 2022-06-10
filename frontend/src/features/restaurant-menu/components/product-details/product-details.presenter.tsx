import { Product } from "@app/core/entities/Product";
import { productWithSlug$ } from "@app/core/repository/products.repository";
import { addProductToCart, removeProductFromCart } from "@app/features/cart";
import { map, Observable } from "rxjs";
import { productImageElement } from "../product-image/product-image.presenter";
import { ProductDetailsProps } from "./product-details.view";

export const productDetailsProps$ = (
  productSlug: string
): Observable<ProductDetailsProps> => {
  return productWithSlug$(productSlug).pipe(
    map(
      (maybeProduct): ProductDetailsProps => ({
        details: maybeProduct ? formatProductDetails(maybeProduct) : undefined,
        loader: {
          inProgress: false,
          error: false,
          retry: () => alert("RETRY"),
        },
      })
    )
  );
};

const formatProductDetails = (
  product: Product
): ProductDetailsProps["details"] => {
  const { name, price, description } = product;
  return {
    name,
    price: `${price}€`,
    description,
    imageElement: productImageElement(product),
    onAdd: () => addProductToCart(product),
    onRemove: () => removeProductFromCart(product),
  };
};
