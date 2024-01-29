import { useObservable } from "@ngneat/react-rxjs";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../use-cases/products.use-case";
import { productDetailsProps$ } from "./product-details.presenter";
import { ProductDetails } from "./product-details.view";

export const ProductDetailsWireframe: FC<{}> = () => {
  const { productSlug = "" } = useParams();
  const [props] = useObservable(productDetailsProps$(productSlug));
  useEffect(() => {
    fetchProduct(productSlug);
  }, [productSlug]);
  return <ProductDetails {...props} />;
};
