import { MockLink } from "@app/core/test/mock-link";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SiteTitle as Component } from "./site-title.view";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const SiteTitle = Template.bind({});
SiteTitle.args = {
  LinkComponent: MockLink,
};
