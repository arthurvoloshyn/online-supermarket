import { MockLink } from "@app/core/test/mock-link";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Logo as Component } from "./logo.view";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Logo = Template.bind({});
Logo.args = {
  LinkComponent: MockLink,
};
