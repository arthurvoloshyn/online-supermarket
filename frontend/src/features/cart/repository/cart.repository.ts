import { Product } from "@app/core/entities/product";
import { getProductWithSlug$ } from "@app/core/repository/products.repository";
import { createStore } from "@ngneat/elf";
import {
  selectAllEntities,
  selectEntity,
  setEntities,
  upsertEntitiesById,
  withEntities,
} from "@ngneat/elf-entities";
import { localStorageStrategy, persistState } from "@ngneat/elf-persist-state";
import { map, of, switchMap } from "rxjs";
import { CartItem } from "../entities/cart-item";

const store = createStore(
  { name: "cart" },
  withEntities<CartItem, "productId">({ idKey: "productId" })
);
persistState(store, { storage: localStorageStrategy });

export { store as cartStore };

export const cartItems$ = store.pipe(selectAllEntities());

export const getCartItemWithProductId$ = (productId: Product["id"]) =>
  store.pipe(selectEntity(productId));

export const cartItemsTotalCount$ = cartItems$.pipe(
  map((items) => items.reduce((total, item) => total + item.count, 0))
);

export const getCartItemForProductWithSlug$ = (productSlug: Product["slug"]) =>
  getProductWithSlug$(productSlug).pipe(
    switchMap((maybeProduct) =>
      maybeProduct ? getCartItemWithProductId$(maybeProduct.id) : of(undefined)
    )
  );

export const upsertProductIdToCart = (productId: Product["id"]) => {
  store.update(
    upsertEntitiesById(productId, {
      updater: (item) => ({ ...item, count: item.count + 1 }),
      creator: (productId) => ({ productId, count: 1 }),
    })
  );
};

export const setCartItems = (items: CartItem[]) =>
  store.update(setEntities(items));

export const updateOrRemoveProductIdFromCart = (productId: Product["id"]) => {
  store.update((state) => {
    const entity = state.entities[productId];
    if (!entity) {
      return state;
    }
    if (entity.count > 1) {
      const newEntity: typeof entity = { ...entity, count: entity.count - 1 };
      return {
        ...state,
        entities: { ...state.entities, [entity.productId]: newEntity },
      };
    } else {
      const newEntities = { ...state.entities };
      Reflect.deleteProperty(newEntities, entity.productId);
      const newIds = [...state.ids];
      newIds.splice(newIds.indexOf(entity.productId), 1);
      return { ...state, entities: newEntities, ids: newIds };
    }
  });
};
