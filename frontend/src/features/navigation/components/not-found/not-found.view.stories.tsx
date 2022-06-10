import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotFound as Component } from "./not-found.view";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const NotFound = Template.bind({});
