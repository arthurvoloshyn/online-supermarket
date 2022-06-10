import { MockLink } from "@app/core/test/mock-link";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuItemProps } from "../menu-item/menu-item.view";
import {
  ImageDrink,
  ImagePizza,
  ImageSide,
} from "../product-image/product-image.view";
import { MenuItems } from "./menu-items.view";

export default {
  component: MenuItems,
} as ComponentMeta<typeof MenuItems>;

const items: MenuItemProps[] = [
  {
    id: "id1",
    title: "Title 1",
    price: "20,000¥",
    imageElement: <ImagePizza color="#b2226c" />,
    add: () => alert("on add"),
    LinkElement: <MockLink />,
  },
  {
    id: "id2",
    title: "Title 2",
    price: "30,000¥",
    imageElement: <ImageSide color="#3bce0e" />,
    add: () => alert("on add"),
    LinkElement: <MockLink />,
  },
  {
    id: "id3",
    title: "Title 3",
    price: "40,000¥",
    imageElement: <ImageDrink color="#2230b2" />,
    add: () => alert("on add"),
    LinkElement: <MockLink />,
  },
  {
    id: "id4",
    title: "Title 4",
    price: "50,000¥",
    imageElement: <ImagePizza color="#2290b2" />,
    add: () => alert("on add"),
    LinkElement: <MockLink />,
  },
];

const Template: ComponentStory<typeof MenuItems> = (args) => (
  <MenuItems {...args} />
);

export const WithItemsAndLoaded = Template.bind({});
WithItemsAndLoaded.args = {
  items,
  loader: {
    inProgress: false,
    error: false,
    retry: () => alert("retry"),
  },
};

export const WithItemsAndUpdating = Template.bind({});
WithItemsAndUpdating.args = {
  items,
  loader: {
    inProgress: true,
    error: false,
    retry: () => alert("retry"),
  },
};

export const WithItemsAndError = Template.bind({});
WithItemsAndError.args = {
  items,
  loader: {
    inProgress: false,
    error: true,
    retry: () => alert("retry"),
  },
};

export const NoItemsAndLoading = Template.bind({});
NoItemsAndLoading.args = {
  items: [],
  loader: {
    inProgress: true,
    error: false,
    retry: () => alert("retry"),
  },
};

export const NoItemsAndError = Template.bind({});
NoItemsAndError.args = {
  items: [],
  loader: {
    inProgress: false,
    error: true,
    retry: () => alert("retry"),
  },
};
