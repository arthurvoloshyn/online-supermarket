import { createStore, select, setProp, withProps } from "@ngneat/elf";
import { localStorageStrategy, persistState } from "@ngneat/elf-persist-state";

import { ProductCategory } from "@app/core/entities/Product";

interface MenuStore {
  currentCategory: ProductCategory;
}

const DefaultStore: MenuStore = {
  currentCategory: "pizza",
};

const store = createStore({ name: "menu" }, withProps<MenuStore>(DefaultStore));
persistState(store, { storage: localStorageStrategy });

export const currentCategory$ = store.pipe(
  select(({ currentCategory }) => currentCategory)
);

export const setCurrentCategory = (category: ProductCategory) => {
  store.update(setProp("currentCategory", category));
};
