import { useObservable } from "@ngneat/react-rxjs";
import { categoriesProps$ } from "./categories.presenter";
import { Categories } from "./categories.view";

export const CategoriesWireframe = () => {
  const [categories] = useObservable(categoriesProps$);
  return <Categories {...categories} />;
};
