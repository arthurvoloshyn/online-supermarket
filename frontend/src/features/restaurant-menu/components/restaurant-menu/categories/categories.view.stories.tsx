import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Categories as CategoriesComp,
  CategoriesViewProps,
} from "./categories.view";

export default {
  component: CategoriesComp,
} as ComponentMeta<typeof CategoriesComp>;

const props: CategoriesViewProps = {
  categories: [
    {
      id: "id-1",
      title: "Category 1",
      selected: true,
      onSelect: () => alert("on select 1"),
    },
    {
      id: "id-2",
      title: "Category 2",
      selected: false,
      onSelect: () => alert("on select 2"),
    },
    {
      id: "id-3",
      title: "Category 3",
      selected: false,
      onSelect: () => alert("on select 3"),
    },
  ],
};

const Template: ComponentStory<typeof CategoriesComp> = (args) => (
  <CategoriesComp {...args} />
);

export const Categories = Template.bind({});
Categories.args = {
  ...props,
};
