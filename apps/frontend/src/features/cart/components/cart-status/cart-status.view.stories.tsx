import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CartStatus as Component } from "./cart-status.view";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const NoItems = Template.bind({});
NoItems.args = {
  count: "",
};

export const DefaultItems = Template.bind({});
DefaultItems.args = {
  count: "(4)",
};

export const MaxItems = Template.bind({});
MaxItems.args = {
  count: "(9+)",
};
