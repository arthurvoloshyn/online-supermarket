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

export const NormalHover = Template.bind({});
NormalHover.parameters = { pseudo: { hover: true } };
NormalHover.args = {
  ...Props,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Props,
  disabled: true,
};

export const DisabledHover = Template.bind({});
DisabledHover.parameters = { pseudo: { hover: true } };
DisabledHover.args = {
  ...Props,
  disabled: true,
};
