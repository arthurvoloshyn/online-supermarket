import { ImagePizza } from "@app/core/ui/components/product-image.view";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProductDetails, ProductDetailsProps } from "./product-details.view";

export default {
  component: ProductDetails,
} as ComponentMeta<typeof ProductDetails>;

const Details: ProductDetailsProps["details"] = {
  name: "Name",
  price: "100$",
  description:
    "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”",
  imageElement: <ImagePizza color="pink" />,
  onAdd: () => alert("ADD"),
  addTitle: "Add",
  onRemove: undefined,
};

const LoaderInProgress: ProductDetailsProps["loader"] = {
  inProgress: true,
  error: false,
  retry: () => alert("RETRY"),
};

const LoaderError: ProductDetailsProps["loader"] = {
  inProgress: false,
  error: true,
  retry: () => alert("RETRY"),
};

const LoaderSuccess: ProductDetailsProps["loader"] = {
  inProgress: false,
  error: false,
  retry: () => alert("RETRY"),
};

const Template: ComponentStory<typeof ProductDetails> = (args) => (
  <ProductDetails {...args} />
);

export const DetailsWithSuccess = Template.bind({});
DetailsWithSuccess.args = {
  details: Details,
  loader: LoaderSuccess,
};

export const DetailsWithSuccessAndRemove = Template.bind({});
DetailsWithSuccessAndRemove.args = {
  details: {
    ...Details,
    addTitle: "Add one more",
    onRemove: () => alert("REMOVE"),
  },
  loader: LoaderSuccess,
};

export const DetailsWithFetching = Template.bind({});
DetailsWithFetching.args = {
  details: Details,
  loader: LoaderInProgress,
};

export const DetailsWithError = Template.bind({});
DetailsWithError.args = {
  details: Details,
  loader: LoaderError,
};

export const NoDetailsWithFetching = Template.bind({});
NoDetailsWithFetching.args = {
  details: undefined,
  loader: LoaderInProgress,
};

export const NoDetailsWithError = Template.bind({});
NoDetailsWithError.args = {
  details: undefined,
  loader: LoaderError,
};
