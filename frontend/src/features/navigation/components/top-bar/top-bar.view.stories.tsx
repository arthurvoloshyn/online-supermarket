import { MockLink } from "@app/core/test/mock-link";
import { CartStatus } from "@app/features/cart/components/cart-status/cart-status.view";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TopBar as Component } from "./top-bar.view";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const TopBar = Template.bind({});
TopBar.args = {
  CartStatusComponent: () => (
    <CartStatus count="(9+)" linkToCartPage={<MockLink />} />
  ),
  LinkToRootComponent: MockLink,
};
