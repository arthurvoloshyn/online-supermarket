import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EmptyCartPage as Component } from "./empty-cart-page.view";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const EmptyCartPage = Template.bind({});
