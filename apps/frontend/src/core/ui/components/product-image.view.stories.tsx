import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImageDrink, ImagePizza, ImageSide } from "./product-image.view";

export default {
  component: ImageDrink,
} as ComponentMeta<typeof ImageDrink>;

const TemplateDrink: ComponentStory<typeof ImageDrink> = (args) => (
  <ImageDrink {...args} />
);
export const Drink = TemplateDrink.bind({});
Drink.args = {
  color: "#567890",
};

const TemplatePizza: ComponentStory<typeof ImagePizza> = (args) => (
  <ImagePizza {...args} />
);
export const Pizza = TemplatePizza.bind({});
Pizza.args = {
  color: "#347a2e",
};

const TemplateSide: ComponentStory<typeof ImageSide> = (args) => (
  <ImageSide {...args} />
);
export const Side = TemplateSide.bind({});
Side.args = {
  color: "#e62f0f",
};
