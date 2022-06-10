import { Product } from "@app/core/entities/Product";
import { createStore } from "@ngneat/elf";
import {
  selectAllEntities,
  setEntities,
  upsertEntitiesById,
  withEntities,
} from "@ngneat/elf-entities";
import { localStorageStrategy, persistState } from "@ngneat/elf-persist-state";
import { map } from "rxjs";

interface CartItem {
  productId: Product["id"];
  count: number;
}

const store = createStore(
  { name: "cart" },
  withEntities<CartItem, "productId">({ idKey: "productId" })
);
persistState(store, { storage: localStorageStrategy });

export const cartItems$ = store.pipe(selectAllEntities());

export const cartItemsTotalCount$ = cartItems$.pipe(
  map((items) => items.reduce((total, item) => total + item.count, 0))
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
