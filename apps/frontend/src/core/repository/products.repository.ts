import { createStore } from "@ngneat/elf";
import {
  selectEntity,
  selectEntityByPredicate,
  selectManyByPredicate,
  setEntities,
  upsertEntitiesById,
  withEntities,
} from "@ngneat/elf-entities";
import {
  excludeKeys,
  localStorageStrategy,
  persistState,
} from "@ngneat/elf-persist-state";
import {
  createRequestsStatusOperator,
  selectRequestStatus,
  updateRequestStatus,
  withRequestsStatus,
} from "@ngneat/elf-requests";
import { catchError, tap } from "rxjs";

import { Product, ProductCategory } from "../entities/product";
import { getProduct$, getProducts$ } from "../services/products.service";

const store = createStore(
  { name: "products" },
  withEntities<Product>(),
  withRequestsStatus()
);
export { store as productsStore };

persistState(store, {
  storage: localStorageStrategy,
  source: (store) => store.pipe(excludeKeys(["requestsStatus"])),
});

export const getProductsByCategory$ = (category: ProductCategory) =>
  store.pipe(selectManyByPredicate((product) => product.category === category));

export const getProductWithSlug$ = (slug: string) =>
  store.pipe(selectEntityByPredicate((p) => p.slug === slug));

export const getProductWithId$ = (id: string) => store.pipe(selectEntity(id));

const trackProductsRequestsStatus = createRequestsStatusOperator(store);

export const fetchProducts = () => {
  getProducts$()
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

export const setProducts = (products: Product[]) =>
  store.update(
    setEntities(products),
    updateRequestStatus("products", "success")
  );

export const productsRequestStatus$ = store.pipe(
  selectRequestStatus("products")
);

export const fetchProduct = (slug: Product["slug"]) => {
  getProduct$(slug)
    .pipe(
      tap(upsertProduct),
      trackProductsRequestsStatus(slug),
      catchError((err) => {
        console.warn("Fetch product error:", err);
        return "error";
      })
    )
    .subscribe();
};

const upsertProduct = (product: Product) =>
  store.update(
    upsertEntitiesById(product.id, {
      updater: (prevEntity) => ({ ...prevEntity, ...product }),
      creator: () => product,
    }),
    updateRequestStatus(product.slug, "success")
  );

export const getRequestStatusForProductWithSlug$ = (slug: Product["slug"]) =>
  store.pipe(selectRequestStatus(slug));
