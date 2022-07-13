import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Category, CategoryViewProps } from "./category.view";

export default {
  component: Category,
} as ComponentMeta<typeof Category>;

const props: CategoryViewProps = {
  id: "id",
  title: "Category",
  selected: false,
  onSelect: () => alert("on select"),
};

const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const Selected = Template.bind({});
Selected.args = {
  ...props,
  selected: true,
};

export const NotSelected = Template.bind({});
NotSelected.args = {
  ...props,
};

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.args = {
  ...props,
};
