import { MockLink } from "@app/core/test/mock-link";
import {
  ImageDrink,
  ImagePizza,
  ImageSide,
} from "@app/core/ui/components/product-image.view";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuItem } from "./menu-item/menu-item.view";
import { MenuItems } from "./menu-items.view";

export default {
  component: MenuItems,
} as ComponentMeta<typeof MenuItems>;

const items = [
  {
    id: "id1",
    title: "Title 1",
    price: "20,000¥",
    imageElement: <ImagePizza color="#b2226c" />,
  },
  {
    id: "id2",
    title: "Title 2",
    price: "30,000¥",
    imageElement: <ImageSide color="#3bce0e" />,
  },
  {
    id: "id3",
    title: "Title 3",
    price: "40,000¥",
    imageElement: <ImageDrink color="#2230b2" />,
  },
  {
    id: "id4",
    title: "Title 4",
    price: "50,000¥",
    imageElement: <ImagePizza color="#2290b2" />,
  },
].map((props) => (
  <MenuItem
    {...props}
    add={() => alert("on add")}
    addTitle="Add"
    linkElement={<MockLink />}
  />
));

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
