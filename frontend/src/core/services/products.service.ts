import Axios from "axios-observable";
import { delay, map, Observable, of, switchMap } from "rxjs";
import { Product } from "../entities/Product";

type ProductsRequestData = {
  products: Product[];
};

type ProductRequestData = {
  product: Product;
};

const delayed$ = of(null).pipe(delay(1000));

export const getProducts = (): Observable<Product[]> => {
  const response$ = Axios.get<ProductsRequestData>(
    "http://127.0.0.1:7000/products"
  ).pipe(map((response) => response.data.products));
  return delayed$.pipe(switchMap(() => response$));
};
