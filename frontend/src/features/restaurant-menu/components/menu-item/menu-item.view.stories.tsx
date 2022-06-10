import { MockLink } from "@app/core/test/mock-link";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImagePizza } from "../product-image/product-image.view";
import { MenuItem as Component, MenuItemProps } from "./menu-item.view";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const props: MenuItemProps = {
  id: "id",
  title: "Title",
  price: "20,000¥",
  imageElement: <ImagePizza color="#b2226c" />,
  add: () => alert("on add"),
  LinkElement: <MockLink />,
};

const Template: ComponentStory<typeof Component> = (args) => (
  <div style={{ width: 320 }}>
    <Component {...args} />
  </div>
);

export const MenuItem = Template.bind({});
MenuItem.args = {
  ...props,
};

export const MenuItemHover = Template.bind({});
MenuItemHover.args = {
  ...props,
};
MenuItemHover.parameters = { pseudo: { hover: true } };
