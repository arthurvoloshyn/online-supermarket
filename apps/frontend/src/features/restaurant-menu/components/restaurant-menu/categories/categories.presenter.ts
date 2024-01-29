import { ProductCategory } from "@app/core/entities/product";
import { map } from "rxjs";
import {
  currentCategory$,
  setCurrentCategory,
} from "../../../repository/menu.repository";
import { CategoriesViewProps } from "./categories.view";
import { CategoryViewProps } from "./category/category.view";

const Categories: ProductCategory[] = ["pizza", "drink", "side"];
const Translations = {
  en: { pizza: "🍕 Pizza", drink: "🍹 Drinks", side: "🍟 Sides" },
};

export const categoriesProps$ = currentCategory$.pipe(
  map(
    (currentCategory): CategoriesViewProps => ({
      categories: Categories.map(
        (id): CategoryViewProps => ({
          id,
          title: Translations.en[id],
          selected: id === currentCategory,
          onSelect: () => setCurrentCategory(id),
        })
      ),
    })
  )
);
