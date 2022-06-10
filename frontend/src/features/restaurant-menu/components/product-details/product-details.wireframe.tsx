import { useObservable } from "@ngneat/react-rxjs";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { productDetailsProps$ } from "./product-details.presenter";
import { ProductDetails } from "./product-details.view";

export const ProductDetailsWireframe: FC<{}> = () => {
  const { productSlug } = useParams();
  const [props] = useObservable(productDetailsProps$(productSlug ?? ""));
  return <ProductDetails {...props} />;
};
