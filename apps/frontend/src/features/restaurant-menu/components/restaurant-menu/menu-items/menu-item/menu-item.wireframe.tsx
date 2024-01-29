import { Product } from "@app/core/entities/product";
import { useObservable } from "@ngneat/react-rxjs";
import { getMenuItemProps$ } from "./menu-item.presenter";
import { MenuItem } from "./menu-item.view";

export const MenuItemWireframe = ({ product }: { product: Product }) => {
  const [props] = useObservable(getMenuItemProps$(product), {
    deps: [product],
  });
  return <MenuItem {...props} />;
};
