import { makeMockCallback } from "@app/core/test/mock-callback";
import {
  ImageDrink,
  ImagePizza,
} from "@app/core/ui/components/product-image.view";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CartPage as Component } from "./cart-page.view";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const CartPage = Template.bind({});
CartPage.args = {
  itemsProps: [
    {
      key: "1",
      title: "Item 1",
      count: "10",
      price: "100,000¥",
      imageElement: <ImagePizza color="#b2226c" />,
      onAdd: makeMockCallback("on add"),
      onRemove: makeMockCallback("on remove"),
    },
    {
      key: "2",
      title: "Item 2",
      count: "20",
      price: "200,000¥",
      imageElement: <ImageDrink color="#22b26c" />,
      onAdd: makeMockCallback("on add"),
      onRemove: makeMockCallback("on remove"),
    },
  ],
  totalPrice: "300,000¥",
  onCheckout: makeMockCallback("on checkout"),
};
