import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HTMLProps } from "react";
import { Button as Component } from "./button";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

const Props: HTMLProps<HTMLButtonElement> = {
  onClick: () => alert("CLICK"),
  children: "Title",
};

export const Normal = Template.bind({});
Normal.args = {
  ...Props,
};

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.args = {
  ...Props,
};
