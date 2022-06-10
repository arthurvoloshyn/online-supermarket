import { CartStatus } from "@app/features/cart";
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
  CartStatus: () => <CartStatus count="9+" />,
};
