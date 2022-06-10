import { createStore } from "@ngneat/elf";
import {
  selectEntityByPredicate,
  selectManyByPredicate,
  setEntities,
  withEntities,
} from "@ngneat/elf-entities";
import {
  excludeKeys,
  localStorageStrategy,
  persistState,
} from "@ngneat/elf-persist-state";
import {
  createRequestsStatusOperator,
  selectIsRequestPending,
  selectRequestStatus,
  updateRequestStatus,
  withRequestsStatus,
} from "@ngneat/elf-requests";
import { catchError, tap } from "rxjs";

import { Product, ProductCategory } from "../entities/Product";
import { getProducts } from "../services/products.service";

const store = createStore(
  { name: "products" },
  withEntities<Product>(),
  withRequestsStatus<"products">()
);
persistState(store, {
  storage: localStorageStrategy,
  source: (store) => store.pipe(excludeKeys(["requestsStatus"])),
});

const trackProductsRequestsStatus = createRequestsStatusOperator(store);
export const productsRequestPending$ = store.pipe(
  selectIsRequestPending("products")
);
export const productsRequestStatus$ = store.pipe(
  selectRequestStatus("products")
);

export const productsByCategory$ = (category: ProductCategory) =>
  store.pipe(selectManyByPredicate((product) => product.category === category));

export const productWithSlug$ = (slug: string) =>
  store.pipe(selectEntityByPredicate((p) => p.slug === slug));

export const setProducts = (products: Product[]) =>
  store.update(
    setEntities(products),
    updateRequestStatus("products", "success")
  );

export const fetchProducts = () => {
  getProducts()
    .pipe(
      tap(setProducts),
      trackProductsRequestsStatus("products"),
      catchError((err) => {
        console.warn("Products error:", err);
        return "error";
      })
    )
    .subscribe();
};
