import { useObservable } from "@ngneat/react-rxjs";
import { currentMenuItemsProps$ } from "./menu-items.presenter";
import { MenuItems } from "./menu-items.view";

export const MenuItemsWireframe = () => {
  const [items] = useObservable(currentMenuItemsProps$);
  return <MenuItems {...items} />;
};
